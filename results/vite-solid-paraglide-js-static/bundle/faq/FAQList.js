import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
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
var en_shared_appname1 = () => {
	return `i18n Bench`;
};
var fr_shared_appname1 = () => {
	return `Bench i18n`;
};
var es_shared_appname1 = () => {
	return `i18n Bench`;
};
var de_shared_appname1 = () => {
	return `i18n Bench`;
};
var it_shared_appname1 = () => {
	return `i18n Bench`;
};
var pt_shared_appname1 = () => {
	return `i18n Bench`;
};
var zh_shared_appname1 = () => {
	return `i18n Bench`;
};
var ja_shared_appname1 = () => {
	return `i18n Bench`;
};
var ko_shared_appname1 = () => {
	return `i18n Bench`;
};
var ru_shared_appname1 = () => {
	return `i18n Bench`;
};
var shared_appname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_shared_appname1(inputs);
	if (locale === "fr") return fr_shared_appname1(inputs);
	if (locale === "es") return es_shared_appname1(inputs);
	if (locale === "de") return de_shared_appname1(inputs);
	if (locale === "it") return it_shared_appname1(inputs);
	if (locale === "pt") return pt_shared_appname1(inputs);
	if (locale === "zh") return zh_shared_appname1(inputs);
	if (locale === "ja") return ja_shared_appname1(inputs);
	if (locale === "ko") return ko_shared_appname1(inputs);
	return ru_shared_appname1(inputs);
});
var en_shared_sitename1 = () => {
	return `i18n Benchmark`;
};
var fr_shared_sitename1 = () => {
	return `Benchmark i18n`;
};
var es_shared_sitename1 = () => {
	return `i18n Benchmark`;
};
var de_shared_sitename1 = () => {
	return `i18n Benchmark`;
};
var it_shared_sitename1 = () => {
	return `i18n Benchmark`;
};
var pt_shared_sitename1 = () => {
	return `i18n Benchmark`;
};
var zh_shared_sitename1 = () => {
	return `i18n Benchmark`;
};
var ja_shared_sitename1 = () => {
	return `i18n Benchmark`;
};
var ko_shared_sitename1 = () => {
	return `i18n Benchmark`;
};
var ru_shared_sitename1 = () => {
	return `i18n Benchmark`;
};
var shared_sitename1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_shared_sitename1(inputs);
	if (locale === "fr") return fr_shared_sitename1(inputs);
	if (locale === "es") return es_shared_sitename1(inputs);
	if (locale === "de") return de_shared_sitename1(inputs);
	if (locale === "it") return it_shared_sitename1(inputs);
	if (locale === "pt") return pt_shared_sitename1(inputs);
	if (locale === "zh") return zh_shared_sitename1(inputs);
	if (locale === "ja") return ja_shared_sitename1(inputs);
	if (locale === "ko") return ko_shared_sitename1(inputs);
	return ru_shared_sitename1(inputs);
});
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
var en_shared_gotogithub2 = () => {
	return `Go to GitHub`;
};
var fr_shared_gotogithub2 = () => {
	return `Aller sur GitHub`;
};
var es_shared_gotogithub2 = () => {
	return `Ir a GitHub`;
};
var de_shared_gotogithub2 = () => {
	return `Zu GitHub`;
};
var it_shared_gotogithub2 = () => {
	return `Vai su GitHub`;
};
var pt_shared_gotogithub2 = () => {
	return `Ir para o GitHub`;
};
var zh_shared_gotogithub2 = () => {
	return `前往 GitHub`;
};
var ja_shared_gotogithub2 = () => {
	return `GitHubへ`;
};
var ko_shared_gotogithub2 = () => {
	return `Go to GitHub`;
};
var ru_shared_gotogithub2 = () => {
	return `Перейти на GitHub`;
};
var shared_gotogithub2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_shared_gotogithub2(inputs);
	if (locale === "fr") return fr_shared_gotogithub2(inputs);
	if (locale === "es") return es_shared_gotogithub2(inputs);
	if (locale === "de") return de_shared_gotogithub2(inputs);
	if (locale === "it") return it_shared_gotogithub2(inputs);
	if (locale === "pt") return pt_shared_gotogithub2(inputs);
	if (locale === "zh") return zh_shared_gotogithub2(inputs);
	if (locale === "ja") return ja_shared_gotogithub2(inputs);
	if (locale === "ko") return ko_shared_gotogithub2(inputs);
	return ru_shared_gotogithub2(inputs);
});
var en_header_home = () => {
	return `Home`;
};
var fr_header_home = () => {
	return `Accueil`;
};
var es_header_home = () => {
	return `Inicio`;
};
var de_header_home = () => {
	return `Home`;
};
var it_header_home = () => {
	return `Home`;
};
var pt_header_home = () => {
	return `Início`;
};
var zh_header_home = () => {
	return `首页`;
};
var ja_header_home = () => {
	return `ホーム`;
};
var ko_header_home = () => {
	return `Home`;
};
var ru_header_home = () => {
	return `Главная`;
};
var header_home = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_home(inputs);
	if (locale === "fr") return fr_header_home(inputs);
	if (locale === "es") return es_header_home(inputs);
	if (locale === "de") return de_header_home(inputs);
	if (locale === "it") return it_header_home(inputs);
	if (locale === "pt") return pt_header_home(inputs);
	if (locale === "zh") return zh_header_home(inputs);
	if (locale === "ja") return ja_header_home(inputs);
	if (locale === "ko") return ko_header_home(inputs);
	return ru_header_home(inputs);
});
var en_header_methodology = () => {
	return `Methodology`;
};
var fr_header_methodology = () => {
	return `Méthodologie`;
};
var es_header_methodology = () => {
	return `Metodología`;
};
var de_header_methodology = () => {
	return `Methodik`;
};
var it_header_methodology = () => {
	return `Metodologia`;
};
var pt_header_methodology = () => {
	return `Metodologia`;
};
var zh_header_methodology = () => {
	return `方法论`;
};
var ja_header_methodology = () => {
	return `手法`;
};
var ko_header_methodology = () => {
	return `Methodology`;
};
var ru_header_methodology = () => {
	return `Методология`;
};
var header_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_methodology(inputs);
	if (locale === "fr") return fr_header_methodology(inputs);
	if (locale === "es") return es_header_methodology(inputs);
	if (locale === "de") return de_header_methodology(inputs);
	if (locale === "it") return it_header_methodology(inputs);
	if (locale === "pt") return pt_header_methodology(inputs);
	if (locale === "zh") return zh_header_methodology(inputs);
	if (locale === "ja") return ja_header_methodology(inputs);
	if (locale === "ko") return ko_header_methodology(inputs);
	return ru_header_methodology(inputs);
});
var en_header_mockpages1 = () => {
	return `Mock Pages`;
};
var fr_header_mockpages1 = () => {
	return `Pages fictives`;
};
var es_header_mockpages1 = () => {
	return `Páginas de prueba`;
};
var de_header_mockpages1 = () => {
	return `Testseiten`;
};
var it_header_mockpages1 = () => {
	return `Pagine di test`;
};
var pt_header_mockpages1 = () => {
	return `Páginas de Teste`;
};
var zh_header_mockpages1 = () => {
	return `模拟页面`;
};
var ja_header_mockpages1 = () => {
	return `テストページ`;
};
var ko_header_mockpages1 = () => {
	return `Mock Pages`;
};
var ru_header_mockpages1 = () => {
	return `Тестовые страницы`;
};
var header_mockpages1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_mockpages1(inputs);
	if (locale === "fr") return fr_header_mockpages1(inputs);
	if (locale === "es") return es_header_mockpages1(inputs);
	if (locale === "de") return de_header_mockpages1(inputs);
	if (locale === "it") return it_header_mockpages1(inputs);
	if (locale === "pt") return pt_header_mockpages1(inputs);
	if (locale === "zh") return zh_header_mockpages1(inputs);
	if (locale === "ja") return ja_header_mockpages1(inputs);
	if (locale === "ko") return ko_header_mockpages1(inputs);
	return ru_header_mockpages1(inputs);
});
var en_header_products = () => {
	return `Products`;
};
var fr_header_products = () => {
	return `Produits`;
};
var es_header_products = () => {
	return `Productos`;
};
var de_header_products = () => {
	return `Produkte`;
};
var it_header_products = () => {
	return `Prodotti`;
};
var pt_header_products = () => {
	return `Produtos`;
};
var zh_header_products = () => {
	return `产品`;
};
var ja_header_products = () => {
	return `製品`;
};
var ko_header_products = () => {
	return `Products`;
};
var ru_header_products = () => {
	return `Продукты`;
};
var header_products = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_products(inputs);
	if (locale === "fr") return fr_header_products(inputs);
	if (locale === "es") return es_header_products(inputs);
	if (locale === "de") return de_header_products(inputs);
	if (locale === "it") return it_header_products(inputs);
	if (locale === "pt") return pt_header_products(inputs);
	if (locale === "zh") return zh_header_products(inputs);
	if (locale === "ja") return ja_header_products(inputs);
	if (locale === "ko") return ko_header_products(inputs);
	return ru_header_products(inputs);
});
var en_header_pricing = () => {
	return `Pricing`;
};
var fr_header_pricing = () => {
	return `Tarifs`;
};
var es_header_pricing = () => {
	return `Precios`;
};
var de_header_pricing = () => {
	return `Preise`;
};
var it_header_pricing = () => {
	return `Prezzi`;
};
var pt_header_pricing = () => {
	return `Preços`;
};
var zh_header_pricing = () => {
	return `价格`;
};
var ja_header_pricing = () => {
	return `価格`;
};
var ko_header_pricing = () => {
	return `Pricing`;
};
var ru_header_pricing = () => {
	return `Цены`;
};
var header_pricing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_pricing(inputs);
	if (locale === "fr") return fr_header_pricing(inputs);
	if (locale === "es") return es_header_pricing(inputs);
	if (locale === "de") return de_header_pricing(inputs);
	if (locale === "it") return it_header_pricing(inputs);
	if (locale === "pt") return pt_header_pricing(inputs);
	if (locale === "zh") return zh_header_pricing(inputs);
	if (locale === "ja") return ja_header_pricing(inputs);
	if (locale === "ko") return ko_header_pricing(inputs);
	return ru_header_pricing(inputs);
});
var en_header_team = () => {
	return `Team`;
};
var fr_header_team = () => {
	return `Équipe`;
};
var es_header_team = () => {
	return `Equipo`;
};
var de_header_team = () => {
	return `Team`;
};
var it_header_team = () => {
	return `Team`;
};
var pt_header_team = () => {
	return `Equipe`;
};
var zh_header_team = () => {
	return `团队`;
};
var ja_header_team = () => {
	return `チーム`;
};
var ko_header_team = () => {
	return `Team`;
};
var ru_header_team = () => {
	return `Команда`;
};
var header_team = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_team(inputs);
	if (locale === "fr") return fr_header_team(inputs);
	if (locale === "es") return es_header_team(inputs);
	if (locale === "de") return de_header_team(inputs);
	if (locale === "it") return it_header_team(inputs);
	if (locale === "pt") return pt_header_team(inputs);
	if (locale === "zh") return zh_header_team(inputs);
	if (locale === "ja") return ja_header_team(inputs);
	if (locale === "ko") return ko_header_team(inputs);
	return ru_header_team(inputs);
});
var en_header_blog = () => {
	return `Blog`;
};
var fr_header_blog = () => {
	return `Blog`;
};
var es_header_blog = () => {
	return `Blog`;
};
var de_header_blog = () => {
	return `Blog`;
};
var it_header_blog = () => {
	return `Blog`;
};
var pt_header_blog = () => {
	return `Blog`;
};
var zh_header_blog = () => {
	return `博客`;
};
var ja_header_blog = () => {
	return `ブログ`;
};
var ko_header_blog = () => {
	return `Blog`;
};
var ru_header_blog = () => {
	return `Блог`;
};
var header_blog = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_blog(inputs);
	if (locale === "fr") return fr_header_blog(inputs);
	if (locale === "es") return es_header_blog(inputs);
	if (locale === "de") return de_header_blog(inputs);
	if (locale === "it") return it_header_blog(inputs);
	if (locale === "pt") return pt_header_blog(inputs);
	if (locale === "zh") return zh_header_blog(inputs);
	if (locale === "ja") return ja_header_blog(inputs);
	if (locale === "ko") return ko_header_blog(inputs);
	return ru_header_blog(inputs);
});
var en_header_careers = () => {
	return `Careers`;
};
var fr_header_careers = () => {
	return `Carrières`;
};
var es_header_careers = () => {
	return `Carreras`;
};
var de_header_careers = () => {
	return `Karriere`;
};
var it_header_careers = () => {
	return `Carriere`;
};
var pt_header_careers = () => {
	return `Carreiras`;
};
var zh_header_careers = () => {
	return `招聘`;
};
var ja_header_careers = () => {
	return `採用情報`;
};
var ko_header_careers = () => {
	return `Careers`;
};
var ru_header_careers = () => {
	return `Вакансии`;
};
var header_careers = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_careers(inputs);
	if (locale === "fr") return fr_header_careers(inputs);
	if (locale === "es") return es_header_careers(inputs);
	if (locale === "de") return de_header_careers(inputs);
	if (locale === "it") return it_header_careers(inputs);
	if (locale === "pt") return pt_header_careers(inputs);
	if (locale === "zh") return zh_header_careers(inputs);
	if (locale === "ja") return ja_header_careers(inputs);
	if (locale === "ko") return ko_header_careers(inputs);
	return ru_header_careers(inputs);
});
var en_header_faq = () => {
	return `FAQ`;
};
var fr_header_faq = () => {
	return `FAQ`;
};
var es_header_faq = () => {
	return `FAQ`;
};
var de_header_faq = () => {
	return `FAQ`;
};
var it_header_faq = () => {
	return `FAQ`;
};
var pt_header_faq = () => {
	return `FAQ`;
};
var zh_header_faq = () => {
	return `常见问题`;
};
var ja_header_faq = () => {
	return `FAQ`;
};
var ko_header_faq = () => {
	return `FAQ`;
};
var ru_header_faq = () => {
	return `FAQ`;
};
var header_faq = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_faq(inputs);
	if (locale === "fr") return fr_header_faq(inputs);
	if (locale === "es") return es_header_faq(inputs);
	if (locale === "de") return de_header_faq(inputs);
	if (locale === "it") return it_header_faq(inputs);
	if (locale === "pt") return pt_header_faq(inputs);
	if (locale === "zh") return zh_header_faq(inputs);
	if (locale === "ja") return ja_header_faq(inputs);
	if (locale === "ko") return ko_header_faq(inputs);
	return ru_header_faq(inputs);
});
var en_header_contact = () => {
	return `Contact`;
};
var fr_header_contact = () => {
	return `Contact`;
};
var es_header_contact = () => {
	return `Contacto`;
};
var de_header_contact = () => {
	return `Kontakt`;
};
var it_header_contact = () => {
	return `Contatti`;
};
var pt_header_contact = () => {
	return `Contato`;
};
var zh_header_contact = () => {
	return `联系我们`;
};
var ja_header_contact = () => {
	return `お問い合わせ`;
};
var ko_header_contact = () => {
	return `Contact`;
};
var ru_header_contact = () => {
	return `Контакт`;
};
var header_contact = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_contact(inputs);
	if (locale === "fr") return fr_header_contact(inputs);
	if (locale === "es") return es_header_contact(inputs);
	if (locale === "de") return de_header_contact(inputs);
	if (locale === "it") return it_header_contact(inputs);
	if (locale === "pt") return pt_header_contact(inputs);
	if (locale === "zh") return zh_header_contact(inputs);
	if (locale === "ja") return ja_header_contact(inputs);
	if (locale === "ko") return ko_header_contact(inputs);
	return ru_header_contact(inputs);
});
var en_header_settings = () => {
	return `Settings`;
};
var fr_header_settings = () => {
	return `Paramètres`;
};
var es_header_settings = () => {
	return `Ajustes`;
};
var de_header_settings = () => {
	return `Einstellungen`;
};
var it_header_settings = () => {
	return `Impostazioni`;
};
var pt_header_settings = () => {
	return `Configurações`;
};
var zh_header_settings = () => {
	return `设置`;
};
var ja_header_settings = () => {
	return `設定`;
};
var ko_header_settings = () => {
	return `Settings`;
};
var ru_header_settings = () => {
	return `Настройки`;
};
var header_settings = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_settings(inputs);
	if (locale === "fr") return fr_header_settings(inputs);
	if (locale === "es") return es_header_settings(inputs);
	if (locale === "de") return de_header_settings(inputs);
	if (locale === "it") return it_header_settings(inputs);
	if (locale === "pt") return pt_header_settings(inputs);
	if (locale === "zh") return zh_header_settings(inputs);
	if (locale === "ja") return ja_header_settings(inputs);
	if (locale === "ko") return ko_header_settings(inputs);
	return ru_header_settings(inputs);
});
var en_footer_title = () => {
	return `i18n Benchmark`;
};
var fr_footer_title = () => {
	return `Benchmark i18n`;
};
var es_footer_title = () => {
	return `i18n Benchmark`;
};
var de_footer_title = () => {
	return `i18n Benchmark`;
};
var it_footer_title = () => {
	return `i18n Benchmark`;
};
var pt_footer_title = () => {
	return `i18n Benchmark`;
};
var zh_footer_title = () => {
	return `i18n Benchmark`;
};
var ja_footer_title = () => {
	return `i18n Benchmark`;
};
var ko_footer_title = () => {
	return `i18n Benchmark`;
};
var ru_footer_title = () => {
	return `i18n Benchmark`;
};
var footer_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_title(inputs);
	if (locale === "fr") return fr_footer_title(inputs);
	if (locale === "es") return es_footer_title(inputs);
	if (locale === "de") return de_footer_title(inputs);
	if (locale === "it") return it_footer_title(inputs);
	if (locale === "pt") return pt_footer_title(inputs);
	if (locale === "zh") return zh_footer_title(inputs);
	if (locale === "ja") return ja_footer_title(inputs);
	if (locale === "ko") return ko_footer_title(inputs);
	return ru_footer_title(inputs);
});
var en_footer_description = () => {
	return `An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.`;
};
var fr_footer_description = () => {
	return `Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.`;
};
var es_footer_description = () => {
	return `Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.`;
};
var de_footer_description = () => {
	return `Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.`;
};
var it_footer_description = () => {
	return `Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.`;
};
var pt_footer_description = () => {
	return `Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.`;
};
var zh_footer_description = () => {
	return `一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。`;
};
var ja_footer_description = () => {
	return `国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。`;
};
var ko_footer_description = () => {
	return `An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.`;
};
var ru_footer_description = () => {
	return `Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.`;
};
var footer_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_description(inputs);
	if (locale === "fr") return fr_footer_description(inputs);
	if (locale === "es") return es_footer_description(inputs);
	if (locale === "de") return de_footer_description(inputs);
	if (locale === "it") return it_footer_description(inputs);
	if (locale === "pt") return pt_footer_description(inputs);
	if (locale === "zh") return zh_footer_description(inputs);
	if (locale === "ja") return ja_footer_description(inputs);
	if (locale === "ko") return ko_footer_description(inputs);
	return ru_footer_description(inputs);
});
var en_footer_resources = () => {
	return `Resources`;
};
var fr_footer_resources = () => {
	return `Ressources`;
};
var es_footer_resources = () => {
	return `Recursos`;
};
var de_footer_resources = () => {
	return `Ressourcen`;
};
var it_footer_resources = () => {
	return `Risorse`;
};
var pt_footer_resources = () => {
	return `Recursos`;
};
var zh_footer_resources = () => {
	return `资源`;
};
var ja_footer_resources = () => {
	return `リソース`;
};
var ko_footer_resources = () => {
	return `Resources`;
};
var ru_footer_resources = () => {
	return `Ресурсы`;
};
var footer_resources = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_resources(inputs);
	if (locale === "fr") return fr_footer_resources(inputs);
	if (locale === "es") return es_footer_resources(inputs);
	if (locale === "de") return de_footer_resources(inputs);
	if (locale === "it") return it_footer_resources(inputs);
	if (locale === "pt") return pt_footer_resources(inputs);
	if (locale === "zh") return zh_footer_resources(inputs);
	if (locale === "ja") return ja_footer_resources(inputs);
	if (locale === "ko") return ko_footer_resources(inputs);
	return ru_footer_resources(inputs);
});
var en_footer_github = () => {
	return `GitHub`;
};
var fr_footer_github = () => {
	return `GitHub`;
};
var es_footer_github = () => {
	return `GitHub`;
};
var de_footer_github = () => {
	return `GitHub`;
};
var it_footer_github = () => {
	return `GitHub`;
};
var pt_footer_github = () => {
	return `GitHub`;
};
var zh_footer_github = () => {
	return `GitHub`;
};
var ja_footer_github = () => {
	return `GitHub`;
};
var ko_footer_github = () => {
	return `GitHub`;
};
var ru_footer_github = () => {
	return `GitHub`;
};
var footer_github = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_github(inputs);
	if (locale === "fr") return fr_footer_github(inputs);
	if (locale === "es") return es_footer_github(inputs);
	if (locale === "de") return de_footer_github(inputs);
	if (locale === "it") return it_footer_github(inputs);
	if (locale === "pt") return pt_footer_github(inputs);
	if (locale === "zh") return zh_footer_github(inputs);
	if (locale === "ja") return ja_footer_github(inputs);
	if (locale === "ko") return ko_footer_github(inputs);
	return ru_footer_github(inputs);
});
var en_footer_methodology = () => {
	return `Methodology`;
};
var fr_footer_methodology = () => {
	return `Méthodologie`;
};
var es_footer_methodology = () => {
	return `Metodología`;
};
var de_footer_methodology = () => {
	return `Methodik`;
};
var it_footer_methodology = () => {
	return `Metodologia`;
};
var pt_footer_methodology = () => {
	return `Metodologia`;
};
var zh_footer_methodology = () => {
	return `方法论`;
};
var ja_footer_methodology = () => {
	return `手法`;
};
var ko_footer_methodology = () => {
	return `Methodology`;
};
var ru_footer_methodology = () => {
	return `Методология`;
};
var footer_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_methodology(inputs);
	if (locale === "fr") return fr_footer_methodology(inputs);
	if (locale === "es") return es_footer_methodology(inputs);
	if (locale === "de") return de_footer_methodology(inputs);
	if (locale === "it") return it_footer_methodology(inputs);
	if (locale === "pt") return pt_footer_methodology(inputs);
	if (locale === "zh") return zh_footer_methodology(inputs);
	if (locale === "ja") return ja_footer_methodology(inputs);
	if (locale === "ko") return ko_footer_methodology(inputs);
	return ru_footer_methodology(inputs);
});
var en_footer_contributing = () => {
	return `Contributing`;
};
var fr_footer_contributing = () => {
	return `Contribuer`;
};
var es_footer_contributing = () => {
	return `Contribuir`;
};
var de_footer_contributing = () => {
	return `Beitragen`;
};
var it_footer_contributing = () => {
	return `Contribuire`;
};
var pt_footer_contributing = () => {
	return `Contribuindo`;
};
var zh_footer_contributing = () => {
	return `贡献`;
};
var ja_footer_contributing = () => {
	return `貢献する`;
};
var ko_footer_contributing = () => {
	return `Contributing`;
};
var ru_footer_contributing = () => {
	return `Участие в проекте`;
};
var footer_contributing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_contributing(inputs);
	if (locale === "fr") return fr_footer_contributing(inputs);
	if (locale === "es") return es_footer_contributing(inputs);
	if (locale === "de") return de_footer_contributing(inputs);
	if (locale === "it") return it_footer_contributing(inputs);
	if (locale === "pt") return pt_footer_contributing(inputs);
	if (locale === "zh") return zh_footer_contributing(inputs);
	if (locale === "ja") return ja_footer_contributing(inputs);
	if (locale === "ko") return ko_footer_contributing(inputs);
	return ru_footer_contributing(inputs);
});
var en_footer_contact = () => {
	return `Contact`;
};
var fr_footer_contact = () => {
	return `Contact`;
};
var es_footer_contact = () => {
	return `Contacto`;
};
var de_footer_contact = () => {
	return `Kontakt`;
};
var it_footer_contact = () => {
	return `Contatti`;
};
var pt_footer_contact = () => {
	return `Contato`;
};
var zh_footer_contact = () => {
	return `联系我们`;
};
var ja_footer_contact = () => {
	return `お問い合わせ`;
};
var ko_footer_contact = () => {
	return `Contact`;
};
var ru_footer_contact = () => {
	return `Контакт`;
};
var footer_contact = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_contact(inputs);
	if (locale === "fr") return fr_footer_contact(inputs);
	if (locale === "es") return es_footer_contact(inputs);
	if (locale === "de") return de_footer_contact(inputs);
	if (locale === "it") return it_footer_contact(inputs);
	if (locale === "pt") return pt_footer_contact(inputs);
	if (locale === "zh") return zh_footer_contact(inputs);
	if (locale === "ja") return ja_footer_contact(inputs);
	if (locale === "ko") return ko_footer_contact(inputs);
	return ru_footer_contact(inputs);
});
var en_footer_builtwith1 = () => {
	return `i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.`;
};
var fr_footer_builtwith1 = () => {
	return `Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.`;
};
var es_footer_builtwith1 = () => {
	return `i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.`;
};
var de_footer_builtwith1 = () => {
	return `i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.`;
};
var it_footer_builtwith1 = () => {
	return `i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.`;
};
var pt_footer_builtwith1 = () => {
	return `i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.`;
};
var zh_footer_builtwith1 = () => {
	return `i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。`;
};
var ja_footer_builtwith1 = () => {
	return `i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。`;
};
var ko_footer_builtwith1 = () => {
	return `i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.`;
};
var ru_footer_builtwith1 = () => {
	return `i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.`;
};
var footer_builtwith1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_footer_builtwith1(inputs);
	if (locale === "fr") return fr_footer_builtwith1(inputs);
	if (locale === "es") return es_footer_builtwith1(inputs);
	if (locale === "de") return de_footer_builtwith1(inputs);
	if (locale === "it") return it_footer_builtwith1(inputs);
	if (locale === "pt") return pt_footer_builtwith1(inputs);
	if (locale === "zh") return zh_footer_builtwith1(inputs);
	if (locale === "ja") return ja_footer_builtwith1(inputs);
	if (locale === "ko") return ko_footer_builtwith1(inputs);
	return ru_footer_builtwith1(inputs);
});
var en_themetoggle_auto1 = () => {
	return `Theme: Auto`;
};
var fr_themetoggle_auto1 = () => {
	return `Thème : automatique`;
};
var es_themetoggle_auto1 = () => {
	return `Tema: Auto`;
};
var de_themetoggle_auto1 = () => {
	return `Thema: Auto`;
};
var it_themetoggle_auto1 = () => {
	return `Tema: Auto`;
};
var pt_themetoggle_auto1 = () => {
	return `Tema: Automático`;
};
var zh_themetoggle_auto1 = () => {
	return `主题：自动`;
};
var ja_themetoggle_auto1 = () => {
	return `テーマ：自動`;
};
var ko_themetoggle_auto1 = () => {
	return `Theme: Auto`;
};
var ru_themetoggle_auto1 = () => {
	return `Тема: Авто`;
};
var themetoggle_auto1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_themetoggle_auto1(inputs);
	if (locale === "fr") return fr_themetoggle_auto1(inputs);
	if (locale === "es") return es_themetoggle_auto1(inputs);
	if (locale === "de") return de_themetoggle_auto1(inputs);
	if (locale === "it") return it_themetoggle_auto1(inputs);
	if (locale === "pt") return pt_themetoggle_auto1(inputs);
	if (locale === "zh") return zh_themetoggle_auto1(inputs);
	if (locale === "ja") return ja_themetoggle_auto1(inputs);
	if (locale === "ko") return ko_themetoggle_auto1(inputs);
	return ru_themetoggle_auto1(inputs);
});
var en_themetoggle_dark1 = () => {
	return `Theme: Dark`;
};
var fr_themetoggle_dark1 = () => {
	return `Thème : sombre`;
};
var es_themetoggle_dark1 = () => {
	return `Tema: Oscuro`;
};
var de_themetoggle_dark1 = () => {
	return `Thema: Dunkel`;
};
var it_themetoggle_dark1 = () => {
	return `Tema: Scuro`;
};
var pt_themetoggle_dark1 = () => {
	return `Tema: Escuro`;
};
var zh_themetoggle_dark1 = () => {
	return `主题：深色`;
};
var ja_themetoggle_dark1 = () => {
	return `テーマ：ダーク`;
};
var ko_themetoggle_dark1 = () => {
	return `Theme: Dark`;
};
var ru_themetoggle_dark1 = () => {
	return `Тема: Темная`;
};
var themetoggle_dark1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_themetoggle_dark1(inputs);
	if (locale === "fr") return fr_themetoggle_dark1(inputs);
	if (locale === "es") return es_themetoggle_dark1(inputs);
	if (locale === "de") return de_themetoggle_dark1(inputs);
	if (locale === "it") return it_themetoggle_dark1(inputs);
	if (locale === "pt") return pt_themetoggle_dark1(inputs);
	if (locale === "zh") return zh_themetoggle_dark1(inputs);
	if (locale === "ja") return ja_themetoggle_dark1(inputs);
	if (locale === "ko") return ko_themetoggle_dark1(inputs);
	return ru_themetoggle_dark1(inputs);
});
var en_themetoggle_light1 = () => {
	return `Theme: Light`;
};
var fr_themetoggle_light1 = () => {
	return `Thème : clair`;
};
var es_themetoggle_light1 = () => {
	return `Tema: Claro`;
};
var de_themetoggle_light1 = () => {
	return `Thema: Hell`;
};
var it_themetoggle_light1 = () => {
	return `Tema: Chiaro`;
};
var pt_themetoggle_light1 = () => {
	return `Tema: Claro`;
};
var zh_themetoggle_light1 = () => {
	return `主题：浅色`;
};
var ja_themetoggle_light1 = () => {
	return `テーマ：ライト`;
};
var ko_themetoggle_light1 = () => {
	return `Theme: Light`;
};
var ru_themetoggle_light1 = () => {
	return `Тема: Светлая`;
};
var themetoggle_light1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_themetoggle_light1(inputs);
	if (locale === "fr") return fr_themetoggle_light1(inputs);
	if (locale === "es") return es_themetoggle_light1(inputs);
	if (locale === "de") return de_themetoggle_light1(inputs);
	if (locale === "it") return it_themetoggle_light1(inputs);
	if (locale === "pt") return pt_themetoggle_light1(inputs);
	if (locale === "zh") return zh_themetoggle_light1(inputs);
	if (locale === "ja") return ja_themetoggle_light1(inputs);
	if (locale === "ko") return ko_themetoggle_light1(inputs);
	return ru_themetoggle_light1(inputs);
});
var en_themetoggle_labelauto2 = () => {
	return `Theme mode: auto (system). Click to switch to light mode.`;
};
var fr_themetoggle_labelauto2 = () => {
	return `Mode thème : automatique (système). Cliquez pour passer en mode clair.`;
};
var es_themetoggle_labelauto2 = () => {
	return `Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.`;
};
var de_themetoggle_labelauto2 = () => {
	return `Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.`;
};
var it_themetoggle_labelauto2 = () => {
	return `Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.`;
};
var pt_themetoggle_labelauto2 = () => {
	return `Modo de tema: auto (sistema). Clique para mudar para o modo claro.`;
};
var zh_themetoggle_labelauto2 = () => {
	return `主题模式：自动（系统）。点击切换到浅色模式。`;
};
var ja_themetoggle_labelauto2 = () => {
	return `テーマモード：自動（システム）。クリックするとライトモードに切り替わります。`;
};
var ko_themetoggle_labelauto2 = () => {
	return `Theme mode: auto (system). Click to switch to light mode.`;
};
var ru_themetoggle_labelauto2 = () => {
	return `Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.`;
};
var themetoggle_labelauto2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_themetoggle_labelauto2(inputs);
	if (locale === "fr") return fr_themetoggle_labelauto2(inputs);
	if (locale === "es") return es_themetoggle_labelauto2(inputs);
	if (locale === "de") return de_themetoggle_labelauto2(inputs);
	if (locale === "it") return it_themetoggle_labelauto2(inputs);
	if (locale === "pt") return pt_themetoggle_labelauto2(inputs);
	if (locale === "zh") return zh_themetoggle_labelauto2(inputs);
	if (locale === "ja") return ja_themetoggle_labelauto2(inputs);
	if (locale === "ko") return ko_themetoggle_labelauto2(inputs);
	return ru_themetoggle_labelauto2(inputs);
});
var en_themetoggle_labelother2 = (i) => {
	return `Theme mode: ${i?.mode}. Click to switch mode.`;
};
var fr_themetoggle_labelother2 = (i) => {
	return `Mode thème : ${i?.mode}. Cliquez pour changer de mode.`;
};
var es_themetoggle_labelother2 = (i) => {
	return `Modo de tema: ${i?.mode}. Haz clic para cambiar de modo.`;
};
var de_themetoggle_labelother2 = (i) => {
	return `Themenmodus: ${i?.mode}. Klicken Sie hier, um den Modus zu wechseln.`;
};
var it_themetoggle_labelother2 = (i) => {
	return `Modalità tema: ${i?.mode}. Clicca per cambiare modalità.`;
};
var pt_themetoggle_labelother2 = (i) => {
	return `Modo de tema: ${i?.mode}. Clique para mudar de modo.`;
};
var zh_themetoggle_labelother2 = (i) => {
	return `主题模式：${i?.mode}。点击切换模式。`;
};
var ja_themetoggle_labelother2 = (i) => {
	return `テーマモード：${i?.mode}。クリックしてモードを切り替えます。`;
};
var ko_themetoggle_labelother2 = (i) => {
	return `Theme mode: ${i?.mode}. Click to switch mode.`;
};
var ru_themetoggle_labelother2 = (i) => {
	return `Режим темы: ${i?.mode}. Нажмите, чтобы сменить режим.`;
};
var themetoggle_labelother2 = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_themetoggle_labelother2(inputs);
	if (locale === "fr") return fr_themetoggle_labelother2(inputs);
	if (locale === "es") return es_themetoggle_labelother2(inputs);
	if (locale === "de") return de_themetoggle_labelother2(inputs);
	if (locale === "it") return it_themetoggle_labelother2(inputs);
	if (locale === "pt") return pt_themetoggle_labelother2(inputs);
	if (locale === "zh") return zh_themetoggle_labelother2(inputs);
	if (locale === "ja") return ja_themetoggle_labelother2(inputs);
	if (locale === "ko") return ko_themetoggle_labelother2(inputs);
	return ru_themetoggle_labelother2(inputs);
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
var en_home_hero_title = () => {
	return `i18n Benchmark`;
};
var fr_home_hero_title = () => {
	return `Benchmark i18n`;
};
var es_home_hero_title = () => {
	return `i18n Benchmark`;
};
var de_home_hero_title = () => {
	return `i18n Benchmark`;
};
var it_home_hero_title = () => {
	return `i18n Benchmark`;
};
var pt_home_hero_title = () => {
	return `i18n Benchmark`;
};
var zh_home_hero_title = () => {
	return `i18n Benchmark`;
};
var ja_home_hero_title = () => {
	return `i18n Benchmark`;
};
var ko_home_hero_title = () => {
	return `i18n Benchmark`;
};
var ru_home_hero_title = () => {
	return `i18n Benchmark`;
};
var home_hero_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_hero_title(inputs);
	if (locale === "fr") return fr_home_hero_title(inputs);
	if (locale === "es") return es_home_hero_title(inputs);
	if (locale === "de") return de_home_hero_title(inputs);
	if (locale === "it") return it_home_hero_title(inputs);
	if (locale === "pt") return pt_home_hero_title(inputs);
	if (locale === "zh") return zh_home_hero_title(inputs);
	if (locale === "ja") return ja_home_hero_title(inputs);
	if (locale === "ko") return ko_home_hero_title(inputs);
	return ru_home_hero_title(inputs);
});
var en_home_hero_description = () => {
	return `A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.`;
};
var fr_home_hero_description = () => {
	return `Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.`;
};
var es_home_hero_description = () => {
	return `Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.`;
};
var de_home_hero_description = () => {
	return `Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.`;
};
var it_home_hero_description = () => {
	return `Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.`;
};
var pt_home_hero_description = () => {
	return `Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.`;
};
var zh_home_hero_description = () => {
	return `一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。`;
};
var ja_home_hero_description = () => {
	return `国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。`;
};
var ko_home_hero_description = () => {
	return `A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.`;
};
var ru_home_hero_description = () => {
	return `Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.`;
};
var home_hero_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_hero_description(inputs);
	if (locale === "fr") return fr_home_hero_description(inputs);
	if (locale === "es") return es_home_hero_description(inputs);
	if (locale === "de") return de_home_hero_description(inputs);
	if (locale === "it") return it_home_hero_description(inputs);
	if (locale === "pt") return pt_home_hero_description(inputs);
	if (locale === "zh") return zh_home_hero_description(inputs);
	if (locale === "ja") return ja_home_hero_description(inputs);
	if (locale === "ko") return ko_home_hero_description(inputs);
	return ru_home_hero_description(inputs);
});
var en_home_hero_viewresults1 = () => {
	return `View Results`;
};
var fr_home_hero_viewresults1 = () => {
	return `Voir les résultats`;
};
var es_home_hero_viewresults1 = () => {
	return `Ver resultados`;
};
var de_home_hero_viewresults1 = () => {
	return `Ergebnisse anzeigen`;
};
var it_home_hero_viewresults1 = () => {
	return `Visualizza i risultati`;
};
var pt_home_hero_viewresults1 = () => {
	return `Ver Resultados`;
};
var zh_home_hero_viewresults1 = () => {
	return `查看结果`;
};
var ja_home_hero_viewresults1 = () => {
	return `結果を見る`;
};
var ko_home_hero_viewresults1 = () => {
	return `View Results`;
};
var ru_home_hero_viewresults1 = () => {
	return `Посмотреть результаты`;
};
var home_hero_viewresults1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_hero_viewresults1(inputs);
	if (locale === "fr") return fr_home_hero_viewresults1(inputs);
	if (locale === "es") return es_home_hero_viewresults1(inputs);
	if (locale === "de") return de_home_hero_viewresults1(inputs);
	if (locale === "it") return it_home_hero_viewresults1(inputs);
	if (locale === "pt") return pt_home_hero_viewresults1(inputs);
	if (locale === "zh") return zh_home_hero_viewresults1(inputs);
	if (locale === "ja") return ja_home_hero_viewresults1(inputs);
	if (locale === "ko") return ko_home_hero_viewresults1(inputs);
	return ru_home_hero_viewresults1(inputs);
});
var en_home_hero_methodology = () => {
	return `Methodology`;
};
var fr_home_hero_methodology = () => {
	return `Méthodologie`;
};
var es_home_hero_methodology = () => {
	return `Metodología`;
};
var de_home_hero_methodology = () => {
	return `Methodik`;
};
var it_home_hero_methodology = () => {
	return `Metodologia`;
};
var pt_home_hero_methodology = () => {
	return `Metodologia`;
};
var zh_home_hero_methodology = () => {
	return `方法论`;
};
var ja_home_hero_methodology = () => {
	return `手法`;
};
var ko_home_hero_methodology = () => {
	return `Methodology`;
};
var ru_home_hero_methodology = () => {
	return `Методология`;
};
var home_hero_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_hero_methodology(inputs);
	if (locale === "fr") return fr_home_hero_methodology(inputs);
	if (locale === "es") return es_home_hero_methodology(inputs);
	if (locale === "de") return de_home_hero_methodology(inputs);
	if (locale === "it") return it_home_hero_methodology(inputs);
	if (locale === "pt") return pt_home_hero_methodology(inputs);
	if (locale === "zh") return zh_home_hero_methodology(inputs);
	if (locale === "ja") return ja_home_hero_methodology(inputs);
	if (locale === "ko") return ko_home_hero_methodology(inputs);
	return ru_home_hero_methodology(inputs);
});
var en_home_whyitmatters_title2 = () => {
	return `Why These Metrics Matter`;
};
var fr_home_whyitmatters_title2 = () => {
	return `Pourquoi ces métriques comptent`;
};
var es_home_whyitmatters_title2 = () => {
	return `Por qué son importantes estas métricas`;
};
var de_home_whyitmatters_title2 = () => {
	return `Warum diese Metriken wichtig sind`;
};
var it_home_whyitmatters_title2 = () => {
	return `Perché queste metriche sono importanti`;
};
var pt_home_whyitmatters_title2 = () => {
	return `Por que estas métricas importam`;
};
var zh_home_whyitmatters_title2 = () => {
	return `为什么这些指标很重要`;
};
var ja_home_whyitmatters_title2 = () => {
	return `なぜこれらの指標が重要なのか`;
};
var ko_home_whyitmatters_title2 = () => {
	return `Why These Metrics Matter`;
};
var ru_home_whyitmatters_title2 = () => {
	return `Почему эти метрики важны`;
};
var home_whyitmatters_title2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_whyitmatters_title2(inputs);
	if (locale === "fr") return fr_home_whyitmatters_title2(inputs);
	if (locale === "es") return es_home_whyitmatters_title2(inputs);
	if (locale === "de") return de_home_whyitmatters_title2(inputs);
	if (locale === "it") return it_home_whyitmatters_title2(inputs);
	if (locale === "pt") return pt_home_whyitmatters_title2(inputs);
	if (locale === "zh") return zh_home_whyitmatters_title2(inputs);
	if (locale === "ja") return ja_home_whyitmatters_title2(inputs);
	if (locale === "ko") return ko_home_whyitmatters_title2(inputs);
	return ru_home_whyitmatters_title2(inputs);
});
var en_home_whyitmatters_bundlesizetitle4 = () => {
	return `Bundle Size`;
};
var fr_home_whyitmatters_bundlesizetitle4 = () => {
	return `Taille du bundle`;
};
var es_home_whyitmatters_bundlesizetitle4 = () => {
	return `Tamaño del bundle`;
};
var de_home_whyitmatters_bundlesizetitle4 = () => {
	return `Bundle-Größe`;
};
var it_home_whyitmatters_bundlesizetitle4 = () => {
	return `Dimensione del bundle`;
};
var pt_home_whyitmatters_bundlesizetitle4 = () => {
	return `Tamanho do bundle`;
};
var zh_home_whyitmatters_bundlesizetitle4 = () => {
	return `包大小`;
};
var ja_home_whyitmatters_bundlesizetitle4 = () => {
	return `バンドルサイズ`;
};
var ko_home_whyitmatters_bundlesizetitle4 = () => {
	return `Bundle Size`;
};
var ru_home_whyitmatters_bundlesizetitle4 = () => {
	return `Размер бандла`;
};
var home_whyitmatters_bundlesizetitle4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "fr") return fr_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "es") return es_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "de") return de_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "it") return it_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "pt") return pt_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "zh") return zh_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "ja") return ja_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "ko") return ko_home_whyitmatters_bundlesizetitle4(inputs);
	return ru_home_whyitmatters_bundlesizetitle4(inputs);
});
var en_home_whyitmatters_bundlesizedesc4 = () => {
	return `The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.`;
};
var fr_home_whyitmatters_bundlesizedesc4 = () => {
	return `Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.`;
};
var es_home_whyitmatters_bundlesizedesc4 = () => {
	return `El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.`;
};
var de_home_whyitmatters_bundlesizedesc4 = () => {
	return `Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.`;
};
var it_home_whyitmatters_bundlesizedesc4 = () => {
	return `Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.`;
};
var pt_home_whyitmatters_bundlesizedesc4 = () => {
	return `O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.`;
};
var zh_home_whyitmatters_bundlesizedesc4 = () => {
	return `包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。`;
};
var ja_home_whyitmatters_bundlesizedesc4 = () => {
	return `バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。`;
};
var ko_home_whyitmatters_bundlesizedesc4 = () => {
	return `The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.`;
};
var ru_home_whyitmatters_bundlesizedesc4 = () => {
	return `Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.`;
};
var home_whyitmatters_bundlesizedesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "fr") return fr_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "es") return es_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "de") return de_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "it") return it_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "pt") return pt_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "zh") return zh_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "ja") return ja_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "ko") return ko_home_whyitmatters_bundlesizedesc4(inputs);
	return ru_home_whyitmatters_bundlesizedesc4(inputs);
});
var en_home_whyitmatters_renderingtitle3 = () => {
	return `Rendering & Hydration`;
};
var fr_home_whyitmatters_renderingtitle3 = () => {
	return `Rendu et hydratation`;
};
var es_home_whyitmatters_renderingtitle3 = () => {
	return `Renderizado e hidratación`;
};
var de_home_whyitmatters_renderingtitle3 = () => {
	return `Rendering & Hydrierung`;
};
var it_home_whyitmatters_renderingtitle3 = () => {
	return `Rendering e idratazione`;
};
var pt_home_whyitmatters_renderingtitle3 = () => {
	return `Renderização e hidratação`;
};
var zh_home_whyitmatters_renderingtitle3 = () => {
	return `渲染与注水`;
};
var ja_home_whyitmatters_renderingtitle3 = () => {
	return `レンダリングとハイドレーション`;
};
var ko_home_whyitmatters_renderingtitle3 = () => {
	return `Rendering & Hydration`;
};
var ru_home_whyitmatters_renderingtitle3 = () => {
	return `Рендеринг и гидратация`;
};
var home_whyitmatters_renderingtitle3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "fr") return fr_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "es") return es_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "de") return de_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "it") return it_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "pt") return pt_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "zh") return zh_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "ja") return ja_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "ko") return ko_home_whyitmatters_renderingtitle3(inputs);
	return ru_home_whyitmatters_renderingtitle3(inputs);
});
var en_home_whyitmatters_renderingdesc3 = () => {
	return `Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).`;
};
var fr_home_whyitmatters_renderingdesc3 = () => {
	return `Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).`;
};
var es_home_whyitmatters_renderingdesc3 = () => {
	return `Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).`;
};
var de_home_whyitmatters_renderingdesc3 = () => {
	return `Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.`;
};
var it_home_whyitmatters_renderingdesc3 = () => {
	return `Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).`;
};
var pt_home_whyitmatters_renderingdesc3 = () => {
	return `Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).`;
};
var zh_home_whyitmatters_renderingdesc3 = () => {
	return `将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。`;
};
var ja_home_whyitmatters_renderingdesc3 = () => {
	return `巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。`;
};
var ko_home_whyitmatters_renderingdesc3 = () => {
	return `Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).`;
};
var ru_home_whyitmatters_renderingdesc3 = () => {
	return `Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).`;
};
var home_whyitmatters_renderingdesc3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "fr") return fr_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "es") return es_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "de") return de_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "it") return it_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "pt") return pt_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "zh") return zh_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "ja") return ja_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "ko") return ko_home_whyitmatters_renderingdesc3(inputs);
	return ru_home_whyitmatters_renderingdesc3(inputs);
});
var en_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Dynamic Loading`;
};
var fr_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Chargement dynamique`;
};
var es_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Carga dinámica`;
};
var de_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Dynamisches Laden`;
};
var it_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Caricamento dinamico`;
};
var pt_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Carregamento dinâmico`;
};
var zh_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `动态加载`;
};
var ja_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `動的読み込み`;
};
var ko_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Dynamic Loading`;
};
var ru_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Динамическая загрузка`;
};
var home_whyitmatters_dynamicloadingtitle4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "fr") return fr_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "es") return es_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "de") return de_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "it") return it_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "pt") return pt_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "zh") return zh_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "ja") return ja_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "ko") return ko_home_whyitmatters_dynamicloadingtitle4(inputs);
	return ru_home_whyitmatters_dynamicloadingtitle4(inputs);
});
var en_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.`;
};
var fr_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.`;
};
var es_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.`;
};
var de_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.`;
};
var it_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.`;
};
var pt_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.`;
};
var zh_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。`;
};
var ja_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。`;
};
var ko_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.`;
};
var ru_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.`;
};
var home_whyitmatters_dynamicloadingdesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "fr") return fr_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "es") return es_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "de") return de_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "it") return it_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "pt") return pt_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "zh") return zh_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "ja") return ja_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "ko") return ko_home_whyitmatters_dynamicloadingdesc4(inputs);
	return ru_home_whyitmatters_dynamicloadingdesc4(inputs);
});
var en_home_understandingimpact_title1 = () => {
	return `Understanding the Impact`;
};
var fr_home_understandingimpact_title1 = () => {
	return `Comprendre l'impact`;
};
var es_home_understandingimpact_title1 = () => {
	return `Entendiendo el impacto`;
};
var de_home_understandingimpact_title1 = () => {
	return `Die Auswirkungen verstehen`;
};
var it_home_understandingimpact_title1 = () => {
	return `Capire l'impatto`;
};
var pt_home_understandingimpact_title1 = () => {
	return `Entendendo o impacto`;
};
var zh_home_understandingimpact_title1 = () => {
	return `理解影响`;
};
var ja_home_understandingimpact_title1 = () => {
	return `影響を理解する`;
};
var ko_home_understandingimpact_title1 = () => {
	return `Understanding the Impact`;
};
var ru_home_understandingimpact_title1 = () => {
	return `Понимание влияния`;
};
var home_understandingimpact_title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_title1(inputs);
	if (locale === "fr") return fr_home_understandingimpact_title1(inputs);
	if (locale === "es") return es_home_understandingimpact_title1(inputs);
	if (locale === "de") return de_home_understandingimpact_title1(inputs);
	if (locale === "it") return it_home_understandingimpact_title1(inputs);
	if (locale === "pt") return pt_home_understandingimpact_title1(inputs);
	if (locale === "zh") return zh_home_understandingimpact_title1(inputs);
	if (locale === "ja") return ja_home_understandingimpact_title1(inputs);
	if (locale === "ko") return ko_home_understandingimpact_title1(inputs);
	return ru_home_understandingimpact_title1(inputs);
});
var en_home_understandingimpact_singlejsontitle3 = () => {
	return `Why a single large JSON can hurt performance`;
};
var fr_home_understandingimpact_singlejsontitle3 = () => {
	return `Pourquoi un unique gros JSON peut nuire aux performances`;
};
var es_home_understandingimpact_singlejsontitle3 = () => {
	return `Por qué un solo JSON grande puede perjudicar el rendimiento`;
};
var de_home_understandingimpact_singlejsontitle3 = () => {
	return `Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann`;
};
var it_home_understandingimpact_singlejsontitle3 = () => {
	return `Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni`;
};
var pt_home_understandingimpact_singlejsontitle3 = () => {
	return `Por que um único JSON grande pode prejudicar o desempenho`;
};
var zh_home_understandingimpact_singlejsontitle3 = () => {
	return `为什么单个大型 JSON 会损害性能`;
};
var ja_home_understandingimpact_singlejsontitle3 = () => {
	return `なぜ1つの大きなJSONがパフォーマンスを低下させるのか`;
};
var ko_home_understandingimpact_singlejsontitle3 = () => {
	return `Why a single large JSON can hurt performance`;
};
var ru_home_understandingimpact_singlejsontitle3 = () => {
	return `Почему один большой JSON может снизить производительность`;
};
var home_understandingimpact_singlejsontitle3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsontitle3(inputs);
	return ru_home_understandingimpact_singlejsontitle3(inputs);
});
var en_home_understandingimpact_singlejsonintro3 = () => {
	return `Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:`;
};
var fr_home_understandingimpact_singlejsonintro3 = () => {
	return `Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :`;
};
var es_home_understandingimpact_singlejsonintro3 = () => {
	return `Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:`;
};
var de_home_understandingimpact_singlejsonintro3 = () => {
	return `Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:`;
};
var it_home_understandingimpact_singlejsonintro3 = () => {
	return `Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:`;
};
var pt_home_understandingimpact_singlejsonintro3 = () => {
	return `Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:`;
};
var zh_home_understandingimpact_singlejsonintro3 = () => {
	return `许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：`;
};
var ja_home_understandingimpact_singlejsonintro3 = () => {
	return `多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：`;
};
var ko_home_understandingimpact_singlejsonintro3 = () => {
	return `Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:`;
};
var ru_home_understandingimpact_singlejsonintro3 = () => {
	return `Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:`;
};
var home_understandingimpact_singlejsonintro3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsonintro3(inputs);
	return ru_home_understandingimpact_singlejsonintro3(inputs);
});
var en_home_understandingimpact_singlejsonbullet13 = () => {
	return `The JSON must be parsed on every page load — blocking the main thread.`;
};
var fr_home_understandingimpact_singlejsonbullet13 = () => {
	return `Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.`;
};
var es_home_understandingimpact_singlejsonbullet13 = () => {
	return `El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.`;
};
var de_home_understandingimpact_singlejsonbullet13 = () => {
	return `Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.`;
};
var it_home_understandingimpact_singlejsonbullet13 = () => {
	return `Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.`;
};
var pt_home_understandingimpact_singlejsonbullet13 = () => {
	return `O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.`;
};
var zh_home_understandingimpact_singlejsonbullet13 = () => {
	return `每次页面加载时都必须解析 JSON — 阻塞主线程。`;
};
var ja_home_understandingimpact_singlejsonbullet13 = () => {
	return `ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。`;
};
var ko_home_understandingimpact_singlejsonbullet13 = () => {
	return `The JSON must be parsed on every page load — blocking the main thread.`;
};
var ru_home_understandingimpact_singlejsonbullet13 = () => {
	return `JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.`;
};
var home_understandingimpact_singlejsonbullet13 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsonbullet13(inputs);
	return ru_home_understandingimpact_singlejsonbullet13(inputs);
});
var en_home_understandingimpact_singlejsonbullet23 = () => {
	return `Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.`;
};
var fr_home_understandingimpact_singlejsonbullet23 = () => {
	return `Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.`;
};
var es_home_understandingimpact_singlejsonbullet23 = () => {
	return `Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.`;
};
var de_home_understandingimpact_singlejsonbullet23 = () => {
	return `Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.`;
};
var it_home_understandingimpact_singlejsonbullet23 = () => {
	return `Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.`;
};
var pt_home_understandingimpact_singlejsonbullet23 = () => {
	return `Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.`;
};
var zh_home_understandingimpact_singlejsonbullet23 = () => {
	return `当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。`;
};
var ja_home_understandingimpact_singlejsonbullet23 = () => {
	return `コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。`;
};
var ko_home_understandingimpact_singlejsonbullet23 = () => {
	return `Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.`;
};
var ru_home_understandingimpact_singlejsonbullet23 = () => {
	return `Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.`;
};
var home_understandingimpact_singlejsonbullet23 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsonbullet23(inputs);
	return ru_home_understandingimpact_singlejsonbullet23(inputs);
});
var en_home_understandingimpact_singlejsonbullet33 = () => {
	return `During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.`;
};
var fr_home_understandingimpact_singlejsonbullet33 = () => {
	return `Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.`;
};
var es_home_understandingimpact_singlejsonbullet33 = () => {
	return `Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.`;
};
var de_home_understandingimpact_singlejsonbullet33 = () => {
	return `Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.`;
};
var it_home_understandingimpact_singlejsonbullet33 = () => {
	return `Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.`;
};
var pt_home_understandingimpact_singlejsonbullet33 = () => {
	return `Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.`;
};
var zh_home_understandingimpact_singlejsonbullet33 = () => {
	return `在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。`;
};
var ja_home_understandingimpact_singlejsonbullet33 = () => {
	return `サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。`;
};
var ko_home_understandingimpact_singlejsonbullet33 = () => {
	return `During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.`;
};
var ru_home_understandingimpact_singlejsonbullet33 = () => {
	return `При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.`;
};
var home_understandingimpact_singlejsonbullet33 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsonbullet33(inputs);
	return ru_home_understandingimpact_singlejsonbullet33(inputs);
});
var en_home_understandingimpact_tradeoffstitle3 = () => {
	return `The trade-offs of dynamic loading`;
};
var fr_home_understandingimpact_tradeoffstitle3 = () => {
	return `Les compromis du chargement dynamique`;
};
var es_home_understandingimpact_tradeoffstitle3 = () => {
	return `Las compensaciones de la carga dinámica`;
};
var de_home_understandingimpact_tradeoffstitle3 = () => {
	return `Die Kompromisse beim dynamischen Laden`;
};
var it_home_understandingimpact_tradeoffstitle3 = () => {
	return `I compromessi del caricamento dinamico`;
};
var pt_home_understandingimpact_tradeoffstitle3 = () => {
	return `Os trade-offs do carregamento dinâmico`;
};
var zh_home_understandingimpact_tradeoffstitle3 = () => {
	return `动态加载的权衡`;
};
var ja_home_understandingimpact_tradeoffstitle3 = () => {
	return `動的読み込みのトレードオフ`;
};
var ko_home_understandingimpact_tradeoffstitle3 = () => {
	return `The trade-offs of dynamic loading`;
};
var ru_home_understandingimpact_tradeoffstitle3 = () => {
	return `Компромиссы динамической загрузки`;
};
var home_understandingimpact_tradeoffstitle3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "fr") return fr_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "es") return es_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "de") return de_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "it") return it_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "pt") return pt_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "zh") return zh_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "ja") return ja_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "ko") return ko_home_understandingimpact_tradeoffstitle3(inputs);
	return ru_home_understandingimpact_tradeoffstitle3(inputs);
});
var en_home_understandingimpact_tradeoffsintro3 = () => {
	return `Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:`;
};
var fr_home_understandingimpact_tradeoffsintro3 = () => {
	return `Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :`;
};
var es_home_understandingimpact_tradeoffsintro3 = () => {
	return `Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:`;
};
var de_home_understandingimpact_tradeoffsintro3 = () => {
	return `Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:`;
};
var it_home_understandingimpact_tradeoffsintro3 = () => {
	return `La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:`;
};
var pt_home_understandingimpact_tradeoffsintro3 = () => {
	return `Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:`;
};
var zh_home_understandingimpact_tradeoffsintro3 = () => {
	return `将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：`;
};
var ja_home_understandingimpact_tradeoffsintro3 = () => {
	return `翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：`;
};
var ko_home_understandingimpact_tradeoffsintro3 = () => {
	return `Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:`;
};
var ru_home_understandingimpact_tradeoffsintro3 = () => {
	return `Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:`;
};
var home_understandingimpact_tradeoffsintro3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "fr") return fr_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "es") return es_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "de") return de_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "it") return it_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "pt") return pt_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "zh") return zh_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "ja") return ja_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "ko") return ko_home_understandingimpact_tradeoffsintro3(inputs);
	return ru_home_understandingimpact_tradeoffsintro3(inputs);
});
var en_home_understandingimpact_waterfalllabel2 = () => {
	return `Waterfall requests:`;
};
var fr_home_understandingimpact_waterfalllabel2 = () => {
	return `Requêtes en cascade :`;
};
var es_home_understandingimpact_waterfalllabel2 = () => {
	return `Solicitudes en cascada:`;
};
var de_home_understandingimpact_waterfalllabel2 = () => {
	return `Waterfall-Anfragen:`;
};
var it_home_understandingimpact_waterfalllabel2 = () => {
	return `Richieste a cascata:`;
};
var pt_home_understandingimpact_waterfalllabel2 = () => {
	return `Requisições em cascata:`;
};
var zh_home_understandingimpact_waterfalllabel2 = () => {
	return `瀑布流请求：`;
};
var ja_home_understandingimpact_waterfalllabel2 = () => {
	return `ウォーターフォールリクエスト：`;
};
var ko_home_understandingimpact_waterfalllabel2 = () => {
	return `Waterfall requests:`;
};
var ru_home_understandingimpact_waterfalllabel2 = () => {
	return `Каскадные запросы:`;
};
var home_understandingimpact_waterfalllabel2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "es") return es_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "de") return de_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "it") return it_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_waterfalllabel2(inputs);
	return ru_home_understandingimpact_waterfalllabel2(inputs);
});
var en_home_understandingimpact_waterfalldesc2 = () => {
	return `the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.`;
};
var fr_home_understandingimpact_waterfalldesc2 = () => {
	return `l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.`;
};
var es_home_understandingimpact_waterfalldesc2 = () => {
	return `la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.`;
};
var de_home_understandingimpact_waterfalldesc2 = () => {
	return `Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.`;
};
var it_home_understandingimpact_waterfalldesc2 = () => {
	return `l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.`;
};
var pt_home_understandingimpact_waterfalldesc2 = () => {
	return `o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.`;
};
var zh_home_understandingimpact_waterfalldesc2 = () => {
	return `应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。`;
};
var ja_home_understandingimpact_waterfalldesc2 = () => {
	return `アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。`;
};
var ko_home_understandingimpact_waterfalldesc2 = () => {
	return `the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.`;
};
var ru_home_understandingimpact_waterfalldesc2 = () => {
	return `приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.`;
};
var home_understandingimpact_waterfalldesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "es") return es_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "de") return de_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "it") return it_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_waterfalldesc2(inputs);
	return ru_home_understandingimpact_waterfalldesc2(inputs);
});
var en_home_understandingimpact_fouclabel2 = () => {
	return `Flash of untranslated content (FOUC):`;
};
var fr_home_understandingimpact_fouclabel2 = () => {
	return `Flash de contenu non traduit (FOUC) :`;
};
var es_home_understandingimpact_fouclabel2 = () => {
	return `Parpadeo de contenido no traducido (FOUC):`;
};
var de_home_understandingimpact_fouclabel2 = () => {
	return `Flash of Untranslated Content (FOUC):`;
};
var it_home_understandingimpact_fouclabel2 = () => {
	return `Flash di contenuti non tradotti (FOUC):`;
};
var pt_home_understandingimpact_fouclabel2 = () => {
	return `Flash de conteúdo não traduzido (FOUC):`;
};
var zh_home_understandingimpact_fouclabel2 = () => {
	return `未翻译内容闪烁 (FOUC)：`;
};
var ja_home_understandingimpact_fouclabel2 = () => {
	return `翻訳されていないコンテンツのフラッシュ (FOUC)：`;
};
var ko_home_understandingimpact_fouclabel2 = () => {
	return `Flash of untranslated content (FOUC):`;
};
var ru_home_understandingimpact_fouclabel2 = () => {
	return `Мерцание непереведенного контента (FOUC):`;
};
var home_understandingimpact_fouclabel2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_fouclabel2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_fouclabel2(inputs);
	if (locale === "es") return es_home_understandingimpact_fouclabel2(inputs);
	if (locale === "de") return de_home_understandingimpact_fouclabel2(inputs);
	if (locale === "it") return it_home_understandingimpact_fouclabel2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_fouclabel2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_fouclabel2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_fouclabel2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_fouclabel2(inputs);
	return ru_home_understandingimpact_fouclabel2(inputs);
});
var en_home_understandingimpact_foucdesc2 = () => {
	return `users may briefly see translation keys or a fallback language before the chunk arrives.`;
};
var fr_home_understandingimpact_foucdesc2 = () => {
	return `l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.`;
};
var es_home_understandingimpact_foucdesc2 = () => {
	return `los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.`;
};
var de_home_understandingimpact_foucdesc2 = () => {
	return `Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.`;
};
var it_home_understandingimpact_foucdesc2 = () => {
	return `gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.`;
};
var pt_home_understandingimpact_foucdesc2 = () => {
	return `usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.`;
};
var zh_home_understandingimpact_foucdesc2 = () => {
	return `在块到达之前，用户可能会短暂看到翻译键或回退语言。`;
};
var ja_home_understandingimpact_foucdesc2 = () => {
	return `チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。`;
};
var ko_home_understandingimpact_foucdesc2 = () => {
	return `users may briefly see translation keys or a fallback language before the chunk arrives.`;
};
var ru_home_understandingimpact_foucdesc2 = () => {
	return `пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.`;
};
var home_understandingimpact_foucdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_foucdesc2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_foucdesc2(inputs);
	if (locale === "es") return es_home_understandingimpact_foucdesc2(inputs);
	if (locale === "de") return de_home_understandingimpact_foucdesc2(inputs);
	if (locale === "it") return it_home_understandingimpact_foucdesc2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_foucdesc2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_foucdesc2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_foucdesc2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_foucdesc2(inputs);
	return ru_home_understandingimpact_foucdesc2(inputs);
});
var en_home_understandingimpact_cachelabel2 = () => {
	return `Cache invalidation:`;
};
var fr_home_understandingimpact_cachelabel2 = () => {
	return `Invalidation du cache :`;
};
var es_home_understandingimpact_cachelabel2 = () => {
	return `Invalidación de la caché:`;
};
var de_home_understandingimpact_cachelabel2 = () => {
	return `Cache-Invalidierung:`;
};
var it_home_understandingimpact_cachelabel2 = () => {
	return `Invalidazione della cache:`;
};
var pt_home_understandingimpact_cachelabel2 = () => {
	return `Invalidação de cache:`;
};
var zh_home_understandingimpact_cachelabel2 = () => {
	return `缓存失效：`;
};
var ja_home_understandingimpact_cachelabel2 = () => {
	return `キャッシュの無効化：`;
};
var ko_home_understandingimpact_cachelabel2 = () => {
	return `Cache invalidation:`;
};
var ru_home_understandingimpact_cachelabel2 = () => {
	return `Инвалидация кэша:`;
};
var home_understandingimpact_cachelabel2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_cachelabel2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_cachelabel2(inputs);
	if (locale === "es") return es_home_understandingimpact_cachelabel2(inputs);
	if (locale === "de") return de_home_understandingimpact_cachelabel2(inputs);
	if (locale === "it") return it_home_understandingimpact_cachelabel2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_cachelabel2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_cachelabel2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_cachelabel2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_cachelabel2(inputs);
	return ru_home_understandingimpact_cachelabel2(inputs);
});
var en_home_understandingimpact_cachedesc2 = () => {
	return `updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.`;
};
var fr_home_understandingimpact_cachedesc2 = () => {
	return `mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.`;
};
var es_home_understandingimpact_cachedesc2 = () => {
	return `actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.`;
};
var de_home_understandingimpact_cachedesc2 = () => {
	return `Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.`;
};
var it_home_understandingimpact_cachedesc2 = () => {
	return `l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.`;
};
var pt_home_understandingimpact_cachedesc2 = () => {
	return `atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.`;
};
var zh_home_understandingimpact_cachedesc2 = () => {
	return `更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。`;
};
var ja_home_understandingimpact_cachedesc2 = () => {
	return `翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。`;
};
var ko_home_understandingimpact_cachedesc2 = () => {
	return `updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.`;
};
var ru_home_understandingimpact_cachedesc2 = () => {
	return `обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.`;
};
var home_understandingimpact_cachedesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_cachedesc2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_cachedesc2(inputs);
	if (locale === "es") return es_home_understandingimpact_cachedesc2(inputs);
	if (locale === "de") return de_home_understandingimpact_cachedesc2(inputs);
	if (locale === "it") return it_home_understandingimpact_cachedesc2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_cachedesc2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_cachedesc2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_cachedesc2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_cachedesc2(inputs);
	return ru_home_understandingimpact_cachedesc2(inputs);
});
var en_home_understandingimpact_measurestitle2 = () => {
	return `What this benchmark measures`;
};
var fr_home_understandingimpact_measurestitle2 = () => {
	return `Ce que mesure ce benchmark`;
};
var es_home_understandingimpact_measurestitle2 = () => {
	return `Qué mide este benchmark`;
};
var de_home_understandingimpact_measurestitle2 = () => {
	return `Was dieser Benchmark misst`;
};
var it_home_understandingimpact_measurestitle2 = () => {
	return `Cosa misura questo benchmark`;
};
var pt_home_understandingimpact_measurestitle2 = () => {
	return `O que este benchmark mede`;
};
var zh_home_understandingimpact_measurestitle2 = () => {
	return `此基准测试衡量的内容`;
};
var ja_home_understandingimpact_measurestitle2 = () => {
	return `このベンチマークが測定するもの`;
};
var ko_home_understandingimpact_measurestitle2 = () => {
	return `What this benchmark measures`;
};
var ru_home_understandingimpact_measurestitle2 = () => {
	return `Что измеряет этот бенчмарк`;
};
var home_understandingimpact_measurestitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_measurestitle2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_measurestitle2(inputs);
	if (locale === "es") return es_home_understandingimpact_measurestitle2(inputs);
	if (locale === "de") return de_home_understandingimpact_measurestitle2(inputs);
	if (locale === "it") return it_home_understandingimpact_measurestitle2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_measurestitle2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_measurestitle2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_measurestitle2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_measurestitle2(inputs);
	return ru_home_understandingimpact_measurestitle2(inputs);
});
var en_home_understandingimpact_measuresdesc2 = () => {
	return `This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.`;
};
var fr_home_understandingimpact_measuresdesc2 = () => {
	return `Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.`;
};
var es_home_understandingimpact_measuresdesc2 = () => {
	return `Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.`;
};
var de_home_understandingimpact_measuresdesc2 = () => {
	return `Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.`;
};
var it_home_understandingimpact_measuresdesc2 = () => {
	return `Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.`;
};
var pt_home_understandingimpact_measuresdesc2 = () => {
	return `Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.`;
};
var zh_home_understandingimpact_measuresdesc2 = () => {
	return `此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。`;
};
var ja_home_understandingimpact_measuresdesc2 = () => {
	return `このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。`;
};
var ko_home_understandingimpact_measuresdesc2 = () => {
	return `This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.`;
};
var ru_home_understandingimpact_measuresdesc2 = () => {
	return `Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.`;
};
var home_understandingimpact_measuresdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "es") return es_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "de") return de_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "it") return it_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_measuresdesc2(inputs);
	return ru_home_understandingimpact_measuresdesc2(inputs);
});
var en_home_resultstable_title1 = () => {
	return `Sample Results`;
};
var fr_home_resultstable_title1 = () => {
	return `Exemple de résultats`;
};
var es_home_resultstable_title1 = () => {
	return `Resultados de muestra`;
};
var de_home_resultstable_title1 = () => {
	return `Beispielergebnisse`;
};
var it_home_resultstable_title1 = () => {
	return `Risultati di esempio`;
};
var pt_home_resultstable_title1 = () => {
	return `Resultados de exemplo`;
};
var zh_home_resultstable_title1 = () => {
	return `示例结果`;
};
var ja_home_resultstable_title1 = () => {
	return `サンプル結果`;
};
var ko_home_resultstable_title1 = () => {
	return `Sample Results`;
};
var ru_home_resultstable_title1 = () => {
	return `Примеры результатов`;
};
var home_resultstable_title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_resultstable_title1(inputs);
	if (locale === "fr") return fr_home_resultstable_title1(inputs);
	if (locale === "es") return es_home_resultstable_title1(inputs);
	if (locale === "de") return de_home_resultstable_title1(inputs);
	if (locale === "it") return it_home_resultstable_title1(inputs);
	if (locale === "pt") return pt_home_resultstable_title1(inputs);
	if (locale === "zh") return zh_home_resultstable_title1(inputs);
	if (locale === "ja") return ja_home_resultstable_title1(inputs);
	if (locale === "ko") return ko_home_resultstable_title1(inputs);
	return ru_home_resultstable_title1(inputs);
});
var en_home_resultstable_library1 = () => {
	return `Library`;
};
var fr_home_resultstable_library1 = () => {
	return `Bibliothèque`;
};
var es_home_resultstable_library1 = () => {
	return `Biblioteca`;
};
var de_home_resultstable_library1 = () => {
	return `Bibliothek`;
};
var it_home_resultstable_library1 = () => {
	return `Libreria`;
};
var pt_home_resultstable_library1 = () => {
	return `Biblioteca`;
};
var zh_home_resultstable_library1 = () => {
	return `库`;
};
var ja_home_resultstable_library1 = () => {
	return `ライブラリ`;
};
var ko_home_resultstable_library1 = () => {
	return `Library`;
};
var ru_home_resultstable_library1 = () => {
	return `Библиотека`;
};
var home_resultstable_library1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_resultstable_library1(inputs);
	if (locale === "fr") return fr_home_resultstable_library1(inputs);
	if (locale === "es") return es_home_resultstable_library1(inputs);
	if (locale === "de") return de_home_resultstable_library1(inputs);
	if (locale === "it") return it_home_resultstable_library1(inputs);
	if (locale === "pt") return pt_home_resultstable_library1(inputs);
	if (locale === "zh") return zh_home_resultstable_library1(inputs);
	if (locale === "ja") return ja_home_resultstable_library1(inputs);
	if (locale === "ko") return ko_home_resultstable_library1(inputs);
	return ru_home_resultstable_library1(inputs);
});
var en_home_resultstable_bundlesize2 = () => {
	return `Bundle Size`;
};
var fr_home_resultstable_bundlesize2 = () => {
	return `Taille du bundle`;
};
var es_home_resultstable_bundlesize2 = () => {
	return `Tamaño del bundle`;
};
var de_home_resultstable_bundlesize2 = () => {
	return `Bundle-Größe`;
};
var it_home_resultstable_bundlesize2 = () => {
	return `Dimensione del bundle`;
};
var pt_home_resultstable_bundlesize2 = () => {
	return `Tamanho do Bundle`;
};
var zh_home_resultstable_bundlesize2 = () => {
	return `包大小`;
};
var ja_home_resultstable_bundlesize2 = () => {
	return `バンドルサイズ`;
};
var ko_home_resultstable_bundlesize2 = () => {
	return `Bundle Size`;
};
var ru_home_resultstable_bundlesize2 = () => {
	return `Размер бандла`;
};
var home_resultstable_bundlesize2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_resultstable_bundlesize2(inputs);
	if (locale === "fr") return fr_home_resultstable_bundlesize2(inputs);
	if (locale === "es") return es_home_resultstable_bundlesize2(inputs);
	if (locale === "de") return de_home_resultstable_bundlesize2(inputs);
	if (locale === "it") return it_home_resultstable_bundlesize2(inputs);
	if (locale === "pt") return pt_home_resultstable_bundlesize2(inputs);
	if (locale === "zh") return zh_home_resultstable_bundlesize2(inputs);
	if (locale === "ja") return ja_home_resultstable_bundlesize2(inputs);
	if (locale === "ko") return ko_home_resultstable_bundlesize2(inputs);
	return ru_home_resultstable_bundlesize2(inputs);
});
var en_home_resultstable_lookuptime2 = () => {
	return `Lookup Time`;
};
var fr_home_resultstable_lookuptime2 = () => {
	return `Temps de recherche`;
};
var es_home_resultstable_lookuptime2 = () => {
	return `Tiempo de búsqueda`;
};
var de_home_resultstable_lookuptime2 = () => {
	return `Lookup-Zeit`;
};
var it_home_resultstable_lookuptime2 = () => {
	return `Tempo di ricerca`;
};
var pt_home_resultstable_lookuptime2 = () => {
	return `Tempo de Busca`;
};
var zh_home_resultstable_lookuptime2 = () => {
	return `查找时间`;
};
var ja_home_resultstable_lookuptime2 = () => {
	return `ルックアップ時間`;
};
var ko_home_resultstable_lookuptime2 = () => {
	return `Lookup Time`;
};
var ru_home_resultstable_lookuptime2 = () => {
	return `Время поиска`;
};
var home_resultstable_lookuptime2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_resultstable_lookuptime2(inputs);
	if (locale === "fr") return fr_home_resultstable_lookuptime2(inputs);
	if (locale === "es") return es_home_resultstable_lookuptime2(inputs);
	if (locale === "de") return de_home_resultstable_lookuptime2(inputs);
	if (locale === "it") return it_home_resultstable_lookuptime2(inputs);
	if (locale === "pt") return pt_home_resultstable_lookuptime2(inputs);
	if (locale === "zh") return zh_home_resultstable_lookuptime2(inputs);
	if (locale === "ja") return ja_home_resultstable_lookuptime2(inputs);
	if (locale === "ko") return ko_home_resultstable_lookuptime2(inputs);
	return ru_home_resultstable_lookuptime2(inputs);
});
var en_home_resultstable_lazyloading2 = () => {
	return `Lazy Loading`;
};
var fr_home_resultstable_lazyloading2 = () => {
	return `Chargement paresseux`;
};
var es_home_resultstable_lazyloading2 = () => {
	return `Carga diferida`;
};
var de_home_resultstable_lazyloading2 = () => {
	return `Lazy Loading`;
};
var it_home_resultstable_lazyloading2 = () => {
	return `Caricamento lazy`;
};
var pt_home_resultstable_lazyloading2 = () => {
	return `Carregamento Lento`;
};
var zh_home_resultstable_lazyloading2 = () => {
	return `延迟加载`;
};
var ja_home_resultstable_lazyloading2 = () => {
	return `遅延読み込み`;
};
var ko_home_resultstable_lazyloading2 = () => {
	return `Lazy Loading`;
};
var ru_home_resultstable_lazyloading2 = () => {
	return `Ленивая загрузка`;
};
var home_resultstable_lazyloading2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_resultstable_lazyloading2(inputs);
	if (locale === "fr") return fr_home_resultstable_lazyloading2(inputs);
	if (locale === "es") return es_home_resultstable_lazyloading2(inputs);
	if (locale === "de") return de_home_resultstable_lazyloading2(inputs);
	if (locale === "it") return it_home_resultstable_lazyloading2(inputs);
	if (locale === "pt") return pt_home_resultstable_lazyloading2(inputs);
	if (locale === "zh") return zh_home_resultstable_lazyloading2(inputs);
	if (locale === "ja") return ja_home_resultstable_lazyloading2(inputs);
	if (locale === "ko") return ko_home_resultstable_lazyloading2(inputs);
	return ru_home_resultstable_lazyloading2(inputs);
});
var en_home_resultstable_yes1 = () => {
	return `Yes`;
};
var fr_home_resultstable_yes1 = () => {
	return `Oui`;
};
var es_home_resultstable_yes1 = () => {
	return `Sí`;
};
var de_home_resultstable_yes1 = () => {
	return `Ja`;
};
var it_home_resultstable_yes1 = () => {
	return `Sì`;
};
var pt_home_resultstable_yes1 = () => {
	return `Sim`;
};
var zh_home_resultstable_yes1 = () => {
	return `是`;
};
var ja_home_resultstable_yes1 = () => {
	return `はい`;
};
var ko_home_resultstable_yes1 = () => {
	return `Yes`;
};
var ru_home_resultstable_yes1 = () => {
	return `Да`;
};
var home_resultstable_yes1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_resultstable_yes1(inputs);
	if (locale === "fr") return fr_home_resultstable_yes1(inputs);
	if (locale === "es") return es_home_resultstable_yes1(inputs);
	if (locale === "de") return de_home_resultstable_yes1(inputs);
	if (locale === "it") return it_home_resultstable_yes1(inputs);
	if (locale === "pt") return pt_home_resultstable_yes1(inputs);
	if (locale === "zh") return zh_home_resultstable_yes1(inputs);
	if (locale === "ja") return ja_home_resultstable_yes1(inputs);
	if (locale === "ko") return ko_home_resultstable_yes1(inputs);
	return ru_home_resultstable_yes1(inputs);
});
var en_home_resultstable_manual1 = () => {
	return `Manual`;
};
var fr_home_resultstable_manual1 = () => {
	return `Manuel`;
};
var es_home_resultstable_manual1 = () => {
	return `Manual`;
};
var de_home_resultstable_manual1 = () => {
	return `Manuell`;
};
var it_home_resultstable_manual1 = () => {
	return `Manuale`;
};
var pt_home_resultstable_manual1 = () => {
	return `Manual`;
};
var zh_home_resultstable_manual1 = () => {
	return `手动`;
};
var ja_home_resultstable_manual1 = () => {
	return `手動`;
};
var ko_home_resultstable_manual1 = () => {
	return `Manual`;
};
var ru_home_resultstable_manual1 = () => {
	return `Вручную`;
};
var home_resultstable_manual1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_resultstable_manual1(inputs);
	if (locale === "fr") return fr_home_resultstable_manual1(inputs);
	if (locale === "es") return es_home_resultstable_manual1(inputs);
	if (locale === "de") return de_home_resultstable_manual1(inputs);
	if (locale === "it") return it_home_resultstable_manual1(inputs);
	if (locale === "pt") return pt_home_resultstable_manual1(inputs);
	if (locale === "zh") return zh_home_resultstable_manual1(inputs);
	if (locale === "ja") return ja_home_resultstable_manual1(inputs);
	if (locale === "ko") return ko_home_resultstable_manual1(inputs);
	return ru_home_resultstable_manual1(inputs);
});
var en_home_resultstable_builtin2 = () => {
	return `Built-in`;
};
var fr_home_resultstable_builtin2 = () => {
	return `Intégré`;
};
var es_home_resultstable_builtin2 = () => {
	return `Integrado`;
};
var de_home_resultstable_builtin2 = () => {
	return `Integriert`;
};
var it_home_resultstable_builtin2 = () => {
	return `Integrato`;
};
var pt_home_resultstable_builtin2 = () => {
	return `Integrado`;
};
var zh_home_resultstable_builtin2 = () => {
	return `内置`;
};
var ja_home_resultstable_builtin2 = () => {
	return `内蔵`;
};
var ko_home_resultstable_builtin2 = () => {
	return `Built-in`;
};
var ru_home_resultstable_builtin2 = () => {
	return `Встроено`;
};
var home_resultstable_builtin2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_resultstable_builtin2(inputs);
	if (locale === "fr") return fr_home_resultstable_builtin2(inputs);
	if (locale === "es") return es_home_resultstable_builtin2(inputs);
	if (locale === "de") return de_home_resultstable_builtin2(inputs);
	if (locale === "it") return it_home_resultstable_builtin2(inputs);
	if (locale === "pt") return pt_home_resultstable_builtin2(inputs);
	if (locale === "zh") return zh_home_resultstable_builtin2(inputs);
	if (locale === "ja") return ja_home_resultstable_builtin2(inputs);
	if (locale === "ko") return ko_home_resultstable_builtin2(inputs);
	return ru_home_resultstable_builtin2(inputs);
});
var en_about_header_title = () => {
	return `About This Benchmark`;
};
var fr_about_header_title = () => {
	return `À propos de ce benchmark`;
};
var es_about_header_title = () => {
	return `Acerca de este benchmark`;
};
var de_about_header_title = () => {
	return `Über diesen Benchmark`;
};
var it_about_header_title = () => {
	return `Informazioni su questo benchmark`;
};
var pt_about_header_title = () => {
	return `Sobre este benchmark`;
};
var zh_about_header_title = () => {
	return `关于此基准测试`;
};
var ja_about_header_title = () => {
	return `このベンチマークについて`;
};
var ko_about_header_title = () => {
	return `About This Benchmark`;
};
var ru_about_header_title = () => {
	return `Об этом бенчмарке`;
};
var about_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_header_title(inputs);
	if (locale === "fr") return fr_about_header_title(inputs);
	if (locale === "es") return es_about_header_title(inputs);
	if (locale === "de") return de_about_header_title(inputs);
	if (locale === "it") return it_about_header_title(inputs);
	if (locale === "pt") return pt_about_header_title(inputs);
	if (locale === "zh") return zh_about_header_title(inputs);
	if (locale === "ja") return ja_about_header_title(inputs);
	if (locale === "ko") return ko_about_header_title(inputs);
	return ru_about_header_title(inputs);
});
var en_about_header_description = () => {
	return `This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.`;
};
var fr_about_header_description = () => {
	return `Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.`;
};
var es_about_header_description = () => {
	return `Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.`;
};
var de_about_header_description = () => {
	return `Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.`;
};
var it_about_header_description = () => {
	return `Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.`;
};
var pt_about_header_description = () => {
	return `Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.`;
};
var zh_about_header_description = () => {
	return `这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。`;
};
var ja_about_header_description = () => {
	return `これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。`;
};
var ko_about_header_description = () => {
	return `This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.`;
};
var ru_about_header_description = () => {
	return `Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.`;
};
var about_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_header_description(inputs);
	if (locale === "fr") return fr_about_header_description(inputs);
	if (locale === "es") return es_about_header_description(inputs);
	if (locale === "de") return de_about_header_description(inputs);
	if (locale === "it") return it_about_header_description(inputs);
	if (locale === "pt") return pt_about_header_description(inputs);
	if (locale === "zh") return zh_about_header_description(inputs);
	if (locale === "ja") return ja_about_header_description(inputs);
	if (locale === "ko") return ko_about_header_description(inputs);
	return ru_about_header_description(inputs);
});
var en_about_grid_whyexiststitle2 = () => {
	return `Why This Exists`;
};
var fr_about_grid_whyexiststitle2 = () => {
	return `Pourquoi ce projet existe`;
};
var es_about_grid_whyexiststitle2 = () => {
	return `Por qué existe esto`;
};
var de_about_grid_whyexiststitle2 = () => {
	return `Warum dies existiert`;
};
var it_about_grid_whyexiststitle2 = () => {
	return `Perché esiste`;
};
var pt_about_grid_whyexiststitle2 = () => {
	return `Por que isto existe`;
};
var zh_about_grid_whyexiststitle2 = () => {
	return `为什么存在这个测试`;
};
var ja_about_grid_whyexiststitle2 = () => {
	return `なぜこれが存在するのか`;
};
var ko_about_grid_whyexiststitle2 = () => {
	return `Why This Exists`;
};
var ru_about_grid_whyexiststitle2 = () => {
	return `Зачем это нужно`;
};
var about_grid_whyexiststitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_grid_whyexiststitle2(inputs);
	if (locale === "fr") return fr_about_grid_whyexiststitle2(inputs);
	if (locale === "es") return es_about_grid_whyexiststitle2(inputs);
	if (locale === "de") return de_about_grid_whyexiststitle2(inputs);
	if (locale === "it") return it_about_grid_whyexiststitle2(inputs);
	if (locale === "pt") return pt_about_grid_whyexiststitle2(inputs);
	if (locale === "zh") return zh_about_grid_whyexiststitle2(inputs);
	if (locale === "ja") return ja_about_grid_whyexiststitle2(inputs);
	if (locale === "ko") return ko_about_grid_whyexiststitle2(inputs);
	return ru_about_grid_whyexiststitle2(inputs);
});
var en_about_grid_whyexistsdesc2 = () => {
	return `Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.`;
};
var fr_about_grid_whyexistsdesc2 = () => {
	return `Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.`;
};
var es_about_grid_whyexistsdesc2 = () => {
	return `Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.`;
};
var de_about_grid_whyexistsdesc2 = () => {
	return `Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.`;
};
var it_about_grid_whyexistsdesc2 = () => {
	return `Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.`;
};
var pt_about_grid_whyexistsdesc2 = () => {
	return `Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.`;
};
var zh_about_grid_whyexistsdesc2 = () => {
	return `选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。`;
};
var ja_about_grid_whyexistsdesc2 = () => {
	return `i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。`;
};
var ko_about_grid_whyexistsdesc2 = () => {
	return `Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.`;
};
var ru_about_grid_whyexistsdesc2 = () => {
	return `Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.`;
};
var about_grid_whyexistsdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_grid_whyexistsdesc2(inputs);
	if (locale === "fr") return fr_about_grid_whyexistsdesc2(inputs);
	if (locale === "es") return es_about_grid_whyexistsdesc2(inputs);
	if (locale === "de") return de_about_grid_whyexistsdesc2(inputs);
	if (locale === "it") return it_about_grid_whyexistsdesc2(inputs);
	if (locale === "pt") return pt_about_grid_whyexistsdesc2(inputs);
	if (locale === "zh") return zh_about_grid_whyexistsdesc2(inputs);
	if (locale === "ja") return ja_about_grid_whyexistsdesc2(inputs);
	if (locale === "ko") return ko_about_grid_whyexistsdesc2(inputs);
	return ru_about_grid_whyexistsdesc2(inputs);
});
var en_about_grid_methodologytitle1 = () => {
	return `Methodology`;
};
var fr_about_grid_methodologytitle1 = () => {
	return `Méthodologie`;
};
var es_about_grid_methodologytitle1 = () => {
	return `Metodología`;
};
var de_about_grid_methodologytitle1 = () => {
	return `Methodik`;
};
var it_about_grid_methodologytitle1 = () => {
	return `Metodologia`;
};
var pt_about_grid_methodologytitle1 = () => {
	return `Metodologia`;
};
var zh_about_grid_methodologytitle1 = () => {
	return `方法论`;
};
var ja_about_grid_methodologytitle1 = () => {
	return `手法`;
};
var ko_about_grid_methodologytitle1 = () => {
	return `Methodology`;
};
var ru_about_grid_methodologytitle1 = () => {
	return `Методология`;
};
var about_grid_methodologytitle1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_grid_methodologytitle1(inputs);
	if (locale === "fr") return fr_about_grid_methodologytitle1(inputs);
	if (locale === "es") return es_about_grid_methodologytitle1(inputs);
	if (locale === "de") return de_about_grid_methodologytitle1(inputs);
	if (locale === "it") return it_about_grid_methodologytitle1(inputs);
	if (locale === "pt") return pt_about_grid_methodologytitle1(inputs);
	if (locale === "zh") return zh_about_grid_methodologytitle1(inputs);
	if (locale === "ja") return ja_about_grid_methodologytitle1(inputs);
	if (locale === "ko") return ko_about_grid_methodologytitle1(inputs);
	return ru_about_grid_methodologytitle1(inputs);
});
var en_about_grid_methodologydesc1 = () => {
	return `The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.`;
};
var fr_about_grid_methodologydesc1 = () => {
	return `La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.`;
};
var es_about_grid_methodologydesc1 = () => {
	return `La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.`;
};
var de_about_grid_methodologydesc1 = () => {
	return `Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.`;
};
var it_about_grid_methodologydesc1 = () => {
	return `La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.`;
};
var pt_about_grid_methodologydesc1 = () => {
	return `O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.`;
};
var zh_about_grid_methodologydesc1 = () => {
	return `相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。`;
};
var ja_about_grid_methodologydesc1 = () => {
	return `同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。`;
};
var ko_about_grid_methodologydesc1 = () => {
	return `The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.`;
};
var ru_about_grid_methodologydesc1 = () => {
	return `Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.`;
};
var about_grid_methodologydesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_grid_methodologydesc1(inputs);
	if (locale === "fr") return fr_about_grid_methodologydesc1(inputs);
	if (locale === "es") return es_about_grid_methodologydesc1(inputs);
	if (locale === "de") return de_about_grid_methodologydesc1(inputs);
	if (locale === "it") return it_about_grid_methodologydesc1(inputs);
	if (locale === "pt") return pt_about_grid_methodologydesc1(inputs);
	if (locale === "zh") return zh_about_grid_methodologydesc1(inputs);
	if (locale === "ja") return ja_about_grid_methodologydesc1(inputs);
	if (locale === "ko") return ko_about_grid_methodologydesc1(inputs);
	return ru_about_grid_methodologydesc1(inputs);
});
var en_about_whatwemeasure_title2 = () => {
	return `What We Measure`;
};
var fr_about_whatwemeasure_title2 = () => {
	return `Ce que nous mesurons`;
};
var es_about_whatwemeasure_title2 = () => {
	return `Qué medimos`;
};
var de_about_whatwemeasure_title2 = () => {
	return `Was wir messen`;
};
var it_about_whatwemeasure_title2 = () => {
	return `Cosa misuriamo`;
};
var pt_about_whatwemeasure_title2 = () => {
	return `O que medimos`;
};
var zh_about_whatwemeasure_title2 = () => {
	return `衡量指标`;
};
var ja_about_whatwemeasure_title2 = () => {
	return `測定項目`;
};
var ko_about_whatwemeasure_title2 = () => {
	return `What We Measure`;
};
var ru_about_whatwemeasure_title2 = () => {
	return `Что мы измеряем`;
};
var about_whatwemeasure_title2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_title2(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_title2(inputs);
	if (locale === "es") return es_about_whatwemeasure_title2(inputs);
	if (locale === "de") return de_about_whatwemeasure_title2(inputs);
	if (locale === "it") return it_about_whatwemeasure_title2(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_title2(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_title2(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_title2(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_title2(inputs);
	return ru_about_whatwemeasure_title2(inputs);
});
var en_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Bundle size impact`;
};
var fr_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Impact sur la taille du bundle`;
};
var es_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Impacto en el tamaño del bundle`;
};
var de_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Auswirkungen auf die Bundle-Größe`;
};
var it_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Impatto sulla dimensione del bundle`;
};
var pt_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Impacto no tamanho do bundle`;
};
var zh_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `包大小影响`;
};
var ja_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `バンドルサイズへの影響`;
};
var ko_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Bundle size impact`;
};
var ru_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Влияние на размер бандла`;
};
var about_whatwemeasure_bundlesizeimpact4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "es") return es_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "de") return de_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "it") return it_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_bundlesizeimpact4(inputs);
	return ru_about_whatwemeasure_bundlesizeimpact4(inputs);
});
var en_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.`;
};
var fr_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.`;
};
var es_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.`;
};
var de_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.`;
};
var it_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.`;
};
var pt_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.`;
};
var zh_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。`;
};
var ja_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。`;
};
var ko_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.`;
};
var ru_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.`;
};
var about_whatwemeasure_bundlesizeimpactdesc5 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "es") return es_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "de") return de_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "it") return it_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	return ru_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
});
var en_about_whatwemeasure_renderingoverhead3 = () => {
	return `Rendering overhead`;
};
var fr_about_whatwemeasure_renderingoverhead3 = () => {
	return `Surcharge de rendu`;
};
var es_about_whatwemeasure_renderingoverhead3 = () => {
	return `Sobrecarga de renderizado`;
};
var de_about_whatwemeasure_renderingoverhead3 = () => {
	return `Rendering-Overhead`;
};
var it_about_whatwemeasure_renderingoverhead3 = () => {
	return `Sovrapprezzo di rendering`;
};
var pt_about_whatwemeasure_renderingoverhead3 = () => {
	return `Sobrecarga de renderização`;
};
var zh_about_whatwemeasure_renderingoverhead3 = () => {
	return `渲染开销`;
};
var ja_about_whatwemeasure_renderingoverhead3 = () => {
	return `レンダリングのオーバーヘッド`;
};
var ko_about_whatwemeasure_renderingoverhead3 = () => {
	return `Rendering overhead`;
};
var ru_about_whatwemeasure_renderingoverhead3 = () => {
	return `Накладные расходы на рендеринг`;
};
var about_whatwemeasure_renderingoverhead3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "es") return es_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "de") return de_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "it") return it_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_renderingoverhead3(inputs);
	return ru_about_whatwemeasure_renderingoverhead3(inputs);
});
var en_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.`;
};
var fr_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.`;
};
var es_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.`;
};
var de_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.`;
};
var it_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.`;
};
var pt_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.`;
};
var zh_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。`;
};
var ja_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。`;
};
var ko_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.`;
};
var ru_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.`;
};
var about_whatwemeasure_renderingoverheaddesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "es") return es_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "de") return de_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "it") return it_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_renderingoverheaddesc4(inputs);
	return ru_about_whatwemeasure_renderingoverheaddesc4(inputs);
});
var en_about_whatwemeasure_hydrationcost3 = () => {
	return `Hydration cost`;
};
var fr_about_whatwemeasure_hydrationcost3 = () => {
	return `Coût d'hydratation`;
};
var es_about_whatwemeasure_hydrationcost3 = () => {
	return `Coste de hidratación`;
};
var de_about_whatwemeasure_hydrationcost3 = () => {
	return `Hydrierungskosten`;
};
var it_about_whatwemeasure_hydrationcost3 = () => {
	return `Costo di idratazione`;
};
var pt_about_whatwemeasure_hydrationcost3 = () => {
	return `Custo de hidratação`;
};
var zh_about_whatwemeasure_hydrationcost3 = () => {
	return `注水成本`;
};
var ja_about_whatwemeasure_hydrationcost3 = () => {
	return `ハイドレーションコスト`;
};
var ko_about_whatwemeasure_hydrationcost3 = () => {
	return `Hydration cost`;
};
var ru_about_whatwemeasure_hydrationcost3 = () => {
	return `Стоимость гидратации`;
};
var about_whatwemeasure_hydrationcost3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "es") return es_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "de") return de_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "it") return it_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_hydrationcost3(inputs);
	return ru_about_whatwemeasure_hydrationcost3(inputs);
});
var en_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.`;
};
var fr_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.`;
};
var es_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.`;
};
var de_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.`;
};
var it_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.`;
};
var pt_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.`;
};
var zh_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。`;
};
var ja_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。`;
};
var ko_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.`;
};
var ru_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.`;
};
var about_whatwemeasure_hydrationcostdesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "es") return es_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "de") return de_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "it") return it_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_hydrationcostdesc4(inputs);
	return ru_about_whatwemeasure_hydrationcostdesc4(inputs);
});
var en_about_whatwemeasure_lazyloading3 = () => {
	return `Lazy loading effectiveness`;
};
var fr_about_whatwemeasure_lazyloading3 = () => {
	return `Efficacité du chargement paresseux`;
};
var es_about_whatwemeasure_lazyloading3 = () => {
	return `Eficacia de la carga diferida`;
};
var de_about_whatwemeasure_lazyloading3 = () => {
	return `Effektivität von Lazy Loading`;
};
var it_about_whatwemeasure_lazyloading3 = () => {
	return `Efficacia del caricamento pigro`;
};
var pt_about_whatwemeasure_lazyloading3 = () => {
	return `Eficácia do carregamento lento`;
};
var zh_about_whatwemeasure_lazyloading3 = () => {
	return `延迟加载有效性`;
};
var ja_about_whatwemeasure_lazyloading3 = () => {
	return `遅延読み込みの有効性`;
};
var ko_about_whatwemeasure_lazyloading3 = () => {
	return `Lazy loading effectiveness`;
};
var ru_about_whatwemeasure_lazyloading3 = () => {
	return `Эффективность ленивой загрузки`;
};
var about_whatwemeasure_lazyloading3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "es") return es_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "de") return de_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "it") return it_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_lazyloading3(inputs);
	return ru_about_whatwemeasure_lazyloading3(inputs);
});
var en_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).`;
};
var fr_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?`;
};
var es_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).`;
};
var de_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).`;
};
var it_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).`;
};
var pt_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).`;
};
var zh_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。`;
};
var ja_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。`;
};
var ko_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).`;
};
var ru_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).`;
};
var about_whatwemeasure_lazyloadingdesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "es") return es_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "de") return de_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "it") return it_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_lazyloadingdesc4(inputs);
	return ru_about_whatwemeasure_lazyloadingdesc4(inputs);
});
var en_about_whatwemeasure_localeswitch3 = () => {
	return `Locale switch speed`;
};
var fr_about_whatwemeasure_localeswitch3 = () => {
	return `Vitesse de changement de langue`;
};
var es_about_whatwemeasure_localeswitch3 = () => {
	return `Velocidad de cambio de idioma`;
};
var de_about_whatwemeasure_localeswitch3 = () => {
	return `Geschwindigkeit des Sprachwechsels`;
};
var it_about_whatwemeasure_localeswitch3 = () => {
	return `Velocità di cambio lingua`;
};
var pt_about_whatwemeasure_localeswitch3 = () => {
	return `Velocidade de troca de localidade`;
};
var zh_about_whatwemeasure_localeswitch3 = () => {
	return `语言环境切换速度`;
};
var ja_about_whatwemeasure_localeswitch3 = () => {
	return `ロケール切り替え速度`;
};
var ko_about_whatwemeasure_localeswitch3 = () => {
	return `Locale switch speed`;
};
var ru_about_whatwemeasure_localeswitch3 = () => {
	return `Скорость переключения языка`;
};
var about_whatwemeasure_localeswitch3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "es") return es_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "de") return de_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "it") return it_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_localeswitch3(inputs);
	return ru_about_whatwemeasure_localeswitch3(inputs);
});
var en_about_whatwemeasure_localeswitchdesc4 = () => {
	return `How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.`;
};
var fr_about_whatwemeasure_localeswitchdesc4 = () => {
	return `À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.`;
};
var es_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.`;
};
var de_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.`;
};
var it_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.`;
};
var pt_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.`;
};
var zh_about_whatwemeasure_localeswitchdesc4 = () => {
	return `应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。`;
};
var ja_about_whatwemeasure_localeswitchdesc4 = () => {
	return `実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。`;
};
var ko_about_whatwemeasure_localeswitchdesc4 = () => {
	return `How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.`;
};
var ru_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.`;
};
var about_whatwemeasure_localeswitchdesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "es") return es_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "de") return de_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "it") return it_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_localeswitchdesc4(inputs);
	return ru_about_whatwemeasure_localeswitchdesc4(inputs);
});
var en_blog_header_title = () => {
	return `Blog`;
};
var fr_blog_header_title = () => {
	return `Blog`;
};
var es_blog_header_title = () => {
	return `Blog`;
};
var de_blog_header_title = () => {
	return `Blog`;
};
var it_blog_header_title = () => {
	return `Blog`;
};
var pt_blog_header_title = () => {
	return `Blog`;
};
var zh_blog_header_title = () => {
	return `博客`;
};
var ja_blog_header_title = () => {
	return `ブログ`;
};
var ko_blog_header_title = () => {
	return `Blog`;
};
var ru_blog_header_title = () => {
	return `Блог`;
};
var blog_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_header_title(inputs);
	if (locale === "fr") return fr_blog_header_title(inputs);
	if (locale === "es") return es_blog_header_title(inputs);
	if (locale === "de") return de_blog_header_title(inputs);
	if (locale === "it") return it_blog_header_title(inputs);
	if (locale === "pt") return pt_blog_header_title(inputs);
	if (locale === "zh") return zh_blog_header_title(inputs);
	if (locale === "ja") return ja_blog_header_title(inputs);
	if (locale === "ko") return ko_blog_header_title(inputs);
	return ru_blog_header_title(inputs);
});
var en_blog_header_description = () => {
	return `Insights, tutorials, and analysis from the i18n community.`;
};
var fr_blog_header_description = () => {
	return `Articles, tutoriels et analyses de la communauté i18n.`;
};
var es_blog_header_description = () => {
	return `Información, tutoriales y análisis de la comunidad i18n.`;
};
var de_blog_header_description = () => {
	return `Einblicke, Tutorials und Analysen aus der i18n-Community.`;
};
var it_blog_header_description = () => {
	return `Approfondimenti, tutorial e analisi dalla comunità i18n.`;
};
var pt_blog_header_description = () => {
	return `Insights, tutoriais e análises da comunidade i18n.`;
};
var zh_blog_header_description = () => {
	return `来自 i18n 社区的见解、教程和分析。`;
};
var ja_blog_header_description = () => {
	return `i18nコミュニティからのインサイト、チュートリアル、分析。`;
};
var ko_blog_header_description = () => {
	return `Insights, tutorials, and analysis from the i18n community.`;
};
var ru_blog_header_description = () => {
	return `Инсайты, туториалы и аналитика от сообщества i18n.`;
};
var blog_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_header_description(inputs);
	if (locale === "fr") return fr_blog_header_description(inputs);
	if (locale === "es") return es_blog_header_description(inputs);
	if (locale === "de") return de_blog_header_description(inputs);
	if (locale === "it") return it_blog_header_description(inputs);
	if (locale === "pt") return pt_blog_header_description(inputs);
	if (locale === "zh") return zh_blog_header_description(inputs);
	if (locale === "ja") return ja_blog_header_description(inputs);
	if (locale === "ko") return ko_blog_header_description(inputs);
	return ru_blog_header_description(inputs);
});
var en_blog_list_readmore1 = () => {
	return `Read More →`;
};
var fr_blog_list_readmore1 = () => {
	return `Lire la suite →`;
};
var es_blog_list_readmore1 = () => {
	return `Leer más →`;
};
var de_blog_list_readmore1 = () => {
	return `Mehr lesen →`;
};
var it_blog_list_readmore1 = () => {
	return `Leggi di più →`;
};
var pt_blog_list_readmore1 = () => {
	return `Ler Mais →`;
};
var zh_blog_list_readmore1 = () => {
	return `阅读更多 →`;
};
var ja_blog_list_readmore1 = () => {
	return `続きを読む →`;
};
var ko_blog_list_readmore1 = () => {
	return `Read More →`;
};
var ru_blog_list_readmore1 = () => {
	return `Читать далее →`;
};
var blog_list_readmore1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_readmore1(inputs);
	if (locale === "fr") return fr_blog_list_readmore1(inputs);
	if (locale === "es") return es_blog_list_readmore1(inputs);
	if (locale === "de") return de_blog_list_readmore1(inputs);
	if (locale === "it") return it_blog_list_readmore1(inputs);
	if (locale === "pt") return pt_blog_list_readmore1(inputs);
	if (locale === "zh") return zh_blog_list_readmore1(inputs);
	if (locale === "ja") return ja_blog_list_readmore1(inputs);
	if (locale === "ko") return ko_blog_list_readmore1(inputs);
	return ru_blog_list_readmore1(inputs);
});
var en_blog_list_post1title1 = () => {
	return `Comparing i18n Libraries in 2026: A Deep Dive`;
};
var fr_blog_list_post1title1 = () => {
	return `Comparer les bibliothèques i18n en 2026 : plongée détaillée`;
};
var es_blog_list_post1title1 = () => {
	return `Comparativa de bibliotecas i18n en 2026: Un análisis profundo`;
};
var de_blog_list_post1title1 = () => {
	return `Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick`;
};
var it_blog_list_post1title1 = () => {
	return `Confronto delle librerie i18n nel 2026: un'analisi approfondita`;
};
var pt_blog_list_post1title1 = () => {
	return `Comparando bibliotecas i18n em 2026: um mergulho profundo`;
};
var zh_blog_list_post1title1 = () => {
	return `2026 年 i18n 库对比：深度分析`;
};
var ja_blog_list_post1title1 = () => {
	return `2026年のi18nライブラリ比較：ディープダイブ`;
};
var ko_blog_list_post1title1 = () => {
	return `Comparing i18n Libraries in 2026: A Deep Dive`;
};
var ru_blog_list_post1title1 = () => {
	return `Сравнение библиотек i18n в 2026 году: глубокое погружение`;
};
var blog_list_post1title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post1title1(inputs);
	if (locale === "fr") return fr_blog_list_post1title1(inputs);
	if (locale === "es") return es_blog_list_post1title1(inputs);
	if (locale === "de") return de_blog_list_post1title1(inputs);
	if (locale === "it") return it_blog_list_post1title1(inputs);
	if (locale === "pt") return pt_blog_list_post1title1(inputs);
	if (locale === "zh") return zh_blog_list_post1title1(inputs);
	if (locale === "ja") return ja_blog_list_post1title1(inputs);
	if (locale === "ko") return ko_blog_list_post1title1(inputs);
	return ru_blog_list_post1title1(inputs);
});
var en_blog_list_post1date1 = () => {
	return `March 15, 2026`;
};
var fr_blog_list_post1date1 = () => {
	return `15 mars 2026`;
};
var es_blog_list_post1date1 = () => {
	return `15 de marzo de 2026`;
};
var de_blog_list_post1date1 = () => {
	return `15. März 2026`;
};
var it_blog_list_post1date1 = () => {
	return `15 marzo 2026`;
};
var pt_blog_list_post1date1 = () => {
	return `15 de março de 2026`;
};
var zh_blog_list_post1date1 = () => {
	return `2026年3月15日`;
};
var ja_blog_list_post1date1 = () => {
	return `2026年3月15日`;
};
var ko_blog_list_post1date1 = () => {
	return `March 15, 2026`;
};
var ru_blog_list_post1date1 = () => {
	return `15 марта 2026 г.`;
};
var blog_list_post1date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post1date1(inputs);
	if (locale === "fr") return fr_blog_list_post1date1(inputs);
	if (locale === "es") return es_blog_list_post1date1(inputs);
	if (locale === "de") return de_blog_list_post1date1(inputs);
	if (locale === "it") return it_blog_list_post1date1(inputs);
	if (locale === "pt") return pt_blog_list_post1date1(inputs);
	if (locale === "zh") return zh_blog_list_post1date1(inputs);
	if (locale === "ja") return ja_blog_list_post1date1(inputs);
	if (locale === "ko") return ko_blog_list_post1date1(inputs);
	return ru_blog_list_post1date1(inputs);
});
var en_blog_list_post1excerpt1 = () => {
	return `We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.`;
};
var fr_blog_list_post1excerpt1 = () => {
	return `Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.`;
};
var es_blog_list_post1excerpt1 = () => {
	return `Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.`;
};
var de_blog_list_post1excerpt1 = () => {
	return `Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.`;
};
var it_blog_list_post1excerpt1 = () => {
	return `Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.`;
};
var pt_blog_list_post1excerpt1 = () => {
	return `Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.`;
};
var zh_blog_list_post1excerpt1 = () => {
	return `我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。`;
};
var ja_blog_list_post1excerpt1 = () => {
	return `パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。`;
};
var ko_blog_list_post1excerpt1 = () => {
	return `We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.`;
};
var ru_blog_list_post1excerpt1 = () => {
	return `Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.`;
};
var blog_list_post1excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post1excerpt1(inputs);
	if (locale === "fr") return fr_blog_list_post1excerpt1(inputs);
	if (locale === "es") return es_blog_list_post1excerpt1(inputs);
	if (locale === "de") return de_blog_list_post1excerpt1(inputs);
	if (locale === "it") return it_blog_list_post1excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post1excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post1excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post1excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post1excerpt1(inputs);
	return ru_blog_list_post1excerpt1(inputs);
});
var en_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var fr_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var es_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var de_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var it_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var pt_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var zh_blog_list_post1category1 = () => {
	return `基准测试`;
};
var ja_blog_list_post1category1 = () => {
	return `ベンチマーク`;
};
var ko_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var ru_blog_list_post1category1 = () => {
	return `Бенчмарк`;
};
var blog_list_post1category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post1category1(inputs);
	if (locale === "fr") return fr_blog_list_post1category1(inputs);
	if (locale === "es") return es_blog_list_post1category1(inputs);
	if (locale === "de") return de_blog_list_post1category1(inputs);
	if (locale === "it") return it_blog_list_post1category1(inputs);
	if (locale === "pt") return pt_blog_list_post1category1(inputs);
	if (locale === "zh") return zh_blog_list_post1category1(inputs);
	if (locale === "ja") return ja_blog_list_post1category1(inputs);
	if (locale === "ko") return ko_blog_list_post1category1(inputs);
	return ru_blog_list_post1category1(inputs);
});
var en_blog_list_post2title1 = () => {
	return `How to Reduce Your i18n Bundle by 60%`;
};
var fr_blog_list_post2title1 = () => {
	return `Réduire votre bundle i18n de 60 %`;
};
var es_blog_list_post2title1 = () => {
	return `Cómo reducir tu bundle i18n en un 60%`;
};
var de_blog_list_post2title1 = () => {
	return `Wie Sie Ihr i18n-Bundle um 60 % reduzieren`;
};
var it_blog_list_post2title1 = () => {
	return `Come ridurre il bundle i18n del 60%`;
};
var pt_blog_list_post2title1 = () => {
	return `Como reduzir seu bundle i18n em 60%`;
};
var zh_blog_list_post2title1 = () => {
	return `如何将 i18n 包大小减少 60%`;
};
var ja_blog_list_post2title1 = () => {
	return `i18nバンドルを60%削減する方法`;
};
var ko_blog_list_post2title1 = () => {
	return `How to Reduce Your i18n Bundle by 60%`;
};
var ru_blog_list_post2title1 = () => {
	return `Как уменьшить бандл i18n на 60%`;
};
var blog_list_post2title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post2title1(inputs);
	if (locale === "fr") return fr_blog_list_post2title1(inputs);
	if (locale === "es") return es_blog_list_post2title1(inputs);
	if (locale === "de") return de_blog_list_post2title1(inputs);
	if (locale === "it") return it_blog_list_post2title1(inputs);
	if (locale === "pt") return pt_blog_list_post2title1(inputs);
	if (locale === "zh") return zh_blog_list_post2title1(inputs);
	if (locale === "ja") return ja_blog_list_post2title1(inputs);
	if (locale === "ko") return ko_blog_list_post2title1(inputs);
	return ru_blog_list_post2title1(inputs);
});
var en_blog_list_post2date1 = () => {
	return `March 8, 2026`;
};
var fr_blog_list_post2date1 = () => {
	return `8 mars 2026`;
};
var es_blog_list_post2date1 = () => {
	return `8 de marzo de 2026`;
};
var de_blog_list_post2date1 = () => {
	return `8. März 2026`;
};
var it_blog_list_post2date1 = () => {
	return `8 marzo 2026`;
};
var pt_blog_list_post2date1 = () => {
	return `8 de março de 2026`;
};
var zh_blog_list_post2date1 = () => {
	return `2026年3月8日`;
};
var ja_blog_list_post2date1 = () => {
	return `2026年3月8日`;
};
var ko_blog_list_post2date1 = () => {
	return `March 8, 2026`;
};
var ru_blog_list_post2date1 = () => {
	return `8 марта 2026 г.`;
};
var blog_list_post2date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post2date1(inputs);
	if (locale === "fr") return fr_blog_list_post2date1(inputs);
	if (locale === "es") return es_blog_list_post2date1(inputs);
	if (locale === "de") return de_blog_list_post2date1(inputs);
	if (locale === "it") return it_blog_list_post2date1(inputs);
	if (locale === "pt") return pt_blog_list_post2date1(inputs);
	if (locale === "zh") return zh_blog_list_post2date1(inputs);
	if (locale === "ja") return ja_blog_list_post2date1(inputs);
	if (locale === "ko") return ko_blog_list_post2date1(inputs);
	return ru_blog_list_post2date1(inputs);
});
var en_blog_list_post2excerpt1 = () => {
	return `Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.`;
};
var fr_blog_list_post2excerpt1 = () => {
	return `Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.`;
};
var es_blog_list_post2excerpt1 = () => {
	return `Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.`;
};
var de_blog_list_post2excerpt1 = () => {
	return `Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.`;
};
var it_blog_list_post2excerpt1 = () => {
	return `Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.`;
};
var pt_blog_list_post2excerpt1 = () => {
	return `Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.`;
};
var zh_blog_list_post2excerpt1 = () => {
	return `优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。`;
};
var ja_blog_list_post2excerpt1 = () => {
	return `遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。`;
};
var ko_blog_list_post2excerpt1 = () => {
	return `Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.`;
};
var ru_blog_list_post2excerpt1 = () => {
	return `Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.`;
};
var blog_list_post2excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post2excerpt1(inputs);
	if (locale === "fr") return fr_blog_list_post2excerpt1(inputs);
	if (locale === "es") return es_blog_list_post2excerpt1(inputs);
	if (locale === "de") return de_blog_list_post2excerpt1(inputs);
	if (locale === "it") return it_blog_list_post2excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post2excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post2excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post2excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post2excerpt1(inputs);
	return ru_blog_list_post2excerpt1(inputs);
});
var en_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var fr_blog_list_post2category1 = () => {
	return `Tutoriel`;
};
var es_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var de_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var it_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var pt_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var zh_blog_list_post2category1 = () => {
	return `教程`;
};
var ja_blog_list_post2category1 = () => {
	return `チュートリアル`;
};
var ko_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var ru_blog_list_post2category1 = () => {
	return `Туториал`;
};
var blog_list_post2category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post2category1(inputs);
	if (locale === "fr") return fr_blog_list_post2category1(inputs);
	if (locale === "es") return es_blog_list_post2category1(inputs);
	if (locale === "de") return de_blog_list_post2category1(inputs);
	if (locale === "it") return it_blog_list_post2category1(inputs);
	if (locale === "pt") return pt_blog_list_post2category1(inputs);
	if (locale === "zh") return zh_blog_list_post2category1(inputs);
	if (locale === "ja") return ja_blog_list_post2category1(inputs);
	if (locale === "ko") return ko_blog_list_post2category1(inputs);
	return ru_blog_list_post2category1(inputs);
});
var en_blog_list_post3title1 = () => {
	return `The State of Internationalization in React`;
};
var fr_blog_list_post3title1 = () => {
	return `État de l'internationalisation dans l'écosystème React`;
};
var es_blog_list_post3title1 = () => {
	return `El estado de la internacionalización en React`;
};
var de_blog_list_post3title1 = () => {
	return `Der Stand der Internationalisierung in React`;
};
var it_blog_list_post3title1 = () => {
	return `Lo stato dell'internazionalizzazione in React`;
};
var pt_blog_list_post3title1 = () => {
	return `O estado da internacionalização no React`;
};
var zh_blog_list_post3title1 = () => {
	return `React 国际化现状`;
};
var ja_blog_list_post3title1 = () => {
	return `Reactにおける国際化の現状`;
};
var ko_blog_list_post3title1 = () => {
	return `The State of Internationalization in React`;
};
var ru_blog_list_post3title1 = () => {
	return `Состояние интернационализации в React`;
};
var blog_list_post3title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post3title1(inputs);
	if (locale === "fr") return fr_blog_list_post3title1(inputs);
	if (locale === "es") return es_blog_list_post3title1(inputs);
	if (locale === "de") return de_blog_list_post3title1(inputs);
	if (locale === "it") return it_blog_list_post3title1(inputs);
	if (locale === "pt") return pt_blog_list_post3title1(inputs);
	if (locale === "zh") return zh_blog_list_post3title1(inputs);
	if (locale === "ja") return ja_blog_list_post3title1(inputs);
	if (locale === "ko") return ko_blog_list_post3title1(inputs);
	return ru_blog_list_post3title1(inputs);
});
var en_blog_list_post3date1 = () => {
	return `February 28, 2026`;
};
var fr_blog_list_post3date1 = () => {
	return `28 février 2026`;
};
var es_blog_list_post3date1 = () => {
	return `28 de febrero de 2026`;
};
var de_blog_list_post3date1 = () => {
	return `28. Februar 2026`;
};
var it_blog_list_post3date1 = () => {
	return `28 febbraio 2026`;
};
var pt_blog_list_post3date1 = () => {
	return `28 de fevereiro de 2026`;
};
var zh_blog_list_post3date1 = () => {
	return `2026年2月28日`;
};
var ja_blog_list_post3date1 = () => {
	return `2026年2月28日`;
};
var ko_blog_list_post3date1 = () => {
	return `February 28, 2026`;
};
var ru_blog_list_post3date1 = () => {
	return `28 февраля 2026 г.`;
};
var blog_list_post3date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post3date1(inputs);
	if (locale === "fr") return fr_blog_list_post3date1(inputs);
	if (locale === "es") return es_blog_list_post3date1(inputs);
	if (locale === "de") return de_blog_list_post3date1(inputs);
	if (locale === "it") return it_blog_list_post3date1(inputs);
	if (locale === "pt") return pt_blog_list_post3date1(inputs);
	if (locale === "zh") return zh_blog_list_post3date1(inputs);
	if (locale === "ja") return ja_blog_list_post3date1(inputs);
	if (locale === "ko") return ko_blog_list_post3date1(inputs);
	return ru_blog_list_post3date1(inputs);
});
var en_blog_list_post3excerpt1 = () => {
	return `An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.`;
};
var fr_blog_list_post3excerpt1 = () => {
	return `Panorama des tendances, patterns émergents et préférences de la communauté.`;
};
var es_blog_list_post3excerpt1 = () => {
	return `Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.`;
};
var de_blog_list_post3excerpt1 = () => {
	return `Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.`;
};
var it_blog_list_post3excerpt1 = () => {
	return `Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.`;
};
var pt_blog_list_post3excerpt1 = () => {
	return `Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.`;
};
var zh_blog_list_post3excerpt1 = () => {
	return `React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。`;
};
var ja_blog_list_post3excerpt1 = () => {
	return `トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。`;
};
var ko_blog_list_post3excerpt1 = () => {
	return `An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.`;
};
var ru_blog_list_post3excerpt1 = () => {
	return `Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.`;
};
var blog_list_post3excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post3excerpt1(inputs);
	if (locale === "fr") return fr_blog_list_post3excerpt1(inputs);
	if (locale === "es") return es_blog_list_post3excerpt1(inputs);
	if (locale === "de") return de_blog_list_post3excerpt1(inputs);
	if (locale === "it") return it_blog_list_post3excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post3excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post3excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post3excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post3excerpt1(inputs);
	return ru_blog_list_post3excerpt1(inputs);
});
var en_blog_list_post3category1 = () => {
	return `Analysis`;
};
var fr_blog_list_post3category1 = () => {
	return `Analyse`;
};
var es_blog_list_post3category1 = () => {
	return `Análisis`;
};
var de_blog_list_post3category1 = () => {
	return `Analyse`;
};
var it_blog_list_post3category1 = () => {
	return `Analisi`;
};
var pt_blog_list_post3category1 = () => {
	return `Análise`;
};
var zh_blog_list_post3category1 = () => {
	return `分析`;
};
var ja_blog_list_post3category1 = () => {
	return `分析`;
};
var ko_blog_list_post3category1 = () => {
	return `Analysis`;
};
var ru_blog_list_post3category1 = () => {
	return `Анализ`;
};
var blog_list_post3category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post3category1(inputs);
	if (locale === "fr") return fr_blog_list_post3category1(inputs);
	if (locale === "es") return es_blog_list_post3category1(inputs);
	if (locale === "de") return de_blog_list_post3category1(inputs);
	if (locale === "it") return it_blog_list_post3category1(inputs);
	if (locale === "pt") return pt_blog_list_post3category1(inputs);
	if (locale === "zh") return zh_blog_list_post3category1(inputs);
	if (locale === "ja") return ja_blog_list_post3category1(inputs);
	if (locale === "ko") return ko_blog_list_post3category1(inputs);
	return ru_blog_list_post3category1(inputs);
});
var en_blog_list_post4title1 = () => {
	return `Migrating from react-i18next to Lingui`;
};
var fr_blog_list_post4title1 = () => {
	return `Migrer de react-i18next vers Lingui`;
};
var es_blog_list_post4title1 = () => {
	return `Migración de react-i18next a Lingui`;
};
var de_blog_list_post4title1 = () => {
	return `Migration von react-i18next zu Lingui`;
};
var it_blog_list_post4title1 = () => {
	return `Migrazione da react-i18next a Lingui`;
};
var pt_blog_list_post4title1 = () => {
	return `Migrando de react-i18next para o Lingui`;
};
var zh_blog_list_post4title1 = () => {
	return `从 react-i18next 迁移到 Lingui`;
};
var ja_blog_list_post4title1 = () => {
	return `react-i18nextからLinguiへの移行`;
};
var ko_blog_list_post4title1 = () => {
	return `Migrating from react-i18next to Lingui`;
};
var ru_blog_list_post4title1 = () => {
	return `Миграция с react-i18next на Lingui`;
};
var blog_list_post4title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post4title1(inputs);
	if (locale === "fr") return fr_blog_list_post4title1(inputs);
	if (locale === "es") return es_blog_list_post4title1(inputs);
	if (locale === "de") return de_blog_list_post4title1(inputs);
	if (locale === "it") return it_blog_list_post4title1(inputs);
	if (locale === "pt") return pt_blog_list_post4title1(inputs);
	if (locale === "zh") return zh_blog_list_post4title1(inputs);
	if (locale === "ja") return ja_blog_list_post4title1(inputs);
	if (locale === "ko") return ko_blog_list_post4title1(inputs);
	return ru_blog_list_post4title1(inputs);
});
var en_blog_list_post4date1 = () => {
	return `February 15, 2026`;
};
var fr_blog_list_post4date1 = () => {
	return `15 février 2026`;
};
var es_blog_list_post4date1 = () => {
	return `15 de febrero de 2026`;
};
var de_blog_list_post4date1 = () => {
	return `15. Februar 2026`;
};
var it_blog_list_post4date1 = () => {
	return `15 febbraio 2026`;
};
var pt_blog_list_post4date1 = () => {
	return `15 de fevereiro de 2026`;
};
var zh_blog_list_post4date1 = () => {
	return `2026年2月15日`;
};
var ja_blog_list_post4date1 = () => {
	return `2026年2月15日`;
};
var ko_blog_list_post4date1 = () => {
	return `February 15, 2026`;
};
var ru_blog_list_post4date1 = () => {
	return `15 февраля 2026 г.`;
};
var blog_list_post4date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post4date1(inputs);
	if (locale === "fr") return fr_blog_list_post4date1(inputs);
	if (locale === "es") return es_blog_list_post4date1(inputs);
	if (locale === "de") return de_blog_list_post4date1(inputs);
	if (locale === "it") return it_blog_list_post4date1(inputs);
	if (locale === "pt") return pt_blog_list_post4date1(inputs);
	if (locale === "zh") return zh_blog_list_post4date1(inputs);
	if (locale === "ja") return ja_blog_list_post4date1(inputs);
	if (locale === "ko") return ko_blog_list_post4date1(inputs);
	return ru_blog_list_post4date1(inputs);
});
var en_blog_list_post4excerpt1 = () => {
	return `A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.`;
};
var fr_blog_list_post4excerpt1 = () => {
	return `Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.`;
};
var es_blog_list_post4excerpt1 = () => {
	return `Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.`;
};
var de_blog_list_post4excerpt1 = () => {
	return `Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.`;
};
var it_blog_list_post4excerpt1 = () => {
	return `Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.`;
};
var pt_blog_list_post4excerpt1 = () => {
	return `Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.`;
};
var zh_blog_list_post4excerpt1 = () => {
	return `关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。`;
};
var ja_blog_list_post4excerpt1 = () => {
	return `50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。`;
};
var ko_blog_list_post4excerpt1 = () => {
	return `A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.`;
};
var ru_blog_list_post4excerpt1 = () => {
	return `Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.`;
};
var blog_list_post4excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post4excerpt1(inputs);
	if (locale === "fr") return fr_blog_list_post4excerpt1(inputs);
	if (locale === "es") return es_blog_list_post4excerpt1(inputs);
	if (locale === "de") return de_blog_list_post4excerpt1(inputs);
	if (locale === "it") return it_blog_list_post4excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post4excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post4excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post4excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post4excerpt1(inputs);
	return ru_blog_list_post4excerpt1(inputs);
});
var en_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var fr_blog_list_post4category1 = () => {
	return `Tutoriel`;
};
var es_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var de_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var it_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var pt_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var zh_blog_list_post4category1 = () => {
	return `教程`;
};
var ja_blog_list_post4category1 = () => {
	return `チュートリアル`;
};
var ko_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var ru_blog_list_post4category1 = () => {
	return `Туториал`;
};
var blog_list_post4category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post4category1(inputs);
	if (locale === "fr") return fr_blog_list_post4category1(inputs);
	if (locale === "es") return es_blog_list_post4category1(inputs);
	if (locale === "de") return de_blog_list_post4category1(inputs);
	if (locale === "it") return it_blog_list_post4category1(inputs);
	if (locale === "pt") return pt_blog_list_post4category1(inputs);
	if (locale === "zh") return zh_blog_list_post4category1(inputs);
	if (locale === "ja") return ja_blog_list_post4category1(inputs);
	if (locale === "ko") return ko_blog_list_post4category1(inputs);
	return ru_blog_list_post4category1(inputs);
});
var en_blog_list_post5title1 = () => {
	return `Server Components and i18n: What Changes?`;
};
var fr_blog_list_post5title1 = () => {
	return `Server Components et i18n : qu'est-ce qui change ?`;
};
var es_blog_list_post5title1 = () => {
	return `Server Components e i18n: ¿Qué cambia?`;
};
var de_blog_list_post5title1 = () => {
	return `Server Components und i18n: Was ändert sich?`;
};
var it_blog_list_post5title1 = () => {
	return `Server Components e i18n: cosa cambia?`;
};
var pt_blog_list_post5title1 = () => {
	return `Server Components e i18n: o que muda?`;
};
var zh_blog_list_post5title1 = () => {
	return `Server Components 与 i18n：发生了什么变化？`;
};
var ja_blog_list_post5title1 = () => {
	return `Server Componentsとi18n：何が変わるのか？`;
};
var ko_blog_list_post5title1 = () => {
	return `Server Components and i18n: What Changes?`;
};
var ru_blog_list_post5title1 = () => {
	return `Server Components и i18n: что меняется?`;
};
var blog_list_post5title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post5title1(inputs);
	if (locale === "fr") return fr_blog_list_post5title1(inputs);
	if (locale === "es") return es_blog_list_post5title1(inputs);
	if (locale === "de") return de_blog_list_post5title1(inputs);
	if (locale === "it") return it_blog_list_post5title1(inputs);
	if (locale === "pt") return pt_blog_list_post5title1(inputs);
	if (locale === "zh") return zh_blog_list_post5title1(inputs);
	if (locale === "ja") return ja_blog_list_post5title1(inputs);
	if (locale === "ko") return ko_blog_list_post5title1(inputs);
	return ru_blog_list_post5title1(inputs);
});
var en_blog_list_post5date1 = () => {
	return `February 1, 2026`;
};
var fr_blog_list_post5date1 = () => {
	return `1er février 2026`;
};
var es_blog_list_post5date1 = () => {
	return `1 de febrero de 2026`;
};
var de_blog_list_post5date1 = () => {
	return `1. Februar 2026`;
};
var it_blog_list_post5date1 = () => {
	return `1 febbraio 2026`;
};
var pt_blog_list_post5date1 = () => {
	return `1 de fevereiro de 2026`;
};
var zh_blog_list_post5date1 = () => {
	return `2026年2月1日`;
};
var ja_blog_list_post5date1 = () => {
	return `2026年2月1日`;
};
var ko_blog_list_post5date1 = () => {
	return `February 1, 2026`;
};
var ru_blog_list_post5date1 = () => {
	return `1 февраля 2026 г.`;
};
var blog_list_post5date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post5date1(inputs);
	if (locale === "fr") return fr_blog_list_post5date1(inputs);
	if (locale === "es") return es_blog_list_post5date1(inputs);
	if (locale === "de") return de_blog_list_post5date1(inputs);
	if (locale === "it") return it_blog_list_post5date1(inputs);
	if (locale === "pt") return pt_blog_list_post5date1(inputs);
	if (locale === "zh") return zh_blog_list_post5date1(inputs);
	if (locale === "ja") return ja_blog_list_post5date1(inputs);
	if (locale === "ko") return ko_blog_list_post5date1(inputs);
	return ru_blog_list_post5date1(inputs);
});
var en_blog_list_post5excerpt1 = () => {
	return `React Server Components introduce new patterns for internationalization. We explore the implications and best practices.`;
};
var fr_blog_list_post5excerpt1 = () => {
	return `Les React Server Components introduisent de nouveaux motifs pour l'i18n.`;
};
var es_blog_list_post5excerpt1 = () => {
	return `Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.`;
};
var de_blog_list_post5excerpt1 = () => {
	return `React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.`;
};
var it_blog_list_post5excerpt1 = () => {
	return `I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.`;
};
var pt_blog_list_post5excerpt1 = () => {
	return `React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.`;
};
var zh_blog_list_post5excerpt1 = () => {
	return `React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。`;
};
var ja_blog_list_post5excerpt1 = () => {
	return `React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。`;
};
var ko_blog_list_post5excerpt1 = () => {
	return `React Server Components introduce new patterns for internationalization. We explore the implications and best practices.`;
};
var ru_blog_list_post5excerpt1 = () => {
	return `React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.`;
};
var blog_list_post5excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post5excerpt1(inputs);
	if (locale === "fr") return fr_blog_list_post5excerpt1(inputs);
	if (locale === "es") return es_blog_list_post5excerpt1(inputs);
	if (locale === "de") return de_blog_list_post5excerpt1(inputs);
	if (locale === "it") return it_blog_list_post5excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post5excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post5excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post5excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post5excerpt1(inputs);
	return ru_blog_list_post5excerpt1(inputs);
});
var en_blog_list_post5category1 = () => {
	return `Analysis`;
};
var fr_blog_list_post5category1 = () => {
	return `Analyse`;
};
var es_blog_list_post5category1 = () => {
	return `Análisis`;
};
var de_blog_list_post5category1 = () => {
	return `Analyse`;
};
var it_blog_list_post5category1 = () => {
	return `Analisi`;
};
var pt_blog_list_post5category1 = () => {
	return `Análise`;
};
var zh_blog_list_post5category1 = () => {
	return `分析`;
};
var ja_blog_list_post5category1 = () => {
	return `分析`;
};
var ko_blog_list_post5category1 = () => {
	return `Analysis`;
};
var ru_blog_list_post5category1 = () => {
	return `Анализ`;
};
var blog_list_post5category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post5category1(inputs);
	if (locale === "fr") return fr_blog_list_post5category1(inputs);
	if (locale === "es") return es_blog_list_post5category1(inputs);
	if (locale === "de") return de_blog_list_post5category1(inputs);
	if (locale === "it") return it_blog_list_post5category1(inputs);
	if (locale === "pt") return pt_blog_list_post5category1(inputs);
	if (locale === "zh") return zh_blog_list_post5category1(inputs);
	if (locale === "ja") return ja_blog_list_post5category1(inputs);
	if (locale === "ko") return ko_blog_list_post5category1(inputs);
	return ru_blog_list_post5category1(inputs);
});
var en_blog_list_post6title1 = () => {
	return `Benchmark Methodology: How We Test`;
};
var fr_blog_list_post6title1 = () => {
	return `Méthodologie de benchmark : comment nous testons`;
};
var es_blog_list_post6title1 = () => {
	return `Metodología de benchmark: Cómo probamos`;
};
var de_blog_list_post6title1 = () => {
	return `Benchmark-Methodik: Wie wir testen`;
};
var it_blog_list_post6title1 = () => {
	return `Metodologia del benchmark: come testiamo`;
};
var pt_blog_list_post6title1 = () => {
	return `Metodologia de benchmark: como testamos`;
};
var zh_blog_list_post6title1 = () => {
	return `基准测试方法论：我们如何测试`;
};
var ja_blog_list_post6title1 = () => {
	return `ベンチマーク手法：テスト方法について`;
};
var ko_blog_list_post6title1 = () => {
	return `Benchmark Methodology: How We Test`;
};
var ru_blog_list_post6title1 = () => {
	return `Методология бенчмарка: как мы тестируем`;
};
var blog_list_post6title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post6title1(inputs);
	if (locale === "fr") return fr_blog_list_post6title1(inputs);
	if (locale === "es") return es_blog_list_post6title1(inputs);
	if (locale === "de") return de_blog_list_post6title1(inputs);
	if (locale === "it") return it_blog_list_post6title1(inputs);
	if (locale === "pt") return pt_blog_list_post6title1(inputs);
	if (locale === "zh") return zh_blog_list_post6title1(inputs);
	if (locale === "ja") return ja_blog_list_post6title1(inputs);
	if (locale === "ko") return ko_blog_list_post6title1(inputs);
	return ru_blog_list_post6title1(inputs);
});
var en_blog_list_post6date1 = () => {
	return `January 20, 2026`;
};
var fr_blog_list_post6date1 = () => {
	return `20 janvier 2026`;
};
var es_blog_list_post6date1 = () => {
	return `20 de enero de 2026`;
};
var de_blog_list_post6date1 = () => {
	return `20. Januar 2026`;
};
var it_blog_list_post6date1 = () => {
	return `20 gennaio 2026`;
};
var pt_blog_list_post6date1 = () => {
	return `20 de janeiro de 2026`;
};
var zh_blog_list_post6date1 = () => {
	return `2026年1月20日`;
};
var ja_blog_list_post6date1 = () => {
	return `2026年1月20日`;
};
var ko_blog_list_post6date1 = () => {
	return `January 20, 2026`;
};
var ru_blog_list_post6date1 = () => {
	return `20 января 2026 г.`;
};
var blog_list_post6date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post6date1(inputs);
	if (locale === "fr") return fr_blog_list_post6date1(inputs);
	if (locale === "es") return es_blog_list_post6date1(inputs);
	if (locale === "de") return de_blog_list_post6date1(inputs);
	if (locale === "it") return it_blog_list_post6date1(inputs);
	if (locale === "pt") return pt_blog_list_post6date1(inputs);
	if (locale === "zh") return zh_blog_list_post6date1(inputs);
	if (locale === "ja") return ja_blog_list_post6date1(inputs);
	if (locale === "ko") return ko_blog_list_post6date1(inputs);
	return ru_blog_list_post6date1(inputs);
});
var en_blog_list_post6excerpt1 = () => {
	return `A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.`;
};
var fr_blog_list_post6excerpt1 = () => {
	return `Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.`;
};
var es_blog_list_post6excerpt1 = () => {
	return `Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.`;
};
var de_blog_list_post6excerpt1 = () => {
	return `Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.`;
};
var it_blog_list_post6excerpt1 = () => {
	return `Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.`;
};
var pt_blog_list_post6excerpt1 = () => {
	return `Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.`;
};
var zh_blog_list_post6excerpt1 = () => {
	return `透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。`;
};
var ja_blog_list_post6excerpt1 = () => {
	return `テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。`;
};
var ko_blog_list_post6excerpt1 = () => {
	return `A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.`;
};
var ru_blog_list_post6excerpt1 = () => {
	return `Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.`;
};
var blog_list_post6excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post6excerpt1(inputs);
	if (locale === "fr") return fr_blog_list_post6excerpt1(inputs);
	if (locale === "es") return es_blog_list_post6excerpt1(inputs);
	if (locale === "de") return de_blog_list_post6excerpt1(inputs);
	if (locale === "it") return it_blog_list_post6excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post6excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post6excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post6excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post6excerpt1(inputs);
	return ru_blog_list_post6excerpt1(inputs);
});
var en_blog_list_post6category1 = () => {
	return `Meta`;
};
var fr_blog_list_post6category1 = () => {
	return `Méta`;
};
var es_blog_list_post6category1 = () => {
	return `Meta`;
};
var de_blog_list_post6category1 = () => {
	return `Meta`;
};
var it_blog_list_post6category1 = () => {
	return `Meta`;
};
var pt_blog_list_post6category1 = () => {
	return `Meta`;
};
var zh_blog_list_post6category1 = () => {
	return `Meta`;
};
var ja_blog_list_post6category1 = () => {
	return `メタ`;
};
var ko_blog_list_post6category1 = () => {
	return `Meta`;
};
var ru_blog_list_post6category1 = () => {
	return `Мета`;
};
var blog_list_post6category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_post6category1(inputs);
	if (locale === "fr") return fr_blog_list_post6category1(inputs);
	if (locale === "es") return es_blog_list_post6category1(inputs);
	if (locale === "de") return de_blog_list_post6category1(inputs);
	if (locale === "it") return it_blog_list_post6category1(inputs);
	if (locale === "pt") return pt_blog_list_post6category1(inputs);
	if (locale === "zh") return zh_blog_list_post6category1(inputs);
	if (locale === "ja") return ja_blog_list_post6category1(inputs);
	if (locale === "ko") return ko_blog_list_post6category1(inputs);
	return ru_blog_list_post6category1(inputs);
});
var en_careers_header_title = () => {
	return `Careers`;
};
var fr_careers_header_title = () => {
	return `Carrières`;
};
var es_careers_header_title = () => {
	return `Carreras`;
};
var de_careers_header_title = () => {
	return `Karriere`;
};
var it_careers_header_title = () => {
	return `Carriere`;
};
var pt_careers_header_title = () => {
	return `Carreiras`;
};
var zh_careers_header_title = () => {
	return `招聘`;
};
var ja_careers_header_title = () => {
	return `採用情報`;
};
var ko_careers_header_title = () => {
	return `Careers`;
};
var ru_careers_header_title = () => {
	return `Вакансии`;
};
var careers_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_header_title(inputs);
	if (locale === "fr") return fr_careers_header_title(inputs);
	if (locale === "es") return es_careers_header_title(inputs);
	if (locale === "de") return de_careers_header_title(inputs);
	if (locale === "it") return it_careers_header_title(inputs);
	if (locale === "pt") return pt_careers_header_title(inputs);
	if (locale === "zh") return zh_careers_header_title(inputs);
	if (locale === "ja") return ja_careers_header_title(inputs);
	if (locale === "ko") return ko_careers_header_title(inputs);
	return ru_careers_header_title(inputs);
});
var en_careers_header_description = () => {
	return `Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.`;
};
var fr_careers_header_description = () => {
	return `Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.`;
};
var es_careers_header_description = () => {
	return `Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.`;
};
var de_careers_header_description = () => {
	return `Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.`;
};
var it_careers_header_description = () => {
	return `Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.`;
};
var pt_careers_header_description = () => {
	return `Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.`;
};
var zh_careers_header_description = () => {
	return `加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。`;
};
var ja_careers_header_description = () => {
	return `国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。`;
};
var ko_careers_header_description = () => {
	return `Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.`;
};
var ru_careers_header_description = () => {
	return `Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.`;
};
var careers_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_header_description(inputs);
	if (locale === "fr") return fr_careers_header_description(inputs);
	if (locale === "es") return es_careers_header_description(inputs);
	if (locale === "de") return de_careers_header_description(inputs);
	if (locale === "it") return it_careers_header_description(inputs);
	if (locale === "pt") return pt_careers_header_description(inputs);
	if (locale === "zh") return zh_careers_header_description(inputs);
	if (locale === "ja") return ja_careers_header_description(inputs);
	if (locale === "ko") return ko_careers_header_description(inputs);
	return ru_careers_header_description(inputs);
});
var en_careers_benefits_remotelabel1 = () => {
	return `Remote-first`;
};
var fr_careers_benefits_remotelabel1 = () => {
	return `Remote-first`;
};
var es_careers_benefits_remotelabel1 = () => {
	return `Remoto primero`;
};
var de_careers_benefits_remotelabel1 = () => {
	return `Remote-First`;
};
var it_careers_benefits_remotelabel1 = () => {
	return `Remote-first`;
};
var pt_careers_benefits_remotelabel1 = () => {
	return `Remoto primeiro`;
};
var zh_careers_benefits_remotelabel1 = () => {
	return `远程优先`;
};
var ja_careers_benefits_remotelabel1 = () => {
	return `リモートファースト`;
};
var ko_careers_benefits_remotelabel1 = () => {
	return `Remote-first`;
};
var ru_careers_benefits_remotelabel1 = () => {
	return `Удаленная работа`;
};
var careers_benefits_remotelabel1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_remotelabel1(inputs);
	if (locale === "fr") return fr_careers_benefits_remotelabel1(inputs);
	if (locale === "es") return es_careers_benefits_remotelabel1(inputs);
	if (locale === "de") return de_careers_benefits_remotelabel1(inputs);
	if (locale === "it") return it_careers_benefits_remotelabel1(inputs);
	if (locale === "pt") return pt_careers_benefits_remotelabel1(inputs);
	if (locale === "zh") return zh_careers_benefits_remotelabel1(inputs);
	if (locale === "ja") return ja_careers_benefits_remotelabel1(inputs);
	if (locale === "ko") return ko_careers_benefits_remotelabel1(inputs);
	return ru_careers_benefits_remotelabel1(inputs);
});
var en_careers_benefits_remotevalue1 = () => {
	return `Work from anywhere in the world`;
};
var fr_careers_benefits_remotevalue1 = () => {
	return `Travaillez depuis n'importe où`;
};
var es_careers_benefits_remotevalue1 = () => {
	return `Trabaja desde cualquier lugar del mundo`;
};
var de_careers_benefits_remotevalue1 = () => {
	return `Arbeiten Sie von überall auf der Welt`;
};
var it_careers_benefits_remotevalue1 = () => {
	return `Lavora da qualsiasi parte del mondo`;
};
var pt_careers_benefits_remotevalue1 = () => {
	return `Trabalhe de qualquer lugar do mundo`;
};
var zh_careers_benefits_remotevalue1 = () => {
	return `在世界任何地方工作`;
};
var ja_careers_benefits_remotevalue1 = () => {
	return `世界中のどこからでも仕事ができます`;
};
var ko_careers_benefits_remotevalue1 = () => {
	return `Work from anywhere in the world`;
};
var ru_careers_benefits_remotevalue1 = () => {
	return `Работайте из любой точки мира`;
};
var careers_benefits_remotevalue1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_remotevalue1(inputs);
	if (locale === "fr") return fr_careers_benefits_remotevalue1(inputs);
	if (locale === "es") return es_careers_benefits_remotevalue1(inputs);
	if (locale === "de") return de_careers_benefits_remotevalue1(inputs);
	if (locale === "it") return it_careers_benefits_remotevalue1(inputs);
	if (locale === "pt") return pt_careers_benefits_remotevalue1(inputs);
	if (locale === "zh") return zh_careers_benefits_remotevalue1(inputs);
	if (locale === "ja") return ja_careers_benefits_remotevalue1(inputs);
	if (locale === "ko") return ko_careers_benefits_remotevalue1(inputs);
	return ru_careers_benefits_remotevalue1(inputs);
});
var en_careers_benefits_paylabel1 = () => {
	return `Competitive pay`;
};
var fr_careers_benefits_paylabel1 = () => {
	return `Rémunération compétitive`;
};
var es_careers_benefits_paylabel1 = () => {
	return `Salario competitivo`;
};
var de_careers_benefits_paylabel1 = () => {
	return `Wettbewerbsfähige Bezahlung`;
};
var it_careers_benefits_paylabel1 = () => {
	return `Retribuzione competitiva`;
};
var pt_careers_benefits_paylabel1 = () => {
	return `Salário competitivo`;
};
var zh_careers_benefits_paylabel1 = () => {
	return `具有竞争力的薪酬`;
};
var ja_careers_benefits_paylabel1 = () => {
	return `競争力のある給与`;
};
var ko_careers_benefits_paylabel1 = () => {
	return `Competitive pay`;
};
var ru_careers_benefits_paylabel1 = () => {
	return `Конкурентная зарплата`;
};
var careers_benefits_paylabel1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_paylabel1(inputs);
	if (locale === "fr") return fr_careers_benefits_paylabel1(inputs);
	if (locale === "es") return es_careers_benefits_paylabel1(inputs);
	if (locale === "de") return de_careers_benefits_paylabel1(inputs);
	if (locale === "it") return it_careers_benefits_paylabel1(inputs);
	if (locale === "pt") return pt_careers_benefits_paylabel1(inputs);
	if (locale === "zh") return zh_careers_benefits_paylabel1(inputs);
	if (locale === "ja") return ja_careers_benefits_paylabel1(inputs);
	if (locale === "ko") return ko_careers_benefits_paylabel1(inputs);
	return ru_careers_benefits_paylabel1(inputs);
});
var en_careers_benefits_payvalue1 = () => {
	return `Top-of-market compensation`;
};
var fr_careers_benefits_payvalue1 = () => {
	return `Fourchettes haut de marché`;
};
var es_careers_benefits_payvalue1 = () => {
	return `Compensación superior a la del mercado`;
};
var de_careers_benefits_payvalue1 = () => {
	return `Überdurchschnittliche Vergütung`;
};
var it_careers_benefits_payvalue1 = () => {
	return `Compensazione ai vertici del mercato`;
};
var pt_careers_benefits_payvalue1 = () => {
	return `Remuneração acima do mercado`;
};
var zh_careers_benefits_payvalue1 = () => {
	return `市场顶尖的薪资水平`;
};
var ja_careers_benefits_payvalue1 = () => {
	return `市場トップクラスの報酬`;
};
var ko_careers_benefits_payvalue1 = () => {
	return `Top-of-market compensation`;
};
var ru_careers_benefits_payvalue1 = () => {
	return `Вознаграждение выше рыночного`;
};
var careers_benefits_payvalue1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_payvalue1(inputs);
	if (locale === "fr") return fr_careers_benefits_payvalue1(inputs);
	if (locale === "es") return es_careers_benefits_payvalue1(inputs);
	if (locale === "de") return de_careers_benefits_payvalue1(inputs);
	if (locale === "it") return it_careers_benefits_payvalue1(inputs);
	if (locale === "pt") return pt_careers_benefits_payvalue1(inputs);
	if (locale === "zh") return zh_careers_benefits_payvalue1(inputs);
	if (locale === "ja") return ja_careers_benefits_payvalue1(inputs);
	if (locale === "ko") return ko_careers_benefits_payvalue1(inputs);
	return ru_careers_benefits_payvalue1(inputs);
});
var en_careers_benefits_osslabel1 = () => {
	return `Open source time`;
};
var fr_careers_benefits_osslabel1 = () => {
	return `Temps open source`;
};
var es_careers_benefits_osslabel1 = () => {
	return `Tiempo para el código abierto`;
};
var de_careers_benefits_osslabel1 = () => {
	return `Open-Source-Zeit`;
};
var it_careers_benefits_osslabel1 = () => {
	return `Tempo per l'open source`;
};
var pt_careers_benefits_osslabel1 = () => {
	return `Tempo para o código aberto`;
};
var zh_careers_benefits_osslabel1 = () => {
	return `开源时间`;
};
var ja_careers_benefits_osslabel1 = () => {
	return `オープンソースの時間`;
};
var ko_careers_benefits_osslabel1 = () => {
	return `Open source time`;
};
var ru_careers_benefits_osslabel1 = () => {
	return `Время на open source`;
};
var careers_benefits_osslabel1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_osslabel1(inputs);
	if (locale === "fr") return fr_careers_benefits_osslabel1(inputs);
	if (locale === "es") return es_careers_benefits_osslabel1(inputs);
	if (locale === "de") return de_careers_benefits_osslabel1(inputs);
	if (locale === "it") return it_careers_benefits_osslabel1(inputs);
	if (locale === "pt") return pt_careers_benefits_osslabel1(inputs);
	if (locale === "zh") return zh_careers_benefits_osslabel1(inputs);
	if (locale === "ja") return ja_careers_benefits_osslabel1(inputs);
	if (locale === "ko") return ko_careers_benefits_osslabel1(inputs);
	return ru_careers_benefits_osslabel1(inputs);
});
var en_careers_benefits_ossvalue1 = () => {
	return `20% time for OSS contributions`;
};
var fr_careers_benefits_ossvalue1 = () => {
	return `20 % du temps pour contribuer à l'OSS`;
};
var es_careers_benefits_ossvalue1 = () => {
	return `20% del tiempo para contribuciones a OSS`;
};
var de_careers_benefits_ossvalue1 = () => {
	return `20 % der Zeit für OSS-Beiträge`;
};
var it_careers_benefits_ossvalue1 = () => {
	return `20% del tempo per contributi open source`;
};
var pt_careers_benefits_ossvalue1 = () => {
	return `20% do tempo para contribuições OSS`;
};
var zh_careers_benefits_ossvalue1 = () => {
	return `20% 的时间用于 OSS 贡献`;
};
var ja_careers_benefits_ossvalue1 = () => {
	return `時間の20%をOSSへの貢献に`;
};
var ko_careers_benefits_ossvalue1 = () => {
	return `20% time for OSS contributions`;
};
var ru_careers_benefits_ossvalue1 = () => {
	return `20% времени на вклад в OSS`;
};
var careers_benefits_ossvalue1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_ossvalue1(inputs);
	if (locale === "fr") return fr_careers_benefits_ossvalue1(inputs);
	if (locale === "es") return es_careers_benefits_ossvalue1(inputs);
	if (locale === "de") return de_careers_benefits_ossvalue1(inputs);
	if (locale === "it") return it_careers_benefits_ossvalue1(inputs);
	if (locale === "pt") return pt_careers_benefits_ossvalue1(inputs);
	if (locale === "zh") return zh_careers_benefits_ossvalue1(inputs);
	if (locale === "ja") return ja_careers_benefits_ossvalue1(inputs);
	if (locale === "ko") return ko_careers_benefits_ossvalue1(inputs);
	return ru_careers_benefits_ossvalue1(inputs);
});
var en_careers_openpositions_title1 = () => {
	return `Open Positions`;
};
var fr_careers_openpositions_title1 = () => {
	return `Postes ouverts`;
};
var es_careers_openpositions_title1 = () => {
	return `Puestos vacantes`;
};
var de_careers_openpositions_title1 = () => {
	return `Offene Stellen`;
};
var it_careers_openpositions_title1 = () => {
	return `Posizioni aperte`;
};
var pt_careers_openpositions_title1 = () => {
	return `Vagas abertas`;
};
var zh_careers_openpositions_title1 = () => {
	return `开放职位`;
};
var ja_careers_openpositions_title1 = () => {
	return `募集中の職種`;
};
var ko_careers_openpositions_title1 = () => {
	return `Open Positions`;
};
var ru_careers_openpositions_title1 = () => {
	return `Открытые вакансии`;
};
var careers_openpositions_title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_title1(inputs);
	if (locale === "fr") return fr_careers_openpositions_title1(inputs);
	if (locale === "es") return es_careers_openpositions_title1(inputs);
	if (locale === "de") return de_careers_openpositions_title1(inputs);
	if (locale === "it") return it_careers_openpositions_title1(inputs);
	if (locale === "pt") return pt_careers_openpositions_title1(inputs);
	if (locale === "zh") return zh_careers_openpositions_title1(inputs);
	if (locale === "ja") return ja_careers_openpositions_title1(inputs);
	if (locale === "ko") return ko_careers_openpositions_title1(inputs);
	return ru_careers_openpositions_title1(inputs);
});
var en_careers_openpositions_applynow2 = () => {
	return `Apply Now`;
};
var fr_careers_openpositions_applynow2 = () => {
	return `Postuler`;
};
var es_careers_openpositions_applynow2 = () => {
	return `Postular ahora`;
};
var de_careers_openpositions_applynow2 = () => {
	return `Jetzt bewerben`;
};
var it_careers_openpositions_applynow2 = () => {
	return `Candidati ora`;
};
var pt_careers_openpositions_applynow2 = () => {
	return `Candidatar-se agora`;
};
var zh_careers_openpositions_applynow2 = () => {
	return `立即申请`;
};
var ja_careers_openpositions_applynow2 = () => {
	return `今すぐ応募`;
};
var ko_careers_openpositions_applynow2 = () => {
	return `Apply Now`;
};
var ru_careers_openpositions_applynow2 = () => {
	return `Подать заявку`;
};
var careers_openpositions_applynow2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_applynow2(inputs);
	if (locale === "fr") return fr_careers_openpositions_applynow2(inputs);
	if (locale === "es") return es_careers_openpositions_applynow2(inputs);
	if (locale === "de") return de_careers_openpositions_applynow2(inputs);
	if (locale === "it") return it_careers_openpositions_applynow2(inputs);
	if (locale === "pt") return pt_careers_openpositions_applynow2(inputs);
	if (locale === "zh") return zh_careers_openpositions_applynow2(inputs);
	if (locale === "ja") return ja_careers_openpositions_applynow2(inputs);
	if (locale === "ko") return ko_careers_openpositions_applynow2(inputs);
	return ru_careers_openpositions_applynow2(inputs);
});
var en_careers_openpositions_remote1 = () => {
	return `Remote`;
};
var fr_careers_openpositions_remote1 = () => {
	return `À distance`;
};
var es_careers_openpositions_remote1 = () => {
	return `Remoto`;
};
var de_careers_openpositions_remote1 = () => {
	return `Remote`;
};
var it_careers_openpositions_remote1 = () => {
	return `Remoto`;
};
var pt_careers_openpositions_remote1 = () => {
	return `Remoto`;
};
var zh_careers_openpositions_remote1 = () => {
	return `远程`;
};
var ja_careers_openpositions_remote1 = () => {
	return `リモート`;
};
var ko_careers_openpositions_remote1 = () => {
	return `Remote`;
};
var ru_careers_openpositions_remote1 = () => {
	return `Удаленно`;
};
var careers_openpositions_remote1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_remote1(inputs);
	if (locale === "fr") return fr_careers_openpositions_remote1(inputs);
	if (locale === "es") return es_careers_openpositions_remote1(inputs);
	if (locale === "de") return de_careers_openpositions_remote1(inputs);
	if (locale === "it") return it_careers_openpositions_remote1(inputs);
	if (locale === "pt") return pt_careers_openpositions_remote1(inputs);
	if (locale === "zh") return zh_careers_openpositions_remote1(inputs);
	if (locale === "ja") return ja_careers_openpositions_remote1(inputs);
	if (locale === "ko") return ko_careers_openpositions_remote1(inputs);
	return ru_careers_openpositions_remote1(inputs);
});
var en_careers_openpositions_fulltime2 = () => {
	return `Full-time`;
};
var fr_careers_openpositions_fulltime2 = () => {
	return `Temps plein`;
};
var es_careers_openpositions_fulltime2 = () => {
	return `Tiempo completo`;
};
var de_careers_openpositions_fulltime2 = () => {
	return `Vollzeit`;
};
var it_careers_openpositions_fulltime2 = () => {
	return `Tempo pieno`;
};
var pt_careers_openpositions_fulltime2 = () => {
	return `Tempo integral`;
};
var zh_careers_openpositions_fulltime2 = () => {
	return `全职`;
};
var ja_careers_openpositions_fulltime2 = () => {
	return `フルタイム`;
};
var ko_careers_openpositions_fulltime2 = () => {
	return `Full-time`;
};
var ru_careers_openpositions_fulltime2 = () => {
	return `Полная занятость`;
};
var careers_openpositions_fulltime2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_fulltime2(inputs);
	if (locale === "fr") return fr_careers_openpositions_fulltime2(inputs);
	if (locale === "es") return es_careers_openpositions_fulltime2(inputs);
	if (locale === "de") return de_careers_openpositions_fulltime2(inputs);
	if (locale === "it") return it_careers_openpositions_fulltime2(inputs);
	if (locale === "pt") return pt_careers_openpositions_fulltime2(inputs);
	if (locale === "zh") return zh_careers_openpositions_fulltime2(inputs);
	if (locale === "ja") return ja_careers_openpositions_fulltime2(inputs);
	if (locale === "ko") return ko_careers_openpositions_fulltime2(inputs);
	return ru_careers_openpositions_fulltime2(inputs);
});
var en_careers_openpositions_parttime2 = () => {
	return `Part-time`;
};
var fr_careers_openpositions_parttime2 = () => {
	return `Temps partiel`;
};
var es_careers_openpositions_parttime2 = () => {
	return `Tiempo parcial`;
};
var de_careers_openpositions_parttime2 = () => {
	return `Teilzeit`;
};
var it_careers_openpositions_parttime2 = () => {
	return `Part-time`;
};
var pt_careers_openpositions_parttime2 = () => {
	return `Tempo parcial`;
};
var zh_careers_openpositions_parttime2 = () => {
	return `兼职`;
};
var ja_careers_openpositions_parttime2 = () => {
	return `パートタイム`;
};
var ko_careers_openpositions_parttime2 = () => {
	return `Part-time`;
};
var ru_careers_openpositions_parttime2 = () => {
	return `Частичная занятость`;
};
var careers_openpositions_parttime2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_parttime2(inputs);
	if (locale === "fr") return fr_careers_openpositions_parttime2(inputs);
	if (locale === "es") return es_careers_openpositions_parttime2(inputs);
	if (locale === "de") return de_careers_openpositions_parttime2(inputs);
	if (locale === "it") return it_careers_openpositions_parttime2(inputs);
	if (locale === "pt") return pt_careers_openpositions_parttime2(inputs);
	if (locale === "zh") return zh_careers_openpositions_parttime2(inputs);
	if (locale === "ja") return ja_careers_openpositions_parttime2(inputs);
	if (locale === "ko") return ko_careers_openpositions_parttime2(inputs);
	return ru_careers_openpositions_parttime2(inputs);
});
var en_careers_openpositions_engineering1 = () => {
	return `Engineering`;
};
var fr_careers_openpositions_engineering1 = () => {
	return `Ingénierie`;
};
var es_careers_openpositions_engineering1 = () => {
	return `Ingeniería`;
};
var de_careers_openpositions_engineering1 = () => {
	return `Engineering`;
};
var it_careers_openpositions_engineering1 = () => {
	return `Engineering`;
};
var pt_careers_openpositions_engineering1 = () => {
	return `Engenharia`;
};
var zh_careers_openpositions_engineering1 = () => {
	return `工程`;
};
var ja_careers_openpositions_engineering1 = () => {
	return `エンジニアリング`;
};
var ko_careers_openpositions_engineering1 = () => {
	return `Engineering`;
};
var ru_careers_openpositions_engineering1 = () => {
	return `Разработка`;
};
var careers_openpositions_engineering1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_engineering1(inputs);
	if (locale === "fr") return fr_careers_openpositions_engineering1(inputs);
	if (locale === "es") return es_careers_openpositions_engineering1(inputs);
	if (locale === "de") return de_careers_openpositions_engineering1(inputs);
	if (locale === "it") return it_careers_openpositions_engineering1(inputs);
	if (locale === "pt") return pt_careers_openpositions_engineering1(inputs);
	if (locale === "zh") return zh_careers_openpositions_engineering1(inputs);
	if (locale === "ja") return ja_careers_openpositions_engineering1(inputs);
	if (locale === "ko") return ko_careers_openpositions_engineering1(inputs);
	return ru_careers_openpositions_engineering1(inputs);
});
var en_careers_openpositions_documentation1 = () => {
	return `Documentation`;
};
var fr_careers_openpositions_documentation1 = () => {
	return `Documentation`;
};
var es_careers_openpositions_documentation1 = () => {
	return `Documentación`;
};
var de_careers_openpositions_documentation1 = () => {
	return `Dokumentation`;
};
var it_careers_openpositions_documentation1 = () => {
	return `Documentazione`;
};
var pt_careers_openpositions_documentation1 = () => {
	return `Documentação`;
};
var zh_careers_openpositions_documentation1 = () => {
	return `文档`;
};
var ja_careers_openpositions_documentation1 = () => {
	return `ドキュメンテーション`;
};
var ko_careers_openpositions_documentation1 = () => {
	return `Documentation`;
};
var ru_careers_openpositions_documentation1 = () => {
	return `Документация`;
};
var careers_openpositions_documentation1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_documentation1(inputs);
	if (locale === "fr") return fr_careers_openpositions_documentation1(inputs);
	if (locale === "es") return es_careers_openpositions_documentation1(inputs);
	if (locale === "de") return de_careers_openpositions_documentation1(inputs);
	if (locale === "it") return it_careers_openpositions_documentation1(inputs);
	if (locale === "pt") return pt_careers_openpositions_documentation1(inputs);
	if (locale === "zh") return zh_careers_openpositions_documentation1(inputs);
	if (locale === "ja") return ja_careers_openpositions_documentation1(inputs);
	if (locale === "ko") return ko_careers_openpositions_documentation1(inputs);
	return ru_careers_openpositions_documentation1(inputs);
});
var en_careers_openpositions_community1 = () => {
	return `Community`;
};
var fr_careers_openpositions_community1 = () => {
	return `Communauté`;
};
var es_careers_openpositions_community1 = () => {
	return `Comunidad`;
};
var de_careers_openpositions_community1 = () => {
	return `Community`;
};
var it_careers_openpositions_community1 = () => {
	return `Comunità`;
};
var pt_careers_openpositions_community1 = () => {
	return `Comunidade`;
};
var zh_careers_openpositions_community1 = () => {
	return `社区`;
};
var ja_careers_openpositions_community1 = () => {
	return `コミュニティ`;
};
var ko_careers_openpositions_community1 = () => {
	return `Community`;
};
var ru_careers_openpositions_community1 = () => {
	return `Сообщество`;
};
var careers_openpositions_community1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_community1(inputs);
	if (locale === "fr") return fr_careers_openpositions_community1(inputs);
	if (locale === "es") return es_careers_openpositions_community1(inputs);
	if (locale === "de") return de_careers_openpositions_community1(inputs);
	if (locale === "it") return it_careers_openpositions_community1(inputs);
	if (locale === "pt") return pt_careers_openpositions_community1(inputs);
	if (locale === "zh") return zh_careers_openpositions_community1(inputs);
	if (locale === "ja") return ja_careers_openpositions_community1(inputs);
	if (locale === "ko") return ko_careers_openpositions_community1(inputs);
	return ru_careers_openpositions_community1(inputs);
});
var en_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remote`;
};
var fr_careers_openpositions_sfremote2 = () => {
	return `San Francisco / télétravail`;
};
var es_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remoto`;
};
var de_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remote`;
};
var it_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remoto`;
};
var pt_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remoto`;
};
var zh_careers_openpositions_sfremote2 = () => {
	return `旧金山 / 远程`;
};
var ja_careers_openpositions_sfremote2 = () => {
	return `サンフランシスコ / リモート`;
};
var ko_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remote`;
};
var ru_careers_openpositions_sfremote2 = () => {
	return `Сан-Франциско / Удаленно`;
};
var careers_openpositions_sfremote2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_sfremote2(inputs);
	if (locale === "fr") return fr_careers_openpositions_sfremote2(inputs);
	if (locale === "es") return es_careers_openpositions_sfremote2(inputs);
	if (locale === "de") return de_careers_openpositions_sfremote2(inputs);
	if (locale === "it") return it_careers_openpositions_sfremote2(inputs);
	if (locale === "pt") return pt_careers_openpositions_sfremote2(inputs);
	if (locale === "zh") return zh_careers_openpositions_sfremote2(inputs);
	if (locale === "ja") return ja_careers_openpositions_sfremote2(inputs);
	if (locale === "ko") return ko_careers_openpositions_sfremote2(inputs);
	return ru_careers_openpositions_sfremote2(inputs);
});
var en_careers_openpositions_frontendtitle2 = () => {
	return `Senior Frontend Engineer`;
};
var fr_careers_openpositions_frontendtitle2 = () => {
	return `Ingénieur front-end senior`;
};
var es_careers_openpositions_frontendtitle2 = () => {
	return `Ingeniero Frontend Senior`;
};
var de_careers_openpositions_frontendtitle2 = () => {
	return `Senior Frontend Engineer`;
};
var it_careers_openpositions_frontendtitle2 = () => {
	return `Ingegnere Frontend Senior`;
};
var pt_careers_openpositions_frontendtitle2 = () => {
	return `Engenheiro Frontend Sênior`;
};
var zh_careers_openpositions_frontendtitle2 = () => {
	return `高级前端工程师`;
};
var ja_careers_openpositions_frontendtitle2 = () => {
	return `シニアフロントエンドエンジニア`;
};
var ko_careers_openpositions_frontendtitle2 = () => {
	return `Senior Frontend Engineer`;
};
var ru_careers_openpositions_frontendtitle2 = () => {
	return `Старший фронтенд-инженер`;
};
var careers_openpositions_frontendtitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_frontendtitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_frontendtitle2(inputs);
	if (locale === "es") return es_careers_openpositions_frontendtitle2(inputs);
	if (locale === "de") return de_careers_openpositions_frontendtitle2(inputs);
	if (locale === "it") return it_careers_openpositions_frontendtitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_frontendtitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_frontendtitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_frontendtitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_frontendtitle2(inputs);
	return ru_careers_openpositions_frontendtitle2(inputs);
});
var en_careers_openpositions_frontenddesc2 = () => {
	return `Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.`;
};
var fr_careers_openpositions_frontenddesc2 = () => {
	return `Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.`;
};
var es_careers_openpositions_frontenddesc2 = () => {
	return `Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.`;
};
var de_careers_openpositions_frontenddesc2 = () => {
	return `Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.`;
};
var it_careers_openpositions_frontenddesc2 = () => {
	return `Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.`;
};
var pt_careers_openpositions_frontenddesc2 = () => {
	return `Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.`;
};
var zh_careers_openpositions_frontenddesc2 = () => {
	return `使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。`;
};
var ja_careers_openpositions_frontenddesc2 = () => {
	return `React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。`;
};
var ko_careers_openpositions_frontenddesc2 = () => {
	return `Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.`;
};
var ru_careers_openpositions_frontenddesc2 = () => {
	return `Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.`;
};
var careers_openpositions_frontenddesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_frontenddesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_frontenddesc2(inputs);
	if (locale === "es") return es_careers_openpositions_frontenddesc2(inputs);
	if (locale === "de") return de_careers_openpositions_frontenddesc2(inputs);
	if (locale === "it") return it_careers_openpositions_frontenddesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_frontenddesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_frontenddesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_frontenddesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_frontenddesc2(inputs);
	return ru_careers_openpositions_frontenddesc2(inputs);
});
var en_careers_openpositions_backendtitle2 = () => {
	return `Backend Engineer`;
};
var fr_careers_openpositions_backendtitle2 = () => {
	return `Ingénieur back-end`;
};
var es_careers_openpositions_backendtitle2 = () => {
	return `Ingeniero Backend`;
};
var de_careers_openpositions_backendtitle2 = () => {
	return `Backend-Ingenieur`;
};
var it_careers_openpositions_backendtitle2 = () => {
	return `Backend Engineer`;
};
var pt_careers_openpositions_backendtitle2 = () => {
	return `Engenheiro Backend`;
};
var zh_careers_openpositions_backendtitle2 = () => {
	return `后端工程师`;
};
var ja_careers_openpositions_backendtitle2 = () => {
	return `バックエンドエンジニア`;
};
var ko_careers_openpositions_backendtitle2 = () => {
	return `Backend Engineer`;
};
var ru_careers_openpositions_backendtitle2 = () => {
	return `Бэкенд-инженер`;
};
var careers_openpositions_backendtitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_backendtitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_backendtitle2(inputs);
	if (locale === "es") return es_careers_openpositions_backendtitle2(inputs);
	if (locale === "de") return de_careers_openpositions_backendtitle2(inputs);
	if (locale === "it") return it_careers_openpositions_backendtitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_backendtitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_backendtitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_backendtitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_backendtitle2(inputs);
	return ru_careers_openpositions_backendtitle2(inputs);
});
var en_careers_openpositions_backenddesc2 = () => {
	return `Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.`;
};
var fr_careers_openpositions_backenddesc2 = () => {
	return `Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.`;
};
var es_careers_openpositions_backenddesc2 = () => {
	return `Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.`;
};
var de_careers_openpositions_backenddesc2 = () => {
	return `Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.`;
};
var it_careers_openpositions_backenddesc2 = () => {
	return `Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.`;
};
var pt_careers_openpositions_backenddesc2 = () => {
	return `Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.`;
};
var zh_careers_openpositions_backenddesc2 = () => {
	return `设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。`;
};
var ja_careers_openpositions_backenddesc2 = () => {
	return `毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。`;
};
var ko_careers_openpositions_backenddesc2 = () => {
	return `Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.`;
};
var ru_careers_openpositions_backenddesc2 = () => {
	return `Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.`;
};
var careers_openpositions_backenddesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_backenddesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_backenddesc2(inputs);
	if (locale === "es") return es_careers_openpositions_backenddesc2(inputs);
	if (locale === "de") return de_careers_openpositions_backenddesc2(inputs);
	if (locale === "it") return it_careers_openpositions_backenddesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_backenddesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_backenddesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_backenddesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_backenddesc2(inputs);
	return ru_careers_openpositions_backenddesc2(inputs);
});
var en_careers_openpositions_writertitle2 = () => {
	return `Technical Writer`;
};
var fr_careers_openpositions_writertitle2 = () => {
	return `Rédacteur·rice technique`;
};
var es_careers_openpositions_writertitle2 = () => {
	return `Redactor técnico`;
};
var de_careers_openpositions_writertitle2 = () => {
	return `Technischer Redakteur`;
};
var it_careers_openpositions_writertitle2 = () => {
	return `Scrittore tecnico`;
};
var pt_careers_openpositions_writertitle2 = () => {
	return `Redator técnico`;
};
var zh_careers_openpositions_writertitle2 = () => {
	return `技术作家`;
};
var ja_careers_openpositions_writertitle2 = () => {
	return `テクニカルライター`;
};
var ko_careers_openpositions_writertitle2 = () => {
	return `Technical Writer`;
};
var ru_careers_openpositions_writertitle2 = () => {
	return `Технический писатель`;
};
var careers_openpositions_writertitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_writertitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_writertitle2(inputs);
	if (locale === "es") return es_careers_openpositions_writertitle2(inputs);
	if (locale === "de") return de_careers_openpositions_writertitle2(inputs);
	if (locale === "it") return it_careers_openpositions_writertitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_writertitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_writertitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_writertitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_writertitle2(inputs);
	return ru_careers_openpositions_writertitle2(inputs);
});
var en_careers_openpositions_writerdesc2 = () => {
	return `Create comprehensive guides, API references, and tutorials for our benchmarking platform.`;
};
var fr_careers_openpositions_writerdesc2 = () => {
	return `Guides, références d'API et tutoriels pour la plateforme de benchmark.`;
};
var es_careers_openpositions_writerdesc2 = () => {
	return `Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.`;
};
var de_careers_openpositions_writerdesc2 = () => {
	return `Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.`;
};
var it_careers_openpositions_writerdesc2 = () => {
	return `Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.`;
};
var pt_careers_openpositions_writerdesc2 = () => {
	return `Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.`;
};
var zh_careers_openpositions_writerdesc2 = () => {
	return `为我们的基准测试平台编写全面的指南、API 参考和教程。`;
};
var ja_careers_openpositions_writerdesc2 = () => {
	return `ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。`;
};
var ko_careers_openpositions_writerdesc2 = () => {
	return `Create comprehensive guides, API references, and tutorials for our benchmarking platform.`;
};
var ru_careers_openpositions_writerdesc2 = () => {
	return `Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.`;
};
var careers_openpositions_writerdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_writerdesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_writerdesc2(inputs);
	if (locale === "es") return es_careers_openpositions_writerdesc2(inputs);
	if (locale === "de") return de_careers_openpositions_writerdesc2(inputs);
	if (locale === "it") return it_careers_openpositions_writerdesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_writerdesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_writerdesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_writerdesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_writerdesc2(inputs);
	return ru_careers_openpositions_writerdesc2(inputs);
});
var en_careers_openpositions_devreltitle2 = () => {
	return `DevRel Engineer`;
};
var fr_careers_openpositions_devreltitle2 = () => {
	return `Ingénieur DevRel`;
};
var es_careers_openpositions_devreltitle2 = () => {
	return `Ingeniero de DevRel`;
};
var de_careers_openpositions_devreltitle2 = () => {
	return `DevRel-Ingenieur`;
};
var it_careers_openpositions_devreltitle2 = () => {
	return `Ingegnere DevRel`;
};
var pt_careers_openpositions_devreltitle2 = () => {
	return `Engenheiro de DevRel`;
};
var zh_careers_openpositions_devreltitle2 = () => {
	return `DevRel 工程师`;
};
var ja_careers_openpositions_devreltitle2 = () => {
	return `DevRelエンジニア`;
};
var ko_careers_openpositions_devreltitle2 = () => {
	return `DevRel Engineer`;
};
var ru_careers_openpositions_devreltitle2 = () => {
	return `DevRel-инженер`;
};
var careers_openpositions_devreltitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_devreltitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_devreltitle2(inputs);
	if (locale === "es") return es_careers_openpositions_devreltitle2(inputs);
	if (locale === "de") return de_careers_openpositions_devreltitle2(inputs);
	if (locale === "it") return it_careers_openpositions_devreltitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_devreltitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_devreltitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_devreltitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_devreltitle2(inputs);
	return ru_careers_openpositions_devreltitle2(inputs);
});
var en_careers_openpositions_devreldesc2 = () => {
	return `Engage with the i18n community through talks, workshops, blog posts, and open source contributions.`;
};
var fr_careers_openpositions_devreldesc2 = () => {
	return `Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.`;
};
var es_careers_openpositions_devreldesc2 = () => {
	return `Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.`;
};
var de_careers_openpositions_devreldesc2 = () => {
	return `Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.`;
};
var it_careers_openpositions_devreldesc2 = () => {
	return `Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.`;
};
var pt_careers_openpositions_devreldesc2 = () => {
	return `Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.`;
};
var zh_careers_openpositions_devreldesc2 = () => {
	return `通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。`;
};
var ja_careers_openpositions_devreldesc2 = () => {
	return `トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。`;
};
var ko_careers_openpositions_devreldesc2 = () => {
	return `Engage with the i18n community through talks, workshops, blog posts, and open source contributions.`;
};
var ru_careers_openpositions_devreldesc2 = () => {
	return `Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.`;
};
var careers_openpositions_devreldesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_devreldesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_devreldesc2(inputs);
	if (locale === "es") return es_careers_openpositions_devreldesc2(inputs);
	if (locale === "de") return de_careers_openpositions_devreldesc2(inputs);
	if (locale === "it") return it_careers_openpositions_devreldesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_devreldesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_devreldesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_devreldesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_devreldesc2(inputs);
	return ru_careers_openpositions_devreldesc2(inputs);
});
var en_careers_openpositions_qatitle2 = () => {
	return `QA Engineer`;
};
var fr_careers_openpositions_qatitle2 = () => {
	return `Ingénieur QA`;
};
var es_careers_openpositions_qatitle2 = () => {
	return `Ingeniero de QA`;
};
var de_careers_openpositions_qatitle2 = () => {
	return `QA-Ingenieur`;
};
var it_careers_openpositions_qatitle2 = () => {
	return `Ingegnere QA`;
};
var pt_careers_openpositions_qatitle2 = () => {
	return `Engenheiro de QA`;
};
var zh_careers_openpositions_qatitle2 = () => {
	return `QA 工程师`;
};
var ja_careers_openpositions_qatitle2 = () => {
	return `QAエンジニア`;
};
var ko_careers_openpositions_qatitle2 = () => {
	return `QA Engineer`;
};
var ru_careers_openpositions_qatitle2 = () => {
	return `QA-инженер`;
};
var careers_openpositions_qatitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_qatitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_qatitle2(inputs);
	if (locale === "es") return es_careers_openpositions_qatitle2(inputs);
	if (locale === "de") return de_careers_openpositions_qatitle2(inputs);
	if (locale === "it") return it_careers_openpositions_qatitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_qatitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_qatitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_qatitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_qatitle2(inputs);
	return ru_careers_openpositions_qatitle2(inputs);
});
var en_careers_openpositions_qadesc2 = () => {
	return `Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.`;
};
var fr_careers_openpositions_qadesc2 = () => {
	return `Garantir la fiabilité des résultats par des tests et validations rigoureux.`;
};
var es_careers_openpositions_qadesc2 = () => {
	return `Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.`;
};
var de_careers_openpositions_qadesc2 = () => {
	return `Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.`;
};
var it_careers_openpositions_qadesc2 = () => {
	return `Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.`;
};
var pt_careers_openpositions_qadesc2 = () => {
	return `Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.`;
};
var zh_careers_openpositions_qadesc2 = () => {
	return `通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。`;
};
var ja_careers_openpositions_qadesc2 = () => {
	return `厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。`;
};
var ko_careers_openpositions_qadesc2 = () => {
	return `Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.`;
};
var ru_careers_openpositions_qadesc2 = () => {
	return `Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.`;
};
var careers_openpositions_qadesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_qadesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_qadesc2(inputs);
	if (locale === "es") return es_careers_openpositions_qadesc2(inputs);
	if (locale === "de") return de_careers_openpositions_qadesc2(inputs);
	if (locale === "it") return it_careers_openpositions_qadesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_qadesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_qadesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_qadesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_qadesc2(inputs);
	return ru_careers_openpositions_qadesc2(inputs);
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
var en_contact_form_name = () => {
	return `Name`;
};
var fr_contact_form_name = () => {
	return `Nom`;
};
var es_contact_form_name = () => {
	return `Nombre`;
};
var de_contact_form_name = () => {
	return `Name`;
};
var it_contact_form_name = () => {
	return `Nome`;
};
var pt_contact_form_name = () => {
	return `Nome`;
};
var zh_contact_form_name = () => {
	return `姓名`;
};
var ja_contact_form_name = () => {
	return `名前`;
};
var ko_contact_form_name = () => {
	return `Name`;
};
var ru_contact_form_name = () => {
	return `Имя`;
};
var contact_form_name = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_name(inputs);
	if (locale === "fr") return fr_contact_form_name(inputs);
	if (locale === "es") return es_contact_form_name(inputs);
	if (locale === "de") return de_contact_form_name(inputs);
	if (locale === "it") return it_contact_form_name(inputs);
	if (locale === "pt") return pt_contact_form_name(inputs);
	if (locale === "zh") return zh_contact_form_name(inputs);
	if (locale === "ja") return ja_contact_form_name(inputs);
	if (locale === "ko") return ko_contact_form_name(inputs);
	return ru_contact_form_name(inputs);
});
var en_contact_form_yourname1 = () => {
	return `Your name`;
};
var fr_contact_form_yourname1 = () => {
	return `Votre nom`;
};
var es_contact_form_yourname1 = () => {
	return `Tu nombre`;
};
var de_contact_form_yourname1 = () => {
	return `Ihr Name`;
};
var it_contact_form_yourname1 = () => {
	return `Il tuo nome`;
};
var pt_contact_form_yourname1 = () => {
	return `Seu nome`;
};
var zh_contact_form_yourname1 = () => {
	return `您的姓名`;
};
var ja_contact_form_yourname1 = () => {
	return `お名前`;
};
var ko_contact_form_yourname1 = () => {
	return `Your name`;
};
var ru_contact_form_yourname1 = () => {
	return `Ваше имя`;
};
var contact_form_yourname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_yourname1(inputs);
	if (locale === "fr") return fr_contact_form_yourname1(inputs);
	if (locale === "es") return es_contact_form_yourname1(inputs);
	if (locale === "de") return de_contact_form_yourname1(inputs);
	if (locale === "it") return it_contact_form_yourname1(inputs);
	if (locale === "pt") return pt_contact_form_yourname1(inputs);
	if (locale === "zh") return zh_contact_form_yourname1(inputs);
	if (locale === "ja") return ja_contact_form_yourname1(inputs);
	if (locale === "ko") return ko_contact_form_yourname1(inputs);
	return ru_contact_form_yourname1(inputs);
});
var en_contact_form_email = () => {
	return `Email`;
};
var fr_contact_form_email = () => {
	return `E-mail`;
};
var es_contact_form_email = () => {
	return `Correo electrónico`;
};
var de_contact_form_email = () => {
	return `E-Mail`;
};
var it_contact_form_email = () => {
	return `Email`;
};
var pt_contact_form_email = () => {
	return `E-mail`;
};
var zh_contact_form_email = () => {
	return `电子邮件`;
};
var ja_contact_form_email = () => {
	return `メールアドレス`;
};
var ko_contact_form_email = () => {
	return `Email`;
};
var ru_contact_form_email = () => {
	return `Электронная почта`;
};
var contact_form_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_email(inputs);
	if (locale === "fr") return fr_contact_form_email(inputs);
	if (locale === "es") return es_contact_form_email(inputs);
	if (locale === "de") return de_contact_form_email(inputs);
	if (locale === "it") return it_contact_form_email(inputs);
	if (locale === "pt") return pt_contact_form_email(inputs);
	if (locale === "zh") return zh_contact_form_email(inputs);
	if (locale === "ja") return ja_contact_form_email(inputs);
	if (locale === "ko") return ko_contact_form_email(inputs);
	return ru_contact_form_email(inputs);
});
var en_contact_form_emailplaceholder1 = () => {
	return `you@example.com`;
};
var fr_contact_form_emailplaceholder1 = () => {
	return `vous@exemple.com`;
};
var es_contact_form_emailplaceholder1 = () => {
	return `tu@ejemplo.com`;
};
var de_contact_form_emailplaceholder1 = () => {
	return `ihre@beispiel.de`;
};
var it_contact_form_emailplaceholder1 = () => {
	return `tu@esempio.com`;
};
var pt_contact_form_emailplaceholder1 = () => {
	return `voce@exemplo.com`;
};
var zh_contact_form_emailplaceholder1 = () => {
	return `you@example.com`;
};
var ja_contact_form_emailplaceholder1 = () => {
	return `you@example.com`;
};
var ko_contact_form_emailplaceholder1 = () => {
	return `you@example.com`;
};
var ru_contact_form_emailplaceholder1 = () => {
	return `you@example.com`;
};
var contact_form_emailplaceholder1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_emailplaceholder1(inputs);
	if (locale === "fr") return fr_contact_form_emailplaceholder1(inputs);
	if (locale === "es") return es_contact_form_emailplaceholder1(inputs);
	if (locale === "de") return de_contact_form_emailplaceholder1(inputs);
	if (locale === "it") return it_contact_form_emailplaceholder1(inputs);
	if (locale === "pt") return pt_contact_form_emailplaceholder1(inputs);
	if (locale === "zh") return zh_contact_form_emailplaceholder1(inputs);
	if (locale === "ja") return ja_contact_form_emailplaceholder1(inputs);
	if (locale === "ko") return ko_contact_form_emailplaceholder1(inputs);
	return ru_contact_form_emailplaceholder1(inputs);
});
var en_contact_form_topic = () => {
	return `Topic`;
};
var fr_contact_form_topic = () => {
	return `Sujet`;
};
var es_contact_form_topic = () => {
	return `Tema`;
};
var de_contact_form_topic = () => {
	return `Thema`;
};
var it_contact_form_topic = () => {
	return `Argomento`;
};
var pt_contact_form_topic = () => {
	return `Assunto`;
};
var zh_contact_form_topic = () => {
	return `主题`;
};
var ja_contact_form_topic = () => {
	return `トピック`;
};
var ko_contact_form_topic = () => {
	return `Topic`;
};
var ru_contact_form_topic = () => {
	return `Тема`;
};
var contact_form_topic = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_topic(inputs);
	if (locale === "fr") return fr_contact_form_topic(inputs);
	if (locale === "es") return es_contact_form_topic(inputs);
	if (locale === "de") return de_contact_form_topic(inputs);
	if (locale === "it") return it_contact_form_topic(inputs);
	if (locale === "pt") return pt_contact_form_topic(inputs);
	if (locale === "zh") return zh_contact_form_topic(inputs);
	if (locale === "ja") return ja_contact_form_topic(inputs);
	if (locale === "ko") return ko_contact_form_topic(inputs);
	return ru_contact_form_topic(inputs);
});
var en_contact_form_bugreport1 = () => {
	return `Bug Report`;
};
var fr_contact_form_bugreport1 = () => {
	return `Rapport de bug`;
};
var es_contact_form_bugreport1 = () => {
	return `Informe de error`;
};
var de_contact_form_bugreport1 = () => {
	return `Fehlerbericht`;
};
var it_contact_form_bugreport1 = () => {
	return `Segnalazione bug`;
};
var pt_contact_form_bugreport1 = () => {
	return `Relatório de bug`;
};
var zh_contact_form_bugreport1 = () => {
	return `错误报告`;
};
var ja_contact_form_bugreport1 = () => {
	return `バグ報告`;
};
var ko_contact_form_bugreport1 = () => {
	return `Bug Report`;
};
var ru_contact_form_bugreport1 = () => {
	return `Отчет об ошибке`;
};
var contact_form_bugreport1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_bugreport1(inputs);
	if (locale === "fr") return fr_contact_form_bugreport1(inputs);
	if (locale === "es") return es_contact_form_bugreport1(inputs);
	if (locale === "de") return de_contact_form_bugreport1(inputs);
	if (locale === "it") return it_contact_form_bugreport1(inputs);
	if (locale === "pt") return pt_contact_form_bugreport1(inputs);
	if (locale === "zh") return zh_contact_form_bugreport1(inputs);
	if (locale === "ja") return ja_contact_form_bugreport1(inputs);
	if (locale === "ko") return ko_contact_form_bugreport1(inputs);
	return ru_contact_form_bugreport1(inputs);
});
var en_contact_form_newbenchmarkidea2 = () => {
	return `New Benchmark Idea`;
};
var fr_contact_form_newbenchmarkidea2 = () => {
	return `Idée de benchmark`;
};
var es_contact_form_newbenchmarkidea2 = () => {
	return `Nueva idea de benchmark`;
};
var de_contact_form_newbenchmarkidea2 = () => {
	return `Neue Benchmark-Idee`;
};
var it_contact_form_newbenchmarkidea2 = () => {
	return `Nuova idea di benchmark`;
};
var pt_contact_form_newbenchmarkidea2 = () => {
	return `Nova ideia de benchmark`;
};
var zh_contact_form_newbenchmarkidea2 = () => {
	return `新基准测试想法`;
};
var ja_contact_form_newbenchmarkidea2 = () => {
	return `新しいベンチマークのアイデア`;
};
var ko_contact_form_newbenchmarkidea2 = () => {
	return `New Benchmark Idea`;
};
var ru_contact_form_newbenchmarkidea2 = () => {
	return `Идея нового бенчмарка`;
};
var contact_form_newbenchmarkidea2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_newbenchmarkidea2(inputs);
	if (locale === "fr") return fr_contact_form_newbenchmarkidea2(inputs);
	if (locale === "es") return es_contact_form_newbenchmarkidea2(inputs);
	if (locale === "de") return de_contact_form_newbenchmarkidea2(inputs);
	if (locale === "it") return it_contact_form_newbenchmarkidea2(inputs);
	if (locale === "pt") return pt_contact_form_newbenchmarkidea2(inputs);
	if (locale === "zh") return zh_contact_form_newbenchmarkidea2(inputs);
	if (locale === "ja") return ja_contact_form_newbenchmarkidea2(inputs);
	if (locale === "ko") return ko_contact_form_newbenchmarkidea2(inputs);
	return ru_contact_form_newbenchmarkidea2(inputs);
});
var en_contact_form_methodologyquestion1 = () => {
	return `Methodology Question`;
};
var fr_contact_form_methodologyquestion1 = () => {
	return `Question de méthodologie`;
};
var es_contact_form_methodologyquestion1 = () => {
	return `Pregunta sobre la metodología`;
};
var de_contact_form_methodologyquestion1 = () => {
	return `Frage zur Methodik`;
};
var it_contact_form_methodologyquestion1 = () => {
	return `Domanda sulla metodologia`;
};
var pt_contact_form_methodologyquestion1 = () => {
	return `Pergunta sobre metodologia`;
};
var zh_contact_form_methodologyquestion1 = () => {
	return `方法论问题`;
};
var ja_contact_form_methodologyquestion1 = () => {
	return `手法に関する質問`;
};
var ko_contact_form_methodologyquestion1 = () => {
	return `Methodology Question`;
};
var ru_contact_form_methodologyquestion1 = () => {
	return `Вопрос по методологии`;
};
var contact_form_methodologyquestion1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_methodologyquestion1(inputs);
	if (locale === "fr") return fr_contact_form_methodologyquestion1(inputs);
	if (locale === "es") return es_contact_form_methodologyquestion1(inputs);
	if (locale === "de") return de_contact_form_methodologyquestion1(inputs);
	if (locale === "it") return it_contact_form_methodologyquestion1(inputs);
	if (locale === "pt") return pt_contact_form_methodologyquestion1(inputs);
	if (locale === "zh") return zh_contact_form_methodologyquestion1(inputs);
	if (locale === "ja") return ja_contact_form_methodologyquestion1(inputs);
	if (locale === "ko") return ko_contact_form_methodologyquestion1(inputs);
	return ru_contact_form_methodologyquestion1(inputs);
});
var en_contact_form_contribution = () => {
	return `Contribution`;
};
var fr_contact_form_contribution = () => {
	return `Contribution`;
};
var es_contact_form_contribution = () => {
	return `Contribución`;
};
var de_contact_form_contribution = () => {
	return `Beitrag`;
};
var it_contact_form_contribution = () => {
	return `Contributo`;
};
var pt_contact_form_contribution = () => {
	return `Contribuição`;
};
var zh_contact_form_contribution = () => {
	return `贡献`;
};
var ja_contact_form_contribution = () => {
	return `貢献`;
};
var ko_contact_form_contribution = () => {
	return `Contribution`;
};
var ru_contact_form_contribution = () => {
	return `Вклад в проект`;
};
var contact_form_contribution = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_contribution(inputs);
	if (locale === "fr") return fr_contact_form_contribution(inputs);
	if (locale === "es") return es_contact_form_contribution(inputs);
	if (locale === "de") return de_contact_form_contribution(inputs);
	if (locale === "it") return it_contact_form_contribution(inputs);
	if (locale === "pt") return pt_contact_form_contribution(inputs);
	if (locale === "zh") return zh_contact_form_contribution(inputs);
	if (locale === "ja") return ja_contact_form_contribution(inputs);
	if (locale === "ko") return ko_contact_form_contribution(inputs);
	return ru_contact_form_contribution(inputs);
});
var en_contact_form_other = () => {
	return `Other`;
};
var fr_contact_form_other = () => {
	return `Autre`;
};
var es_contact_form_other = () => {
	return `Otro`;
};
var de_contact_form_other = () => {
	return `Sonstiges`;
};
var it_contact_form_other = () => {
	return `Altro`;
};
var pt_contact_form_other = () => {
	return `Outro`;
};
var zh_contact_form_other = () => {
	return `其他`;
};
var ja_contact_form_other = () => {
	return `その他`;
};
var ko_contact_form_other = () => {
	return `Other`;
};
var ru_contact_form_other = () => {
	return `Другое`;
};
var contact_form_other = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_other(inputs);
	if (locale === "fr") return fr_contact_form_other(inputs);
	if (locale === "es") return es_contact_form_other(inputs);
	if (locale === "de") return de_contact_form_other(inputs);
	if (locale === "it") return it_contact_form_other(inputs);
	if (locale === "pt") return pt_contact_form_other(inputs);
	if (locale === "zh") return zh_contact_form_other(inputs);
	if (locale === "ja") return ja_contact_form_other(inputs);
	if (locale === "ko") return ko_contact_form_other(inputs);
	return ru_contact_form_other(inputs);
});
var en_contact_form_message = () => {
	return `Message`;
};
var fr_contact_form_message = () => {
	return `Message`;
};
var es_contact_form_message = () => {
	return `Mensaje`;
};
var de_contact_form_message = () => {
	return `Nachricht`;
};
var it_contact_form_message = () => {
	return `Messaggio`;
};
var pt_contact_form_message = () => {
	return `Mensagem`;
};
var zh_contact_form_message = () => {
	return `消息`;
};
var ja_contact_form_message = () => {
	return `メッセージ`;
};
var ko_contact_form_message = () => {
	return `Message`;
};
var ru_contact_form_message = () => {
	return `Сообщение`;
};
var contact_form_message = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_message(inputs);
	if (locale === "fr") return fr_contact_form_message(inputs);
	if (locale === "es") return es_contact_form_message(inputs);
	if (locale === "de") return de_contact_form_message(inputs);
	if (locale === "it") return it_contact_form_message(inputs);
	if (locale === "pt") return pt_contact_form_message(inputs);
	if (locale === "zh") return zh_contact_form_message(inputs);
	if (locale === "ja") return ja_contact_form_message(inputs);
	if (locale === "ko") return ko_contact_form_message(inputs);
	return ru_contact_form_message(inputs);
});
var en_contact_form_messageplaceholder1 = () => {
	return `Describe your question or idea...`;
};
var fr_contact_form_messageplaceholder1 = () => {
	return `Décrivez votre question ou idée…`;
};
var es_contact_form_messageplaceholder1 = () => {
	return `Describe tu pregunta o idea...`;
};
var de_contact_form_messageplaceholder1 = () => {
	return `Beschreiben Sie Ihre Frage oder Idee...`;
};
var it_contact_form_messageplaceholder1 = () => {
	return `Descrivi la tua domanda o idea...`;
};
var pt_contact_form_messageplaceholder1 = () => {
	return `Descreva sua pergunta ou ideia...`;
};
var zh_contact_form_messageplaceholder1 = () => {
	return `描述您的问题或想法...`;
};
var ja_contact_form_messageplaceholder1 = () => {
	return `ご質問やアイデアを記入してください...`;
};
var ko_contact_form_messageplaceholder1 = () => {
	return `Describe your question or idea...`;
};
var ru_contact_form_messageplaceholder1 = () => {
	return `Опишите ваш вопрос или идею...`;
};
var contact_form_messageplaceholder1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_messageplaceholder1(inputs);
	if (locale === "fr") return fr_contact_form_messageplaceholder1(inputs);
	if (locale === "es") return es_contact_form_messageplaceholder1(inputs);
	if (locale === "de") return de_contact_form_messageplaceholder1(inputs);
	if (locale === "it") return it_contact_form_messageplaceholder1(inputs);
	if (locale === "pt") return pt_contact_form_messageplaceholder1(inputs);
	if (locale === "zh") return zh_contact_form_messageplaceholder1(inputs);
	if (locale === "ja") return ja_contact_form_messageplaceholder1(inputs);
	if (locale === "ko") return ko_contact_form_messageplaceholder1(inputs);
	return ru_contact_form_messageplaceholder1(inputs);
});
var en_contact_form_sendmessage1 = () => {
	return `Send Message`;
};
var fr_contact_form_sendmessage1 = () => {
	return `Envoyer`;
};
var es_contact_form_sendmessage1 = () => {
	return `Enviar mensaje`;
};
var de_contact_form_sendmessage1 = () => {
	return `Nachricht senden`;
};
var it_contact_form_sendmessage1 = () => {
	return `Invia messaggio`;
};
var pt_contact_form_sendmessage1 = () => {
	return `Enviar mensagem`;
};
var zh_contact_form_sendmessage1 = () => {
	return `发送消息`;
};
var ja_contact_form_sendmessage1 = () => {
	return `メッセージを送信`;
};
var ko_contact_form_sendmessage1 = () => {
	return `Send Message`;
};
var ru_contact_form_sendmessage1 = () => {
	return `Отправить сообщение`;
};
var contact_form_sendmessage1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_sendmessage1(inputs);
	if (locale === "fr") return fr_contact_form_sendmessage1(inputs);
	if (locale === "es") return es_contact_form_sendmessage1(inputs);
	if (locale === "de") return de_contact_form_sendmessage1(inputs);
	if (locale === "it") return it_contact_form_sendmessage1(inputs);
	if (locale === "pt") return pt_contact_form_sendmessage1(inputs);
	if (locale === "zh") return zh_contact_form_sendmessage1(inputs);
	if (locale === "ja") return ja_contact_form_sendmessage1(inputs);
	if (locale === "ko") return ko_contact_form_sendmessage1(inputs);
	return ru_contact_form_sendmessage1(inputs);
});
var en_faq_header_title = () => {
	return `Frequently Asked Questions`;
};
var fr_faq_header_title = () => {
	return `Questions fréquentes`;
};
var es_faq_header_title = () => {
	return `Preguntas frecuentes`;
};
var de_faq_header_title = () => {
	return `Häufig gestellte Fragen`;
};
var it_faq_header_title = () => {
	return `Domande frequenti`;
};
var pt_faq_header_title = () => {
	return `Perguntas frequentes`;
};
var zh_faq_header_title = () => {
	return `常见问题`;
};
var ja_faq_header_title = () => {
	return `よくある質問`;
};
var ko_faq_header_title = () => {
	return `Frequently Asked Questions`;
};
var ru_faq_header_title = () => {
	return `Часто задаваемые вопросы`;
};
var faq_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_header_title(inputs);
	if (locale === "fr") return fr_faq_header_title(inputs);
	if (locale === "es") return es_faq_header_title(inputs);
	if (locale === "de") return de_faq_header_title(inputs);
	if (locale === "it") return it_faq_header_title(inputs);
	if (locale === "pt") return pt_faq_header_title(inputs);
	if (locale === "zh") return zh_faq_header_title(inputs);
	if (locale === "ja") return ja_faq_header_title(inputs);
	if (locale === "ko") return ko_faq_header_title(inputs);
	return ru_faq_header_title(inputs);
});
var en_faq_header_description = () => {
	return `Everything you need to know about i18n Benchmark.`;
};
var fr_faq_header_description = () => {
	return `Tout savoir sur i18n Benchmark.`;
};
var es_faq_header_description = () => {
	return `Todo lo que necesitas saber sobre i18n Benchmark.`;
};
var de_faq_header_description = () => {
	return `Alles, was Sie über i18n Benchmark wissen müssen.`;
};
var it_faq_header_description = () => {
	return `Tutto quello che c'è da sapere su i18n Benchmark.`;
};
var pt_faq_header_description = () => {
	return `Tudo o que você precisa saber sobre o i18n Benchmark.`;
};
var zh_faq_header_description = () => {
	return `关于 i18n 基准测试您需要了解的一切。`;
};
var ja_faq_header_description = () => {
	return `i18n Benchmarkについて知っておくべきすべてのこと。`;
};
var ko_faq_header_description = () => {
	return `Everything you need to know about i18n Benchmark.`;
};
var ru_faq_header_description = () => {
	return `Все, что вам нужно знать об i18n Benchmark.`;
};
var faq_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_header_description(inputs);
	if (locale === "fr") return fr_faq_header_description(inputs);
	if (locale === "es") return es_faq_header_description(inputs);
	if (locale === "de") return de_faq_header_description(inputs);
	if (locale === "it") return it_faq_header_description(inputs);
	if (locale === "pt") return pt_faq_header_description(inputs);
	if (locale === "zh") return zh_faq_header_description(inputs);
	if (locale === "ja") return ja_faq_header_description(inputs);
	if (locale === "ko") return ko_faq_header_description(inputs);
	return ru_faq_header_description(inputs);
});
var en_faq_list_q1 = () => {
	return `What is i18n Benchmark?`;
};
var fr_faq_list_q1 = () => {
	return `Qu'est-ce qu'i18n Benchmark ?`;
};
var es_faq_list_q1 = () => {
	return `¿Qué es i18n Benchmark?`;
};
var de_faq_list_q1 = () => {
	return `Was ist i18n Benchmark?`;
};
var it_faq_list_q1 = () => {
	return `Cos'è i18n Benchmark?`;
};
var pt_faq_list_q1 = () => {
	return `O que é o i18n Benchmark?`;
};
var zh_faq_list_q1 = () => {
	return `什么是 i18n 基准测试？`;
};
var ja_faq_list_q1 = () => {
	return `i18n Benchmarkとは何ですか？`;
};
var ko_faq_list_q1 = () => {
	return `What is i18n Benchmark?`;
};
var ru_faq_list_q1 = () => {
	return `Что такое i18n Benchmark?`;
};
var faq_list_q1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_q1(inputs);
	if (locale === "fr") return fr_faq_list_q1(inputs);
	if (locale === "es") return es_faq_list_q1(inputs);
	if (locale === "de") return de_faq_list_q1(inputs);
	if (locale === "it") return it_faq_list_q1(inputs);
	if (locale === "pt") return pt_faq_list_q1(inputs);
	if (locale === "zh") return zh_faq_list_q1(inputs);
	if (locale === "ja") return ja_faq_list_q1(inputs);
	if (locale === "ko") return ko_faq_list_q1(inputs);
	return ru_faq_list_q1(inputs);
});
var en_faq_list_a1 = () => {
	return `i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.`;
};
var fr_faq_list_a1 = () => {
	return `Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.`;
};
var es_faq_list_a1 = () => {
	return `i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.`;
};
var de_faq_list_a1 = () => {
	return `i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.`;
};
var it_faq_list_a1 = () => {
	return `i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.`;
};
var pt_faq_list_a1 = () => {
	return `O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.`;
};
var zh_faq_list_a1 = () => {
	return `i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。`;
};
var ja_faq_list_a1 = () => {
	return `i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。`;
};
var ko_faq_list_a1 = () => {
	return `i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.`;
};
var ru_faq_list_a1 = () => {
	return `i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.`;
};
var faq_list_a1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_a1(inputs);
	if (locale === "fr") return fr_faq_list_a1(inputs);
	if (locale === "es") return es_faq_list_a1(inputs);
	if (locale === "de") return de_faq_list_a1(inputs);
	if (locale === "it") return it_faq_list_a1(inputs);
	if (locale === "pt") return pt_faq_list_a1(inputs);
	if (locale === "zh") return zh_faq_list_a1(inputs);
	if (locale === "ja") return ja_faq_list_a1(inputs);
	if (locale === "ko") return ko_faq_list_a1(inputs);
	return ru_faq_list_a1(inputs);
});
var en_faq_list_q2 = () => {
	return `How are benchmarks conducted?`;
};
var fr_faq_list_q2 = () => {
	return `Comment sont menés les benchmarks ?`;
};
var es_faq_list_q2 = () => {
	return `¿Cómo se realizan los benchmarks?`;
};
var de_faq_list_q2 = () => {
	return `Wie werden Benchmarks durchgeführt?`;
};
var it_faq_list_q2 = () => {
	return `Come vengono condotti i benchmark?`;
};
var pt_faq_list_q2 = () => {
	return `Como os benchmarks são conduzidos?`;
};
var zh_faq_list_q2 = () => {
	return `基准测试是如何进行的？`;
};
var ja_faq_list_q2 = () => {
	return `ベンチマークはどのように実施されますか？`;
};
var ko_faq_list_q2 = () => {
	return `How are benchmarks conducted?`;
};
var ru_faq_list_q2 = () => {
	return `Как проводятся бенчмарки?`;
};
var faq_list_q2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_q2(inputs);
	if (locale === "fr") return fr_faq_list_q2(inputs);
	if (locale === "es") return es_faq_list_q2(inputs);
	if (locale === "de") return de_faq_list_q2(inputs);
	if (locale === "it") return it_faq_list_q2(inputs);
	if (locale === "pt") return pt_faq_list_q2(inputs);
	if (locale === "zh") return zh_faq_list_q2(inputs);
	if (locale === "ja") return ja_faq_list_q2(inputs);
	if (locale === "ko") return ko_faq_list_q2(inputs);
	return ru_faq_list_q2(inputs);
});
var en_faq_list_a2 = () => {
	return `We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.`;
};
var fr_faq_list_a2 = () => {
	return `Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.`;
};
var es_faq_list_a2 = () => {
	return `Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.`;
};
var de_faq_list_a2 = () => {
	return `Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.`;
};
var it_faq_list_a2 = () => {
	return `Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.`;
};
var pt_faq_list_a2 = () => {
	return `Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.`;
};
var zh_faq_list_a2 = () => {
	return `我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。`;
};
var ja_faq_list_a2 = () => {
	return `一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。`;
};
var ko_faq_list_a2 = () => {
	return `We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.`;
};
var ru_faq_list_a2 = () => {
	return `Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.`;
};
var faq_list_a2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_a2(inputs);
	if (locale === "fr") return fr_faq_list_a2(inputs);
	if (locale === "es") return es_faq_list_a2(inputs);
	if (locale === "de") return de_faq_list_a2(inputs);
	if (locale === "it") return it_faq_list_a2(inputs);
	if (locale === "pt") return pt_faq_list_a2(inputs);
	if (locale === "zh") return zh_faq_list_a2(inputs);
	if (locale === "ja") return ja_faq_list_a2(inputs);
	if (locale === "ko") return ko_faq_list_a2(inputs);
	return ru_faq_list_a2(inputs);
});
var en_faq_list_q3 = () => {
	return `Which libraries are currently supported?`;
};
var fr_faq_list_q3 = () => {
	return `Quelles bibliothèques sont prises en charge ?`;
};
var es_faq_list_q3 = () => {
	return `¿Qué bibliotecas se admiten actualmente?`;
};
var de_faq_list_q3 = () => {
	return `Welche Bibliotheken werden derzeit unterstützt?`;
};
var it_faq_list_q3 = () => {
	return `Quali librerie sono attualmente supportate?`;
};
var pt_faq_list_q3 = () => {
	return `Quais bibliotecas são suportadas atualmente?`;
};
var zh_faq_list_q3 = () => {
	return `目前支持哪些库？`;
};
var ja_faq_list_q3 = () => {
	return `現在サポートされているライブラリは何ですか？`;
};
var ko_faq_list_q3 = () => {
	return `Which libraries are currently supported?`;
};
var ru_faq_list_q3 = () => {
	return `Какие библиотеки поддерживаются в данный момент?`;
};
var faq_list_q3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_q3(inputs);
	if (locale === "fr") return fr_faq_list_q3(inputs);
	if (locale === "es") return es_faq_list_q3(inputs);
	if (locale === "de") return de_faq_list_q3(inputs);
	if (locale === "it") return it_faq_list_q3(inputs);
	if (locale === "pt") return pt_faq_list_q3(inputs);
	if (locale === "zh") return zh_faq_list_q3(inputs);
	if (locale === "ja") return ja_faq_list_q3(inputs);
	if (locale === "ko") return ko_faq_list_q3(inputs);
	return ru_faq_list_q3(inputs);
});
var en_faq_list_a3 = () => {
	return `We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.`;
};
var fr_faq_list_a3 = () => {
	return `react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.`;
};
var es_faq_list_a3 = () => {
	return `Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.`;
};
var de_faq_list_a3 = () => {
	return `Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.`;
};
var it_faq_list_a3 = () => {
	return `Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.`;
};
var pt_faq_list_a3 = () => {
	return `Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.`;
};
var zh_faq_list_a3 = () => {
	return `我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。`;
};
var ja_faq_list_a3 = () => {
	return `react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。`;
};
var ko_faq_list_a3 = () => {
	return `We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.`;
};
var ru_faq_list_a3 = () => {
	return `Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.`;
};
var faq_list_a3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_a3(inputs);
	if (locale === "fr") return fr_faq_list_a3(inputs);
	if (locale === "es") return es_faq_list_a3(inputs);
	if (locale === "de") return de_faq_list_a3(inputs);
	if (locale === "it") return it_faq_list_a3(inputs);
	if (locale === "pt") return pt_faq_list_a3(inputs);
	if (locale === "zh") return zh_faq_list_a3(inputs);
	if (locale === "ja") return ja_faq_list_a3(inputs);
	if (locale === "ko") return ko_faq_list_a3(inputs);
	return ru_faq_list_a3(inputs);
});
var en_faq_list_q4 = () => {
	return `Can I submit my own benchmarks?`;
};
var fr_faq_list_q4 = () => {
	return `Puis-je proposer des benchmarks ?`;
};
var es_faq_list_q4 = () => {
	return `¿Puedo enviar mis propios benchmarks?`;
};
var de_faq_list_q4 = () => {
	return `Kann ich meine eigenen Benchmarks einreichen?`;
};
var it_faq_list_q4 = () => {
	return `Posso inviare i miei benchmark?`;
};
var pt_faq_list_q4 = () => {
	return `Posso enviar meus próprios benchmarks?`;
};
var zh_faq_list_q4 = () => {
	return `我可以提交我自己的基准测试吗？`;
};
var ja_faq_list_q4 = () => {
	return `自分のベンチマークを投稿できますか？`;
};
var ko_faq_list_q4 = () => {
	return `Can I submit my own benchmarks?`;
};
var ru_faq_list_q4 = () => {
	return `Могу ли я прислать свои собственные бенчмарки?`;
};
var faq_list_q4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_q4(inputs);
	if (locale === "fr") return fr_faq_list_q4(inputs);
	if (locale === "es") return es_faq_list_q4(inputs);
	if (locale === "de") return de_faq_list_q4(inputs);
	if (locale === "it") return it_faq_list_q4(inputs);
	if (locale === "pt") return pt_faq_list_q4(inputs);
	if (locale === "zh") return zh_faq_list_q4(inputs);
	if (locale === "ja") return ja_faq_list_q4(inputs);
	if (locale === "ko") return ko_faq_list_q4(inputs);
	return ru_faq_list_q4(inputs);
});
var en_faq_list_a4 = () => {
	return `Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.`;
};
var fr_faq_list_a4 = () => {
	return `Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.`;
};
var es_faq_list_a4 = () => {
	return `¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.`;
};
var de_faq_list_a4 = () => {
	return `Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.`;
};
var it_faq_list_a4 = () => {
	return `Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.`;
};
var pt_faq_list_a4 = () => {
	return `Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.`;
};
var zh_faq_list_a4 = () => {
	return `是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。`;
};
var ja_faq_list_a4 = () => {
	return `はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。`;
};
var ko_faq_list_a4 = () => {
	return `Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.`;
};
var ru_faq_list_a4 = () => {
	return `Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.`;
};
var faq_list_a4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_a4(inputs);
	if (locale === "fr") return fr_faq_list_a4(inputs);
	if (locale === "es") return es_faq_list_a4(inputs);
	if (locale === "de") return de_faq_list_a4(inputs);
	if (locale === "it") return it_faq_list_a4(inputs);
	if (locale === "pt") return pt_faq_list_a4(inputs);
	if (locale === "zh") return zh_faq_list_a4(inputs);
	if (locale === "ja") return ja_faq_list_a4(inputs);
	if (locale === "ko") return ko_faq_list_a4(inputs);
	return ru_faq_list_a4(inputs);
});
var en_faq_list_q5 = () => {
	return `How often are benchmarks updated?`;
};
var fr_faq_list_q5 = () => {
	return `À quelle fréquence sont-ils mis à jour ?`;
};
var es_faq_list_q5 = () => {
	return `¿Con qué frecuencia se actualizan los benchmarks?`;
};
var de_faq_list_q5 = () => {
	return `Wie oft werden Benchmarks aktualisiert?`;
};
var it_faq_list_q5 = () => {
	return `Con quale frequenza vengono aggiornati i benchmark?`;
};
var pt_faq_list_q5 = () => {
	return `Com que frequência os benchmarks são atualizados?`;
};
var zh_faq_list_q5 = () => {
	return `基准测试多久更新一次？`;
};
var ja_faq_list_q5 = () => {
	return `ベンチマークはどのくらいの頻度で更新されますか？`;
};
var ko_faq_list_q5 = () => {
	return `How often are benchmarks updated?`;
};
var ru_faq_list_q5 = () => {
	return `Как часто обновляются бенчмарки?`;
};
var faq_list_q5 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_q5(inputs);
	if (locale === "fr") return fr_faq_list_q5(inputs);
	if (locale === "es") return es_faq_list_q5(inputs);
	if (locale === "de") return de_faq_list_q5(inputs);
	if (locale === "it") return it_faq_list_q5(inputs);
	if (locale === "pt") return pt_faq_list_q5(inputs);
	if (locale === "zh") return zh_faq_list_q5(inputs);
	if (locale === "ja") return ja_faq_list_q5(inputs);
	if (locale === "ko") return ko_faq_list_q5(inputs);
	return ru_faq_list_q5(inputs);
});
var en_faq_list_a5 = () => {
	return `We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.`;
};
var fr_faq_list_a5 = () => {
	return `Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.`;
};
var es_faq_list_a5 = () => {
	return `Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.`;
};
var de_faq_list_a5 = () => {
	return `Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.`;
};
var it_faq_list_a5 = () => {
	return `Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.`;
};
var pt_faq_list_a5 = () => {
	return `Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.`;
};
var zh_faq_list_a5 = () => {
	return `我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。`;
};
var ja_faq_list_a5 = () => {
	return `各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。`;
};
var ko_faq_list_a5 = () => {
	return `We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.`;
};
var ru_faq_list_a5 = () => {
	return `Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.`;
};
var faq_list_a5 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_a5(inputs);
	if (locale === "fr") return fr_faq_list_a5(inputs);
	if (locale === "es") return es_faq_list_a5(inputs);
	if (locale === "de") return de_faq_list_a5(inputs);
	if (locale === "it") return it_faq_list_a5(inputs);
	if (locale === "pt") return pt_faq_list_a5(inputs);
	if (locale === "zh") return zh_faq_list_a5(inputs);
	if (locale === "ja") return ja_faq_list_a5(inputs);
	if (locale === "ko") return ko_faq_list_a5(inputs);
	return ru_faq_list_a5(inputs);
});
var en_faq_list_q6 = () => {
	return `Is the data reliable?`;
};
var fr_faq_list_q6 = () => {
	return `Les données sont-elles fiables ?`;
};
var es_faq_list_q6 = () => {
	return `¿Son fiables los datos?`;
};
var de_faq_list_q6 = () => {
	return `Sind die Daten zuverlässig?`;
};
var it_faq_list_q6 = () => {
	return `I dati sono affidabili?`;
};
var pt_faq_list_q6 = () => {
	return `Os dados são confiáveis?`;
};
var zh_faq_list_q6 = () => {
	return `数据可靠吗？`;
};
var ja_faq_list_q6 = () => {
	return `データは信頼できますか？`;
};
var ko_faq_list_q6 = () => {
	return `Is the data reliable?`;
};
var ru_faq_list_q6 = () => {
	return `Можно ли доверять данным?`;
};
var faq_list_q6 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_q6(inputs);
	if (locale === "fr") return fr_faq_list_q6(inputs);
	if (locale === "es") return es_faq_list_q6(inputs);
	if (locale === "de") return de_faq_list_q6(inputs);
	if (locale === "it") return it_faq_list_q6(inputs);
	if (locale === "pt") return pt_faq_list_q6(inputs);
	if (locale === "zh") return zh_faq_list_q6(inputs);
	if (locale === "ja") return ja_faq_list_q6(inputs);
	if (locale === "ko") return ko_faq_list_q6(inputs);
	return ru_faq_list_q6(inputs);
});
var en_faq_list_a6 = () => {
	return `We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.`;
};
var fr_faq_list_a6 = () => {
	return `Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.`;
};
var es_faq_list_a6 = () => {
	return `Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.`;
};
var de_faq_list_a6 = () => {
	return `Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.`;
};
var it_faq_list_a6 = () => {
	return `Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.`;
};
var pt_faq_list_a6 = () => {
	return `Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.`;
};
var zh_faq_list_a6 = () => {
	return `我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。`;
};
var ja_faq_list_a6 = () => {
	return `ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。`;
};
var ko_faq_list_a6 = () => {
	return `We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.`;
};
var ru_faq_list_a6 = () => {
	return `Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.`;
};
var faq_list_a6 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_a6(inputs);
	if (locale === "fr") return fr_faq_list_a6(inputs);
	if (locale === "es") return es_faq_list_a6(inputs);
	if (locale === "de") return de_faq_list_a6(inputs);
	if (locale === "it") return it_faq_list_a6(inputs);
	if (locale === "pt") return pt_faq_list_a6(inputs);
	if (locale === "zh") return zh_faq_list_a6(inputs);
	if (locale === "ja") return ja_faq_list_a6(inputs);
	if (locale === "ko") return ko_faq_list_a6(inputs);
	return ru_faq_list_a6(inputs);
});
var en_faq_list_q7 = () => {
	return `Do you offer consulting services?`;
};
var fr_faq_list_q7 = () => {
	return `Proposez-vous du conseil ?`;
};
var es_faq_list_q7 = () => {
	return `¿Ofrecen servicios de consultoría?`;
};
var de_faq_list_q7 = () => {
	return `Bieten Sie Beratungsdienstleistungen an?`;
};
var it_faq_list_q7 = () => {
	return `Offrite servizi di consulenza?`;
};
var pt_faq_list_q7 = () => {
	return `Vocês oferecem serviços de consultoria?`;
};
var zh_faq_list_q7 = () => {
	return `你们提供咨询服务吗？`;
};
var ja_faq_list_q7 = () => {
	return `コンサルティングサービスは提供していますか？`;
};
var ko_faq_list_q7 = () => {
	return `Do you offer consulting services?`;
};
var ru_faq_list_q7 = () => {
	return `Предоставляете ли вы консалтинговые услуги?`;
};
var faq_list_q7 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_q7(inputs);
	if (locale === "fr") return fr_faq_list_q7(inputs);
	if (locale === "es") return es_faq_list_q7(inputs);
	if (locale === "de") return de_faq_list_q7(inputs);
	if (locale === "it") return it_faq_list_q7(inputs);
	if (locale === "pt") return pt_faq_list_q7(inputs);
	if (locale === "zh") return zh_faq_list_q7(inputs);
	if (locale === "ja") return ja_faq_list_q7(inputs);
	if (locale === "ko") return ko_faq_list_q7(inputs);
	return ru_faq_list_q7(inputs);
});
var en_faq_list_a7 = () => {
	return `Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.`;
};
var fr_faq_list_a7 = () => {
	return `Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.`;
};
var es_faq_list_a7 = () => {
	return `Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.`;
};
var de_faq_list_a7 = () => {
	return `Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.`;
};
var it_faq_list_a7 = () => {
	return `Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.`;
};
var pt_faq_list_a7 = () => {
	return `Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.`;
};
var zh_faq_list_a7 = () => {
	return `是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。`;
};
var ja_faq_list_a7 = () => {
	return `はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。`;
};
var ko_faq_list_a7 = () => {
	return `Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.`;
};
var ru_faq_list_a7 = () => {
	return `Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.`;
};
var faq_list_a7 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_a7(inputs);
	if (locale === "fr") return fr_faq_list_a7(inputs);
	if (locale === "es") return es_faq_list_a7(inputs);
	if (locale === "de") return de_faq_list_a7(inputs);
	if (locale === "it") return it_faq_list_a7(inputs);
	if (locale === "pt") return pt_faq_list_a7(inputs);
	if (locale === "zh") return zh_faq_list_a7(inputs);
	if (locale === "ja") return ja_faq_list_a7(inputs);
	if (locale === "ko") return ko_faq_list_a7(inputs);
	return ru_faq_list_a7(inputs);
});
var en_faq_list_q8 = () => {
	return `How can I contribute?`;
};
var fr_faq_list_q8 = () => {
	return `Comment contribuer ?`;
};
var es_faq_list_q8 = () => {
	return `¿Cómo puedo contribuir?`;
};
var de_faq_list_q8 = () => {
	return `Wie kann ich beitragen?`;
};
var it_faq_list_q8 = () => {
	return `Come posso contribuire?`;
};
var pt_faq_list_q8 = () => {
	return `Como posso contribuir?`;
};
var zh_faq_list_q8 = () => {
	return `我该如何贡献？`;
};
var ja_faq_list_q8 = () => {
	return `どのように貢献できますか？`;
};
var ko_faq_list_q8 = () => {
	return `How can I contribute?`;
};
var ru_faq_list_q8 = () => {
	return `Как я могу помочь проекту?`;
};
var faq_list_q8 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_q8(inputs);
	if (locale === "fr") return fr_faq_list_q8(inputs);
	if (locale === "es") return es_faq_list_q8(inputs);
	if (locale === "de") return de_faq_list_q8(inputs);
	if (locale === "it") return it_faq_list_q8(inputs);
	if (locale === "pt") return pt_faq_list_q8(inputs);
	if (locale === "zh") return zh_faq_list_q8(inputs);
	if (locale === "ja") return ja_faq_list_q8(inputs);
	if (locale === "ko") return ko_faq_list_q8(inputs);
	return ru_faq_list_q8(inputs);
});
var en_faq_list_a8 = () => {
	return `There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.`;
};
var fr_faq_list_a8 = () => {
	return `Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.`;
};
var es_faq_list_a8 = () => {
	return `Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.`;
};
var de_faq_list_a8 = () => {
	return `Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.`;
};
var it_faq_list_a8 = () => {
	return `Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.`;
};
var pt_faq_list_a8 = () => {
	return `Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.`;
};
var zh_faq_list_a8 = () => {
	return `有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。`;
};
var ja_faq_list_a8 = () => {
	return `貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。`;
};
var ko_faq_list_a8 = () => {
	return `There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.`;
};
var ru_faq_list_a8 = () => {
	return `Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.`;
};
var faq_list_a8 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_a8(inputs);
	if (locale === "fr") return fr_faq_list_a8(inputs);
	if (locale === "es") return es_faq_list_a8(inputs);
	if (locale === "de") return de_faq_list_a8(inputs);
	if (locale === "it") return it_faq_list_a8(inputs);
	if (locale === "pt") return pt_faq_list_a8(inputs);
	if (locale === "zh") return zh_faq_list_a8(inputs);
	if (locale === "ja") return ja_faq_list_a8(inputs);
	if (locale === "ko") return ko_faq_list_a8(inputs);
	return ru_faq_list_a8(inputs);
});
var en_pricing_header_title = () => {
	return `Simple, Transparent Pricing`;
};
var fr_pricing_header_title = () => {
	return `Tarification simple et transparente`;
};
var es_pricing_header_title = () => {
	return `Precios sencillos y transparentes`;
};
var de_pricing_header_title = () => {
	return `Einfache, transparente Preisgestaltung`;
};
var it_pricing_header_title = () => {
	return `Prezzi semplici e trasparenti`;
};
var pt_pricing_header_title = () => {
	return `Preços simples e transparentes`;
};
var zh_pricing_header_title = () => {
	return `简单透明的定价`;
};
var ja_pricing_header_title = () => {
	return `シンプルで透明性の高い価格設定`;
};
var ko_pricing_header_title = () => {
	return `Simple, Transparent Pricing`;
};
var ru_pricing_header_title = () => {
	return `Простые и прозрачные цены`;
};
var pricing_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_header_title(inputs);
	if (locale === "fr") return fr_pricing_header_title(inputs);
	if (locale === "es") return es_pricing_header_title(inputs);
	if (locale === "de") return de_pricing_header_title(inputs);
	if (locale === "it") return it_pricing_header_title(inputs);
	if (locale === "pt") return pt_pricing_header_title(inputs);
	if (locale === "zh") return zh_pricing_header_title(inputs);
	if (locale === "ja") return ja_pricing_header_title(inputs);
	if (locale === "ko") return ko_pricing_header_title(inputs);
	return ru_pricing_header_title(inputs);
});
var en_pricing_header_description = () => {
	return `Choose the plan that fits your team. No hidden fees.`;
};
var fr_pricing_header_description = () => {
	return `Choisissez l'offre adaptée à votre équipe. Sans frais cachés.`;
};
var es_pricing_header_description = () => {
	return `Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.`;
};
var de_pricing_header_description = () => {
	return `Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.`;
};
var it_pricing_header_description = () => {
	return `Scegli il piano più adatto al tuo team. Nessun costo nascosto.`;
};
var pt_pricing_header_description = () => {
	return `Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.`;
};
var zh_pricing_header_description = () => {
	return `选择适合您团队的计划。无隐藏费用。`;
};
var ja_pricing_header_description = () => {
	return `チームに合ったプランをお選びください。隠れた費用はありません。`;
};
var ko_pricing_header_description = () => {
	return `Choose the plan that fits your team. No hidden fees.`;
};
var ru_pricing_header_description = () => {
	return `Выберите подходящий план для вашей команды. Никаких скрытых комиссий.`;
};
var pricing_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_header_description(inputs);
	if (locale === "fr") return fr_pricing_header_description(inputs);
	if (locale === "es") return es_pricing_header_description(inputs);
	if (locale === "de") return de_pricing_header_description(inputs);
	if (locale === "it") return it_pricing_header_description(inputs);
	if (locale === "pt") return pt_pricing_header_description(inputs);
	if (locale === "zh") return zh_pricing_header_description(inputs);
	if (locale === "ja") return ja_pricing_header_description(inputs);
	if (locale === "ko") return ko_pricing_header_description(inputs);
	return ru_pricing_header_description(inputs);
});
var en_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var fr_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var es_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var de_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var it_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var pt_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var zh_pricing_tiers_startername1 = () => {
	return `入门版`;
};
var ja_pricing_tiers_startername1 = () => {
	return `スターター`;
};
var ko_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var ru_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var pricing_tiers_startername1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_startername1(inputs);
	if (locale === "fr") return fr_pricing_tiers_startername1(inputs);
	if (locale === "es") return es_pricing_tiers_startername1(inputs);
	if (locale === "de") return de_pricing_tiers_startername1(inputs);
	if (locale === "it") return it_pricing_tiers_startername1(inputs);
	if (locale === "pt") return pt_pricing_tiers_startername1(inputs);
	if (locale === "zh") return zh_pricing_tiers_startername1(inputs);
	if (locale === "ja") return ja_pricing_tiers_startername1(inputs);
	if (locale === "ko") return ko_pricing_tiers_startername1(inputs);
	return ru_pricing_tiers_startername1(inputs);
});
var en_pricing_tiers_starterprice1 = () => {
	return `$0`;
};
var fr_pricing_tiers_starterprice1 = () => {
	return `0 €`;
};
var es_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var de_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var it_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var pt_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var zh_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var ja_pricing_tiers_starterprice1 = () => {
	return `0円`;
};
var ko_pricing_tiers_starterprice1 = () => {
	return `$0`;
};
var ru_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var pricing_tiers_starterprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterprice1(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterprice1(inputs);
	if (locale === "es") return es_pricing_tiers_starterprice1(inputs);
	if (locale === "de") return de_pricing_tiers_starterprice1(inputs);
	if (locale === "it") return it_pricing_tiers_starterprice1(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterprice1(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterprice1(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterprice1(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterprice1(inputs);
	return ru_pricing_tiers_starterprice1(inputs);
});
var en_pricing_tiers_starterperiod1 = () => {
	return `forever`;
};
var fr_pricing_tiers_starterperiod1 = () => {
	return `pour toujours`;
};
var es_pricing_tiers_starterperiod1 = () => {
	return `para siempre`;
};
var de_pricing_tiers_starterperiod1 = () => {
	return `für immer`;
};
var it_pricing_tiers_starterperiod1 = () => {
	return `per sempre`;
};
var pt_pricing_tiers_starterperiod1 = () => {
	return `para sempre`;
};
var zh_pricing_tiers_starterperiod1 = () => {
	return `永久`;
};
var ja_pricing_tiers_starterperiod1 = () => {
	return `ずっと無料`;
};
var ko_pricing_tiers_starterperiod1 = () => {
	return `forever`;
};
var ru_pricing_tiers_starterperiod1 = () => {
	return `навсегда`;
};
var pricing_tiers_starterperiod1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterperiod1(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterperiod1(inputs);
	if (locale === "es") return es_pricing_tiers_starterperiod1(inputs);
	if (locale === "de") return de_pricing_tiers_starterperiod1(inputs);
	if (locale === "it") return it_pricing_tiers_starterperiod1(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterperiod1(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterperiod1(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterperiod1(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterperiod1(inputs);
	return ru_pricing_tiers_starterperiod1(inputs);
});
var en_pricing_tiers_starterfeature11 = () => {
	return `5 benchmark runs/day`;
};
var fr_pricing_tiers_starterfeature11 = () => {
	return `5 exécutions de benchmark / jour`;
};
var es_pricing_tiers_starterfeature11 = () => {
	return `5 ejecuciones de benchmark al día`;
};
var de_pricing_tiers_starterfeature11 = () => {
	return `5 Benchmark-Durchläufe/Tag`;
};
var it_pricing_tiers_starterfeature11 = () => {
	return `5 esecuzioni benchmark al giorno`;
};
var pt_pricing_tiers_starterfeature11 = () => {
	return `5 execuções de benchmark/dia`;
};
var zh_pricing_tiers_starterfeature11 = () => {
	return `每天 5 次基准测试运行`;
};
var ja_pricing_tiers_starterfeature11 = () => {
	return `1日あたり5回のベンチマーク実行`;
};
var ko_pricing_tiers_starterfeature11 = () => {
	return `5 benchmark runs/day`;
};
var ru_pricing_tiers_starterfeature11 = () => {
	return `5 запусков бенчмарка в день`;
};
var pricing_tiers_starterfeature11 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterfeature11(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterfeature11(inputs);
	if (locale === "es") return es_pricing_tiers_starterfeature11(inputs);
	if (locale === "de") return de_pricing_tiers_starterfeature11(inputs);
	if (locale === "it") return it_pricing_tiers_starterfeature11(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterfeature11(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterfeature11(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterfeature11(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterfeature11(inputs);
	return ru_pricing_tiers_starterfeature11(inputs);
});
var en_pricing_tiers_starterfeature21 = () => {
	return `3 libraries`;
};
var fr_pricing_tiers_starterfeature21 = () => {
	return `3 bibliothèques`;
};
var es_pricing_tiers_starterfeature21 = () => {
	return `3 bibliotecas`;
};
var de_pricing_tiers_starterfeature21 = () => {
	return `3 Bibliotheken`;
};
var it_pricing_tiers_starterfeature21 = () => {
	return `3 librerie`;
};
var pt_pricing_tiers_starterfeature21 = () => {
	return `3 bibliotecas`;
};
var zh_pricing_tiers_starterfeature21 = () => {
	return `3 个库`;
};
var ja_pricing_tiers_starterfeature21 = () => {
	return `3ライブラリ`;
};
var ko_pricing_tiers_starterfeature21 = () => {
	return `3 libraries`;
};
var ru_pricing_tiers_starterfeature21 = () => {
	return `3 библиотеки`;
};
var pricing_tiers_starterfeature21 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterfeature21(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterfeature21(inputs);
	if (locale === "es") return es_pricing_tiers_starterfeature21(inputs);
	if (locale === "de") return de_pricing_tiers_starterfeature21(inputs);
	if (locale === "it") return it_pricing_tiers_starterfeature21(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterfeature21(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterfeature21(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterfeature21(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterfeature21(inputs);
	return ru_pricing_tiers_starterfeature21(inputs);
});
var en_pricing_tiers_starterfeature31 = () => {
	return `Community support`;
};
var fr_pricing_tiers_starterfeature31 = () => {
	return `Support communautaire`;
};
var es_pricing_tiers_starterfeature31 = () => {
	return `Soporte de la comunidad`;
};
var de_pricing_tiers_starterfeature31 = () => {
	return `Community-Support`;
};
var it_pricing_tiers_starterfeature31 = () => {
	return `Supporto della comunità`;
};
var pt_pricing_tiers_starterfeature31 = () => {
	return `Suporte da comunidade`;
};
var zh_pricing_tiers_starterfeature31 = () => {
	return `社区支持`;
};
var ja_pricing_tiers_starterfeature31 = () => {
	return `コミュニティサポート`;
};
var ko_pricing_tiers_starterfeature31 = () => {
	return `Community support`;
};
var ru_pricing_tiers_starterfeature31 = () => {
	return `Поддержка сообщества`;
};
var pricing_tiers_starterfeature31 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterfeature31(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterfeature31(inputs);
	if (locale === "es") return es_pricing_tiers_starterfeature31(inputs);
	if (locale === "de") return de_pricing_tiers_starterfeature31(inputs);
	if (locale === "it") return it_pricing_tiers_starterfeature31(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterfeature31(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterfeature31(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterfeature31(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterfeature31(inputs);
	return ru_pricing_tiers_starterfeature31(inputs);
});
var en_pricing_tiers_starterfeature41 = () => {
	return `Public results`;
};
var fr_pricing_tiers_starterfeature41 = () => {
	return `Résultats publics`;
};
var es_pricing_tiers_starterfeature41 = () => {
	return `Resultados públicos`;
};
var de_pricing_tiers_starterfeature41 = () => {
	return `Öffentliche Ergebnisse`;
};
var it_pricing_tiers_starterfeature41 = () => {
	return `Risultati pubblici`;
};
var pt_pricing_tiers_starterfeature41 = () => {
	return `Resultados públicos`;
};
var zh_pricing_tiers_starterfeature41 = () => {
	return `公开结果`;
};
var ja_pricing_tiers_starterfeature41 = () => {
	return `公開結果`;
};
var ko_pricing_tiers_starterfeature41 = () => {
	return `Public results`;
};
var ru_pricing_tiers_starterfeature41 = () => {
	return `Публичные результаты`;
};
var pricing_tiers_starterfeature41 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterfeature41(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterfeature41(inputs);
	if (locale === "es") return es_pricing_tiers_starterfeature41(inputs);
	if (locale === "de") return de_pricing_tiers_starterfeature41(inputs);
	if (locale === "it") return it_pricing_tiers_starterfeature41(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterfeature41(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterfeature41(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterfeature41(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterfeature41(inputs);
	return ru_pricing_tiers_starterfeature41(inputs);
});
var en_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var fr_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var es_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var de_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var it_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var pt_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var zh_pricing_tiers_proname1 = () => {
	return `专业版`;
};
var ja_pricing_tiers_proname1 = () => {
	return `プロ`;
};
var ko_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var ru_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var pricing_tiers_proname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_proname1(inputs);
	if (locale === "fr") return fr_pricing_tiers_proname1(inputs);
	if (locale === "es") return es_pricing_tiers_proname1(inputs);
	if (locale === "de") return de_pricing_tiers_proname1(inputs);
	if (locale === "it") return it_pricing_tiers_proname1(inputs);
	if (locale === "pt") return pt_pricing_tiers_proname1(inputs);
	if (locale === "zh") return zh_pricing_tiers_proname1(inputs);
	if (locale === "ja") return ja_pricing_tiers_proname1(inputs);
	if (locale === "ko") return ko_pricing_tiers_proname1(inputs);
	return ru_pricing_tiers_proname1(inputs);
});
var en_pricing_tiers_proprice1 = () => {
	return `$29`;
};
var fr_pricing_tiers_proprice1 = () => {
	return `29 €`;
};
var es_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var de_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var it_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var pt_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var zh_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var ja_pricing_tiers_proprice1 = () => {
	return `29ドル`;
};
var ko_pricing_tiers_proprice1 = () => {
	return `$29`;
};
var ru_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var pricing_tiers_proprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_proprice1(inputs);
	if (locale === "fr") return fr_pricing_tiers_proprice1(inputs);
	if (locale === "es") return es_pricing_tiers_proprice1(inputs);
	if (locale === "de") return de_pricing_tiers_proprice1(inputs);
	if (locale === "it") return it_pricing_tiers_proprice1(inputs);
	if (locale === "pt") return pt_pricing_tiers_proprice1(inputs);
	if (locale === "zh") return zh_pricing_tiers_proprice1(inputs);
	if (locale === "ja") return ja_pricing_tiers_proprice1(inputs);
	if (locale === "ko") return ko_pricing_tiers_proprice1(inputs);
	return ru_pricing_tiers_proprice1(inputs);
});
var en_pricing_tiers_properiod1 = () => {
	return `/month`;
};
var fr_pricing_tiers_properiod1 = () => {
	return `/ mois`;
};
var es_pricing_tiers_properiod1 = () => {
	return `/mes`;
};
var de_pricing_tiers_properiod1 = () => {
	return `/Monat`;
};
var it_pricing_tiers_properiod1 = () => {
	return `/mese`;
};
var pt_pricing_tiers_properiod1 = () => {
	return `/mês`;
};
var zh_pricing_tiers_properiod1 = () => {
	return `/月`;
};
var ja_pricing_tiers_properiod1 = () => {
	return `/月`;
};
var ko_pricing_tiers_properiod1 = () => {
	return `/month`;
};
var ru_pricing_tiers_properiod1 = () => {
	return `/мес`;
};
var pricing_tiers_properiod1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_properiod1(inputs);
	if (locale === "fr") return fr_pricing_tiers_properiod1(inputs);
	if (locale === "es") return es_pricing_tiers_properiod1(inputs);
	if (locale === "de") return de_pricing_tiers_properiod1(inputs);
	if (locale === "it") return it_pricing_tiers_properiod1(inputs);
	if (locale === "pt") return pt_pricing_tiers_properiod1(inputs);
	if (locale === "zh") return zh_pricing_tiers_properiod1(inputs);
	if (locale === "ja") return ja_pricing_tiers_properiod1(inputs);
	if (locale === "ko") return ko_pricing_tiers_properiod1(inputs);
	return ru_pricing_tiers_properiod1(inputs);
});
var en_pricing_tiers_profeature11 = () => {
	return `Unlimited runs`;
};
var fr_pricing_tiers_profeature11 = () => {
	return `Exécutions illimitées`;
};
var es_pricing_tiers_profeature11 = () => {
	return `Ejecuciones ilimitadas`;
};
var de_pricing_tiers_profeature11 = () => {
	return `Unbegrenzte Durchläufe`;
};
var it_pricing_tiers_profeature11 = () => {
	return `Esecuzioni illimitate`;
};
var pt_pricing_tiers_profeature11 = () => {
	return `Execuções ilimitadas`;
};
var zh_pricing_tiers_profeature11 = () => {
	return `无限次运行`;
};
var ja_pricing_tiers_profeature11 = () => {
	return `無制限の実行`;
};
var ko_pricing_tiers_profeature11 = () => {
	return `Unlimited runs`;
};
var ru_pricing_tiers_profeature11 = () => {
	return `Неограниченное число запусков`;
};
var pricing_tiers_profeature11 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature11(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature11(inputs);
	if (locale === "es") return es_pricing_tiers_profeature11(inputs);
	if (locale === "de") return de_pricing_tiers_profeature11(inputs);
	if (locale === "it") return it_pricing_tiers_profeature11(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature11(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature11(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature11(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature11(inputs);
	return ru_pricing_tiers_profeature11(inputs);
});
var en_pricing_tiers_profeature21 = () => {
	return `All libraries`;
};
var fr_pricing_tiers_profeature21 = () => {
	return `Toutes les bibliothèques`;
};
var es_pricing_tiers_profeature21 = () => {
	return `Todas las bibliotecas`;
};
var de_pricing_tiers_profeature21 = () => {
	return `Alle Bibliotheken`;
};
var it_pricing_tiers_profeature21 = () => {
	return `Tutte le librerie`;
};
var pt_pricing_tiers_profeature21 = () => {
	return `Todas as bibliotecas`;
};
var zh_pricing_tiers_profeature21 = () => {
	return `所有库`;
};
var ja_pricing_tiers_profeature21 = () => {
	return `すべてのライブラリ`;
};
var ko_pricing_tiers_profeature21 = () => {
	return `All libraries`;
};
var ru_pricing_tiers_profeature21 = () => {
	return `Все библиотеки`;
};
var pricing_tiers_profeature21 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature21(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature21(inputs);
	if (locale === "es") return es_pricing_tiers_profeature21(inputs);
	if (locale === "de") return de_pricing_tiers_profeature21(inputs);
	if (locale === "it") return it_pricing_tiers_profeature21(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature21(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature21(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature21(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature21(inputs);
	return ru_pricing_tiers_profeature21(inputs);
});
var en_pricing_tiers_profeature31 = () => {
	return `Priority support`;
};
var fr_pricing_tiers_profeature31 = () => {
	return `Support prioritaire`;
};
var es_pricing_tiers_profeature31 = () => {
	return `Soporte prioritario`;
};
var de_pricing_tiers_profeature31 = () => {
	return `Priorisierter Support`;
};
var it_pricing_tiers_profeature31 = () => {
	return `Supporto prioritario`;
};
var pt_pricing_tiers_profeature31 = () => {
	return `Suporte prioritário`;
};
var zh_pricing_tiers_profeature31 = () => {
	return `优先支持`;
};
var ja_pricing_tiers_profeature31 = () => {
	return `優先サポート`;
};
var ko_pricing_tiers_profeature31 = () => {
	return `Priority support`;
};
var ru_pricing_tiers_profeature31 = () => {
	return `Приоритетная поддержка`;
};
var pricing_tiers_profeature31 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature31(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature31(inputs);
	if (locale === "es") return es_pricing_tiers_profeature31(inputs);
	if (locale === "de") return de_pricing_tiers_profeature31(inputs);
	if (locale === "it") return it_pricing_tiers_profeature31(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature31(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature31(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature31(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature31(inputs);
	return ru_pricing_tiers_profeature31(inputs);
});
var en_pricing_tiers_profeature41 = () => {
	return `Private results`;
};
var fr_pricing_tiers_profeature41 = () => {
	return `Résultats privés`;
};
var es_pricing_tiers_profeature41 = () => {
	return `Resultados privados`;
};
var de_pricing_tiers_profeature41 = () => {
	return `Private Ergebnisse`;
};
var it_pricing_tiers_profeature41 = () => {
	return `Risultati privati`;
};
var pt_pricing_tiers_profeature41 = () => {
	return `Resultados privados`;
};
var zh_pricing_tiers_profeature41 = () => {
	return `私有结果`;
};
var ja_pricing_tiers_profeature41 = () => {
	return `非公開の結果`;
};
var ko_pricing_tiers_profeature41 = () => {
	return `Private results`;
};
var ru_pricing_tiers_profeature41 = () => {
	return `Приватные результаты`;
};
var pricing_tiers_profeature41 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature41(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature41(inputs);
	if (locale === "es") return es_pricing_tiers_profeature41(inputs);
	if (locale === "de") return de_pricing_tiers_profeature41(inputs);
	if (locale === "it") return it_pricing_tiers_profeature41(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature41(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature41(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature41(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature41(inputs);
	return ru_pricing_tiers_profeature41(inputs);
});
var en_pricing_tiers_profeature51 = () => {
	return `CI integration`;
};
var fr_pricing_tiers_profeature51 = () => {
	return `Intégration CI`;
};
var es_pricing_tiers_profeature51 = () => {
	return `Integración CI`;
};
var de_pricing_tiers_profeature51 = () => {
	return `CI-Integration`;
};
var it_pricing_tiers_profeature51 = () => {
	return `Integrazione CI`;
};
var pt_pricing_tiers_profeature51 = () => {
	return `Integração CI`;
};
var zh_pricing_tiers_profeature51 = () => {
	return `CI 集成`;
};
var ja_pricing_tiers_profeature51 = () => {
	return `CI統合`;
};
var ko_pricing_tiers_profeature51 = () => {
	return `CI integration`;
};
var ru_pricing_tiers_profeature51 = () => {
	return `Интеграция с CI`;
};
var pricing_tiers_profeature51 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature51(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature51(inputs);
	if (locale === "es") return es_pricing_tiers_profeature51(inputs);
	if (locale === "de") return de_pricing_tiers_profeature51(inputs);
	if (locale === "it") return it_pricing_tiers_profeature51(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature51(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature51(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature51(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature51(inputs);
	return ru_pricing_tiers_profeature51(inputs);
});
var en_pricing_tiers_profeature61 = () => {
	return `Historical data`;
};
var fr_pricing_tiers_profeature61 = () => {
	return `Historique`;
};
var es_pricing_tiers_profeature61 = () => {
	return `Datos históricos`;
};
var de_pricing_tiers_profeature61 = () => {
	return `Historische Daten`;
};
var it_pricing_tiers_profeature61 = () => {
	return `Dati storici`;
};
var pt_pricing_tiers_profeature61 = () => {
	return `Dados históricos`;
};
var zh_pricing_tiers_profeature61 = () => {
	return `历史数据`;
};
var ja_pricing_tiers_profeature61 = () => {
	return `履歴データ`;
};
var ko_pricing_tiers_profeature61 = () => {
	return `Historical data`;
};
var ru_pricing_tiers_profeature61 = () => {
	return `Исторические данные`;
};
var pricing_tiers_profeature61 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature61(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature61(inputs);
	if (locale === "es") return es_pricing_tiers_profeature61(inputs);
	if (locale === "de") return de_pricing_tiers_profeature61(inputs);
	if (locale === "it") return it_pricing_tiers_profeature61(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature61(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature61(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature61(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature61(inputs);
	return ru_pricing_tiers_profeature61(inputs);
});
var en_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var fr_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var es_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var de_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var it_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var pt_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var zh_pricing_tiers_enterprisename1 = () => {
	return `企业版`;
};
var ja_pricing_tiers_enterprisename1 = () => {
	return `エンタープライズ`;
};
var ko_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var ru_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var pricing_tiers_enterprisename1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisename1(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisename1(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisename1(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisename1(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisename1(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisename1(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisename1(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisename1(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisename1(inputs);
	return ru_pricing_tiers_enterprisename1(inputs);
});
var en_pricing_tiers_enterpriseprice1 = () => {
	return `Custom`;
};
var fr_pricing_tiers_enterpriseprice1 = () => {
	return `Sur mesure`;
};
var es_pricing_tiers_enterpriseprice1 = () => {
	return `Personalizado`;
};
var de_pricing_tiers_enterpriseprice1 = () => {
	return `Individuell`;
};
var it_pricing_tiers_enterpriseprice1 = () => {
	return `Personalizzato`;
};
var pt_pricing_tiers_enterpriseprice1 = () => {
	return `Personalizado`;
};
var zh_pricing_tiers_enterpriseprice1 = () => {
	return `定制`;
};
var ja_pricing_tiers_enterpriseprice1 = () => {
	return `カスタム`;
};
var ko_pricing_tiers_enterpriseprice1 = () => {
	return `Custom`;
};
var ru_pricing_tiers_enterpriseprice1 = () => {
	return `Индивидуально`;
};
var pricing_tiers_enterpriseprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "es") return es_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "de") return de_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "it") return it_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterpriseprice1(inputs);
	return ru_pricing_tiers_enterpriseprice1(inputs);
});
var en_pricing_tiers_enterprisefeature11 = () => {
	return `Everything in Pro`;
};
var fr_pricing_tiers_enterprisefeature11 = () => {
	return `Tout le Pro`;
};
var es_pricing_tiers_enterprisefeature11 = () => {
	return `Todo lo que hay en Pro`;
};
var de_pricing_tiers_enterprisefeature11 = () => {
	return `Alles in Pro enthalten`;
};
var it_pricing_tiers_enterprisefeature11 = () => {
	return `Tutto quello che c'è in Pro`;
};
var pt_pricing_tiers_enterprisefeature11 = () => {
	return `Tudo o que está no Pro`;
};
var zh_pricing_tiers_enterprisefeature11 = () => {
	return `包含专业版中的所有功能`;
};
var ja_pricing_tiers_enterprisefeature11 = () => {
	return `Proプランのすべてを含む`;
};
var ko_pricing_tiers_enterprisefeature11 = () => {
	return `Everything in Pro`;
};
var ru_pricing_tiers_enterprisefeature11 = () => {
	return `Все, что есть в Pro`;
};
var pricing_tiers_enterprisefeature11 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature11(inputs);
	return ru_pricing_tiers_enterprisefeature11(inputs);
});
var en_pricing_tiers_enterprisefeature21 = () => {
	return `On-premise option`;
};
var fr_pricing_tiers_enterprisefeature21 = () => {
	return `Option on-premise`;
};
var es_pricing_tiers_enterprisefeature21 = () => {
	return `Opción on-premise`;
};
var de_pricing_tiers_enterprisefeature21 = () => {
	return `On-Premise-Option`;
};
var it_pricing_tiers_enterprisefeature21 = () => {
	return `Opzione on-premise`;
};
var pt_pricing_tiers_enterprisefeature21 = () => {
	return `Opção on-premise`;
};
var zh_pricing_tiers_enterprisefeature21 = () => {
	return `本地部署选项`;
};
var ja_pricing_tiers_enterprisefeature21 = () => {
	return `オンプレミスオプション`;
};
var ko_pricing_tiers_enterprisefeature21 = () => {
	return `On-premise option`;
};
var ru_pricing_tiers_enterprisefeature21 = () => {
	return `Локальная установка`;
};
var pricing_tiers_enterprisefeature21 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature21(inputs);
	return ru_pricing_tiers_enterprisefeature21(inputs);
});
var en_pricing_tiers_enterprisefeature31 = () => {
	return `SSO & SAML`;
};
var fr_pricing_tiers_enterprisefeature31 = () => {
	return `SSO et SAML`;
};
var es_pricing_tiers_enterprisefeature31 = () => {
	return `SSO y SAML`;
};
var de_pricing_tiers_enterprisefeature31 = () => {
	return `SSO & SAML`;
};
var it_pricing_tiers_enterprisefeature31 = () => {
	return `SSO e SAML`;
};
var pt_pricing_tiers_enterprisefeature31 = () => {
	return `SSO e SAML`;
};
var zh_pricing_tiers_enterprisefeature31 = () => {
	return `SSO 和 SAML`;
};
var ja_pricing_tiers_enterprisefeature31 = () => {
	return `SSO & SAML`;
};
var ko_pricing_tiers_enterprisefeature31 = () => {
	return `SSO & SAML`;
};
var ru_pricing_tiers_enterprisefeature31 = () => {
	return `SSO и SAML`;
};
var pricing_tiers_enterprisefeature31 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature31(inputs);
	return ru_pricing_tiers_enterprisefeature31(inputs);
});
var en_pricing_tiers_enterprisefeature41 = () => {
	return `Dedicated account manager`;
};
var fr_pricing_tiers_enterprisefeature41 = () => {
	return `Account manager dédié`;
};
var es_pricing_tiers_enterprisefeature41 = () => {
	return `Gestor de cuentas dedicado`;
};
var de_pricing_tiers_enterprisefeature41 = () => {
	return `Dedizierter Account Manager`;
};
var it_pricing_tiers_enterprisefeature41 = () => {
	return `Account manager dedicato`;
};
var pt_pricing_tiers_enterprisefeature41 = () => {
	return `Gerente de conta dedicado`;
};
var zh_pricing_tiers_enterprisefeature41 = () => {
	return `专属客户经理`;
};
var ja_pricing_tiers_enterprisefeature41 = () => {
	return `専任のアカウントマネージャー`;
};
var ko_pricing_tiers_enterprisefeature41 = () => {
	return `Dedicated account manager`;
};
var ru_pricing_tiers_enterprisefeature41 = () => {
	return `Персональный менеджер`;
};
var pricing_tiers_enterprisefeature41 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature41(inputs);
	return ru_pricing_tiers_enterprisefeature41(inputs);
});
var en_pricing_tiers_enterprisefeature51 = () => {
	return `Custom SLAs`;
};
var fr_pricing_tiers_enterprisefeature51 = () => {
	return `SLA sur mesure`;
};
var es_pricing_tiers_enterprisefeature51 = () => {
	return `SLAs personalizados`;
};
var de_pricing_tiers_enterprisefeature51 = () => {
	return `Individuelle SLAs`;
};
var it_pricing_tiers_enterprisefeature51 = () => {
	return `SLA personalizzati`;
};
var pt_pricing_tiers_enterprisefeature51 = () => {
	return `SLAs personalizados`;
};
var zh_pricing_tiers_enterprisefeature51 = () => {
	return `定制 SLA`;
};
var ja_pricing_tiers_enterprisefeature51 = () => {
	return `カスタムSLA`;
};
var ko_pricing_tiers_enterprisefeature51 = () => {
	return `Custom SLAs`;
};
var ru_pricing_tiers_enterprisefeature51 = () => {
	return `Индивидуальные SLA`;
};
var pricing_tiers_enterprisefeature51 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature51(inputs);
	return ru_pricing_tiers_enterprisefeature51(inputs);
});
var en_pricing_tiers_enterprisefeature61 = () => {
	return `Audit logs`;
};
var fr_pricing_tiers_enterprisefeature61 = () => {
	return `Journaux d'audit`;
};
var es_pricing_tiers_enterprisefeature61 = () => {
	return `Registros de auditoría`;
};
var de_pricing_tiers_enterprisefeature61 = () => {
	return `Audit-Protokolle`;
};
var it_pricing_tiers_enterprisefeature61 = () => {
	return `Log di controllo`;
};
var pt_pricing_tiers_enterprisefeature61 = () => {
	return `Logs de auditoria`;
};
var zh_pricing_tiers_enterprisefeature61 = () => {
	return `审计日志`;
};
var ja_pricing_tiers_enterprisefeature61 = () => {
	return `監査ログ`;
};
var ko_pricing_tiers_enterprisefeature61 = () => {
	return `Audit logs`;
};
var ru_pricing_tiers_enterprisefeature61 = () => {
	return `Журналы аудита`;
};
var pricing_tiers_enterprisefeature61 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature61(inputs);
	return ru_pricing_tiers_enterprisefeature61(inputs);
});
var en_pricing_tiers_enterprisefeature71 = () => {
	return `Training sessions`;
};
var fr_pricing_tiers_enterprisefeature71 = () => {
	return `Sessions de formation`;
};
var es_pricing_tiers_enterprisefeature71 = () => {
	return `Sesiones de formación`;
};
var de_pricing_tiers_enterprisefeature71 = () => {
	return `Schulungssitzungen`;
};
var it_pricing_tiers_enterprisefeature71 = () => {
	return `Sessioni di formazione`;
};
var pt_pricing_tiers_enterprisefeature71 = () => {
	return `Sessões de treinamento`;
};
var zh_pricing_tiers_enterprisefeature71 = () => {
	return `培训课程`;
};
var ja_pricing_tiers_enterprisefeature71 = () => {
	return `トレーニングセッション`;
};
var ko_pricing_tiers_enterprisefeature71 = () => {
	return `Training sessions`;
};
var ru_pricing_tiers_enterprisefeature71 = () => {
	return `Обучающие сессии`;
};
var pricing_tiers_enterprisefeature71 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature71(inputs);
	return ru_pricing_tiers_enterprisefeature71(inputs);
});
var en_pricing_tiers_contactsales1 = () => {
	return `Contact Sales`;
};
var fr_pricing_tiers_contactsales1 = () => {
	return `Contacter les ventes`;
};
var es_pricing_tiers_contactsales1 = () => {
	return `Contactar con ventas`;
};
var de_pricing_tiers_contactsales1 = () => {
	return `Vertrieb kontaktieren`;
};
var it_pricing_tiers_contactsales1 = () => {
	return `Contatta l'ufficio vendite`;
};
var pt_pricing_tiers_contactsales1 = () => {
	return `Contatar vendas`;
};
var zh_pricing_tiers_contactsales1 = () => {
	return `联系销售`;
};
var ja_pricing_tiers_contactsales1 = () => {
	return `営業に問い合わせる`;
};
var ko_pricing_tiers_contactsales1 = () => {
	return `Contact Sales`;
};
var ru_pricing_tiers_contactsales1 = () => {
	return `Связаться с отделом продаж`;
};
var pricing_tiers_contactsales1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_contactsales1(inputs);
	if (locale === "fr") return fr_pricing_tiers_contactsales1(inputs);
	if (locale === "es") return es_pricing_tiers_contactsales1(inputs);
	if (locale === "de") return de_pricing_tiers_contactsales1(inputs);
	if (locale === "it") return it_pricing_tiers_contactsales1(inputs);
	if (locale === "pt") return pt_pricing_tiers_contactsales1(inputs);
	if (locale === "zh") return zh_pricing_tiers_contactsales1(inputs);
	if (locale === "ja") return ja_pricing_tiers_contactsales1(inputs);
	if (locale === "ko") return ko_pricing_tiers_contactsales1(inputs);
	return ru_pricing_tiers_contactsales1(inputs);
});
var en_pricing_tiers_getstarted1 = () => {
	return `Get Started`;
};
var fr_pricing_tiers_getstarted1 = () => {
	return `Commencer`;
};
var es_pricing_tiers_getstarted1 = () => {
	return `Empezar`;
};
var de_pricing_tiers_getstarted1 = () => {
	return `Erste Schritte`;
};
var it_pricing_tiers_getstarted1 = () => {
	return `Inizia ora`;
};
var pt_pricing_tiers_getstarted1 = () => {
	return `Começar`;
};
var zh_pricing_tiers_getstarted1 = () => {
	return `开始使用`;
};
var ja_pricing_tiers_getstarted1 = () => {
	return `始める`;
};
var ko_pricing_tiers_getstarted1 = () => {
	return `Get Started`;
};
var ru_pricing_tiers_getstarted1 = () => {
	return `Начать работу`;
};
var pricing_tiers_getstarted1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_getstarted1(inputs);
	if (locale === "fr") return fr_pricing_tiers_getstarted1(inputs);
	if (locale === "es") return es_pricing_tiers_getstarted1(inputs);
	if (locale === "de") return de_pricing_tiers_getstarted1(inputs);
	if (locale === "it") return it_pricing_tiers_getstarted1(inputs);
	if (locale === "pt") return pt_pricing_tiers_getstarted1(inputs);
	if (locale === "zh") return zh_pricing_tiers_getstarted1(inputs);
	if (locale === "ja") return ja_pricing_tiers_getstarted1(inputs);
	if (locale === "ko") return ko_pricing_tiers_getstarted1(inputs);
	return ru_pricing_tiers_getstarted1(inputs);
});
var en_products_header_title = () => {
	return `Products`;
};
var fr_products_header_title = () => {
	return `Produits`;
};
var es_products_header_title = () => {
	return `Productos`;
};
var de_products_header_title = () => {
	return `Produkte`;
};
var it_products_header_title = () => {
	return `Prodotti`;
};
var pt_products_header_title = () => {
	return `Produtos`;
};
var zh_products_header_title = () => {
	return `产品`;
};
var ja_products_header_title = () => {
	return `製品`;
};
var ko_products_header_title = () => {
	return `Products`;
};
var ru_products_header_title = () => {
	return `Продукты`;
};
var products_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_header_title(inputs);
	if (locale === "fr") return fr_products_header_title(inputs);
	if (locale === "es") return es_products_header_title(inputs);
	if (locale === "de") return de_products_header_title(inputs);
	if (locale === "it") return it_products_header_title(inputs);
	if (locale === "pt") return pt_products_header_title(inputs);
	if (locale === "zh") return zh_products_header_title(inputs);
	if (locale === "ja") return ja_products_header_title(inputs);
	if (locale === "ko") return ko_products_header_title(inputs);
	return ru_products_header_title(inputs);
});
var en_products_header_description = () => {
	return `Tools and services to streamline your internationalization workflow.`;
};
var fr_products_header_description = () => {
	return `Outils et services pour fluidifier votre flux i18n.`;
};
var es_products_header_description = () => {
	return `Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.`;
};
var de_products_header_description = () => {
	return `Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.`;
};
var it_products_header_description = () => {
	return `Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.`;
};
var pt_products_header_description = () => {
	return `Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.`;
};
var zh_products_header_description = () => {
	return `用于简化国际化工作流程的工具和服务。`;
};
var ja_products_header_description = () => {
	return `国際化ワークフローを効率化するためのツールとサービス。`;
};
var ko_products_header_description = () => {
	return `Tools and services to streamline your internationalization workflow.`;
};
var ru_products_header_description = () => {
	return `Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.`;
};
var products_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_header_description(inputs);
	if (locale === "fr") return fr_products_header_description(inputs);
	if (locale === "es") return es_products_header_description(inputs);
	if (locale === "de") return de_products_header_description(inputs);
	if (locale === "it") return it_products_header_description(inputs);
	if (locale === "pt") return pt_products_header_description(inputs);
	if (locale === "zh") return zh_products_header_description(inputs);
	if (locale === "ja") return ja_products_header_description(inputs);
	if (locale === "ko") return ko_products_header_description(inputs);
	return ru_products_header_description(inputs);
});
var en_products_grid_learnmore1 = () => {
	return `Learn More`;
};
var fr_products_grid_learnmore1 = () => {
	return `En savoir plus`;
};
var es_products_grid_learnmore1 = () => {
	return `Más información`;
};
var de_products_grid_learnmore1 = () => {
	return `Mehr erfahren`;
};
var it_products_grid_learnmore1 = () => {
	return `Scopri di più`;
};
var pt_products_grid_learnmore1 = () => {
	return `Saiba Mais`;
};
var zh_products_grid_learnmore1 = () => {
	return `了解更多`;
};
var ja_products_grid_learnmore1 = () => {
	return `詳細はこちら`;
};
var ko_products_grid_learnmore1 = () => {
	return `Learn More`;
};
var ru_products_grid_learnmore1 = () => {
	return `Узнать больше`;
};
var products_grid_learnmore1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_learnmore1(inputs);
	if (locale === "fr") return fr_products_grid_learnmore1(inputs);
	if (locale === "es") return es_products_grid_learnmore1(inputs);
	if (locale === "de") return de_products_grid_learnmore1(inputs);
	if (locale === "it") return it_products_grid_learnmore1(inputs);
	if (locale === "pt") return pt_products_grid_learnmore1(inputs);
	if (locale === "zh") return zh_products_grid_learnmore1(inputs);
	if (locale === "ja") return ja_products_grid_learnmore1(inputs);
	if (locale === "ko") return ko_products_grid_learnmore1(inputs);
	return ru_products_grid_learnmore1(inputs);
});
var en_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var fr_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var es_products_grid_cliname1 = () => {
	return `CLI de Benchmark`;
};
var de_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var it_products_grid_cliname1 = () => {
	return `CLI del Benchmark`;
};
var pt_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var zh_products_grid_cliname1 = () => {
	return `基准测试 CLI`;
};
var ja_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var ko_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var ru_products_grid_cliname1 = () => {
	return `Benchmark CLI`;
};
var products_grid_cliname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_cliname1(inputs);
	if (locale === "fr") return fr_products_grid_cliname1(inputs);
	if (locale === "es") return es_products_grid_cliname1(inputs);
	if (locale === "de") return de_products_grid_cliname1(inputs);
	if (locale === "it") return it_products_grid_cliname1(inputs);
	if (locale === "pt") return pt_products_grid_cliname1(inputs);
	if (locale === "zh") return zh_products_grid_cliname1(inputs);
	if (locale === "ja") return ja_products_grid_cliname1(inputs);
	if (locale === "ko") return ko_products_grid_cliname1(inputs);
	return ru_products_grid_cliname1(inputs);
});
var en_products_grid_clidesc1 = () => {
	return `Run benchmarks locally from your terminal. Supports custom configurations and CI integration.`;
};
var fr_products_grid_clidesc1 = () => {
	return `Lancez des benchmarks en local. Configurations personnalisées et CI.`;
};
var es_products_grid_clidesc1 = () => {
	return `Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.`;
};
var de_products_grid_clidesc1 = () => {
	return `Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.`;
};
var it_products_grid_clidesc1 = () => {
	return `Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.`;
};
var pt_products_grid_clidesc1 = () => {
	return `Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.`;
};
var zh_products_grid_clidesc1 = () => {
	return `从您的终端本地运行基准测试。支持自定义配置和 CI 集成。`;
};
var ja_products_grid_clidesc1 = () => {
	return `ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。`;
};
var ko_products_grid_clidesc1 = () => {
	return `Run benchmarks locally from your terminal. Supports custom configurations and CI integration.`;
};
var ru_products_grid_clidesc1 = () => {
	return `Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.`;
};
var products_grid_clidesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_clidesc1(inputs);
	if (locale === "fr") return fr_products_grid_clidesc1(inputs);
	if (locale === "es") return es_products_grid_clidesc1(inputs);
	if (locale === "de") return de_products_grid_clidesc1(inputs);
	if (locale === "it") return it_products_grid_clidesc1(inputs);
	if (locale === "pt") return pt_products_grid_clidesc1(inputs);
	if (locale === "zh") return zh_products_grid_clidesc1(inputs);
	if (locale === "ja") return ja_products_grid_clidesc1(inputs);
	if (locale === "ko") return ko_products_grid_clidesc1(inputs);
	return ru_products_grid_clidesc1(inputs);
});
var en_products_grid_cliprice1 = () => {
	return `Free`;
};
var fr_products_grid_cliprice1 = () => {
	return `Gratuit`;
};
var es_products_grid_cliprice1 = () => {
	return `Gratis`;
};
var de_products_grid_cliprice1 = () => {
	return `Kostenlos`;
};
var it_products_grid_cliprice1 = () => {
	return `Gratis`;
};
var pt_products_grid_cliprice1 = () => {
	return `Grátis`;
};
var zh_products_grid_cliprice1 = () => {
	return `免费`;
};
var ja_products_grid_cliprice1 = () => {
	return `無料`;
};
var ko_products_grid_cliprice1 = () => {
	return `Free`;
};
var ru_products_grid_cliprice1 = () => {
	return `Бесплатно`;
};
var products_grid_cliprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_cliprice1(inputs);
	if (locale === "fr") return fr_products_grid_cliprice1(inputs);
	if (locale === "es") return es_products_grid_cliprice1(inputs);
	if (locale === "de") return de_products_grid_cliprice1(inputs);
	if (locale === "it") return it_products_grid_cliprice1(inputs);
	if (locale === "pt") return pt_products_grid_cliprice1(inputs);
	if (locale === "zh") return zh_products_grid_cliprice1(inputs);
	if (locale === "ja") return ja_products_grid_cliprice1(inputs);
	if (locale === "ko") return ko_products_grid_cliprice1(inputs);
	return ru_products_grid_cliprice1(inputs);
});
var en_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var fr_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var es_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var de_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var it_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var pt_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var zh_products_grid_cloudname1 = () => {
	return `基准测试云`;
};
var ja_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var ko_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var ru_products_grid_cloudname1 = () => {
	return `Benchmark Cloud`;
};
var products_grid_cloudname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_cloudname1(inputs);
	if (locale === "fr") return fr_products_grid_cloudname1(inputs);
	if (locale === "es") return es_products_grid_cloudname1(inputs);
	if (locale === "de") return de_products_grid_cloudname1(inputs);
	if (locale === "it") return it_products_grid_cloudname1(inputs);
	if (locale === "pt") return pt_products_grid_cloudname1(inputs);
	if (locale === "zh") return zh_products_grid_cloudname1(inputs);
	if (locale === "ja") return ja_products_grid_cloudname1(inputs);
	if (locale === "ko") return ko_products_grid_cloudname1(inputs);
	return ru_products_grid_cloudname1(inputs);
});
var en_products_grid_clouddesc1 = () => {
	return `Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.`;
};
var fr_products_grid_clouddesc1 = () => {
	return `Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.`;
};
var es_products_grid_clouddesc1 = () => {
	return `Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.`;
};
var de_products_grid_clouddesc1 = () => {
	return `Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.`;
};
var it_products_grid_clouddesc1 = () => {
	return `Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.`;
};
var pt_products_grid_clouddesc1 = () => {
	return `Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.`;
};
var zh_products_grid_clouddesc1 = () => {
	return `具有历史追踪、警报和团队仪表板的自动化云基准测试。`;
};
var ja_products_grid_clouddesc1 = () => {
	return `履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。`;
};
var ko_products_grid_clouddesc1 = () => {
	return `Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.`;
};
var ru_products_grid_clouddesc1 = () => {
	return `Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.`;
};
var products_grid_clouddesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_clouddesc1(inputs);
	if (locale === "fr") return fr_products_grid_clouddesc1(inputs);
	if (locale === "es") return es_products_grid_clouddesc1(inputs);
	if (locale === "de") return de_products_grid_clouddesc1(inputs);
	if (locale === "it") return it_products_grid_clouddesc1(inputs);
	if (locale === "pt") return pt_products_grid_clouddesc1(inputs);
	if (locale === "zh") return zh_products_grid_clouddesc1(inputs);
	if (locale === "ja") return ja_products_grid_clouddesc1(inputs);
	if (locale === "ko") return ko_products_grid_clouddesc1(inputs);
	return ru_products_grid_clouddesc1(inputs);
});
var en_products_grid_cloudprice1 = () => {
	return `$29/mo`;
};
var fr_products_grid_cloudprice1 = () => {
	return `29 €/mois`;
};
var es_products_grid_cloudprice1 = () => {
	return `29 $/mes`;
};
var de_products_grid_cloudprice1 = () => {
	return `29 $/Monat`;
};
var it_products_grid_cloudprice1 = () => {
	return `29 $/mese`;
};
var pt_products_grid_cloudprice1 = () => {
	return `29 $/mês`;
};
var zh_products_grid_cloudprice1 = () => {
	return `29 $/月`;
};
var ja_products_grid_cloudprice1 = () => {
	return `29ドル/月`;
};
var ko_products_grid_cloudprice1 = () => {
	return `$29/mo`;
};
var ru_products_grid_cloudprice1 = () => {
	return `29 $/мес`;
};
var products_grid_cloudprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_cloudprice1(inputs);
	if (locale === "fr") return fr_products_grid_cloudprice1(inputs);
	if (locale === "es") return es_products_grid_cloudprice1(inputs);
	if (locale === "de") return de_products_grid_cloudprice1(inputs);
	if (locale === "it") return it_products_grid_cloudprice1(inputs);
	if (locale === "pt") return pt_products_grid_cloudprice1(inputs);
	if (locale === "zh") return zh_products_grid_cloudprice1(inputs);
	if (locale === "ja") return ja_products_grid_cloudprice1(inputs);
	if (locale === "ko") return ko_products_grid_cloudprice1(inputs);
	return ru_products_grid_cloudprice1(inputs);
});
var en_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var fr_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var es_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var de_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var it_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var pt_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var zh_products_grid_enterprisename1 = () => {
	return `基准测试企业版`;
};
var ja_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var ko_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var ru_products_grid_enterprisename1 = () => {
	return `Benchmark Enterprise`;
};
var products_grid_enterprisename1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_enterprisename1(inputs);
	if (locale === "fr") return fr_products_grid_enterprisename1(inputs);
	if (locale === "es") return es_products_grid_enterprisename1(inputs);
	if (locale === "de") return de_products_grid_enterprisename1(inputs);
	if (locale === "it") return it_products_grid_enterprisename1(inputs);
	if (locale === "pt") return pt_products_grid_enterprisename1(inputs);
	if (locale === "zh") return zh_products_grid_enterprisename1(inputs);
	if (locale === "ja") return ja_products_grid_enterprisename1(inputs);
	if (locale === "ko") return ko_products_grid_enterprisename1(inputs);
	return ru_products_grid_enterprisename1(inputs);
});
var en_products_grid_enterprisedesc1 = () => {
	return `On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.`;
};
var fr_products_grid_enterprisedesc1 = () => {
	return `On-premise avec SSO, journaux d'audit, SLA et support dédié.`;
};
var es_products_grid_enterprisedesc1 = () => {
	return `Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.`;
};
var de_products_grid_enterprisedesc1 = () => {
	return `On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.`;
};
var it_products_grid_enterprisedesc1 = () => {
	return `Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.`;
};
var pt_products_grid_enterprisedesc1 = () => {
	return `Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.`;
};
var zh_products_grid_enterprisedesc1 = () => {
	return `支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。`;
};
var ja_products_grid_enterprisedesc1 = () => {
	return `SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。`;
};
var ko_products_grid_enterprisedesc1 = () => {
	return `On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.`;
};
var ru_products_grid_enterprisedesc1 = () => {
	return `Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.`;
};
var products_grid_enterprisedesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_enterprisedesc1(inputs);
	if (locale === "fr") return fr_products_grid_enterprisedesc1(inputs);
	if (locale === "es") return es_products_grid_enterprisedesc1(inputs);
	if (locale === "de") return de_products_grid_enterprisedesc1(inputs);
	if (locale === "it") return it_products_grid_enterprisedesc1(inputs);
	if (locale === "pt") return pt_products_grid_enterprisedesc1(inputs);
	if (locale === "zh") return zh_products_grid_enterprisedesc1(inputs);
	if (locale === "ja") return ja_products_grid_enterprisedesc1(inputs);
	if (locale === "ko") return ko_products_grid_enterprisedesc1(inputs);
	return ru_products_grid_enterprisedesc1(inputs);
});
var en_products_grid_enterpriseprice1 = () => {
	return `Contact Us`;
};
var fr_products_grid_enterpriseprice1 = () => {
	return `Nous contacter`;
};
var es_products_grid_enterpriseprice1 = () => {
	return `Contáctanos`;
};
var de_products_grid_enterpriseprice1 = () => {
	return `Kontaktieren Sie uns`;
};
var it_products_grid_enterpriseprice1 = () => {
	return `Contattaci`;
};
var pt_products_grid_enterpriseprice1 = () => {
	return `Contate-nos`;
};
var zh_products_grid_enterpriseprice1 = () => {
	return `联系我们`;
};
var ja_products_grid_enterpriseprice1 = () => {
	return `お問い合わせ`;
};
var ko_products_grid_enterpriseprice1 = () => {
	return `Contact Us`;
};
var ru_products_grid_enterpriseprice1 = () => {
	return `Связаться с нами`;
};
var products_grid_enterpriseprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_enterpriseprice1(inputs);
	if (locale === "fr") return fr_products_grid_enterpriseprice1(inputs);
	if (locale === "es") return es_products_grid_enterpriseprice1(inputs);
	if (locale === "de") return de_products_grid_enterpriseprice1(inputs);
	if (locale === "it") return it_products_grid_enterpriseprice1(inputs);
	if (locale === "pt") return pt_products_grid_enterpriseprice1(inputs);
	if (locale === "zh") return zh_products_grid_enterpriseprice1(inputs);
	if (locale === "ja") return ja_products_grid_enterpriseprice1(inputs);
	if (locale === "ko") return ko_products_grid_enterpriseprice1(inputs);
	return ru_products_grid_enterpriseprice1(inputs);
});
var en_products_grid_migrationname1 = () => {
	return `Migration Assistant`;
};
var fr_products_grid_migrationname1 = () => {
	return `Assistant de migration`;
};
var es_products_grid_migrationname1 = () => {
	return `Asistente de migración`;
};
var de_products_grid_migrationname1 = () => {
	return `Migrationsassistent`;
};
var it_products_grid_migrationname1 = () => {
	return `Assistente alla migrazione`;
};
var pt_products_grid_migrationname1 = () => {
	return `Assistente de migração`;
};
var zh_products_grid_migrationname1 = () => {
	return `迁移助手`;
};
var ja_products_grid_migrationname1 = () => {
	return `移行アシスタント`;
};
var ko_products_grid_migrationname1 = () => {
	return `Migration Assistant`;
};
var ru_products_grid_migrationname1 = () => {
	return `Помощник по миграции`;
};
var products_grid_migrationname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_migrationname1(inputs);
	if (locale === "fr") return fr_products_grid_migrationname1(inputs);
	if (locale === "es") return es_products_grid_migrationname1(inputs);
	if (locale === "de") return de_products_grid_migrationname1(inputs);
	if (locale === "it") return it_products_grid_migrationname1(inputs);
	if (locale === "pt") return pt_products_grid_migrationname1(inputs);
	if (locale === "zh") return zh_products_grid_migrationname1(inputs);
	if (locale === "ja") return ja_products_grid_migrationname1(inputs);
	if (locale === "ko") return ko_products_grid_migrationname1(inputs);
	return ru_products_grid_migrationname1(inputs);
});
var en_products_grid_migrationdesc1 = () => {
	return `AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.`;
};
var fr_products_grid_migrationdesc1 = () => {
	return `Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.`;
};
var es_products_grid_migrationdesc1 = () => {
	return `Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.`;
};
var de_products_grid_migrationdesc1 = () => {
	return `KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.`;
};
var it_products_grid_migrationdesc1 = () => {
	return `Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.`;
};
var pt_products_grid_migrationdesc1 = () => {
	return `Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.`;
};
var zh_products_grid_migrationdesc1 = () => {
	return `AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。`;
};
var ja_products_grid_migrationdesc1 = () => {
	return `ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。`;
};
var ko_products_grid_migrationdesc1 = () => {
	return `AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.`;
};
var ru_products_grid_migrationdesc1 = () => {
	return `Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.`;
};
var products_grid_migrationdesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_migrationdesc1(inputs);
	if (locale === "fr") return fr_products_grid_migrationdesc1(inputs);
	if (locale === "es") return es_products_grid_migrationdesc1(inputs);
	if (locale === "de") return de_products_grid_migrationdesc1(inputs);
	if (locale === "it") return it_products_grid_migrationdesc1(inputs);
	if (locale === "pt") return pt_products_grid_migrationdesc1(inputs);
	if (locale === "zh") return zh_products_grid_migrationdesc1(inputs);
	if (locale === "ja") return ja_products_grid_migrationdesc1(inputs);
	if (locale === "ko") return ko_products_grid_migrationdesc1(inputs);
	return ru_products_grid_migrationdesc1(inputs);
});
var en_products_grid_migrationprice1 = () => {
	return `$99 one-time`;
};
var fr_products_grid_migrationprice1 = () => {
	return `99 € (unique)`;
};
var es_products_grid_migrationprice1 = () => {
	return `99 $ pago único`;
};
var de_products_grid_migrationprice1 = () => {
	return `Einmalig 99 $`;
};
var it_products_grid_migrationprice1 = () => {
	return `99 $ una tantum`;
};
var pt_products_grid_migrationprice1 = () => {
	return `99 $ taxa única`;
};
var zh_products_grid_migrationprice1 = () => {
	return `99 $ 一次性费用`;
};
var ja_products_grid_migrationprice1 = () => {
	return `99ドル（一回限り）`;
};
var ko_products_grid_migrationprice1 = () => {
	return `$99 one-time`;
};
var ru_products_grid_migrationprice1 = () => {
	return `99 $ (разово)`;
};
var products_grid_migrationprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_migrationprice1(inputs);
	if (locale === "fr") return fr_products_grid_migrationprice1(inputs);
	if (locale === "es") return es_products_grid_migrationprice1(inputs);
	if (locale === "de") return de_products_grid_migrationprice1(inputs);
	if (locale === "it") return it_products_grid_migrationprice1(inputs);
	if (locale === "pt") return pt_products_grid_migrationprice1(inputs);
	if (locale === "zh") return zh_products_grid_migrationprice1(inputs);
	if (locale === "ja") return ja_products_grid_migrationprice1(inputs);
	if (locale === "ko") return ko_products_grid_migrationprice1(inputs);
	return ru_products_grid_migrationprice1(inputs);
});
var en_products_grid_qaname1 = () => {
	return `Translation QA`;
};
var fr_products_grid_qaname1 = () => {
	return `QA des traductions`;
};
var es_products_grid_qaname1 = () => {
	return `QA de traducción`;
};
var de_products_grid_qaname1 = () => {
	return `Übersetzungs-QA`;
};
var it_products_grid_qaname1 = () => {
	return `QA delle traduzioni`;
};
var pt_products_grid_qaname1 = () => {
	return `QA de tradução`;
};
var zh_products_grid_qaname1 = () => {
	return `翻译 QA`;
};
var ja_products_grid_qaname1 = () => {
	return `翻訳QA`;
};
var ko_products_grid_qaname1 = () => {
	return `Translation QA`;
};
var ru_products_grid_qaname1 = () => {
	return `QA переводов`;
};
var products_grid_qaname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_qaname1(inputs);
	if (locale === "fr") return fr_products_grid_qaname1(inputs);
	if (locale === "es") return es_products_grid_qaname1(inputs);
	if (locale === "de") return de_products_grid_qaname1(inputs);
	if (locale === "it") return it_products_grid_qaname1(inputs);
	if (locale === "pt") return pt_products_grid_qaname1(inputs);
	if (locale === "zh") return zh_products_grid_qaname1(inputs);
	if (locale === "ja") return ja_products_grid_qaname1(inputs);
	if (locale === "ko") return ko_products_grid_qaname1(inputs);
	return ru_products_grid_qaname1(inputs);
});
var en_products_grid_qadesc1 = () => {
	return `Automated quality checks for missing translations, pluralization issues, and context errors.`;
};
var fr_products_grid_qadesc1 = () => {
	return `Contrôles automatiques : clés manquantes, pluriels, contexte.`;
};
var es_products_grid_qadesc1 = () => {
	return `Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.`;
};
var de_products_grid_qadesc1 = () => {
	return `Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.`;
};
var it_products_grid_qadesc1 = () => {
	return `Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.`;
};
var pt_products_grid_qadesc1 = () => {
	return `Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.`;
};
var zh_products_grid_qadesc1 = () => {
	return `自动检查翻译缺失、复数问题和上下文错误。`;
};
var ja_products_grid_qadesc1 = () => {
	return `翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。`;
};
var ko_products_grid_qadesc1 = () => {
	return `Automated quality checks for missing translations, pluralization issues, and context errors.`;
};
var ru_products_grid_qadesc1 = () => {
	return `Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.`;
};
var products_grid_qadesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_qadesc1(inputs);
	if (locale === "fr") return fr_products_grid_qadesc1(inputs);
	if (locale === "es") return es_products_grid_qadesc1(inputs);
	if (locale === "de") return de_products_grid_qadesc1(inputs);
	if (locale === "it") return it_products_grid_qadesc1(inputs);
	if (locale === "pt") return pt_products_grid_qadesc1(inputs);
	if (locale === "zh") return zh_products_grid_qadesc1(inputs);
	if (locale === "ja") return ja_products_grid_qadesc1(inputs);
	if (locale === "ko") return ko_products_grid_qadesc1(inputs);
	return ru_products_grid_qadesc1(inputs);
});
var en_products_grid_qaprice1 = () => {
	return `$19/mo`;
};
var fr_products_grid_qaprice1 = () => {
	return `19 €/mois`;
};
var es_products_grid_qaprice1 = () => {
	return `19 $/mes`;
};
var de_products_grid_qaprice1 = () => {
	return `19 $/Monat`;
};
var it_products_grid_qaprice1 = () => {
	return `19 $/mese`;
};
var pt_products_grid_qaprice1 = () => {
	return `19 $/mês`;
};
var zh_products_grid_qaprice1 = () => {
	return `19 $/月`;
};
var ja_products_grid_qaprice1 = () => {
	return `19ドル/月`;
};
var ko_products_grid_qaprice1 = () => {
	return `$19/mo`;
};
var ru_products_grid_qaprice1 = () => {
	return `19 $/мес`;
};
var products_grid_qaprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_qaprice1(inputs);
	if (locale === "fr") return fr_products_grid_qaprice1(inputs);
	if (locale === "es") return es_products_grid_qaprice1(inputs);
	if (locale === "de") return de_products_grid_qaprice1(inputs);
	if (locale === "it") return it_products_grid_qaprice1(inputs);
	if (locale === "pt") return pt_products_grid_qaprice1(inputs);
	if (locale === "zh") return zh_products_grid_qaprice1(inputs);
	if (locale === "ja") return ja_products_grid_qaprice1(inputs);
	if (locale === "ko") return ko_products_grid_qaprice1(inputs);
	return ru_products_grid_qaprice1(inputs);
});
var en_products_grid_optimizername1 = () => {
	return `Bundle Optimizer`;
};
var fr_products_grid_optimizername1 = () => {
	return `Optimiseur de bundle`;
};
var es_products_grid_optimizername1 = () => {
	return `Optimizador de bundle`;
};
var de_products_grid_optimizername1 = () => {
	return `Bundle-Optimierer`;
};
var it_products_grid_optimizername1 = () => {
	return `Ottimizzatore del bundle`;
};
var pt_products_grid_optimizername1 = () => {
	return `Otimizador de bundle`;
};
var zh_products_grid_optimizername1 = () => {
	return `包优化器`;
};
var ja_products_grid_optimizername1 = () => {
	return `バンドルオプティマイザー`;
};
var ko_products_grid_optimizername1 = () => {
	return `Bundle Optimizer`;
};
var ru_products_grid_optimizername1 = () => {
	return `Оптимизатор бандла`;
};
var products_grid_optimizername1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_optimizername1(inputs);
	if (locale === "fr") return fr_products_grid_optimizername1(inputs);
	if (locale === "es") return es_products_grid_optimizername1(inputs);
	if (locale === "de") return de_products_grid_optimizername1(inputs);
	if (locale === "it") return it_products_grid_optimizername1(inputs);
	if (locale === "pt") return pt_products_grid_optimizername1(inputs);
	if (locale === "zh") return zh_products_grid_optimizername1(inputs);
	if (locale === "ja") return ja_products_grid_optimizername1(inputs);
	if (locale === "ko") return ko_products_grid_optimizername1(inputs);
	return ru_products_grid_optimizername1(inputs);
});
var en_products_grid_optimizerdesc1 = () => {
	return `Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.`;
};
var fr_products_grid_optimizerdesc1 = () => {
	return `Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).`;
};
var es_products_grid_optimizerdesc1 = () => {
	return `Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.`;
};
var de_products_grid_optimizerdesc1 = () => {
	return `Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.`;
};
var it_products_grid_optimizerdesc1 = () => {
	return `Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.`;
};
var pt_products_grid_optimizerdesc1 = () => {
	return `Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.`;
};
var zh_products_grid_optimizerdesc1 = () => {
	return `通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。`;
};
var ja_products_grid_optimizerdesc1 = () => {
	return `ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。`;
};
var ko_products_grid_optimizerdesc1 = () => {
	return `Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.`;
};
var ru_products_grid_optimizerdesc1 = () => {
	return `Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.`;
};
var products_grid_optimizerdesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_optimizerdesc1(inputs);
	if (locale === "fr") return fr_products_grid_optimizerdesc1(inputs);
	if (locale === "es") return es_products_grid_optimizerdesc1(inputs);
	if (locale === "de") return de_products_grid_optimizerdesc1(inputs);
	if (locale === "it") return it_products_grid_optimizerdesc1(inputs);
	if (locale === "pt") return pt_products_grid_optimizerdesc1(inputs);
	if (locale === "zh") return zh_products_grid_optimizerdesc1(inputs);
	if (locale === "ja") return ja_products_grid_optimizerdesc1(inputs);
	if (locale === "ko") return ko_products_grid_optimizerdesc1(inputs);
	return ru_products_grid_optimizerdesc1(inputs);
});
var en_products_grid_optimizerprice1 = () => {
	return `$49/mo`;
};
var fr_products_grid_optimizerprice1 = () => {
	return `49 €/mois`;
};
var es_products_grid_optimizerprice1 = () => {
	return `49 $/mes`;
};
var de_products_grid_optimizerprice1 = () => {
	return `49 $/Monat`;
};
var it_products_grid_optimizerprice1 = () => {
	return `49 $/mese`;
};
var pt_products_grid_optimizerprice1 = () => {
	return `49 $/mês`;
};
var zh_products_grid_optimizerprice1 = () => {
	return `49 $/月`;
};
var ja_products_grid_optimizerprice1 = () => {
	return `49ドル/月`;
};
var ko_products_grid_optimizerprice1 = () => {
	return `$49/mo`;
};
var ru_products_grid_optimizerprice1 = () => {
	return `49 $/мес`;
};
var products_grid_optimizerprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_grid_optimizerprice1(inputs);
	if (locale === "fr") return fr_products_grid_optimizerprice1(inputs);
	if (locale === "es") return es_products_grid_optimizerprice1(inputs);
	if (locale === "de") return de_products_grid_optimizerprice1(inputs);
	if (locale === "it") return it_products_grid_optimizerprice1(inputs);
	if (locale === "pt") return pt_products_grid_optimizerprice1(inputs);
	if (locale === "zh") return zh_products_grid_optimizerprice1(inputs);
	if (locale === "ja") return ja_products_grid_optimizerprice1(inputs);
	if (locale === "ko") return ko_products_grid_optimizerprice1(inputs);
	return ru_products_grid_optimizerprice1(inputs);
});
var en_settings_header_title = () => {
	return `Settings`;
};
var fr_settings_header_title = () => {
	return `Paramètres`;
};
var es_settings_header_title = () => {
	return `Ajustes`;
};
var de_settings_header_title = () => {
	return `Einstellungen`;
};
var it_settings_header_title = () => {
	return `Impostazioni`;
};
var pt_settings_header_title = () => {
	return `Configurações`;
};
var zh_settings_header_title = () => {
	return `设置`;
};
var ja_settings_header_title = () => {
	return `設定`;
};
var ko_settings_header_title = () => {
	return `Settings`;
};
var ru_settings_header_title = () => {
	return `Настройки`;
};
var settings_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_header_title(inputs);
	if (locale === "fr") return fr_settings_header_title(inputs);
	if (locale === "es") return es_settings_header_title(inputs);
	if (locale === "de") return de_settings_header_title(inputs);
	if (locale === "it") return it_settings_header_title(inputs);
	if (locale === "pt") return pt_settings_header_title(inputs);
	if (locale === "zh") return zh_settings_header_title(inputs);
	if (locale === "ja") return ja_settings_header_title(inputs);
	if (locale === "ko") return ko_settings_header_title(inputs);
	return ru_settings_header_title(inputs);
});
var en_settings_header_description = () => {
	return `Manage your account preferences and configuration.`;
};
var fr_settings_header_description = () => {
	return `Gérez les préférences et la configuration de votre compte.`;
};
var es_settings_header_description = () => {
	return `Gestiona las preferencias y la configuración de tu cuenta.`;
};
var de_settings_header_description = () => {
	return `Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.`;
};
var it_settings_header_description = () => {
	return `Gestisci le preferenze del tuo account e la configurazione.`;
};
var pt_settings_header_description = () => {
	return `Gerencie suas preferências de conta e configuração.`;
};
var zh_settings_header_description = () => {
	return `管理您的账户偏好和配置。`;
};
var ja_settings_header_description = () => {
	return `アカウント設定と構成を管理します。`;
};
var ko_settings_header_description = () => {
	return `Manage your account preferences and configuration.`;
};
var ru_settings_header_description = () => {
	return `Управляйте предпочтениями и конфигурацией вашей учетной записи.`;
};
var settings_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_header_description(inputs);
	if (locale === "fr") return fr_settings_header_description(inputs);
	if (locale === "es") return es_settings_header_description(inputs);
	if (locale === "de") return de_settings_header_description(inputs);
	if (locale === "it") return it_settings_header_description(inputs);
	if (locale === "pt") return pt_settings_header_description(inputs);
	if (locale === "zh") return zh_settings_header_description(inputs);
	if (locale === "ja") return ja_settings_header_description(inputs);
	if (locale === "ko") return ko_settings_header_description(inputs);
	return ru_settings_header_description(inputs);
});
var en_settings_profile_title = () => {
	return `Profile`;
};
var fr_settings_profile_title = () => {
	return `Profil`;
};
var es_settings_profile_title = () => {
	return `Perfil`;
};
var de_settings_profile_title = () => {
	return `Profil`;
};
var it_settings_profile_title = () => {
	return `Profilo`;
};
var pt_settings_profile_title = () => {
	return `Perfil`;
};
var zh_settings_profile_title = () => {
	return `个人资料`;
};
var ja_settings_profile_title = () => {
	return `プロフィール`;
};
var ko_settings_profile_title = () => {
	return `Profile`;
};
var ru_settings_profile_title = () => {
	return `Профиль`;
};
var settings_profile_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_title(inputs);
	if (locale === "fr") return fr_settings_profile_title(inputs);
	if (locale === "es") return es_settings_profile_title(inputs);
	if (locale === "de") return de_settings_profile_title(inputs);
	if (locale === "it") return it_settings_profile_title(inputs);
	if (locale === "pt") return pt_settings_profile_title(inputs);
	if (locale === "zh") return zh_settings_profile_title(inputs);
	if (locale === "ja") return ja_settings_profile_title(inputs);
	if (locale === "ko") return ko_settings_profile_title(inputs);
	return ru_settings_profile_title(inputs);
});
var en_settings_profile_displayname1 = () => {
	return `Display Name`;
};
var fr_settings_profile_displayname1 = () => {
	return `Nom affiché`;
};
var es_settings_profile_displayname1 = () => {
	return `Nombre visible`;
};
var de_settings_profile_displayname1 = () => {
	return `Anzeigename`;
};
var it_settings_profile_displayname1 = () => {
	return `Nome visualizzato`;
};
var pt_settings_profile_displayname1 = () => {
	return `Nome de exibição`;
};
var zh_settings_profile_displayname1 = () => {
	return `显示名称`;
};
var ja_settings_profile_displayname1 = () => {
	return `表示名`;
};
var ko_settings_profile_displayname1 = () => {
	return `Display Name`;
};
var ru_settings_profile_displayname1 = () => {
	return `Отображаемое имя`;
};
var settings_profile_displayname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_displayname1(inputs);
	if (locale === "fr") return fr_settings_profile_displayname1(inputs);
	if (locale === "es") return es_settings_profile_displayname1(inputs);
	if (locale === "de") return de_settings_profile_displayname1(inputs);
	if (locale === "it") return it_settings_profile_displayname1(inputs);
	if (locale === "pt") return pt_settings_profile_displayname1(inputs);
	if (locale === "zh") return zh_settings_profile_displayname1(inputs);
	if (locale === "ja") return ja_settings_profile_displayname1(inputs);
	if (locale === "ko") return ko_settings_profile_displayname1(inputs);
	return ru_settings_profile_displayname1(inputs);
});
var en_settings_profile_email = () => {
	return `Email`;
};
var fr_settings_profile_email = () => {
	return `E-mail`;
};
var es_settings_profile_email = () => {
	return `Correo electrónico`;
};
var de_settings_profile_email = () => {
	return `E-Mail`;
};
var it_settings_profile_email = () => {
	return `Email`;
};
var pt_settings_profile_email = () => {
	return `E-mail`;
};
var zh_settings_profile_email = () => {
	return `电子邮件`;
};
var ja_settings_profile_email = () => {
	return `メールアドレス`;
};
var ko_settings_profile_email = () => {
	return `Email`;
};
var ru_settings_profile_email = () => {
	return `Электронная почта`;
};
var settings_profile_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_email(inputs);
	if (locale === "fr") return fr_settings_profile_email(inputs);
	if (locale === "es") return es_settings_profile_email(inputs);
	if (locale === "de") return de_settings_profile_email(inputs);
	if (locale === "it") return it_settings_profile_email(inputs);
	if (locale === "pt") return pt_settings_profile_email(inputs);
	if (locale === "zh") return zh_settings_profile_email(inputs);
	if (locale === "ja") return ja_settings_profile_email(inputs);
	if (locale === "ko") return ko_settings_profile_email(inputs);
	return ru_settings_profile_email(inputs);
});
var en_settings_preferences_title = () => {
	return `Preferences`;
};
var fr_settings_preferences_title = () => {
	return `Préférences`;
};
var es_settings_preferences_title = () => {
	return `Preferencias`;
};
var de_settings_preferences_title = () => {
	return `Einstellungen`;
};
var it_settings_preferences_title = () => {
	return `Preferenze`;
};
var pt_settings_preferences_title = () => {
	return `Preferências`;
};
var zh_settings_preferences_title = () => {
	return `偏好`;
};
var ja_settings_preferences_title = () => {
	return `設定`;
};
var ko_settings_preferences_title = () => {
	return `Preferences`;
};
var ru_settings_preferences_title = () => {
	return `Предпочтения`;
};
var settings_preferences_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_title(inputs);
	if (locale === "fr") return fr_settings_preferences_title(inputs);
	if (locale === "es") return es_settings_preferences_title(inputs);
	if (locale === "de") return de_settings_preferences_title(inputs);
	if (locale === "it") return it_settings_preferences_title(inputs);
	if (locale === "pt") return pt_settings_preferences_title(inputs);
	if (locale === "zh") return zh_settings_preferences_title(inputs);
	if (locale === "ja") return ja_settings_preferences_title(inputs);
	if (locale === "ko") return ko_settings_preferences_title(inputs);
	return ru_settings_preferences_title(inputs);
});
var en_settings_preferences_emailnotifications1 = () => {
	return `Email Notifications`;
};
var fr_settings_preferences_emailnotifications1 = () => {
	return `Notifications e-mail`;
};
var es_settings_preferences_emailnotifications1 = () => {
	return `Notificaciones por correo electrónico`;
};
var de_settings_preferences_emailnotifications1 = () => {
	return `E-Mail-Benachrichtigungen`;
};
var it_settings_preferences_emailnotifications1 = () => {
	return `Notifiche via email`;
};
var pt_settings_preferences_emailnotifications1 = () => {
	return `Notificações por e-mail`;
};
var zh_settings_preferences_emailnotifications1 = () => {
	return `电子邮件通知`;
};
var ja_settings_preferences_emailnotifications1 = () => {
	return `メール通知`;
};
var ko_settings_preferences_emailnotifications1 = () => {
	return `Email Notifications`;
};
var ru_settings_preferences_emailnotifications1 = () => {
	return `Уведомления по почте`;
};
var settings_preferences_emailnotifications1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_emailnotifications1(inputs);
	if (locale === "fr") return fr_settings_preferences_emailnotifications1(inputs);
	if (locale === "es") return es_settings_preferences_emailnotifications1(inputs);
	if (locale === "de") return de_settings_preferences_emailnotifications1(inputs);
	if (locale === "it") return it_settings_preferences_emailnotifications1(inputs);
	if (locale === "pt") return pt_settings_preferences_emailnotifications1(inputs);
	if (locale === "zh") return zh_settings_preferences_emailnotifications1(inputs);
	if (locale === "ja") return ja_settings_preferences_emailnotifications1(inputs);
	if (locale === "ko") return ko_settings_preferences_emailnotifications1(inputs);
	return ru_settings_preferences_emailnotifications1(inputs);
});
var en_settings_preferences_weeklyreports1 = () => {
	return `Receive weekly benchmark reports`;
};
var fr_settings_preferences_weeklyreports1 = () => {
	return `Recevoir les rapports hebdomadaires`;
};
var es_settings_preferences_weeklyreports1 = () => {
	return `Recibir informes semanales de benchmarks`;
};
var de_settings_preferences_weeklyreports1 = () => {
	return `Wöchentliche Benchmark-Berichte erhalten`;
};
var it_settings_preferences_weeklyreports1 = () => {
	return `Ricevi rapporti settimanali sui benchmark`;
};
var pt_settings_preferences_weeklyreports1 = () => {
	return `Receber relatórios semanais de benchmarks`;
};
var zh_settings_preferences_weeklyreports1 = () => {
	return `接收每周基准测试报告`;
};
var ja_settings_preferences_weeklyreports1 = () => {
	return `毎週のベンチマークレポートを受け取る`;
};
var ko_settings_preferences_weeklyreports1 = () => {
	return `Receive weekly benchmark reports`;
};
var ru_settings_preferences_weeklyreports1 = () => {
	return `Получать еженедельные отчеты о бенчмарках`;
};
var settings_preferences_weeklyreports1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_weeklyreports1(inputs);
	if (locale === "fr") return fr_settings_preferences_weeklyreports1(inputs);
	if (locale === "es") return es_settings_preferences_weeklyreports1(inputs);
	if (locale === "de") return de_settings_preferences_weeklyreports1(inputs);
	if (locale === "it") return it_settings_preferences_weeklyreports1(inputs);
	if (locale === "pt") return pt_settings_preferences_weeklyreports1(inputs);
	if (locale === "zh") return zh_settings_preferences_weeklyreports1(inputs);
	if (locale === "ja") return ja_settings_preferences_weeklyreports1(inputs);
	if (locale === "ko") return ko_settings_preferences_weeklyreports1(inputs);
	return ru_settings_preferences_weeklyreports1(inputs);
});
var en_settings_preferences_togglenotifications1 = () => {
	return `Toggle notifications`;
};
var fr_settings_preferences_togglenotifications1 = () => {
	return `Activer/désactiver les notifications`;
};
var es_settings_preferences_togglenotifications1 = () => {
	return `Cambiar notificaciones`;
};
var de_settings_preferences_togglenotifications1 = () => {
	return `Benachrichtigungen umschalten`;
};
var it_settings_preferences_togglenotifications1 = () => {
	return `Attiva/disattiva notifiche`;
};
var pt_settings_preferences_togglenotifications1 = () => {
	return `Alternar notificações`;
};
var zh_settings_preferences_togglenotifications1 = () => {
	return `切换通知`;
};
var ja_settings_preferences_togglenotifications1 = () => {
	return `通知の切り替え`;
};
var ko_settings_preferences_togglenotifications1 = () => {
	return `Toggle notifications`;
};
var ru_settings_preferences_togglenotifications1 = () => {
	return `Переключить уведомления`;
};
var settings_preferences_togglenotifications1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_togglenotifications1(inputs);
	if (locale === "fr") return fr_settings_preferences_togglenotifications1(inputs);
	if (locale === "es") return es_settings_preferences_togglenotifications1(inputs);
	if (locale === "de") return de_settings_preferences_togglenotifications1(inputs);
	if (locale === "it") return it_settings_preferences_togglenotifications1(inputs);
	if (locale === "pt") return pt_settings_preferences_togglenotifications1(inputs);
	if (locale === "zh") return zh_settings_preferences_togglenotifications1(inputs);
	if (locale === "ja") return ja_settings_preferences_togglenotifications1(inputs);
	if (locale === "ko") return ko_settings_preferences_togglenotifications1(inputs);
	return ru_settings_preferences_togglenotifications1(inputs);
});
var en_settings_preferences_darkmode1 = () => {
	return `Dark Mode`;
};
var fr_settings_preferences_darkmode1 = () => {
	return `Mode sombre`;
};
var es_settings_preferences_darkmode1 = () => {
	return `Modo oscuro`;
};
var de_settings_preferences_darkmode1 = () => {
	return `Dunkelmodus`;
};
var it_settings_preferences_darkmode1 = () => {
	return `Modalità scura`;
};
var pt_settings_preferences_darkmode1 = () => {
	return `Modo Escuro`;
};
var zh_settings_preferences_darkmode1 = () => {
	return `深色模式`;
};
var ja_settings_preferences_darkmode1 = () => {
	return `ダークモード`;
};
var ko_settings_preferences_darkmode1 = () => {
	return `Dark Mode`;
};
var ru_settings_preferences_darkmode1 = () => {
	return `Темная тема`;
};
var settings_preferences_darkmode1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_darkmode1(inputs);
	if (locale === "fr") return fr_settings_preferences_darkmode1(inputs);
	if (locale === "es") return es_settings_preferences_darkmode1(inputs);
	if (locale === "de") return de_settings_preferences_darkmode1(inputs);
	if (locale === "it") return it_settings_preferences_darkmode1(inputs);
	if (locale === "pt") return pt_settings_preferences_darkmode1(inputs);
	if (locale === "zh") return zh_settings_preferences_darkmode1(inputs);
	if (locale === "ja") return ja_settings_preferences_darkmode1(inputs);
	if (locale === "ko") return ko_settings_preferences_darkmode1(inputs);
	return ru_settings_preferences_darkmode1(inputs);
});
var en_settings_preferences_darkcolorscheme2 = () => {
	return `Use dark color scheme`;
};
var fr_settings_preferences_darkcolorscheme2 = () => {
	return `Utiliser le thème sombre`;
};
var es_settings_preferences_darkcolorscheme2 = () => {
	return `Usar esquema de colores oscuro`;
};
var de_settings_preferences_darkcolorscheme2 = () => {
	return `Dunkles Farbschema verwenden`;
};
var it_settings_preferences_darkcolorscheme2 = () => {
	return `Usa lo schema colori scuro`;
};
var pt_settings_preferences_darkcolorscheme2 = () => {
	return `Usar esquema de cores escuro`;
};
var zh_settings_preferences_darkcolorscheme2 = () => {
	return `使用深色配色方案`;
};
var ja_settings_preferences_darkcolorscheme2 = () => {
	return `ダークカラー（暗い配色）を使用する`;
};
var ko_settings_preferences_darkcolorscheme2 = () => {
	return `Use dark color scheme`;
};
var ru_settings_preferences_darkcolorscheme2 = () => {
	return `Использовать темную цветовую схему`;
};
var settings_preferences_darkcolorscheme2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "fr") return fr_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "es") return es_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "de") return de_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "it") return it_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "pt") return pt_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "zh") return zh_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "ja") return ja_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "ko") return ko_settings_preferences_darkcolorscheme2(inputs);
	return ru_settings_preferences_darkcolorscheme2(inputs);
});
var en_settings_preferences_toggledarkmode2 = () => {
	return `Toggle dark mode`;
};
var fr_settings_preferences_toggledarkmode2 = () => {
	return `Basculer le mode sombre`;
};
var es_settings_preferences_toggledarkmode2 = () => {
	return `Cambiar modo oscuro`;
};
var de_settings_preferences_toggledarkmode2 = () => {
	return `Dunkelmodus umschalten`;
};
var it_settings_preferences_toggledarkmode2 = () => {
	return `Attiva/disattiva modalità scura`;
};
var pt_settings_preferences_toggledarkmode2 = () => {
	return `Alternar modo escuro`;
};
var zh_settings_preferences_toggledarkmode2 = () => {
	return `切换深色模式`;
};
var ja_settings_preferences_toggledarkmode2 = () => {
	return `ダークモードの切り替え`;
};
var ko_settings_preferences_toggledarkmode2 = () => {
	return `Toggle dark mode`;
};
var ru_settings_preferences_toggledarkmode2 = () => {
	return `Переключить темную тему`;
};
var settings_preferences_toggledarkmode2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_toggledarkmode2(inputs);
	if (locale === "fr") return fr_settings_preferences_toggledarkmode2(inputs);
	if (locale === "es") return es_settings_preferences_toggledarkmode2(inputs);
	if (locale === "de") return de_settings_preferences_toggledarkmode2(inputs);
	if (locale === "it") return it_settings_preferences_toggledarkmode2(inputs);
	if (locale === "pt") return pt_settings_preferences_toggledarkmode2(inputs);
	if (locale === "zh") return zh_settings_preferences_toggledarkmode2(inputs);
	if (locale === "ja") return ja_settings_preferences_toggledarkmode2(inputs);
	if (locale === "ko") return ko_settings_preferences_toggledarkmode2(inputs);
	return ru_settings_preferences_toggledarkmode2(inputs);
});
var en_settings_preferences_defaultlanguage1 = () => {
	return `Default Language`;
};
var fr_settings_preferences_defaultlanguage1 = () => {
	return `Langue par défaut`;
};
var es_settings_preferences_defaultlanguage1 = () => {
	return `Idioma predeterminado`;
};
var de_settings_preferences_defaultlanguage1 = () => {
	return `Standardsprache`;
};
var it_settings_preferences_defaultlanguage1 = () => {
	return `Lingua predefinita`;
};
var pt_settings_preferences_defaultlanguage1 = () => {
	return `Idioma padrão`;
};
var zh_settings_preferences_defaultlanguage1 = () => {
	return `默认语言`;
};
var ja_settings_preferences_defaultlanguage1 = () => {
	return `デフォルトの言語`;
};
var ko_settings_preferences_defaultlanguage1 = () => {
	return `Default Language`;
};
var ru_settings_preferences_defaultlanguage1 = () => {
	return `Язык по умолчанию`;
};
var settings_preferences_defaultlanguage1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_defaultlanguage1(inputs);
	if (locale === "fr") return fr_settings_preferences_defaultlanguage1(inputs);
	if (locale === "es") return es_settings_preferences_defaultlanguage1(inputs);
	if (locale === "de") return de_settings_preferences_defaultlanguage1(inputs);
	if (locale === "it") return it_settings_preferences_defaultlanguage1(inputs);
	if (locale === "pt") return pt_settings_preferences_defaultlanguage1(inputs);
	if (locale === "zh") return zh_settings_preferences_defaultlanguage1(inputs);
	if (locale === "ja") return ja_settings_preferences_defaultlanguage1(inputs);
	if (locale === "ko") return ko_settings_preferences_defaultlanguage1(inputs);
	return ru_settings_preferences_defaultlanguage1(inputs);
});
var en_settings_preferences_english = () => {
	return `English (en)`;
};
var fr_settings_preferences_english = () => {
	return `Anglais (en)`;
};
var es_settings_preferences_english = () => {
	return `Inglés (en)`;
};
var de_settings_preferences_english = () => {
	return `Englisch (en)`;
};
var it_settings_preferences_english = () => {
	return `Inglese (en)`;
};
var pt_settings_preferences_english = () => {
	return `Inglês (en)`;
};
var zh_settings_preferences_english = () => {
	return `英语 (en)`;
};
var ja_settings_preferences_english = () => {
	return `英語 (en)`;
};
var ko_settings_preferences_english = () => {
	return `English (en)`;
};
var ru_settings_preferences_english = () => {
	return `Английский (en)`;
};
var settings_preferences_english = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_english(inputs);
	if (locale === "fr") return fr_settings_preferences_english(inputs);
	if (locale === "es") return es_settings_preferences_english(inputs);
	if (locale === "de") return de_settings_preferences_english(inputs);
	if (locale === "it") return it_settings_preferences_english(inputs);
	if (locale === "pt") return pt_settings_preferences_english(inputs);
	if (locale === "zh") return zh_settings_preferences_english(inputs);
	if (locale === "ja") return ja_settings_preferences_english(inputs);
	if (locale === "ko") return ko_settings_preferences_english(inputs);
	return ru_settings_preferences_english(inputs);
});
var en_settings_preferences_french = () => {
	return `French (fr)`;
};
var fr_settings_preferences_french = () => {
	return `Français (fr)`;
};
var es_settings_preferences_french = () => {
	return `Francés (fr)`;
};
var de_settings_preferences_french = () => {
	return `Französisch (fr)`;
};
var it_settings_preferences_french = () => {
	return `Francese (fr)`;
};
var pt_settings_preferences_french = () => {
	return `Francés (fr)`;
};
var zh_settings_preferences_french = () => {
	return `法语 (fr)`;
};
var ja_settings_preferences_french = () => {
	return `フランス語 (fr)`;
};
var ko_settings_preferences_french = () => {
	return `French (fr)`;
};
var ru_settings_preferences_french = () => {
	return `Французский (fr)`;
};
var settings_preferences_french = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_french(inputs);
	if (locale === "fr") return fr_settings_preferences_french(inputs);
	if (locale === "es") return es_settings_preferences_french(inputs);
	if (locale === "de") return de_settings_preferences_french(inputs);
	if (locale === "it") return it_settings_preferences_french(inputs);
	if (locale === "pt") return pt_settings_preferences_french(inputs);
	if (locale === "zh") return zh_settings_preferences_french(inputs);
	if (locale === "ja") return ja_settings_preferences_french(inputs);
	if (locale === "ko") return ko_settings_preferences_french(inputs);
	return ru_settings_preferences_french(inputs);
});
var en_settings_preferences_german = () => {
	return `German (de)`;
};
var fr_settings_preferences_german = () => {
	return `Allemand (de)`;
};
var es_settings_preferences_german = () => {
	return `Alemán (de)`;
};
var de_settings_preferences_german = () => {
	return `Deutsch (de)`;
};
var it_settings_preferences_german = () => {
	return `Tedesco (de)`;
};
var pt_settings_preferences_german = () => {
	return `Alemão (de)`;
};
var zh_settings_preferences_german = () => {
	return `德语 (de)`;
};
var ja_settings_preferences_german = () => {
	return `ドイツ語 (de)`;
};
var ko_settings_preferences_german = () => {
	return `German (de)`;
};
var ru_settings_preferences_german = () => {
	return `Немецкий (de)`;
};
var settings_preferences_german = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_german(inputs);
	if (locale === "fr") return fr_settings_preferences_german(inputs);
	if (locale === "es") return es_settings_preferences_german(inputs);
	if (locale === "de") return de_settings_preferences_german(inputs);
	if (locale === "it") return it_settings_preferences_german(inputs);
	if (locale === "pt") return pt_settings_preferences_german(inputs);
	if (locale === "zh") return zh_settings_preferences_german(inputs);
	if (locale === "ja") return ja_settings_preferences_german(inputs);
	if (locale === "ko") return ko_settings_preferences_german(inputs);
	return ru_settings_preferences_german(inputs);
});
var en_settings_preferences_spanish = () => {
	return `Spanish (es)`;
};
var fr_settings_preferences_spanish = () => {
	return `Espagnol (es)`;
};
var es_settings_preferences_spanish = () => {
	return `Español (es)`;
};
var de_settings_preferences_spanish = () => {
	return `Spanisch (es)`;
};
var it_settings_preferences_spanish = () => {
	return `Spagnolo (es)`;
};
var pt_settings_preferences_spanish = () => {
	return `Espanhol (es)`;
};
var zh_settings_preferences_spanish = () => {
	return `西班牙语 (es)`;
};
var ja_settings_preferences_spanish = () => {
	return `スペイン語 (es)`;
};
var ko_settings_preferences_spanish = () => {
	return `Spanish (es)`;
};
var ru_settings_preferences_spanish = () => {
	return `Испанский (es)`;
};
var settings_preferences_spanish = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_spanish(inputs);
	if (locale === "fr") return fr_settings_preferences_spanish(inputs);
	if (locale === "es") return es_settings_preferences_spanish(inputs);
	if (locale === "de") return de_settings_preferences_spanish(inputs);
	if (locale === "it") return it_settings_preferences_spanish(inputs);
	if (locale === "pt") return pt_settings_preferences_spanish(inputs);
	if (locale === "zh") return zh_settings_preferences_spanish(inputs);
	if (locale === "ja") return ja_settings_preferences_spanish(inputs);
	if (locale === "ko") return ko_settings_preferences_spanish(inputs);
	return ru_settings_preferences_spanish(inputs);
});
var en_settings_preferences_japanese = () => {
	return `Japanese (ja)`;
};
var fr_settings_preferences_japanese = () => {
	return `Japonais (ja)`;
};
var es_settings_preferences_japanese = () => {
	return `Japonés (ja)`;
};
var de_settings_preferences_japanese = () => {
	return `Japanisch (ja)`;
};
var it_settings_preferences_japanese = () => {
	return `Giapponese (ja)`;
};
var pt_settings_preferences_japanese = () => {
	return `Japonês (ja)`;
};
var zh_settings_preferences_japanese = () => {
	return `日语 (ja)`;
};
var ja_settings_preferences_japanese = () => {
	return `日本語 (ja)`;
};
var ko_settings_preferences_japanese = () => {
	return `Japanese (ja)`;
};
var ru_settings_preferences_japanese = () => {
	return `Японский (ja)`;
};
var settings_preferences_japanese = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_japanese(inputs);
	if (locale === "fr") return fr_settings_preferences_japanese(inputs);
	if (locale === "es") return es_settings_preferences_japanese(inputs);
	if (locale === "de") return de_settings_preferences_japanese(inputs);
	if (locale === "it") return it_settings_preferences_japanese(inputs);
	if (locale === "pt") return pt_settings_preferences_japanese(inputs);
	if (locale === "zh") return zh_settings_preferences_japanese(inputs);
	if (locale === "ja") return ja_settings_preferences_japanese(inputs);
	if (locale === "ko") return ko_settings_preferences_japanese(inputs);
	return ru_settings_preferences_japanese(inputs);
});
var en_settings_preferences_chinese = () => {
	return `Chinese Simplified (zh-CN)`;
};
var fr_settings_preferences_chinese = () => {
	return `Chinois simplifié (zh-CN)`;
};
var es_settings_preferences_chinese = () => {
	return `Chino simplificado (zh-CN)`;
};
var de_settings_preferences_chinese = () => {
	return `Chinesisch vereinfacht (zh-CN)`;
};
var it_settings_preferences_chinese = () => {
	return `Cinese semplificato (zh-CN)`;
};
var pt_settings_preferences_chinese = () => {
	return `Chinês Simplificado (zh-CN)`;
};
var zh_settings_preferences_chinese = () => {
	return `简体中文 (zh-CN)`;
};
var ja_settings_preferences_chinese = () => {
	return `中国語（簡体字） (zh-CN)`;
};
var ko_settings_preferences_chinese = () => {
	return `Chinese Simplified (zh-CN)`;
};
var ru_settings_preferences_chinese = () => {
	return `Китайский упрощенный (zh-CN)`;
};
var settings_preferences_chinese = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_chinese(inputs);
	if (locale === "fr") return fr_settings_preferences_chinese(inputs);
	if (locale === "es") return es_settings_preferences_chinese(inputs);
	if (locale === "de") return de_settings_preferences_chinese(inputs);
	if (locale === "it") return it_settings_preferences_chinese(inputs);
	if (locale === "pt") return pt_settings_preferences_chinese(inputs);
	if (locale === "zh") return zh_settings_preferences_chinese(inputs);
	if (locale === "ja") return ja_settings_preferences_chinese(inputs);
	if (locale === "ko") return ko_settings_preferences_chinese(inputs);
	return ru_settings_preferences_chinese(inputs);
});
var en_settings_preferences_arabic = () => {
	return `Arabic (ar)`;
};
var fr_settings_preferences_arabic = () => {
	return `Arabe (ar)`;
};
var es_settings_preferences_arabic = () => {
	return `Árabe (ar)`;
};
var de_settings_preferences_arabic = () => {
	return `Arabisch (ar)`;
};
var it_settings_preferences_arabic = () => {
	return `Arabo (ar)`;
};
var pt_settings_preferences_arabic = () => {
	return `Árabe (ar)`;
};
var zh_settings_preferences_arabic = () => {
	return `阿拉伯语 (ar)`;
};
var ja_settings_preferences_arabic = () => {
	return `アラビア語 (ar)`;
};
var ko_settings_preferences_arabic = () => {
	return `Arabic (ar)`;
};
var ru_settings_preferences_arabic = () => {
	return `Арабский (ar)`;
};
var settings_preferences_arabic = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_preferences_arabic(inputs);
	if (locale === "fr") return fr_settings_preferences_arabic(inputs);
	if (locale === "es") return es_settings_preferences_arabic(inputs);
	if (locale === "de") return de_settings_preferences_arabic(inputs);
	if (locale === "it") return it_settings_preferences_arabic(inputs);
	if (locale === "pt") return pt_settings_preferences_arabic(inputs);
	if (locale === "zh") return zh_settings_preferences_arabic(inputs);
	if (locale === "ja") return ja_settings_preferences_arabic(inputs);
	if (locale === "ko") return ko_settings_preferences_arabic(inputs);
	return ru_settings_preferences_arabic(inputs);
});
var en_settings_apiaccess_title1 = () => {
	return `API Access`;
};
var fr_settings_apiaccess_title1 = () => {
	return `Accès API`;
};
var es_settings_apiaccess_title1 = () => {
	return `Acceso API`;
};
var de_settings_apiaccess_title1 = () => {
	return `API-Zugriff`;
};
var it_settings_apiaccess_title1 = () => {
	return `Accesso API`;
};
var pt_settings_apiaccess_title1 = () => {
	return `Acesso API`;
};
var zh_settings_apiaccess_title1 = () => {
	return `API 访问`;
};
var ja_settings_apiaccess_title1 = () => {
	return `APIアクセス`;
};
var ko_settings_apiaccess_title1 = () => {
	return `API Access`;
};
var ru_settings_apiaccess_title1 = () => {
	return `Доступ к API`;
};
var settings_apiaccess_title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apiaccess_title1(inputs);
	if (locale === "fr") return fr_settings_apiaccess_title1(inputs);
	if (locale === "es") return es_settings_apiaccess_title1(inputs);
	if (locale === "de") return de_settings_apiaccess_title1(inputs);
	if (locale === "it") return it_settings_apiaccess_title1(inputs);
	if (locale === "pt") return pt_settings_apiaccess_title1(inputs);
	if (locale === "zh") return zh_settings_apiaccess_title1(inputs);
	if (locale === "ja") return ja_settings_apiaccess_title1(inputs);
	if (locale === "ko") return ko_settings_apiaccess_title1(inputs);
	return ru_settings_apiaccess_title1(inputs);
});
var en_settings_apiaccess_apikey2 = () => {
	return `API Key`;
};
var fr_settings_apiaccess_apikey2 = () => {
	return `Clé API`;
};
var es_settings_apiaccess_apikey2 = () => {
	return `Llave API`;
};
var de_settings_apiaccess_apikey2 = () => {
	return `API-Schlüssel`;
};
var it_settings_apiaccess_apikey2 = () => {
	return `Chiave API`;
};
var pt_settings_apiaccess_apikey2 = () => {
	return `Chave API`;
};
var zh_settings_apiaccess_apikey2 = () => {
	return `API 密钥`;
};
var ja_settings_apiaccess_apikey2 = () => {
	return `APIキー`;
};
var ko_settings_apiaccess_apikey2 = () => {
	return `API Key`;
};
var ru_settings_apiaccess_apikey2 = () => {
	return `Ключ API`;
};
var settings_apiaccess_apikey2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apiaccess_apikey2(inputs);
	if (locale === "fr") return fr_settings_apiaccess_apikey2(inputs);
	if (locale === "es") return es_settings_apiaccess_apikey2(inputs);
	if (locale === "de") return de_settings_apiaccess_apikey2(inputs);
	if (locale === "it") return it_settings_apiaccess_apikey2(inputs);
	if (locale === "pt") return pt_settings_apiaccess_apikey2(inputs);
	if (locale === "zh") return zh_settings_apiaccess_apikey2(inputs);
	if (locale === "ja") return ja_settings_apiaccess_apikey2(inputs);
	if (locale === "ko") return ko_settings_apiaccess_apikey2(inputs);
	return ru_settings_apiaccess_apikey2(inputs);
});
var en_settings_apiaccess_copy1 = () => {
	return `Copy`;
};
var fr_settings_apiaccess_copy1 = () => {
	return `Copier`;
};
var es_settings_apiaccess_copy1 = () => {
	return `Copiar`;
};
var de_settings_apiaccess_copy1 = () => {
	return `Kopieren`;
};
var it_settings_apiaccess_copy1 = () => {
	return `Copia`;
};
var pt_settings_apiaccess_copy1 = () => {
	return `Copiar`;
};
var zh_settings_apiaccess_copy1 = () => {
	return `复制`;
};
var ja_settings_apiaccess_copy1 = () => {
	return `コピー`;
};
var ko_settings_apiaccess_copy1 = () => {
	return `Copy`;
};
var ru_settings_apiaccess_copy1 = () => {
	return `Копировать`;
};
var settings_apiaccess_copy1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apiaccess_copy1(inputs);
	if (locale === "fr") return fr_settings_apiaccess_copy1(inputs);
	if (locale === "es") return es_settings_apiaccess_copy1(inputs);
	if (locale === "de") return de_settings_apiaccess_copy1(inputs);
	if (locale === "it") return it_settings_apiaccess_copy1(inputs);
	if (locale === "pt") return pt_settings_apiaccess_copy1(inputs);
	if (locale === "zh") return zh_settings_apiaccess_copy1(inputs);
	if (locale === "ja") return ja_settings_apiaccess_copy1(inputs);
	if (locale === "ko") return ko_settings_apiaccess_copy1(inputs);
	return ru_settings_apiaccess_copy1(inputs);
});
var en_settings_apiaccess_description1 = () => {
	return `Use this key to access the benchmarking API programmatically.`;
};
var fr_settings_apiaccess_description1 = () => {
	return `Utilisez cette clé pour appeler l'API de benchmark par programmation.`;
};
var es_settings_apiaccess_description1 = () => {
	return `Usa esta llave para acceder a la API de benchmarking de forma programática.`;
};
var de_settings_apiaccess_description1 = () => {
	return `Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.`;
};
var it_settings_apiaccess_description1 = () => {
	return `Usa questa chiave per accedere programmaticamente alle API di benchmarking.`;
};
var pt_settings_apiaccess_description1 = () => {
	return `Use esta chave para acessar a API de benchmarking programaticamente.`;
};
var zh_settings_apiaccess_description1 = () => {
	return `使用此密钥以编程方式访问基准测试 API。`;
};
var ja_settings_apiaccess_description1 = () => {
	return `このキーを使用して、プログラムでベンチマークAPIにアクセスします。`;
};
var ko_settings_apiaccess_description1 = () => {
	return `Use this key to access the benchmarking API programmatically.`;
};
var ru_settings_apiaccess_description1 = () => {
	return `Используйте этот ключ для программного доступа к API бенчмаркинга.`;
};
var settings_apiaccess_description1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apiaccess_description1(inputs);
	if (locale === "fr") return fr_settings_apiaccess_description1(inputs);
	if (locale === "es") return es_settings_apiaccess_description1(inputs);
	if (locale === "de") return de_settings_apiaccess_description1(inputs);
	if (locale === "it") return it_settings_apiaccess_description1(inputs);
	if (locale === "pt") return pt_settings_apiaccess_description1(inputs);
	if (locale === "zh") return zh_settings_apiaccess_description1(inputs);
	if (locale === "ja") return ja_settings_apiaccess_description1(inputs);
	if (locale === "ko") return ko_settings_apiaccess_description1(inputs);
	return ru_settings_apiaccess_description1(inputs);
});
var en_settings_footer_cancel = () => {
	return `Cancel`;
};
var fr_settings_footer_cancel = () => {
	return `Annuler`;
};
var es_settings_footer_cancel = () => {
	return `Cancelar`;
};
var de_settings_footer_cancel = () => {
	return `Abbrechen`;
};
var it_settings_footer_cancel = () => {
	return `Annulla`;
};
var pt_settings_footer_cancel = () => {
	return `Cancelar`;
};
var zh_settings_footer_cancel = () => {
	return `取消`;
};
var ja_settings_footer_cancel = () => {
	return `キャンセル`;
};
var ko_settings_footer_cancel = () => {
	return `Cancel`;
};
var ru_settings_footer_cancel = () => {
	return `Отмена`;
};
var settings_footer_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_footer_cancel(inputs);
	if (locale === "fr") return fr_settings_footer_cancel(inputs);
	if (locale === "es") return es_settings_footer_cancel(inputs);
	if (locale === "de") return de_settings_footer_cancel(inputs);
	if (locale === "it") return it_settings_footer_cancel(inputs);
	if (locale === "pt") return pt_settings_footer_cancel(inputs);
	if (locale === "zh") return zh_settings_footer_cancel(inputs);
	if (locale === "ja") return ja_settings_footer_cancel(inputs);
	if (locale === "ko") return ko_settings_footer_cancel(inputs);
	return ru_settings_footer_cancel(inputs);
});
var en_settings_footer_savechanges1 = () => {
	return `Save Changes`;
};
var fr_settings_footer_savechanges1 = () => {
	return `Enregistrer`;
};
var es_settings_footer_savechanges1 = () => {
	return `Guardar cambios`;
};
var de_settings_footer_savechanges1 = () => {
	return `Änderungen speichern`;
};
var it_settings_footer_savechanges1 = () => {
	return `Salva modifiche`;
};
var pt_settings_footer_savechanges1 = () => {
	return `Salvar alterações`;
};
var zh_settings_footer_savechanges1 = () => {
	return `保存更改`;
};
var ja_settings_footer_savechanges1 = () => {
	return `変更を保存`;
};
var ko_settings_footer_savechanges1 = () => {
	return `Save Changes`;
};
var ru_settings_footer_savechanges1 = () => {
	return `Сохранить изменения`;
};
var settings_footer_savechanges1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_footer_savechanges1(inputs);
	if (locale === "fr") return fr_settings_footer_savechanges1(inputs);
	if (locale === "es") return es_settings_footer_savechanges1(inputs);
	if (locale === "de") return de_settings_footer_savechanges1(inputs);
	if (locale === "it") return it_settings_footer_savechanges1(inputs);
	if (locale === "pt") return pt_settings_footer_savechanges1(inputs);
	if (locale === "zh") return zh_settings_footer_savechanges1(inputs);
	if (locale === "ja") return ja_settings_footer_savechanges1(inputs);
	if (locale === "ko") return ko_settings_footer_savechanges1(inputs);
	return ru_settings_footer_savechanges1(inputs);
});
var en_team_header_title = () => {
	return `Our Team`;
};
var fr_team_header_title = () => {
	return `Notre équipe`;
};
var es_team_header_title = () => {
	return `Nuestro equipo`;
};
var de_team_header_title = () => {
	return `Unser Team`;
};
var it_team_header_title = () => {
	return `Il nostro team`;
};
var pt_team_header_title = () => {
	return `Nossa equipe`;
};
var zh_team_header_title = () => {
	return `我们的团队`;
};
var ja_team_header_title = () => {
	return `私たちのチーム`;
};
var ko_team_header_title = () => {
	return `Our Team`;
};
var ru_team_header_title = () => {
	return `Наша команда`;
};
var team_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_header_title(inputs);
	if (locale === "fr") return fr_team_header_title(inputs);
	if (locale === "es") return es_team_header_title(inputs);
	if (locale === "de") return de_team_header_title(inputs);
	if (locale === "it") return it_team_header_title(inputs);
	if (locale === "pt") return pt_team_header_title(inputs);
	if (locale === "zh") return zh_team_header_title(inputs);
	if (locale === "ja") return ja_team_header_title(inputs);
	if (locale === "ko") return ko_team_header_title(inputs);
	return ru_team_header_title(inputs);
});
var en_team_header_description = () => {
	return `Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.`;
};
var fr_team_header_description = () => {
	return `Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.`;
};
var es_team_header_description = () => {
	return `Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.`;
};
var de_team_header_description = () => {
	return `Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.`;
};
var it_team_header_description = () => {
	return `Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.`;
};
var pt_team_header_description = () => {
	return `Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.`;
};
var zh_team_header_description = () => {
	return `了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。`;
};
var ja_team_header_description = () => {
	return `i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。`;
};
var ko_team_header_description = () => {
	return `Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.`;
};
var ru_team_header_description = () => {
	return `Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.`;
};
var team_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_header_description(inputs);
	if (locale === "fr") return fr_team_header_description(inputs);
	if (locale === "es") return es_team_header_description(inputs);
	if (locale === "de") return de_team_header_description(inputs);
	if (locale === "it") return it_team_header_description(inputs);
	if (locale === "pt") return pt_team_header_description(inputs);
	if (locale === "zh") return zh_team_header_description(inputs);
	if (locale === "ja") return ja_team_header_description(inputs);
	if (locale === "ko") return ko_team_header_description(inputs);
	return ru_team_header_description(inputs);
});
var en_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var fr_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var es_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var de_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var it_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var pt_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var zh_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var ja_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var ko_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var ru_team_grid_member1name1 = () => {
	return `Сара Чен`;
};
var team_grid_member1name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member1name1(inputs);
	if (locale === "fr") return fr_team_grid_member1name1(inputs);
	if (locale === "es") return es_team_grid_member1name1(inputs);
	if (locale === "de") return de_team_grid_member1name1(inputs);
	if (locale === "it") return it_team_grid_member1name1(inputs);
	if (locale === "pt") return pt_team_grid_member1name1(inputs);
	if (locale === "zh") return zh_team_grid_member1name1(inputs);
	if (locale === "ja") return ja_team_grid_member1name1(inputs);
	if (locale === "ko") return ko_team_grid_member1name1(inputs);
	return ru_team_grid_member1name1(inputs);
});
var en_team_grid_member1role1 = () => {
	return `Founder & Lead Engineer`;
};
var fr_team_grid_member1role1 = () => {
	return `Fondatrice & lead ingénieur`;
};
var es_team_grid_member1role1 = () => {
	return `Fundadora e ingeniera principal`;
};
var de_team_grid_member1role1 = () => {
	return `Gründerin & Leitende Ingenieurin`;
};
var it_team_grid_member1role1 = () => {
	return `Fondatrice e Responsabile tecnico`;
};
var pt_team_grid_member1role1 = () => {
	return `Fundadora e Engenheira Líder`;
};
var zh_team_grid_member1role1 = () => {
	return `创始人兼首席工程师`;
};
var ja_team_grid_member1role1 = () => {
	return `創設者 & リードエンジニア`;
};
var ko_team_grid_member1role1 = () => {
	return `Founder & Lead Engineer`;
};
var ru_team_grid_member1role1 = () => {
	return `Основатель и ведущий инженер`;
};
var team_grid_member1role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member1role1(inputs);
	if (locale === "fr") return fr_team_grid_member1role1(inputs);
	if (locale === "es") return es_team_grid_member1role1(inputs);
	if (locale === "de") return de_team_grid_member1role1(inputs);
	if (locale === "it") return it_team_grid_member1role1(inputs);
	if (locale === "pt") return pt_team_grid_member1role1(inputs);
	if (locale === "zh") return zh_team_grid_member1role1(inputs);
	if (locale === "ja") return ja_team_grid_member1role1(inputs);
	if (locale === "ko") return ko_team_grid_member1role1(inputs);
	return ru_team_grid_member1role1(inputs);
});
var en_team_grid_member1bio1 = () => {
	return `Former Google engineer with 10 years of experience building internationalization systems at scale.`;
};
var fr_team_grid_member1bio1 = () => {
	return `Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.`;
};
var es_team_grid_member1bio1 = () => {
	return `Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.`;
};
var de_team_grid_member1bio1 = () => {
	return `Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.`;
};
var it_team_grid_member1bio1 = () => {
	return `Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.`;
};
var pt_team_grid_member1bio1 = () => {
	return `Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.`;
};
var zh_team_grid_member1bio1 = () => {
	return `前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。`;
};
var ja_team_grid_member1bio1 = () => {
	return `大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。`;
};
var ko_team_grid_member1bio1 = () => {
	return `Former Google engineer with 10 years of experience building internationalization systems at scale.`;
};
var ru_team_grid_member1bio1 = () => {
	return `Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.`;
};
var team_grid_member1bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member1bio1(inputs);
	if (locale === "fr") return fr_team_grid_member1bio1(inputs);
	if (locale === "es") return es_team_grid_member1bio1(inputs);
	if (locale === "de") return de_team_grid_member1bio1(inputs);
	if (locale === "it") return it_team_grid_member1bio1(inputs);
	if (locale === "pt") return pt_team_grid_member1bio1(inputs);
	if (locale === "zh") return zh_team_grid_member1bio1(inputs);
	if (locale === "ja") return ja_team_grid_member1bio1(inputs);
	if (locale === "ko") return ko_team_grid_member1bio1(inputs);
	return ru_team_grid_member1bio1(inputs);
});
var en_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var fr_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var es_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var de_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var it_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var pt_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var zh_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var ja_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var ko_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var ru_team_grid_member2name1 = () => {
	return `Маркус Вебер`;
};
var team_grid_member2name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member2name1(inputs);
	if (locale === "fr") return fr_team_grid_member2name1(inputs);
	if (locale === "es") return es_team_grid_member2name1(inputs);
	if (locale === "de") return de_team_grid_member2name1(inputs);
	if (locale === "it") return it_team_grid_member2name1(inputs);
	if (locale === "pt") return pt_team_grid_member2name1(inputs);
	if (locale === "zh") return zh_team_grid_member2name1(inputs);
	if (locale === "ja") return ja_team_grid_member2name1(inputs);
	if (locale === "ko") return ko_team_grid_member2name1(inputs);
	return ru_team_grid_member2name1(inputs);
});
var en_team_grid_member2role1 = () => {
	return `Performance Engineer`;
};
var fr_team_grid_member2role1 = () => {
	return `Ingénieur performance`;
};
var es_team_grid_member2role1 = () => {
	return `Ingeniero de rendimiento`;
};
var de_team_grid_member2role1 = () => {
	return `Performance-Ingenieur`;
};
var it_team_grid_member2role1 = () => {
	return `Ingegnere delle prestazioni`;
};
var pt_team_grid_member2role1 = () => {
	return `Engenheiro de performance`;
};
var zh_team_grid_member2role1 = () => {
	return `性能工程师`;
};
var ja_team_grid_member2role1 = () => {
	return `パフォーマンスエンジニア`;
};
var ko_team_grid_member2role1 = () => {
	return `Performance Engineer`;
};
var ru_team_grid_member2role1 = () => {
	return `Инженер по производительности`;
};
var team_grid_member2role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member2role1(inputs);
	if (locale === "fr") return fr_team_grid_member2role1(inputs);
	if (locale === "es") return es_team_grid_member2role1(inputs);
	if (locale === "de") return de_team_grid_member2role1(inputs);
	if (locale === "it") return it_team_grid_member2role1(inputs);
	if (locale === "pt") return pt_team_grid_member2role1(inputs);
	if (locale === "zh") return zh_team_grid_member2role1(inputs);
	if (locale === "ja") return ja_team_grid_member2role1(inputs);
	if (locale === "ko") return ko_team_grid_member2role1(inputs);
	return ru_team_grid_member2role1(inputs);
});
var en_team_grid_member2bio1 = () => {
	return `Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.`;
};
var fr_team_grid_member2bio1 = () => {
	return `Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.`;
};
var es_team_grid_member2bio1 = () => {
	return `Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.`;
};
var de_team_grid_member2bio1 = () => {
	return `Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.`;
};
var it_team_grid_member2bio1 = () => {
	return `Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.`;
};
var pt_team_grid_member2bio1 = () => {
	return `Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.`;
};
var zh_team_grid_member2bio1 = () => {
	return `专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。`;
};
var ja_team_grid_member2bio1 = () => {
	return `JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。`;
};
var ko_team_grid_member2bio1 = () => {
	return `Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.`;
};
var ru_team_grid_member2bio1 = () => {
	return `Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.`;
};
var team_grid_member2bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member2bio1(inputs);
	if (locale === "fr") return fr_team_grid_member2bio1(inputs);
	if (locale === "es") return es_team_grid_member2bio1(inputs);
	if (locale === "de") return de_team_grid_member2bio1(inputs);
	if (locale === "it") return it_team_grid_member2bio1(inputs);
	if (locale === "pt") return pt_team_grid_member2bio1(inputs);
	if (locale === "zh") return zh_team_grid_member2bio1(inputs);
	if (locale === "ja") return ja_team_grid_member2bio1(inputs);
	if (locale === "ko") return ko_team_grid_member2bio1(inputs);
	return ru_team_grid_member2bio1(inputs);
});
var en_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var fr_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var es_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var de_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var it_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var pt_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var zh_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var ja_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var ko_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var ru_team_grid_member3name1 = () => {
	return `Айша Патель`;
};
var team_grid_member3name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member3name1(inputs);
	if (locale === "fr") return fr_team_grid_member3name1(inputs);
	if (locale === "es") return es_team_grid_member3name1(inputs);
	if (locale === "de") return de_team_grid_member3name1(inputs);
	if (locale === "it") return it_team_grid_member3name1(inputs);
	if (locale === "pt") return pt_team_grid_member3name1(inputs);
	if (locale === "zh") return zh_team_grid_member3name1(inputs);
	if (locale === "ja") return ja_team_grid_member3name1(inputs);
	if (locale === "ko") return ko_team_grid_member3name1(inputs);
	return ru_team_grid_member3name1(inputs);
});
var en_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var fr_team_grid_member3role1 = () => {
	return `Developer advocate`;
};
var es_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var de_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var it_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var pt_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var zh_team_grid_member3role1 = () => {
	return `开发者倡导者`;
};
var ja_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var ko_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var ru_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var team_grid_member3role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member3role1(inputs);
	if (locale === "fr") return fr_team_grid_member3role1(inputs);
	if (locale === "es") return es_team_grid_member3role1(inputs);
	if (locale === "de") return de_team_grid_member3role1(inputs);
	if (locale === "it") return it_team_grid_member3role1(inputs);
	if (locale === "pt") return pt_team_grid_member3role1(inputs);
	if (locale === "zh") return zh_team_grid_member3role1(inputs);
	if (locale === "ja") return ja_team_grid_member3role1(inputs);
	if (locale === "ko") return ko_team_grid_member3role1(inputs);
	return ru_team_grid_member3role1(inputs);
});
var en_team_grid_member3bio1 = () => {
	return `Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.`;
};
var fr_team_grid_member3bio1 = () => {
	return `Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.`;
};
var es_team_grid_member3bio1 = () => {
	return `Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.`;
};
var de_team_grid_member3bio1 = () => {
	return `Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.`;
};
var it_team_grid_member3bio1 = () => {
	return `Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.`;
};
var pt_team_grid_member3bio1 = () => {
	return `Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.`;
};
var zh_team_grid_member3bio1 = () => {
	return `对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。`;
};
var ja_team_grid_member3bio1 = () => {
	return `開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。`;
};
var ko_team_grid_member3bio1 = () => {
	return `Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.`;
};
var ru_team_grid_member3bio1 = () => {
	return `Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.`;
};
var team_grid_member3bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member3bio1(inputs);
	if (locale === "fr") return fr_team_grid_member3bio1(inputs);
	if (locale === "es") return es_team_grid_member3bio1(inputs);
	if (locale === "de") return de_team_grid_member3bio1(inputs);
	if (locale === "it") return it_team_grid_member3bio1(inputs);
	if (locale === "pt") return pt_team_grid_member3bio1(inputs);
	if (locale === "zh") return zh_team_grid_member3bio1(inputs);
	if (locale === "ja") return ja_team_grid_member3bio1(inputs);
	if (locale === "ko") return ko_team_grid_member3bio1(inputs);
	return ru_team_grid_member3bio1(inputs);
});
var en_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var fr_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var es_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var de_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var it_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var pt_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var zh_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var ja_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var ko_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var ru_team_grid_member4name1 = () => {
	return `Томас Родригес`;
};
var team_grid_member4name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member4name1(inputs);
	if (locale === "fr") return fr_team_grid_member4name1(inputs);
	if (locale === "es") return es_team_grid_member4name1(inputs);
	if (locale === "de") return de_team_grid_member4name1(inputs);
	if (locale === "it") return it_team_grid_member4name1(inputs);
	if (locale === "pt") return pt_team_grid_member4name1(inputs);
	if (locale === "zh") return zh_team_grid_member4name1(inputs);
	if (locale === "ja") return ja_team_grid_member4name1(inputs);
	if (locale === "ko") return ko_team_grid_member4name1(inputs);
	return ru_team_grid_member4name1(inputs);
});
var en_team_grid_member4role1 = () => {
	return `Full-Stack Developer`;
};
var fr_team_grid_member4role1 = () => {
	return `Développeur full-stack`;
};
var es_team_grid_member4role1 = () => {
	return `Desarrollador Full-Stack`;
};
var de_team_grid_member4role1 = () => {
	return `Full-Stack-Entwickler`;
};
var it_team_grid_member4role1 = () => {
	return `Sviluppatore Full-Stack`;
};
var pt_team_grid_member4role1 = () => {
	return `Desenvolvedor Full-Stack`;
};
var zh_team_grid_member4role1 = () => {
	return `全栈开发人员`;
};
var ja_team_grid_member4role1 = () => {
	return `フルスタックデベロッパー`;
};
var ko_team_grid_member4role1 = () => {
	return `Full-Stack Developer`;
};
var ru_team_grid_member4role1 = () => {
	return `Full-Stack разработчик`;
};
var team_grid_member4role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member4role1(inputs);
	if (locale === "fr") return fr_team_grid_member4role1(inputs);
	if (locale === "es") return es_team_grid_member4role1(inputs);
	if (locale === "de") return de_team_grid_member4role1(inputs);
	if (locale === "it") return it_team_grid_member4role1(inputs);
	if (locale === "pt") return pt_team_grid_member4role1(inputs);
	if (locale === "zh") return zh_team_grid_member4role1(inputs);
	if (locale === "ja") return ja_team_grid_member4role1(inputs);
	if (locale === "ko") return ko_team_grid_member4role1(inputs);
	return ru_team_grid_member4role1(inputs);
});
var en_team_grid_member4bio1 = () => {
	return `Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.`;
};
var fr_team_grid_member4bio1 = () => {
	return `Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.`;
};
var es_team_grid_member4bio1 = () => {
	return `Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.`;
};
var de_team_grid_member4bio1 = () => {
	return `Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.`;
};
var it_team_grid_member4bio1 = () => {
	return `Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.`;
};
var pt_team_grid_member4bio1 = () => {
	return `Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.`;
};
var zh_team_grid_member4bio1 = () => {
	return `维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。`;
};
var ja_team_grid_member4bio1 = () => {
	return `ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。`;
};
var ko_team_grid_member4bio1 = () => {
	return `Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.`;
};
var ru_team_grid_member4bio1 = () => {
	return `Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.`;
};
var team_grid_member4bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member4bio1(inputs);
	if (locale === "fr") return fr_team_grid_member4bio1(inputs);
	if (locale === "es") return es_team_grid_member4bio1(inputs);
	if (locale === "de") return de_team_grid_member4bio1(inputs);
	if (locale === "it") return it_team_grid_member4bio1(inputs);
	if (locale === "pt") return pt_team_grid_member4bio1(inputs);
	if (locale === "zh") return zh_team_grid_member4bio1(inputs);
	if (locale === "ja") return ja_team_grid_member4bio1(inputs);
	if (locale === "ko") return ko_team_grid_member4bio1(inputs);
	return ru_team_grid_member4bio1(inputs);
});
var en_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var fr_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var es_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var de_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var it_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var pt_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var zh_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var ja_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var ko_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var ru_team_grid_member5name1 = () => {
	return `Юки Танака`;
};
var team_grid_member5name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member5name1(inputs);
	if (locale === "fr") return fr_team_grid_member5name1(inputs);
	if (locale === "es") return es_team_grid_member5name1(inputs);
	if (locale === "de") return de_team_grid_member5name1(inputs);
	if (locale === "it") return it_team_grid_member5name1(inputs);
	if (locale === "pt") return pt_team_grid_member5name1(inputs);
	if (locale === "zh") return zh_team_grid_member5name1(inputs);
	if (locale === "ja") return ja_team_grid_member5name1(inputs);
	if (locale === "ko") return ko_team_grid_member5name1(inputs);
	return ru_team_grid_member5name1(inputs);
});
var en_team_grid_member5role1 = () => {
	return `Data Analyst`;
};
var fr_team_grid_member5role1 = () => {
	return `Analyste de données`;
};
var es_team_grid_member5role1 = () => {
	return `Analista de datos`;
};
var de_team_grid_member5role1 = () => {
	return `Datenanalyst`;
};
var it_team_grid_member5role1 = () => {
	return `Analista dati`;
};
var pt_team_grid_member5role1 = () => {
	return `Analista de dados`;
};
var zh_team_grid_member5role1 = () => {
	return `数据分析师`;
};
var ja_team_grid_member5role1 = () => {
	return `データアナリスト`;
};
var ko_team_grid_member5role1 = () => {
	return `Data Analyst`;
};
var ru_team_grid_member5role1 = () => {
	return `Аналитик данных`;
};
var team_grid_member5role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member5role1(inputs);
	if (locale === "fr") return fr_team_grid_member5role1(inputs);
	if (locale === "es") return es_team_grid_member5role1(inputs);
	if (locale === "de") return de_team_grid_member5role1(inputs);
	if (locale === "it") return it_team_grid_member5role1(inputs);
	if (locale === "pt") return pt_team_grid_member5role1(inputs);
	if (locale === "zh") return zh_team_grid_member5role1(inputs);
	if (locale === "ja") return ja_team_grid_member5role1(inputs);
	if (locale === "ko") return ko_team_grid_member5role1(inputs);
	return ru_team_grid_member5role1(inputs);
});
var en_team_grid_member5bio1 = () => {
	return `Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.`;
};
var fr_team_grid_member5bio1 = () => {
	return `Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).`;
};
var es_team_grid_member5bio1 = () => {
	return `Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.`;
};
var de_team_grid_member5bio1 = () => {
	return `Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.`;
};
var it_team_grid_member5bio1 = () => {
	return `Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.`;
};
var pt_team_grid_member5bio1 = () => {
	return `Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.`;
};
var zh_team_grid_member5bio1 = () => {
	return `确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。`;
};
var ja_team_grid_member5bio1 = () => {
	return `すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。`;
};
var ko_team_grid_member5bio1 = () => {
	return `Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.`;
};
var ru_team_grid_member5bio1 = () => {
	return `Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).`;
};
var team_grid_member5bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member5bio1(inputs);
	if (locale === "fr") return fr_team_grid_member5bio1(inputs);
	if (locale === "es") return es_team_grid_member5bio1(inputs);
	if (locale === "de") return de_team_grid_member5bio1(inputs);
	if (locale === "it") return it_team_grid_member5bio1(inputs);
	if (locale === "pt") return pt_team_grid_member5bio1(inputs);
	if (locale === "zh") return zh_team_grid_member5bio1(inputs);
	if (locale === "ja") return ja_team_grid_member5bio1(inputs);
	if (locale === "ko") return ko_team_grid_member5bio1(inputs);
	return ru_team_grid_member5bio1(inputs);
});
var en_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var fr_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var es_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var de_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var it_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var pt_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var zh_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var ja_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var ko_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var ru_team_grid_member6name1 = () => {
	return `Елена Ковальски`;
};
var team_grid_member6name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member6name1(inputs);
	if (locale === "fr") return fr_team_grid_member6name1(inputs);
	if (locale === "es") return es_team_grid_member6name1(inputs);
	if (locale === "de") return de_team_grid_member6name1(inputs);
	if (locale === "it") return it_team_grid_member6name1(inputs);
	if (locale === "pt") return pt_team_grid_member6name1(inputs);
	if (locale === "zh") return zh_team_grid_member6name1(inputs);
	if (locale === "ja") return ja_team_grid_member6name1(inputs);
	if (locale === "ko") return ko_team_grid_member6name1(inputs);
	return ru_team_grid_member6name1(inputs);
});
var en_team_grid_member6role1 = () => {
	return `Community Manager`;
};
var fr_team_grid_member6role1 = () => {
	return `Community manager`;
};
var es_team_grid_member6role1 = () => {
	return `Responsable de la comunidad`;
};
var de_team_grid_member6role1 = () => {
	return `Community Manager`;
};
var it_team_grid_member6role1 = () => {
	return `Responsable della comunità`;
};
var pt_team_grid_member6role1 = () => {
	return `Gerente de comunidade`;
};
var zh_team_grid_member6role1 = () => {
	return `社区经理`;
};
var ja_team_grid_member6role1 = () => {
	return `コミュニティマネージャー`;
};
var ko_team_grid_member6role1 = () => {
	return `Community Manager`;
};
var ru_team_grid_member6role1 = () => {
	return `Комьюнити-менеджер`;
};
var team_grid_member6role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member6role1(inputs);
	if (locale === "fr") return fr_team_grid_member6role1(inputs);
	if (locale === "es") return es_team_grid_member6role1(inputs);
	if (locale === "de") return de_team_grid_member6role1(inputs);
	if (locale === "it") return it_team_grid_member6role1(inputs);
	if (locale === "pt") return pt_team_grid_member6role1(inputs);
	if (locale === "zh") return zh_team_grid_member6role1(inputs);
	if (locale === "ja") return ja_team_grid_member6role1(inputs);
	if (locale === "ko") return ko_team_grid_member6role1(inputs);
	return ru_team_grid_member6role1(inputs);
});
var en_team_grid_member6bio1 = () => {
	return `Manages community contributions, partnerships, and events. Background in open source governance.`;
};
var fr_team_grid_member6bio1 = () => {
	return `Contributions communautaires, partenariats et événements — gouvernance open source.`;
};
var es_team_grid_member6bio1 = () => {
	return `Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.`;
};
var de_team_grid_member6bio1 = () => {
	return `Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.`;
};
var it_team_grid_member6bio1 = () => {
	return `Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.`;
};
var pt_team_grid_member6bio1 = () => {
	return `Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.`;
};
var zh_team_grid_member6bio1 = () => {
	return `管理社区贡献、合作伙伴关系和活动。具有开源治理背景。`;
};
var ja_team_grid_member6bio1 = () => {
	return `コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。`;
};
var ko_team_grid_member6bio1 = () => {
	return `Manages community contributions, partnerships, and events. Background in open source governance.`;
};
var ru_team_grid_member6bio1 = () => {
	return `Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.`;
};
var team_grid_member6bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member6bio1(inputs);
	if (locale === "fr") return fr_team_grid_member6bio1(inputs);
	if (locale === "es") return es_team_grid_member6bio1(inputs);
	if (locale === "de") return de_team_grid_member6bio1(inputs);
	if (locale === "it") return it_team_grid_member6bio1(inputs);
	if (locale === "pt") return pt_team_grid_member6bio1(inputs);
	if (locale === "zh") return zh_team_grid_member6bio1(inputs);
	if (locale === "ja") return ja_team_grid_member6bio1(inputs);
	if (locale === "ko") return ko_team_grid_member6bio1(inputs);
	return ru_team_grid_member6bio1(inputs);
});
var en_notfound_title1 = () => {
	return `404`;
};
var fr_notfound_title1 = () => {
	return `404`;
};
var es_notfound_title1 = () => {
	return `404`;
};
var de_notfound_title1 = () => {
	return `404`;
};
var it_notfound_title1 = () => {
	return `404`;
};
var pt_notfound_title1 = () => {
	return `404`;
};
var zh_notfound_title1 = () => {
	return `404`;
};
var ja_notfound_title1 = () => {
	return `404`;
};
var ko_notfound_title1 = () => {
	return `404`;
};
var ru_notfound_title1 = () => {
	return `404`;
};
var notfound_title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_notfound_title1(inputs);
	if (locale === "fr") return fr_notfound_title1(inputs);
	if (locale === "es") return es_notfound_title1(inputs);
	if (locale === "de") return de_notfound_title1(inputs);
	if (locale === "it") return it_notfound_title1(inputs);
	if (locale === "pt") return pt_notfound_title1(inputs);
	if (locale === "zh") return zh_notfound_title1(inputs);
	if (locale === "ja") return ja_notfound_title1(inputs);
	if (locale === "ko") return ko_notfound_title1(inputs);
	return ru_notfound_title1(inputs);
});
var en_notfound_description1 = () => {
	return `Oops! Page not found`;
};
var fr_notfound_description1 = () => {
	return `Oups ! Page introuvable`;
};
var es_notfound_description1 = () => {
	return `¡Ups! Página no encontrada`;
};
var de_notfound_description1 = () => {
	return `Hoppla! Seite nicht gefunden`;
};
var it_notfound_description1 = () => {
	return `Ops! Pagina non trovata`;
};
var pt_notfound_description1 = () => {
	return `Ops! Página não encontrada`;
};
var zh_notfound_description1 = () => {
	return `哎呀！页面未找到`;
};
var ja_notfound_description1 = () => {
	return `おっと！ページが見つかりません`;
};
var ko_notfound_description1 = () => {
	return `Oops! Page not found`;
};
var ru_notfound_description1 = () => {
	return `Упс! Страница не найдена`;
};
var notfound_description1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_notfound_description1(inputs);
	if (locale === "fr") return fr_notfound_description1(inputs);
	if (locale === "es") return es_notfound_description1(inputs);
	if (locale === "de") return de_notfound_description1(inputs);
	if (locale === "it") return it_notfound_description1(inputs);
	if (locale === "pt") return pt_notfound_description1(inputs);
	if (locale === "zh") return zh_notfound_description1(inputs);
	if (locale === "ja") return ja_notfound_description1(inputs);
	if (locale === "ko") return ko_notfound_description1(inputs);
	return ru_notfound_description1(inputs);
});
var en_notfound_returnhome2 = () => {
	return `Return to Home`;
};
var fr_notfound_returnhome2 = () => {
	return `Retour à l'accueil`;
};
var es_notfound_returnhome2 = () => {
	return `Volver al inicio`;
};
var de_notfound_returnhome2 = () => {
	return `Zurück zur Startseite`;
};
var it_notfound_returnhome2 = () => {
	return `Torna alla Home`;
};
var pt_notfound_returnhome2 = () => {
	return `Voltar para o início`;
};
var zh_notfound_returnhome2 = () => {
	return `返回首页`;
};
var ja_notfound_returnhome2 = () => {
	return `ホームに戻る`;
};
var ko_notfound_returnhome2 = () => {
	return `Return to Home`;
};
var ru_notfound_returnhome2 = () => {
	return `Вернуться на главную`;
};
var notfound_returnhome2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_notfound_returnhome2(inputs);
	if (locale === "fr") return fr_notfound_returnhome2(inputs);
	if (locale === "es") return es_notfound_returnhome2(inputs);
	if (locale === "de") return de_notfound_returnhome2(inputs);
	if (locale === "it") return it_notfound_returnhome2(inputs);
	if (locale === "pt") return pt_notfound_returnhome2(inputs);
	if (locale === "zh") return zh_notfound_returnhome2(inputs);
	if (locale === "ja") return ja_notfound_returnhome2(inputs);
	if (locale === "ko") return ko_notfound_returnhome2(inputs);
	return ru_notfound_returnhome2(inputs);
});
var _index_exports = __exportAll({
	about_grid_methodologyDesc: () => about_grid_methodologydesc1,
	about_grid_methodologyTitle: () => about_grid_methodologytitle1,
	about_grid_whyExistsDesc: () => about_grid_whyexistsdesc2,
	about_grid_whyExistsTitle: () => about_grid_whyexiststitle2,
	about_header_description: () => about_header_description,
	about_header_title: () => about_header_title,
	about_whatWeMeasure_bundleSizeImpact: () => about_whatwemeasure_bundlesizeimpact4,
	about_whatWeMeasure_bundleSizeImpactDesc: () => about_whatwemeasure_bundlesizeimpactdesc5,
	about_whatWeMeasure_hydrationCost: () => about_whatwemeasure_hydrationcost3,
	about_whatWeMeasure_hydrationCostDesc: () => about_whatwemeasure_hydrationcostdesc4,
	about_whatWeMeasure_lazyLoading: () => about_whatwemeasure_lazyloading3,
	about_whatWeMeasure_lazyLoadingDesc: () => about_whatwemeasure_lazyloadingdesc4,
	about_whatWeMeasure_localeSwitch: () => about_whatwemeasure_localeswitch3,
	about_whatWeMeasure_localeSwitchDesc: () => about_whatwemeasure_localeswitchdesc4,
	about_whatWeMeasure_renderingOverhead: () => about_whatwemeasure_renderingoverhead3,
	about_whatWeMeasure_renderingOverheadDesc: () => about_whatwemeasure_renderingoverheaddesc4,
	about_whatWeMeasure_title: () => about_whatwemeasure_title2,
	blog_header_description: () => blog_header_description,
	blog_header_title: () => blog_header_title,
	blog_list_post1Category: () => blog_list_post1category1,
	blog_list_post1Date: () => blog_list_post1date1,
	blog_list_post1Excerpt: () => blog_list_post1excerpt1,
	blog_list_post1Title: () => blog_list_post1title1,
	blog_list_post2Category: () => blog_list_post2category1,
	blog_list_post2Date: () => blog_list_post2date1,
	blog_list_post2Excerpt: () => blog_list_post2excerpt1,
	blog_list_post2Title: () => blog_list_post2title1,
	blog_list_post3Category: () => blog_list_post3category1,
	blog_list_post3Date: () => blog_list_post3date1,
	blog_list_post3Excerpt: () => blog_list_post3excerpt1,
	blog_list_post3Title: () => blog_list_post3title1,
	blog_list_post4Category: () => blog_list_post4category1,
	blog_list_post4Date: () => blog_list_post4date1,
	blog_list_post4Excerpt: () => blog_list_post4excerpt1,
	blog_list_post4Title: () => blog_list_post4title1,
	blog_list_post5Category: () => blog_list_post5category1,
	blog_list_post5Date: () => blog_list_post5date1,
	blog_list_post5Excerpt: () => blog_list_post5excerpt1,
	blog_list_post5Title: () => blog_list_post5title1,
	blog_list_post6Category: () => blog_list_post6category1,
	blog_list_post6Date: () => blog_list_post6date1,
	blog_list_post6Excerpt: () => blog_list_post6excerpt1,
	blog_list_post6Title: () => blog_list_post6title1,
	blog_list_readMore: () => blog_list_readmore1,
	careers_benefits_ossLabel: () => careers_benefits_osslabel1,
	careers_benefits_ossValue: () => careers_benefits_ossvalue1,
	careers_benefits_payLabel: () => careers_benefits_paylabel1,
	careers_benefits_payValue: () => careers_benefits_payvalue1,
	careers_benefits_remoteLabel: () => careers_benefits_remotelabel1,
	careers_benefits_remoteValue: () => careers_benefits_remotevalue1,
	careers_header_description: () => careers_header_description,
	careers_header_title: () => careers_header_title,
	careers_openPositions_applyNow: () => careers_openpositions_applynow2,
	careers_openPositions_backendDesc: () => careers_openpositions_backenddesc2,
	careers_openPositions_backendTitle: () => careers_openpositions_backendtitle2,
	careers_openPositions_community: () => careers_openpositions_community1,
	careers_openPositions_devrelDesc: () => careers_openpositions_devreldesc2,
	careers_openPositions_devrelTitle: () => careers_openpositions_devreltitle2,
	careers_openPositions_documentation: () => careers_openpositions_documentation1,
	careers_openPositions_engineering: () => careers_openpositions_engineering1,
	careers_openPositions_frontendDesc: () => careers_openpositions_frontenddesc2,
	careers_openPositions_frontendTitle: () => careers_openpositions_frontendtitle2,
	careers_openPositions_fullTime: () => careers_openpositions_fulltime2,
	careers_openPositions_partTime: () => careers_openpositions_parttime2,
	careers_openPositions_qaDesc: () => careers_openpositions_qadesc2,
	careers_openPositions_qaTitle: () => careers_openpositions_qatitle2,
	careers_openPositions_remote: () => careers_openpositions_remote1,
	careers_openPositions_sfRemote: () => careers_openpositions_sfremote2,
	careers_openPositions_title: () => careers_openpositions_title1,
	careers_openPositions_writerDesc: () => careers_openpositions_writerdesc2,
	careers_openPositions_writerTitle: () => careers_openpositions_writertitle2,
	contact_form_bugReport: () => contact_form_bugreport1,
	contact_form_contribution: () => contact_form_contribution,
	contact_form_email: () => contact_form_email,
	contact_form_emailPlaceholder: () => contact_form_emailplaceholder1,
	contact_form_message: () => contact_form_message,
	contact_form_messagePlaceholder: () => contact_form_messageplaceholder1,
	contact_form_methodologyQuestion: () => contact_form_methodologyquestion1,
	contact_form_name: () => contact_form_name,
	contact_form_newBenchmarkIdea: () => contact_form_newbenchmarkidea2,
	contact_form_other: () => contact_form_other,
	contact_form_sendMessage: () => contact_form_sendmessage1,
	contact_form_topic: () => contact_form_topic,
	contact_form_yourName: () => contact_form_yourname1,
	contact_header_description: () => contact_header_description,
	contact_header_title: () => contact_header_title,
	faq_header_description: () => faq_header_description,
	faq_header_title: () => faq_header_title,
	faq_list_a1: () => faq_list_a1,
	faq_list_a2: () => faq_list_a2,
	faq_list_a3: () => faq_list_a3,
	faq_list_a4: () => faq_list_a4,
	faq_list_a5: () => faq_list_a5,
	faq_list_a6: () => faq_list_a6,
	faq_list_a7: () => faq_list_a7,
	faq_list_a8: () => faq_list_a8,
	faq_list_q1: () => faq_list_q1,
	faq_list_q2: () => faq_list_q2,
	faq_list_q3: () => faq_list_q3,
	faq_list_q4: () => faq_list_q4,
	faq_list_q5: () => faq_list_q5,
	faq_list_q6: () => faq_list_q6,
	faq_list_q7: () => faq_list_q7,
	faq_list_q8: () => faq_list_q8,
	footer_builtWith: () => footer_builtwith1,
	footer_contact: () => footer_contact,
	footer_contributing: () => footer_contributing,
	footer_description: () => footer_description,
	footer_github: () => footer_github,
	footer_methodology: () => footer_methodology,
	footer_resources: () => footer_resources,
	footer_title: () => footer_title,
	header_blog: () => header_blog,
	header_careers: () => header_careers,
	header_contact: () => header_contact,
	header_faq: () => header_faq,
	header_home: () => header_home,
	header_methodology: () => header_methodology,
	header_mockPages: () => header_mockpages1,
	header_pricing: () => header_pricing,
	header_products: () => header_products,
	header_settings: () => header_settings,
	header_team: () => header_team,
	home_hero_description: () => home_hero_description,
	home_hero_methodology: () => home_hero_methodology,
	home_hero_title: () => home_hero_title,
	home_hero_viewResults: () => home_hero_viewresults1,
	home_resultsTable_builtIn: () => home_resultstable_builtin2,
	home_resultsTable_bundleSize: () => home_resultstable_bundlesize2,
	home_resultsTable_lazyLoading: () => home_resultstable_lazyloading2,
	home_resultsTable_library: () => home_resultstable_library1,
	home_resultsTable_lookupTime: () => home_resultstable_lookuptime2,
	home_resultsTable_manual: () => home_resultstable_manual1,
	home_resultsTable_title: () => home_resultstable_title1,
	home_resultsTable_yes: () => home_resultstable_yes1,
	home_understandingImpact_cacheDesc: () => home_understandingimpact_cachedesc2,
	home_understandingImpact_cacheLabel: () => home_understandingimpact_cachelabel2,
	home_understandingImpact_foucDesc: () => home_understandingimpact_foucdesc2,
	home_understandingImpact_foucLabel: () => home_understandingimpact_fouclabel2,
	home_understandingImpact_measuresDesc: () => home_understandingimpact_measuresdesc2,
	home_understandingImpact_measuresTitle: () => home_understandingimpact_measurestitle2,
	home_understandingImpact_singleJsonBullet1: () => home_understandingimpact_singlejsonbullet13,
	home_understandingImpact_singleJsonBullet2: () => home_understandingimpact_singlejsonbullet23,
	home_understandingImpact_singleJsonBullet3: () => home_understandingimpact_singlejsonbullet33,
	home_understandingImpact_singleJsonIntro: () => home_understandingimpact_singlejsonintro3,
	home_understandingImpact_singleJsonTitle: () => home_understandingimpact_singlejsontitle3,
	home_understandingImpact_title: () => home_understandingimpact_title1,
	home_understandingImpact_tradeOffsIntro: () => home_understandingimpact_tradeoffsintro3,
	home_understandingImpact_tradeOffsTitle: () => home_understandingimpact_tradeoffstitle3,
	home_understandingImpact_waterfallDesc: () => home_understandingimpact_waterfalldesc2,
	home_understandingImpact_waterfallLabel: () => home_understandingimpact_waterfalllabel2,
	home_whyItMatters_bundleSizeDesc: () => home_whyitmatters_bundlesizedesc4,
	home_whyItMatters_bundleSizeTitle: () => home_whyitmatters_bundlesizetitle4,
	home_whyItMatters_dynamicLoadingDesc: () => home_whyitmatters_dynamicloadingdesc4,
	home_whyItMatters_dynamicLoadingTitle: () => home_whyitmatters_dynamicloadingtitle4,
	home_whyItMatters_renderingDesc: () => home_whyitmatters_renderingdesc3,
	home_whyItMatters_renderingTitle: () => home_whyitmatters_renderingtitle3,
	home_whyItMatters_title: () => home_whyitmatters_title2,
	mockBanner: () => mockbanner1,
	notFound_description: () => notfound_description1,
	notFound_returnHome: () => notfound_returnhome2,
	notFound_title: () => notfound_title1,
	pricing_header_description: () => pricing_header_description,
	pricing_header_title: () => pricing_header_title,
	pricing_tiers_contactSales: () => pricing_tiers_contactsales1,
	pricing_tiers_enterpriseFeature1: () => pricing_tiers_enterprisefeature11,
	pricing_tiers_enterpriseFeature2: () => pricing_tiers_enterprisefeature21,
	pricing_tiers_enterpriseFeature3: () => pricing_tiers_enterprisefeature31,
	pricing_tiers_enterpriseFeature4: () => pricing_tiers_enterprisefeature41,
	pricing_tiers_enterpriseFeature5: () => pricing_tiers_enterprisefeature51,
	pricing_tiers_enterpriseFeature6: () => pricing_tiers_enterprisefeature61,
	pricing_tiers_enterpriseFeature7: () => pricing_tiers_enterprisefeature71,
	pricing_tiers_enterpriseName: () => pricing_tiers_enterprisename1,
	pricing_tiers_enterprisePrice: () => pricing_tiers_enterpriseprice1,
	pricing_tiers_getStarted: () => pricing_tiers_getstarted1,
	pricing_tiers_proFeature1: () => pricing_tiers_profeature11,
	pricing_tiers_proFeature2: () => pricing_tiers_profeature21,
	pricing_tiers_proFeature3: () => pricing_tiers_profeature31,
	pricing_tiers_proFeature4: () => pricing_tiers_profeature41,
	pricing_tiers_proFeature5: () => pricing_tiers_profeature51,
	pricing_tiers_proFeature6: () => pricing_tiers_profeature61,
	pricing_tiers_proName: () => pricing_tiers_proname1,
	pricing_tiers_proPeriod: () => pricing_tiers_properiod1,
	pricing_tiers_proPrice: () => pricing_tiers_proprice1,
	pricing_tiers_starterFeature1: () => pricing_tiers_starterfeature11,
	pricing_tiers_starterFeature2: () => pricing_tiers_starterfeature21,
	pricing_tiers_starterFeature3: () => pricing_tiers_starterfeature31,
	pricing_tiers_starterFeature4: () => pricing_tiers_starterfeature41,
	pricing_tiers_starterName: () => pricing_tiers_startername1,
	pricing_tiers_starterPeriod: () => pricing_tiers_starterperiod1,
	pricing_tiers_starterPrice: () => pricing_tiers_starterprice1,
	products_grid_cliDesc: () => products_grid_clidesc1,
	products_grid_cliName: () => products_grid_cliname1,
	products_grid_cliPrice: () => products_grid_cliprice1,
	products_grid_cloudDesc: () => products_grid_clouddesc1,
	products_grid_cloudName: () => products_grid_cloudname1,
	products_grid_cloudPrice: () => products_grid_cloudprice1,
	products_grid_enterpriseDesc: () => products_grid_enterprisedesc1,
	products_grid_enterpriseName: () => products_grid_enterprisename1,
	products_grid_enterprisePrice: () => products_grid_enterpriseprice1,
	products_grid_learnMore: () => products_grid_learnmore1,
	products_grid_migrationDesc: () => products_grid_migrationdesc1,
	products_grid_migrationName: () => products_grid_migrationname1,
	products_grid_migrationPrice: () => products_grid_migrationprice1,
	products_grid_optimizerDesc: () => products_grid_optimizerdesc1,
	products_grid_optimizerName: () => products_grid_optimizername1,
	products_grid_optimizerPrice: () => products_grid_optimizerprice1,
	products_grid_qaDesc: () => products_grid_qadesc1,
	products_grid_qaName: () => products_grid_qaname1,
	products_grid_qaPrice: () => products_grid_qaprice1,
	products_header_description: () => products_header_description,
	products_header_title: () => products_header_title,
	settings_apiAccess_apiKey: () => settings_apiaccess_apikey2,
	settings_apiAccess_copy: () => settings_apiaccess_copy1,
	settings_apiAccess_description: () => settings_apiaccess_description1,
	settings_apiAccess_title: () => settings_apiaccess_title1,
	settings_footer_cancel: () => settings_footer_cancel,
	settings_footer_saveChanges: () => settings_footer_savechanges1,
	settings_header_description: () => settings_header_description,
	settings_header_title: () => settings_header_title,
	settings_preferences_arabic: () => settings_preferences_arabic,
	settings_preferences_chinese: () => settings_preferences_chinese,
	settings_preferences_darkColorScheme: () => settings_preferences_darkcolorscheme2,
	settings_preferences_darkMode: () => settings_preferences_darkmode1,
	settings_preferences_defaultLanguage: () => settings_preferences_defaultlanguage1,
	settings_preferences_emailNotifications: () => settings_preferences_emailnotifications1,
	settings_preferences_english: () => settings_preferences_english,
	settings_preferences_french: () => settings_preferences_french,
	settings_preferences_german: () => settings_preferences_german,
	settings_preferences_japanese: () => settings_preferences_japanese,
	settings_preferences_spanish: () => settings_preferences_spanish,
	settings_preferences_title: () => settings_preferences_title,
	settings_preferences_toggleDarkMode: () => settings_preferences_toggledarkmode2,
	settings_preferences_toggleNotifications: () => settings_preferences_togglenotifications1,
	settings_preferences_weeklyReports: () => settings_preferences_weeklyreports1,
	settings_profile_displayName: () => settings_profile_displayname1,
	settings_profile_email: () => settings_profile_email,
	settings_profile_title: () => settings_profile_title,
	shared_appName: () => shared_appname1,
	shared_contactEmail: () => shared_contactemail1,
	shared_goToGithub: () => shared_gotogithub2,
	shared_siteName: () => shared_sitename1,
	team_grid_member1Bio: () => team_grid_member1bio1,
	team_grid_member1Name: () => team_grid_member1name1,
	team_grid_member1Role: () => team_grid_member1role1,
	team_grid_member2Bio: () => team_grid_member2bio1,
	team_grid_member2Name: () => team_grid_member2name1,
	team_grid_member2Role: () => team_grid_member2role1,
	team_grid_member3Bio: () => team_grid_member3bio1,
	team_grid_member3Name: () => team_grid_member3name1,
	team_grid_member3Role: () => team_grid_member3role1,
	team_grid_member4Bio: () => team_grid_member4bio1,
	team_grid_member4Name: () => team_grid_member4name1,
	team_grid_member4Role: () => team_grid_member4role1,
	team_grid_member5Bio: () => team_grid_member5bio1,
	team_grid_member5Name: () => team_grid_member5name1,
	team_grid_member5Role: () => team_grid_member5role1,
	team_grid_member6Bio: () => team_grid_member6bio1,
	team_grid_member6Name: () => team_grid_member6name1,
	team_grid_member6Role: () => team_grid_member6role1,
	team_header_description: () => team_header_description,
	team_header_title: () => team_header_title,
	themeToggle_auto: () => themetoggle_auto1,
	themeToggle_dark: () => themetoggle_dark1,
	themeToggle_labelAuto: () => themetoggle_labelauto2,
	themeToggle_labelOther: () => themetoggle_labelother2,
	themeToggle_light: () => themetoggle_light1
});
var messages_exports = __exportAll({
	about_grid_methodologyDesc: () => about_grid_methodologydesc1,
	about_grid_methodologyTitle: () => about_grid_methodologytitle1,
	about_grid_whyExistsDesc: () => about_grid_whyexistsdesc2,
	about_grid_whyExistsTitle: () => about_grid_whyexiststitle2,
	about_header_description: () => about_header_description,
	about_header_title: () => about_header_title,
	about_whatWeMeasure_bundleSizeImpact: () => about_whatwemeasure_bundlesizeimpact4,
	about_whatWeMeasure_bundleSizeImpactDesc: () => about_whatwemeasure_bundlesizeimpactdesc5,
	about_whatWeMeasure_hydrationCost: () => about_whatwemeasure_hydrationcost3,
	about_whatWeMeasure_hydrationCostDesc: () => about_whatwemeasure_hydrationcostdesc4,
	about_whatWeMeasure_lazyLoading: () => about_whatwemeasure_lazyloading3,
	about_whatWeMeasure_lazyLoadingDesc: () => about_whatwemeasure_lazyloadingdesc4,
	about_whatWeMeasure_localeSwitch: () => about_whatwemeasure_localeswitch3,
	about_whatWeMeasure_localeSwitchDesc: () => about_whatwemeasure_localeswitchdesc4,
	about_whatWeMeasure_renderingOverhead: () => about_whatwemeasure_renderingoverhead3,
	about_whatWeMeasure_renderingOverheadDesc: () => about_whatwemeasure_renderingoverheaddesc4,
	about_whatWeMeasure_title: () => about_whatwemeasure_title2,
	blog_header_description: () => blog_header_description,
	blog_header_title: () => blog_header_title,
	blog_list_post1Category: () => blog_list_post1category1,
	blog_list_post1Date: () => blog_list_post1date1,
	blog_list_post1Excerpt: () => blog_list_post1excerpt1,
	blog_list_post1Title: () => blog_list_post1title1,
	blog_list_post2Category: () => blog_list_post2category1,
	blog_list_post2Date: () => blog_list_post2date1,
	blog_list_post2Excerpt: () => blog_list_post2excerpt1,
	blog_list_post2Title: () => blog_list_post2title1,
	blog_list_post3Category: () => blog_list_post3category1,
	blog_list_post3Date: () => blog_list_post3date1,
	blog_list_post3Excerpt: () => blog_list_post3excerpt1,
	blog_list_post3Title: () => blog_list_post3title1,
	blog_list_post4Category: () => blog_list_post4category1,
	blog_list_post4Date: () => blog_list_post4date1,
	blog_list_post4Excerpt: () => blog_list_post4excerpt1,
	blog_list_post4Title: () => blog_list_post4title1,
	blog_list_post5Category: () => blog_list_post5category1,
	blog_list_post5Date: () => blog_list_post5date1,
	blog_list_post5Excerpt: () => blog_list_post5excerpt1,
	blog_list_post5Title: () => blog_list_post5title1,
	blog_list_post6Category: () => blog_list_post6category1,
	blog_list_post6Date: () => blog_list_post6date1,
	blog_list_post6Excerpt: () => blog_list_post6excerpt1,
	blog_list_post6Title: () => blog_list_post6title1,
	blog_list_readMore: () => blog_list_readmore1,
	careers_benefits_ossLabel: () => careers_benefits_osslabel1,
	careers_benefits_ossValue: () => careers_benefits_ossvalue1,
	careers_benefits_payLabel: () => careers_benefits_paylabel1,
	careers_benefits_payValue: () => careers_benefits_payvalue1,
	careers_benefits_remoteLabel: () => careers_benefits_remotelabel1,
	careers_benefits_remoteValue: () => careers_benefits_remotevalue1,
	careers_header_description: () => careers_header_description,
	careers_header_title: () => careers_header_title,
	careers_openPositions_applyNow: () => careers_openpositions_applynow2,
	careers_openPositions_backendDesc: () => careers_openpositions_backenddesc2,
	careers_openPositions_backendTitle: () => careers_openpositions_backendtitle2,
	careers_openPositions_community: () => careers_openpositions_community1,
	careers_openPositions_devrelDesc: () => careers_openpositions_devreldesc2,
	careers_openPositions_devrelTitle: () => careers_openpositions_devreltitle2,
	careers_openPositions_documentation: () => careers_openpositions_documentation1,
	careers_openPositions_engineering: () => careers_openpositions_engineering1,
	careers_openPositions_frontendDesc: () => careers_openpositions_frontenddesc2,
	careers_openPositions_frontendTitle: () => careers_openpositions_frontendtitle2,
	careers_openPositions_fullTime: () => careers_openpositions_fulltime2,
	careers_openPositions_partTime: () => careers_openpositions_parttime2,
	careers_openPositions_qaDesc: () => careers_openpositions_qadesc2,
	careers_openPositions_qaTitle: () => careers_openpositions_qatitle2,
	careers_openPositions_remote: () => careers_openpositions_remote1,
	careers_openPositions_sfRemote: () => careers_openpositions_sfremote2,
	careers_openPositions_title: () => careers_openpositions_title1,
	careers_openPositions_writerDesc: () => careers_openpositions_writerdesc2,
	careers_openPositions_writerTitle: () => careers_openpositions_writertitle2,
	contact_form_bugReport: () => contact_form_bugreport1,
	contact_form_contribution: () => contact_form_contribution,
	contact_form_email: () => contact_form_email,
	contact_form_emailPlaceholder: () => contact_form_emailplaceholder1,
	contact_form_message: () => contact_form_message,
	contact_form_messagePlaceholder: () => contact_form_messageplaceholder1,
	contact_form_methodologyQuestion: () => contact_form_methodologyquestion1,
	contact_form_name: () => contact_form_name,
	contact_form_newBenchmarkIdea: () => contact_form_newbenchmarkidea2,
	contact_form_other: () => contact_form_other,
	contact_form_sendMessage: () => contact_form_sendmessage1,
	contact_form_topic: () => contact_form_topic,
	contact_form_yourName: () => contact_form_yourname1,
	contact_header_description: () => contact_header_description,
	contact_header_title: () => contact_header_title,
	faq_header_description: () => faq_header_description,
	faq_header_title: () => faq_header_title,
	faq_list_a1: () => faq_list_a1,
	faq_list_a2: () => faq_list_a2,
	faq_list_a3: () => faq_list_a3,
	faq_list_a4: () => faq_list_a4,
	faq_list_a5: () => faq_list_a5,
	faq_list_a6: () => faq_list_a6,
	faq_list_a7: () => faq_list_a7,
	faq_list_a8: () => faq_list_a8,
	faq_list_q1: () => faq_list_q1,
	faq_list_q2: () => faq_list_q2,
	faq_list_q3: () => faq_list_q3,
	faq_list_q4: () => faq_list_q4,
	faq_list_q5: () => faq_list_q5,
	faq_list_q6: () => faq_list_q6,
	faq_list_q7: () => faq_list_q7,
	faq_list_q8: () => faq_list_q8,
	footer_builtWith: () => footer_builtwith1,
	footer_contact: () => footer_contact,
	footer_contributing: () => footer_contributing,
	footer_description: () => footer_description,
	footer_github: () => footer_github,
	footer_methodology: () => footer_methodology,
	footer_resources: () => footer_resources,
	footer_title: () => footer_title,
	header_blog: () => header_blog,
	header_careers: () => header_careers,
	header_contact: () => header_contact,
	header_faq: () => header_faq,
	header_home: () => header_home,
	header_methodology: () => header_methodology,
	header_mockPages: () => header_mockpages1,
	header_pricing: () => header_pricing,
	header_products: () => header_products,
	header_settings: () => header_settings,
	header_team: () => header_team,
	home_hero_description: () => home_hero_description,
	home_hero_methodology: () => home_hero_methodology,
	home_hero_title: () => home_hero_title,
	home_hero_viewResults: () => home_hero_viewresults1,
	home_resultsTable_builtIn: () => home_resultstable_builtin2,
	home_resultsTable_bundleSize: () => home_resultstable_bundlesize2,
	home_resultsTable_lazyLoading: () => home_resultstable_lazyloading2,
	home_resultsTable_library: () => home_resultstable_library1,
	home_resultsTable_lookupTime: () => home_resultstable_lookuptime2,
	home_resultsTable_manual: () => home_resultstable_manual1,
	home_resultsTable_title: () => home_resultstable_title1,
	home_resultsTable_yes: () => home_resultstable_yes1,
	home_understandingImpact_cacheDesc: () => home_understandingimpact_cachedesc2,
	home_understandingImpact_cacheLabel: () => home_understandingimpact_cachelabel2,
	home_understandingImpact_foucDesc: () => home_understandingimpact_foucdesc2,
	home_understandingImpact_foucLabel: () => home_understandingimpact_fouclabel2,
	home_understandingImpact_measuresDesc: () => home_understandingimpact_measuresdesc2,
	home_understandingImpact_measuresTitle: () => home_understandingimpact_measurestitle2,
	home_understandingImpact_singleJsonBullet1: () => home_understandingimpact_singlejsonbullet13,
	home_understandingImpact_singleJsonBullet2: () => home_understandingimpact_singlejsonbullet23,
	home_understandingImpact_singleJsonBullet3: () => home_understandingimpact_singlejsonbullet33,
	home_understandingImpact_singleJsonIntro: () => home_understandingimpact_singlejsonintro3,
	home_understandingImpact_singleJsonTitle: () => home_understandingimpact_singlejsontitle3,
	home_understandingImpact_title: () => home_understandingimpact_title1,
	home_understandingImpact_tradeOffsIntro: () => home_understandingimpact_tradeoffsintro3,
	home_understandingImpact_tradeOffsTitle: () => home_understandingimpact_tradeoffstitle3,
	home_understandingImpact_waterfallDesc: () => home_understandingimpact_waterfalldesc2,
	home_understandingImpact_waterfallLabel: () => home_understandingimpact_waterfalllabel2,
	home_whyItMatters_bundleSizeDesc: () => home_whyitmatters_bundlesizedesc4,
	home_whyItMatters_bundleSizeTitle: () => home_whyitmatters_bundlesizetitle4,
	home_whyItMatters_dynamicLoadingDesc: () => home_whyitmatters_dynamicloadingdesc4,
	home_whyItMatters_dynamicLoadingTitle: () => home_whyitmatters_dynamicloadingtitle4,
	home_whyItMatters_renderingDesc: () => home_whyitmatters_renderingdesc3,
	home_whyItMatters_renderingTitle: () => home_whyitmatters_renderingtitle3,
	home_whyItMatters_title: () => home_whyitmatters_title2,
	m: () => _index_exports,
	mockBanner: () => mockbanner1,
	notFound_description: () => notfound_description1,
	notFound_returnHome: () => notfound_returnhome2,
	notFound_title: () => notfound_title1,
	pricing_header_description: () => pricing_header_description,
	pricing_header_title: () => pricing_header_title,
	pricing_tiers_contactSales: () => pricing_tiers_contactsales1,
	pricing_tiers_enterpriseFeature1: () => pricing_tiers_enterprisefeature11,
	pricing_tiers_enterpriseFeature2: () => pricing_tiers_enterprisefeature21,
	pricing_tiers_enterpriseFeature3: () => pricing_tiers_enterprisefeature31,
	pricing_tiers_enterpriseFeature4: () => pricing_tiers_enterprisefeature41,
	pricing_tiers_enterpriseFeature5: () => pricing_tiers_enterprisefeature51,
	pricing_tiers_enterpriseFeature6: () => pricing_tiers_enterprisefeature61,
	pricing_tiers_enterpriseFeature7: () => pricing_tiers_enterprisefeature71,
	pricing_tiers_enterpriseName: () => pricing_tiers_enterprisename1,
	pricing_tiers_enterprisePrice: () => pricing_tiers_enterpriseprice1,
	pricing_tiers_getStarted: () => pricing_tiers_getstarted1,
	pricing_tiers_proFeature1: () => pricing_tiers_profeature11,
	pricing_tiers_proFeature2: () => pricing_tiers_profeature21,
	pricing_tiers_proFeature3: () => pricing_tiers_profeature31,
	pricing_tiers_proFeature4: () => pricing_tiers_profeature41,
	pricing_tiers_proFeature5: () => pricing_tiers_profeature51,
	pricing_tiers_proFeature6: () => pricing_tiers_profeature61,
	pricing_tiers_proName: () => pricing_tiers_proname1,
	pricing_tiers_proPeriod: () => pricing_tiers_properiod1,
	pricing_tiers_proPrice: () => pricing_tiers_proprice1,
	pricing_tiers_starterFeature1: () => pricing_tiers_starterfeature11,
	pricing_tiers_starterFeature2: () => pricing_tiers_starterfeature21,
	pricing_tiers_starterFeature3: () => pricing_tiers_starterfeature31,
	pricing_tiers_starterFeature4: () => pricing_tiers_starterfeature41,
	pricing_tiers_starterName: () => pricing_tiers_startername1,
	pricing_tiers_starterPeriod: () => pricing_tiers_starterperiod1,
	pricing_tiers_starterPrice: () => pricing_tiers_starterprice1,
	products_grid_cliDesc: () => products_grid_clidesc1,
	products_grid_cliName: () => products_grid_cliname1,
	products_grid_cliPrice: () => products_grid_cliprice1,
	products_grid_cloudDesc: () => products_grid_clouddesc1,
	products_grid_cloudName: () => products_grid_cloudname1,
	products_grid_cloudPrice: () => products_grid_cloudprice1,
	products_grid_enterpriseDesc: () => products_grid_enterprisedesc1,
	products_grid_enterpriseName: () => products_grid_enterprisename1,
	products_grid_enterprisePrice: () => products_grid_enterpriseprice1,
	products_grid_learnMore: () => products_grid_learnmore1,
	products_grid_migrationDesc: () => products_grid_migrationdesc1,
	products_grid_migrationName: () => products_grid_migrationname1,
	products_grid_migrationPrice: () => products_grid_migrationprice1,
	products_grid_optimizerDesc: () => products_grid_optimizerdesc1,
	products_grid_optimizerName: () => products_grid_optimizername1,
	products_grid_optimizerPrice: () => products_grid_optimizerprice1,
	products_grid_qaDesc: () => products_grid_qadesc1,
	products_grid_qaName: () => products_grid_qaname1,
	products_grid_qaPrice: () => products_grid_qaprice1,
	products_header_description: () => products_header_description,
	products_header_title: () => products_header_title,
	settings_apiAccess_apiKey: () => settings_apiaccess_apikey2,
	settings_apiAccess_copy: () => settings_apiaccess_copy1,
	settings_apiAccess_description: () => settings_apiaccess_description1,
	settings_apiAccess_title: () => settings_apiaccess_title1,
	settings_footer_cancel: () => settings_footer_cancel,
	settings_footer_saveChanges: () => settings_footer_savechanges1,
	settings_header_description: () => settings_header_description,
	settings_header_title: () => settings_header_title,
	settings_preferences_arabic: () => settings_preferences_arabic,
	settings_preferences_chinese: () => settings_preferences_chinese,
	settings_preferences_darkColorScheme: () => settings_preferences_darkcolorscheme2,
	settings_preferences_darkMode: () => settings_preferences_darkmode1,
	settings_preferences_defaultLanguage: () => settings_preferences_defaultlanguage1,
	settings_preferences_emailNotifications: () => settings_preferences_emailnotifications1,
	settings_preferences_english: () => settings_preferences_english,
	settings_preferences_french: () => settings_preferences_french,
	settings_preferences_german: () => settings_preferences_german,
	settings_preferences_japanese: () => settings_preferences_japanese,
	settings_preferences_spanish: () => settings_preferences_spanish,
	settings_preferences_title: () => settings_preferences_title,
	settings_preferences_toggleDarkMode: () => settings_preferences_toggledarkmode2,
	settings_preferences_toggleNotifications: () => settings_preferences_togglenotifications1,
	settings_preferences_weeklyReports: () => settings_preferences_weeklyreports1,
	settings_profile_displayName: () => settings_profile_displayname1,
	settings_profile_email: () => settings_profile_email,
	settings_profile_title: () => settings_profile_title,
	shared_appName: () => shared_appname1,
	shared_contactEmail: () => shared_contactemail1,
	shared_goToGithub: () => shared_gotogithub2,
	shared_siteName: () => shared_sitename1,
	team_grid_member1Bio: () => team_grid_member1bio1,
	team_grid_member1Name: () => team_grid_member1name1,
	team_grid_member1Role: () => team_grid_member1role1,
	team_grid_member2Bio: () => team_grid_member2bio1,
	team_grid_member2Name: () => team_grid_member2name1,
	team_grid_member2Role: () => team_grid_member2role1,
	team_grid_member3Bio: () => team_grid_member3bio1,
	team_grid_member3Name: () => team_grid_member3name1,
	team_grid_member3Role: () => team_grid_member3role1,
	team_grid_member4Bio: () => team_grid_member4bio1,
	team_grid_member4Name: () => team_grid_member4name1,
	team_grid_member4Role: () => team_grid_member4role1,
	team_grid_member5Bio: () => team_grid_member5bio1,
	team_grid_member5Name: () => team_grid_member5name1,
	team_grid_member5Role: () => team_grid_member5role1,
	team_grid_member6Bio: () => team_grid_member6bio1,
	team_grid_member6Name: () => team_grid_member6name1,
	team_grid_member6Role: () => team_grid_member6role1,
	team_header_description: () => team_header_description,
	team_header_title: () => team_header_title,
	themeToggle_auto: () => themetoggle_auto1,
	themeToggle_dark: () => themetoggle_dark1,
	themeToggle_labelAuto: () => themetoggle_labelauto2,
	themeToggle_labelOther: () => themetoggle_labelother2,
	themeToggle_light: () => themetoggle_light1
});
var _tmpl$ = template(`<div class="mx-auto max-w-3xl space-y-4">`), _tmpl$2 = template(`<details class="group rounded-lg border border-border bg-card"><summary class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"></summary><p class="px-6 pb-4 text-sm text-muted-foreground">`);
function FAQList() {
	const faqs = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map((i) => ({
		q: messages_exports[`faq_list_q${i}`]?.(),
		a: messages_exports[`faq_list_a${i}`]?.()
	}));
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: faqs,
			children: (f) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
				insert(_el$3, () => f.q);
				insert(_el$4, () => f.a);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { FAQList as default };

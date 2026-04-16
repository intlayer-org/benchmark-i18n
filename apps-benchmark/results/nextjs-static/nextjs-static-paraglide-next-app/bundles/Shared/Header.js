import { Profiler, useEffect, useLayoutEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import NextLink from "next/link";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
var Link = ({ href, children, ...props }) => {
	const currentLocale = useParams().locale ?? "en";
	const isExternalLink = checkIsExternalLink(href.toString());
	return jsx(NextLink, {
		href: href && !isExternalLink && !href.toString().startsWith(`/${currentLocale}`) ? `/${currentLocale}${href}` : href,
		...props,
		children
	});
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
	return `Startseite`;
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
	return `홈`;
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
	return `方法論`;
};
var ko_header_methodology = () => {
	return `방법론`;
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
	return `Pages de test`;
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
	return `Páginas de teste`;
};
var zh_header_mockpages1 = () => {
	return `模拟页面`;
};
var ja_header_mockpages1 = () => {
	return `モックページ`;
};
var ko_header_mockpages1 = () => {
	return `모의 페이지`;
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
	return `제품`;
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
	return `料金`;
};
var ko_header_pricing = () => {
	return `요금`;
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
	return `팀`;
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
	return `블로그`;
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
	return `职业生涯`;
};
var ja_header_careers = () => {
	return `採用情報`;
};
var ko_header_careers = () => {
	return `채용`;
};
var ru_header_careers = () => {
	return `Карьера`;
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
	return `문의하기`;
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
	return `설정`;
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
var en_header_gotogithub2 = () => {
	return `Go to GitHub`;
};
var fr_header_gotogithub2 = () => {
	return `Aller sur GitHub`;
};
var es_header_gotogithub2 = () => {
	return `Ir a GitHub`;
};
var de_header_gotogithub2 = () => {
	return `Zu GitHub`;
};
var it_header_gotogithub2 = () => {
	return `Vai su GitHub`;
};
var pt_header_gotogithub2 = () => {
	return `Ir para GitHub`;
};
var zh_header_gotogithub2 = () => {
	return `访问 GitHub`;
};
var ja_header_gotogithub2 = () => {
	return `GitHubへ`;
};
var ko_header_gotogithub2 = () => {
	return `GitHub으로 이동`;
};
var ru_header_gotogithub2 = () => {
	return `Перейти на GitHub`;
};
var header_gotogithub2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_gotogithub2(inputs);
	if (locale === "fr") return fr_header_gotogithub2(inputs);
	if (locale === "es") return es_header_gotogithub2(inputs);
	if (locale === "de") return de_header_gotogithub2(inputs);
	if (locale === "it") return it_header_gotogithub2(inputs);
	if (locale === "pt") return pt_header_gotogithub2(inputs);
	if (locale === "zh") return zh_header_gotogithub2(inputs);
	if (locale === "ja") return ja_header_gotogithub2(inputs);
	if (locale === "ko") return ko_header_gotogithub2(inputs);
	return ru_header_gotogithub2(inputs);
});
var en_theme_toggle_thememodeautosystemclick4 = () => {
	return `Theme mode: auto (system). Click to switch to light mode.`;
};
var fr_theme_toggle_thememodeautosystemclick4 = () => {
	return `Mode thématique : auto (système). Cliquez pour passer en mode clair.`;
};
var es_theme_toggle_thememodeautosystemclick4 = () => {
	return `Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.`;
};
var de_theme_toggle_thememodeautosystemclick4 = () => {
	return `Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.`;
};
var it_theme_toggle_thememodeautosystemclick4 = () => {
	return `Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.`;
};
var pt_theme_toggle_thememodeautosystemclick4 = () => {
	return `Modo de tema: automático (sistema). Clique para mudar para o modo claro.`;
};
var zh_theme_toggle_thememodeautosystemclick4 = () => {
	return `主题模式：自动（系统）。点击切换到明亮模式。`;
};
var ja_theme_toggle_thememodeautosystemclick4 = () => {
	return `テーマモード：自動（システム）。クリックしてライトモードに切り替えます。`;
};
var ko_theme_toggle_thememodeautosystemclick4 = () => {
	return `테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.`;
};
var ru_theme_toggle_thememodeautosystemclick4 = () => {
	return `Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.`;
};
var theme_toggle_thememodeautosystemclick4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "fr") return fr_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "es") return es_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "de") return de_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "it") return it_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "pt") return pt_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "zh") return zh_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "ja") return ja_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "ko") return ko_theme_toggle_thememodeautosystemclick4(inputs);
	return ru_theme_toggle_thememodeautosystemclick4(inputs);
});
var en_theme_toggle_thememodelightclick3 = () => {
	return `Theme mode: light. Click to switch to dark mode.`;
};
var fr_theme_toggle_thememodelightclick3 = () => {
	return `Mode thématique : clair. Cliquez pour passer en mode sombre.`;
};
var es_theme_toggle_thememodelightclick3 = () => {
	return `Modo de tema: claro. Haz clic para cambiar al modo oscuro.`;
};
var de_theme_toggle_thememodelightclick3 = () => {
	return `Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.`;
};
var it_theme_toggle_thememodelightclick3 = () => {
	return `Modalità tema: chiara. Clicca per passare alla modalità scura.`;
};
var pt_theme_toggle_thememodelightclick3 = () => {
	return `Modo de tema: claro. Clique para mudar para o modo escuro.`;
};
var zh_theme_toggle_thememodelightclick3 = () => {
	return `主题模式：明亮。点击切换到暗黑模式。`;
};
var ja_theme_toggle_thememodelightclick3 = () => {
	return `テーマモード：ライト。クリックしてダークモードに切り替えます。`;
};
var ko_theme_toggle_thememodelightclick3 = () => {
	return `테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.`;
};
var ru_theme_toggle_thememodelightclick3 = () => {
	return `Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.`;
};
var theme_toggle_thememodelightclick3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_thememodelightclick3(inputs);
	if (locale === "fr") return fr_theme_toggle_thememodelightclick3(inputs);
	if (locale === "es") return es_theme_toggle_thememodelightclick3(inputs);
	if (locale === "de") return de_theme_toggle_thememodelightclick3(inputs);
	if (locale === "it") return it_theme_toggle_thememodelightclick3(inputs);
	if (locale === "pt") return pt_theme_toggle_thememodelightclick3(inputs);
	if (locale === "zh") return zh_theme_toggle_thememodelightclick3(inputs);
	if (locale === "ja") return ja_theme_toggle_thememodelightclick3(inputs);
	if (locale === "ko") return ko_theme_toggle_thememodelightclick3(inputs);
	return ru_theme_toggle_thememodelightclick3(inputs);
});
var en_theme_toggle_thememodedarkclick3 = () => {
	return `Theme mode: dark. Click to switch to auto (system) mode.`;
};
var fr_theme_toggle_thememodedarkclick3 = () => {
	return `Mode thématique : sombre. Cliquez pour passer en mode auto (système).`;
};
var es_theme_toggle_thememodedarkclick3 = () => {
	return `Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).`;
};
var de_theme_toggle_thememodedarkclick3 = () => {
	return `Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.`;
};
var it_theme_toggle_thememodedarkclick3 = () => {
	return `Modalità tema: scura. Clicca per passare alla modalità auto (sistema).`;
};
var pt_theme_toggle_thememodedarkclick3 = () => {
	return `Modo de tema: escuro. Clique para mudar para o modo automático (sistema).`;
};
var zh_theme_toggle_thememodedarkclick3 = () => {
	return `主题模式：暗黑。点击切换到自动（系统）模式。`;
};
var ja_theme_toggle_thememodedarkclick3 = () => {
	return `テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。`;
};
var ko_theme_toggle_thememodedarkclick3 = () => {
	return `테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.`;
};
var ru_theme_toggle_thememodedarkclick3 = () => {
	return `Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.`;
};
var theme_toggle_thememodedarkclick3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "fr") return fr_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "es") return es_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "de") return de_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "it") return it_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "pt") return pt_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "zh") return zh_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "ja") return ja_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "ko") return ko_theme_toggle_thememodedarkclick3(inputs);
	return ru_theme_toggle_thememodedarkclick3(inputs);
});
var en_theme_toggle_themeauto1 = () => {
	return `Theme: Auto`;
};
var fr_theme_toggle_themeauto1 = () => {
	return `Thème : Auto`;
};
var es_theme_toggle_themeauto1 = () => {
	return `Tema: Auto`;
};
var de_theme_toggle_themeauto1 = () => {
	return `Thema: Auto`;
};
var it_theme_toggle_themeauto1 = () => {
	return `Tema: Auto`;
};
var pt_theme_toggle_themeauto1 = () => {
	return `Tema: Auto`;
};
var zh_theme_toggle_themeauto1 = () => {
	return `主题：自动`;
};
var ja_theme_toggle_themeauto1 = () => {
	return `テーマ：自動`;
};
var ko_theme_toggle_themeauto1 = () => {
	return `테마: 자동`;
};
var ru_theme_toggle_themeauto1 = () => {
	return `Тема: Авто`;
};
var theme_toggle_themeauto1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_themeauto1(inputs);
	if (locale === "fr") return fr_theme_toggle_themeauto1(inputs);
	if (locale === "es") return es_theme_toggle_themeauto1(inputs);
	if (locale === "de") return de_theme_toggle_themeauto1(inputs);
	if (locale === "it") return it_theme_toggle_themeauto1(inputs);
	if (locale === "pt") return pt_theme_toggle_themeauto1(inputs);
	if (locale === "zh") return zh_theme_toggle_themeauto1(inputs);
	if (locale === "ja") return ja_theme_toggle_themeauto1(inputs);
	if (locale === "ko") return ko_theme_toggle_themeauto1(inputs);
	return ru_theme_toggle_themeauto1(inputs);
});
var en_theme_toggle_themedark1 = () => {
	return `Theme: Dark`;
};
var fr_theme_toggle_themedark1 = () => {
	return `Thème : Sombre`;
};
var es_theme_toggle_themedark1 = () => {
	return `Tema: Oscuro`;
};
var de_theme_toggle_themedark1 = () => {
	return `Thema: Dunkel`;
};
var it_theme_toggle_themedark1 = () => {
	return `Tema: Scuro`;
};
var pt_theme_toggle_themedark1 = () => {
	return `Tema: Escuro`;
};
var zh_theme_toggle_themedark1 = () => {
	return `主题：暗黑`;
};
var ja_theme_toggle_themedark1 = () => {
	return `テーマ：ダーク`;
};
var ko_theme_toggle_themedark1 = () => {
	return `테마: 다크`;
};
var ru_theme_toggle_themedark1 = () => {
	return `Тема: Темная`;
};
var theme_toggle_themedark1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_themedark1(inputs);
	if (locale === "fr") return fr_theme_toggle_themedark1(inputs);
	if (locale === "es") return es_theme_toggle_themedark1(inputs);
	if (locale === "de") return de_theme_toggle_themedark1(inputs);
	if (locale === "it") return it_theme_toggle_themedark1(inputs);
	if (locale === "pt") return pt_theme_toggle_themedark1(inputs);
	if (locale === "zh") return zh_theme_toggle_themedark1(inputs);
	if (locale === "ja") return ja_theme_toggle_themedark1(inputs);
	if (locale === "ko") return ko_theme_toggle_themedark1(inputs);
	return ru_theme_toggle_themedark1(inputs);
});
var en_theme_toggle_themelight1 = () => {
	return `Theme: Light`;
};
var fr_theme_toggle_themelight1 = () => {
	return `Thème : Clair`;
};
var es_theme_toggle_themelight1 = () => {
	return `Tema: Claro`;
};
var de_theme_toggle_themelight1 = () => {
	return `Thema: Hell`;
};
var it_theme_toggle_themelight1 = () => {
	return `Tema: Chiaro`;
};
var pt_theme_toggle_themelight1 = () => {
	return `Tema: Claro`;
};
var zh_theme_toggle_themelight1 = () => {
	return `主题：明亮`;
};
var ja_theme_toggle_themelight1 = () => {
	return `テーマ：ライト`;
};
var ko_theme_toggle_themelight1 = () => {
	return `테마: 라이트`;
};
var ru_theme_toggle_themelight1 = () => {
	return `Тема: Светлая`;
};
var theme_toggle_themelight1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_themelight1(inputs);
	if (locale === "fr") return fr_theme_toggle_themelight1(inputs);
	if (locale === "es") return es_theme_toggle_themelight1(inputs);
	if (locale === "de") return de_theme_toggle_themelight1(inputs);
	if (locale === "it") return it_theme_toggle_themelight1(inputs);
	if (locale === "pt") return pt_theme_toggle_themelight1(inputs);
	if (locale === "zh") return zh_theme_toggle_themelight1(inputs);
	if (locale === "ja") return ja_theme_toggle_themelight1(inputs);
	if (locale === "ko") return ko_theme_toggle_themelight1(inputs);
	return ru_theme_toggle_themelight1(inputs);
});
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
	return jsx("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: mode === "auto" ? theme_toggle_themeauto1() : mode === "dark" ? theme_toggle_themedark1() : theme_toggle_themelight1()
	});
}
function LocaleSwitcher() {
	const locale = useParams().locale ?? "en";
	const pathname = usePathname();
	const router = useRouter();
	const getLocaleName = (l) => {
		try {
			const name = new Intl.DisplayNames([l], { type: "language" }).of(l);
			return name ? name.charAt(0).toUpperCase() + name.slice(1) : l;
		} catch (e) {
			return l.toUpperCase();
		}
	};
	const handleLocaleChange = (newLocale) => {
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
	};
	return jsx("div", {
		className: "flex items-center gap-2",
		children: jsx("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((l) => jsx("option", {
				value: l,
				children: getLocaleName(l)
			}, l))
		})
	});
}
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	useLayoutEffect(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	}, [name]);
}
function Header() {
	usePerformanceMeasure("Header");
	const [isMockPagesOpen, setIsMockPagesOpen] = useState(false);
	const currentLocale = useParams().locale ?? "en";
	const pathname = usePathname();
	const mockPages = [
		{
			href: "/products",
			label: header_products()
		},
		{
			href: "/pricing",
			label: header_pricing()
		},
		{
			href: "/team",
			label: header_team()
		},
		{
			href: "/blog",
			label: header_blog()
		},
		{
			href: "/careers",
			label: header_careers()
		},
		{
			href: "/faq",
			label: header_faq()
		},
		{
			href: "/contact",
			label: header_contact()
		},
		{
			href: "/settings",
			label: header_settings()
		}
	];
	const isExactActive = (href) => pathname === href;
	const isActive = (href) => pathname.startsWith(href);
	return jsx("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: jsxs("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [jsxs("div", {
				className: "flex items-center gap-8",
				children: [jsx(Link, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), jsxs("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						jsx(Link, {
							href: "/",
							className: `nav-link${isExactActive(`/${currentLocale}`) ? " is-active" : ""}`,
							children: header_home()
						}),
						jsx(Link, {
							href: "/about",
							className: `nav-link${isActive(`/${currentLocale}/about`) ? " is-active" : ""}`,
							children: header_methodology()
						}),
						jsxs("div", {
							className: "relative",
							children: [jsxs("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								onClick: () => setIsMockPagesOpen(!isMockPagesOpen),
								children: [header_mockpages1(), jsx(ChevronDown, {
									size: 14,
									className: `transition-transform ${isMockPagesOpen ? "rotate-180" : ""}`
								})]
							}), isMockPagesOpen && jsx("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								children: jsx("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: mockPages.map((page) => jsx(Link, {
										href: page.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => setIsMockPagesOpen(false),
										children: page.label
									}, page.href))
								})
							})]
						})
					]
				})]
			}), jsxs("div", {
				className: "flex items-center gap-4",
				children: [
					jsxs("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [jsx("span", {
							className: "sr-only",
							children: header_gotogithub2()
						}), jsx("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: jsx("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					jsx(LocaleSwitcher, {}),
					jsx(ThemeToggle, {})
				]
			})]
		})
	});
}
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
function onRenderCallback(id, phase, actualDuration) {
	if (typeof window === "undefined") return;
	if (phase === "nested-update") return;
	try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
		window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
		window.__RENDER_METRICS__[id].push(actualDuration);
	} catch (err) {
		console.warn("onRenderCallback failed:", err);
	}
}
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	useEffect(() => {
		setLocale(locale);
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children
	});
}
function Wrapper({ children }) {
	return jsx(AppProviders, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(Header, {}) });
}
export { Wrapped as default };

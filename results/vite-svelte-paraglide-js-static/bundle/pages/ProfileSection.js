import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
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
var root = $.from_html(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"> </h2> <div class="space-y-4"><div><label for="settings-display-name" class="mb-1 block text-sm font-medium text-foreground"> </label> <input id="settings-display-name" value="John Developer" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div> <div><label for="settings-email" class="mb-1 block text-sm font-medium text-foreground"> </label> <input id="settings-email" value="john@example.com" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div></div></section>`);
function ProfileSection($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var div_1 = $.child(div);
	var label = $.child(div_1);
	var text_1 = $.child(label, true);
	$.reset(label);
	$.sibling(label, 2);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var label_1 = $.child(div_2);
	var text_2 = $.child(label_1, true);
	$.reset(label_1);
	$.sibling(label_1, 2);
	$.reset(div_2);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
	}, [
		() => settings_profile_title(),
		() => settings_profile_displayname1(),
		() => settings_profile_email()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { ProfileSection as default };

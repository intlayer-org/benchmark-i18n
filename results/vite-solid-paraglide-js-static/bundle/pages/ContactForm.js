import { effect, insert, setAttribute, template } from "solid-js/web";
import { createUniqueId } from "solid-js";
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
	throw new Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
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
		clearLocaleCookieCache();
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
var getUrlOrigin = () => {
	if (serverAsyncLocalStorage) return serverAsyncLocalStorage.getStore()?.origin ?? "http://fallback.com";
	else if (typeof window !== "undefined") return window.location.origin;
	return "http://fallback.com";
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
function normalizeTrailingSlash(url) {
	return url;
}
function execUrlPattern(pattern, url) {
	return pattern.exec(url.href);
}
var cookieNamePattern = cookieName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var localeCookiePattern = new RegExp(`(?:^|;\\s*)${cookieNamePattern}=([^;]*)`);
var noCachedLocale = Symbol();
var cachedLocaleFromCookie = noCachedLocale;
function clearLocaleCookieCache() {
	cachedLocaleFromCookie = noCachedLocale;
}
function scheduleLocaleCookieCacheClear() {
	if (typeof queueMicrotask === "function") queueMicrotask(clearLocaleCookieCache);
	else Promise.resolve().then(clearLocaleCookieCache);
}
function extractLocaleFromCookie() {
	if (typeof document === "undefined") return;
	if (cachedLocaleFromCookie !== noCachedLocale) return cachedLocaleFromCookie;
	const locale = document.cookie.match(localeCookiePattern)?.[1];
	cachedLocaleFromCookie = toLocale(locale);
	scheduleLocaleCookieCacheClear();
	return cachedLocaleFromCookie;
}
function deLocalizeUrl(url) {
	return deLocalizeUrlDefaultPattern(url);
}
function deLocalizeUrlDefaultPattern(url) {
	const urlObj = normalizeTrailingSlash(typeof url === "string" ? new URL(url, getUrlOrigin()) : new URL(url));
	const pathSegments = urlObj.pathname.split("/").filter(Boolean);
	if (pathSegments.length > 0 && toLocale(pathSegments[0])) urlObj.pathname = "/" + pathSegments.slice(1).join("/");
	return normalizeTrailingSlash(urlObj);
}
var cachedRouteStrategyUrl;
var cachedRouteStrategy;
function findMatchingRouteStrategy(url) {
	if (routeStrategies.length === 0) return;
	const urlString = typeof url === "string" ? url : url.href;
	if (cachedRouteStrategyUrl === urlString) return cachedRouteStrategy;
	const publicUrl = normalizeTrailingSlash(new URL(urlString, "http://example.com"));
	const canonicalUrl = deLocalizeUrl(publicUrl);
	const candidateUrls = canonicalUrl.href === publicUrl.href ? [publicUrl] : [publicUrl, canonicalUrl];
	let match;
	for (const candidateUrl of candidateUrls) {
		for (const routeStrategy of routeStrategies) if (execUrlPattern(new URLPattern(routeStrategy.match, candidateUrl.href), candidateUrl)) {
			match = routeStrategy;
			break;
		}
		if (match) break;
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
var customClientStrategies = /* @__PURE__ */ new Map();
function isCustomStrategy(strategy) {
	return typeof strategy === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy);
}
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
	if (locale === "fr") return fr_contact_form_bugreport1(inputs);
	if (locale === "es") return es_contact_form_bugreport1(inputs);
	if (locale === "de") return de_contact_form_bugreport1(inputs);
	if (locale === "it") return it_contact_form_bugreport1(inputs);
	if (locale === "pt") return pt_contact_form_bugreport1(inputs);
	if (locale === "zh") return zh_contact_form_bugreport1(inputs);
	if (locale === "ja") return ja_contact_form_bugreport1(inputs);
	if (locale === "ko") return ko_contact_form_bugreport1(inputs);
	if (locale === "ru") return ru_contact_form_bugreport1(inputs);
	return en_contact_form_bugreport1(inputs);
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
	if (locale === "fr") return fr_contact_form_contribution(inputs);
	if (locale === "es") return es_contact_form_contribution(inputs);
	if (locale === "de") return de_contact_form_contribution(inputs);
	if (locale === "it") return it_contact_form_contribution(inputs);
	if (locale === "pt") return pt_contact_form_contribution(inputs);
	if (locale === "zh") return zh_contact_form_contribution(inputs);
	if (locale === "ja") return ja_contact_form_contribution(inputs);
	if (locale === "ko") return ko_contact_form_contribution(inputs);
	if (locale === "ru") return ru_contact_form_contribution(inputs);
	return en_contact_form_contribution(inputs);
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
	if (locale === "fr") return fr_contact_form_email(inputs);
	if (locale === "es") return es_contact_form_email(inputs);
	if (locale === "de") return de_contact_form_email(inputs);
	if (locale === "it") return it_contact_form_email(inputs);
	if (locale === "pt") return pt_contact_form_email(inputs);
	if (locale === "zh") return zh_contact_form_email(inputs);
	if (locale === "ja") return ja_contact_form_email(inputs);
	if (locale === "ko") return ko_contact_form_email(inputs);
	if (locale === "ru") return ru_contact_form_email(inputs);
	return en_contact_form_email(inputs);
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
	if (locale === "fr") return fr_contact_form_emailplaceholder1(inputs);
	if (locale === "es") return es_contact_form_emailplaceholder1(inputs);
	if (locale === "de") return de_contact_form_emailplaceholder1(inputs);
	if (locale === "it") return it_contact_form_emailplaceholder1(inputs);
	if (locale === "pt") return pt_contact_form_emailplaceholder1(inputs);
	if (locale === "zh") return zh_contact_form_emailplaceholder1(inputs);
	if (locale === "ja") return ja_contact_form_emailplaceholder1(inputs);
	if (locale === "ko") return ko_contact_form_emailplaceholder1(inputs);
	if (locale === "ru") return ru_contact_form_emailplaceholder1(inputs);
	return en_contact_form_emailplaceholder1(inputs);
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
	if (locale === "fr") return fr_contact_form_message(inputs);
	if (locale === "es") return es_contact_form_message(inputs);
	if (locale === "de") return de_contact_form_message(inputs);
	if (locale === "it") return it_contact_form_message(inputs);
	if (locale === "pt") return pt_contact_form_message(inputs);
	if (locale === "zh") return zh_contact_form_message(inputs);
	if (locale === "ja") return ja_contact_form_message(inputs);
	if (locale === "ko") return ko_contact_form_message(inputs);
	if (locale === "ru") return ru_contact_form_message(inputs);
	return en_contact_form_message(inputs);
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
	if (locale === "fr") return fr_contact_form_messageplaceholder1(inputs);
	if (locale === "es") return es_contact_form_messageplaceholder1(inputs);
	if (locale === "de") return de_contact_form_messageplaceholder1(inputs);
	if (locale === "it") return it_contact_form_messageplaceholder1(inputs);
	if (locale === "pt") return pt_contact_form_messageplaceholder1(inputs);
	if (locale === "zh") return zh_contact_form_messageplaceholder1(inputs);
	if (locale === "ja") return ja_contact_form_messageplaceholder1(inputs);
	if (locale === "ko") return ko_contact_form_messageplaceholder1(inputs);
	if (locale === "ru") return ru_contact_form_messageplaceholder1(inputs);
	return en_contact_form_messageplaceholder1(inputs);
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
	if (locale === "fr") return fr_contact_form_methodologyquestion1(inputs);
	if (locale === "es") return es_contact_form_methodologyquestion1(inputs);
	if (locale === "de") return de_contact_form_methodologyquestion1(inputs);
	if (locale === "it") return it_contact_form_methodologyquestion1(inputs);
	if (locale === "pt") return pt_contact_form_methodologyquestion1(inputs);
	if (locale === "zh") return zh_contact_form_methodologyquestion1(inputs);
	if (locale === "ja") return ja_contact_form_methodologyquestion1(inputs);
	if (locale === "ko") return ko_contact_form_methodologyquestion1(inputs);
	if (locale === "ru") return ru_contact_form_methodologyquestion1(inputs);
	return en_contact_form_methodologyquestion1(inputs);
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
	if (locale === "fr") return fr_contact_form_name(inputs);
	if (locale === "es") return es_contact_form_name(inputs);
	if (locale === "de") return de_contact_form_name(inputs);
	if (locale === "it") return it_contact_form_name(inputs);
	if (locale === "pt") return pt_contact_form_name(inputs);
	if (locale === "zh") return zh_contact_form_name(inputs);
	if (locale === "ja") return ja_contact_form_name(inputs);
	if (locale === "ko") return ko_contact_form_name(inputs);
	if (locale === "ru") return ru_contact_form_name(inputs);
	return en_contact_form_name(inputs);
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
	if (locale === "fr") return fr_contact_form_newbenchmarkidea2(inputs);
	if (locale === "es") return es_contact_form_newbenchmarkidea2(inputs);
	if (locale === "de") return de_contact_form_newbenchmarkidea2(inputs);
	if (locale === "it") return it_contact_form_newbenchmarkidea2(inputs);
	if (locale === "pt") return pt_contact_form_newbenchmarkidea2(inputs);
	if (locale === "zh") return zh_contact_form_newbenchmarkidea2(inputs);
	if (locale === "ja") return ja_contact_form_newbenchmarkidea2(inputs);
	if (locale === "ko") return ko_contact_form_newbenchmarkidea2(inputs);
	if (locale === "ru") return ru_contact_form_newbenchmarkidea2(inputs);
	return en_contact_form_newbenchmarkidea2(inputs);
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
	if (locale === "fr") return fr_contact_form_other(inputs);
	if (locale === "es") return es_contact_form_other(inputs);
	if (locale === "de") return de_contact_form_other(inputs);
	if (locale === "it") return it_contact_form_other(inputs);
	if (locale === "pt") return pt_contact_form_other(inputs);
	if (locale === "zh") return zh_contact_form_other(inputs);
	if (locale === "ja") return ja_contact_form_other(inputs);
	if (locale === "ko") return ko_contact_form_other(inputs);
	if (locale === "ru") return ru_contact_form_other(inputs);
	return en_contact_form_other(inputs);
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
	if (locale === "fr") return fr_contact_form_sendmessage1(inputs);
	if (locale === "es") return es_contact_form_sendmessage1(inputs);
	if (locale === "de") return de_contact_form_sendmessage1(inputs);
	if (locale === "it") return it_contact_form_sendmessage1(inputs);
	if (locale === "pt") return pt_contact_form_sendmessage1(inputs);
	if (locale === "zh") return zh_contact_form_sendmessage1(inputs);
	if (locale === "ja") return ja_contact_form_sendmessage1(inputs);
	if (locale === "ko") return ko_contact_form_sendmessage1(inputs);
	if (locale === "ru") return ru_contact_form_sendmessage1(inputs);
	return en_contact_form_sendmessage1(inputs);
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
	if (locale === "fr") return fr_contact_form_topic(inputs);
	if (locale === "es") return es_contact_form_topic(inputs);
	if (locale === "de") return de_contact_form_topic(inputs);
	if (locale === "it") return it_contact_form_topic(inputs);
	if (locale === "pt") return pt_contact_form_topic(inputs);
	if (locale === "zh") return zh_contact_form_topic(inputs);
	if (locale === "ja") return ja_contact_form_topic(inputs);
	if (locale === "ko") return ko_contact_form_topic(inputs);
	if (locale === "ru") return ru_contact_form_topic(inputs);
	return en_contact_form_topic(inputs);
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
	if (locale === "fr") return fr_contact_form_yourname1(inputs);
	if (locale === "es") return es_contact_form_yourname1(inputs);
	if (locale === "de") return de_contact_form_yourname1(inputs);
	if (locale === "it") return it_contact_form_yourname1(inputs);
	if (locale === "pt") return pt_contact_form_yourname1(inputs);
	if (locale === "zh") return zh_contact_form_yourname1(inputs);
	if (locale === "ja") return ja_contact_form_yourname1(inputs);
	if (locale === "ko") return ko_contact_form_yourname1(inputs);
	if (locale === "ru") return ru_contact_form_yourname1(inputs);
	return en_contact_form_yourname1(inputs);
});
var _tmpl$ = template(`<form class=space-y-6><div class="grid gap-4 md:grid-cols-2"><div><label class="mb-1 block text-sm font-medium text-foreground"></label><input class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><input type=email class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"></div></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"><option></option><option></option><option></option><option></option><option></option></select></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><textarea rows=5 class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"></textarea></div><button type=submit class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">`);
function ContactForm() {
	const nameId = createUniqueId();
	const emailId = createUniqueId();
	const topicId = createUniqueId();
	const messageId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$7 = _el$3.nextSibling.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$2.nextSibling, _el$0 = _el$9.firstChild, _el$1 = _el$0.nextSibling, _el$10 = _el$1.firstChild, _el$11 = _el$10.nextSibling, _el$12 = _el$11.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling, _el$15 = _el$9.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$16.nextSibling, _el$18 = _el$15.nextSibling;
		setAttribute(_el$4, "for", nameId);
		insert(_el$4, () => contact_form_name());
		setAttribute(_el$5, "id", nameId);
		setAttribute(_el$7, "for", emailId);
		insert(_el$7, () => contact_form_email());
		setAttribute(_el$8, "id", emailId);
		setAttribute(_el$0, "for", topicId);
		insert(_el$0, () => contact_form_topic());
		setAttribute(_el$1, "id", topicId);
		insert(_el$10, () => contact_form_bugreport1());
		insert(_el$11, () => contact_form_newbenchmarkidea2());
		insert(_el$12, () => contact_form_methodologyquestion1());
		insert(_el$13, () => contact_form_contribution());
		insert(_el$14, () => contact_form_other());
		setAttribute(_el$16, "for", messageId);
		insert(_el$16, () => contact_form_message());
		setAttribute(_el$17, "id", messageId);
		insert(_el$18, () => contact_form_sendmessage1());
		effect((_p$) => {
			var _v$ = contact_form_yourname1(), _v$2 = contact_form_emailplaceholder1(), _v$3 = contact_form_messageplaceholder1();
			_v$ !== _p$.e && setAttribute(_el$5, "placeholder", _p$.e = _v$);
			_v$2 !== _p$.t && setAttribute(_el$8, "placeholder", _p$.t = _v$2);
			_v$3 !== _p$.a && setAttribute(_el$17, "placeholder", _p$.a = _v$3);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0
		});
		return _el$;
	})();
}
export { ContactForm as default };

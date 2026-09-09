import { useId } from "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
var contact_form_bugreport1$10 = () => {
	return `Bug Report`;
};
var contact_form_contribution$10 = () => {
	return `Contribution`;
};
var contact_form_describeyourquestionoridea4$10 = () => {
	return `Describe your question or idea...`;
};
var contact_form_message$10 = () => {
	return `Message`;
};
var contact_form_methodologyquestion1$10 = () => {
	return `Methodology Question`;
};
var contact_form_newbenchmarkidea2$10 = () => {
	return `New Benchmark Idea`;
};
var contact_form_other$10 = () => {
	return `Other`;
};
var contact_form_sendmessage1$10 = () => {
	return `Send Message`;
};
var contact_form_topic$10 = () => {
	return `Topic`;
};
var contact_form_yourname1$10 = () => {
	return `Your name`;
};
var profile_section_displayname1$10 = () => {
	return `Display Name`;
};
var profile_section_email$10 = () => {
	return `Email`;
};
var contact_form_bugreport1$9 = () => {
	return `Rapport de bug`;
};
var contact_form_contribution$9 = () => {
	return `Contribution`;
};
var contact_form_describeyourquestionoridea4$9 = () => {
	return `Décrivez votre question ou idée...`;
};
var contact_form_message$9 = () => {
	return `Message`;
};
var contact_form_methodologyquestion1$9 = () => {
	return `Question sur la méthodologie`;
};
var contact_form_newbenchmarkidea2$9 = () => {
	return `Nouvelle idée de benchmark`;
};
var contact_form_other$9 = () => {
	return `Autre`;
};
var contact_form_sendmessage1$9 = () => {
	return `Envoyer le message`;
};
var contact_form_topic$9 = () => {
	return `Sujet`;
};
var contact_form_yourname1$9 = () => {
	return `Votre nom`;
};
var profile_section_displayname1$9 = () => {
	return `Nom d'affichage`;
};
var profile_section_email$9 = () => {
	return `Email`;
};
var contact_form_bugreport1$8 = () => {
	return `Informe de bug`;
};
var contact_form_contribution$8 = () => {
	return `Contribución`;
};
var contact_form_describeyourquestionoridea4$8 = () => {
	return `Describe tu pregunta o idea...`;
};
var contact_form_message$8 = () => {
	return `Mensaje`;
};
var contact_form_methodologyquestion1$8 = () => {
	return `Pregunta sobre metodología`;
};
var contact_form_newbenchmarkidea2$8 = () => {
	return `Nueva idea de benchmark`;
};
var contact_form_other$8 = () => {
	return `Otro`;
};
var contact_form_sendmessage1$8 = () => {
	return `Enviar mensaje`;
};
var contact_form_topic$8 = () => {
	return `Tema`;
};
var contact_form_yourname1$8 = () => {
	return `Tu nombre`;
};
var profile_section_displayname1$8 = () => {
	return `Nombre visible`;
};
var profile_section_email$8 = () => {
	return `Correo electrónico`;
};
var contact_form_bugreport1$7 = () => {
	return `Fehlerbericht`;
};
var contact_form_contribution$7 = () => {
	return `Beitrag`;
};
var contact_form_describeyourquestionoridea4$7 = () => {
	return `Beschreiben Sie Ihre Frage oder Idee...`;
};
var contact_form_message$7 = () => {
	return `Nachricht`;
};
var contact_form_methodologyquestion1$7 = () => {
	return `Frage zur Methodik`;
};
var contact_form_newbenchmarkidea2$7 = () => {
	return `Neue Benchmark-Idee`;
};
var contact_form_other$7 = () => {
	return `Andere`;
};
var contact_form_sendmessage1$7 = () => {
	return `Nachricht senden`;
};
var contact_form_topic$7 = () => {
	return `Thema`;
};
var contact_form_yourname1$7 = () => {
	return `Ihr Name`;
};
var profile_section_displayname1$7 = () => {
	return `Anzeigename`;
};
var profile_section_email$7 = () => {
	return `E-Mail`;
};
var contact_form_bugreport1$6 = () => {
	return `Segnalazione di bug`;
};
var contact_form_contribution$6 = () => {
	return `Contributo`;
};
var contact_form_describeyourquestionoridea4$6 = () => {
	return `Descrivi la tua domanda o idea...`;
};
var contact_form_message$6 = () => {
	return `Messaggio`;
};
var contact_form_methodologyquestion1$6 = () => {
	return `Domanda sulla metodologia`;
};
var contact_form_newbenchmarkidea2$6 = () => {
	return `Nuova idea di benchmark`;
};
var contact_form_other$6 = () => {
	return `Altro`;
};
var contact_form_sendmessage1$6 = () => {
	return `Invia messaggio`;
};
var contact_form_topic$6 = () => {
	return `Argomento`;
};
var contact_form_yourname1$6 = () => {
	return `Il tuo nome`;
};
var profile_section_displayname1$6 = () => {
	return `Nome visualizzato`;
};
var profile_section_email$6 = () => {
	return `Email`;
};
var contact_form_bugreport1$5 = () => {
	return `Relatório de bug`;
};
var contact_form_contribution$5 = () => {
	return `Contribuição`;
};
var contact_form_describeyourquestionoridea4$5 = () => {
	return `Descreva sua pergunta ou ideia...`;
};
var contact_form_message$5 = () => {
	return `Mensagem`;
};
var contact_form_methodologyquestion1$5 = () => {
	return `Pergunta sobre metodologia`;
};
var contact_form_newbenchmarkidea2$5 = () => {
	return `Nova ideia de benchmark`;
};
var contact_form_other$5 = () => {
	return `Outro`;
};
var contact_form_sendmessage1$5 = () => {
	return `Enviar mensagem`;
};
var contact_form_topic$5 = () => {
	return `Assunto`;
};
var contact_form_yourname1$5 = () => {
	return `Seu nome`;
};
var profile_section_displayname1$5 = () => {
	return `Nome de exibição`;
};
var profile_section_email$5 = () => {
	return `E-mail`;
};
var contact_form_bugreport1$4 = () => {
	return `Bug 报告`;
};
var contact_form_contribution$4 = () => {
	return `贡献`;
};
var contact_form_describeyourquestionoridea4$4 = () => {
	return `描述您的问题或想法...`;
};
var contact_form_message$4 = () => {
	return `消息`;
};
var contact_form_methodologyquestion1$4 = () => {
	return `方法论问题`;
};
var contact_form_newbenchmarkidea2$4 = () => {
	return `新基准测试想法`;
};
var contact_form_other$4 = () => {
	return `其他`;
};
var contact_form_sendmessage1$4 = () => {
	return `发送消息`;
};
var contact_form_topic$4 = () => {
	return `主题`;
};
var contact_form_yourname1$4 = () => {
	return `您的姓名`;
};
var profile_section_displayname1$4 = () => {
	return `显示名称`;
};
var profile_section_email$4 = () => {
	return `邮件地址`;
};
var contact_form_bugreport1$3 = () => {
	return `バグ報告`;
};
var contact_form_contribution$3 = () => {
	return `コントリビューション`;
};
var contact_form_describeyourquestionoridea4$3 = () => {
	return `質問やアイデアの詳細を記入してください...`;
};
var contact_form_message$3 = () => {
	return `メッセージ`;
};
var contact_form_methodologyquestion1$3 = () => {
	return `方法論に関する質問`;
};
var contact_form_newbenchmarkidea2$3 = () => {
	return `新しいベンチマークのアイデア`;
};
var contact_form_other$3 = () => {
	return `その他`;
};
var contact_form_sendmessage1$3 = () => {
	return `メッセージを送信`;
};
var contact_form_topic$3 = () => {
	return `トピック`;
};
var contact_form_yourname1$3 = () => {
	return `お名前`;
};
var profile_section_displayname1$3 = () => {
	return `表示名`;
};
var profile_section_email$3 = () => {
	return `メールアドレス`;
};
var contact_form_bugreport1$2 = () => {
	return `버그 보고`;
};
var contact_form_contribution$2 = () => {
	return `기여`;
};
var contact_form_describeyourquestionoridea4$2 = () => {
	return `질문이나 아이디어를 설명해주세요...`;
};
var contact_form_message$2 = () => {
	return `메시지`;
};
var contact_form_methodologyquestion1$2 = () => {
	return `방법론 질문`;
};
var contact_form_newbenchmarkidea2$2 = () => {
	return `새로운 벤치마크 아이디어`;
};
var contact_form_other$2 = () => {
	return `기타`;
};
var contact_form_sendmessage1$2 = () => {
	return `메시지 보내기`;
};
var contact_form_topic$2 = () => {
	return `주제`;
};
var contact_form_yourname1$2 = () => {
	return `이름`;
};
var profile_section_displayname1$2 = () => {
	return `표시 이름`;
};
var profile_section_email$2 = () => {
	return `이메일 주소`;
};
var contact_form_bugreport1$1 = () => {
	return `Отчет об ошибке`;
};
var contact_form_contribution$1 = () => {
	return `Вклад`;
};
var contact_form_describeyourquestionoridea4$1 = () => {
	return `Опишите ваш вопрос или идею...`;
};
var contact_form_message$1 = () => {
	return `Сообщение`;
};
var contact_form_methodologyquestion1$1 = () => {
	return `Вопрос по методологии`;
};
var contact_form_newbenchmarkidea2$1 = () => {
	return `Новая идея для бенчмарка`;
};
var contact_form_other$1 = () => {
	return `Другое`;
};
var contact_form_sendmessage1$1 = () => {
	return `Отправить сообщение`;
};
var contact_form_topic$1 = () => {
	return `Теما`;
};
var contact_form_yourname1$1 = () => {
	return `Ваше имя`;
};
var profile_section_displayname1$1 = () => {
	return `Отображаемое имя`;
};
var profile_section_email$1 = () => {
	return `Эл. почта`;
};
var contact_form_bugreport1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_bugreport1$9(inputs);
	if (locale === "es") return contact_form_bugreport1$8(inputs);
	if (locale === "de") return contact_form_bugreport1$7(inputs);
	if (locale === "it") return contact_form_bugreport1$6(inputs);
	if (locale === "pt") return contact_form_bugreport1$5(inputs);
	if (locale === "zh") return contact_form_bugreport1$4(inputs);
	if (locale === "ja") return contact_form_bugreport1$3(inputs);
	if (locale === "ko") return contact_form_bugreport1$2(inputs);
	if (locale === "ru") return contact_form_bugreport1$1(inputs);
	return contact_form_bugreport1$10(inputs);
});
var contact_form_contribution = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_contribution$9(inputs);
	if (locale === "es") return contact_form_contribution$8(inputs);
	if (locale === "de") return contact_form_contribution$7(inputs);
	if (locale === "it") return contact_form_contribution$6(inputs);
	if (locale === "pt") return contact_form_contribution$5(inputs);
	if (locale === "zh") return contact_form_contribution$4(inputs);
	if (locale === "ja") return contact_form_contribution$3(inputs);
	if (locale === "ko") return contact_form_contribution$2(inputs);
	if (locale === "ru") return contact_form_contribution$1(inputs);
	return contact_form_contribution$10(inputs);
});
var contact_form_describeyourquestionoridea4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_describeyourquestionoridea4$9(inputs);
	if (locale === "es") return contact_form_describeyourquestionoridea4$8(inputs);
	if (locale === "de") return contact_form_describeyourquestionoridea4$7(inputs);
	if (locale === "it") return contact_form_describeyourquestionoridea4$6(inputs);
	if (locale === "pt") return contact_form_describeyourquestionoridea4$5(inputs);
	if (locale === "zh") return contact_form_describeyourquestionoridea4$4(inputs);
	if (locale === "ja") return contact_form_describeyourquestionoridea4$3(inputs);
	if (locale === "ko") return contact_form_describeyourquestionoridea4$2(inputs);
	if (locale === "ru") return contact_form_describeyourquestionoridea4$1(inputs);
	return contact_form_describeyourquestionoridea4$10(inputs);
});
var contact_form_message = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_message$9(inputs);
	if (locale === "es") return contact_form_message$8(inputs);
	if (locale === "de") return contact_form_message$7(inputs);
	if (locale === "it") return contact_form_message$6(inputs);
	if (locale === "pt") return contact_form_message$5(inputs);
	if (locale === "zh") return contact_form_message$4(inputs);
	if (locale === "ja") return contact_form_message$3(inputs);
	if (locale === "ko") return contact_form_message$2(inputs);
	if (locale === "ru") return contact_form_message$1(inputs);
	return contact_form_message$10(inputs);
});
var contact_form_methodologyquestion1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_methodologyquestion1$9(inputs);
	if (locale === "es") return contact_form_methodologyquestion1$8(inputs);
	if (locale === "de") return contact_form_methodologyquestion1$7(inputs);
	if (locale === "it") return contact_form_methodologyquestion1$6(inputs);
	if (locale === "pt") return contact_form_methodologyquestion1$5(inputs);
	if (locale === "zh") return contact_form_methodologyquestion1$4(inputs);
	if (locale === "ja") return contact_form_methodologyquestion1$3(inputs);
	if (locale === "ko") return contact_form_methodologyquestion1$2(inputs);
	if (locale === "ru") return contact_form_methodologyquestion1$1(inputs);
	return contact_form_methodologyquestion1$10(inputs);
});
var contact_form_newbenchmarkidea2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_newbenchmarkidea2$9(inputs);
	if (locale === "es") return contact_form_newbenchmarkidea2$8(inputs);
	if (locale === "de") return contact_form_newbenchmarkidea2$7(inputs);
	if (locale === "it") return contact_form_newbenchmarkidea2$6(inputs);
	if (locale === "pt") return contact_form_newbenchmarkidea2$5(inputs);
	if (locale === "zh") return contact_form_newbenchmarkidea2$4(inputs);
	if (locale === "ja") return contact_form_newbenchmarkidea2$3(inputs);
	if (locale === "ko") return contact_form_newbenchmarkidea2$2(inputs);
	if (locale === "ru") return contact_form_newbenchmarkidea2$1(inputs);
	return contact_form_newbenchmarkidea2$10(inputs);
});
var contact_form_other = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_other$9(inputs);
	if (locale === "es") return contact_form_other$8(inputs);
	if (locale === "de") return contact_form_other$7(inputs);
	if (locale === "it") return contact_form_other$6(inputs);
	if (locale === "pt") return contact_form_other$5(inputs);
	if (locale === "zh") return contact_form_other$4(inputs);
	if (locale === "ja") return contact_form_other$3(inputs);
	if (locale === "ko") return contact_form_other$2(inputs);
	if (locale === "ru") return contact_form_other$1(inputs);
	return contact_form_other$10(inputs);
});
var contact_form_sendmessage1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_sendmessage1$9(inputs);
	if (locale === "es") return contact_form_sendmessage1$8(inputs);
	if (locale === "de") return contact_form_sendmessage1$7(inputs);
	if (locale === "it") return contact_form_sendmessage1$6(inputs);
	if (locale === "pt") return contact_form_sendmessage1$5(inputs);
	if (locale === "zh") return contact_form_sendmessage1$4(inputs);
	if (locale === "ja") return contact_form_sendmessage1$3(inputs);
	if (locale === "ko") return contact_form_sendmessage1$2(inputs);
	if (locale === "ru") return contact_form_sendmessage1$1(inputs);
	return contact_form_sendmessage1$10(inputs);
});
var contact_form_topic = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_topic$9(inputs);
	if (locale === "es") return contact_form_topic$8(inputs);
	if (locale === "de") return contact_form_topic$7(inputs);
	if (locale === "it") return contact_form_topic$6(inputs);
	if (locale === "pt") return contact_form_topic$5(inputs);
	if (locale === "zh") return contact_form_topic$4(inputs);
	if (locale === "ja") return contact_form_topic$3(inputs);
	if (locale === "ko") return contact_form_topic$2(inputs);
	if (locale === "ru") return contact_form_topic$1(inputs);
	return contact_form_topic$10(inputs);
});
var contact_form_yourname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return contact_form_yourname1$9(inputs);
	if (locale === "es") return contact_form_yourname1$8(inputs);
	if (locale === "de") return contact_form_yourname1$7(inputs);
	if (locale === "it") return contact_form_yourname1$6(inputs);
	if (locale === "pt") return contact_form_yourname1$5(inputs);
	if (locale === "zh") return contact_form_yourname1$4(inputs);
	if (locale === "ja") return contact_form_yourname1$3(inputs);
	if (locale === "ko") return contact_form_yourname1$2(inputs);
	if (locale === "ru") return contact_form_yourname1$1(inputs);
	return contact_form_yourname1$10(inputs);
});
var profile_section_displayname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return profile_section_displayname1$9(inputs);
	if (locale === "es") return profile_section_displayname1$8(inputs);
	if (locale === "de") return profile_section_displayname1$7(inputs);
	if (locale === "it") return profile_section_displayname1$6(inputs);
	if (locale === "pt") return profile_section_displayname1$5(inputs);
	if (locale === "zh") return profile_section_displayname1$4(inputs);
	if (locale === "ja") return profile_section_displayname1$3(inputs);
	if (locale === "ko") return profile_section_displayname1$2(inputs);
	if (locale === "ru") return profile_section_displayname1$1(inputs);
	return profile_section_displayname1$10(inputs);
});
var profile_section_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return profile_section_email$9(inputs);
	if (locale === "es") return profile_section_email$8(inputs);
	if (locale === "de") return profile_section_email$7(inputs);
	if (locale === "it") return profile_section_email$6(inputs);
	if (locale === "pt") return profile_section_email$5(inputs);
	if (locale === "zh") return profile_section_email$4(inputs);
	if (locale === "ja") return profile_section_email$3(inputs);
	if (locale === "ko") return profile_section_email$2(inputs);
	if (locale === "ru") return profile_section_email$1(inputs);
	return profile_section_email$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/contact/ContactForm.tsx";
function ContactForm() {
	const nameId = useId();
	const emailId = useId();
	const topicId = useId();
	const messageId = useId();
	return jsxDEV("form", {
		className: "space-y-6",
		children: [
			jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [jsxDEV("div", { children: [jsxDEV("label", {
					htmlFor: nameId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: profile_section_displayname1()
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 14,
					columnNumber: 11
				}, this), jsxDEV("input", {
					id: nameId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: contact_form_yourname1()
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 20,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 13,
					columnNumber: 9
				}, this), jsxDEV("div", { children: [jsxDEV("label", {
					htmlFor: emailId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: profile_section_email()
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 27,
					columnNumber: 11
				}, this), jsxDEV("input", {
					id: emailId,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 33,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 26,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			jsxDEV("div", { children: [jsxDEV("label", {
				htmlFor: topicId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: contact_form_topic ? contact_form_topic() : "Topic"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 42,
				columnNumber: 9
			}, this), jsxDEV("select", {
				id: topicId,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					jsxDEV("option", { children: contact_form_bugreport1() }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 52,
						columnNumber: 11
					}, this),
					jsxDEV("option", { children: contact_form_newbenchmarkidea2() }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 53,
						columnNumber: 11
					}, this),
					jsxDEV("option", { children: contact_form_methodologyquestion1() }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 54,
						columnNumber: 11
					}, this),
					jsxDEV("option", { children: contact_form_contribution ? contact_form_contribution() : "Contribution" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					jsxDEV("option", { children: contact_form_other ? contact_form_other() : "Other" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 60,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 48,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			jsxDEV("div", { children: [jsxDEV("label", {
				htmlFor: messageId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: contact_form_message ? contact_form_message() : "Message"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 66,
				columnNumber: 9
			}, this), jsxDEV("textarea", {
				id: messageId,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: contact_form_describeyourquestionoridea4()
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 72,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 65,
				columnNumber: 7
			}, this),
			jsxDEV("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: contact_form_sendmessage1()
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 79,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsxDEV(Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/contact/ContactForm.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(ContactForm, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Wrapped as default };

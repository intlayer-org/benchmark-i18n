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
var root = $.from_html(`<form class="space-y-6"><div class="grid gap-4 md:grid-cols-2"><div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <input class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <input type="email" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <textarea class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"></textarea></div> <button type="submit" class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></form>`);
function ContactForm($$anchor, $$props) {
	$.push($$props, false);
	const nameId = "contact-name";
	const emailId = "contact-email";
	const topicId = "contact-topic";
	const messageId = "contact-message";
	$.init();
	var form = root();
	var div = $.child(form);
	var div_1 = $.child(div);
	var label = $.child(div_1);
	$.set_attribute(label, "for", nameId);
	var text = $.child(label, true);
	$.reset(label);
	var input = $.sibling(label, 2);
	$.set_attribute(input, "id", nameId);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var label_1 = $.child(div_2);
	$.set_attribute(label_1, "for", emailId);
	var text_1 = $.child(label_1, true);
	$.reset(label_1);
	var input_1 = $.sibling(label_1, 2);
	$.set_attribute(input_1, "id", emailId);
	$.reset(div_2);
	$.reset(div);
	var div_3 = $.sibling(div, 2);
	var label_2 = $.child(div_3);
	$.set_attribute(label_2, "for", topicId);
	var text_2 = $.child(label_2, true);
	$.reset(label_2);
	var select = $.sibling(label_2, 2);
	$.set_attribute(select, "id", topicId);
	var option = $.child(select);
	var text_3 = $.child(option, true);
	$.reset(option);
	var option_value = {};
	var option_1 = $.sibling(option);
	var text_4 = $.child(option_1, true);
	$.reset(option_1);
	var option_1_value = {};
	var option_2 = $.sibling(option_1);
	var text_5 = $.child(option_2, true);
	$.reset(option_2);
	var option_2_value = {};
	var option_3 = $.sibling(option_2);
	var text_6 = $.child(option_3, true);
	$.reset(option_3);
	var option_3_value = {};
	var option_4 = $.sibling(option_3);
	var text_7 = $.child(option_4, true);
	$.reset(option_4);
	var option_4_value = {};
	$.reset(select);
	$.reset(div_3);
	var div_4 = $.sibling(div_3, 2);
	var label_3 = $.child(div_4);
	$.set_attribute(label_3, "for", messageId);
	var text_8 = $.child(label_3, true);
	$.reset(label_3);
	var textarea = $.sibling(label_3, 2);
	$.set_attribute(textarea, "id", messageId);
	$.set_attribute(textarea, "rows", 5);
	$.reset(div_4);
	var button = $.sibling(div_4, 2);
	var text_9 = $.child(button, true);
	$.reset(button);
	$.reset(form);
	$.template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) => {
		$.set_text(text, $0);
		$.set_attribute(input, "placeholder", $1);
		$.set_text(text_1, $2);
		$.set_attribute(input_1, "placeholder", $3);
		$.set_text(text_2, $4);
		$.set_text(text_3, $5);
		if (option_value !== (option_value = $6)) option.__value = $6;
		$.set_text(text_4, $7);
		if (option_1_value !== (option_1_value = $8)) option_1.__value = $8;
		$.set_text(text_5, $9);
		if (option_2_value !== (option_2_value = $10)) option_2.__value = $10;
		$.set_text(text_6, $11);
		if (option_3_value !== (option_3_value = $12)) option_3.__value = $12;
		$.set_text(text_7, $13);
		if (option_4_value !== (option_4_value = $14)) option_4.__value = $14;
		$.set_text(text_8, $15);
		$.set_attribute(textarea, "placeholder", $16);
		$.set_text(text_9, $17);
	}, [
		() => contact_form_name(),
		() => contact_form_yourname1(),
		() => contact_form_email(),
		() => contact_form_emailplaceholder1(),
		() => contact_form_topic(),
		() => contact_form_bugreport1(),
		() => contact_form_bugreport1(),
		() => contact_form_newbenchmarkidea2(),
		() => contact_form_newbenchmarkidea2(),
		() => contact_form_methodologyquestion1(),
		() => contact_form_methodologyquestion1(),
		() => contact_form_contribution(),
		() => contact_form_contribution(),
		() => contact_form_other(),
		() => contact_form_other(),
		() => contact_form_message(),
		() => contact_form_messageplaceholder1(),
		() => contact_form_sendmessage1()
	]);
	$.append($$anchor, form);
	$.pop();
}
export { ContactForm as default };

import { Profiler, useEffect, useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "next/navigation";
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
	return `이름`;
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
var en_contact_form_bugreport1 = () => {
	return `Bug Report`;
};
var fr_contact_form_bugreport1 = () => {
	return `Rapport de bug`;
};
var es_contact_form_bugreport1 = () => {
	return `Informe de bug`;
};
var de_contact_form_bugreport1 = () => {
	return `Fehlerbericht`;
};
var it_contact_form_bugreport1 = () => {
	return `Segnalazione di bug`;
};
var pt_contact_form_bugreport1 = () => {
	return `Relatório de bug`;
};
var zh_contact_form_bugreport1 = () => {
	return `Bug 报告`;
};
var ja_contact_form_bugreport1 = () => {
	return `バグ報告`;
};
var ko_contact_form_bugreport1 = () => {
	return `버그 보고`;
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
	return `Nouvelle idée de benchmark`;
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
	return `새로운 벤치마크 아이디어`;
};
var ru_contact_form_newbenchmarkidea2 = () => {
	return `Новая идея для бенчмарка`;
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
	return `Question sur la méthodologie`;
};
var es_contact_form_methodologyquestion1 = () => {
	return `Pregunta sobre metodología`;
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
	return `方法論に関する質問`;
};
var ko_contact_form_methodologyquestion1 = () => {
	return `방법론 질문`;
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
var en_contact_form_describeyourquestionoridea4 = () => {
	return `Describe your question or idea...`;
};
var fr_contact_form_describeyourquestionoridea4 = () => {
	return `Décrivez votre question ou idée...`;
};
var es_contact_form_describeyourquestionoridea4 = () => {
	return `Describe tu pregunta o idea...`;
};
var de_contact_form_describeyourquestionoridea4 = () => {
	return `Beschreiben Sie Ihre Frage oder Idee...`;
};
var it_contact_form_describeyourquestionoridea4 = () => {
	return `Descrivi la tua domanda o idea...`;
};
var pt_contact_form_describeyourquestionoridea4 = () => {
	return `Descreva sua pergunta ou ideia...`;
};
var zh_contact_form_describeyourquestionoridea4 = () => {
	return `描述您的问题或想法...`;
};
var ja_contact_form_describeyourquestionoridea4 = () => {
	return `質問やアイデアの詳細を記入してください...`;
};
var ko_contact_form_describeyourquestionoridea4 = () => {
	return `질문이나 아이디어를 설명해주세요...`;
};
var ru_contact_form_describeyourquestionoridea4 = () => {
	return `Опишите ваш вопрос или идею...`;
};
var contact_form_describeyourquestionoridea4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_contact_form_describeyourquestionoridea4(inputs);
	if (locale === "fr") return fr_contact_form_describeyourquestionoridea4(inputs);
	if (locale === "es") return es_contact_form_describeyourquestionoridea4(inputs);
	if (locale === "de") return de_contact_form_describeyourquestionoridea4(inputs);
	if (locale === "it") return it_contact_form_describeyourquestionoridea4(inputs);
	if (locale === "pt") return pt_contact_form_describeyourquestionoridea4(inputs);
	if (locale === "zh") return zh_contact_form_describeyourquestionoridea4(inputs);
	if (locale === "ja") return ja_contact_form_describeyourquestionoridea4(inputs);
	if (locale === "ko") return ko_contact_form_describeyourquestionoridea4(inputs);
	return ru_contact_form_describeyourquestionoridea4(inputs);
});
var en_contact_form_sendmessage1 = () => {
	return `Send Message`;
};
var fr_contact_form_sendmessage1 = () => {
	return `Envoyer le message`;
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
	return `메시지 보내기`;
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
	return `주제`;
};
var ru_contact_form_topic = () => {
	return `Теما`;
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
	return `コントリビューション`;
};
var ko_contact_form_contribution = () => {
	return `기여`;
};
var ru_contact_form_contribution = () => {
	return `Вклад`;
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
	return `Andere`;
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
	return `기타`;
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
	return `메시지`;
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
var en_profile_section_displayname1 = () => {
	return `Display Name`;
};
var fr_profile_section_displayname1 = () => {
	return `Nom d'affichage`;
};
var es_profile_section_displayname1 = () => {
	return `Nombre visible`;
};
var de_profile_section_displayname1 = () => {
	return `Anzeigename`;
};
var it_profile_section_displayname1 = () => {
	return `Nome visualizzato`;
};
var pt_profile_section_displayname1 = () => {
	return `Nome de exibição`;
};
var zh_profile_section_displayname1 = () => {
	return `显示名称`;
};
var ja_profile_section_displayname1 = () => {
	return `表示名`;
};
var ko_profile_section_displayname1 = () => {
	return `표시 이름`;
};
var ru_profile_section_displayname1 = () => {
	return `Отображаемое имя`;
};
var profile_section_displayname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_profile_section_displayname1(inputs);
	if (locale === "fr") return fr_profile_section_displayname1(inputs);
	if (locale === "es") return es_profile_section_displayname1(inputs);
	if (locale === "de") return de_profile_section_displayname1(inputs);
	if (locale === "it") return it_profile_section_displayname1(inputs);
	if (locale === "pt") return pt_profile_section_displayname1(inputs);
	if (locale === "zh") return zh_profile_section_displayname1(inputs);
	if (locale === "ja") return ja_profile_section_displayname1(inputs);
	if (locale === "ko") return ko_profile_section_displayname1(inputs);
	return ru_profile_section_displayname1(inputs);
});
var en_profile_section_email = () => {
	return `Email`;
};
var fr_profile_section_email = () => {
	return `Email`;
};
var es_profile_section_email = () => {
	return `Correo electrónico`;
};
var de_profile_section_email = () => {
	return `E-Mail`;
};
var it_profile_section_email = () => {
	return `Email`;
};
var pt_profile_section_email = () => {
	return `E-mail`;
};
var zh_profile_section_email = () => {
	return `邮件地址`;
};
var ja_profile_section_email = () => {
	return `メールアドレス`;
};
var ko_profile_section_email = () => {
	return `이메일 주소`;
};
var ru_profile_section_email = () => {
	return `Эл. почта`;
};
var profile_section_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_profile_section_email(inputs);
	if (locale === "fr") return fr_profile_section_email(inputs);
	if (locale === "es") return es_profile_section_email(inputs);
	if (locale === "de") return de_profile_section_email(inputs);
	if (locale === "it") return it_profile_section_email(inputs);
	if (locale === "pt") return pt_profile_section_email(inputs);
	if (locale === "zh") return zh_profile_section_email(inputs);
	if (locale === "ja") return ja_profile_section_email(inputs);
	if (locale === "ko") return ko_profile_section_email(inputs);
	return ru_profile_section_email(inputs);
});
function ContactForm() {
	const nameId = useId();
	const emailId = useId();
	const topicId = useId();
	const messageId = useId();
	return jsxs("form", {
		className: "space-y-6",
		children: [
			jsxs("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [jsxs("div", { children: [jsx("label", {
					htmlFor: nameId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: profile_section_displayname1()
				}), jsx("input", {
					id: nameId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: contact_form_yourname1()
				})] }), jsxs("div", { children: [jsx("label", {
					htmlFor: emailId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: profile_section_email()
				}), jsx("input", {
					id: emailId,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			jsxs("div", { children: [jsx("label", {
				htmlFor: topicId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: contact_form_topic ? contact_form_topic() : "Topic"
			}), jsxs("select", {
				id: topicId,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					jsx("option", { children: contact_form_bugreport1() }),
					jsx("option", { children: contact_form_newbenchmarkidea2() }),
					jsx("option", { children: contact_form_methodologyquestion1() }),
					jsx("option", { children: contact_form_contribution ? contact_form_contribution() : "Contribution" }),
					jsx("option", { children: contact_form_other ? contact_form_other() : "Other" })
				]
			})] }),
			jsxs("div", { children: [jsx("label", {
				htmlFor: messageId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: contact_form_message ? contact_form_message() : "Message"
			}), jsx("textarea", {
				id: messageId,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: contact_form_describeyourquestionoridea4()
			})] }),
			jsx("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: contact_form_sendmessage1()
			})
		]
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
	return jsx(Wrapper, { children: jsx(ContactForm, {}) });
}
export { Wrapped as default };

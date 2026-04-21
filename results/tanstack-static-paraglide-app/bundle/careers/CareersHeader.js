import "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
	return `职业生涯`;
};
var ja_careers_header_title = () => {
	return `採用情報`;
};
var ko_careers_header_title = () => {
	return `채용`;
};
var ru_careers_header_title = () => {
	return `Карьера`;
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
var en_careers_header_joinourmissiontoimprove4 = () => {
	return `Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.`;
};
var fr_careers_header_joinourmissiontoimprove4 = () => {
	return `Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe privilégiant le télétravail qui valorise l'impact, la transparence et l'apprentissage continu.`;
};
var es_careers_header_joinourmissiontoimprove4 = () => {
	return `Únete a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo que prioriza el trabajo remoto y valora el impacto, la transparencia y el aprendizaje continuo.`;
};
var de_careers_header_joinourmissiontoimprove4 = () => {
	return `Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt.`;
};
var it_careers_header_joinourmissiontoimprove4 = () => {
	return `Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team che lavora principalmente in remoto e che valorizza l'impatto, la trasparenza e l'apprendimento continuo.`;
};
var pt_careers_header_joinourmissiontoimprove4 = () => {
	return `Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valoriza o impacto, a transparência e o aprendizado contínuo.`;
};
var zh_careers_header_joinourmissiontoimprove4 = () => {
	return `加入我们改进国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。`;
};
var ja_careers_header_joinourmissiontoimprove4 = () => {
	return `国際化エコシステムを改善するという私たちのミッションに参加してください。私たちは、影響、透明性、継続的な学習を重視するリモートファーストのチームです。`;
};
var ko_careers_header_joinourmissiontoimprove4 = () => {
	return `국제화 생태계를 개선하기 위한 우리의 사명에 동참하세요. 저희는 영향력, 투명성 및 지속적인 학습을 소중히 여기는 원격 근무 우선 팀입니다.`;
};
var ru_careers_header_joinourmissiontoimprove4 = () => {
	return `Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение.`;
};
var careers_header_joinourmissiontoimprove4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_header_joinourmissiontoimprove4(inputs);
	if (locale === "fr") return fr_careers_header_joinourmissiontoimprove4(inputs);
	if (locale === "es") return es_careers_header_joinourmissiontoimprove4(inputs);
	if (locale === "de") return de_careers_header_joinourmissiontoimprove4(inputs);
	if (locale === "it") return it_careers_header_joinourmissiontoimprove4(inputs);
	if (locale === "pt") return pt_careers_header_joinourmissiontoimprove4(inputs);
	if (locale === "zh") return zh_careers_header_joinourmissiontoimprove4(inputs);
	if (locale === "ja") return ja_careers_header_joinourmissiontoimprove4(inputs);
	if (locale === "ko") return ko_careers_header_joinourmissiontoimprove4(inputs);
	return ru_careers_header_joinourmissiontoimprove4(inputs);
});
var en_mockbanner1 = () => {
	return `⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`;
};
var fr_mockbanner1 = () => {
	return `⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.`;
};
var es_mockbanner1 = () => {
	return `⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.`;
};
var de_mockbanner1 = () => {
	return `⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.`;
};
var it_mockbanner1 = () => {
	return `⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.`;
};
var pt_mockbanner1 = () => {
	return `⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.`;
};
var zh_mockbanner1 = () => {
	return `⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。`;
};
var ja_mockbanner1 = () => {
	return `⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。`;
};
var ko_mockbanner1 = () => {
	return `⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.`;
};
var ru_mockbanner1 = () => {
	return `⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.`;
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
var MockBanner = () => jsx("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: mockbanner1()
});
function CareersHeader() {
	return jsxs(Fragment, { children: [
		jsx(MockBanner, {}),
		jsx("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: careers_header_title()
		}),
		jsx("p", {
			className: "mb-4 text-muted-foreground mr-10",
			children: careers_header_joinourmissiontoimprove4()
		})
	] });
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(CareersHeader, {}) });
}
export { Wrapped as default };

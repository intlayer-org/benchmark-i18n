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
var en_careers_benefits_workfromanywhereinthe4 = () => {
	return `Work from anywhere in the world`;
};
var fr_careers_benefits_workfromanywhereinthe4 = () => {
	return `Travaillez de n'importe où dans le monde`;
};
var es_careers_benefits_workfromanywhereinthe4 = () => {
	return `Trabaja desde cualquier lugar del mundo`;
};
var de_careers_benefits_workfromanywhereinthe4 = () => {
	return `Arbeiten Sie von überall auf der Welt`;
};
var it_careers_benefits_workfromanywhereinthe4 = () => {
	return `Lavora da qualsiasi parte del mondo`;
};
var pt_careers_benefits_workfromanywhereinthe4 = () => {
	return `Trabalhe de qualquer lugar do mundo`;
};
var zh_careers_benefits_workfromanywhereinthe4 = () => {
	return `在全球任何地方工作`;
};
var ja_careers_benefits_workfromanywhereinthe4 = () => {
	return `世界中のどこからでも働けます`;
};
var ko_careers_benefits_workfromanywhereinthe4 = () => {
	return `전 세계 어디서나 근무 가능`;
};
var ru_careers_benefits_workfromanywhereinthe4 = () => {
	return `Работайте из любой точки мира`;
};
var careers_benefits_workfromanywhereinthe4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "fr") return fr_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "es") return es_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "de") return de_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "it") return it_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "pt") return pt_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "zh") return zh_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "ja") return ja_careers_benefits_workfromanywhereinthe4(inputs);
	if (locale === "ko") return ko_careers_benefits_workfromanywhereinthe4(inputs);
	return ru_careers_benefits_workfromanywhereinthe4(inputs);
});
var en_careers_benefits_competitivepay1 = () => {
	return `Competitive pay`;
};
var fr_careers_benefits_competitivepay1 = () => {
	return `Rémunération compétitive`;
};
var es_careers_benefits_competitivepay1 = () => {
	return `Salario competitivo`;
};
var de_careers_benefits_competitivepay1 = () => {
	return `Wettbewerbsfähige Bezahlung`;
};
var it_careers_benefits_competitivepay1 = () => {
	return `Retribuzione competitiva`;
};
var pt_careers_benefits_competitivepay1 = () => {
	return `Remuneração competitiva`;
};
var zh_careers_benefits_competitivepay1 = () => {
	return `具有竞争力的薪酬`;
};
var ja_careers_benefits_competitivepay1 = () => {
	return `競争力のある給与`;
};
var ko_careers_benefits_competitivepay1 = () => {
	return `경쟁력 있는 급여`;
};
var ru_careers_benefits_competitivepay1 = () => {
	return `Конкурентоспособная оплата`;
};
var careers_benefits_competitivepay1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_competitivepay1(inputs);
	if (locale === "fr") return fr_careers_benefits_competitivepay1(inputs);
	if (locale === "es") return es_careers_benefits_competitivepay1(inputs);
	if (locale === "de") return de_careers_benefits_competitivepay1(inputs);
	if (locale === "it") return it_careers_benefits_competitivepay1(inputs);
	if (locale === "pt") return pt_careers_benefits_competitivepay1(inputs);
	if (locale === "zh") return zh_careers_benefits_competitivepay1(inputs);
	if (locale === "ja") return ja_careers_benefits_competitivepay1(inputs);
	if (locale === "ko") return ko_careers_benefits_competitivepay1(inputs);
	return ru_careers_benefits_competitivepay1(inputs);
});
var en_careers_benefits_topofmarketcompensation3 = () => {
	return `Top-of-market compensation`;
};
var fr_careers_benefits_topofmarketcompensation3 = () => {
	return `Rémunération au-dessus du marché`;
};
var es_careers_benefits_topofmarketcompensation3 = () => {
	return `Compensación superior a la del mercado`;
};
var de_careers_benefits_topofmarketcompensation3 = () => {
	return `Überdurchschnittliche Vergütung`;
};
var it_careers_benefits_topofmarketcompensation3 = () => {
	return `Compensazione ai vertici del mercato`;
};
var pt_careers_benefits_topofmarketcompensation3 = () => {
	return `Remuneração acima da média do mercado`;
};
var zh_careers_benefits_topofmarketcompensation3 = () => {
	return `市场顶尖的薪资待遇`;
};
var ja_careers_benefits_topofmarketcompensation3 = () => {
	return `市場最高水準の報酬`;
};
var ko_careers_benefits_topofmarketcompensation3 = () => {
	return `업계 최고 수준의 보상`;
};
var ru_careers_benefits_topofmarketcompensation3 = () => {
	return `Компенсация выше рыночной`;
};
var careers_benefits_topofmarketcompensation3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "fr") return fr_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "es") return es_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "de") return de_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "it") return it_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "pt") return pt_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "zh") return zh_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "ja") return ja_careers_benefits_topofmarketcompensation3(inputs);
	if (locale === "ko") return ko_careers_benefits_topofmarketcompensation3(inputs);
	return ru_careers_benefits_topofmarketcompensation3(inputs);
});
var en_careers_benefits_opensourcetime2 = () => {
	return `Open source time`;
};
var fr_careers_benefits_opensourcetime2 = () => {
	return `Temps dédié à l'open source`;
};
var es_careers_benefits_opensourcetime2 = () => {
	return `Tiempo dedicado al código abierto`;
};
var de_careers_benefits_opensourcetime2 = () => {
	return `Zeit für Open Source`;
};
var it_careers_benefits_opensourcetime2 = () => {
	return `Tempo dedicato all'open source`;
};
var pt_careers_benefits_opensourcetime2 = () => {
	return `Tempo dedicado ao código aberto`;
};
var zh_careers_benefits_opensourcetime2 = () => {
	return `开源贡献时间`;
};
var ja_careers_benefits_opensourcetime2 = () => {
	return `オープンソースへの貢献時間`;
};
var ko_careers_benefits_opensourcetime2 = () => {
	return `오픈 소스 기여 시간`;
};
var ru_careers_benefits_opensourcetime2 = () => {
	return `Время на open source`;
};
var careers_benefits_opensourcetime2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_opensourcetime2(inputs);
	if (locale === "fr") return fr_careers_benefits_opensourcetime2(inputs);
	if (locale === "es") return es_careers_benefits_opensourcetime2(inputs);
	if (locale === "de") return de_careers_benefits_opensourcetime2(inputs);
	if (locale === "it") return it_careers_benefits_opensourcetime2(inputs);
	if (locale === "pt") return pt_careers_benefits_opensourcetime2(inputs);
	if (locale === "zh") return zh_careers_benefits_opensourcetime2(inputs);
	if (locale === "ja") return ja_careers_benefits_opensourcetime2(inputs);
	if (locale === "ko") return ko_careers_benefits_opensourcetime2(inputs);
	return ru_careers_benefits_opensourcetime2(inputs);
});
var en_open_positions_remote = () => {
	return `Remote`;
};
var fr_open_positions_remote = () => {
	return `À distance`;
};
var es_open_positions_remote = () => {
	return `Remoto`;
};
var de_open_positions_remote = () => {
	return `Remote`;
};
var it_open_positions_remote = () => {
	return `Remoto`;
};
var pt_open_positions_remote = () => {
	return `Remoto`;
};
var zh_open_positions_remote = () => {
	return `远程`;
};
var ja_open_positions_remote = () => {
	return `リモート`;
};
var ko_open_positions_remote = () => {
	return `원격`;
};
var ru_open_positions_remote = () => {
	return `Удаленно`;
};
var open_positions_remote = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_remote(inputs);
	if (locale === "fr") return fr_open_positions_remote(inputs);
	if (locale === "es") return es_open_positions_remote(inputs);
	if (locale === "de") return de_open_positions_remote(inputs);
	if (locale === "it") return it_open_positions_remote(inputs);
	if (locale === "pt") return pt_open_positions_remote(inputs);
	if (locale === "zh") return zh_open_positions_remote(inputs);
	if (locale === "ja") return ja_open_positions_remote(inputs);
	if (locale === "ko") return ko_open_positions_remote(inputs);
	return ru_open_positions_remote(inputs);
});
function CareersBenefits() {
	return jsx("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: [
			{
				label: open_positions_remote(),
				value: careers_benefits_workfromanywhereinthe4()
			},
			{
				label: careers_benefits_competitivepay1(),
				value: careers_benefits_topofmarketcompensation3()
			},
			{
				label: careers_benefits_opensourcetime2(),
				value: "20% time for OSS contributions"
			}
		].map((b) => jsxs("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [jsx("p", {
				className: "text-sm font-semibold text-foreground",
				children: b.label
			}), jsx("p", {
				className: "text-xs text-muted-foreground",
				children: b.value
			})]
		}, b.label))
	});
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(CareersBenefits, {}) });
}
export { Wrapped as default };

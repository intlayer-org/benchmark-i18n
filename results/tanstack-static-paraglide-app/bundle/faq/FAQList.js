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
var en_faq_list_whatisi18nbenchmark3 = () => {
	return `What is i18n Benchmark?`;
};
var fr_faq_list_whatisi18nbenchmark3 = () => {
	return `Qu'est-ce qu'i18n Benchmark ?`;
};
var es_faq_list_whatisi18nbenchmark3 = () => {
	return `¿Qué es i18n Benchmark?`;
};
var de_faq_list_whatisi18nbenchmark3 = () => {
	return `Was ist i18n Benchmark?`;
};
var it_faq_list_whatisi18nbenchmark3 = () => {
	return `Cos'è i18n Benchmark?`;
};
var pt_faq_list_whatisi18nbenchmark3 = () => {
	return `O que é o i18n Benchmark?`;
};
var zh_faq_list_whatisi18nbenchmark3 = () => {
	return `什么是 i18n Benchmark？`;
};
var ja_faq_list_whatisi18nbenchmark3 = () => {
	return `i18n Benchmarkとは何ですか？`;
};
var ko_faq_list_whatisi18nbenchmark3 = () => {
	return `i18n Benchmark란 무엇인가요?`;
};
var ru_faq_list_whatisi18nbenchmark3 = () => {
	return `Что такое i18n Benchmark?`;
};
var faq_list_whatisi18nbenchmark3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_whatisi18nbenchmark3(inputs);
	if (locale === "fr") return fr_faq_list_whatisi18nbenchmark3(inputs);
	if (locale === "es") return es_faq_list_whatisi18nbenchmark3(inputs);
	if (locale === "de") return de_faq_list_whatisi18nbenchmark3(inputs);
	if (locale === "it") return it_faq_list_whatisi18nbenchmark3(inputs);
	if (locale === "pt") return pt_faq_list_whatisi18nbenchmark3(inputs);
	if (locale === "zh") return zh_faq_list_whatisi18nbenchmark3(inputs);
	if (locale === "ja") return ja_faq_list_whatisi18nbenchmark3(inputs);
	if (locale === "ko") return ko_faq_list_whatisi18nbenchmark3(inputs);
	return ru_faq_list_whatisi18nbenchmark3(inputs);
});
var en_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.`;
};
var fr_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.`;
};
var es_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `i18n Benchmark es una suite de pruebas de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.`;
};
var de_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `i18n Benchmark ist eine Open-Source-Benchmarking-Suite, welche die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungs-Bibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.`;
};
var it_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `i18n Benchmark è una suite di test open source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.`;
};
var pt_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `O i18n Benchmark é uma suíte de testes de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.`;
};
var zh_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。`;
};
var ja_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。`;
};
var ko_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.`;
};
var ru_faq_list_whatisi18nbenchmarkanswer4 = () => {
	return `i18n Benchmark — это набор тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчика библиотек интернационализации для приложений JavaScript и React.`;
};
var faq_list_whatisi18nbenchmarkanswer4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_whatisi18nbenchmarkanswer4(inputs);
	if (locale === "fr") return fr_faq_list_whatisi18nbenchmarkanswer4(inputs);
	if (locale === "es") return es_faq_list_whatisi18nbenchmarkanswer4(inputs);
	if (locale === "de") return de_faq_list_whatisi18nbenchmarkanswer4(inputs);
	if (locale === "it") return it_faq_list_whatisi18nbenchmarkanswer4(inputs);
	if (locale === "pt") return pt_faq_list_whatisi18nbenchmarkanswer4(inputs);
	if (locale === "zh") return zh_faq_list_whatisi18nbenchmarkanswer4(inputs);
	if (locale === "ja") return ja_faq_list_whatisi18nbenchmarkanswer4(inputs);
	if (locale === "ko") return ko_faq_list_whatisi18nbenchmarkanswer4(inputs);
	return ru_faq_list_whatisi18nbenchmarkanswer4(inputs);
});
var en_faq_list_howarebenchmarksconducted3 = () => {
	return `How are benchmarks conducted?`;
};
var fr_faq_list_howarebenchmarksconducted3 = () => {
	return `Comment les benchmarks sont-ils menés ?`;
};
var es_faq_list_howarebenchmarksconducted3 = () => {
	return `¿Cómo se realizan los benchmarks?`;
};
var de_faq_list_howarebenchmarksconducted3 = () => {
	return `Wie werden die Benchmarks durchgeführt?`;
};
var it_faq_list_howarebenchmarksconducted3 = () => {
	return `Come vengono condotti i benchmark?`;
};
var pt_faq_list_howarebenchmarksconducted3 = () => {
	return `Como os benchmarks são conduzidos?`;
};
var zh_faq_list_howarebenchmarksconducted3 = () => {
	return `如何进行基准测试？`;
};
var ja_faq_list_howarebenchmarksconducted3 = () => {
	return `ベンチマークはどのように行われますか？`;
};
var ko_faq_list_howarebenchmarksconducted3 = () => {
	return `벤치마크는 어떻게 진행되나요?`;
};
var ru_faq_list_howarebenchmarksconducted3 = () => {
	return `Как проводятся бенчмарки?`;
};
var faq_list_howarebenchmarksconducted3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_howarebenchmarksconducted3(inputs);
	if (locale === "fr") return fr_faq_list_howarebenchmarksconducted3(inputs);
	if (locale === "es") return es_faq_list_howarebenchmarksconducted3(inputs);
	if (locale === "de") return de_faq_list_howarebenchmarksconducted3(inputs);
	if (locale === "it") return it_faq_list_howarebenchmarksconducted3(inputs);
	if (locale === "pt") return pt_faq_list_howarebenchmarksconducted3(inputs);
	if (locale === "zh") return zh_faq_list_howarebenchmarksconducted3(inputs);
	if (locale === "ja") return ja_faq_list_howarebenchmarksconducted3(inputs);
	if (locale === "ko") return ko_faq_list_howarebenchmarksconducted3(inputs);
	return ru_faq_list_howarebenchmarksconducted3(inputs);
});
var en_faq_list_werunstandardizedtestsin4 = () => {
	return `We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.`;
};
var fr_faq_list_werunstandardizedtestsin4 = () => {
	return `Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.`;
};
var es_faq_list_werunstandardizedtestsin4 = () => {
	return `Realizamos pruebas estandarizadas en entornos aislados utilizando un hardware consistente. Cada benchmark se repite varias veces para garantizar la significancia estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.`;
};
var de_faq_list_werunstandardizedtestsin4 = () => {
	return `Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.`;
};
var it_faq_list_werunstandardizedtestsin4 = () => {
	return `Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.`;
};
var pt_faq_list_werunstandardizedtestsin4 = () => {
	return `Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.`;
};
var zh_faq_list_werunstandardizedtestsin4 = () => {
	return `我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次，以确保统计显著性。所有测试配置都可以在我们的 GitHub 仓库中公开访问。`;
};
var ja_faq_list_werunstandardizedtestsin4 = () => {
	return `一貫したハードウェアを使用し、隔離された環境で標準化されたテストを実行します。各ベンチマークは、統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。`;
};
var ko_faq_list_werunstandardizedtestsin4 = () => {
	return `일관된 하드웨어를 사용하는 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 확보하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.`;
};
var ru_faq_list_werunstandardizedtestsin4 = () => {
	return `Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.`;
};
var faq_list_werunstandardizedtestsin4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_werunstandardizedtestsin4(inputs);
	if (locale === "fr") return fr_faq_list_werunstandardizedtestsin4(inputs);
	if (locale === "es") return es_faq_list_werunstandardizedtestsin4(inputs);
	if (locale === "de") return de_faq_list_werunstandardizedtestsin4(inputs);
	if (locale === "it") return it_faq_list_werunstandardizedtestsin4(inputs);
	if (locale === "pt") return pt_faq_list_werunstandardizedtestsin4(inputs);
	if (locale === "zh") return zh_faq_list_werunstandardizedtestsin4(inputs);
	if (locale === "ja") return ja_faq_list_werunstandardizedtestsin4(inputs);
	if (locale === "ko") return ko_faq_list_werunstandardizedtestsin4(inputs);
	return ru_faq_list_werunstandardizedtestsin4(inputs);
});
var en_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `Which libraries are currently supported?`;
};
var fr_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `Quelles bibliothèques sont actuellement supportées ?`;
};
var es_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `¿Qué bibliotecas son compatibles actualmente?`;
};
var de_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `Welche Bibliotheken werden derzeit unterstützt?`;
};
var it_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `Quali librerie sono attualmente supportate?`;
};
var pt_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `Quais bibliotecas são suportadas atualmente?`;
};
var zh_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `目前支持哪些库？`;
};
var ja_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `現在サポートされているライブラリは何ですか？`;
};
var ko_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `현재 어떤 라이브러리가 지원되나요?`;
};
var ru_faq_list_whichlibrariesarecurrentlysupported4 = () => {
	return `Какие библиотеки поддерживаются в настоящее время?`;
};
var faq_list_whichlibrariesarecurrentlysupported4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_whichlibrariesarecurrentlysupported4(inputs);
	if (locale === "fr") return fr_faq_list_whichlibrariesarecurrentlysupported4(inputs);
	if (locale === "es") return es_faq_list_whichlibrariesarecurrentlysupported4(inputs);
	if (locale === "de") return de_faq_list_whichlibrariesarecurrentlysupported4(inputs);
	if (locale === "it") return it_faq_list_whichlibrariesarecurrentlysupported4(inputs);
	if (locale === "pt") return pt_faq_list_whichlibrariesarecurrentlysupported4(inputs);
	if (locale === "zh") return zh_faq_list_whichlibrariesarecurrentlysupported4(inputs);
	if (locale === "ja") return ja_faq_list_whichlibrariesarecurrentlysupported4(inputs);
	if (locale === "ko") return ko_faq_list_whichlibrariesarecurrentlysupported4(inputs);
	return ru_faq_list_whichlibrariesarecurrentlysupported4(inputs);
});
var en_faq_list_wesupportreacti18nextreact4 = () => {
	return `We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.`;
};
var fr_faq_list_wesupportreacti18nextreact4 = () => {
	return `Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.`;
};
var es_faq_list_wesupportreacti18nextreact4 = () => {
	return `Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.`;
};
var de_faq_list_wesupportreacti18nextreact4 = () => {
	return `Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.`;
};
var it_faq_list_wesupportreacti18nextreact4 = () => {
	return `Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.`;
};
var pt_faq_list_wesupportreacti18nextreact4 = () => {
	return `Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.`;
};
var zh_faq_list_wesupportreacti18nextreact4 = () => {
	return `我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。`;
};
var ja_faq_list_wesupportreacti18nextreact4 = () => {
	return `react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。`;
};
var ko_faq_list_wesupportreacti18nextreact4 = () => {
	return `react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다.`;
};
var ru_faq_list_wesupportreacti18nextreact4 = () => {
	return `Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.`;
};
var faq_list_wesupportreacti18nextreact4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_wesupportreacti18nextreact4(inputs);
	if (locale === "fr") return fr_faq_list_wesupportreacti18nextreact4(inputs);
	if (locale === "es") return es_faq_list_wesupportreacti18nextreact4(inputs);
	if (locale === "de") return de_faq_list_wesupportreacti18nextreact4(inputs);
	if (locale === "it") return it_faq_list_wesupportreacti18nextreact4(inputs);
	if (locale === "pt") return pt_faq_list_wesupportreacti18nextreact4(inputs);
	if (locale === "zh") return zh_faq_list_wesupportreacti18nextreact4(inputs);
	if (locale === "ja") return ja_faq_list_wesupportreacti18nextreact4(inputs);
	if (locale === "ko") return ko_faq_list_wesupportreacti18nextreact4(inputs);
	return ru_faq_list_wesupportreacti18nextreact4(inputs);
});
var en_faq_list_canisubmitmyown4 = () => {
	return `Can I submit my own benchmarks?`;
};
var fr_faq_list_canisubmitmyown4 = () => {
	return `Puis-je soumettre mes propres benchmarks ?`;
};
var es_faq_list_canisubmitmyown4 = () => {
	return `¿Puedo enviar mis propios benchmarks?`;
};
var de_faq_list_canisubmitmyown4 = () => {
	return `Kann ich meine eigenen Benchmarks einreichen?`;
};
var it_faq_list_canisubmitmyown4 = () => {
	return `Posso inviare i miei benchmark?`;
};
var pt_faq_list_canisubmitmyown4 = () => {
	return `Posso enviar meus próprios benchmarks?`;
};
var zh_faq_list_canisubmitmyown4 = () => {
	return `我可以提交自己的基准测试吗？`;
};
var ja_faq_list_canisubmitmyown4 = () => {
	return `自分のベンチマークを提出できますか？`;
};
var ko_faq_list_canisubmitmyown4 = () => {
	return `저만의 벤치마크를 제출할 수 있나요?`;
};
var ru_faq_list_canisubmitmyown4 = () => {
	return `Могу ли я отправить свои собственные бенчмарки?`;
};
var faq_list_canisubmitmyown4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_canisubmitmyown4(inputs);
	if (locale === "fr") return fr_faq_list_canisubmitmyown4(inputs);
	if (locale === "es") return es_faq_list_canisubmitmyown4(inputs);
	if (locale === "de") return de_faq_list_canisubmitmyown4(inputs);
	if (locale === "it") return it_faq_list_canisubmitmyown4(inputs);
	if (locale === "pt") return pt_faq_list_canisubmitmyown4(inputs);
	if (locale === "zh") return zh_faq_list_canisubmitmyown4(inputs);
	if (locale === "ja") return ja_faq_list_canisubmitmyown4(inputs);
	if (locale === "ko") return ko_faq_list_canisubmitmyown4(inputs);
	return ru_faq_list_canisubmitmyown4(inputs);
});
var en_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.`;
};
var fr_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `Oui ! Les soumissions de benchmarks par la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.`;
};
var es_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía un pull request. Nuestro equipo revisará y combinará las presentaciones que califiquen.`;
};
var de_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `Ja! Einreichungen von Benchmarks durch die Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.`;
};
var it_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.`;
};
var pt_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `Sim! Submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.`;
};
var zh_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `是的！欢迎社区提交基准测试。Fork 我们的仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审查并合并合格的提交。`;
};
var ja_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `はい！コミュニティからのベンチマークの提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが内容を確認し、適格なものをマージします。`;
};
var ko_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `네! 커뮤니티의 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 마지(merge)할 것입니다.`;
};
var ru_faq_list_yescommunitybenchmarksubmissionsare4 = () => {
	return `Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.`;
};
var faq_list_yescommunitybenchmarksubmissionsare4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
	if (locale === "fr") return fr_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
	if (locale === "es") return es_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
	if (locale === "de") return de_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
	if (locale === "it") return it_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
	if (locale === "pt") return pt_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
	if (locale === "zh") return zh_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
	if (locale === "ja") return ja_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
	if (locale === "ko") return ko_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
	return ru_faq_list_yescommunitybenchmarksubmissionsare4(inputs);
});
var en_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `How often are benchmarks updated?`;
};
var fr_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `À quelle fréquence les benchmarks sont-ils mis à jour ?`;
};
var es_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `¿Con qué frecuencia se funcionan los benchmarks?`;
};
var de_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `Wie oft werden die Benchmarks aktualisiert?`;
};
var it_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `Con quale frequenza vengono aggiornati i benchmark?`;
};
var pt_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `Com que frequência os benchmarks são atualizados?`;
};
var zh_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `基准测试多久更新一次？`;
};
var ja_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `ベンチマークはどのくらいの頻度で更新されますか？`;
};
var ko_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `벤치마크는 얼마나 자주 업데이트되나요?`;
};
var ru_faq_list_howoftenarebenchmarksupdated4 = () => {
	return `Как часто обновляются бенчмарки?`;
};
var faq_list_howoftenarebenchmarksupdated4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_howoftenarebenchmarksupdated4(inputs);
	if (locale === "fr") return fr_faq_list_howoftenarebenchmarksupdated4(inputs);
	if (locale === "es") return es_faq_list_howoftenarebenchmarksupdated4(inputs);
	if (locale === "de") return de_faq_list_howoftenarebenchmarksupdated4(inputs);
	if (locale === "it") return it_faq_list_howoftenarebenchmarksupdated4(inputs);
	if (locale === "pt") return pt_faq_list_howoftenarebenchmarksupdated4(inputs);
	if (locale === "zh") return zh_faq_list_howoftenarebenchmarksupdated4(inputs);
	if (locale === "ja") return ja_faq_list_howoftenarebenchmarksupdated4(inputs);
	if (locale === "ko") return ko_faq_list_howoftenarebenchmarksupdated4(inputs);
	return ru_faq_list_howoftenarebenchmarksupdated4(inputs);
});
var en_faq_list_wererunallbenchmarks4 = () => {
	return `We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.`;
};
var fr_faq_list_wererunallbenchmarks4 = () => {
	return `Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de re-benchmarking immédiat.`;
};
var es_faq_list_wererunallbenchmarks4 = () => {
	return `Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.`;
};
var de_faq_list_wererunallbenchmarks4 = () => {
	return `Wir führen alle Benchmarks wöchentlich gegen die neuesten stabilen Versionen jeder Bibliothek neu aus. Major-Releases lösen einen sofortigen Re-Benchmark-Zyklus aus.`;
};
var it_faq_list_wererunallbenchmarks4 = () => {
	return `Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. Le versioni principali in uscita attivano un immediato ciclo di re-benchmark.`;
};
var pt_faq_list_wererunallbenchmarks4 = () => {
	return `Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmark.`;
};
var zh_faq_list_wererunallbenchmarks4 = () => {
	return `我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本更新将立即触发重新测试周期。`;
};
var ja_faq_list_wererunallbenchmarks4 = () => {
	return `各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。`;
};
var ko_faq_list_wererunallbenchmarks4 = () => {
	return `매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다.`;
};
var ru_faq_list_wererunallbenchmarks4 = () => {
	return `Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.`;
};
var faq_list_wererunallbenchmarks4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_wererunallbenchmarks4(inputs);
	if (locale === "fr") return fr_faq_list_wererunallbenchmarks4(inputs);
	if (locale === "es") return es_faq_list_wererunallbenchmarks4(inputs);
	if (locale === "de") return de_faq_list_wererunallbenchmarks4(inputs);
	if (locale === "it") return it_faq_list_wererunallbenchmarks4(inputs);
	if (locale === "pt") return pt_faq_list_wererunallbenchmarks4(inputs);
	if (locale === "zh") return zh_faq_list_wererunallbenchmarks4(inputs);
	if (locale === "ja") return ja_faq_list_wererunallbenchmarks4(inputs);
	if (locale === "ko") return ko_faq_list_wererunallbenchmarks4(inputs);
	return ru_faq_list_wererunallbenchmarks4(inputs);
});
var en_faq_list_isthedatareliable3 = () => {
	return `Is the data reliable?`;
};
var fr_faq_list_isthedatareliable3 = () => {
	return `Les données sont-elles fiables ?`;
};
var es_faq_list_isthedatareliable3 = () => {
	return `¿Son fiables los datos?`;
};
var de_faq_list_isthedatareliable3 = () => {
	return `Sind die Daten zuverlässig?`;
};
var it_faq_list_isthedatareliable3 = () => {
	return `I dati sono affidabili?`;
};
var pt_faq_list_isthedatareliable3 = () => {
	return `Os dados são confiáveis?`;
};
var zh_faq_list_isthedatareliable3 = () => {
	return `数据可靠吗？`;
};
var ja_faq_list_isthedatareliable3 = () => {
	return `データは信頼できますか？`;
};
var ko_faq_list_isthedatareliable3 = () => {
	return `데이터는 신뢰할 수 있나요?`;
};
var ru_faq_list_isthedatareliable3 = () => {
	return `Надежны ли данные?`;
};
var faq_list_isthedatareliable3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_isthedatareliable3(inputs);
	if (locale === "fr") return fr_faq_list_isthedatareliable3(inputs);
	if (locale === "es") return es_faq_list_isthedatareliable3(inputs);
	if (locale === "de") return de_faq_list_isthedatareliable3(inputs);
	if (locale === "it") return it_faq_list_isthedatareliable3(inputs);
	if (locale === "pt") return pt_faq_list_isthedatareliable3(inputs);
	if (locale === "zh") return zh_faq_list_isthedatareliable3(inputs);
	if (locale === "ja") return ja_faq_list_isthedatareliable3(inputs);
	if (locale === "ko") return ko_faq_list_isthedatareliable3(inputs);
	return ru_faq_list_isthedatareliable3(inputs);
});
var en_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.`;
};
var fr_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `Nous suivons une méthodologie statistique rigoureuse, incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.`;
};
var es_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.`;
};
var de_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Phasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.`;
};
var it_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per una completa trasparenza.`;
};
var pt_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.`;
};
var zh_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随我们的分析一起发布，以确保完全透明。`;
};
var ja_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。すべての生データは、完全な透明性を確保するために分析結果とともに公開されます。`;
};
var ko_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `웜업 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석 결과와 함께 게시됩니다.`;
};
var ru_faq_list_wefollowrigorousstatisticalmethodology4 = () => {
	return `Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.`;
};
var faq_list_wefollowrigorousstatisticalmethodology4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
	if (locale === "fr") return fr_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
	if (locale === "es") return es_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
	if (locale === "de") return de_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
	if (locale === "it") return it_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
	if (locale === "pt") return pt_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
	if (locale === "zh") return zh_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
	if (locale === "ja") return ja_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
	if (locale === "ko") return ko_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
	return ru_faq_list_wefollowrigorousstatisticalmethodology4(inputs);
});
var en_faq_list_doyouofferconsultingservices4 = () => {
	return `Do you offer consulting services?`;
};
var fr_faq_list_doyouofferconsultingservices4 = () => {
	return `Offrez-vous des services de conseil ?`;
};
var es_faq_list_doyouofferconsultingservices4 = () => {
	return `¿Ofrecen servicios de consultoría?`;
};
var de_faq_list_doyouofferconsultingservices4 = () => {
	return `Bieten Sie Beratungsdienstleistungen an?`;
};
var it_faq_list_doyouofferconsultingservices4 = () => {
	return `Offrite servizi di consulenza?`;
};
var pt_faq_list_doyouofferconsultingservices4 = () => {
	return `Vocês oferecem serviços de consultoria?`;
};
var zh_faq_list_doyouofferconsultingservices4 = () => {
	return `你们提供咨询服务吗？`;
};
var ja_faq_list_doyouofferconsultingservices4 = () => {
	return `コンサルティングサービスは提供していますか？`;
};
var ko_faq_list_doyouofferconsultingservices4 = () => {
	return `컨설팅 서비스를 제공하나요?`;
};
var ru_faq_list_doyouofferconsultingservices4 = () => {
	return `Предлагаете ли вы консультационные услуги?`;
};
var faq_list_doyouofferconsultingservices4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_doyouofferconsultingservices4(inputs);
	if (locale === "fr") return fr_faq_list_doyouofferconsultingservices4(inputs);
	if (locale === "es") return es_faq_list_doyouofferconsultingservices4(inputs);
	if (locale === "de") return de_faq_list_doyouofferconsultingservices4(inputs);
	if (locale === "it") return it_faq_list_doyouofferconsultingservices4(inputs);
	if (locale === "pt") return pt_faq_list_doyouofferconsultingservices4(inputs);
	if (locale === "zh") return zh_faq_list_doyouofferconsultingservices4(inputs);
	if (locale === "ja") return ja_faq_list_doyouofferconsultingservices4(inputs);
	if (locale === "ko") return ko_faq_list_doyouofferconsultingservices4(inputs);
	return ru_faq_list_doyouofferconsultingservices4(inputs);
});
var en_faq_list_yesourenterpriseplanincludes4 = () => {
	return `Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.`;
};
var fr_faq_list_yesourenterpriseplanincludes4 = () => {
	return `Oui, notre offre Enterprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes spécifiques.`;
};
var es_faq_list_yesourenterpriseplanincludes4 = () => {
	return `Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso, escala y limitaciones específicas.`;
};
var de_faq_list_yesourenterpriseplanincludes4 = () => {
	return `Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.`;
};
var it_faq_list_yesourenterpriseplanincludes4 = () => {
	return `Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul caso d'uso specifico, sulla scala e sui vincoli.`;
};
var pt_faq_list_yesourenterpriseplanincludes4 = () => {
	return `Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicas.`;
};
var zh_faq_list_yesourenterpriseplanincludes4 = () => {
	return `是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。`;
};
var ja_faq_list_yesourenterpriseplanincludes4 = () => {
	return `はい、Enterpriseプランにはi18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいたカスタマイズされた推奨事項を提供できます。`;
};
var ko_faq_list_yesourenterpriseplanincludes4 = () => {
	return `네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.`;
};
var ru_faq_list_yesourenterpriseplanincludes4 = () => {
	return `Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.`;
};
var faq_list_yesourenterpriseplanincludes4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_yesourenterpriseplanincludes4(inputs);
	if (locale === "fr") return fr_faq_list_yesourenterpriseplanincludes4(inputs);
	if (locale === "es") return es_faq_list_yesourenterpriseplanincludes4(inputs);
	if (locale === "de") return de_faq_list_yesourenterpriseplanincludes4(inputs);
	if (locale === "it") return it_faq_list_yesourenterpriseplanincludes4(inputs);
	if (locale === "pt") return pt_faq_list_yesourenterpriseplanincludes4(inputs);
	if (locale === "zh") return zh_faq_list_yesourenterpriseplanincludes4(inputs);
	if (locale === "ja") return ja_faq_list_yesourenterpriseplanincludes4(inputs);
	if (locale === "ko") return ko_faq_list_yesourenterpriseplanincludes4(inputs);
	return ru_faq_list_yesourenterpriseplanincludes4(inputs);
});
var en_faq_list_howcanicontribute3 = () => {
	return `How can I contribute?`;
};
var fr_faq_list_howcanicontribute3 = () => {
	return `Comment puis-je contribuer ?`;
};
var es_faq_list_howcanicontribute3 = () => {
	return `¿Cómo puedo contribuir?`;
};
var de_faq_list_howcanicontribute3 = () => {
	return `Wie kann ich beitragen?`;
};
var it_faq_list_howcanicontribute3 = () => {
	return `Come posso contribuire?`;
};
var pt_faq_list_howcanicontribute3 = () => {
	return `Como posso contribuir?`;
};
var zh_faq_list_howcanicontribute3 = () => {
	return `我该如何贡献？`;
};
var ja_faq_list_howcanicontribute3 = () => {
	return `どのように貢献できますか？`;
};
var ko_faq_list_howcanicontribute3 = () => {
	return `어떻게 기여할 수 있나요?`;
};
var ru_faq_list_howcanicontribute3 = () => {
	return `Как я могу помочь ?`;
};
var faq_list_howcanicontribute3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_howcanicontribute3(inputs);
	if (locale === "fr") return fr_faq_list_howcanicontribute3(inputs);
	if (locale === "es") return es_faq_list_howcanicontribute3(inputs);
	if (locale === "de") return de_faq_list_howcanicontribute3(inputs);
	if (locale === "it") return it_faq_list_howcanicontribute3(inputs);
	if (locale === "pt") return pt_faq_list_howcanicontribute3(inputs);
	if (locale === "zh") return zh_faq_list_howcanicontribute3(inputs);
	if (locale === "ja") return ja_faq_list_howcanicontribute3(inputs);
	if (locale === "ko") return ko_faq_list_howcanicontribute3(inputs);
	return ru_faq_list_howcanicontribute3(inputs);
});
var en_faq_list_therearemanywaysto4 = () => {
	return `There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.`;
};
var fr_faq_list_therearemanywaysto4 = () => {
	return `Il y a de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.`;
};
var es_faq_list_therearemanywaysto4 = () => {
	return `Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de bugs, sugerir nuevas métricas o patrocinar el proyecto. Visita nuestro repositorio de GitHub para más detalles.`;
};
var de_faq_list_therearemanywaysto4 = () => {
	return `Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.`;
};
var it_faq_list_therearemanywaysto4 = () => {
	return `Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.`;
};
var pt_faq_list_therearemanywaysto4 = () => {
	return `Existem muitas maneiras de contribuir: envie benchmarks, melhore a documentação, relate bugs, sugira novas métricas ou patrocine o projeto. Visite nosso repositório no GitHub para mais detalhes.`;
};
var zh_faq_list_therearemanywaysto4 = () => {
	return `有很多贡献方式：提交基准测试、改进文档、报告 Bug、建议新指标或赞助项目。访问我们的 GitHub 仓库了解更多详情。`;
};
var ja_faq_list_therearemanywaysto4 = () => {
	return `貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。`;
};
var ko_faq_list_therearemanywaysto4 = () => {
	return `기여하는 방법은 다양합니다: 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원. 자세한 내용은 GitHub 저장소를 방문하세요.`;
};
var ru_faq_list_therearemanywaysto4 = () => {
	return `Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.`;
};
var faq_list_therearemanywaysto4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_faq_list_therearemanywaysto4(inputs);
	if (locale === "fr") return fr_faq_list_therearemanywaysto4(inputs);
	if (locale === "es") return es_faq_list_therearemanywaysto4(inputs);
	if (locale === "de") return de_faq_list_therearemanywaysto4(inputs);
	if (locale === "it") return it_faq_list_therearemanywaysto4(inputs);
	if (locale === "pt") return pt_faq_list_therearemanywaysto4(inputs);
	if (locale === "zh") return zh_faq_list_therearemanywaysto4(inputs);
	if (locale === "ja") return ja_faq_list_therearemanywaysto4(inputs);
	if (locale === "ko") return ko_faq_list_therearemanywaysto4(inputs);
	return ru_faq_list_therearemanywaysto4(inputs);
});
function FAQList() {
	return jsx("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: [
			{
				q: faq_list_whatisi18nbenchmark3(),
				a: faq_list_whatisi18nbenchmarkanswer4()
			},
			{
				q: faq_list_howarebenchmarksconducted3(),
				a: faq_list_werunstandardizedtestsin4()
			},
			{
				q: faq_list_whichlibrariesarecurrentlysupported4(),
				a: faq_list_wesupportreacti18nextreact4()
			},
			{
				q: faq_list_canisubmitmyown4(),
				a: faq_list_yescommunitybenchmarksubmissionsare4()
			},
			{
				q: faq_list_howoftenarebenchmarksupdated4(),
				a: faq_list_wererunallbenchmarks4()
			},
			{
				q: faq_list_isthedatareliable3(),
				a: faq_list_wefollowrigorousstatisticalmethodology4()
			},
			{
				q: faq_list_doyouofferconsultingservices4(),
				a: faq_list_yesourenterpriseplanincludes4()
			},
			{
				q: faq_list_howcanicontribute3(),
				a: faq_list_therearemanywaysto4()
			}
		].map((f) => jsxs("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [jsx("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: f.q
			}), jsx("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: f.a
			})]
		}, f.q))
	});
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(FAQList, {}) });
}
export { Wrapped as default };

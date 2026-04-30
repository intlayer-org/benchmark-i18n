import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { derived, writable } from "svelte/store";
var URLPattern = {};
var locales$1 = [
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
	for (const locale of locales$1) if (locale.toLowerCase() === lowerValue) return locale;
}
function assertIsLocale(input) {
	const locale = toLocale(input);
	if (locale) return locale;
	throw new Error(`Invalid locale: ${input}. Expected one of: ${locales$1.join(", ")}`);
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
function isLocale(value) {
	return locales.includes(value);
}
var PAGE_SEGMENTS = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function parsePath(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	if (parts.length === 0) return { kind: "notfound" };
	const [locale, ...rest] = parts;
	if (!isLocale(locale)) return { kind: "notfound" };
	const seg = rest[0] ?? "";
	if (rest.length > 1) return { kind: "notfound" };
	if (!PAGE_SEGMENTS.has(seg)) return { kind: "notfound" };
	return {
		kind: "ok",
		locale,
		page: seg
	};
}
var route = derived(writable(typeof window !== "undefined" ? window.location.pathname : "/en"), (p) => parsePath(p));
var root_2 = $.from_html(`<a class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_3 = $.from_html(`<a target="_blank" rel="noreferrer" class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_1 = $.from_html(`<li><!></li>`);
var root = $.from_html(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <ul class="space-y-1"></ul></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></div> <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground"> </div></div></footer>`);
function Footer($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const footerLinks = $.derived(() => [
		{
			label: footer_github(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: footer_methodology(),
			to: `/${$.get(currentLocale)}/about`,
			isInternal: true
		},
		{
			label: footer_contributing(),
			to: `/${$.get(currentLocale)}/contact`,
			isInternal: true
		}
	]);
	var footer = root();
	var div = $.child(footer);
	var div_1 = $.child(div);
	var div_2 = $.child(div_1);
	var h3 = $.child(div_2);
	var text = $.child(h3, true);
	$.reset(h3);
	var p = $.sibling(h3, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	$.reset(div_2);
	var div_3 = $.sibling(div_2, 2);
	var h3_1 = $.child(div_3);
	var text_2 = $.child(h3_1, true);
	$.reset(h3_1);
	var ul = $.sibling(h3_1, 2);
	$.each(ul, 21, () => $.get(footerLinks), (linkEl) => linkEl.label, ($$anchor, linkEl) => {
		var li = root_1();
		var node = $.child(li);
		var consequent = ($$anchor) => {
			var a = root_2();
			var text_3 = $.child(a, true);
			$.reset(a);
			$.template_effect(() => {
				$.set_attribute(a, "href", $.get(linkEl).to);
				$.set_text(text_3, $.get(linkEl).label);
			});
			$.append($$anchor, a);
		};
		var alternate = ($$anchor) => {
			var a_1 = root_3();
			var text_4 = $.child(a_1, true);
			$.reset(a_1);
			$.template_effect(() => {
				$.set_attribute(a_1, "href", $.get(linkEl).href);
				$.set_text(text_4, $.get(linkEl).label);
			});
			$.append($$anchor, a_1);
		};
		$.if(node, ($$render) => {
			if ($.get(linkEl).isInternal) $$render(consequent);
			else $$render(alternate, -1);
		});
		$.reset(li);
		$.append($$anchor, li);
	});
	$.reset(ul);
	$.reset(div_3);
	var div_4 = $.sibling(div_3, 2);
	var h3_2 = $.child(div_4);
	var text_5 = $.child(h3_2, true);
	$.reset(h3_2);
	var p_1 = $.sibling(h3_2, 2);
	var text_6 = $.child(p_1, true);
	$.reset(p_1);
	$.reset(div_4);
	$.reset(div_1);
	var div_5 = $.sibling(div_1, 2);
	var text_7 = $.child(div_5, true);
	$.reset(div_5);
	$.reset(div);
	$.reset(footer);
	$.template_effect(($0, $1, $2, $3, $4, $5) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_5, $3);
		$.set_text(text_6, $4);
		$.set_text(text_7, $5);
	}, [
		() => footer_title(),
		() => footer_description(),
		() => footer_resources(),
		() => footer_contact(),
		() => shared_contactemail1(),
		() => footer_builtwith1()
	]);
	$.append($$anchor, footer);
	$.pop();
	$$cleanup();
}
export { Footer as default };

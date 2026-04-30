import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { onMount } from "svelte";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";
import { derived, get, writable } from "svelte/store";
import ChevronDown from "lucide-svelte/icons/chevron-down";
import "svelte/internal/flags/legacy";
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
function getLocaleName(locale) {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch {
		return locale.toUpperCase();
	}
}
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
var pathname = writable(typeof window !== "undefined" ? window.location.pathname : "/en");
var route = derived(pathname, (p) => parsePath(p));
function navigate(url, replace = false) {
	if (typeof window === "undefined") return;
	if (replace) history.replaceState(null, "", url);
	else history.pushState(null, "", url);
	pathname.set(window.location.pathname);
}
var root_2$1 = $.from_html(`<a class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_3 = $.from_html(`<a target="_blank" rel="noreferrer" class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_1$2 = $.from_html(`<li><!></li>`);
var root$4 = $.from_html(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <ul class="space-y-1"></ul></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></div> <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground"> </div></div></footer>`);
function Footer($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const footerLinks = $.derived(() => [
		{
			label: (void 0)(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: (void 0)(),
			to: `/${$.get(currentLocale)}/about`,
			isInternal: true
		},
		{
			label: (void 0)(),
			to: `/${$.get(currentLocale)}/contact`,
			isInternal: true
		}
	]);
	var footer = root$4();
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
		var li = root_1$2();
		var node = $.child(li);
		var consequent = ($$anchor) => {
			var a = root_2$1();
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
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]);
	$.append($$anchor, footer);
	$.pop();
	$$cleanup();
}
var root_1$1 = $.from_html(`<option> </option>`);
var root$3 = $.from_html(`<div class="flex items-center gap-2"><select class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none"></select></div>`);
function LocaleSwitcher($$anchor, $$props) {
	$.push($$props, false);
	const $pathname = () => $.store_get(pathname, "$pathname", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	function handleLocaleChange(e) {
		const newLocale = e.target.value;
		navigate(get(pathname).replace(/^\/[^/]+/, `/${newLocale}`) + window.location.search + window.location.hash, false);
	}
	$.init();
	var div = root$3();
	var select = $.child(div);
	$.each(select, 5, () => locales, (localeItem) => localeItem, ($$anchor, localeItem) => {
		var option = root_1$1();
		var text = $.child(option, true);
		$.reset(option);
		var option_value = {};
		$.template_effect(($0) => {
			$.set_text(text, $0);
			if (option_value !== (option_value = $.get(localeItem))) option.value = (option.__value = $.get(localeItem)) ?? "";
		}, [() => getLocaleName($.get(localeItem))]);
		$.append($$anchor, option);
	});
	$.reset(select);
	var select_value;
	$.init_select(select);
	$.reset(div);
	$.template_effect(($0) => {
		if (select_value !== (select_value = $0)) select.value = (select.__value = $0) ?? "", $.select_option(select, $0);
	}, [() => $pathname().split("/").filter(Boolean)[0] ?? "en"]);
	$.delegated("change", select, handleLocaleChange);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
$.delegate(["change"]);
var root$2 = $.from_html(`<button type="button" class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"> </button>`);
function ThemeToggle($$anchor, $$props) {
	$.push($$props, true);
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
	let mode = $.state("auto");
	onMount(() => {
		const initialMode = getInitialMode();
		$.set(mode, initialMode, true);
		applyThemeMode(initialMode);
	});
	$.user_effect(() => {
		if ($.get(mode) !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	});
	function toggleMode() {
		const nextMode = $.get(mode) === "light" ? "dark" : $.get(mode) === "dark" ? "auto" : "light";
		$.set(mode, nextMode, true);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = $.derived(() => $.get(mode) === "auto" ? (void 0)() : (void 0)({ mode: $.get(mode) }));
	const buttonText = $.derived(() => $.get(mode) === "auto" ? (void 0)() : $.get(mode) === "dark" ? (void 0)() : (void 0)());
	var button = root$2();
	var text = $.child(button, true);
	$.reset(button);
	$.template_effect(() => {
		$.set_attribute(button, "aria-label", $.get(label));
		$.set_attribute(button, "title", $.get(label));
		$.set_text(text, $.get(buttonText));
	});
	$.delegated("click", button, toggleMode);
	$.append($$anchor, button);
	$.pop();
}
$.delegate(["click"]);
var root_2 = $.from_html(`<a class="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"> </a>`);
var root_1 = $.from_html(`<div class="absolute top-full left-0 w-48 pt-2" role="presentation"><div class="overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg"></div></div>`);
var root$1 = $.from_html(`<header class="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg"><nav class="container flex h-16 items-center justify-between"><div class="flex items-center gap-8"><a class="text-lg font-bold tracking-tight text-primary no-underline"> </a> <div class="hidden items-center gap-6 text-sm font-medium md:flex"><a> </a> <a> </a> <div class="relative"><button type="button" class="nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent"> <!></button> <!></div></div></div> <div class="flex items-center gap-4"><a href="https://github.com/intlayer-org/benchmark-i18n" target="_blank" rel="noreferrer" class="text-muted-foreground transition hover:text-foreground"><span class="sr-only"> </span> <svg viewBox="0 0 16 16" aria-hidden="true" width="20" height="20"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a> <!> <!></div></nav></header>`);
function Header($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	let isMockPagesOpen = $.state(false);
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const mockPages = $.derived(() => [
		{
			to: `/${$.get(currentLocale)}/products`,
			label: (void 0)()
		},
		{
			to: `/${$.get(currentLocale)}/pricing`,
			label: (void 0)()
		},
		{
			to: `/${$.get(currentLocale)}/team`,
			label: (void 0)()
		},
		{
			to: `/${$.get(currentLocale)}/blog`,
			label: (void 0)()
		},
		{
			to: `/${$.get(currentLocale)}/careers`,
			label: (void 0)()
		},
		{
			to: `/${$.get(currentLocale)}/faq`,
			label: (void 0)()
		},
		{
			to: `/${$.get(currentLocale)}/contact`,
			label: (void 0)()
		},
		{
			to: `/${$.get(currentLocale)}/settings`,
			label: (void 0)()
		}
	]);
	const homeActive = $.derived(() => $route().kind === "ok" && $route().page === "");
	const methodologyActive = $.derived(() => $route().kind === "ok" && $route().page === "about");
	var header = root$1();
	var nav = $.child(header);
	var div = $.child(nav);
	var a = $.child(div);
	var text = $.child(a, true);
	$.reset(a);
	var div_1 = $.sibling(a, 2);
	var a_1 = $.child(div_1);
	let classes;
	var text_1 = $.child(a_1, true);
	$.reset(a_1);
	var a_2 = $.sibling(a_1, 2);
	let classes_1;
	var text_2 = $.child(a_2, true);
	$.reset(a_2);
	var div_2 = $.sibling(a_2, 2);
	var button = $.child(div_2);
	var text_3 = $.child(button);
	var node = $.sibling(text_3);
	{
		let $0 = $.derived(() => $.get(isMockPagesOpen) ? "transition-transform rotate-180" : "transition-transform");
		ChevronDown(node, {
			size: 14,
			get class() {
				return $.get($0);
			}
		});
	}
	$.reset(button);
	var node_1 = $.sibling(button, 2);
	var consequent = ($$anchor) => {
		var div_3 = root_1();
		var div_4 = $.child(div_3);
		$.each(div_4, 21, () => $.get(mockPages), (page) => page.to, ($$anchor, page) => {
			var a_3 = root_2();
			var text_4 = $.child(a_3, true);
			$.reset(a_3);
			$.template_effect(() => {
				$.set_attribute(a_3, "href", $.get(page).to);
				$.set_text(text_4, $.get(page).label);
			});
			$.delegated("click", a_3, () => $.set(isMockPagesOpen, false));
			$.append($$anchor, a_3);
		});
		$.reset(div_4);
		$.reset(div_3);
		$.event("mouseenter", div_3, () => $.set(isMockPagesOpen, true));
		$.event("mouseleave", div_3, () => $.set(isMockPagesOpen, false));
		$.append($$anchor, div_3);
	};
	$.if(node_1, ($$render) => {
		if ($.get(isMockPagesOpen)) $$render(consequent);
	});
	$.reset(div_2);
	$.reset(div_1);
	$.reset(div);
	var div_5 = $.sibling(div, 2);
	var a_4 = $.child(div_5);
	var span = $.child(a_4);
	var text_5 = $.child(span, true);
	$.reset(span);
	$.next(2);
	$.reset(a_4);
	var node_2 = $.sibling(a_4, 2);
	LocaleSwitcher(node_2, {});
	ThemeToggle($.sibling(node_2, 2), {});
	$.reset(div_5);
	$.reset(nav);
	$.reset(header);
	$.template_effect(($0, $1, $2, $3, $4) => {
		$.set_attribute(a, "href", `/${$.get(currentLocale)}`);
		$.set_text(text, $0);
		$.set_attribute(a_1, "href", `/${$.get(currentLocale)}`);
		classes = $.set_class(a_1, 1, "nav-link", null, classes, { "is-active": $.get(homeActive) });
		$.set_text(text_1, $1);
		$.set_attribute(a_2, "href", `/${$.get(currentLocale)}/about`);
		classes_1 = $.set_class(a_2, 1, "nav-link", null, classes_1, { "is-active": $.get(methodologyActive) });
		$.set_text(text_2, $2);
		$.set_text(text_3, `${$3 ?? ""} `);
		$.set_text(text_5, $4);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]);
	$.event("mouseenter", button, () => $.set(isMockPagesOpen, true));
	$.event("mouseleave", button, () => $.set(isMockPagesOpen, false));
	$.delegated("click", button, () => $.set(isMockPagesOpen, !$.get(isMockPagesOpen)));
	$.append($$anchor, header);
	$.pop();
	$$cleanup();
}
$.delegate(["click"]);
var root = $.from_html(`<!> <!> <!>`, 1);
function Layout($$anchor, $$props) {
	$.push($$props, true);
	const renderStart = typeof performance !== "undefined" ? performance.now() : 0;
	onMount(() => {
		recordHydrationDuration();
		recordRenderTime("AppRoot", renderStart);
	});
	$.user_effect(() => {
		document.documentElement.lang = $$props.locale;
		setLocale($$props.locale, { reload: false });
	});
	var fragment = root();
	var node = $.first_child(fragment);
	Header(node, {});
	var node_1 = $.sibling(node, 2);
	$.snippet(node_1, () => $$props.children);
	Footer($.sibling(node_1, 2), {});
	$.append($$anchor, fragment);
	$.pop();
}
export { Layout as default };

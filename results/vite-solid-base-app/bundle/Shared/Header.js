import { createComponent, delegateEvents, effect, insert, memo, setAttribute, template } from "solid-js/web";
import { A, useLocation, useNavigate, useParams } from "@solidjs/router";
import { For, createEffect, createSignal, onMount } from "solid-js";
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	onMount(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch {}
		}
	});
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
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch {
		return locale.toUpperCase();
	}
};
var _tmpl$$2 = template(`<div class="flex items-center gap-2"><select class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary">`);
var _tmpl$2$1 = template(`<option>`);
function LocaleSwitcher() {
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const handleLocaleChange = (newLocale) => {
		const newPath = location.pathname.replace(/^\/[^/]+/, `/${newLocale}`);
		navigate(`${newPath}${location.search}${location.hash}`);
	};
	return (() => {
		var _el$ = _tmpl$$2(), _el$2 = _el$.firstChild;
		_el$2.addEventListener("change", (e) => handleLocaleChange(e.currentTarget.value));
		insert(_el$2, createComponent(For, {
			each: locales,
			children: (localeItem) => (() => {
				var _el$3 = _tmpl$2$1();
				_el$3.value = localeItem;
				insert(_el$3, () => getLocaleName(localeItem));
				return _el$3;
			})()
		}));
		effect(() => _el$2.value = params.locale ?? "en");
		return _el$;
	})();
}
var _tmpl$$1 = template(`<button type=button class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80">`);
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
function ThemeToggle() {
	const [mode, setMode] = createSignal("auto");
	onMount(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	});
	createEffect(() => {
		if (mode() !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	});
	function toggleMode() {
		const current = mode();
		const nextMode = current === "light" ? "dark" : current === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = () => mode() === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${mode()}. Click to switch mode.`;
	const buttonText = () => mode() === "auto" ? "Theme: Auto" : mode() === "dark" ? "Theme: Dark" : "Theme: Light";
	return (() => {
		var _el$ = _tmpl$$1();
		_el$.$$click = toggleMode;
		insert(_el$, buttonText);
		effect((_p$) => {
			var _v$ = label(), _v$2 = label();
			_v$ !== _p$.e && setAttribute(_el$, "aria-label", _p$.e = _v$);
			_v$2 !== _p$.t && setAttribute(_el$, "title", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
}
delegateEvents(["click"]);
var _tmpl$ = template(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d="m6 9 6 6 6-6">`);
var _tmpl$2 = template(`<header class="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg"><nav class="container flex h-16 items-center justify-between"><div class="flex items-center gap-8"><div class="hidden items-center gap-6 text-sm font-medium md:flex"><div class=relative><button type=button class="flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link">Mock Pages</button></div></div></div><div class="flex items-center gap-4"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class="text-muted-foreground transition hover:text-foreground"><span class=sr-only>Go to GitHub</span><svg viewBox="0 0 16 16"aria-hidden=true width=20 height=20><path fill=currentColor d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">`);
var _tmpl$3 = template(`<div class="absolute left-0 top-full w-48 pt-2"><div class="overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg">`);
function ChevronDown(props) {
	return (() => {
		var _el$ = _tmpl$();
		effect(() => setAttribute(_el$, "class", props.class));
		return _el$;
	})();
}
function Header() {
	usePerformanceMeasure("Header");
	const [isMockPagesOpen, setIsMockPagesOpen] = createSignal(false);
	const params = useParams();
	const currentLocale = () => params.locale ?? "en";
	const mockPages = () => [
		{
			to: `/${currentLocale()}/products`,
			label: "Products"
		},
		{
			to: `/${currentLocale()}/pricing`,
			label: "Pricing"
		},
		{
			to: `/${currentLocale()}/team`,
			label: "Team"
		},
		{
			to: `/${currentLocale()}/blog`,
			label: "Blog"
		},
		{
			to: `/${currentLocale()}/careers`,
			label: "Careers"
		},
		{
			to: `/${currentLocale()}/faq`,
			label: "FAQ"
		},
		{
			to: `/${currentLocale()}/contact`,
			label: "Contact"
		},
		{
			to: `/${currentLocale()}/settings`,
			label: "Settings"
		}
	];
	return (() => {
		var _el$2 = _tmpl$2(), _el$4 = _el$2.firstChild.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild;
		_el$7.firstChild;
		var _el$9 = _el$4.nextSibling;
		_el$9.firstChild;
		insert(_el$4, createComponent(A, {
			get href() {
				return `/${currentLocale()}`;
			},
			"class": "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), _el$5);
		insert(_el$5, createComponent(A, {
			get href() {
				return `/${currentLocale()}`;
			},
			end: true,
			"class": "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			children: "Home"
		}), _el$6);
		insert(_el$5, createComponent(A, {
			get href() {
				return `/${currentLocale()}/about`;
			},
			"class": "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			children: "Methodology"
		}), _el$6);
		_el$7.$$click = () => setIsMockPagesOpen(!isMockPagesOpen());
		_el$7.addEventListener("mouseleave", () => setIsMockPagesOpen(false));
		_el$7.addEventListener("mouseenter", () => setIsMockPagesOpen(true));
		insert(_el$7, createComponent(ChevronDown, { get ["class"]() {
			return `transition-transform ${isMockPagesOpen() ? "rotate-180" : ""}`;
		} }), null);
		insert(_el$6, (() => {
			var _c$ = memo(() => !!isMockPagesOpen());
			return () => _c$() && (() => {
				var _el$1 = _tmpl$3(), _el$10 = _el$1.firstChild;
				_el$1.addEventListener("mouseleave", () => setIsMockPagesOpen(false));
				_el$1.addEventListener("mouseenter", () => setIsMockPagesOpen(true));
				insert(_el$10, createComponent(For, {
					get each() {
						return mockPages();
					},
					children: (page) => createComponent(A, {
						get href() {
							return page.to;
						},
						"class": "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => setIsMockPagesOpen(false),
						get children() {
							return page.label;
						}
					})
				}));
				return _el$1;
			})();
		})(), null);
		insert(_el$9, createComponent(LocaleSwitcher, {}), null);
		insert(_el$9, createComponent(ThemeToggle, {}), null);
		return _el$2;
	})();
}
delegateEvents(["click"]);
export { Header as default };

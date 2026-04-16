import { Profiler, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { jsx } from "react/jsx-runtime";
//#region i18n/config.ts
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
	} catch (e) {
		return locale.toUpperCase();
	}
};
//#endregion
//#region components/LocaleSwitcher.tsx
function LocaleSwitcher() {
	const locale = useParams().lang ?? "en";
	const pathname = usePathname();
	const router = useRouter();
	const handleLocaleChange = (newLocale) => {
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
	};
	return jsx("div", {
		className: "flex items-center gap-2",
		children: jsx("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((localeEl) => jsx("option", {
				value: localeEl,
				children: getLocaleName(localeEl)
			}, localeEl))
		})
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
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
//#endregion
//#region components/AppProviders.tsx
function AppProviders({ children, locale }) {
	useEffect(() => {
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
//#endregion
//#region scripts/Wrapper.tsx
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale: "en",
		children
	});
}
//#endregion
//#region components/LocaleSwitcher.wrapper.tsx
function Wrapped() {
	return jsx(Wrapper, { children: jsx(LocaleSwitcher, {}) });
}
//#endregion
export { Wrapped as default };

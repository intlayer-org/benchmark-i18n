import { Profiler, useEffect } from "react";
import { useParams } from "next/navigation";
import NextLink from "next/link";
import { jsx } from "react/jsx-runtime";
//#region components/Link.tsx
/**
* Utility function to check whether a given URL is external.
* If the URL starts with http:// or https://, it's considered external.
*/
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
/**
* A custom Link component that adapts the href attribute based on the current locale.
* For internal links, it adds the locale prefix (e.g., /en/about).
* This ensures that navigation stays within the same locale context.
*/
var Link = ({ href, children, ...props }) => {
	const currentLocale = useParams().lang ?? "en";
	const isExternalLink = checkIsExternalLink(href.toString());
	return /* @__PURE__ */ jsx(NextLink, {
		href: href && !isExternalLink && !href.toString().startsWith(`/${currentLocale}`) ? `/${currentLocale}${href}` : href,
		...props,
		children
	});
};
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
/**
* Utilities for browser-side performance measurement and monitoring.
* These are intended to be used within the benchmark applications.
*/
/**
* Records and logs hydration duration using the Performance API.
* This should be called in a \`useEffect\` hook within the root component
* to mark the end of the hydration process.
*
* It expects a "hydration_start" mark to have been previously set
* (e.g., in a script tag in the document's head).
*/
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
/**
* A standard Profiler onRender callback that collects metrics into a global object.
* This allows automated tests to retrieve render performance data from the browser.
*/
function onRenderCallback(id, phase, actualDuration) {
	if (typeof window === "undefined") return;
	if (phase === "nested-update") return;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(actualDuration);
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
	return /* @__PURE__ */ jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Wrapper({ children }) {
	return /* @__PURE__ */ jsx(AppProviders, {
		locale: "en",
		children
	});
}
//#endregion
//#region components/Link.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(Link, {}) });
}
//#endregion
export { Wrapped as default };

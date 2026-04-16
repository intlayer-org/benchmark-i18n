import { Profiler as e, useEffect as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region ../../../test-utils/src/browser-metrics.ts
function r() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function i(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function a({ children: a, locale: o }) {
	return t(() => {
		document.documentElement.lang = o;
	}, [o]), t(() => {
		r();
	}, []), n(e, {
		id: "AppRoot",
		onRender: i,
		children: a
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function o({ children: e }) {
	return n(a, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region components/AppProviders.wrapper.tsx
function s() {
	return n(o, { children: n(a, {}) });
}
//#endregion
export { s as default };

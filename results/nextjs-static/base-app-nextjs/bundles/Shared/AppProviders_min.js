"use client";
import { Profiler as e, useEffect as t } from "react";
import { useParams as n } from "next/navigation";
import { jsx as r } from "react/jsx-runtime";
//#region ../../test-utils/src/browser-metrics.ts
function i() {
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
function a(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function o({ children: o }) {
	let s = n().locale ?? "en";
	return t(() => {
		document.documentElement.lang = s;
	}, [s]), t(() => {
		i();
	}, []), r(e, {
		id: "AppRoot",
		onRender: a,
		children: o
	});
}
//#endregion
export { o as default };

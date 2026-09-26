import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
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
function a(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function o({ children: r, locale: o }) {
	let [s] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		a("AppRoot", s);
	}, [s]), e(() => {
		o && (document.documentElement.lang = o);
	}, [o]), e(() => {
		i();
	}, []), r;
}
function s({ children: e }) {
	return r(o, {
		locale: "en",
		children: e
	});
}
function c() {
	return r(s, { children: r(o, {}) });
}
export { c as default };

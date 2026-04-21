"use client";
import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { useParams as r } from "next/navigation";
import { Fragment as i, jsx as a } from "react/jsx-runtime";
function o() {
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
function s(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function c({ children: c }) {
	let l = r().locale ?? "en", [u] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		s("AppRoot", u);
	}, [u]), e(() => {
		document.documentElement.lang = l;
	}, [l]), e(() => {
		o();
	}, []), a(i, { children: c });
}
export { c as default };

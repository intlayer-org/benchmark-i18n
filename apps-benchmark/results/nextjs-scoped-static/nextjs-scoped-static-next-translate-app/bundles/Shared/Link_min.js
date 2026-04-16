import { Profiler as e, useEffect as t } from "react";
import { useParams as n } from "next/navigation";
import r from "next/link";
import { jsx as i } from "react/jsx-runtime";
//#region components/Link.tsx
var a = (e) => /^https?:\/\//.test(e ?? ""), o = ({ href: e, children: t, ...o }) => {
	let s = n().lang ?? "en", c = a(e.toString());
	return i(r, {
		href: e && !c && !e.toString().startsWith(`/${s}`) ? `/${s}${e}` : e,
		...o,
		children: t
	});
};
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function s() {
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
function c(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function l({ children: n, locale: r }) {
	return t(() => {
		document.documentElement.lang = r;
	}, [r]), t(() => {
		s();
	}, []), i(e, {
		id: "AppRoot",
		onRender: c,
		children: n
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function u({ children: e }) {
	return i(l, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region components/Link.wrapper.tsx
function d() {
	return i(u, { children: i(o, {}) });
}
//#endregion
export { d as default };

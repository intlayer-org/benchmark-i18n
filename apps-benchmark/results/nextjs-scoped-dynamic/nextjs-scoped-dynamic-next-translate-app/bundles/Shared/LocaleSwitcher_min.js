import { Profiler as e, useEffect as t } from "react";
import { useParams as n, usePathname as r, useRouter as i } from "next/navigation";
import { jsx as a } from "react/jsx-runtime";
//#region i18n/config.ts
var o = [
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
], s = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
//#endregion
//#region components/LocaleSwitcher.tsx
function c() {
	let e = n().lang ?? "en", t = r(), c = i(), l = (n) => {
		let r = t.replace(`/${e}`, `/${n}`);
		c.push(r);
	};
	return a("div", {
		className: "flex items-center gap-2",
		children: a("select", {
			value: e,
			onChange: (e) => l(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: o.map((e) => a("option", {
				value: e,
				children: s(e)
			}, e))
		})
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function l() {
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
function u(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region components/AppProviders.tsx
function d({ children: n, locale: r }) {
	return t(() => {
		document.documentElement.lang = r;
	}, [r]), t(() => {
		l();
	}, []), a(e, {
		id: "AppRoot",
		onRender: u,
		children: n
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function f({ children: e }) {
	return a(d, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region components/LocaleSwitcher.wrapper.tsx
function p() {
	return a(f, { children: a(c, {}) });
}
//#endregion
export { p as default };

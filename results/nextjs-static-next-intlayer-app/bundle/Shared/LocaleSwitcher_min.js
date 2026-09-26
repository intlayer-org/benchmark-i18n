import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { useParams as r, usePathname as i, useRouter as a } from "next/navigation";
import { jsx as o } from "react/jsx-runtime";
var s = {
	locales: [
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
	],
	requiredLocales: [
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
	],
	strictMode: "inclusive",
	defaultLocale: "en"
}, c = s.locales;
s.requiredLocales, s.defaultLocale;
function l(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function u() {
	let e = r().locale ?? "en", t = i(), n = a(), s = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return o("div", {
		className: "flex items-center gap-2",
		children: o("select", {
			value: e,
			onChange: (e) => s(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: c.map((e) => o("option", {
				value: e,
				children: l(e)
			}, e))
		})
	});
}
function d() {
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
function f(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function p({ children: r, locale: i }) {
	let [a] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		f("AppRoot", a);
	}, [a]), e(() => {
		i && (document.documentElement.lang = i);
	}, [i]), e(() => {
		d();
	}, []), r;
}
function m({ children: e }) {
	return o(p, {
		locale: "en",
		children: e
	});
}
function h() {
	return o(m, { children: o(u, {}) });
}
export { h as default };

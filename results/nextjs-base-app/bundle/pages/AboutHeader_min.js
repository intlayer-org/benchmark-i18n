"use client";
import { useLayoutEffect as e } from "react";
import { Fragment as t, jsxDEV as n } from "react/jsx-dev-runtime";
function r(t) {
	typeof performance < "u" && performance.mark && performance.mark(`${t}-start`), e(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${t}-end`);
			try {
				performance.measure(`${t}-render`, `${t}-start`, `${t}-end`);
			} catch {}
		}
	}, [t]);
}
var i = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/pages/about/AboutHeader.tsx";
function a() {
	return r("AboutHeader"), n(t, { children: [n("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: "About This Benchmark"
	}, void 0, !1, {
		fileName: i,
		lineNumber: 9,
		columnNumber: 7
	}, this), n("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	}, void 0, !1, {
		fileName: i,
		lineNumber: 12,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: i,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
export { a as default };

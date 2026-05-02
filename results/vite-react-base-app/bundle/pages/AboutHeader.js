import { useLayoutEffect } from "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	useLayoutEffect(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	}, [name]);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/about/AboutHeader.tsx";
function AboutHeader() {
	usePerformanceMeasure("AboutHeader");
	return jsxDEV(Fragment, { children: [jsxDEV("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: "About This Benchmark"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 7
	}, this), jsxDEV("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 7
	}, this)] }, void 0, true);
}
export { AboutHeader as default };

import { useLayoutEffect } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
function AboutHeader() {
	usePerformanceMeasure("AboutHeader");
	return jsxs(Fragment, { children: [jsx("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: "About This Benchmark"
	}), jsx("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	})] });
}
export { AboutHeader as default };

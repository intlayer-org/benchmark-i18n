"use client";
import { useLayoutEffect } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region hooks/usePerformanceMeasure.ts
/**
* Custom hook to measure the render-to-layout duration of a component.
* It uses the Browser User Timing API (performance.mark/measure).
*
* @param name The name of the measurement (e.g., 'HeroComponent')
*/
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
//#endregion
//#region components/pages/about/AboutHeader.tsx
function AboutHeader() {
	usePerformanceMeasure("AboutHeader");
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: "About This Benchmark"
	}), /* @__PURE__ */ jsx("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	})] });
}
//#endregion
export { AboutHeader as default };

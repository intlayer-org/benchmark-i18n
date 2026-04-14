import { useLayoutEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/hooks/usePerformanceMeasure.ts
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
//#region src/components/pages/home/Hero.tsx
function Hero() {
	usePerformanceMeasure("Hero");
	return /* @__PURE__ */ jsxs("section", {
		className: "mb-16 text-center",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: "View Results"
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Methodology"
				})]
			})
		]
	});
}
//#endregion
export { Hero as default };

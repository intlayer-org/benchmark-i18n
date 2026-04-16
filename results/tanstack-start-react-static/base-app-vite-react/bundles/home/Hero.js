import { useLayoutEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/hooks/usePerformanceMeasure.ts
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
	return jsxs("section", {
		className: "mb-16 text-center",
		children: [
			jsx("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			jsx("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
			}),
			jsxs("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [jsx("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: "View Results"
				}), jsx("button", {
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

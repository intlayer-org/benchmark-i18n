import { useLayoutEffect as e } from "react";
import { jsxDEV as t } from "react/jsx-dev-runtime";
function n(t) {
	typeof performance < "u" && performance.mark && performance.mark(`${t}-start`), e(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${t}-end`);
			try {
				performance.measure(`${t}-render`, `${t}-start`, `${t}-end`);
			} catch {}
		}
	}, [t]);
}
var r = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/home/Hero.tsx";
function i() {
	return n("Hero"), t("section", {
		className: "mb-16 text-center",
		children: [
			t("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}, void 0, !1, {
				fileName: r,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			t("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity."
			}, void 0, !1, {
				fileName: r,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			t("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [t("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: "View Results"
				}, void 0, !1, {
					fileName: r,
					lineNumber: 16,
					columnNumber: 9
				}, this), t("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Methodology"
				}, void 0, !1, {
					fileName: r,
					lineNumber: 22,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: r,
				lineNumber: 15,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: r,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
export { i as default };

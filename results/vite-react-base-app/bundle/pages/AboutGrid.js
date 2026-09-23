import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/about/AboutGrid.tsx";
function AboutGrid() {
	return jsxDEV("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [jsxDEV("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [jsxDEV("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: "Why This Exists"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 5,
				columnNumber: 9
			}, this), jsxDEV("p", {
				className: "text-sm text-muted-foreground",
				children: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 4,
			columnNumber: 7
		}, this), jsxDEV("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [jsxDEV("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: "Methodology"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this), jsxDEV("p", {
				className: "text-sm text-muted-foreground",
				children: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 3,
		columnNumber: 5
	}, this);
}
export { AboutGrid as default };

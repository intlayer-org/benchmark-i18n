import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/home/UnderstandingImpact.tsx";
function UnderstandingImpact() {
	return jsxDEV("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			jsxDEV("h2", {
				className: "text-2xl font-bold text-foreground",
				children: "Understanding the Impact"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 4,
				columnNumber: 7
			}, this),
			jsxDEV("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsxDEV("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Why a single large JSON can hurt performance"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 9,
						columnNumber: 9
					}, this),
					jsxDEV("p", {
						className: "text-sm text-muted-foreground",
						children: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 12,
						columnNumber: 9
					}, this),
					jsxDEV("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsxDEV("li", { children: "The JSON must be parsed on every page load — blocking the main thread." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 19,
								columnNumber: 11
							}, this),
							jsxDEV("li", { children: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 11
							}, this),
							jsxDEV("li", { children: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			jsxDEV("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsxDEV("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "The trade-offs of dynamic loading"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 9
					}, this),
					jsxDEV("p", {
						className: "text-sm text-muted-foreground",
						children: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 9
					}, this),
					jsxDEV("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsxDEV("li", { children: [jsxDEV("strong", {
								className: "text-foreground",
								children: "Waterfall requests:"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 13
							}, this), " the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 11
							}, this),
							jsxDEV("li", { children: [
								jsxDEV("strong", {
									className: "text-foreground",
									children: "Flash of untranslated content (FOUC):"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 13
								}, this),
								" ",
								"users may briefly see translation keys or a fallback language before the chunk arrives."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 11
							}, this),
							jsxDEV("li", { children: [
								jsxDEV("strong", {
									className: "text-foreground",
									children: "Cache invalidation:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 13
								}, this),
								" ",
								"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 7
			}, this),
			jsxDEV("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [jsxDEV("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: "What this benchmark measures"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 9
				}, this), jsxDEV("p", {
					className: "text-sm text-muted-foreground",
					children: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 3,
		columnNumber: 5
	}, this);
}
export { UnderstandingImpact as default };

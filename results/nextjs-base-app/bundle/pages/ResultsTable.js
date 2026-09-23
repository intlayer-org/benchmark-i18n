import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/pages/home/ResultsTable.tsx";
function ResultsTable() {
	return jsxDEV("section", { children: [jsxDEV("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: "Sample Results"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 7
	}, this), jsxDEV("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: jsxDEV("table", {
			className: "w-full text-sm",
			children: [jsxDEV("thead", {
				className: "bg-muted",
				children: jsxDEV("tr", { children: [
					jsxDEV("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Library"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 15
					}, this),
					jsxDEV("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Bundle Size"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 15
					}, this),
					jsxDEV("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lookup Time"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 15
					}, this),
					jsxDEV("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lazy Loading"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 11
			}, this), jsxDEV("tbody", { children: [
				{
					lib: "react-i18next",
					size: "42.3 kB",
					time: "0.12ms",
					lazy: "Yes"
				},
				{
					lib: "react-intl",
					size: "38.1 kB",
					time: "0.15ms",
					lazy: "Manual"
				},
				{
					lib: "lingui",
					size: "12.8 kB",
					time: "0.08ms",
					lazy: "Yes"
				},
				{
					lib: "typesafe-i18n",
					size: "5.2 kB",
					time: "0.05ms",
					lazy: "Built-in"
				}
			].map((r) => jsxDEV("tr", {
				className: "border-t border-border",
				children: [
					jsxDEV("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: r.lib
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 17
					}, this),
					jsxDEV("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.size
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 17
					}, this),
					jsxDEV("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.time
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 17
					}, this),
					jsxDEV("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.lazy
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 17
					}, this)
				]
			}, r.lib, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 15
			}, this)) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
export { ResultsTable as default };

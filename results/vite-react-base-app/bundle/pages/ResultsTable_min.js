import { jsxDEV as e } from "react/jsx-dev-runtime";
var t = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/home/ResultsTable.tsx";
function n() {
	return e("section", { children: [e("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: "Sample Results"
	}, void 0, !1, {
		fileName: t,
		lineNumber: 26,
		columnNumber: 7
	}, this), e("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: e("table", {
			className: "w-full text-sm",
			children: [e("thead", {
				className: "bg-muted",
				children: e("tr", { children: [
					e("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Library"
					}, void 0, !1, {
						fileName: t,
						lineNumber: 33,
						columnNumber: 15
					}, this),
					e("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Bundle Size"
					}, void 0, !1, {
						fileName: t,
						lineNumber: 36,
						columnNumber: 15
					}, this),
					e("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lookup Time"
					}, void 0, !1, {
						fileName: t,
						lineNumber: 39,
						columnNumber: 15
					}, this),
					e("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lazy Loading"
					}, void 0, !1, {
						fileName: t,
						lineNumber: 42,
						columnNumber: 15
					}, this)
				] }, void 0, !0, {
					fileName: t,
					lineNumber: 32,
					columnNumber: 13
				}, this)
			}, void 0, !1, {
				fileName: t,
				lineNumber: 31,
				columnNumber: 11
			}, this), e("tbody", { children: [
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
			].map((n) => e("tr", {
				className: "border-t border-border",
				children: [
					e("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: n.lib
					}, void 0, !1, {
						fileName: t,
						lineNumber: 50,
						columnNumber: 17
					}, this),
					e("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: n.size
					}, void 0, !1, {
						fileName: t,
						lineNumber: 53,
						columnNumber: 17
					}, this),
					e("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: n.time
					}, void 0, !1, {
						fileName: t,
						lineNumber: 54,
						columnNumber: 17
					}, this),
					e("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: n.lazy
					}, void 0, !1, {
						fileName: t,
						lineNumber: 55,
						columnNumber: 17
					}, this)
				]
			}, n.lib, !0, {
				fileName: t,
				lineNumber: 49,
				columnNumber: 15
			}, this)) }, void 0, !1, {
				fileName: t,
				lineNumber: 47,
				columnNumber: 11
			}, this)]
		}, void 0, !0, {
			fileName: t,
			lineNumber: 30,
			columnNumber: 9
		}, this)
	}, void 0, !1, {
		fileName: t,
		lineNumber: 29,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: t,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
export { n as default };

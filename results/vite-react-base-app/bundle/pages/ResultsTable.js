import { jsx, jsxs } from "react/jsx-runtime";
function ResultsTable() {
	return jsxs("section", { children: [jsx("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: "Sample Results"
	}), jsx("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: jsxs("table", {
			className: "w-full text-sm",
			children: [jsx("thead", {
				className: "bg-muted",
				children: jsxs("tr", { children: [
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Library"
					}),
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Bundle Size"
					}),
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lookup Time"
					}),
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lazy Loading"
					})
				] })
			}), jsx("tbody", { children: [
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
			].map((r) => jsxs("tr", {
				className: "border-t border-border",
				children: [
					jsx("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: r.lib
					}),
					jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.size
					}),
					jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.time
					}),
					jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.lazy
					})
				]
			}, r.lib)) })]
		})
	})] });
}
export { ResultsTable as default };

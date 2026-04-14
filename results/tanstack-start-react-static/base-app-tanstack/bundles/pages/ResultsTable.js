import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/pages/home/ResultsTable.tsx
function ResultsTable() {
	return /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: "Sample Results"
	}), /* @__PURE__ */ jsx("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: /* @__PURE__ */ jsxs("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ jsx("thead", {
				className: "bg-muted",
				children: /* @__PURE__ */ jsxs("tr", { children: [
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Library"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Bundle Size"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lookup Time"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lazy Loading"
					})
				] })
			}), /* @__PURE__ */ jsx("tbody", { children: [
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
			].map((r) => /* @__PURE__ */ jsxs("tr", {
				className: "border-t border-border",
				children: [
					/* @__PURE__ */ jsx("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: r.lib
					}),
					/* @__PURE__ */ jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.size
					}),
					/* @__PURE__ */ jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.time
					}),
					/* @__PURE__ */ jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.lazy
					})
				]
			}, r.lib)) })]
		})
	})] });
}
//#endregion
export { ResultsTable as default };

import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/pages/home/ResultsTable.tsx
function n() {
	return /* @__PURE__ */ t("section", { children: [/* @__PURE__ */ e("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: "Sample Results"
	}), /* @__PURE__ */ e("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: /* @__PURE__ */ t("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ e("thead", {
				className: "bg-muted",
				children: /* @__PURE__ */ t("tr", { children: [
					/* @__PURE__ */ e("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Library"
					}),
					/* @__PURE__ */ e("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Bundle Size"
					}),
					/* @__PURE__ */ e("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lookup Time"
					}),
					/* @__PURE__ */ e("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: "Lazy Loading"
					})
				] })
			}), /* @__PURE__ */ e("tbody", { children: [
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
			].map((n) => /* @__PURE__ */ t("tr", {
				className: "border-t border-border",
				children: [
					/* @__PURE__ */ e("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: n.lib
					}),
					/* @__PURE__ */ e("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: n.size
					}),
					/* @__PURE__ */ e("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: n.time
					}),
					/* @__PURE__ */ e("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: n.lazy
					})
				]
			}, n.lib)) })]
		})
	})] });
}
//#endregion
export { n as default };

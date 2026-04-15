import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region components/pages/careers/CareersBenefits.tsx
function n() {
	return /* @__PURE__ */ e("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: [
			{
				label: "Remote-first",
				value: "Work from anywhere in the world"
			},
			{
				label: "Competitive pay",
				value: "Top-of-market compensation"
			},
			{
				label: "Open source time",
				value: "20% time for OSS contributions"
			}
		].map((n) => /* @__PURE__ */ t("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [/* @__PURE__ */ e("p", {
				className: "text-sm font-semibold text-foreground",
				children: n.label
			}), /* @__PURE__ */ e("p", {
				className: "text-xs text-muted-foreground",
				children: n.value
			})]
		}, n.label))
	});
}
//#endregion
export { n as default };

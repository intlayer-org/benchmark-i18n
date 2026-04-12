import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region app/components/MockBanner.tsx
var r = () => /* @__PURE__ */ t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
//#endregion
//#region app/components/pages/pricing/PricingHeader.tsx
function i() {
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t(r, {}), /* @__PURE__ */ n("div", {
		className: "mb-12 text-center",
		children: [/* @__PURE__ */ t("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: "Simple, Transparent Pricing"
		}), /* @__PURE__ */ t("p", {
			className: "text-muted-foreground",
			children: "Choose the plan that fits your team. No hidden fees."
		})]
	})] });
}
//#endregion
export { i as default };

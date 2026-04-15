import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region components/MockBanner.tsx
var MockBanner = () => /* @__PURE__ */ jsx("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
//#endregion
//#region components/pages/pricing/PricingHeader.tsx
function PricingHeader() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(MockBanner, {}), /* @__PURE__ */ jsxs("div", {
		className: "mb-12 text-center",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: "Simple, Transparent Pricing"
		}), /* @__PURE__ */ jsx("p", {
			className: "text-muted-foreground",
			children: "Choose the plan that fits your team. No hidden fees."
		})]
	})] });
}
//#endregion
export { PricingHeader as default };

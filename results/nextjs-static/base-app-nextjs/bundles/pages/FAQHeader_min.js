import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region app/components/MockBanner.tsx
var r = () => /* @__PURE__ */ t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
//#endregion
//#region app/components/pages/faq/FAQHeader.tsx
function i() {
	return /* @__PURE__ */ n(e, { children: [
		/* @__PURE__ */ t(r, {}),
		/* @__PURE__ */ t("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Frequently Asked Questions"
		}),
		/* @__PURE__ */ t("p", {
			className: "mb-10 text-muted-foreground",
			children: "Everything you need to know about i18n Benchmark."
		})
	] });
}
//#endregion
export { i as default };

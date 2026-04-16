import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/MockBanner.tsx
var r = () => t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
//#endregion
//#region src/components/pages/faq/FAQHeader.tsx
function i() {
	return n(e, { children: [
		t(r, {}),
		t("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Frequently Asked Questions"
		}),
		t("p", {
			className: "mb-10 text-muted-foreground",
			children: "Everything you need to know about i18n Benchmark."
		})
	] });
}
//#endregion
export { i as default };

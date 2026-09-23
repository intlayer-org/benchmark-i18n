import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var MockBanner = () => jsx("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
function FAQHeader() {
	return jsxs(Fragment, { children: [
		jsx(MockBanner, {}),
		jsx("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Frequently Asked Questions"
		}),
		jsx("p", {
			className: "mb-10 text-muted-foreground",
			children: "Everything you need to know about i18n Benchmark."
		})
	] });
}
export { FAQHeader as default };

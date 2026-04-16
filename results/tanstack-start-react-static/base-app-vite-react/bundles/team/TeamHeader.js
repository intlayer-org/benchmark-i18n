import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var MockBanner = () => jsx("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
function TeamHeader() {
	return jsxs(Fragment, { children: [
		jsx(MockBanner, {}),
		jsx("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Our Team"
		}),
		jsx("p", {
			className: "mb-10 text-muted-foreground",
			children: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
		})
	] });
}
export { TeamHeader as default };

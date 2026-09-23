import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/pages/careers/CareersBenefits.tsx";
function CareersBenefits() {
	return jsxDEV("div", {
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
		].map((b) => jsxDEV("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [jsxDEV("p", {
				className: "text-sm font-semibold text-foreground",
				children: b.label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 11
			}, this), jsxDEV("p", {
				className: "text-xs text-muted-foreground",
				children: b.value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 11
			}, this)]
		}, b.label, true, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
export { CareersBenefits as default };

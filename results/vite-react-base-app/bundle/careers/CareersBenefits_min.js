import { jsxDEV as e } from "react/jsx-dev-runtime";
var t = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/careers/CareersBenefits.tsx";
function n() {
	return e("div", {
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
		].map((n) => e("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [e("p", {
				className: "text-sm font-semibold text-foreground",
				children: n.label
			}, void 0, !1, {
				fileName: t,
				lineNumber: 18,
				columnNumber: 11
			}, this), e("p", {
				className: "text-xs text-muted-foreground",
				children: n.value
			}, void 0, !1, {
				fileName: t,
				lineNumber: 19,
				columnNumber: 11
			}, this)]
		}, n.label, !0, {
			fileName: t,
			lineNumber: 14,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: t,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
export { n as default };

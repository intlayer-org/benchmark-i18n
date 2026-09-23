import { jsx, jsxs } from "react/jsx-runtime";
function CareersBenefits() {
	return jsx("div", {
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
		].map((b) => jsxs("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [jsx("p", {
				className: "text-sm font-semibold text-foreground",
				children: b.label
			}), jsx("p", {
				className: "text-xs text-muted-foreground",
				children: b.value
			})]
		}, b.label))
	});
}
export { CareersBenefits as default };

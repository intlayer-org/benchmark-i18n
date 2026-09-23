import { jsx as e, jsxs as t } from "react/jsx-runtime";
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
		].map((n) => t("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [e("p", {
				className: "text-sm font-semibold text-foreground",
				children: n.label
			}), e("p", {
				className: "text-xs text-muted-foreground",
				children: n.value
			})]
		}, n.label))
	});
}
export { n as default };

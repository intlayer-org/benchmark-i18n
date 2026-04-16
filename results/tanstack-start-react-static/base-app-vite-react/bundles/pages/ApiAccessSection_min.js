import { useId as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
function r() {
	let r = e();
	return n("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [t("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "API Access"
		}), n("div", { children: [
			t("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "API Key"
			}),
			n("div", {
				className: "flex gap-2",
				children: [t("input", {
					id: r,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), t("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Copy"
				})]
			}),
			t("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Use this key to access the benchmarking API programmatically."
			})
		] })]
	});
}
export { r as default };

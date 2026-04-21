import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function ApiAccessSection() {
	const apiKeyId = useId();
	return jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "API Access"
		}), jsxs("div", { children: [
			jsx("label", {
				htmlFor: apiKeyId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "API Key"
			}),
			jsxs("div", {
				className: "flex gap-2",
				children: [jsx("input", {
					id: apiKeyId,
					readOnly: true,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), jsx("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Copy"
				})]
			}),
			jsx("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Use this key to access the benchmarking API programmatically."
			})
		] })]
	});
}
export { ApiAccessSection as default };

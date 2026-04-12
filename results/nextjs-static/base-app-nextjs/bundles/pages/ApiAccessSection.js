import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/pages/settings/ApiAccessSection.tsx
function ApiAccessSection() {
	const apiKeyId = useId();
	return /* @__PURE__ */ jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "API Access"
		}), /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx("label", {
				htmlFor: apiKeyId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "API Key"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ jsx("input", {
					id: apiKeyId,
					readOnly: true,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Copy"
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Use this key to access the benchmarking API programmatically."
			})
		] })]
	});
}
//#endregion
export { ApiAccessSection as default };

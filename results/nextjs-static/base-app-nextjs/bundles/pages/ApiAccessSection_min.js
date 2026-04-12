import { useId as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region app/components/pages/settings/ApiAccessSection.tsx
function r() {
	let r = e();
	return /* @__PURE__ */ n("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ t("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "API Access"
		}), /* @__PURE__ */ n("div", { children: [
			/* @__PURE__ */ t("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "API Key"
			}),
			/* @__PURE__ */ n("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ t("input", {
					id: r,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), /* @__PURE__ */ t("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: "Copy"
				})]
			}),
			/* @__PURE__ */ t("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Use this key to access the benchmarking API programmatically."
			})
		] })]
	});
}
//#endregion
export { r as default };

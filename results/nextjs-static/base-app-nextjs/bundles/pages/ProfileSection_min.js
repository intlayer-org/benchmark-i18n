import { useId as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region components/pages/settings/ProfileSection.tsx
function r() {
	let r = e(), i = e();
	return /* @__PURE__ */ n("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ t("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Profile"
		}), /* @__PURE__ */ n("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Display Name"
			}), /* @__PURE__ */ t("input", {
				id: r,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), /* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Email"
			}), /* @__PURE__ */ t("input", {
				id: i,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
//#endregion
export { r as default };

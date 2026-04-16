import { useId as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region components/pages/settings/ProfileSection.tsx
function r() {
	let r = e(), i = e();
	return n("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [t("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Profile"
		}), n("div", {
			className: "space-y-4",
			children: [n("div", { children: [t("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Display Name"
			}), t("input", {
				id: r,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), n("div", { children: [t("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Email"
			}), t("input", {
				id: i,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
//#endregion
export { r as default };

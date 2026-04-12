import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/pages/settings/ProfileSection.tsx
function ProfileSection() {
	const displayNameId = useId();
	const emailId = useId();
	return /* @__PURE__ */ jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Profile"
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
				htmlFor: displayNameId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Display Name"
			}), /* @__PURE__ */ jsx("input", {
				id: displayNameId,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
				htmlFor: emailId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Email"
			}), /* @__PURE__ */ jsx("input", {
				id: emailId,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
//#endregion
export { ProfileSection as default };

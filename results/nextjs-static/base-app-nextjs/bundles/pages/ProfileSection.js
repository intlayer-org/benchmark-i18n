import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region components/pages/settings/ProfileSection.tsx
function ProfileSection() {
	const displayNameId = useId();
	const emailId = useId();
	return jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Profile"
		}), jsxs("div", {
			className: "space-y-4",
			children: [jsxs("div", { children: [jsx("label", {
				htmlFor: displayNameId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Display Name"
			}), jsx("input", {
				id: displayNameId,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), jsxs("div", { children: [jsx("label", {
				htmlFor: emailId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Email"
			}), jsx("input", {
				id: emailId,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
//#endregion
export { ProfileSection as default };

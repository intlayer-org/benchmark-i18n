import { jsx, jsxs } from "react/jsx-runtime";
function SettingsFooter() {
	return jsxs("div", {
		className: "flex justify-end gap-3",
		children: [jsx("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: "Cancel"
		}), jsx("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: "Save Changes"
		})]
	});
}
export { SettingsFooter as default };

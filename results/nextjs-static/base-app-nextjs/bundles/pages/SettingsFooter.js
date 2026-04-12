import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/pages/settings/SettingsFooter.tsx
function SettingsFooter() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex justify-end gap-3",
		children: [/* @__PURE__ */ jsx("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: "Cancel"
		}), /* @__PURE__ */ jsx("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: "Save Changes"
		})]
	});
}
//#endregion
export { SettingsFooter as default };

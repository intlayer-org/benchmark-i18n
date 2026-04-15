import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region components/pages/settings/SettingsFooter.tsx
function n() {
	return /* @__PURE__ */ t("div", {
		className: "flex justify-end gap-3",
		children: [/* @__PURE__ */ e("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: "Cancel"
		}), /* @__PURE__ */ e("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: "Save Changes"
		})]
	});
}
//#endregion
export { n as default };

import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/MockBanner.tsx
var MockBanner = () => /* @__PURE__ */ jsx("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
//#endregion
//#region src/components/pages/settings/SettingsHeader.tsx
function SettingsHeader() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(MockBanner, {}),
		/* @__PURE__ */ jsx("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Settings"
		}),
		/* @__PURE__ */ jsx("p", {
			className: "mb-8 text-muted-foreground",
			children: "Manage your account preferences and configuration."
		})
	] });
}
//#endregion
export { SettingsHeader as default };

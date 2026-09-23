import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
var r = () => t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
});
function i() {
	return n(e, { children: [
		t(r, {}),
		t("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Settings"
		}),
		t("p", {
			className: "mb-8 text-muted-foreground",
			children: "Manage your account preferences and configuration."
		})
	] });
}
export { i as default };

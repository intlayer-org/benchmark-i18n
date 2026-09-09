import { useId as e } from "react";
import { jsxDEV as t } from "react/jsx-dev-runtime";
var n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/pages/settings/ProfileSection.tsx";
function r() {
	let r = e(), i = e();
	return t("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [t("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Profile"
		}, void 0, !1, {
			fileName: n,
			lineNumber: 9,
			columnNumber: 7
		}, this), t("div", {
			className: "space-y-4",
			children: [t("div", { children: [t("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Display Name"
			}, void 0, !1, {
				fileName: n,
				lineNumber: 12,
				columnNumber: 11
			}, this), t("input", {
				id: r,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, !1, {
				fileName: n,
				lineNumber: 18,
				columnNumber: 11
			}, this)] }, void 0, !0, {
				fileName: n,
				lineNumber: 11,
				columnNumber: 9
			}, this), t("div", { children: [t("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Email"
			}, void 0, !1, {
				fileName: n,
				lineNumber: 25,
				columnNumber: 11
			}, this), t("input", {
				id: i,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, !1, {
				fileName: n,
				lineNumber: 31,
				columnNumber: 11
			}, this)] }, void 0, !0, {
				fileName: n,
				lineNumber: 24,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: n,
			lineNumber: 10,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: n,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
export { r as default };

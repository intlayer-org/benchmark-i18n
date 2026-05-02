import { useId } from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/settings/ProfileSection.tsx";
function ProfileSection() {
	const displayNameId = useId();
	const emailId = useId();
	return jsxDEV("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsxDEV("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Profile"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 7
		}, this), jsxDEV("div", {
			className: "space-y-4",
			children: [jsxDEV("div", { children: [jsxDEV("label", {
				htmlFor: displayNameId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Display Name"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 11
			}, this), jsxDEV("input", {
				id: displayNameId,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 9
			}, this), jsxDEV("div", { children: [jsxDEV("label", {
				htmlFor: emailId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Email"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 11
			}, this), jsxDEV("input", {
				id: emailId,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
export { ProfileSection as default };

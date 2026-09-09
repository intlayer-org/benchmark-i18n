import { useId } from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/pages/settings/PreferencesSection.tsx";
function PreferencesSection() {
	const languageId = useId();
	return jsxDEV("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsxDEV("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Preferences"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this), jsxDEV("div", {
			className: "space-y-4",
			children: [
				jsxDEV("div", {
					className: "flex items-center justify-between",
					children: [jsxDEV("div", { children: [jsxDEV("p", {
						className: "text-sm font-medium text-foreground",
						children: "Email Notifications"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 13
					}, this), jsxDEV("p", {
						className: "text-xs text-muted-foreground",
						children: "Receive weekly benchmark reports"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 11
					}, this), jsxDEV("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": "Toggle notifications",
						children: jsxDEV("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 9
				}, this),
				jsxDEV("div", {
					className: "flex items-center justify-between",
					children: [jsxDEV("div", { children: [jsxDEV("p", {
						className: "text-sm font-medium text-foreground",
						children: "Dark Mode"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 13
					}, this), jsxDEV("p", {
						className: "text-xs text-muted-foreground",
						children: "Use dark color scheme"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this), jsxDEV("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": "Toggle dark mode",
						children: jsxDEV("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				jsxDEV("div", { children: [jsxDEV("label", {
					htmlFor: languageId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Default Language"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 11
				}, this), jsxDEV("select", {
					id: languageId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						jsxDEV("option", { children: "English (en)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: "French (fr)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: "German (de)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: "Spanish (es)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: "Japanese (ja)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: "Chinese Simplified (zh-CN)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: "Arabic (ar)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
export { PreferencesSection as default };

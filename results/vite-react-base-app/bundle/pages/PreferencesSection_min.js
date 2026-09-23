import { useId as e } from "react";
import { jsxDEV as t } from "react/jsx-dev-runtime";
var n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/settings/PreferencesSection.tsx";
function r() {
	let r = e();
	return t("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [t("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Preferences"
		}, void 0, !1, {
			fileName: n,
			lineNumber: 8,
			columnNumber: 7
		}, this), t("div", {
			className: "space-y-4",
			children: [
				t("div", {
					className: "flex items-center justify-between",
					children: [t("div", { children: [t("p", {
						className: "text-sm font-medium text-foreground",
						children: "Email Notifications"
					}, void 0, !1, {
						fileName: n,
						lineNumber: 14,
						columnNumber: 13
					}, this), t("p", {
						className: "text-xs text-muted-foreground",
						children: "Receive weekly benchmark reports"
					}, void 0, !1, {
						fileName: n,
						lineNumber: 17,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: n,
						lineNumber: 13,
						columnNumber: 11
					}, this), t("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": "Toggle notifications",
						children: t("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, void 0, !1, {
							fileName: n,
							lineNumber: 26,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: n,
						lineNumber: 21,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: n,
					lineNumber: 12,
					columnNumber: 9
				}, this),
				t("div", {
					className: "flex items-center justify-between",
					children: [t("div", { children: [t("p", {
						className: "text-sm font-medium text-foreground",
						children: "Dark Mode"
					}, void 0, !1, {
						fileName: n,
						lineNumber: 31,
						columnNumber: 13
					}, this), t("p", {
						className: "text-xs text-muted-foreground",
						children: "Use dark color scheme"
					}, void 0, !1, {
						fileName: n,
						lineNumber: 32,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: n,
						lineNumber: 30,
						columnNumber: 11
					}, this), t("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": "Toggle dark mode",
						children: t("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, void 0, !1, {
							fileName: n,
							lineNumber: 39,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: n,
						lineNumber: 34,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: n,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				t("div", { children: [t("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Default Language"
				}, void 0, !1, {
					fileName: n,
					lineNumber: 43,
					columnNumber: 11
				}, this), t("select", {
					id: r,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						t("option", { children: "English (en)" }, void 0, !1, {
							fileName: n,
							lineNumber: 53,
							columnNumber: 13
						}, this),
						t("option", { children: "French (fr)" }, void 0, !1, {
							fileName: n,
							lineNumber: 54,
							columnNumber: 13
						}, this),
						t("option", { children: "German (de)" }, void 0, !1, {
							fileName: n,
							lineNumber: 55,
							columnNumber: 13
						}, this),
						t("option", { children: "Spanish (es)" }, void 0, !1, {
							fileName: n,
							lineNumber: 56,
							columnNumber: 13
						}, this),
						t("option", { children: "Japanese (ja)" }, void 0, !1, {
							fileName: n,
							lineNumber: 57,
							columnNumber: 13
						}, this),
						t("option", { children: "Chinese Simplified (zh-CN)" }, void 0, !1, {
							fileName: n,
							lineNumber: 58,
							columnNumber: 13
						}, this),
						t("option", { children: "Arabic (ar)" }, void 0, !1, {
							fileName: n,
							lineNumber: 59,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: n,
					lineNumber: 49,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: n,
					lineNumber: 42,
					columnNumber: 9
				}, this)
			]
		}, void 0, !0, {
			fileName: n,
			lineNumber: 11,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: n,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
export { r as default };

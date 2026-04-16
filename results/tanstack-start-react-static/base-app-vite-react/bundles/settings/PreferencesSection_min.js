import { useId as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/pages/settings/PreferencesSection.tsx
function r() {
	let r = e();
	return n("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [t("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Preferences"
		}), n("div", {
			className: "space-y-4",
			children: [
				n("div", {
					className: "flex items-center justify-between",
					children: [n("div", { children: [t("p", {
						className: "text-sm font-medium text-foreground",
						children: "Email Notifications"
					}), t("p", {
						className: "text-xs text-muted-foreground",
						children: "Receive weekly benchmark reports"
					})] }), t("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": "Toggle notifications",
						children: t("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				n("div", {
					className: "flex items-center justify-between",
					children: [n("div", { children: [t("p", {
						className: "text-sm font-medium text-foreground",
						children: "Dark Mode"
					}), t("p", {
						className: "text-xs text-muted-foreground",
						children: "Use dark color scheme"
					})] }), t("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": "Toggle dark mode",
						children: t("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				n("div", { children: [t("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Default Language"
				}), n("select", {
					id: r,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						t("option", { children: "English (en)" }),
						t("option", { children: "French (fr)" }),
						t("option", { children: "German (de)" }),
						t("option", { children: "Spanish (es)" }),
						t("option", { children: "Japanese (ja)" }),
						t("option", { children: "Chinese Simplified (zh-CN)" }),
						t("option", { children: "Arabic (ar)" })
					]
				})] })
			]
		})]
	});
}
//#endregion
export { r as default };

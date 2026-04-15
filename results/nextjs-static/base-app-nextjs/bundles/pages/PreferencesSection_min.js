import { useId as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region components/pages/settings/PreferencesSection.tsx
function r() {
	let r = e();
	return /* @__PURE__ */ n("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ t("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Preferences"
		}), /* @__PURE__ */ n("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ n("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("p", {
						className: "text-sm font-medium text-foreground",
						children: "Email Notifications"
					}), /* @__PURE__ */ t("p", {
						className: "text-xs text-muted-foreground",
						children: "Receive weekly benchmark reports"
					})] }), /* @__PURE__ */ t("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": "Toggle notifications",
						children: /* @__PURE__ */ t("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				/* @__PURE__ */ n("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("p", {
						className: "text-sm font-medium text-foreground",
						children: "Dark Mode"
					}), /* @__PURE__ */ t("p", {
						className: "text-xs text-muted-foreground",
						children: "Use dark color scheme"
					})] }), /* @__PURE__ */ t("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": "Toggle dark mode",
						children: /* @__PURE__ */ t("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Default Language"
				}), /* @__PURE__ */ n("select", {
					id: r,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						/* @__PURE__ */ t("option", { children: "English (en)" }),
						/* @__PURE__ */ t("option", { children: "French (fr)" }),
						/* @__PURE__ */ t("option", { children: "German (de)" }),
						/* @__PURE__ */ t("option", { children: "Spanish (es)" }),
						/* @__PURE__ */ t("option", { children: "Japanese (ja)" }),
						/* @__PURE__ */ t("option", { children: "Chinese Simplified (zh-CN)" }),
						/* @__PURE__ */ t("option", { children: "Arabic (ar)" })
					]
				})] })
			]
		})]
	});
}
//#endregion
export { r as default };

import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/pages/settings/PreferencesSection.tsx
function PreferencesSection() {
	const languageId = useId();
	return /* @__PURE__ */ jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Preferences"
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: "Email Notifications"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground",
						children: "Receive weekly benchmark reports"
					})] }), /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": "Toggle notifications",
						children: /* @__PURE__ */ jsx("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: "Dark Mode"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground",
						children: "Use dark color scheme"
					})] }), /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": "Toggle dark mode",
						children: /* @__PURE__ */ jsx("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					htmlFor: languageId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Default Language"
				}), /* @__PURE__ */ jsxs("select", {
					id: languageId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						/* @__PURE__ */ jsx("option", { children: "English (en)" }),
						/* @__PURE__ */ jsx("option", { children: "French (fr)" }),
						/* @__PURE__ */ jsx("option", { children: "German (de)" }),
						/* @__PURE__ */ jsx("option", { children: "Spanish (es)" }),
						/* @__PURE__ */ jsx("option", { children: "Japanese (ja)" }),
						/* @__PURE__ */ jsx("option", { children: "Chinese Simplified (zh-CN)" }),
						/* @__PURE__ */ jsx("option", { children: "Arabic (ar)" })
					]
				})] })
			]
		})]
	});
}
//#endregion
export { PreferencesSection as default };

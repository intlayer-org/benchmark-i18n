import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function PreferencesSection() {
	const languageId = useId();
	return jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: "Preferences"
		}), jsxs("div", {
			className: "space-y-4",
			children: [
				jsxs("div", {
					className: "flex items-center justify-between",
					children: [jsxs("div", { children: [jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: "Email Notifications"
					}), jsx("p", {
						className: "text-xs text-muted-foreground",
						children: "Receive weekly benchmark reports"
					})] }), jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": "Toggle notifications",
						children: jsx("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				jsxs("div", {
					className: "flex items-center justify-between",
					children: [jsxs("div", { children: [jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: "Dark Mode"
					}), jsx("p", {
						className: "text-xs text-muted-foreground",
						children: "Use dark color scheme"
					})] }), jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": "Toggle dark mode",
						children: jsx("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				jsxs("div", { children: [jsx("label", {
					htmlFor: languageId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Default Language"
				}), jsxs("select", {
					id: languageId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						jsx("option", { children: "English (en)" }),
						jsx("option", { children: "French (fr)" }),
						jsx("option", { children: "German (de)" }),
						jsx("option", { children: "Spanish (es)" }),
						jsx("option", { children: "Japanese (ja)" }),
						jsx("option", { children: "Chinese Simplified (zh-CN)" }),
						jsx("option", { children: "Arabic (ar)" })
					]
				})] })
			]
		})]
	});
}
export { PreferencesSection as default };

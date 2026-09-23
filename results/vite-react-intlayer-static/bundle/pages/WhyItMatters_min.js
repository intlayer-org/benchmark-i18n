import { jsx as e, jsxs as t } from "react/jsx-runtime";
function n() {
	return t("section", {
		className: "mb-16",
		children: [e("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: "Why These Metrics Matter"
		}), t("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				t("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [e("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Bundle Size"
					}), e("p", {
						className: "text-sm text-muted-foreground",
						children: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
					})]
				}),
				t("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [e("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Rendering & Hydration"
					}), e("p", {
						className: "text-sm text-muted-foreground",
						children: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
					})]
				}),
				t("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [e("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Dynamic Loading"
					}), e("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
					})]
				})
			]
		})]
	});
}
export { n as default };

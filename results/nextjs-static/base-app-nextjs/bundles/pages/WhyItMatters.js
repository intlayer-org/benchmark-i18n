import { jsx, jsxs } from "react/jsx-runtime";
//#region app/components/pages/home/WhyItMatters.tsx
function WhyItMatters() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mb-16",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: "Why These Metrics Matter"
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Bundle Size"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Rendering & Hydration"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Dynamic Loading"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
					})]
				})
			]
		})]
	});
}
//#endregion
export { WhyItMatters as default };

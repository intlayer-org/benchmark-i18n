import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/pages/about/AboutGrid.tsx
function AboutGrid() {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: "Why This Exists"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: "Methodology"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
			})]
		})]
	});
}
//#endregion
export { AboutGrid as default };

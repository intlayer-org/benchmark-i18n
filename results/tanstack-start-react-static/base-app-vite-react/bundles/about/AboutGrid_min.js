import { jsx as e, jsxs as t } from "react/jsx-runtime";
function n() {
	return t("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [t("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [e("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: "Why This Exists"
			}), e("p", {
				className: "text-sm text-muted-foreground",
				children: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
			})]
		}), t("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [e("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: "Methodology"
			}), e("p", {
				className: "text-sm text-muted-foreground",
				children: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
			})]
		})]
	});
}
export { n as default };

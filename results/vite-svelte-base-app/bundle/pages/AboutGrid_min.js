import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"grid gap-8 md:grid-cols-2\"><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\">Why This Exists</h2> <p class=\"text-sm text-muted-foreground\">Choosing an i18n library is an architectural decision with long-term\n      consequences. Most comparisons focus on API ergonomics, but few measure the\n      performance cost: how much weight does the library add to the bundle? How\n      does it affect rendering when thousands of translation keys are loaded?\n      Does lazy loading actually help or just shift the cost? This benchmark\n      answers those questions with real data.</p></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\">Methodology</h2> <p class=\"text-sm text-muted-foreground\">The same 10-page app is built once per library. We measure the production\n      bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading\n      metrics, and use React Profiler to capture render times during locale\n      switches. All tests run in CI on consistent hardware to ensure reproducible\n      results.</p></div></div>");
function n(n) {
	var r = t();
	e.append(n, r);
}
export { n as default };

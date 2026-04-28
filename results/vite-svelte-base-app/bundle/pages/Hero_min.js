import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
function n(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var r = e.from_html("<section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\">i18n Benchmark</h1> <p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\">A test application designed to measure the real-world impact of\n    internationalization libraries on bundle size, loading performance, and\n    rendering reactivity.</p> <div class=\"mt-8 flex justify-center gap-4\"><button type=\"button\" class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">View Results</button> <button type=\"button\" class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent\">Methodology</button></div></section>");
function i(t, i) {
	e.push(i, !1), n("Hero"), e.init();
	var a = r();
	e.append(t, a), e.pop();
}
export { i as default };

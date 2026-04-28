import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { onMount } from "svelte";
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	onMount(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch {}
		}
	});
}
var root = $.from_html(`<h1 class="mb-4 text-3xl font-bold text-foreground">About This Benchmark</h1> <p class="mb-8 max-w-3xl text-muted-foreground">This is an open-source test application — not a product or a company. Its
  sole purpose is to provide a realistic, multi-page React app where different
  i18n libraries can be integrated and measured under identical conditions.</p>`, 1);
function AboutHeader($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("AboutHeader");
	$.init();
	var fragment = root();
	$.next(2);
	$.append($$anchor, fragment);
	$.pop();
}
export { AboutHeader as default };

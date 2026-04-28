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
var root = $.from_html(`<section class="mb-16 text-center"><h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground">i18n Benchmark</h1> <p class="mx-auto max-w-2xl text-lg text-muted-foreground">A test application designed to measure the real-world impact of
    internationalization libraries on bundle size, loading performance, and
    rendering reactivity.</p> <div class="mt-8 flex justify-center gap-4"><button type="button" class="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">View Results</button> <button type="button" class="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent">Methodology</button></div></section>`);
function Hero($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("Hero");
	$.init();
	var section = root();
	$.append($$anchor, section);
	$.pop();
}
export { Hero as default };

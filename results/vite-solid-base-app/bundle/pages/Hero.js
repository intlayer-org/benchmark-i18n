import { template } from "solid-js/web";
import { onMount } from "solid-js";
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
var _tmpl$ = template(`<section class="mb-16 text-center"><h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground">i18n Benchmark</h1><p class="mx-auto max-w-2xl text-lg text-muted-foreground">A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.</p><div class="mt-8 flex justify-center gap-4"><button type=button class="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">View Results</button><button type=button class="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent">Methodology`);
function Hero() {
	usePerformanceMeasure("Hero");
	return _tmpl$();
}
export { Hero as default };

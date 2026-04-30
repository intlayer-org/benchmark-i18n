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
var _tmpl$ = template(`<h1 class="mb-4 text-3xl font-bold text-foreground">About This Benchmark`), _tmpl$2 = template(`<p class="mb-8 max-w-3xl text-muted-foreground">This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.`);
function AboutHeader() {
	usePerformanceMeasure("AboutHeader");
	return [_tmpl$(), _tmpl$2()];
}
export { AboutHeader as default };

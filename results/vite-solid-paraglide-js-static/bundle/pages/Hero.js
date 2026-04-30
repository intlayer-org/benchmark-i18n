import { insert, template } from "solid-js/web";
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
var _tmpl$ = template(`<section class="mb-16 text-center"><h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground"></h1><p class="mx-auto max-w-2xl text-lg text-muted-foreground"></p><div class="mt-8 flex justify-center gap-4"><button type=button class="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"></button><button type=button class="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent">`);
function Hero() {
	usePerformanceMeasure("Hero");
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$5 = _el$3.nextSibling.firstChild, _el$6 = _el$5.nextSibling;
		insert(_el$2, () => (void 0)());
		insert(_el$3, () => (void 0)());
		insert(_el$5, () => (void 0)());
		insert(_el$6, () => (void 0)());
		return _el$;
	})();
}
export { Hero as default };

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
var _tmpl$ = template(`<h1 class="mb-4 text-3xl font-bold text-foreground">`), _tmpl$2 = template(`<p class="mb-8 max-w-3xl text-muted-foreground">`);
function AboutHeader() {
	usePerformanceMeasure("AboutHeader");
	return [(() => {
		var _el$ = _tmpl$();
		insert(_el$, () => (void 0)());
		return _el$;
	})(), (() => {
		var _el$2 = _tmpl$2();
		insert(_el$2, () => (void 0)());
		return _el$2;
	})()];
}
export { AboutHeader as default };

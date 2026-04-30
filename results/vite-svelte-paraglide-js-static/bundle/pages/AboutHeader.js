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
var root = $.from_html(`<h1 class="mb-4 text-3xl font-bold text-foreground"> </h1> <p class="mb-8 max-w-3xl text-muted-foreground"> </p>`, 1);
function AboutHeader($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("AboutHeader");
	$.init();
	var fragment = root();
	var h1 = $.first_child(fragment);
	var text = $.child(h1, true);
	$.reset(h1);
	var p = $.sibling(h1, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	$.template_effect(($0, $1) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
	}, [() => (void 0)(), () => (void 0)()]);
	$.append($$anchor, fragment);
	$.pop();
}
export { AboutHeader as default };

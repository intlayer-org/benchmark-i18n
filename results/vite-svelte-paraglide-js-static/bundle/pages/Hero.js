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
var root = $.from_html(`<section class="mb-16 text-center"><h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground"> </h1> <p class="mx-auto max-w-2xl text-lg text-muted-foreground"> </p> <div class="mt-8 flex justify-center gap-4"><button type="button" class="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button> <button type="button" class="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"> </button></div></section>`);
function Hero($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("Hero");
	$.init();
	var section = root();
	var h1 = $.child(section);
	var text = $.child(h1, true);
	$.reset(h1);
	var p = $.sibling(h1, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	var div = $.sibling(p, 2);
	var button = $.child(div);
	var text_2 = $.child(button, true);
	$.reset(button);
	var button_1 = $.sibling(button, 2);
	var text_3 = $.child(button_1, true);
	$.reset(button_1);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { Hero as default };

import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { derived, writable } from "svelte/store";
var locales = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"pt",
	"zh",
	"ja",
	"ko",
	"ru"
];
function isLocale(value) {
	return locales.includes(value);
}
var PAGE_SEGMENTS = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function parsePath(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	if (parts.length === 0) return { kind: "notfound" };
	const [locale, ...rest] = parts;
	if (!isLocale(locale)) return { kind: "notfound" };
	const seg = rest[0] ?? "";
	if (rest.length > 1) return { kind: "notfound" };
	if (!PAGE_SEGMENTS.has(seg)) return { kind: "notfound" };
	return {
		kind: "ok",
		locale,
		page: seg
	};
}
var route = derived(writable(typeof window !== "undefined" ? window.location.pathname : "/en"), (p) => parsePath(p));
var root_1 = $.from_html(`<div class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"><div><h3 class="text-base font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p> <div class="mt-2 flex gap-2"><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"> </span> <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"> </span> <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"> </span></div></div> <button type="button" class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></div>`);
var root = $.from_html(`<h2 class="mb-6 text-2xl font-bold text-foreground"> </h2> <div class="space-y-4"></div>`, 1);
function OpenPositions($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const openings = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				title: (void 0)(),
				location: (void 0)(),
				type: (void 0)(),
				dept: (void 0)(),
				desc: (void 0)()
			},
			{
				title: (void 0)(),
				location: (void 0)(),
				type: (void 0)(),
				dept: (void 0)(),
				desc: (void 0)()
			},
			{
				title: (void 0)(),
				location: (void 0)(),
				type: (void 0)(),
				dept: (void 0)(),
				desc: (void 0)()
			},
			{
				title: (void 0)(),
				location: (void 0)(),
				type: (void 0)(),
				dept: (void 0)(),
				desc: (void 0)()
			},
			{
				title: (void 0)(),
				location: (void 0)(),
				type: (void 0)(),
				dept: (void 0)(),
				desc: (void 0)()
			}
		];
	});
	var fragment = root();
	var h2 = $.first_child(fragment);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	$.each(div, 21, () => $.get(openings), $.index, ($$anchor, o) => {
		var div_1 = root_1();
		var div_2 = $.child(div_1);
		var h3 = $.child(div_2);
		var text_1 = $.child(h3, true);
		$.reset(h3);
		var p = $.sibling(h3, 2);
		var text_2 = $.child(p, true);
		$.reset(p);
		var div_3 = $.sibling(p, 2);
		var span = $.child(div_3);
		var text_3 = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_4 = $.child(span_1, true);
		$.reset(span_1);
		var span_2 = $.sibling(span_1, 2);
		var text_5 = $.child(span_2, true);
		$.reset(span_2);
		$.reset(div_3);
		$.reset(div_2);
		var button = $.sibling(div_2, 2);
		var text_6 = $.child(button, true);
		$.reset(button);
		$.reset(div_1);
		$.template_effect(($0) => {
			$.set_text(text_1, $.get(o).title);
			$.set_text(text_2, $.get(o).desc);
			$.set_text(text_3, $.get(o).dept);
			$.set_text(text_4, $.get(o).location);
			$.set_text(text_5, $.get(o).type);
			$.set_text(text_6, $0);
		}, [() => (void 0)()]);
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.template_effect(($0) => $.set_text(text, $0), [() => (void 0)()]);
	$.append($$anchor, fragment);
	$.pop();
	$$cleanup();
}
export { OpenPositions as default };

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
var root_1 = $.from_html(`<li class="rounded-md border border-border p-4"><span class="block text-sm font-bold text-primary"> </span> <span class="mt-1 block text-sm text-muted-foreground"> </span></li>`);
var root = $.from_html(`<section class="mx-auto mt-12 max-w-3xl"><h2 class="mb-4 text-2xl font-bold text-foreground"> </h2> <ul class="space-y-4"></ul></section>`);
function WhatWeMeasure($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const metrics = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				metric: (void 0)(),
				desc: (void 0)()
			},
			{
				metric: (void 0)(),
				desc: (void 0)()
			},
			{
				metric: (void 0)(),
				desc: (void 0)()
			},
			{
				metric: (void 0)(),
				desc: (void 0)()
			},
			{
				metric: (void 0)(),
				desc: (void 0)()
			}
		];
	});
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var ul = $.sibling(h2, 2);
	$.each(ul, 21, () => $.get(metrics), $.index, ($$anchor, item) => {
		var li = root_1();
		var span = $.child(li);
		var text_1 = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_2 = $.child(span_1, true);
		$.reset(span_1);
		$.reset(li);
		$.template_effect(() => {
			$.set_text(text_1, $.get(item).metric);
			$.set_text(text_2, $.get(item).desc);
		});
		$.append($$anchor, li);
	});
	$.reset(ul);
	$.reset(section);
	$.template_effect(($0) => $.set_text(text, $0), [() => (void 0)()]);
	$.append($$anchor, section);
	$.pop();
	$$cleanup();
}
export { WhatWeMeasure as default };

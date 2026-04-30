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
var root_1 = $.from_html(`<article class="rounded-lg border border-border bg-card p-6"><div class="mb-3 flex items-center gap-3"><span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"> </span> <span class="text-xs text-muted-foreground"> </span></div> <h2 class="mb-2 text-lg font-semibold text-foreground"> </h2> <p class="mb-4 text-sm text-muted-foreground"> </p> <button type="button" class="text-sm font-medium text-primary hover:underline"> </button></article>`);
var root = $.from_html(`<div class="grid gap-6 md:grid-cols-2"></div>`);
function BlogList($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const posts = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				title: (void 0)(),
				date: (void 0)(),
				excerpt: (void 0)(),
				category: (void 0)()
			},
			{
				title: (void 0)(),
				date: (void 0)(),
				excerpt: (void 0)(),
				category: (void 0)()
			},
			{
				title: (void 0)(),
				date: (void 0)(),
				excerpt: (void 0)(),
				category: (void 0)()
			},
			{
				title: (void 0)(),
				date: (void 0)(),
				excerpt: (void 0)(),
				category: (void 0)()
			},
			{
				title: (void 0)(),
				date: (void 0)(),
				excerpt: (void 0)(),
				category: (void 0)()
			},
			{
				title: (void 0)(),
				date: (void 0)(),
				excerpt: (void 0)(),
				category: (void 0)()
			}
		];
	});
	var div = root();
	$.each(div, 21, () => $.get(posts), $.index, ($$anchor, p) => {
		var article = root_1();
		var div_1 = $.child(article);
		var span = $.child(div_1);
		var text = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_1 = $.child(span_1, true);
		$.reset(span_1);
		$.reset(div_1);
		var h2 = $.sibling(div_1, 2);
		var text_2 = $.child(h2, true);
		$.reset(h2);
		var p_1 = $.sibling(h2, 2);
		var text_3 = $.child(p_1, true);
		$.reset(p_1);
		var button = $.sibling(p_1, 2);
		var text_4 = $.child(button, true);
		$.reset(button);
		$.reset(article);
		$.template_effect(($0) => {
			$.set_text(text, $.get(p).category);
			$.set_text(text_1, $.get(p).date);
			$.set_text(text_2, $.get(p).title);
			$.set_text(text_3, $.get(p).excerpt);
			$.set_text(text_4, $0);
		}, [() => (void 0)()]);
		$.append($$anchor, article);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { BlogList as default };

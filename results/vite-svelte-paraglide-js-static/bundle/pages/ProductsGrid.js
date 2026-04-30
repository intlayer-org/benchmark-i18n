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
var root_1 = $.from_html(`<div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"><div><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="mb-4 text-sm text-muted-foreground"> </p></div> <div class="flex items-center justify-between"><span class="text-sm font-bold text-primary"> </span> <button type="button" class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></div></div>`);
var root = $.from_html(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>`);
function ProductsGrid($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const products = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				name: (void 0)(),
				desc: (void 0)(),
				price: (void 0)()
			},
			{
				name: (void 0)(),
				desc: (void 0)(),
				price: (void 0)()
			},
			{
				name: (void 0)(),
				desc: (void 0)(),
				price: (void 0)()
			},
			{
				name: (void 0)(),
				desc: (void 0)(),
				price: (void 0)()
			},
			{
				name: (void 0)(),
				desc: (void 0)(),
				price: (void 0)()
			},
			{
				name: (void 0)(),
				desc: (void 0)(),
				price: (void 0)()
			}
		];
	});
	var div = root();
	$.each(div, 21, () => $.get(products), $.index, ($$anchor, p) => {
		var div_1 = root_1();
		var div_2 = $.child(div_1);
		var h3 = $.child(div_2);
		var text = $.child(h3, true);
		$.reset(h3);
		var p_1 = $.sibling(h3, 2);
		var text_1 = $.child(p_1, true);
		$.reset(p_1);
		$.reset(div_2);
		var div_3 = $.sibling(div_2, 2);
		var span = $.child(div_3);
		var text_2 = $.child(span, true);
		$.reset(span);
		var button = $.sibling(span, 2);
		var text_3 = $.child(button, true);
		$.reset(button);
		$.reset(div_3);
		$.reset(div_1);
		$.template_effect(($0) => {
			$.set_text(text, $.get(p).name);
			$.set_text(text_1, $.get(p).desc);
			$.set_text(text_2, $.get(p).price);
			$.set_text(text_3, $0);
		}, [() => (void 0)()]);
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { ProductsGrid as default };

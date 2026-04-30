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
var root_1 = $.from_html(`<div class="rounded-lg border border-border bg-card p-4 text-center"><p class="text-sm font-semibold text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div>`);
var root = $.from_html(`<div class="mb-12 grid gap-4 md:grid-cols-3"></div>`);
function CareersBenefits($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const benefits = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				label: (void 0)(),
				value: (void 0)()
			},
			{
				label: (void 0)(),
				value: (void 0)()
			},
			{
				label: (void 0)(),
				value: (void 0)()
			}
		];
	});
	var div = root();
	$.each(div, 21, () => $.get(benefits), $.index, ($$anchor, b) => {
		var div_1 = root_1();
		var p = $.child(div_1);
		var text = $.child(p, true);
		$.reset(p);
		var p_1 = $.sibling(p, 2);
		var text_1 = $.child(p_1, true);
		$.reset(p_1);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_text(text, $.get(b).label);
			$.set_text(text_1, $.get(b).value);
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { CareersBenefits as default };

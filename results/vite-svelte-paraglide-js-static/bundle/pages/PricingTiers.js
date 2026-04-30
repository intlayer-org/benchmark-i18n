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
var root_2 = $.from_html(`<li class="flex items-center gap-2 text-sm text-muted-foreground"><span class="text-primary">✓</span> </li>`);
var root_1 = $.from_html(`<div><h3 class="text-lg font-semibold text-foreground"> </h3> <div class="my-4"><span class="text-3xl font-bold text-foreground"> </span> <span class="text-sm text-muted-foreground"> </span></div> <ul class="mb-6 flex-1 space-y-2"></ul> <button type="button"> </button></div>`);
var root = $.from_html(`<div class="grid gap-6 md:grid-cols-3"></div>`);
function PricingTiers($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const tiers = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				name: (void 0)(),
				price: (void 0)(),
				period: (void 0)(),
				features: [
					(void 0)(),
					(void 0)(),
					(void 0)(),
					(void 0)()
				]
			},
			{
				name: (void 0)(),
				price: (void 0)(),
				period: (void 0)(),
				features: [
					(void 0)(),
					(void 0)(),
					(void 0)(),
					(void 0)(),
					(void 0)(),
					(void 0)()
				],
				highlighted: true
			},
			{
				name: (void 0)(),
				price: (void 0)(),
				period: "",
				features: [
					(void 0)(),
					(void 0)(),
					(void 0)(),
					(void 0)(),
					(void 0)(),
					(void 0)(),
					(void 0)()
				]
			}
		];
	});
	function tierButtonLabel(tierName) {
		return tierName === (void 0)() ? (void 0)() : (void 0)();
	}
	var div = root();
	$.each(div, 21, () => $.get(tiers), $.index, ($$anchor, t) => {
		var div_1 = root_1();
		var h3 = $.child(div_1);
		var text = $.child(h3, true);
		$.reset(h3);
		var div_2 = $.sibling(h3, 2);
		var span = $.child(div_2);
		var text_1 = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_2 = $.child(span_1, true);
		$.reset(span_1);
		$.reset(div_2);
		var ul = $.sibling(div_2, 2);
		$.each(ul, 20, () => $.get(t).features, (f) => f, ($$anchor, f) => {
			var li = root_2();
			var text_3 = $.sibling($.child(li));
			$.reset(li);
			$.template_effect(() => $.set_text(text_3, ` ${f ?? ""}`));
			$.append($$anchor, li);
		});
		$.reset(ul);
		var button = $.sibling(ul, 2);
		var text_4 = $.child(button, true);
		$.reset(button);
		$.reset(div_1);
		$.template_effect(($0) => {
			$.set_class(div_1, 1, `flex flex-col rounded-lg border p-6 ${$.get(t).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`);
			$.set_text(text, $.get(t).name);
			$.set_text(text_1, $.get(t).price);
			$.set_text(text_2, $.get(t).period);
			$.set_class(button, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${$.get(t).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`);
			$.set_text(text_4, $0);
		}, [() => tierButtonLabel($.get(t).name)]);
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { PricingTiers as default };

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
var root_1 = $.from_html(`<div class="rounded-lg border border-border bg-card p-6 text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"> </div> <h3 class="text-base font-semibold text-foreground"> </h3> <p class="mb-2 text-xs font-medium text-primary"> </p> <p class="text-sm text-muted-foreground"> </p></div>`);
var root = $.from_html(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>`);
function TeamGrid($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const members = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				name: (void 0)(),
				role: (void 0)(),
				bio: (void 0)()
			},
			{
				name: (void 0)(),
				role: (void 0)(),
				bio: (void 0)()
			},
			{
				name: (void 0)(),
				role: (void 0)(),
				bio: (void 0)()
			},
			{
				name: (void 0)(),
				role: (void 0)(),
				bio: (void 0)()
			},
			{
				name: (void 0)(),
				role: (void 0)(),
				bio: (void 0)()
			},
			{
				name: (void 0)(),
				role: (void 0)(),
				bio: (void 0)()
			}
		];
	});
	var div = root();
	$.each(div, 21, () => $.get(members), $.index, ($$anchor, member) => {
		var div_1 = root_1();
		var div_2 = $.child(div_1);
		var text = $.child(div_2, true);
		$.reset(div_2);
		var h3 = $.sibling(div_2, 2);
		var text_1 = $.child(h3, true);
		$.reset(h3);
		var p = $.sibling(h3, 2);
		var text_2 = $.child(p, true);
		$.reset(p);
		var p_1 = $.sibling(p, 2);
		var text_3 = $.child(p_1, true);
		$.reset(p_1);
		$.reset(div_1);
		$.template_effect(($0) => {
			$.set_text(text, $0);
			$.set_text(text_1, $.get(member).name);
			$.set_text(text_2, $.get(member).role);
			$.set_text(text_3, $.get(member).bio);
		}, [() => $.get(member).name.split(" ").map((n) => n[0]).join("")]);
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { TeamGrid as default };

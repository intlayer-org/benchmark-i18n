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
var PAGE_SEGMENTS = /* @__PURE__ */ new Set([
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
var pathname = writable(typeof window !== "undefined" ? window.location.pathname : "/en");
var route = derived(pathname, (p) => parsePath(p));
var root = $.from_html(`<a class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_1 = $.from_html(`<a target="_blank" rel="noreferrer" class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_2 = $.from_html(`<li><!></li>`);
var root_3 = $.from_html(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground">i18n Benchmark</h3> <p class="text-sm text-muted-foreground">An open-source test application for measuring the real-world impact of
          internationalization libraries on bundle size, loading time, and app
          reactivity.</p></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground">Resources</h3> <ul class="space-y-1"></ul></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground">Contact</h3> <p class="text-sm text-muted-foreground">contact@intlayer.org</p></div></div> <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">i18n Benchmark — Open-source project. Built with Svelte, Vite, and a
      client-side router.</div></div></footer>`);
function Footer($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const footerLinks = $.derived(() => [
		{
			label: "GitHub",
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: "Methodology",
			to: `/${$.get(currentLocale)}/about`,
			isInternal: true
		},
		{
			label: "Contributing",
			to: `/${$.get(currentLocale)}/contact`,
			isInternal: true
		}
	]);
	var footer = root_3();
	var div = $.child(footer);
	var div_1 = $.child(div);
	var div_2 = $.sibling($.child(div_1), 2);
	var ul = $.sibling($.child(div_2), 2);
	$.each(ul, 21, () => $.get(footerLinks), (linkEl) => linkEl.label, ($$anchor, linkEl) => {
		var li = root_2();
		var node = $.child(li);
		var consequent = ($$anchor) => {
			var a = root();
			var text = $.only_child(a, true);
			$.template_effect(() => {
				$.set_attribute(a, "href", $.get(linkEl).to);
				$.set_text(text, $.get(linkEl).label);
			});
			$.append($$anchor, a);
		};
		var alternate = ($$anchor) => {
			var a_1 = root_1();
			var text_1 = $.only_child(a_1, true);
			$.template_effect(() => {
				$.set_attribute(a_1, "href", $.get(linkEl).href);
				$.set_text(text_1, $.get(linkEl).label);
			});
			$.append($$anchor, a_1);
		};
		$.if(node, ($$render) => {
			if ($.get(linkEl).isInternal) $$render(consequent);
			else $$render(alternate, -1);
		});
		$.reset(li);
		$.append($$anchor, li);
	});
	$.reset(ul);
	$.reset(div_2);
	$.next(2);
	$.reset(div_1);
	$.next(2);
	$.reset(div);
	$.reset(footer);
	$.append($$anchor, footer);
	$.pop();
	$$cleanup();
}
export { Footer as default };

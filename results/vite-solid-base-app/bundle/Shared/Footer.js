import { createComponent, insert, template } from "solid-js/web";
import { A, useParams } from "@solidjs/router";
var _tmpl$ = template(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground">i18n Benchmark</h3><p class="text-sm text-muted-foreground">An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.</p></div><div><h3 class="mb-2 text-sm font-semibold text-foreground">Resources</h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class="text-sm text-muted-foreground transition-colors hover:text-foreground">GitHub</a></li><li></li><li></li></ul></div><div><h3 class="mb-2 text-sm font-semibold text-foreground">Contact</h3><p class="text-sm text-muted-foreground">contact@intlayer.org</p></div></div><div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">i18n Benchmark — Open-source project. Built with Solid, Vite & Solid Router.`);
function Footer() {
	const params = useParams();
	const locale = () => params.locale ?? "en";
	return (() => {
		var _el$ = _tmpl$(), _el$9 = _el$.firstChild.firstChild.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling, _el$0 = _el$9.nextSibling;
		insert(_el$9, createComponent(A, {
			get href() {
				return `/${locale()}/about`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			children: "Methodology"
		}));
		insert(_el$0, createComponent(A, {
			get href() {
				return `/${locale()}/contact`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			children: "Contributing"
		}));
		return _el$;
	})();
}
export { Footer as default };

import { createComponent, insert, template } from "solid-js/web";
import { A, useParams } from "@solidjs/router";
var _tmpl$ = template(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground"></p></div><div><h3 class="mb-2 text-sm font-semibold text-foreground"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class="text-sm text-muted-foreground transition-colors hover:text-foreground"></a></li><li></li><li></li></ul></div><div><h3 class="mb-2 text-sm font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground"></p></div></div><div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">`);
function Footer() {
	const params = useParams();
	const locale = () => params.locale ?? "en";
	return (() => {
		var _el$ = _tmpl$(), _el$3 = _el$.firstChild.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$4.nextSibling, _el$8 = _el$7.firstChild, _el$0 = _el$8.nextSibling.firstChild, _el$1 = _el$0.firstChild, _el$10 = _el$0.nextSibling, _el$11 = _el$10.nextSibling, _el$13 = _el$7.nextSibling.firstChild, _el$14 = _el$13.nextSibling, _el$15 = _el$3.nextSibling;
		insert(_el$5, () => (void 0)());
		insert(_el$6, () => (void 0)());
		insert(_el$8, () => (void 0)());
		insert(_el$1, () => (void 0)());
		insert(_el$10, createComponent(A, {
			get href() {
				return `/${locale()}/about`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return (void 0)();
			}
		}));
		insert(_el$11, createComponent(A, {
			get href() {
				return `/${locale()}/contact`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return (void 0)();
			}
		}));
		insert(_el$13, () => (void 0)());
		insert(_el$14, () => (void 0)());
		insert(_el$15, () => (void 0)());
		return _el$;
	})();
}
export { Footer as default };

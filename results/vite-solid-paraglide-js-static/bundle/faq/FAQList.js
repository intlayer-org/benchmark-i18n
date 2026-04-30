import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var _index_exports = __exportAll({});
var messages_exports = __exportAll({ m: () => _index_exports });
var _tmpl$ = template(`<div class="mx-auto max-w-3xl space-y-4">`), _tmpl$2 = template(`<details class="group rounded-lg border border-border bg-card"><summary class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"></summary><p class="px-6 pb-4 text-sm text-muted-foreground">`);
function FAQList() {
	const faqs = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map((i) => ({
		q: messages_exports[`faq_list_q${i}`]?.(),
		a: messages_exports[`faq_list_a${i}`]?.()
	}));
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: faqs,
			children: (f) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
				insert(_el$3, () => f.q);
				insert(_el$4, () => f.a);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { FAQList as default };

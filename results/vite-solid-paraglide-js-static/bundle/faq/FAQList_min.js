import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = Object.defineProperty, a = (e, t) => {
	let n = {};
	for (var r in e) i(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || i(n, Symbol.toStringTag, { value: "Module" }), n;
}, o = a({}), s = a({ m: () => o }), c = n("<div class=\"mx-auto max-w-3xl space-y-4\">"), l = n("<details class=\"group rounded-lg border border-border bg-card\"><summary class=\"cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50\"></summary><p class=\"px-6 pb-4 text-sm text-muted-foreground\">");
function u() {
	let n = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map((e) => ({
		q: s[`faq_list_q${e}`]?.(),
		a: s[`faq_list_a${e}`]?.()
	}));
	return (() => {
		var i = c();
		return t(i, e(r, {
			each: n,
			children: (e) => (() => {
				var n = l(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.q), t(i, () => e.a), n;
			})()
		})), i;
	})();
}
export { u as default };

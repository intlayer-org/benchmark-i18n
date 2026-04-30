import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = Object.defineProperty, n = ((e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
})({}), r = e.from_html("<details class=\"group rounded-lg border border-border bg-card\"><summary class=\"cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50\"> </summary> <p class=\"px-6 pb-4 text-sm text-muted-foreground\"> </p></details>"), i = e.from_html("<div class=\"mx-auto max-w-3xl space-y-4\"></div>");
function a(t, a) {
	e.push(a, !1);
	let o = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map((e) => ({
		q: n[`faq_list_q${e}`]?.(),
		a: n[`faq_list_a${e}`]?.()
	}));
	e.init();
	var s = i();
	e.each(s, 5, () => o, e.index, (t, n) => {
		var i = r(), a = e.child(i), o = e.child(a, !0);
		e.reset(a);
		var s = e.sibling(a, 2), c = e.child(s, !0);
		e.reset(s), e.reset(i), e.template_effect(() => {
			e.set_text(o, e.get(n).q), e.set_text(c, e.get(n).a);
		}), e.append(t, i);
	}), e.reset(s), e.append(t, s), e.pop();
}
export { a as default };

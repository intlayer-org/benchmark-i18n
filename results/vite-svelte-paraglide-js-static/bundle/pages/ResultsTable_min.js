import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
function n(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var r = e.from_html("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td></tr>"), i = e.from_html("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=\"bg-muted\"><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th></tr></thead><tbody></tbody></table></div></section>");
function a(t, a) {
	e.push(a, !1), n("ResultsTable");
	let o = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: (void 0)()
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: (void 0)()
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: (void 0)()
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: (void 0)()
		}
	];
	e.init();
	var s = i(), c = e.child(s), l = e.child(c, !0);
	e.reset(c);
	var u = e.sibling(c, 2), d = e.child(u), f = e.child(d), p = e.child(f), m = e.child(p), h = e.child(m, !0);
	e.reset(m);
	var g = e.sibling(m), _ = e.child(g, !0);
	e.reset(g);
	var v = e.sibling(g), y = e.child(v, !0);
	e.reset(v);
	var b = e.sibling(v), x = e.child(b, !0);
	e.reset(b), e.reset(p), e.reset(f);
	var S = e.sibling(f);
	e.each(S, 5, () => o, e.index, (t, n) => {
		var i = r(), a = e.child(i), o = e.child(a, !0);
		e.reset(a);
		var s = e.sibling(a), c = e.child(s, !0);
		e.reset(s);
		var l = e.sibling(s), u = e.child(l, !0);
		e.reset(l);
		var d = e.sibling(l), f = e.child(d, !0);
		e.reset(d), e.reset(i), e.template_effect(() => {
			e.set_text(o, e.get(n).lib), e.set_text(c, e.get(n).size), e.set_text(u, e.get(n).time), e.set_text(f, e.get(n).lazy);
		}), e.append(t, i);
	}), e.reset(S), e.reset(d), e.reset(u), e.reset(s), e.template_effect((t, n, r, i, a) => {
		e.set_text(l, t), e.set_text(h, n), e.set_text(_, r), e.set_text(y, i), e.set_text(x, a);
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]), e.append(t, s), e.pop();
}
export { a as default };

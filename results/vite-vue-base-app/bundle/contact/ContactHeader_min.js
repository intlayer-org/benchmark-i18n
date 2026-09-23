import { Fragment as e, createElementBlock as t, createElementVNode as n, createTextVNode as r, createVNode as i, defineComponent as a, openBlock as o } from "vue";
var s = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, c = {}, l = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function u(e, n) {
	return o(), t("div", l, " ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service. ");
}
var d = s(c, [["render", u]]), f = a({
	__name: "ContactHeader",
	setup(a) {
		return (a, s) => (o(), t(e, null, [
			i(d),
			s[0] ||= n("h1", { class: "mb-2 text-3xl font-bold text-foreground" }, "Get in Touch", -1),
			s[1] ||= n("p", { class: "mb-8 text-muted-foreground" }, [
				r(" Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at "),
				n("a", {
					href: "mailto:contact@intlayer.org",
					class: "text-primary hover:underline"
				}, " contact@intlayer.org "),
				r(" . ")
			], -1)
		], 64));
	}
});
export { f as default };

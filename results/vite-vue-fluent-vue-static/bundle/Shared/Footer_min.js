import { Fragment as e, computed as t, createBlock as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, defineComponent as o, getCurrentInstance as s, openBlock as c, renderList as l, resolveComponent as u, toDisplayString as d, unref as f, withCtx as p } from "vue";
import { useRoute as m } from "vue-router";
function h(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function g(e) {
	return e.split(".").map(h).join("-");
}
function _() {
	let e = s()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(g(t), n ?? {});
	} };
}
var v = { class: "mt-20 border-t border-border bg-card" }, y = { class: "container py-8" }, b = { class: "grid gap-8 md:grid-cols-3" }, x = { class: "mb-2 text-sm font-semibold text-foreground" }, S = { class: "text-sm text-muted-foreground" }, C = { class: "mb-2 text-sm font-semibold text-foreground" }, w = { class: "space-y-1" }, T = ["href"], E = { class: "mb-2 text-sm font-semibold text-foreground" }, D = { class: "text-sm text-muted-foreground" }, O = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" }, k = o({
	__name: "Footer",
	setup(o) {
		let { td: s } = _(), h = m(), g = t(() => h.params.locale || "en"), k = t(() => [
			{
				label: s("footer.github"),
				href: "https://github.com/intlayer-org/benchmark-i18n",
				isInternal: !1
			},
			{
				label: s("footer.methodology"),
				to: `/${g.value}/about`,
				isInternal: !0
			},
			{
				label: s("footer.contributing"),
				to: `/${g.value}/contact`,
				isInternal: !0
			}
		]);
		return (t, o) => {
			let m = u("router-link");
			return c(), r("footer", v, [i("div", y, [i("div", b, [
				i("div", null, [i("h3", x, d(f(s)("footer.title")), 1), i("p", S, d(f(s)("footer.description")), 1)]),
				i("div", null, [i("h3", C, d(f(s)("footer.resources")), 1), i("ul", w, [(c(!0), r(e, null, l(k.value, (e) => (c(), r("li", { key: e.label }, [e.isInternal ? (c(), n(m, {
					key: 0,
					to: e.to,
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, {
					default: p(() => [a(d(e.label), 1)]),
					_: 2
				}, 1032, ["to"])) : (c(), r("a", {
					key: 1,
					href: e.href,
					target: "_blank",
					rel: "noreferrer",
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, d(e.label), 9, T))]))), 128))])]),
				i("div", null, [i("h3", E, d(f(s)("footer.contact")), 1), i("p", D, d(f(s)("shared.contactEmail")), 1)])
			]), i("div", O, d(f(s)("footer.builtWith")), 1)])]);
		};
	}
});
export { k as default };

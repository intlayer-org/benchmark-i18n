import { Fragment as e, computed as t, createBlock as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, defineComponent as o, getCurrentInstance as s, openBlock as c, renderList as l, resolveComponent as u, toDisplayString as d, withCtx as f } from "vue";
import { useRoute as p } from "vue-router";
function m(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function h(e) {
	return e.split(".").map(m).join("-");
}
function g() {
	let e = s()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(h(t), n ?? {});
	} };
}
var _ = o({
	__name: "Footer",
	setup(e, { expose: n }) {
		n();
		let { td: r } = g(), i = p(), a = t(() => i.params.locale || "en"), o = {
			td: r,
			route: i,
			currentLocale: a,
			footerLinks: t(() => [
				{
					label: r("footer.github"),
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: !1
				},
				{
					label: r("footer.methodology"),
					to: `/${a.value}/about`,
					isInternal: !0
				},
				{
					label: r("footer.contributing"),
					to: `/${a.value}/contact`,
					isInternal: !0
				}
			])
		};
		return Object.defineProperty(o, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), o;
	}
}), v = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, y = { class: "mt-20 border-t border-border bg-card" }, b = { class: "container py-8" }, x = { class: "grid gap-8 md:grid-cols-3" }, S = { class: "mb-2 text-sm font-semibold text-foreground" }, C = { class: "text-sm text-muted-foreground" }, w = { class: "mb-2 text-sm font-semibold text-foreground" }, T = { class: "space-y-1" }, E = ["href"], D = { class: "mb-2 text-sm font-semibold text-foreground" }, O = { class: "text-sm text-muted-foreground" }, k = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function A(t, o, s, p, m, h) {
	let g = u("router-link");
	return c(), r("footer", y, [i("div", b, [i("div", x, [
		i("div", null, [i("h3", S, d(p.td("footer.title")), 1), i("p", C, d(p.td("footer.description")), 1)]),
		i("div", null, [i("h3", w, d(p.td("footer.resources")), 1), i("ul", T, [(c(!0), r(e, null, l(p.footerLinks, (e) => (c(), r("li", { key: e.label }, [e.isInternal ? (c(), n(g, {
			key: 0,
			to: e.to,
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, {
			default: f(() => [a(d(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (c(), r("a", {
			key: 1,
			href: e.href,
			target: "_blank",
			rel: "noreferrer",
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, d(e.label), 9, E))]))), 128))])]),
		i("div", null, [i("h3", D, d(p.td("footer.contact")), 1), i("p", O, d(p.td("shared.contactEmail")), 1)])
	]), i("div", k, d(p.td("footer.builtWith")), 1)])]);
}
var j = v(_, [["render", A], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/Footer.vue"]]);
export { j as default };

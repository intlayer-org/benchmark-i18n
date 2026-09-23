import { Fragment as e, computed as t, createBlock as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, defineComponent as o, openBlock as s, renderList as c, resolveComponent as l, toDisplayString as u, withCtx as d } from "vue";
import { useRoute as f } from "vue-router";
var p = o({
	__name: "Footer",
	setup(e, { expose: n }) {
		n();
		let r = f(), i = t(() => r.params.locale || "en"), a = {
			route: r,
			currentLocale: i,
			footerLinks: t(() => [
				{
					label: "GitHub",
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: !1
				},
				{
					label: "Methodology",
					to: `/${i.value}/about`,
					isInternal: !0
				},
				{
					label: "Contributing",
					to: `/${i.value}/contact`,
					isInternal: !0
				}
			])
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), m = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, h = { class: "mt-20 border-t border-border bg-card" }, g = { class: "container py-8" }, _ = { class: "grid gap-8 md:grid-cols-3" }, v = { class: "space-y-1" }, y = ["href"];
function b(t, o, f, p, m, b) {
	let x = l("router-link");
	return s(), r("footer", h, [i("div", g, [i("div", _, [
		o[1] ||= i("div", null, [i("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " i18n Benchmark "), i("p", { class: "text-sm text-muted-foreground" }, " An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity. ")], -1),
		i("div", null, [o[0] ||= i("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " Resources ", -1), i("ul", v, [(s(!0), r(e, null, c(p.footerLinks, (e) => (s(), r("li", { key: e.label }, [e.isInternal ? (s(), n(x, {
			key: 0,
			to: e.to,
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, {
			default: d(() => [a(u(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (s(), r("a", {
			key: 1,
			href: e.href,
			target: "_blank",
			rel: "noreferrer",
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, u(e.label), 9, y))]))), 128))])]),
		o[2] ||= i("div", null, [i("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " Contact "), i("p", { class: "text-sm text-muted-foreground" }, " contact@intlayer.org ")], -1)
	]), o[3] ||= i("div", { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" }, " i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router. ", -1)])]);
}
var x = m(p, [["render", b], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/Footer.vue"]]);
export { x as default };

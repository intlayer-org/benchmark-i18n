import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, openBlock as o, renderList as s, toDisplayString as c } from "vue";
function l(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function u(e) {
	return e.split(".").map(l).join("-");
}
function d() {
	let e = a()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(u(t), n ?? {});
	} };
}
var f = i({
	__name: "ProductsGrid",
	setup(e, { expose: n }) {
		n();
		let { td: r } = d(), i = [
			"cli",
			"cloud",
			"enterprise",
			"migration",
			"qa",
			"optimizer"
		], a = {
			td: r,
			productIds: i,
			products: t(() => i.map((e) => ({
				name: r(`products.grid.${e}Name`),
				desc: r(`products.grid.${e}Desc`),
				price: r(`products.grid.${e}Price`)
			})))
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, h = { class: "mb-2 text-lg font-semibold text-foreground" }, g = { class: "mb-4 text-sm text-muted-foreground" }, _ = { class: "flex items-center justify-between" }, v = { class: "text-sm font-bold text-primary" }, y = {
	type: "button",
	class: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function b(t, i, a, l, u, d) {
	return o(), n("div", m, [(o(!0), n(e, null, s(l.products, (e) => (o(), n("div", {
		key: e.name,
		class: "flex flex-col justify-between rounded-lg border border-border bg-card p-6"
	}, [r("div", null, [r("h3", h, c(e.name), 1), r("p", g, c(e.desc), 1)]), r("div", _, [r("span", v, c(e.price), 1), r("button", y, c(l.td("products.grid.learnMore")), 1)])]))), 128))]);
}
var x = p(f, [["render", b], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/products/ProductsGrid.vue"]]);
export { x as default };

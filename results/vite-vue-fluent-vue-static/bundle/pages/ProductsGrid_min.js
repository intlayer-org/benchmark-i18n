import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, openBlock as o, renderList as s, toDisplayString as c, unref as l } from "vue";
function u(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function d(e) {
	return e.split(".").map(u).join("-");
}
function f() {
	let e = a()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(d(t), n ?? {});
	} };
}
var p = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, m = { class: "mb-2 text-lg font-semibold text-foreground" }, h = { class: "mb-4 text-sm text-muted-foreground" }, g = { class: "flex items-center justify-between" }, _ = { class: "text-sm font-bold text-primary" }, v = {
	type: "button",
	class: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
}, y = i({
	__name: "ProductsGrid",
	setup(i) {
		let { td: a } = f(), u = [
			"cli",
			"cloud",
			"enterprise",
			"migration",
			"qa",
			"optimizer"
		], d = t(() => u.map((e) => ({
			name: a(`products.grid.${e}Name`),
			desc: a(`products.grid.${e}Desc`),
			price: a(`products.grid.${e}Price`)
		})));
		return (t, i) => (o(), n("div", p, [(o(!0), n(e, null, s(d.value, (e) => (o(), n("div", {
			key: e.name,
			class: "flex flex-col justify-between rounded-lg border border-border bg-card p-6"
		}, [r("div", null, [r("h3", m, c(e.name), 1), r("p", h, c(e.desc), 1)]), r("div", g, [r("span", _, c(e.price), 1), r("button", v, c(l(a)("products.grid.learnMore")), 1)])]))), 128))]));
	}
});
export { y as default };

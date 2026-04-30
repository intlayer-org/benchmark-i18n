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
var f = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, p = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" }, m = { class: "text-base font-semibold text-foreground" }, h = { class: "mb-2 text-xs font-medium text-primary" }, g = { class: "text-sm text-muted-foreground" }, _ = i({
	__name: "TeamGrid",
	setup(i) {
		let { td: a } = d(), l = [
			1,
			2,
			3,
			4,
			5,
			6
		], u = t(() => l.map((e) => ({
			name: a(`team.grid.member${e}Name`),
			role: a(`team.grid.member${e}Role`),
			bio: a(`team.grid.member${e}Bio`)
		}))), _ = (e) => e.split(" ").map((e) => e[0]).join("");
		return (t, i) => (o(), n("div", f, [(o(!0), n(e, null, s(u.value, (e) => (o(), n("div", {
			key: e.name,
			class: "rounded-lg border border-border bg-card p-6 text-center"
		}, [
			r("div", p, c(_(e.name)), 1),
			r("h3", m, c(e.name), 1),
			r("p", h, c(e.role), 1),
			r("p", g, c(e.bio), 1)
		]))), 128))]));
	}
});
export { _ as default };

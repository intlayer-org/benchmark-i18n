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
	__name: "TeamGrid",
	setup(e, { expose: n }) {
		n();
		let { td: r } = d(), i = [
			1,
			2,
			3,
			4,
			5,
			6
		], a = {
			td: r,
			memberIndices: i,
			members: t(() => i.map((e) => ({
				name: r(`team.grid.member${e}Name`),
				role: r(`team.grid.member${e}Role`),
				bio: r(`team.grid.member${e}Bio`)
			}))),
			getInitials: (e) => e.split(" ").map((e) => e[0]).join("")
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
}, m = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, h = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" }, g = { class: "text-base font-semibold text-foreground" }, _ = { class: "mb-2 text-xs font-medium text-primary" }, v = { class: "text-sm text-muted-foreground" };
function y(t, i, a, l, u, d) {
	return o(), n("div", m, [(o(!0), n(e, null, s(l.members, (e) => (o(), n("div", {
		key: e.name,
		class: "rounded-lg border border-border bg-card p-6 text-center"
	}, [
		r("div", h, c(l.getInitials(e.name)), 1),
		r("h3", g, c(e.name), 1),
		r("p", _, c(e.role), 1),
		r("p", v, c(e.bio), 1)
	]))), 128))]);
}
var b = p(f, [["render", y], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/team/TeamGrid.vue"]]);
export { b as default };

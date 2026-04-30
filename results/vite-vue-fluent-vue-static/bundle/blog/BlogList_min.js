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
var p = { class: "grid gap-6 md:grid-cols-2" }, m = { class: "mb-3 flex items-center gap-3" }, h = { class: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground" }, g = { class: "text-xs text-muted-foreground" }, _ = { class: "mb-2 text-lg font-semibold text-foreground" }, v = { class: "mb-4 text-sm text-muted-foreground" }, y = {
	type: "button",
	class: "text-sm font-medium text-primary hover:underline"
}, b = i({
	__name: "BlogList",
	setup(i) {
		let { td: a } = f(), u = [
			1,
			2,
			3,
			4,
			5,
			6
		], d = t(() => u.map((e) => ({
			title: a(`blog.list.post${e}Title`),
			date: a(`blog.list.post${e}Date`),
			excerpt: a(`blog.list.post${e}Excerpt`),
			category: a(`blog.list.post${e}Category`)
		})));
		return (t, i) => (o(), n("div", p, [(o(!0), n(e, null, s(d.value, (e) => (o(), n("article", {
			key: e.title,
			class: "rounded-lg border border-border bg-card p-6"
		}, [
			r("div", m, [r("span", h, c(e.category), 1), r("span", g, c(e.date), 1)]),
			r("h2", _, c(e.title), 1),
			r("p", v, c(e.excerpt), 1),
			r("button", y, c(l(a)("blog.list.readMore")), 1)
		]))), 128))]));
	}
});
export { b as default };

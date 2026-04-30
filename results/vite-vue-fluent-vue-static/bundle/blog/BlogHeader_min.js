import { Fragment as e, createElementBlock as t, createElementVNode as n, createVNode as r, defineComponent as i, getCurrentInstance as a, openBlock as o, toDisplayString as s, unref as c } from "vue";
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
var f = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" }, p = i({
	__name: "MockBanner",
	setup(e) {
		let { td: n } = d();
		return (e, r) => (o(), t("div", f, s(c(n)("mockBanner")), 1));
	}
}), m = { class: "mb-2 text-3xl font-bold text-foreground" }, h = { class: "mb-10 text-muted-foreground" }, g = i({
	__name: "BlogHeader",
	setup(i) {
		let { td: a } = d();
		return (i, l) => (o(), t(e, null, [
			r(p),
			n("h1", m, s(c(a)("blog.header.title")), 1),
			n("p", h, s(c(a)("blog.header.description")), 1)
		], 64));
	}
});
export { g as default };

import { Fragment as e, createElementBlock as t, createElementVNode as n, createTextVNode as r, createVNode as i, defineComponent as a, getCurrentInstance as o, openBlock as s, toDisplayString as c, unref as l } from "vue";
function u(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function d(e) {
	return e.split(".").map(u).join("-");
}
function f() {
	let e = o()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(d(t), n ?? {});
	} };
}
var p = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" }, m = a({
	__name: "MockBanner",
	setup(e) {
		let { td: n } = f();
		return (e, r) => (s(), t("div", p, c(l(n)("mockBanner")), 1));
	}
}), h = { class: "mb-2 text-3xl font-bold text-foreground" }, g = { class: "mb-8 text-muted-foreground" }, _ = {
	href: "mailto:contact@intlayer.org",
	class: "text-primary hover:underline"
}, v = a({
	__name: "ContactHeader",
	setup(a) {
		let { td: o } = f();
		return (a, u) => (s(), t(e, null, [
			i(m),
			n("h1", h, c(l(o)("contact.header.title")), 1),
			n("p", g, [
				r(c(l(o)("contact.header.description")) + " ", 1),
				n("a", _, c(l(o)("shared.contactEmail")), 1),
				u[0] ||= r(" . ", -1)
			])
		], 64));
	}
});
export { v as default };

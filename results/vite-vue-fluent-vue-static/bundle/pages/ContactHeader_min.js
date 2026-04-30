import { Fragment as e, createElementBlock as t, createElementVNode as n, createTextVNode as r, createVNode as i, defineComponent as a, getCurrentInstance as o, openBlock as s, toDisplayString as c } from "vue";
function l(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function u(e) {
	return e.split(".").map(l).join("-");
}
function d() {
	let e = o()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(u(t), n ?? {});
	} };
}
var f = a({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { td: n } = d(), r = { td: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function h(e, n, r, i, a, o) {
	return s(), t("div", m, c(i.td("mockBanner")), 1);
}
var g = p(f, [["render", h], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/MockBanner.vue"]]), _ = a({
	__name: "ContactHeader",
	setup(e, { expose: t }) {
		t();
		let { td: n } = d(), r = {
			td: n,
			MockBanner: g
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), v = { class: "mb-2 text-3xl font-bold text-foreground" }, y = { class: "mb-8 text-muted-foreground" }, b = {
	href: "mailto:contact@intlayer.org",
	class: "text-primary hover:underline"
};
function x(a, o, l, u, d, f) {
	return s(), t(e, null, [
		i(u.MockBanner),
		n("h1", v, c(u.td("contact.header.title")), 1),
		n("p", y, [
			r(c(u.td("contact.header.description")) + " ", 1),
			n("a", b, c(u.td("shared.contactEmail")), 1),
			o[0] ||= r(" . ", -1)
		])
	], 64);
}
var S = p(_, [["render", x], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/contact/ContactHeader.vue"]]);
export { S as default };

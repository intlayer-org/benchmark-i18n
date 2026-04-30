import { Fragment as e, createElementBlock as t, createElementVNode as n, createVNode as r, defineComponent as i, getCurrentInstance as a, openBlock as o, toDisplayString as s } from "vue";
function c(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function l(e) {
	return e.split(".").map(c).join("-");
}
function u() {
	let e = a()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(l(t), n ?? {});
	} };
}
var d = i({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { td: n } = u(), r = { td: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), f = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, p = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function m(e, n, r, i, a, c) {
	return o(), t("div", p, s(i.td("mockBanner")), 1);
}
var h = f(d, [["render", m], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/MockBanner.vue"]]), g = i({
	__name: "PricingHeader",
	setup(e, { expose: t }) {
		t();
		let { td: n } = u(), r = {
			td: n,
			MockBanner: h
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), _ = { class: "mb-12 text-center" }, v = { class: "mb-3 text-3xl font-bold text-foreground" }, y = { class: "text-muted-foreground" };
function b(i, a, c, l, u, d) {
	return o(), t(e, null, [r(l.MockBanner), n("div", _, [n("h1", v, s(l.td("pricing.header.title")), 1), n("p", y, s(l.td("pricing.header.description")), 1)])], 64);
}
var x = f(g, [["render", b], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/pricing/PricingHeader.vue"]]);
export { x as default };

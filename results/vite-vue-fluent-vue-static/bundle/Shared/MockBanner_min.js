import { createElementBlock as e, defineComponent as t, getCurrentInstance as n, openBlock as r, toDisplayString as i } from "vue";
function a(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function o(e) {
	return e.split(".").map(a).join("-");
}
function s() {
	let e = n()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(o(t), n ?? {});
	} };
}
var c = t({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { td: n } = s(), r = { td: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), l = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, u = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function d(t, n, a, o, s, c) {
	return r(), e("div", u, i(o.td("mockBanner")), 1);
}
var f = l(c, [["render", d], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/MockBanner.vue"]]);
export { f as default };

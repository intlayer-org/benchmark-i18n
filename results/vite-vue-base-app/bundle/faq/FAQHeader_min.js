import { Fragment as e, createElementBlock as t, createElementVNode as n, createVNode as r, defineComponent as i, openBlock as a } from "vue";
var o = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, s = {}, c = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function l(e, n) {
	return a(), t("div", c, " ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service. ");
}
var u = o(s, [["render", l], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/MockBanner.vue"]]), d = i({
	__name: "FAQHeader",
	setup(e, { expose: t }) {
		t();
		let n = { MockBanner: u };
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
});
function f(i, o, s, c, l, u) {
	return a(), t(e, null, [
		r(c.MockBanner),
		o[0] ||= n("h1", { class: "mb-2 text-3xl font-bold text-foreground" }, " Frequently Asked Questions ", -1),
		o[1] ||= n("p", { class: "mb-10 text-muted-foreground" }, " Everything you need to know about i18n Benchmark. ", -1)
	], 64);
}
var p = o(d, [["render", f], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/faq/FAQHeader.vue"]]);
export { p as default };

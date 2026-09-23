import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = r({
	__name: "CareersBenefits",
	setup(e, { expose: t }) {
		t();
		let n = { benefits: [
			{
				label: "Remote-first",
				value: "Work from anywhere in the world"
			},
			{
				label: "Competitive pay",
				value: "Top-of-market compensation"
			},
			{
				label: "Open source time",
				value: "20% time for OSS contributions"
			}
		] };
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), c = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, l = { class: "mb-12 grid gap-4 md:grid-cols-3" }, u = { class: "text-sm font-semibold text-foreground" }, d = { class: "text-xs text-muted-foreground" };
function f(r, s, c, f, p, m) {
	return i(), t("div", l, [(i(), t(e, null, a(f.benefits, (e) => n("div", {
		key: e.label,
		class: "rounded-lg border border-border bg-card p-4 text-center"
	}, [n("p", u, o(e.label), 1), n("p", d, o(e.value), 1)])), 64))]);
}
var p = c(s, [["render", f], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/careers/CareersBenefits.vue"]]);
export { p as default };

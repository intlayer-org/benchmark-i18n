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
	__name: "CareersBenefits",
	setup(e, { expose: n }) {
		n();
		let { td: r } = d(), i = {
			td: r,
			benefits: t(() => [
				{
					label: r("careers.benefits.remoteLabel"),
					value: r("careers.benefits.remoteValue")
				},
				{
					label: r("careers.benefits.payLabel"),
					value: r("careers.benefits.payValue")
				},
				{
					label: r("careers.benefits.ossLabel"),
					value: r("careers.benefits.ossValue")
				}
			])
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = { class: "mb-12 grid gap-4 md:grid-cols-3" }, h = { class: "text-sm font-semibold text-foreground" }, g = { class: "text-xs text-muted-foreground" };
function _(t, i, a, l, u, d) {
	return o(), n("div", m, [(o(!0), n(e, null, s(l.benefits, (e) => (o(), n("div", {
		key: e.label,
		class: "rounded-lg border border-border bg-card p-4 text-center"
	}, [r("p", h, c(e.label), 1), r("p", g, c(e.value), 1)]))), 128))]);
}
var v = p(f, [["render", _], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/careers/CareersBenefits.vue"]]);
export { v as default };

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
var f = { class: "mb-12 grid gap-4 md:grid-cols-3" }, p = { class: "text-sm font-semibold text-foreground" }, m = { class: "text-xs text-muted-foreground" }, h = i({
	__name: "CareersBenefits",
	setup(i) {
		let { td: a } = d(), l = t(() => [
			{
				label: a("careers.benefits.remoteLabel"),
				value: a("careers.benefits.remoteValue")
			},
			{
				label: a("careers.benefits.payLabel"),
				value: a("careers.benefits.payValue")
			},
			{
				label: a("careers.benefits.ossLabel"),
				value: a("careers.benefits.ossValue")
			}
		]);
		return (t, i) => (o(), n("div", f, [(o(!0), n(e, null, s(l.value, (e) => (o(), n("div", {
			key: e.label,
			class: "rounded-lg border border-border bg-card p-4 text-center"
		}, [r("p", p, c(e.label), 1), r("p", m, c(e.value), 1)]))), 128))]));
	}
});
export { h as default };

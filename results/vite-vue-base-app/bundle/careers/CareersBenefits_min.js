import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, openBlock as i, renderList as a, toDisplayString as o } from "vue";
var s = { class: "mb-12 grid gap-4 md:grid-cols-3" }, c = { class: "text-sm font-semibold text-foreground" }, l = { class: "text-xs text-muted-foreground" }, u = r({
	__name: "CareersBenefits",
	setup(r) {
		let u = [
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
		];
		return (r, d) => (i(), t("div", s, [(i(), t(e, null, a(u, (e) => n("div", {
			key: e.label,
			class: "rounded-lg border border-border bg-card p-4 text-center"
		}, [n("p", c, o(e.label), 1), n("p", l, o(e.value), 1)])), 64))]));
	}
});
export { u as default };

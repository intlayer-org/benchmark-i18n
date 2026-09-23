import { Fragment as e, createElementBlock as t, createElementVNode as n, createTextVNode as r, defineComponent as i, normalizeClass as a, openBlock as o, renderList as s, toDisplayString as c } from "vue";
var l = i({
	__name: "PricingTiers",
	setup(e, { expose: t }) {
		t();
		let n = { tiers: [
			{
				name: "Starter",
				price: "$0",
				period: "forever",
				features: [
					"5 benchmark runs/day",
					"3 libraries",
					"Community support",
					"Public results"
				]
			},
			{
				name: "Pro",
				price: "$29",
				period: "/month",
				features: [
					"Unlimited runs",
					"All libraries",
					"Priority support",
					"Private results",
					"CI integration",
					"Historical data"
				],
				highlighted: !0
			},
			{
				name: "Enterprise",
				price: "Custom",
				period: "",
				features: [
					"Everything in Pro",
					"On-premise option",
					"SSO & SAML",
					"Dedicated account manager",
					"Custom SLAs",
					"Audit logs",
					"Training sessions"
				]
			}
		] };
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), u = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, d = { class: "grid gap-6 md:grid-cols-3" }, f = { class: "text-lg font-semibold text-foreground" }, p = { class: "my-4" }, m = { class: "text-3xl font-bold text-foreground" }, h = { class: "text-sm text-muted-foreground" }, g = { class: "mb-6 flex-1 space-y-2" };
function _(i, l, u, _, v, y) {
	return o(), t("div", d, [(o(), t(e, null, s(_.tiers, (i) => n("div", {
		key: i.name,
		class: a(["flex flex-col rounded-lg border p-6", i.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
	}, [
		n("h3", f, c(i.name), 1),
		n("div", p, [n("span", m, c(i.price), 1), n("span", h, c(i.period), 1)]),
		n("ul", g, [(o(!0), t(e, null, s(i.features, (e) => (o(), t("li", {
			key: e,
			class: "flex items-center gap-2 text-sm text-muted-foreground"
		}, [l[0] ||= n("span", { class: "text-primary" }, "✓", -1), r(" " + c(e), 1)]))), 128))]),
		n("button", {
			type: "button",
			class: a(["w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90", i.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"])
		}, c(i.name === "Enterprise" ? "Contact Sales" : "Get Started"), 3)
	], 2)), 64))]);
}
var v = u(l, [["render", _], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/pricing/PricingTiers.vue"]]);
export { v as default };

import { Fragment as e, createElementBlock as t, createElementVNode as n, createTextVNode as r, defineComponent as i, normalizeClass as a, openBlock as o, renderList as s, toDisplayString as c } from "vue";
var l = { class: "grid gap-6 md:grid-cols-3" }, u = { class: "text-lg font-semibold text-foreground" }, d = { class: "my-4" }, f = { class: "text-3xl font-bold text-foreground" }, p = { class: "text-sm text-muted-foreground" }, m = { class: "mb-6 flex-1 space-y-2" }, h = i({
	__name: "PricingTiers",
	setup(i) {
		let h = [
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
		];
		return (i, g) => (o(), t("div", l, [(o(), t(e, null, s(h, (i) => n("div", {
			key: i.name,
			class: a(["flex flex-col rounded-lg border p-6", i.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
		}, [
			n("h3", u, c(i.name), 1),
			n("div", d, [n("span", f, c(i.price), 1), n("span", p, c(i.period), 1)]),
			n("ul", m, [(o(!0), t(e, null, s(i.features, (e) => (o(), t("li", {
				key: e,
				class: "flex items-center gap-2 text-sm text-muted-foreground"
			}, [g[0] ||= n("span", { class: "text-primary" }, "✓", -1), r(" " + c(e), 1)]))), 128))]),
			n("button", {
				type: "button",
				class: a(["w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90", i.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"])
			}, c(i.name === "Enterprise" ? "Contact Sales" : "Get Started"), 3)
		], 2)), 64))]));
	}
});
export { h as default };

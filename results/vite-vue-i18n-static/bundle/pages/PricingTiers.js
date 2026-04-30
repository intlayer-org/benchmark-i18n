import { Fragment, createElementBlock, createElementVNode, createTextVNode, defineComponent, normalizeClass, openBlock, renderList, toDisplayString } from "vue";
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-3" };
var _hoisted_2 = { class: "text-lg font-semibold text-foreground" };
var _hoisted_3 = { class: "my-4" };
var _hoisted_4 = { class: "text-3xl font-bold text-foreground" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
var _hoisted_6 = { class: "mb-6 flex-1 space-y-2" };
var PricingTiers_default = defineComponent({
	__name: "PricingTiers",
	setup(__props) {
		const tiers = [
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
				highlighted: true
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList(tiers, (t) => {
				return createElementVNode("div", {
					key: t.name,
					class: normalizeClass(["flex flex-col rounded-lg border p-6", t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
				}, [
					createElementVNode("h3", _hoisted_2, toDisplayString(t.name), 1),
					createElementVNode("div", _hoisted_3, [createElementVNode("span", _hoisted_4, toDisplayString(t.price), 1), createElementVNode("span", _hoisted_5, toDisplayString(t.period), 1)]),
					createElementVNode("ul", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList(t.features, (f) => {
						return openBlock(), createElementBlock("li", {
							key: f,
							class: "flex items-center gap-2 text-sm text-muted-foreground"
						}, [_cache[0] || (_cache[0] = createElementVNode("span", { class: "text-primary" }, "✓", -1)), createTextVNode(" " + toDisplayString(f), 1)]);
					}), 128))]),
					createElementVNode("button", {
						type: "button",
						class: normalizeClass(["w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90", t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"])
					}, toDisplayString(t.name === "Enterprise" ? "Contact Sales" : "Get Started"), 3)
				], 2);
			}), 64))]);
		};
	}
});
export { PricingTiers_default as default };

import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/pages/pricing/PricingTiers.tsx
function PricingTiers() {
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
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
		].map((t) => /* @__PURE__ */ jsxs("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "my-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					})]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((f) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							f
						]
					}, f))
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === "Enterprise" ? "Contact Sales" : "Get Started"
				})
			]
		}, t.name))
	});
}
//#endregion
export { PricingTiers as default };

import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/pages/pricing/PricingTiers.tsx
function n() {
	return e("div", {
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
		].map((n) => t("div", {
			className: `flex flex-col rounded-lg border p-6 ${n.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				e("h3", {
					className: "text-lg font-semibold text-foreground",
					children: n.name
				}),
				t("div", {
					className: "my-4",
					children: [e("span", {
						className: "text-3xl font-bold text-foreground",
						children: n.price
					}), e("span", {
						className: "text-sm text-muted-foreground",
						children: n.period
					})]
				}),
				e("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: n.features.map((n) => t("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							e("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							n
						]
					}, n))
				}),
				e("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${n.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: n.name === "Enterprise" ? "Contact Sales" : "Get Started"
				})
			]
		}, n.name))
	});
}
//#endregion
export { n as default };

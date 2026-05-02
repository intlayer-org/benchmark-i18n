import { jsxDEV as e } from "react/jsx-dev-runtime";
var t = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/pricing/PricingTiers.tsx";
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
		].map((n) => e("div", {
			className: `flex flex-col rounded-lg border p-6 ${n.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				e("h3", {
					className: "text-lg font-semibold text-foreground",
					children: n.name
				}, void 0, !1, {
					fileName: t,
					lineNumber: 55,
					columnNumber: 11
				}, this),
				e("div", {
					className: "my-4",
					children: [e("span", {
						className: "text-3xl font-bold text-foreground",
						children: n.price
					}, void 0, !1, {
						fileName: t,
						lineNumber: 57,
						columnNumber: 13
					}, this), e("span", {
						className: "text-sm text-muted-foreground",
						children: n.period
					}, void 0, !1, {
						fileName: t,
						lineNumber: 58,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: t,
					lineNumber: 56,
					columnNumber: 11
				}, this),
				e("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: n.features.map((n) => e("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							e("span", {
								className: "text-primary",
								children: "✓"
							}, void 0, !1, {
								fileName: t,
								lineNumber: 66,
								columnNumber: 17
							}, this),
							" ",
							n
						]
					}, n, !0, {
						fileName: t,
						lineNumber: 62,
						columnNumber: 15
					}, this))
				}, void 0, !1, {
					fileName: t,
					lineNumber: 60,
					columnNumber: 11
				}, this),
				e("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${n.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: n.name === "Enterprise" ? "Contact Sales" : "Get Started"
				}, void 0, !1, {
					fileName: t,
					lineNumber: 70,
					columnNumber: 11
				}, this)
			]
		}, n.name, !0, {
			fileName: t,
			lineNumber: 47,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: t,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
export { n as default };

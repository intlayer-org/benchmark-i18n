import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/pages/pricing/PricingTiers.tsx";
function PricingTiers() {
	return jsxDEV("div", {
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
		].map((t) => jsxDEV("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				jsxDEV("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 11
				}, this),
				jsxDEV("div", {
					className: "my-4",
					children: [jsxDEV("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 13
					}, this), jsxDEV("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 11
				}, this),
				jsxDEV("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((f) => jsxDEV("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							jsxDEV("span", {
								className: "text-primary",
								children: "✓"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 17
							}, this),
							" ",
							f
						]
					}, f, true, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 11
				}, this),
				jsxDEV("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === "Enterprise" ? "Contact Sales" : "Get Started"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 11
				}, this)
			]
		}, t.name, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
export { PricingTiers as default };

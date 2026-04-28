import { className, createComponent, effect, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-3">`), _tmpl$2 = template(`<div><h3 class="text-lg font-semibold text-foreground"></h3><div class=my-4><span class="text-3xl font-bold text-foreground"></span><span class="text-sm text-muted-foreground"></span></div><ul class="mb-6 flex-1 space-y-2"></ul><button type=button>`), _tmpl$3 = template(`<li class="flex items-center gap-2 text-sm text-muted-foreground"><span class=text-primary>✓</span> `);
function PricingTiers() {
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
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: tiers,
			children: (t) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$4.nextSibling, _el$8 = _el$7.nextSibling;
				insert(_el$3, () => t.name);
				insert(_el$5, () => t.price);
				insert(_el$6, () => t.period);
				insert(_el$7, createComponent(For, {
					get each() {
						return t.features;
					},
					children: (f) => (() => {
						var _el$9 = _tmpl$3();
						_el$9.firstChild.nextSibling;
						insert(_el$9, f, null);
						return _el$9;
					})()
				}));
				insert(_el$8, () => t.name === "Enterprise" ? "Contact Sales" : "Get Started");
				effect((_p$) => {
					var _v$ = `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`, _v$2 = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`;
					_v$ !== _p$.e && className(_el$2, _p$.e = _v$);
					_v$2 !== _p$.t && className(_el$8, _p$.t = _v$2);
					return _p$;
				}, {
					e: void 0,
					t: void 0
				});
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { PricingTiers as default };

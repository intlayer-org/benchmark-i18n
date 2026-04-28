import { className as e, createComponent as t, effect as n, insert as r, template as i } from "solid-js/web";
import { For as a } from "solid-js";
var o = i("<div class=\"grid gap-6 md:grid-cols-3\">"), s = i("<div><h3 class=\"text-lg font-semibold text-foreground\"></h3><div class=my-4><span class=\"text-3xl font-bold text-foreground\"></span><span class=\"text-sm text-muted-foreground\"></span></div><ul class=\"mb-6 flex-1 space-y-2\"></ul><button type=button>"), c = i("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=text-primary>✓</span> ");
function l() {
	let i = [
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
	return (() => {
		var l = o();
		return r(l, t(a, {
			each: i,
			children: (i) => (() => {
				var o = s(), l = o.firstChild, u = l.nextSibling, d = u.firstChild, f = d.nextSibling, p = u.nextSibling, m = p.nextSibling;
				return r(l, () => i.name), r(d, () => i.price), r(f, () => i.period), r(p, t(a, {
					get each() {
						return i.features;
					},
					children: (e) => (() => {
						var t = c();
						return t.firstChild.nextSibling, r(t, e, null), t;
					})()
				})), r(m, () => i.name === "Enterprise" ? "Contact Sales" : "Get Started"), n((t) => {
					var n = `flex flex-col rounded-lg border p-6 ${i.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`, r = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${i.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`;
					return n !== t.e && e(o, t.e = n), r !== t.t && e(m, t.t = r), t;
				}, {
					e: void 0,
					t: void 0
				}), o;
			})()
		})), l;
	})();
}
export { l as default };

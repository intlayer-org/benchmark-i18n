import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=\"text-primary\">✓</span> </li>"), n = e.from_html("<div><h3 class=\"text-lg font-semibold text-foreground\"> </h3> <div class=\"my-4\"><span class=\"text-3xl font-bold text-foreground\"> </span> <span class=\"text-sm text-muted-foreground\"> </span></div> <ul class=\"mb-6 flex-1 space-y-2\"></ul> <button type=\"button\"> </button></div>"), r = e.from_html("<div class=\"grid gap-6 md:grid-cols-3\"></div>");
function i(i) {
	let a = [
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
	var o = r();
	e.each(o, 5, () => a, (e) => e.name, (r, i) => {
		var a = n(), o = e.child(a), s = e.only_child(o, !0), c = e.sibling(o, 2), l = e.child(c), u = e.only_child(l, !0), d = e.sibling(l, 2), f = e.only_child(d, !0);
		e.reset(c);
		var p = e.sibling(c, 2);
		e.each(p, 5, () => e.get(i).features, (e) => e, (n, r) => {
			var i = t(), a = e.sibling(e.child(i));
			e.reset(i), e.template_effect(() => e.set_text(a, ` ${e.get(r) ?? ""}`)), e.append(n, i);
		}), e.reset(p);
		var m = e.sibling(p, 2), h = e.only_child(m, !0);
		e.reset(a), e.template_effect(() => {
			e.set_class(a, 1, `flex flex-col rounded-lg border p-6 ${e.get(i).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`), e.set_text(s, e.get(i).name), e.set_text(u, e.get(i).price), e.set_text(f, e.get(i).period), e.set_class(m, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.get(i).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`), e.set_text(h, e.get(i).name === "Enterprise" ? "Contact Sales" : "Get Started");
		}), e.append(r, a);
	}), e.reset(o), e.append(i, o);
}
export { i as default };

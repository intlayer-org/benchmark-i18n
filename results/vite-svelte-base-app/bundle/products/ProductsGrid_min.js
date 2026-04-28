import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"mb-4 text-sm text-muted-foreground\"> </p></div> <div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"> </span> <button type=\"button\" class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\">Learn More</button></div></div>"), n = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function r(r) {
	let i = [
		{
			name: "Benchmark CLI",
			desc: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
			price: "Free"
		},
		{
			name: "Benchmark Cloud",
			desc: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
			price: "$29/mo"
		},
		{
			name: "Benchmark Enterprise",
			desc: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
			price: "Contact Us"
		},
		{
			name: "Migration Assistant",
			desc: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
			price: "$99 one-time"
		},
		{
			name: "Translation QA",
			desc: "Automated quality checks for missing translations, pluralization issues, and context errors.",
			price: "$19/mo"
		},
		{
			name: "Bundle Optimizer",
			desc: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
			price: "$49/mo"
		}
	];
	var a = n();
	e.each(a, 5, () => i, (e) => e.name, (n, r) => {
		var i = t(), a = e.child(i), o = e.child(a), s = e.child(o, !0);
		e.reset(o);
		var c = e.sibling(o, 2), l = e.child(c, !0);
		e.reset(c), e.reset(a);
		var u = e.sibling(a, 2), d = e.child(u), f = e.child(d, !0);
		e.reset(d), e.next(2), e.reset(u), e.reset(i), e.template_effect(() => {
			e.set_text(s, e.get(r).name), e.set_text(l, e.get(r).desc), e.set_text(f, e.get(r).price);
		}), e.append(n, i);
	}), e.reset(a), e.append(r, a);
}
export { r as default };

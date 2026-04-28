import { setAttribute as e, template as t } from "solid-js/web";
import { createUniqueId as n } from "solid-js";
var r = t("<form class=space-y-6><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\">Name</label><input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"placeholder=\"Your name\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\">Email</label><input type=email class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"placeholder=you@example.com></div></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\">Topic</label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option>Bug Report</option><option>New Benchmark Idea</option><option>Methodology Question</option><option>Contribution</option><option>Other</option></select></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\">Message</label><textarea rows=5 class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"placeholder=\"Describe your question or idea...\"></textarea></div><button type=submit class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">Send Message");
function i() {
	let t = n(), i = n(), a = n(), o = n();
	return (() => {
		var n = r(), s = n.firstChild, c = s.firstChild, l = c.firstChild, u = l.nextSibling, d = c.nextSibling.firstChild, f = d.nextSibling, p = s.nextSibling, m = p.firstChild, h = m.nextSibling, g = p.nextSibling.firstChild, _ = g.nextSibling;
		return e(l, "for", t), e(u, "id", t), e(d, "for", i), e(f, "id", i), e(m, "for", a), e(h, "id", a), e(g, "for", o), e(_, "id", o), n;
	})();
}
export { i as default };

import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<form class=\"space-y-6\"><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\">Name</label> <input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\" placeholder=\"Your name\"/></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\">Email</label> <input type=\"email\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\" placeholder=\"you@example.com\"/></div></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\">Topic</label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option>Bug Report</option><option>New Benchmark Idea</option><option>Methodology Question</option><option>Contribution</option><option>Other</option></select></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\">Message</label> <textarea class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\" placeholder=\"Describe your question or idea...\"></textarea></div> <button type=\"submit\" class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">Send Message</button></form>");
function n(n) {
	let r = "contact-name", i = "contact-email", a = "contact-topic", o = "contact-message";
	var s = t(), c = e.child(s), l = e.child(c), u = e.child(l);
	e.set_attribute(u, "for", r);
	var d = e.sibling(u, 2);
	e.set_attribute(d, "id", r), e.reset(l);
	var f = e.sibling(l, 2), p = e.child(f);
	e.set_attribute(p, "for", i);
	var m = e.sibling(p, 2);
	e.set_attribute(m, "id", i), e.reset(f), e.reset(c);
	var h = e.sibling(c, 2), g = e.child(h);
	e.set_attribute(g, "for", a);
	var _ = e.sibling(g, 2);
	e.set_attribute(_, "id", a), e.reset(h);
	var v = e.sibling(h, 2), y = e.child(v);
	e.set_attribute(y, "for", o);
	var b = e.sibling(y, 2);
	e.set_attribute(b, "id", o), e.set_attribute(b, "rows", 5), e.reset(v), e.next(2), e.reset(s), e.append(n, s);
}
export { n as default };

import { setAttribute, template } from "solid-js/web";
import { createUniqueId } from "solid-js";
var _tmpl$ = template(`<form class=space-y-6><div class="grid gap-4 md:grid-cols-2"><div><label class="mb-1 block text-sm font-medium text-foreground">Name</label><input class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"placeholder="Your name"></div><div><label class="mb-1 block text-sm font-medium text-foreground">Email</label><input type=email class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"placeholder=you@example.com></div></div><div><label class="mb-1 block text-sm font-medium text-foreground">Topic</label><select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"><option>Bug Report</option><option>New Benchmark Idea</option><option>Methodology Question</option><option>Contribution</option><option>Other</option></select></div><div><label class="mb-1 block text-sm font-medium text-foreground">Message</label><textarea rows=5 class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"placeholder="Describe your question or idea..."></textarea></div><button type=submit class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">Send Message`);
function ContactForm() {
	const nameId = createUniqueId();
	const emailId = createUniqueId();
	const topicId = createUniqueId();
	const messageId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$7 = _el$3.nextSibling.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$2.nextSibling, _el$0 = _el$9.firstChild, _el$1 = _el$0.nextSibling, _el$11 = _el$9.nextSibling.firstChild, _el$12 = _el$11.nextSibling;
		setAttribute(_el$4, "for", nameId);
		setAttribute(_el$5, "id", nameId);
		setAttribute(_el$7, "for", emailId);
		setAttribute(_el$8, "id", emailId);
		setAttribute(_el$0, "for", topicId);
		setAttribute(_el$1, "id", topicId);
		setAttribute(_el$11, "for", messageId);
		setAttribute(_el$12, "id", messageId);
		return _el$;
	})();
}
export { ContactForm as default };

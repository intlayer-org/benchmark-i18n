import { effect, insert, setAttribute, template } from "solid-js/web";
import { createUniqueId } from "solid-js";
var _tmpl$ = template(`<form class=space-y-6><div class="grid gap-4 md:grid-cols-2"><div><label class="mb-1 block text-sm font-medium text-foreground"></label><input class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><input type=email class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"></div></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"><option></option><option></option><option></option><option></option><option></option></select></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><textarea rows=5 class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"></textarea></div><button type=submit class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">`);
function ContactForm() {
	const nameId = createUniqueId();
	const emailId = createUniqueId();
	const topicId = createUniqueId();
	const messageId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$7 = _el$3.nextSibling.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$2.nextSibling, _el$0 = _el$9.firstChild, _el$1 = _el$0.nextSibling, _el$10 = _el$1.firstChild, _el$11 = _el$10.nextSibling, _el$12 = _el$11.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling, _el$15 = _el$9.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$16.nextSibling, _el$18 = _el$15.nextSibling;
		setAttribute(_el$4, "for", nameId);
		insert(_el$4, () => (void 0)());
		setAttribute(_el$5, "id", nameId);
		setAttribute(_el$7, "for", emailId);
		insert(_el$7, () => (void 0)());
		setAttribute(_el$8, "id", emailId);
		setAttribute(_el$0, "for", topicId);
		insert(_el$0, () => (void 0)());
		setAttribute(_el$1, "id", topicId);
		insert(_el$10, () => (void 0)());
		insert(_el$11, () => (void 0)());
		insert(_el$12, () => (void 0)());
		insert(_el$13, () => (void 0)());
		insert(_el$14, () => (void 0)());
		setAttribute(_el$16, "for", messageId);
		insert(_el$16, () => (void 0)());
		setAttribute(_el$17, "id", messageId);
		insert(_el$18, () => (void 0)());
		effect((_p$) => {
			var _v$ = (void 0)(), _v$2 = (void 0)(), _v$3 = (void 0)();
			_v$ !== _p$.e && setAttribute(_el$5, "placeholder", _p$.e = _v$);
			_v$2 !== _p$.t && setAttribute(_el$8, "placeholder", _p$.t = _v$2);
			_v$3 !== _p$.a && setAttribute(_el$17, "placeholder", _p$.a = _v$3);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0
		});
		return _el$;
	})();
}
export { ContactForm as default };

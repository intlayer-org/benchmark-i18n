import { setAttribute, template } from "solid-js/web";
import { createUniqueId } from "solid-js";
var _tmpl$ = template(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground">Profile</h2><div class=space-y-4><div><label class="mb-1 block text-sm font-medium text-foreground">Display Name</label><input defaultvalue="John Developer"class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"></div><div><label class="mb-1 block text-sm font-medium text-foreground">Email</label><input defaultvalue=john@example.com class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring">`);
function ProfileSection() {
	const displayNameId = createUniqueId();
	const emailId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$4 = _el$.firstChild.nextSibling.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$8 = _el$4.nextSibling.firstChild, _el$9 = _el$8.nextSibling;
		setAttribute(_el$5, "for", displayNameId);
		setAttribute(_el$6, "id", displayNameId);
		setAttribute(_el$8, "for", emailId);
		setAttribute(_el$9, "id", emailId);
		return _el$;
	})();
}
export { ProfileSection as default };

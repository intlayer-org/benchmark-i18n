import { setAttribute as e, template as t } from "solid-js/web";
import { createUniqueId as n } from "solid-js";
var r = t("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\">Preferences</h2><div class=space-y-4><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\">Email Notifications</p><p class=\"text-xs text-muted-foreground\">Receive weekly benchmark reports</p></div><button type=button class=\"h-6 w-11 rounded-full bg-primary transition-colors\"aria-label=\"Toggle notifications\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\">Dark Mode</p><p class=\"text-xs text-muted-foreground\">Use dark color scheme</p></div><button type=button class=\"h-6 w-11 rounded-full bg-muted transition-colors\"aria-label=\"Toggle dark mode\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\">Default Language</label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option>English (en)</option><option>French (fr)</option><option>German (de)</option><option>Spanish (es)</option><option>Japanese (ja)</option><option>Chinese Simplified (zh-CN)</option><option>Arabic (ar)");
function i() {
	let t = n();
	return (() => {
		var n = r(), i = n.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild, a = i.nextSibling;
		return e(i, "for", t), e(a, "id", t), n;
	})();
}
export { i as default };

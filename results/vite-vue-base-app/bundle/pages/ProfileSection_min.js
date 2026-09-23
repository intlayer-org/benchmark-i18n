import { createElementBlock as e, createStaticVNode as t, openBlock as n } from "vue";
var r = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, i = {}, a = { class: "rounded-lg border border-border bg-card p-6" };
function o(r, i) {
	return n(), e("section", a, [...i[0] ||= [t("<h2 class=\"mb-4 text-lg font-semibold text-foreground\">Profile</h2><div class=\"space-y-4\"><div><label for=\"displayName\" class=\"mb-1 block text-sm font-medium text-foreground\"> Display Name </label><input id=\"displayName\" value=\"John Developer\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label for=\"email\" class=\"mb-1 block text-sm font-medium text-foreground\"> Email </label><input id=\"email\" value=\"john@example.com\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div></div>", 2)]]);
}
var s = r(i, [["render", o]]);
export { s as default };

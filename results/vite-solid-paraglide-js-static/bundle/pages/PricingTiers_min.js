import { className as e, createComponent as t, effect as n, insert as r, memo as i, template as a } from "solid-js/web";
import { For as o } from "solid-js";
var s = a("<div class=\"grid gap-6 md:grid-cols-3\">"), c = a("<div><h3 class=\"text-lg font-semibold text-foreground\"></h3><div class=my-4><span class=\"text-3xl font-bold text-foreground\"></span><span class=\"text-sm text-muted-foreground\"></span></div><ul class=\"mb-6 flex-1 space-y-2\"></ul><button type=button>"), l = a("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=text-primary>✓</span> ");
function u() {
	let a = () => [
		{
			name: (void 0)(),
			price: (void 0)(),
			period: (void 0)(),
			features: [
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)()
			]
		},
		{
			name: (void 0)(),
			price: (void 0)(),
			period: (void 0)(),
			features: [
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)()
			],
			highlighted: !0
		},
		{
			name: (void 0)(),
			price: (void 0)(),
			period: "",
			features: [
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)(),
				(void 0)()
			]
		}
	];
	return (() => {
		var u = s();
		return r(u, t(o, {
			get each() {
				return a();
			},
			children: (a) => (() => {
				var s = c(), u = s.firstChild, d = u.nextSibling, f = d.firstChild, p = f.nextSibling, m = d.nextSibling, h = m.nextSibling;
				return r(u, () => a.name), r(f, () => a.price), r(p, () => a.period), r(m, t(o, {
					get each() {
						return a.features;
					},
					children: (e) => (() => {
						var t = l();
						return t.firstChild.nextSibling, r(t, e, null), t;
					})()
				})), r(h, (() => {
					var e = i(() => a.name === (void 0)());
					return () => (e(), (void 0)());
				})()), n((t) => {
					var n = `flex flex-col rounded-lg border p-6 ${a.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`, r = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${a.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`;
					return n !== t.e && e(s, t.e = n), r !== t.t && e(h, t.t = r), t;
				}, {
					e: void 0,
					t: void 0
				}), s;
			})()
		})), u;
	})();
}
export { u as default };

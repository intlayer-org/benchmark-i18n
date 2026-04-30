import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, defineComponent as a, getCurrentInstance as o, normalizeClass as s, openBlock as c, renderList as l, toDisplayString as u } from "vue";
function d(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function f(e) {
	return e.split(".").map(d).join("-");
}
function p() {
	let e = o()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(f(t), n ?? {});
	} };
}
var m = a({
	__name: "PricingTiers",
	setup(e, { expose: n }) {
		n();
		let { td: r } = p(), i = [
			{
				id: "starter",
				featureNums: [
					1,
					2,
					3,
					4
				],
				highlighted: !1
			},
			{
				id: "pro",
				featureNums: [
					1,
					2,
					3,
					4,
					5,
					6
				],
				highlighted: !0
			},
			{
				id: "enterprise",
				featureNums: [
					1,
					2,
					3,
					4,
					5,
					6,
					7
				],
				highlighted: !1
			}
		], a = {
			td: r,
			tierDefs: i,
			tiers: t(() => i.map((e) => ({
				id: e.id,
				highlighted: e.highlighted,
				name: r(`pricing.tiers.${e.id}.name`),
				price: r(`pricing.tiers.${e.id}.price`),
				period: e.id === "enterprise" ? "" : r(`pricing.tiers.${e.id}.period`),
				features: e.featureNums.map((t) => r(`pricing.tiers.${e.id}.feature${t}`)),
				cta: e.id === "enterprise" ? r("pricing.tiers.contactSales") : r("pricing.tiers.getStarted")
			})))
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), h = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, g = { class: "grid gap-6 md:grid-cols-3" }, _ = { class: "text-lg font-semibold text-foreground" }, v = { class: "my-4" }, y = { class: "text-3xl font-bold text-foreground" }, b = { class: "text-sm text-muted-foreground" }, x = { class: "mb-6 flex-1 space-y-2" };
function S(t, a, o, d, f, p) {
	return c(), n("div", g, [(c(!0), n(e, null, l(d.tiers, (t) => (c(), n("div", {
		key: t.id,
		class: s(["flex flex-col rounded-lg border p-6", t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
	}, [
		r("h3", _, u(t.name), 1),
		r("div", v, [r("span", y, u(t.price), 1), r("span", b, u(t.period), 1)]),
		r("ul", x, [(c(!0), n(e, null, l(t.features, (e) => (c(), n("li", {
			key: e,
			class: "flex items-center gap-2 text-sm text-muted-foreground"
		}, [a[0] ||= r("span", { class: "text-primary" }, "✓", -1), i(" " + u(e), 1)]))), 128))]),
		r("button", {
			type: "button",
			class: s(["w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90", t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"])
		}, u(t.cta), 3)
	], 2))), 128))]);
}
var C = h(m, [["render", S], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/pricing/PricingTiers.vue"]]);
export { C as default };

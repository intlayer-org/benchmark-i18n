import { Fragment as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, openBlock as a, renderList as o, toDisplayString as s } from "vue";
function c(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function l(e) {
	return e.split(".").map(c).join("-");
}
function u() {
	let e = i()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(l(t), n ?? {});
	} };
}
var d = r({
	__name: "FAQList",
	setup(e, { expose: t }) {
		t();
		let { td: n } = u(), r = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		], i = {
			td: n,
			faqNums: r,
			faqs: r.map((e) => ({
				q: n(`faq.list.q${e}`),
				a: n(`faq.list.a${e}`)
			}))
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), f = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, p = { class: "mx-auto max-w-3xl space-y-4" }, m = { class: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50" }, h = { class: "px-6 pb-4 text-sm text-muted-foreground" };
function g(r, i, c, l, u, d) {
	return a(), t("div", p, [(a(!0), t(e, null, o(l.faqs, (e, r) => (a(), t("details", {
		key: r,
		class: "group rounded-lg border border-border bg-card"
	}, [n("summary", m, s(e.q), 1), n("p", h, s(e.a), 1)]))), 128))]);
}
var _ = f(d, [["render", g], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/faq/FAQList.vue"]]);
export { _ as default };

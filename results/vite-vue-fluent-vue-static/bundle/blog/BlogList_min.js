import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, openBlock as o, renderList as s, toDisplayString as c } from "vue";
function l(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function u(e) {
	return e.split(".").map(l).join("-");
}
function d() {
	let e = a()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(u(t), n ?? {});
	} };
}
var f = i({
	__name: "BlogList",
	setup(e, { expose: n }) {
		n();
		let { td: r } = d(), i = [
			1,
			2,
			3,
			4,
			5,
			6
		], a = {
			td: r,
			postIndices: i,
			posts: t(() => i.map((e) => ({
				title: r(`blog.list.post${e}Title`),
				date: r(`blog.list.post${e}Date`),
				excerpt: r(`blog.list.post${e}Excerpt`),
				category: r(`blog.list.post${e}Category`)
			})))
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = { class: "grid gap-6 md:grid-cols-2" }, h = { class: "mb-3 flex items-center gap-3" }, g = { class: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground" }, _ = { class: "text-xs text-muted-foreground" }, v = { class: "mb-2 text-lg font-semibold text-foreground" }, y = { class: "mb-4 text-sm text-muted-foreground" }, b = {
	type: "button",
	class: "text-sm font-medium text-primary hover:underline"
};
function x(t, i, a, l, u, d) {
	return o(), n("div", m, [(o(!0), n(e, null, s(l.posts, (e) => (o(), n("article", {
		key: e.title,
		class: "rounded-lg border border-border bg-card p-6"
	}, [
		r("div", h, [r("span", g, c(e.category), 1), r("span", _, c(e.date), 1)]),
		r("h2", v, c(e.title), 1),
		r("p", y, c(e.excerpt), 1),
		r("button", b, c(l.td("blog.list.readMore")), 1)
	]))), 128))]);
}
var S = p(f, [["render", x], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/blog/BlogList.vue"]]);
export { S as default };

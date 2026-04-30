import { createElementBlock as e, createElementVNode as t, defineComponent as n, getCurrentInstance as r, onBeforeMount as i, onMounted as a, openBlock as o, toDisplayString as s } from "vue";
function c(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function l(e) {
	return e.split(".").map(c).join("-");
}
function u() {
	let e = r()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(l(t), n ?? {});
	} };
}
function d(e) {
	i(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var f = n({
	__name: "Hero",
	setup(e, { expose: t }) {
		t(), d("Hero");
		let { td: n } = u(), r = { td: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = { class: "mb-16 text-center" }, h = { class: "mb-4 text-4xl font-bold tracking-tight text-foreground" }, g = { class: "mx-auto max-w-2xl text-lg text-muted-foreground" }, _ = { class: "mt-8 flex justify-center gap-4" }, v = {
	type: "button",
	class: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
}, y = {
	type: "button",
	class: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
};
function b(n, r, i, a, c, l) {
	return o(), e("section", m, [
		t("h1", h, s(a.td("home.hero.title")), 1),
		t("p", g, s(a.td("home.hero.description")), 1),
		t("div", _, [t("button", v, s(a.td("home.hero.viewResults")), 1), t("button", y, s(a.td("home.hero.methodology")), 1)])
	]);
}
var x = p(f, [["render", b], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/pages/home/Hero.vue"]]);
export { x as default };

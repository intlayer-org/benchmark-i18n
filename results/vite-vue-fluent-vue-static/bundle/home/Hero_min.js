import { createElementBlock as e, createElementVNode as t, defineComponent as n, getCurrentInstance as r, onBeforeMount as i, onMounted as a, openBlock as o, toDisplayString as s, unref as c } from "vue";
function l(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function u(e) {
	return e.split(".").map(l).join("-");
}
function d() {
	let e = r()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(u(t), n ?? {});
	} };
}
function f(e) {
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
var p = { class: "mb-16 text-center" }, m = { class: "mb-4 text-4xl font-bold tracking-tight text-foreground" }, h = { class: "mx-auto max-w-2xl text-lg text-muted-foreground" }, g = { class: "mt-8 flex justify-center gap-4" }, _ = {
	type: "button",
	class: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
}, v = {
	type: "button",
	class: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
}, y = n({
	__name: "Hero",
	setup(n) {
		f("Hero");
		let { td: r } = d();
		return (n, i) => (o(), e("section", p, [
			t("h1", m, s(c(r)("home.hero.title")), 1),
			t("p", h, s(c(r)("home.hero.description")), 1),
			t("div", g, [t("button", _, s(c(r)("home.hero.viewResults")), 1), t("button", v, s(c(r)("home.hero.methodology")), 1)])
		]));
	}
});
export { y as default };

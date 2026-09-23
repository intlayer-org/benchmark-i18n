import { createElementBlock as e, createStaticVNode as t, defineComponent as n, onBeforeMount as r, onMounted as i, openBlock as a } from "vue";
function o(e) {
	r(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), i(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var s = n({
	__name: "Hero",
	setup(e, { expose: t }) {
		t(), o("Hero");
		let n = {};
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), c = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, l = { class: "mb-16 text-center" };
function u(n, r, i, o, s, c) {
	return a(), e("section", l, [...r[0] ||= [t("<h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"> i18n Benchmark </h1><p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"> A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity. </p><div class=\"mt-8 flex justify-center gap-4\"><button type=\"button\" class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity\"> View Results </button><button type=\"button\" class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors\"> Methodology </button></div>", 3)]]);
}
var d = c(s, [["render", u], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/pages/home/Hero.vue"]]);
export { d as default };

import { createElementBlock, createStaticVNode, defineComponent, onBeforeMount, onMounted, openBlock } from "vue";
function usePerformanceMeasure(name) {
	onBeforeMount(() => {
		if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	});
	onMounted(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	});
}
var _hoisted_1 = { class: "mb-16 text-center" };
var Hero_default = defineComponent({
	__name: "Hero",
	setup(__props) {
		usePerformanceMeasure("Hero");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [..._cache[0] || (_cache[0] = [createStaticVNode("<h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"> i18n Benchmark </h1><p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"> A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity. </p><div class=\"mt-8 flex justify-center gap-4\"><button type=\"button\" class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity\"> View Results </button><button type=\"button\" class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors\"> Methodology </button></div>", 3)])]);
		};
	}
});
export { Hero_default as default };

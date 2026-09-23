import { Fragment, createElementBlock, createElementVNode, defineComponent, onBeforeMount, onMounted, openBlock } from "vue";
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
var AboutHeader_default = defineComponent({
	__name: "AboutHeader",
	setup(__props) {
		usePerformanceMeasure("AboutHeader");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [_cache[0] || (_cache[0] = createElementVNode("h1", { class: "mb-4 text-3xl font-bold text-foreground" }, " About This Benchmark ", -1)), _cache[1] || (_cache[1] = createElementVNode("p", { class: "mb-8 max-w-3xl text-muted-foreground" }, " This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions. ", -1))], 64);
		};
	}
});
export { AboutHeader_default as default };

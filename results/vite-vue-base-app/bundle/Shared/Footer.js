import { Fragment, computed, createBlock, createElementBlock, createElementVNode, createTextVNode, defineComponent, openBlock, renderList, resolveComponent, toDisplayString, withCtx } from "vue";
import { useRoute } from "vue-router";
var _hoisted_1 = { class: "mt-20 border-t border-border bg-card" };
var _hoisted_2 = { class: "container py-8" };
var _hoisted_3 = { class: "grid gap-8 md:grid-cols-3" };
var _hoisted_4 = { class: "space-y-1" };
var _hoisted_5 = ["href"];
var Footer_default = defineComponent({
	__name: "Footer",
	setup(__props) {
		const route = useRoute();
		const currentLocale = computed(() => route.params.locale || "en");
		const footerLinks = computed(() => [
			{
				label: "GitHub",
				href: "https://github.com/intlayer-org/benchmark-i18n",
				isInternal: false
			},
			{
				label: "Methodology",
				to: `/${currentLocale.value}/about`,
				isInternal: true
			},
			{
				label: "Contributing",
				to: `/${currentLocale.value}/contact`,
				isInternal: true
			}
		]);
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createElementBlock("footer", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [
				_cache[1] || (_cache[1] = createElementVNode("div", null, [createElementVNode("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " i18n Benchmark "), createElementVNode("p", { class: "text-sm text-muted-foreground" }, " An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity. ")], -1)),
				createElementVNode("div", null, [_cache[0] || (_cache[0] = createElementVNode("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " Resources ", -1)), createElementVNode("ul", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(footerLinks.value, (linkEl) => {
					return openBlock(), createElementBlock("li", { key: linkEl.label }, [linkEl.isInternal ? (openBlock(), createBlock(_component_router_link, {
						key: 0,
						to: linkEl.to,
						class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(linkEl.label), 1)]),
						_: 2
					}, 1032, ["to"])) : (openBlock(), createElementBlock("a", {
						key: 1,
						href: linkEl.href,
						target: "_blank",
						rel: "noreferrer",
						class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
					}, toDisplayString(linkEl.label), 9, _hoisted_5))]);
				}), 128))])]),
				_cache[2] || (_cache[2] = createElementVNode("div", null, [createElementVNode("h3", { class: "mb-2 text-sm font-semibold text-foreground" }, " Contact "), createElementVNode("p", { class: "text-sm text-muted-foreground" }, " contact@intlayer.org ")], -1))
			]), _cache[3] || (_cache[3] = createElementVNode("div", { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" }, " i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router. ", -1))])]);
		};
	}
});
export { Footer_default as default };

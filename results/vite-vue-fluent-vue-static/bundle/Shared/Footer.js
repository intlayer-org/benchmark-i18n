import { Fragment, computed, createBlock, createElementBlock, createElementVNode, createTextVNode, defineComponent, getCurrentInstance, openBlock, renderList, resolveComponent, toDisplayString, unref, withCtx } from "vue";
import { useRoute } from "vue-router";
function segmentToKebab(segment) {
	return segment.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function dottedKeyToFluentId(dottedKey) {
	return dottedKey.split(".").map(segmentToKebab).join("-");
}
function useFluentDottedT() {
	const proxy = getCurrentInstance()?.proxy;
	const td = (dottedVueI18nKey, params) => {
		if (!proxy) throw new Error("useFluentDottedT must be used during setup()");
		return proxy.$t(dottedKeyToFluentId(dottedVueI18nKey), params ?? {});
	};
	return { td };
}
var _hoisted_1 = { class: "mt-20 border-t border-border bg-card" };
var _hoisted_2 = { class: "container py-8" };
var _hoisted_3 = { class: "grid gap-8 md:grid-cols-3" };
var _hoisted_4 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
var _hoisted_6 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_7 = { class: "space-y-1" };
var _hoisted_8 = ["href"];
var _hoisted_9 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_10 = { class: "text-sm text-muted-foreground" };
var _hoisted_11 = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
var Footer_default = defineComponent({
	__name: "Footer",
	setup(__props) {
		const { td } = useFluentDottedT();
		const route = useRoute();
		const currentLocale = computed(() => route.params.locale || "en");
		const footerLinks = computed(() => [
			{
				label: td("footer.github"),
				href: "https://github.com/intlayer-org/benchmark-i18n",
				isInternal: false
			},
			{
				label: td("footer.methodology"),
				to: `/${currentLocale.value}/about`,
				isInternal: true
			},
			{
				label: td("footer.contributing"),
				to: `/${currentLocale.value}/contact`,
				isInternal: true
			}
		]);
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createElementBlock("footer", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [
				createElementVNode("div", null, [createElementVNode("h3", _hoisted_4, toDisplayString(unref(td)("footer.title")), 1), createElementVNode("p", _hoisted_5, toDisplayString(unref(td)("footer.description")), 1)]),
				createElementVNode("div", null, [createElementVNode("h3", _hoisted_6, toDisplayString(unref(td)("footer.resources")), 1), createElementVNode("ul", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(footerLinks.value, (linkEl) => {
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
					}, toDisplayString(linkEl.label), 9, _hoisted_8))]);
				}), 128))])]),
				createElementVNode("div", null, [createElementVNode("h3", _hoisted_9, toDisplayString(unref(td)("footer.contact")), 1), createElementVNode("p", _hoisted_10, toDisplayString(unref(td)("shared.contactEmail")), 1)])
			]), createElementVNode("div", _hoisted_11, toDisplayString(unref(td)("footer.builtWith")), 1)])]);
		};
	}
});
export { Footer_default as default };

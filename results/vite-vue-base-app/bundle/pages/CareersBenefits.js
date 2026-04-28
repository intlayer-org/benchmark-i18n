import { Fragment, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
var _hoisted_1 = { class: "mb-12 grid gap-4 md:grid-cols-3" };
var _hoisted_2 = { class: "text-sm font-semibold text-foreground" };
var _hoisted_3 = { class: "text-xs text-muted-foreground" };
var CareersBenefits_default = defineComponent({
	__name: "CareersBenefits",
	setup(__props) {
		const benefits = [
			{
				label: "Remote-first",
				value: "Work from anywhere in the world"
			},
			{
				label: "Competitive pay",
				value: "Top-of-market compensation"
			},
			{
				label: "Open source time",
				value: "20% time for OSS contributions"
			}
		];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList(benefits, (b) => {
				return createElementVNode("div", {
					key: b.label,
					class: "rounded-lg border border-border bg-card p-4 text-center"
				}, [createElementVNode("p", _hoisted_2, toDisplayString(b.label), 1), createElementVNode("p", _hoisted_3, toDisplayString(b.value), 1)]);
			}), 64))]);
		};
	}
});
export { CareersBenefits_default as default };

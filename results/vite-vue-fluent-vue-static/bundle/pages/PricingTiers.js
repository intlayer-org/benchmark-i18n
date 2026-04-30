import { Fragment, computed, createElementBlock, createElementVNode, createTextVNode, defineComponent, getCurrentInstance, normalizeClass, openBlock, renderList, toDisplayString } from "vue";
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
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-3" };
var _hoisted_2 = { class: "text-lg font-semibold text-foreground" };
var _hoisted_3 = { class: "my-4" };
var _hoisted_4 = { class: "text-3xl font-bold text-foreground" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
var _hoisted_6 = { class: "mb-6 flex-1 space-y-2" };
var PricingTiers_default = defineComponent({
	__name: "PricingTiers",
	setup(__props) {
		const { td } = useFluentDottedT();
		const tierDefs = [
			{
				id: "starter",
				featureNums: [
					1,
					2,
					3,
					4
				],
				highlighted: false
			},
			{
				id: "pro",
				featureNums: [
					1,
					2,
					3,
					4,
					5,
					6
				],
				highlighted: true
			},
			{
				id: "enterprise",
				featureNums: [
					1,
					2,
					3,
					4,
					5,
					6,
					7
				],
				highlighted: false
			}
		];
		const tiers = computed(() => tierDefs.map((def) => ({
			id: def.id,
			highlighted: def.highlighted,
			name: td(`pricing.tiers.${def.id}.name`),
			price: td(`pricing.tiers.${def.id}.price`),
			period: def.id === "enterprise" ? "" : td(`pricing.tiers.${def.id}.period`),
			features: def.featureNums.map((n) => td(`pricing.tiers.${def.id}.feature${n}`)),
			cta: def.id === "enterprise" ? td("pricing.tiers.contactSales") : td("pricing.tiers.getStarted")
		})));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(tiers.value, (tier) => {
				return openBlock(), createElementBlock("div", {
					key: tier.id,
					class: normalizeClass(["flex flex-col rounded-lg border p-6", tier.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
				}, [
					createElementVNode("h3", _hoisted_2, toDisplayString(tier.name), 1),
					createElementVNode("div", _hoisted_3, [createElementVNode("span", _hoisted_4, toDisplayString(tier.price), 1), createElementVNode("span", _hoisted_5, toDisplayString(tier.period), 1)]),
					createElementVNode("ul", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList(tier.features, (f) => {
						return openBlock(), createElementBlock("li", {
							key: f,
							class: "flex items-center gap-2 text-sm text-muted-foreground"
						}, [_cache[0] || (_cache[0] = createElementVNode("span", { class: "text-primary" }, "✓", -1)), createTextVNode(" " + toDisplayString(f), 1)]);
					}), 128))]),
					createElementVNode("button", {
						type: "button",
						class: normalizeClass(["w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90", tier.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"])
					}, toDisplayString(tier.cta), 3)
				], 2);
			}), 128))]);
		};
	}
});
export { PricingTiers_default as default };

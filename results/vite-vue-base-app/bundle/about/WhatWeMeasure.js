import { Fragment, createElementBlock, createElementVNode, defineComponent, openBlock, renderList, toDisplayString } from "vue";
var _hoisted_1 = { class: "mt-12 mx-auto max-w-3xl" };
var _hoisted_2 = { class: "space-y-4" };
var _hoisted_3 = { class: "block text-sm font-bold text-primary" };
var _hoisted_4 = { class: "block mt-1 text-sm text-muted-foreground" };
var WhatWeMeasure_default = defineComponent({
	__name: "WhatWeMeasure",
	setup(__props) {
		const metrics = [
			{
				metric: "Bundle size impact",
				desc: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
			},
			{
				metric: "Rendering overhead",
				desc: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
			},
			{
				metric: "Hydration cost",
				desc: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
			},
			{
				metric: "Lazy loading effectiveness",
				desc: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
			},
			{
				metric: "Locale switch speed",
				desc: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
			}
		];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [_cache[0] || (_cache[0] = createElementVNode("h2", { class: "mb-4 text-2xl font-bold text-foreground" }, " What We Measure ", -1)), createElementVNode("ul", _hoisted_2, [(openBlock(), createElementBlock(Fragment, null, renderList(metrics, (m) => {
				return createElementVNode("li", {
					key: m.metric,
					class: "rounded-md border border-border p-4"
				}, [createElementVNode("span", _hoisted_3, toDisplayString(m.metric), 1), createElementVNode("span", _hoisted_4, toDisplayString(m.desc), 1)]);
			}), 64))])]);
		};
	}
});
export { WhatWeMeasure_default as default };

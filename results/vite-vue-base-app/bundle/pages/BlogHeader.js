import { Fragment, createElementBlock, createElementVNode, createVNode, defineComponent, openBlock } from "vue";
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main = {};
var _hoisted_1 = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1, " ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service. ");
}
var MockBanner_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
var BlogHeader_default = defineComponent({
	__name: "BlogHeader",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(MockBanner_default),
				_cache[0] || (_cache[0] = createElementVNode("h1", { class: "mb-2 text-3xl font-bold text-foreground" }, "Blog", -1)),
				_cache[1] || (_cache[1] = createElementVNode("p", { class: "mb-10 text-muted-foreground" }, " Insights, tutorials, and analysis from the i18n community. ", -1))
			], 64);
		};
	}
});
export { BlogHeader_default as default };

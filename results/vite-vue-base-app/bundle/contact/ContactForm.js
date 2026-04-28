import { createElementBlock, createStaticVNode, openBlock, withModifiers } from "vue";
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("form", {
		class: "space-y-6",
		onSubmit: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"]))
	}, [..._cache[1] || (_cache[1] = [createStaticVNode("<div class=\"grid gap-4 md:grid-cols-2\"><div><label for=\"name\" class=\"mb-1 block text-sm font-medium text-foreground\"> Name </label><input id=\"name\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\" placeholder=\"Your name\"></div><div><label for=\"email\" class=\"mb-1 block text-sm font-medium text-foreground\"> Email </label><input id=\"email\" type=\"email\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\" placeholder=\"you@example.com\"></div></div><div><label for=\"topic\" class=\"mb-1 block text-sm font-medium text-foreground\"> Topic </label><select id=\"topic\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option>Bug Report</option><option>New Benchmark Idea</option><option>Methodology Question</option><option>Contribution</option><option>Other</option></select></div><div><label for=\"message\" class=\"mb-1 block text-sm font-medium text-foreground\"> Message </label><textarea id=\"message\" rows=\"5\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\" placeholder=\"Describe your question or idea...\"></textarea></div><button type=\"submit\" class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity\"> Send Message </button>", 4)])], 32);
}
var ContactForm_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { ContactForm_default as default };

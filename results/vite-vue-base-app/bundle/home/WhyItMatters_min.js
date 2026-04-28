import { createElementBlock as e, createStaticVNode as t, openBlock as n } from "vue";
var r = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, i = {}, a = { class: "mb-16" };
function o(r, i) {
	return n(), e("section", a, [...i[0] ||= [t("<h2 class=\"mb-6 text-2xl font-bold text-foreground\"> Why These Metrics Matter </h2><div class=\"grid gap-6 md:grid-cols-3\"><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> Bundle Size </h3><p class=\"text-sm text-muted-foreground\"> The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves. </p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> Rendering &amp; Hydration </h3><p class=\"text-sm text-muted-foreground\"> Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI). </p></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> Dynamic Loading </h3><p class=\"text-sm text-muted-foreground\"> Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential. </p></div></div>", 2)]]);
}
var s = r(i, [["render", o]]);
export { s as default };

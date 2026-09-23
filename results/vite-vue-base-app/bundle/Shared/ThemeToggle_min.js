import { createElementBlock as e, defineComponent as t, onMounted as n, onUnmounted as r, openBlock as i, ref as a, toDisplayString as o, watch as s } from "vue";
var c = t({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let i = a("auto");
		function o() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function c(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		n(() => {
			let e = o();
			i.value = e, c(e);
		});
		let l = null;
		s(i, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				l = () => c("auto"), e.addEventListener("change", l);
			} else l &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", l), null);
		}, { immediate: !0 }), r(() => {
			l && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", l);
		});
		function u() {
			let e = i.value === "light" ? "dark" : i.value === "dark" ? "auto" : "light";
			i.value = e, c(e), window.localStorage.setItem("theme", e);
		}
		let d = {
			mode: i,
			getInitialMode: o,
			applyThemeMode: c,
			get mediaQueryListener() {
				return l;
			},
			set mediaQueryListener(e) {
				l = e;
			},
			toggleMode: u,
			getLabel: () => i.value === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${i.value}. Click to switch mode.`
		};
		return Object.defineProperty(d, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), d;
	}
}), l = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, u = ["aria-label", "title"];
function d(t, n, r, a, s, c) {
	return i(), e("button", {
		type: "button",
		onClick: a.toggleMode,
		"aria-label": a.getLabel(),
		title: a.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, o(a.mode === "auto" ? "Theme: Auto" : a.mode === "dark" ? "Theme: Dark" : "Theme: Light"), 9, u);
}
var f = l(c, [["render", d], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/ThemeToggle.vue"]]);
export { f as default };

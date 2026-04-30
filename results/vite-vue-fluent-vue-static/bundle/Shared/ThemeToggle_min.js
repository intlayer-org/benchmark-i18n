import { createElementBlock as e, defineComponent as t, getCurrentInstance as n, onMounted as r, onUnmounted as i, openBlock as a, ref as o, toDisplayString as s, watch as c } from "vue";
function l(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function u(e) {
	return e.split(".").map(l).join("-");
}
function d() {
	let e = n()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(u(t), n ?? {});
	} };
}
var f = t({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let { td: n } = d(), a = o("auto");
		function s() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function l(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		r(() => {
			let e = s();
			a.value = e, l(e);
		});
		let u = null;
		c(a, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				u = () => l("auto"), e.addEventListener("change", u);
			} else u &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", u), null);
		}, { immediate: !0 }), i(() => {
			u && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", u);
		});
		function f() {
			let e = a.value === "light" ? "dark" : a.value === "dark" ? "auto" : "light";
			a.value = e, l(e), window.localStorage.setItem("theme", e);
		}
		let p = {
			td: n,
			mode: a,
			getInitialMode: s,
			applyThemeMode: l,
			get mediaQueryListener() {
				return u;
			},
			set mediaQueryListener(e) {
				u = e;
			},
			toggleMode: f,
			getLabel: () => a.value === "auto" ? n("themeToggle.labelAuto") : n("themeToggle.labelOther", { mode: a.value })
		};
		return Object.defineProperty(p, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), p;
	}
}), p = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, m = ["aria-label", "title"];
function h(t, n, r, i, o, c) {
	return a(), e("button", {
		type: "button",
		onClick: i.toggleMode,
		"aria-label": i.getLabel(),
		title: i.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, s(i.mode === "auto" ? i.td("themeToggle.auto") : i.mode === "dark" ? i.td("themeToggle.dark") : i.td("themeToggle.light")), 9, m);
}
var g = p(f, [["render", h], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/ThemeToggle.vue"]]);
export { g as default };

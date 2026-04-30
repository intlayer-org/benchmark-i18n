import { createElementBlock as e, defineComponent as t, getCurrentInstance as n, onMounted as r, onUnmounted as i, openBlock as a, ref as o, toDisplayString as s, unref as c, watch as l } from "vue";
function u(e) {
	return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function d(e) {
	return e.split(".").map(u).join("-");
}
function f() {
	let e = n()?.proxy;
	return { td: (t, n) => {
		if (!e) throw Error("useFluentDottedT must be used during setup()");
		return e.$t(d(t), n ?? {});
	} };
}
var p = ["aria-label", "title"], m = t({
	__name: "ThemeToggle",
	setup(t) {
		let { td: n } = f(), u = o("auto");
		function d() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function m(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		r(() => {
			let e = d();
			u.value = e, m(e);
		});
		let h = null;
		l(u, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				h = () => m("auto"), e.addEventListener("change", h);
			} else h &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", h), null);
		}, { immediate: !0 }), i(() => {
			h && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", h);
		});
		function g() {
			let e = u.value === "light" ? "dark" : u.value === "dark" ? "auto" : "light";
			u.value = e, m(e), window.localStorage.setItem("theme", e);
		}
		let _ = () => u.value === "auto" ? n("themeToggle.labelAuto") : n("themeToggle.labelOther", { mode: u.value });
		return (t, r) => (a(), e("button", {
			type: "button",
			onClick: g,
			"aria-label": _(),
			title: _(),
			class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
		}, s(u.value === "auto" ? c(n)("themeToggle.auto") : u.value === "dark" ? c(n)("themeToggle.dark") : c(n)("themeToggle.light")), 9, p));
	}
});
export { m as default };

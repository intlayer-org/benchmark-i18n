import { createElementBlock as e, defineComponent as t, onMounted as n, onUnmounted as r, openBlock as i, ref as a, toDisplayString as o, watch as s } from "vue";
var c = ["aria-label", "title"], l = t({
	__name: "ThemeToggle",
	setup(t) {
		let l = a("auto");
		function u() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function d(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		n(() => {
			let e = u();
			l.value = e, d(e);
		});
		let f = null;
		s(l, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				f = () => d("auto"), e.addEventListener("change", f);
			} else f &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", f), null);
		}, { immediate: !0 }), r(() => {
			f && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", f);
		});
		function p() {
			let e = l.value === "light" ? "dark" : l.value === "dark" ? "auto" : "light";
			l.value = e, d(e), window.localStorage.setItem("theme", e);
		}
		let m = () => l.value === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${l.value}. Click to switch mode.`;
		return (t, n) => (i(), e("button", {
			type: "button",
			onClick: p,
			"aria-label": m(),
			title: m(),
			class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
		}, o(l.value === "auto" ? "Theme: Auto" : l.value === "dark" ? "Theme: Dark" : "Theme: Light"), 9, c));
	}
});
export { l as default };

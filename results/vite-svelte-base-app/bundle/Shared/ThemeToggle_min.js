import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
var n = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function r(r, i) {
	e.push(i, !0);
	function a() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function o(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let s = e.state("auto");
	t(() => {
		let t = a();
		e.set(s, t, !0), o(t);
	}), e.user_effect(() => {
		if (e.get(s) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => o("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function c() {
		let t = e.get(s) === "light" ? "dark" : e.get(s) === "dark" ? "auto" : "light";
		e.set(s, t, !0), o(t), window.localStorage.setItem("theme", t);
	}
	let l = e.derived(() => e.get(s) === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e.get(s)}. Click to switch mode.`), u = e.derived(() => e.get(s) === "auto" ? "Theme: Auto" : e.get(s) === "dark" ? "Theme: Dark" : "Theme: Light");
	var d = n(), f = e.child(d, !0);
	e.reset(d), e.template_effect(() => {
		e.set_attribute(d, "aria-label", e.get(l)), e.set_attribute(d, "title", e.get(l)), e.set_text(f, e.get(u));
	}), e.delegated("click", d, c), e.append(r, d), e.pop();
}
e.delegate(["click"]);
export { r as default };

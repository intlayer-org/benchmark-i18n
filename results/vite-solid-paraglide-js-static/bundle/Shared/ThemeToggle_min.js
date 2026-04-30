import { delegateEvents as e, effect as t, insert as n, setAttribute as r, template as i } from "solid-js/web";
import { createEffect as a, createSignal as o, onMount as s } from "solid-js";
var c = i("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function l() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function u(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function d() {
	let [e, i] = o("auto");
	s(() => {
		let e = l();
		i(e), u(e);
	}), a(() => {
		if (e() !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => u("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	});
	function d() {
		let t = e(), n = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		i(n), u(n), window.localStorage.setItem("theme", n);
	}
	let f = () => e() === "auto" ? (void 0)() : (void 0)({ mode: e() }), p = () => (e() === "auto" || e(), (void 0)());
	return (() => {
		var e = c();
		return e.$$click = d, n(e, p), t((t) => {
			var n = f(), i = f();
			return n !== t.e && r(e, "aria-label", t.e = n), i !== t.t && r(e, "title", t.t = i), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
e(["click"]);
export { d as default };

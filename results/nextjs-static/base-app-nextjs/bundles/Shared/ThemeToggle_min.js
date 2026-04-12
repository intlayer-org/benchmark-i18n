"use client";
import { useEffect as e, useState as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region app/components/ThemeToggle.tsx
function r() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function i(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function a() {
	let [a, o] = t("auto");
	e(() => {
		let e = r();
		o(e), i(e);
	}, []), e(() => {
		if (a !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => i("auto");
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	}, [a]);
	function s() {
		let e = a === "light" ? "dark" : a === "dark" ? "auto" : "light";
		o(e), i(e), window.localStorage.setItem("theme", e);
	}
	let c = a === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${a}. Click to switch mode.`;
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: s,
		"aria-label": c,
		title: c,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: a === "auto" ? "Theme: Auto" : a === "dark" ? "Theme: Dark" : "Theme: Light"
	});
}
//#endregion
export { a as default };

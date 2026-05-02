import { useEffect as e, useState as t } from "react";
import { jsxDEV as n } from "react/jsx-dev-runtime";
var r = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-react-base-app/src/components/ThemeToggle.tsx";
function i() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function a(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function o() {
	let [o, s] = t("auto");
	e(() => {
		let e = i();
		s(e), a(e);
	}, []), e(() => {
		if (o !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => a("auto");
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	}, [o]);
	function c() {
		let e = o === "light" ? "dark" : o === "dark" ? "auto" : "light";
		s(e), a(e), window.localStorage.setItem("theme", e);
	}
	let l = o === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${o}. Click to switch mode.`;
	return n("button", {
		type: "button",
		onClick: c,
		"aria-label": l,
		title: l,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: o === "auto" ? "Theme: Auto" : o === "dark" ? "Theme: Dark" : "Theme: Light"
	}, void 0, !1, {
		fileName: r,
		lineNumber: 71,
		columnNumber: 5
	}, this);
}
export { o as default };

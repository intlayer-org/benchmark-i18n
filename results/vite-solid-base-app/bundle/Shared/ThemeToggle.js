import { delegateEvents, effect, insert, setAttribute, template } from "solid-js/web";
import { createEffect, createSignal, onMount } from "solid-js";
var _tmpl$ = template(`<button type=button class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80">`);
function getInitialMode() {
	if (typeof window === "undefined") return "auto";
	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") return stored;
	return "auto";
}
function applyThemeMode(mode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);
	if (mode === "auto") document.documentElement.removeAttribute("data-theme");
	else document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
	const [mode, setMode] = createSignal("auto");
	onMount(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	});
	createEffect(() => {
		if (mode() !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	});
	function toggleMode() {
		const current = mode();
		const nextMode = current === "light" ? "dark" : current === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = () => mode() === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${mode()}. Click to switch mode.`;
	const buttonText = () => mode() === "auto" ? "Theme: Auto" : mode() === "dark" ? "Theme: Dark" : "Theme: Light";
	return (() => {
		var _el$ = _tmpl$();
		_el$.$$click = toggleMode;
		insert(_el$, buttonText);
		effect((_p$) => {
			var _v$ = label(), _v$2 = label();
			_v$ !== _p$.e && setAttribute(_el$, "aria-label", _p$.e = _v$);
			_v$2 !== _p$.t && setAttribute(_el$, "title", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
}
delegateEvents(["click"]);
export { ThemeToggle as default };

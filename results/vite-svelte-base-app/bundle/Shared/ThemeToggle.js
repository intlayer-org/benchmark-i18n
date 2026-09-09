import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { onMount } from "svelte";
var root = $.from_html(`<button type="button" class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"> </button>`);
function ThemeToggle($$anchor, $$props) {
	$.push($$props, true);
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
	let mode = $.state("auto");
	onMount(() => {
		const initialMode = getInitialMode();
		$.set(mode, initialMode, true);
		applyThemeMode(initialMode);
	});
	$.user_effect(() => {
		if ($.get(mode) !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	});
	function toggleMode() {
		const nextMode = $.get(mode) === "light" ? "dark" : $.get(mode) === "dark" ? "auto" : "light";
		$.set(mode, nextMode, true);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = $.derived(() => $.get(mode) === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${$.get(mode)}. Click to switch mode.`);
	const buttonText = $.derived(() => $.get(mode) === "auto" ? "Theme: Auto" : $.get(mode) === "dark" ? "Theme: Dark" : "Theme: Light");
	var button = root();
	var text = $.only_child(button, true);
	$.template_effect(() => {
		$.set_attribute(button, "aria-label", $.get(label));
		$.set_attribute(button, "title", $.get(label));
		$.set_text(text, $.get(buttonText));
	});
	$.delegated("click", button, toggleMode);
	$.append($$anchor, button);
	$.pop();
}
$.delegate(["click"]);
export { ThemeToggle as default };

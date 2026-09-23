import { createElementBlock, defineComponent, onMounted, onUnmounted, openBlock, ref, toDisplayString, watch } from "vue";
var _hoisted_1 = ["aria-label", "title"];
var ThemeToggle_default = defineComponent({
	__name: "ThemeToggle",
	setup(__props) {
		const mode = ref("auto");
		function getInitialMode() {
			if (typeof window === "undefined") return "auto";
			const stored = window.localStorage.getItem("theme");
			if (stored === "light" || stored === "dark" || stored === "auto") return stored;
			return "auto";
		}
		function applyThemeMode(m) {
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			const resolved = m === "auto" ? prefersDark ? "dark" : "light" : m;
			document.documentElement.classList.remove("light", "dark");
			document.documentElement.classList.add(resolved);
			if (m === "auto") document.documentElement.removeAttribute("data-theme");
			else document.documentElement.setAttribute("data-theme", m);
			document.documentElement.style.colorScheme = resolved;
		}
		onMounted(() => {
			const initialMode = getInitialMode();
			mode.value = initialMode;
			applyThemeMode(initialMode);
		});
		let mediaQueryListener = null;
		watch(mode, (newMode) => {
			if (newMode === "auto") {
				const media = window.matchMedia("(prefers-color-scheme: dark)");
				mediaQueryListener = () => applyThemeMode("auto");
				media.addEventListener("change", mediaQueryListener);
			} else if (mediaQueryListener) {
				window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", mediaQueryListener);
				mediaQueryListener = null;
			}
		}, { immediate: true });
		onUnmounted(() => {
			if (mediaQueryListener) window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", mediaQueryListener);
		});
		function toggleMode() {
			const nextMode = mode.value === "light" ? "dark" : mode.value === "dark" ? "auto" : "light";
			mode.value = nextMode;
			applyThemeMode(nextMode);
			window.localStorage.setItem("theme", nextMode);
		}
		const getLabel = () => mode.value === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${mode.value}. Click to switch mode.`;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				onClick: toggleMode,
				"aria-label": getLabel(),
				title: getLabel(),
				class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
			}, toDisplayString(mode.value === "auto" ? "Theme: Auto" : mode.value === "dark" ? "Theme: Dark" : "Theme: Light"), 9, _hoisted_1);
		};
	}
});
export { ThemeToggle_default as default };

import { createElementBlock, defineComponent, getCurrentInstance, onMounted, onUnmounted, openBlock, ref, toDisplayString, watch } from "vue";
function segmentToKebab(segment) {
	return segment.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
}
function dottedKeyToFluentId(dottedKey) {
	return dottedKey.split(".").map(segmentToKebab).join("-");
}
function useFluentDottedT() {
	const proxy = getCurrentInstance()?.proxy;
	const td = (dottedVueI18nKey, params) => {
		if (!proxy) throw new Error("useFluentDottedT must be used during setup()");
		return proxy.$t(dottedKeyToFluentId(dottedVueI18nKey), params ?? {});
	};
	return { td };
}
var ThemeToggle_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ThemeToggle",
	setup(__props, { expose: __expose }) {
		__expose();
		const { td } = useFluentDottedT();
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
		const getLabel = () => mode.value === "auto" ? td("themeToggle.labelAuto") : td("themeToggle.labelOther", { mode: mode.value });
		const __returned__ = {
			td,
			mode,
			getInitialMode,
			applyThemeMode,
			get mediaQueryListener() {
				return mediaQueryListener;
			},
			set mediaQueryListener(v) {
				mediaQueryListener = v;
			},
			toggleMode,
			getLabel
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = ["aria-label", "title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("button", {
		type: "button",
		onClick: $setup.toggleMode,
		"aria-label": $setup.getLabel(),
		title: $setup.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, toDisplayString($setup.mode === "auto" ? $setup.td("themeToggle.auto") : $setup.mode === "dark" ? $setup.td("themeToggle.dark") : $setup.td("themeToggle.light")), 9, _hoisted_1);
}
var ThemeToggle_default = _plugin_vue_export_helper_default(ThemeToggle_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/src/components/ThemeToggle.vue"]]);
export { ThemeToggle_default as default };

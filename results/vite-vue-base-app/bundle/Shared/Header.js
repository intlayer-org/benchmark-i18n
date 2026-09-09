import { Fragment, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, normalizeClass, onBeforeMount, onMounted, onUnmounted, openBlock, ref, renderList, resolveComponent, toDisplayString, watch, withCtx } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ChevronDown } from "lucide-vue-next";
function usePerformanceMeasure(name) {
	onBeforeMount(() => {
		if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	});
	onMounted(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	});
}
var locales = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"pt",
	"zh",
	"ja",
	"ko",
	"ru"
];
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
};
var LocaleSwitcher_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "LocaleSwitcher",
	setup(__props, { expose: __expose }) {
		__expose();
		const route = useRoute();
		const router = useRouter();
		const currentLocale = computed(() => route.params.locale || "en");
		const handleLocaleChange = (newLocale) => {
			const newPath = route.path.replace(/^\/[^/]+/, `/${newLocale}`);
			router.push({
				path: newPath,
				query: route.query,
				hash: route.hash
			});
		};
		const __returned__ = {
			route,
			router,
			currentLocale,
			handleLocaleChange,
			get getLocaleName() {
				return getLocaleName;
			},
			get locales() {
				return locales;
			}
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
var _hoisted_1$2 = { class: "flex items-center gap-2" };
var _hoisted_2$1 = ["value"];
var _hoisted_3$1 = ["value"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$2, [createElementVNode("select", {
		value: $setup.currentLocale,
		onChange: _cache[0] || (_cache[0] = (e) => $setup.handleLocaleChange(e.target.value)),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.locales, (localeItem) => {
		return openBlock(), createElementBlock("option", {
			key: localeItem,
			value: localeItem
		}, toDisplayString($setup.getLocaleName(localeItem)), 9, _hoisted_3$1);
	}), 128))], 40, _hoisted_2$1)]);
}
var LocaleSwitcher_default = _plugin_vue_export_helper_default(LocaleSwitcher_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render$2], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/LocaleSwitcher.vue"]]);
var ThemeToggle_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ThemeToggle",
	setup(__props, { expose: __expose }) {
		__expose();
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
		const __returned__ = {
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
var _hoisted_1$1 = ["aria-label", "title"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("button", {
		type: "button",
		onClick: $setup.toggleMode,
		"aria-label": $setup.getLabel(),
		title: $setup.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, toDisplayString($setup.mode === "auto" ? "Theme: Auto" : $setup.mode === "dark" ? "Theme: Dark" : "Theme: Light"), 9, _hoisted_1$1);
}
var ThemeToggle_default = _plugin_vue_export_helper_default(ThemeToggle_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render$1], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/ThemeToggle.vue"]]);
var Header_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "Header",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("Header");
		const isMockPagesOpen = ref(false);
		const route = useRoute();
		const currentLocale = computed(() => route.params.locale || "en");
		const __returned__ = {
			isMockPagesOpen,
			route,
			currentLocale,
			mockPages: computed(() => [
				{
					to: `/${currentLocale.value}/products`,
					label: "Products"
				},
				{
					to: `/${currentLocale.value}/pricing`,
					label: "Pricing"
				},
				{
					to: `/${currentLocale.value}/team`,
					label: "Team"
				},
				{
					to: `/${currentLocale.value}/blog`,
					label: "Blog"
				},
				{
					to: `/${currentLocale.value}/careers`,
					label: "Careers"
				},
				{
					to: `/${currentLocale.value}/faq`,
					label: "FAQ"
				},
				{
					to: `/${currentLocale.value}/contact`,
					label: "Contact"
				},
				{
					to: `/${currentLocale.value}/settings`,
					label: "Settings"
				}
			]),
			get ChevronDown() {
				return ChevronDown;
			},
			LocaleSwitcher: LocaleSwitcher_default,
			ThemeToggle: ThemeToggle_default
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _hoisted_1 = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" };
var _hoisted_2 = { class: "container flex h-16 items-center justify-between" };
var _hoisted_3 = { class: "flex items-center gap-8" };
var _hoisted_4 = { class: "hidden items-center gap-6 text-sm font-medium md:flex" };
var _hoisted_5 = { class: "relative" };
var _hoisted_6 = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" };
var _hoisted_7 = { class: "flex items-center gap-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	return openBlock(), createElementBlock("header", _hoisted_1, [createElementVNode("nav", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(_component_router_link, {
		to: `/${$setup.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode(" i18n Bench ", -1)])]),
		_: 1
	}, 8, ["to"]), createElementVNode("div", _hoisted_4, [
		createVNode(_component_router_link, {
			to: `/${$setup.currentLocale}`,
			class: "nav-link",
			"exact-active-class": "is-active"
		}, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode(" Home ", -1)])]),
			_: 1
		}, 8, ["to"]),
		createVNode(_component_router_link, {
			to: `/${$setup.currentLocale}/about`,
			class: "nav-link",
			"active-class": "is-active"
		}, {
			default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" Methodology ", -1)])]),
			_: 1
		}, 8, ["to"]),
		createCommentVNode(" Mock Pages Dropdown "),
		createElementVNode("div", _hoisted_5, [createElementVNode("button", {
			type: "button",
			class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
			onMouseenter: _cache[0] || (_cache[0] = ($event) => $setup.isMockPagesOpen = true),
			onMouseleave: _cache[1] || (_cache[1] = ($event) => $setup.isMockPagesOpen = false),
			onClick: _cache[2] || (_cache[2] = ($event) => $setup.isMockPagesOpen = !$setup.isMockPagesOpen)
		}, [_cache[9] || (_cache[9] = createTextVNode(" Mock Pages ", -1)), createVNode($setup["ChevronDown"], {
			size: 14,
			class: normalizeClass(["transition-transform", $setup.isMockPagesOpen ? "rotate-180" : ""])
		}, null, 8, ["class"])], 32), $setup.isMockPagesOpen ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: "absolute left-0 top-full pt-2 w-48",
			onMouseenter: _cache[4] || (_cache[4] = ($event) => $setup.isMockPagesOpen = true),
			onMouseleave: _cache[5] || (_cache[5] = ($event) => $setup.isMockPagesOpen = false)
		}, [createElementVNode("div", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.mockPages, (page) => {
			return openBlock(), createBlock(_component_router_link, {
				key: page.to,
				to: page.to,
				class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
				onClick: _cache[3] || (_cache[3] = ($event) => $setup.isMockPagesOpen = false)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(page.label), 1)]),
				_: 2
			}, 1032, ["to"]);
		}), 128))])], 32)) : createCommentVNode("v-if", true)])
	])]), createElementVNode("div", _hoisted_7, [
		_cache[10] || (_cache[10] = createElementVNode("a", {
			href: "https://github.com/intlayer-org/benchmark-i18n",
			target: "_blank",
			rel: "noreferrer",
			class: "text-muted-foreground transition hover:text-foreground"
		}, [createElementVNode("span", { class: "sr-only" }, "Go to GitHub"), createElementVNode("svg", {
			viewBox: "0 0 16 16",
			"aria-hidden": "true",
			width: "20",
			height: "20"
		}, [createElementVNode("path", {
			fill: "currentColor",
			d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
		})])], -1)),
		createVNode($setup["LocaleSwitcher"]),
		createVNode($setup["ThemeToggle"])
	])])]);
}
var Header_default = _plugin_vue_export_helper_default(Header_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-base-app/src/components/Header.vue"]]);
export { Header_default as default };

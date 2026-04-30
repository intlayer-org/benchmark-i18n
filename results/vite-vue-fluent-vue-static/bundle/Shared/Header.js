import { Fragment, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, getCurrentInstance, normalizeClass, onBeforeMount, onMounted, onUnmounted, openBlock, ref, renderList, resolveComponent, toDisplayString, unref, watch, withCtx } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ChevronDown } from "lucide-vue-next";
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
var _hoisted_1$2 = { class: "flex items-center gap-2" };
var _hoisted_2$1 = ["value"];
var _hoisted_3$1 = ["value"];
var LocaleSwitcher_default = defineComponent({
	__name: "LocaleSwitcher",
	setup(__props) {
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [createElementVNode("select", {
				value: currentLocale.value,
				onChange: _cache[0] || (_cache[0] = (e) => handleLocaleChange(e.target.value)),
				class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(locales), (localeItem) => {
				return openBlock(), createElementBlock("option", {
					key: localeItem,
					value: localeItem
				}, toDisplayString(unref(getLocaleName)(localeItem)), 9, _hoisted_3$1);
			}), 128))], 40, _hoisted_2$1)]);
		};
	}
});
var _hoisted_1$1 = ["aria-label", "title"];
var ThemeToggle_default = defineComponent({
	__name: "ThemeToggle",
	setup(__props) {
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				onClick: toggleMode,
				"aria-label": getLabel(),
				title: getLabel(),
				class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
			}, toDisplayString(mode.value === "auto" ? unref(td)("themeToggle.auto") : mode.value === "dark" ? unref(td)("themeToggle.dark") : unref(td)("themeToggle.light")), 9, _hoisted_1$1);
		};
	}
});
var _hoisted_1 = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" };
var _hoisted_2 = { class: "container flex h-16 items-center justify-between" };
var _hoisted_3 = { class: "flex items-center gap-8" };
var _hoisted_4 = { class: "hidden items-center gap-6 text-sm font-medium md:flex" };
var _hoisted_5 = { class: "relative" };
var _hoisted_6 = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" };
var _hoisted_7 = { class: "flex items-center gap-4" };
var _hoisted_8 = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
};
var _hoisted_9 = { class: "sr-only" };
var Header_default = defineComponent({
	__name: "Header",
	setup(__props) {
		usePerformanceMeasure("Header");
		const { td } = useFluentDottedT();
		const isMockPagesOpen = ref(false);
		const route = useRoute();
		const currentLocale = computed(() => route.params.locale || "en");
		const mockPages = computed(() => [
			{
				to: `/${currentLocale.value}/products`,
				label: td("header.products")
			},
			{
				to: `/${currentLocale.value}/pricing`,
				label: td("header.pricing")
			},
			{
				to: `/${currentLocale.value}/team`,
				label: td("header.team")
			},
			{
				to: `/${currentLocale.value}/blog`,
				label: td("header.blog")
			},
			{
				to: `/${currentLocale.value}/careers`,
				label: td("header.careers")
			},
			{
				to: `/${currentLocale.value}/faq`,
				label: td("header.faq")
			},
			{
				to: `/${currentLocale.value}/contact`,
				label: td("header.contact")
			},
			{
				to: `/${currentLocale.value}/settings`,
				label: td("header.settings")
			}
		]);
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createElementBlock("header", _hoisted_1, [createElementVNode("nav", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(_component_router_link, {
				to: `/${currentLocale.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(td)("shared.appName")), 1)]),
				_: 1
			}, 8, ["to"]), createElementVNode("div", _hoisted_4, [
				createVNode(_component_router_link, {
					to: `/${currentLocale.value}`,
					class: "nav-link",
					"exact-active-class": "is-active"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(td)("header.home")), 1)]),
					_: 1
				}, 8, ["to"]),
				createVNode(_component_router_link, {
					to: `/${currentLocale.value}/about`,
					class: "nav-link",
					"active-class": "is-active"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(td)("header.methodology")), 1)]),
					_: 1
				}, 8, ["to"]),
				createElementVNode("div", _hoisted_5, [createElementVNode("button", {
					type: "button",
					class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
					onMouseenter: _cache[0] || (_cache[0] = ($event) => isMockPagesOpen.value = true),
					onMouseleave: _cache[1] || (_cache[1] = ($event) => isMockPagesOpen.value = false),
					onClick: _cache[2] || (_cache[2] = ($event) => isMockPagesOpen.value = !isMockPagesOpen.value)
				}, [createTextVNode(toDisplayString(unref(td)("header.mockPages")) + " ", 1), createVNode(unref(ChevronDown), {
					size: 14,
					class: normalizeClass(["transition-transform", isMockPagesOpen.value ? "rotate-180" : ""])
				}, null, 8, ["class"])], 32), isMockPagesOpen.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: "absolute left-0 top-full pt-2 w-48",
					onMouseenter: _cache[4] || (_cache[4] = ($event) => isMockPagesOpen.value = true),
					onMouseleave: _cache[5] || (_cache[5] = ($event) => isMockPagesOpen.value = false)
				}, [createElementVNode("div", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList(mockPages.value, (page) => {
					return openBlock(), createBlock(_component_router_link, {
						key: page.to,
						to: page.to,
						class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
						onClick: _cache[3] || (_cache[3] = ($event) => isMockPagesOpen.value = false)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(page.label), 1)]),
						_: 2
					}, 1032, ["to"]);
				}), 128))])], 32)) : createCommentVNode("v-if", true)])
			])]), createElementVNode("div", _hoisted_7, [
				createElementVNode("a", _hoisted_8, [createElementVNode("span", _hoisted_9, toDisplayString(unref(td)("shared.goToGithub")), 1), _cache[6] || (_cache[6] = createElementVNode("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "20",
					height: "20"
				}, [createElementVNode("path", {
					fill: "currentColor",
					d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				})], -1))]),
				createVNode(LocaleSwitcher_default),
				createVNode(ThemeToggle_default)
			])])]);
		};
	}
});
export { Header_default as default };

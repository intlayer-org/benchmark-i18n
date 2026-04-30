import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { getContext, onMount } from "svelte";
import { derived, writable } from "svelte/store";
import "svelte/internal/flags/legacy";
var theme_toggle_default = {
	key: "theme-toggle",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"auto": "Theme: Auto",
				"dark": "Theme: Dark",
				"light": "Theme: Light",
				"ariaLabelAuto": "Theme mode: auto (system). Click to switch to light mode.",
				"ariaLabelLight": "Theme mode: light. Click to switch to dark mode.",
				"ariaLabelDark": "Theme mode: dark. Click to switch to auto mode."
			},
			"fr": {
				"auto": "Thème : Auto",
				"dark": "Thème : Sombre",
				"light": "Thème : Clair",
				"ariaLabelAuto": "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				"ariaLabelLight": "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				"ariaLabelDark": "Mode de thème : sombre. Cliquez pour passer au mode auto."
			},
			"es": {
				"auto": "Tema: Auto",
				"dark": "Tema: Oscuro",
				"light": "Tema: Claro",
				"ariaLabelAuto": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				"ariaLabelLight": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				"ariaLabelDark": "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
			},
			"de": {
				"auto": "Design: Auto",
				"dark": "Design: Dunkel",
				"light": "Design: Hell",
				"ariaLabelAuto": "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				"ariaLabelLight": "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
				"ariaLabelDark": "Design-Modus: Dunkel. Klicken Sie hier, um in den Auto-Modus zu wechseln."
			},
			"it": {
				"auto": "Tema: Auto",
				"dark": "Tema: Scuro",
				"light": "Tema: Chiaro",
				"ariaLabelAuto": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				"ariaLabelLight": "Modalità tema: chiaro. Clicca per passare alla modalità scura.",
				"ariaLabelDark": "Modalità tema: scuro. Clicca per passare alla modalità auto."
			},
			"pt": {
				"auto": "Tema: Automático",
				"dark": "Tema: Escuro",
				"light": "Tema: Claro",
				"ariaLabelAuto": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				"ariaLabelLight": "Modo de tema: claro. Clique para mudar para o modo escuro.",
				"ariaLabelDark": "Modo de tema: escuro. Clique para mudar para o modo automático."
			},
			"zh": {
				"auto": "主题：自动",
				"dark": "主题：深色",
				"light": "主题：浅色",
				"ariaLabelAuto": "主题模式：自动（系统）。点击切换到浅色模式。",
				"ariaLabelLight": "主题模式：浅色。点击切换到深色模式。",
				"ariaLabelDark": "主题模式：深色。点击切换到自动模式。"
			},
			"ja": {
				"auto": "テーマ：自動",
				"dark": "テーマ：ダーク",
				"light": "テーマ：ライト",
				"ariaLabelAuto": "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				"ariaLabelLight": "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				"ariaLabelDark": "テーマモード：ダーク。クリックして自動モードに切り替えます。"
			},
			"ko": {
				"auto": "테마: 자동",
				"dark": "테마: 어둡게",
				"light": "테마: 밝게",
				"ariaLabelAuto": "테마 모드: 자동(시스템). 클릭하여 밝은 모드로 전환합니다.",
				"ariaLabelLight": "테마 모드: 밝게. 클릭하여 어두운 모드로 전환합니다.",
				"ariaLabelDark": "테마 모드: 어둡게. 클릭하여 자동 모드로 전환합니다."
			},
			"ru": {
				"auto": "Тема: Авто",
				"dark": "Тема: Темная",
				"light": "Тема: Светлая",
				"ariaLabelAuto": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				"ariaLabelLight": "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				"ariaLabelDark": "Режим темы: темный. Нажмите, чтобы переключиться в автоматический режим."
			}
		}
	}
};
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
};
var internationalization = {
	"locales": [
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
	],
	"requiredLocales": [
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
	],
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var defaultLocale = internationalization?.defaultLocale;
var createIntlayerStore = () => {
	const { subscribe, set, update } = writable({ locale: defaultLocale });
	return {
		subscribe,
		setLocale: (locale) => update((store) => ({
			...store,
			locale
		})),
		getLocale: () => derived({ subscribe }, ($store) => $store.locale),
		reset: () => set({ locale: defaultLocale })
	};
};
var intlayerStore = createIntlayerStore();
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
function IntlayerNodeWrapper($$anchor, $$props) {
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, Renderer, false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_1 = ($$anchor) => {
		Renderer()($$anchor, $.spread_props(rendererProps, {
			children: ($$anchor, $$slotProps) => {
				$.next();
				var text_1 = $.text();
				$.template_effect(() => $.set_text(text_1, value()));
				$.append($$anchor, text_1);
			},
			$$slots: { default: true }
		}));
	};
	var alternate = ($$anchor) => {
		var text_2 = $.text();
		$.template_effect(() => $.set_text(text_2, value()));
		$.append($$anchor, text_2);
	};
	$.if(node, ($$render) => {
		if (typeof Renderer() === "string") $$render(consequent);
		else if (typeof Renderer() === "function") $$render(consequent_1, 1);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = class extends IntlayerNodeWrapper {
		constructor(options) {
			super({
				...options,
				props: {
					...options.props,
					Renderer: args.component,
					rendererProps: args.props,
					value: args.value
				}
			});
		}
	};
	else Node = (props) => {
		return IntlayerNodeWrapper(props, {
			Renderer: args.component,
			rendererProps: args.props,
			value: args.value
		});
	};
	Object.defineProperty(Node, "value", {
		value: args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "toString", {
		value: () => args.value?.toString() ?? "",
		writable: true,
		configurable: true
	});
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, { children, ...rest }) => renderIntlayerNode({
		value: children ?? node,
		component: void 0,
		props: rest
	})
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		intlayerNodePlugins,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
var useDictionary = (dictionary, locale) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		return getDictionary(dictionary, locale ?? context?.locale ?? $store.locale);
	});
};
var root = $.from_html(`<button type="button" class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"> </button>`);
function ThemeToggle($$anchor, $$props) {
	$.push($$props, true);
	const $tt = () => $.store_get(tt, "$tt", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const tt = useDictionary(theme_toggle_default);
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
	const label = $.derived(() => $.get(mode) === "auto" ? $tt().ariaLabelAuto : $.get(mode) === "light" ? $tt().ariaLabelLight : $tt().ariaLabelDark);
	const buttonText = $.derived(() => $.get(mode) === "auto" ? $tt().auto : $.get(mode) === "dark" ? $tt().dark : $tt().light);
	var button = root();
	var text = $.child(button, true);
	$.reset(button);
	$.template_effect(() => {
		$.set_attribute(button, "aria-label", $.get(label));
		$.set_attribute(button, "title", $.get(label));
		$.set_text(text, $.get(buttonText));
	});
	$.delegated("click", button, toggleMode);
	$.append($$anchor, button);
	$.pop();
	$$cleanup();
}
$.delegate(["click"]);
export { ThemeToggle as default };

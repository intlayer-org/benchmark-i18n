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
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
};
var prototypeCache = /* @__PURE__ */ new Map();
var createIntlayerNodePrototype = (basePrototype, valuePrototype) => Object.create(new Proxy(basePrototype, {
	get: (target, property, receiver) => {
		if (typeof property !== "string" || property === "constructor" || property in target) return Reflect.get(target, property, receiver);
		const { value } = receiver;
		if (value === null || value === void 0) return void 0;
		const member = Object(value)[property];
		return typeof member === "function" ? member.bind(value) : member;
	},
	has: (target, property) => property in target || typeof property === "string" && property !== "constructor" && valuePrototype !== null && property in valuePrototype
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
});
var getIntlayerNodePrototype = (value, basePrototype = Object.prototype) => {
	const valueType = typeof value;
	const valueKey = value === null || value === void 0 ? null : valueType === "object" || valueType === "function" ? Object.getPrototypeOf(value) : valueType;
	let prototypes = prototypeCache.get(basePrototype);
	if (!prototypes) {
		prototypes = /* @__PURE__ */ new Map();
		prototypeCache.set(basePrototype, prototypes);
	}
	let prototype = prototypes.get(valueKey);
	if (!prototype) {
		prototype = createIntlayerNodePrototype(basePrototype, valueKey === null ? null : Object.getPrototypeOf(Object(value)));
		prototypes.set(valueKey, prototype);
	}
	return prototype;
};
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var getChildProps = (props, children, keyPathSegment) => ({
	...props,
	children,
	keyPath: [...props.keyPath, keyPathSegment]
});
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, deepTransformNode);
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0) return node;
	if (Array.isArray(node)) return node.map((child, index) => deepTransformNode(child, getChildProps(props, child, {
		type: ARRAY,
		key: index
	})));
	const result = {};
	for (const key in node) {
		const keyPathSegment = {
			type: OBJECT,
			key
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
				Object.defineProperty(this, key, {
					value: transformed,
					enumerable: true,
					configurable: true
				});
				return transformed;
			}
		});
	}
	return result;
};
var pluginsIdentities = /* @__PURE__ */ new WeakMap();
var nextPluginsIdentity = 0;
var getPluginsCacheKey = (plugins) => {
	if (!plugins) return "base";
	const existingIdentity = pluginsIdentities.get(plugins);
	if (existingIdentity) return existingIdentity;
	nextPluginsIdentity += 1;
	const identity = `p${nextPluginsIdentity}`;
	pluginsIdentities.set(plugins, identity);
	return identity;
};
var MAX_ENTRIES_PER_DICTIONARY = 256;
var transformCache = /* @__PURE__ */ new WeakMap();
var isMemoizableDictionary = (value) => value !== null && typeof value === "object";
var getDictionaryTransformCacheKey = (locale, selectorCacheKey, plugins) => `${locale}_${selectorCacheKey}_${getPluginsCacheKey(plugins)}`;
var readTransformCache = (dictionary, cacheKey) => {
	if (!isMemoizableDictionary(dictionary)) return { hit: false };
	const entries = transformCache.get(dictionary);
	if (!entries?.has(cacheKey)) return { hit: false };
	return {
		hit: true,
		content: entries.get(cacheKey)
	};
};
var writeTransformCache = (dictionary, cacheKey, content) => {
	if (!isMemoizableDictionary(dictionary)) return content;
	let entries = transformCache.get(dictionary);
	if (!entries) {
		entries = /* @__PURE__ */ new Map();
		transformCache.set(dictionary, entries);
	}
	if (entries.size >= MAX_ENTRIES_PER_DICTIONARY) entries.clear();
	entries.set(cacheKey, content);
	return content;
};
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
].filter((plugin) => plugin !== fallbackPlugin);
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var transformsInProgress = /* @__PURE__ */ new WeakSet();
var getDictionary$1 = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = {
		locale: localeOrSelector,
		selector: void 0
	};
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, "", plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = dictionary;
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries,
			eager: !transformsInProgress.has(resolvedDictionary)
		};
		transformsInProgress.add(resolvedDictionary);
		try {
			return getContent(resolvedDictionary.content, props, appliedPlugins);
		} finally {
			if (props.eager) transformsInProgress.delete(resolvedDictionary);
		}
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
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
	if (!isPlainObject(target) || !isPlainObject(source)) return target;
	let result = target;
	for (const key of Object.keys(source)) {
		const sourceValue = source[key];
		if (key === "__proto__" || key === "constructor" || sourceValue === void 0) continue;
		const targetValue = target[key];
		const merged = targetValue === void 0 ? sourceValue : typeof targetValue === "object" ? deepMerge(targetValue, sourceValue) : targetValue;
		if (merged === targetValue) continue;
		if (result === target) result = { ...target };
		result[key] = merged;
	}
	return result;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (localeEl) => languageContent[localeEl];
	const exactMatch = get(locale);
	if (typeof exactMatch === "string") return exactMatch;
	const candidates = [
		locale,
		locale.split("-")[0],
		fallback,
		fallback?.split("-")[0]
	];
	const results = [];
	for (let index = 0; index < candidates.length; index++) {
		const candidate = candidates[index];
		if (!candidate || candidates.indexOf(candidate) < index) continue;
		const value = get(candidate);
		if (value === void 0) continue;
		if (typeof value === "string") {
			if (results.length === 0) return value;
			continue;
		}
		results.push(value);
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
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const content = getTranslation(node["translation"] ?? {}, locale, fallback);
		return deepTransformNode(content, {
			...props,
			children: content,
			keyPath: [...props.keyPath, {
				type: TRANSLATION,
				key: locale
			}]
		});
	}
};
var enumerationPlugin = fallbackPlugin;
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
function IntlayerNodeWrapper($$anchor, $$props) {
	$.push($$props, false);
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	let ResolvedRenderer = $.mutable_source();
	let isAwaitingRenderer = $.mutable_source(false);
	$.legacy_pre_effect(() => $.deep_read_state(Renderer()), () => {
		if (typeof Renderer()?.then === "function") {
			$.set(isAwaitingRenderer, true);
			Renderer().then((component) => {
				$.set(ResolvedRenderer, component);
				$.set(isAwaitingRenderer, false);
			});
		} else {
			$.set(ResolvedRenderer, Renderer());
			$.set(isAwaitingRenderer, false);
		}
	});
	$.legacy_pre_effect_reset();
	$.init();
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {};
	var consequent_1 = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, () => $.get(ResolvedRenderer), false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_2 = ($$anchor) => {
		$.get(ResolvedRenderer)($$anchor, $.spread_props(rendererProps, {
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
		if ($.get(isAwaitingRenderer)) $$render(consequent);
		else if (typeof $.get(ResolvedRenderer) === "string") $$render(consequent_1, 1);
		else if (typeof $.get(ResolvedRenderer) === "function") $$render(consequent_2, 2);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
	$.pop();
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = function IntlayerNode(options) {
		return new IntlayerNodeWrapper({
			...options,
			props: {
				...options.props,
				Renderer: args.component,
				rendererProps: args.props,
				value: args.value
			}
		});
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
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	Object.setPrototypeOf(Node, getIntlayerNodePrototype(args.value, Function.prototype));
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, props) => {
		return renderIntlayerNode({
			value: props.children ?? node,
			component: void 0,
			props: {}
		});
	}
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const enabledPlugins = [
		intlayerNodePlugins,
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(locale ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	].filter((plugin) => plugin !== fallbackPlugin);
	pluginsCache.set(cacheKey, enabledPlugins);
	return enabledPlugins;
};
var getDictionary = (dictionary, localeOrSelector) => {
	return getDictionary$1(dictionary, localeOrSelector, getPlugins(typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector.locale : localeOrSelector));
};
var useDictionary = (dictionary, localeOrSelector) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		const contextLocale = context?.locale ?? $store.locale;
		return getDictionary(dictionary, localeOrSelector ?? contextLocale);
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
	var text = $.only_child(button, true);
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

import { createComponent, delegateEvents, effect, insert, memo, setAttribute, template } from "solid-js/web";
import { For, createContext, createEffect, createMemo, createSignal, lazy, onMount, useContext } from "solid-js";
import { A, useLocation, useNavigate, useParams } from "@solidjs/router";
var header_default = {
	key: "header",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"f": "Header",
				"k": "Products",
				"j": "Pricing",
				"m": "Team",
				"a": "Blog",
				"b": "Careers",
				"d": "FAQ",
				"c": "Contact",
				"l": "Settings",
				"g": "Home",
				"h": "Methodology",
				"i": "Mock Pages",
				"e": "Go to GitHub"
			},
			"fr": {
				"f": "En-tête",
				"k": "Produits",
				"j": "Tarification",
				"m": "Équipe",
				"a": "Blog",
				"b": "Carrières",
				"d": "FAQ",
				"c": "Contact",
				"l": "Paramètres",
				"g": "Accueil",
				"h": "Méthodologie",
				"i": "Pages fictives",
				"e": "Aller sur GitHub"
			},
			"es": {
				"f": "Encabezado",
				"k": "Productos",
				"j": "Precios",
				"m": "Equipo",
				"a": "Blog",
				"b": "Carreras",
				"d": "FAQ",
				"c": "Contacto",
				"l": "Ajustes",
				"g": "Inicio",
				"h": "Metodología",
				"i": "Páginas de prueba",
				"e": "Ir a GitHub"
			},
			"de": {
				"f": "Header",
				"k": "Produkte",
				"j": "Preise",
				"m": "Team",
				"a": "Blog",
				"b": "Karriere",
				"d": "FAQ",
				"c": "Kontakt",
				"l": "Einstellungen",
				"g": "Home",
				"h": "Methodik",
				"i": "Testseiten",
				"e": "Zu GitHub"
			},
			"it": {
				"f": "Intestazione",
				"k": "Prodotti",
				"j": "Prezzi",
				"m": "Team",
				"a": "Blog",
				"b": "Carriere",
				"d": "FAQ",
				"c": "Contatti",
				"l": "Impostazioni",
				"g": "Home",
				"h": "Metodologia",
				"i": "Pagine di prova",
				"e": "Vai su GitHub"
			},
			"pt": {
				"f": "Cabeçalho",
				"k": "Produtos",
				"j": "Preços",
				"m": "Equipe",
				"a": "Blog",
				"b": "Carreiras",
				"d": "FAQ",
				"c": "Contato",
				"l": "Configurações",
				"g": "Início",
				"h": "Metodologia",
				"i": "Páginas de Teste",
				"e": "Ir para o GitHub"
			},
			"zh": {
				"f": "页眉",
				"k": "产品",
				"j": "定价",
				"m": "团队",
				"a": "博客",
				"b": "职业",
				"d": "常见问题",
				"c": "联系我们",
				"l": "设置",
				"g": "首页",
				"h": "方法论",
				"i": "模拟页面",
				"e": "前往 GitHub"
			},
			"ja": {
				"f": "ヘッダー",
				"k": "製品",
				"j": "価格設定",
				"m": "チーム",
				"a": "ブログ",
				"b": "採用情報",
				"d": "よくある質問",
				"c": "お問い合わせ",
				"l": "設定",
				"g": "ホーム",
				"h": "方法論",
				"i": "モックページ",
				"e": "GitHub へ"
			},
			"ko": {
				"f": "헤더",
				"k": "제품",
				"j": "가격",
				"m": "팀",
				"a": "블로그",
				"b": "채용",
				"d": "자주 묻는 질문",
				"c": "문의",
				"l": "설정",
				"g": "홈",
				"h": "방법론",
				"i": "모ック 페이지",
				"e": "GitHub으로 이동"
			},
			"ru": {
				"f": "Заголовок",
				"k": "Продукты",
				"j": "Цены",
				"m": "Команда",
				"a": "Блог",
				"b": "Вакансии",
				"d": "FAQ",
				"c": "Контакт",
				"l": "Настройки",
				"g": "Главная",
				"h": "Методология",
				"i": "Мок-страницы",
				"e": "Перейти на GitHub"
			}
		}
	}
};
var e = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
};
var t = (e) => typeof e == "string" && /^\d+$/.test(e);
var n$1 = ({ children: n, value: r, additionalProps: i }) => {
	let a = [n];
	if (a.value = r, i) for (let e in i) a[e] = i[e];
	return new Proxy(a, { get(n, i, a) {
		if (i === e.value) return r;
		if (i === Symbol.toPrimitive) return (e) => e === "number" ? Number(r) : r ?? "";
		if (i === e.toString) return () => String(r ?? "");
		if (i === e.valueOf) return () => r;
		if (i === e.slice) return Reflect.get(n, i, a);
		if (r != null && typeof i == "string" && i !== e.constructor && i !== e.length && !t(i)) {
			let e = Object(r);
			if (i in e) {
				let t = Reflect.get(e, i);
				return typeof t == "function" ? t.bind(r) : t;
			}
		}
		return Reflect.get(n, i, a);
	} });
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
var routing = {
	"mode": "prefix-all",
	"enableProxy": false,
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": { "path": "/" }
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
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
	for (const key in node) {
		const childProps = {
			...props,
			children: node[key],
			keyPath: [...props.keyPath, {
				type: OBJECT,
				key
			}]
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], childProps);
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], childProps);
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
var DEFAULT_VARIANT_ID = "default";
var SEGMENT_UNSAFE_CHARS = /[^A-Za-z0-9._&=-]/g;
var COMPONENT_UNSAFE_CHARS = /[^A-Za-z0-9._-]/g;
var percentEncodeChar = (char) => `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
var encodeSegmentText = (raw, unsafeChars) => {
	if (raw === "") return "%";
	const encoded = raw.replace(unsafeChars, percentEncodeChar);
	if (encoded === "." || encoded === "..") return encoded.replace(/\./g, "%002E");
	return encoded;
};
var serializeVariant = (variant) => {
	if (variant === void 0) return DEFAULT_VARIANT_ID;
	if (typeof variant === "string") return encodeSegmentText(variant, SEGMENT_UNSAFE_CHARS);
	return Object.keys(variant).sort().map((field) => `${encodeSegmentText(field, COMPONENT_UNSAFE_CHARS)}=${encodeSegmentText(String(variant[field]), COMPONENT_UNSAFE_CHARS)}`).join("&");
};
var serializeVariantChain = (variant) => {
	if (!Array.isArray(variant)) return [serializeVariant(variant)];
	if (variant.length === 0) return [DEFAULT_VARIANT_ID];
	return variant.map(serializeVariant);
};
var resolveEffectiveVariantId = (requestedVariantIds, isVariantIdDeclared) => {
	for (const requestedVariantId of requestedVariantIds) if (isVariantIdDeclared(requestedVariantId)) return requestedVariantId;
	return isVariantIdDeclared("default") ? DEFAULT_VARIANT_ID : requestedVariantIds[0] ?? "default";
};
var compositeIdMatchesSelector = (compositeId, qualifierTypes, selector, effectiveVariantId) => {
	const segments = compositeId.split("/");
	return qualifierTypes.every((qualifierType, index) => {
		if (qualifierType === "variant") return segments[index] === effectiveVariantId;
		return selector?.item === void 0 || segments[index] === String(selector.item);
	});
};
var isQualifiedDictionaryGroup = (value) => typeof value === "object" && value !== null && "qualifierTypes" in value && Array.isArray(value.qualifierTypes) && "content" in value;
var reconstructQualifiedEntry = (group, compositeId) => {
	const segments = compositeId.split("/");
	const entry = {
		key: group.key,
		content: group.content[compositeId]
	};
	group.qualifierTypes.forEach((qualifierType, index) => {
		if (qualifierType === "variant") entry.variant = segments[index];
		else if (qualifierType === "item") entry.item = Number(segments[index]);
	});
	return entry;
};
var resolveQualifiedDictionary = (dictionaryOrGroup, selector) => {
	if (!isQualifiedDictionaryGroup(dictionaryOrGroup)) return dictionaryOrGroup;
	const { qualifierTypes, content } = dictionaryOrGroup;
	const itemAxisOpen = qualifierTypes.includes("item") && selector?.item === void 0;
	const compositeIds = Object.keys(content);
	const variantIndex = qualifierTypes.indexOf("variant");
	const effectiveVariantId = variantIndex === -1 ? DEFAULT_VARIANT_ID : resolveEffectiveVariantId(serializeVariantChain(selector?.variant), (variantId) => compositeIds.some((compositeId) => compositeId.split("/")[variantIndex] === variantId));
	const matchedEntries = compositeIds.filter((compositeId) => compositeIdMatchesSelector(compositeId, qualifierTypes, selector, effectiveVariantId)).map((compositeId) => reconstructQualifiedEntry(dictionaryOrGroup, compositeId));
	if (itemAxisOpen) return matchedEntries.sort((left, right) => (left.item ?? 0) - (right.item ?? 0));
	return matchedEntries[0] ?? null;
};
var parseDictionarySelector = (localeOrSelector) => {
	if (typeof localeOrSelector === "object" && localeOrSelector !== null) return {
		locale: localeOrSelector.locale,
		selector: localeOrSelector
	};
	return { locale: localeOrSelector };
};
var getDictionarySelectorCacheKey = (selector) => {
	if (!selector) return "";
	return Object.keys(selector).filter((selectorKey) => selectorKey !== "locale").sort().map((selectorKey) => {
		const value = selector[selectorKey];
		return `${selectorKey}:${selectorKey === "variant" ? serializeVariantChain(value).join(",") : String(value)}`;
	}).join("|");
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
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
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
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = parseDictionarySelector(localeOrSelector);
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, getDictionarySelectorCacheKey(selector), plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = resolveQualifiedDictionary(dictionary, selector);
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries
		};
		return getContent(resolvedDictionary.content, props, appliedPlugins);
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
};
var w = null;
var T = null;
w?.catch(() => {}), T?.catch(() => {});
var E = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, { plugins: o, ...s }) => n$1({
		...s,
		value: s.children,
		children: s.children
	})
};
var D = fallbackPlugin;
var k = fallbackPlugin;
lazy(() => w.then((e) => ({ default: e.MarkdownRenderer })));
lazy(() => w.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var N = fallbackPlugin;
lazy(() => T.then((e) => ({ default: e })));
var F = fallbackPlugin;
var I = /* @__PURE__ */ new Map();
var L = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(e ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		E,
		D,
		k,
		N,
		F
	];
	return I.set(n, r), r;
};
var n = (n, r) => {
	return getDictionary(n, r, L(typeof r == "object" && r ? r.locale : r));
};
var TREE_SHAKE_STORAGE_COOKIES = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var localeStorageOptions = {
	getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
	getLocaleStorage: (name) => localStorage.getItem(name),
	getSessionStorage: (name) => sessionStorage.getItem(name),
	isCookieEnabled: true,
	setCookieStore: (name, value, attributes) => cookieStore.set({
		name,
		value,
		path: attributes.path,
		domain: attributes.domain,
		expires: attributes.expires,
		sameSite: attributes.sameSite
	}),
	setCookieString: (_name, cookie) => {
		document.cookie = cookie;
	},
	setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
	setLocaleStorage: (name, value) => localStorage.setItem(name, value)
};
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var a$1 = getLocaleFromStorageClient(localeStorageOptions);
var b = createContext({
	locale: () => a$1 ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var a = Symbol("LOADABLE_SETTLED_VALUE");
var h = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[a];
};
var o = (o, s) => {
	let c = useContext(b) ?? {}, l = createMemo(() => {
		let t = c?.locale?.();
		return n(h(o) ?? o, s ?? t);
	});
	return new Proxy(l, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
};
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	onMount(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch {}
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
	} catch {
		return locale.toUpperCase();
	}
};
var _tmpl$$2 = template(`<div class="flex items-center gap-2"><select class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary">`);
var _tmpl$2$1 = template(`<option>`);
function LocaleSwitcher() {
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const handleLocaleChange = (newLocale) => {
		const newPath = location.pathname.replace(/^\/[^/]+/, `/${newLocale}`);
		navigate(`${newPath}${location.search}${location.hash}`);
	};
	return (() => {
		var _el$ = _tmpl$$2(), _el$2 = _el$.firstChild;
		_el$2.addEventListener("change", (e) => handleLocaleChange(e.currentTarget.value));
		insert(_el$2, createComponent(For, {
			each: locales,
			children: (localeItem) => (() => {
				var _el$3 = _tmpl$2$1();
				_el$3.value = localeItem;
				insert(_el$3, () => getLocaleName(localeItem));
				return _el$3;
			})()
		}));
		effect(() => _el$2.value = params.locale ?? "en");
		return _el$;
	})();
}
var theme_toggle_default = {
	key: "theme-toggle",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"d": "Theme mode: auto (system). Click to switch to light mode.",
				"a": "Theme: Auto",
				"b": "Theme: Dark",
				"c": "Theme: Light"
			},
			"fr": {
				"d": "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
				"a": "Thème : Auto",
				"b": "Thème : Sombre",
				"c": "Thème : Clair"
			},
			"es": {
				"d": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				"a": "Tema: Automático",
				"b": "Tema: Oscuro",
				"c": "Tema: Claro"
			},
			"de": {
				"d": "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				"a": "Design: Auto",
				"b": "Design: Dunkel",
				"c": "Design: Hell"
			},
			"it": {
				"d": "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				"a": "Tema: Auto",
				"b": "Tema: Scuro",
				"c": "Tema: Chiaro"
			},
			"pt": {
				"d": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				"a": "Tema: Automático",
				"b": "Tema: Escuro",
				"c": "Tema: Claro"
			},
			"zh": {
				"d": "主题模式：自动（系统）。点击切换到亮色模式。",
				"a": "主题：自动",
				"b": "主题：深色",
				"c": "主题：亮色"
			},
			"ja": {
				"d": "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				"a": "テーマ：自動",
				"b": "テーマ：ダーク",
				"c": "テーマ：ライト"
			},
			"ko": {
				"d": "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				"a": "테마: 자동",
				"b": "테마: 다크",
				"c": "테마: 라이트"
			},
			"ru": {
				"d": "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				"a": "Тема: Авто",
				"b": "Тема: Темная",
				"c": "Тема: Светлая"
			}
		}
	}
};
var _tmpl$$1 = template(`<button type=button class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80">`);
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
	const content = o(theme_toggle_default);
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
	const label = () => mode() === "auto" ? content().d.value : `Theme mode: ${mode()}. Click to switch mode.`;
	const buttonText = () => mode() === "auto" ? content().a.value : mode() === "dark" ? content().b.value : content().c.value;
	return (() => {
		var _el$ = _tmpl$$1();
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
var _tmpl$ = template(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d="m6 9 6 6 6-6">`);
var _tmpl$2 = template(`<header class="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg"><nav class="container flex h-16 items-center justify-between"><div class="flex items-center gap-8"><div class="hidden items-center gap-6 text-sm font-medium md:flex"><div class=relative><button type=button class="flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link"></button></div></div></div><div class="flex items-center gap-4"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class="text-muted-foreground transition hover:text-foreground"><span class=sr-only></span><svg viewBox="0 0 16 16"aria-hidden=true width=20 height=20><path fill=currentColor d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">`);
var _tmpl$3 = template(`<div class="absolute left-0 top-full w-48 pt-2"><div class="overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg">`);
function ChevronDown(props) {
	return (() => {
		var _el$ = _tmpl$();
		effect(() => setAttribute(_el$, "class", props.class));
		return _el$;
	})();
}
function Header() {
	const content = o(header_default);
	usePerformanceMeasure(content().f.value);
	const [isMockPagesOpen, setIsMockPagesOpen] = createSignal(false);
	const params = useParams();
	const currentLocale = () => params.locale ?? "en";
	const mockPages = () => [
		{
			to: `/${currentLocale()}/products`,
			label: content().k.value
		},
		{
			to: `/${currentLocale()}/pricing`,
			label: content().j.value
		},
		{
			to: `/${currentLocale()}/team`,
			label: content().m.value
		},
		{
			to: `/${currentLocale()}/blog`,
			label: content().a.value
		},
		{
			to: `/${currentLocale()}/careers`,
			label: content().b.value
		},
		{
			to: `/${currentLocale()}/faq`,
			label: content().d.value
		},
		{
			to: `/${currentLocale()}/contact`,
			label: content().c.value
		},
		{
			to: `/${currentLocale()}/settings`,
			label: content().l.value
		}
	];
	return (() => {
		var _el$2 = _tmpl$2(), _el$4 = _el$2.firstChild.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$4.nextSibling, _el$0 = _el$8.firstChild.firstChild;
		insert(_el$4, createComponent(A, {
			get href() {
				return `/${currentLocale()}`;
			},
			"class": "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), _el$5);
		insert(_el$5, createComponent(A, {
			get href() {
				return `/${currentLocale()}`;
			},
			end: true,
			"class": "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return content().g;
			}
		}), _el$6);
		insert(_el$5, createComponent(A, {
			get href() {
				return `/${currentLocale()}/about`;
			},
			"class": "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return content().h;
			}
		}), _el$6);
		_el$7.$$click = () => setIsMockPagesOpen(!isMockPagesOpen());
		_el$7.addEventListener("mouseleave", () => setIsMockPagesOpen(false));
		_el$7.addEventListener("mouseenter", () => setIsMockPagesOpen(true));
		insert(_el$7, () => content().i, null);
		insert(_el$7, createComponent(ChevronDown, { get ["class"]() {
			return `transition-transform ${isMockPagesOpen() ? "rotate-180" : ""}`;
		} }), null);
		insert(_el$6, (() => {
			var _c$ = memo(() => !!isMockPagesOpen());
			return () => _c$() && (() => {
				var _el$1 = _tmpl$3(), _el$10 = _el$1.firstChild;
				_el$1.addEventListener("mouseleave", () => setIsMockPagesOpen(false));
				_el$1.addEventListener("mouseenter", () => setIsMockPagesOpen(true));
				insert(_el$10, createComponent(For, {
					get each() {
						return mockPages();
					},
					children: (page) => createComponent(A, {
						get href() {
							return page.to;
						},
						"class": "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => setIsMockPagesOpen(false),
						get children() {
							return page.label;
						}
					})
				}));
				return _el$1;
			})();
		})(), null);
		insert(_el$0, () => content().e);
		insert(_el$8, createComponent(LocaleSwitcher, {}), null);
		insert(_el$8, createComponent(ThemeToggle, {}), null);
		return _el$2;
	})();
}
delegateEvents(["click"]);
export { Header as default };

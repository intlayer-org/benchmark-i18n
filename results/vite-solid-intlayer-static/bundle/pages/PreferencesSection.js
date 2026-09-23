import { effect, insert, setAttribute, template } from "solid-js/web";
import { createContext, createMemo, createUniqueId, lazy, useContext } from "solid-js";
var preferences_section_default = {
	key: "preferences-section",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"m": "Preferences",
				"e": "Email Notifications",
				"n": "Receive weekly benchmark reports",
				"r": "Toggle notifications",
				"c": "Dark Mode",
				"s": "Use dark color scheme",
				"q": "Toggle dark mode",
				"d": "Default Language",
				"f": "English (en)",
				"g": "French (fr)",
				"h": "German (de)",
				"p": "Spanish (es)",
				"j": "Japanese (ja)",
				"b": "Chinese Simplified (zh-CN)",
				"i": "Italian (it)",
				"l": "Portuguese (pt)",
				"k": "Korean (ko)",
				"o": "Russian (ru)",
				"a": "Arabic (ar)"
			},
			"fr": {
				"m": "Préférences",
				"e": "Notifications par email",
				"n": "Recevoir des rapports hebdomadaires de benchmark",
				"r": "Basculer les notifications",
				"c": "Mode sombre",
				"s": "Utiliser le schéma de couleurs sombres",
				"q": "Basculer le mode sombre",
				"d": "Langue par défaut",
				"f": "Anglais (en)",
				"g": "Français (fr)",
				"h": "Allemand (de)",
				"p": "Espagnol (es)",
				"j": "Japonais (ja)",
				"b": "Chinois simplifié (zh-CN)",
				"i": "Italien (it)",
				"l": "Portugais (pt)",
				"k": "Coréen (ko)",
				"o": "Russe (ru)",
				"a": "Arabe (ar)"
			},
			"es": {
				"m": "Preferencias",
				"e": "Notificaciones por correo electrónico",
				"n": "Recibe informes semanales de benchmarks",
				"r": "Alternar notificaciones",
				"c": "Modo oscuro",
				"s": "Usar combinación de colores oscuros",
				"q": "Alternar modo oscuro",
				"d": "Idioma predeterminado",
				"f": "Inglés (en)",
				"g": "Francés (fr)",
				"h": "Alemán (de)",
				"p": "Español (es)",
				"j": "Japonés (ja)",
				"b": "Chino simplificado (zh-CN)",
				"i": "Italiano (it)",
				"l": "Portugués (pt)",
				"k": "Coreano (ko)",
				"o": "Ruso (ru)",
				"a": "Árabe (ar)"
			},
			"de": {
				"m": "Einstellungen",
				"e": "E-Mail-Benachrichtigungen",
				"n": "Erhalten Sie wöchentliche Benchmark-Berichte",
				"r": "Benachrichtigungen umschalten",
				"c": "Dunkelmodus",
				"s": "Dunkles Farbschema verwenden",
				"q": "Dunkelmodus umschalten",
				"d": "Standardsprache",
				"f": "Englisch (en)",
				"g": "Französisch (fr)",
				"h": "Deutsch (de)",
				"p": "Spanisch (es)",
				"j": "Japanisch (ja)",
				"b": "Chinesisch (Vereinfacht) (zh-CN)",
				"i": "Italienisch (it)",
				"l": "Portugiesisch (pt)",
				"k": "Koreanisch (ko)",
				"o": "Russisch (ru)",
				"a": "Arabisch (ar)"
			},
			"it": {
				"m": "Preferenze",
				"e": "Notifiche via email",
				"n": "Ricevi rapporti settimanali sui benchmark",
				"r": "Attiva/disattiva notifiche",
				"c": "Modalità scura",
				"s": "Usa lo schema colori scuro",
				"q": "Attiva/disattiva modalità scura",
				"d": "Lingua predefinita",
				"f": "Inglese (en)",
				"g": "Francese (fr)",
				"h": "Tedesco (de)",
				"p": "Spagnolo (es)",
				"j": "Giapponese (ja)",
				"b": "Cinese semplificato (zh-CN)",
				"i": "Italiano (it)",
				"l": "Portoghese (pt)",
				"k": "Coreano (ko)",
				"o": "Russo (ru)",
				"a": "Arabo (ar)"
			},
			"pt": {
				"m": "Preferências",
				"e": "Notificações por e-mail",
				"n": "Receba relatórios semanais de benchmark",
				"r": "Alternar notificações",
				"c": "Modo escuro",
				"s": "Usar esquema de cores escuro",
				"q": "Alternar modo escuro",
				"d": "Idioma padrão",
				"f": "Inglês (en)",
				"g": "Francês (fr)",
				"h": "Alemão (de)",
				"p": "Espanhol (es)",
				"j": "Japonês (ja)",
				"b": "Chinês Simplificado (zh-CN)",
				"i": "Italiano (it)",
				"l": "Português (pt)",
				"k": "Coreano (ko)",
				"o": "Russo (ru)",
				"a": "Árabe (ar)"
			},
			"zh": {
				"m": "首选项",
				"e": "电子邮件通知",
				"n": "接收每周基准测试报告",
				"r": "切换通知",
				"c": "深色模式",
				"s": "使用深色方案",
				"q": "切换深色模式",
				"d": "默认语言",
				"f": "英语 (en)",
				"g": "法语 (fr)",
				"h": "德语 (de)",
				"p": "西班牙语 (es)",
				"j": "日语 (ja)",
				"b": "简体中文 (zh-CN)",
				"i": "意大利语 (it)",
				"l": "葡萄牙语 (pt)",
				"k": "韩语 (ko)",
				"o": "俄语 (ru)",
				"a": "阿拉伯语 (ar)"
			},
			"ja": {
				"m": "設定",
				"e": "メール通知",
				"n": "毎週のベンチマークレポートを受け取る",
				"r": "通知を切り替える",
				"c": "ダークモード",
				"s": "ダークカラースキームを使用する",
				"q": "ダークモードを切り替える",
				"d": "デフォルトの言語",
				"f": "英語 (en)",
				"g": "フランス語 (fr)",
				"h": "ドイツ語 (de)",
				"p": "スペイン語 (es)",
				"j": "日本語 (ja)",
				"b": "中国語（簡体字）（zh-CN）",
				"i": "イタリア語 (it)",
				"l": "ポルトガル語 (pt)",
				"k": "韓国語 (ko)",
				"o": "ロシア語 (ru)",
				"a": "アラビア語 (ar)"
			},
			"ko": {
				"m": "환경 설정",
				"e": "이메일 알림",
				"n": "주간 벤치마크 보고서 받기",
				"r": "알림 전환",
				"c": "다크 모드",
				"s": "다크 색상 테마 사용",
				"q": "다크 모드 전환",
				"d": "기본 언어",
				"f": "영어 (en)",
				"g": "프랑스어 (fr)",
				"h": "독일어 (de)",
				"p": "스페인어 (es)",
				"j": "일본어 (ja)",
				"b": "중국어 간체 (zh-CN)",
				"i": "이탈리아어 (it)",
				"l": "포르투갈어 (pt)",
				"k": "한국어 (ko)",
				"o": "러시아어 (ko)",
				"a": "아랍어 (ar)"
			},
			"ru": {
				"m": "Настройки",
				"e": "Уведомления по электронной почте",
				"n": "Получать еженедельные отчеты о бенчмарках",
				"r": "Переключить уведомления",
				"c": "Темная тема",
				"s": "Использовать темную цветовую схему",
				"q": "Переключить темную тему",
				"d": "Язык по умолчанию",
				"f": "Английский (en)",
				"g": "Французский (fr)",
				"h": "Немецкий (de)",
				"p": "Испанский (es)",
				"j": "Японский (ja)",
				"b": "Китайский упрощенный (zh-CN)",
				"i": "Итальянский (it)",
				"l": "Португальский (pt)",
				"k": "Корейский (ko)",
				"o": "Русский (ru)",
				"a": "Арабский (ar)"
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
var _tmpl$ = template(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"></h2><div class=space-y-4><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"></p><p class="text-xs text-muted-foreground"></p></div><button type=button class="h-6 w-11 rounded-full bg-primary transition-colors"><span class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform"></span></button></div><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"></p><p class="text-xs text-muted-foreground"></p></div><button type=button class="h-6 w-11 rounded-full bg-muted transition-colors"><span class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform"></span></button></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option>`);
function PreferencesSection() {
	const content = o(preferences_section_default);
	const languageId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$4 = _el$2.nextSibling.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$8 = _el$5.nextSibling, _el$9 = _el$4.nextSibling, _el$0 = _el$9.firstChild, _el$1 = _el$0.firstChild, _el$10 = _el$1.nextSibling, _el$11 = _el$0.nextSibling, _el$13 = _el$9.nextSibling.firstChild, _el$14 = _el$13.nextSibling, _el$15 = _el$14.firstChild, _el$16 = _el$15.nextSibling, _el$17 = _el$16.nextSibling, _el$18 = _el$17.nextSibling, _el$19 = _el$18.nextSibling, _el$20 = _el$19.nextSibling, _el$21 = _el$20.nextSibling, _el$22 = _el$21.nextSibling, _el$23 = _el$22.nextSibling, _el$24 = _el$23.nextSibling, _el$25 = _el$24.nextSibling;
		insert(_el$2, () => content().m);
		insert(_el$6, () => content().e);
		insert(_el$7, () => content().n);
		insert(_el$1, () => content().c);
		insert(_el$10, () => content().s);
		setAttribute(_el$13, "for", languageId);
		insert(_el$13, () => content().d);
		setAttribute(_el$14, "id", languageId);
		insert(_el$15, () => content().f);
		insert(_el$16, () => content().g);
		insert(_el$17, () => content().h);
		insert(_el$18, () => content().p);
		insert(_el$19, () => content().j);
		insert(_el$20, () => content().b);
		insert(_el$21, () => content().i);
		insert(_el$22, () => content().l);
		insert(_el$23, () => content().k);
		insert(_el$24, () => content().o);
		insert(_el$25, () => content().a);
		effect((_p$) => {
			var _v$ = content().r.value, _v$2 = content().q.value;
			_v$ !== _p$.e && setAttribute(_el$8, "aria-label", _p$.e = _v$);
			_v$2 !== _p$.t && setAttribute(_el$11, "aria-label", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
}
export { PreferencesSection as default };

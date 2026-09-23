import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, openBlock, ref, renderList, shallowRef, toDisplayString, toValue, watch } from "vue";
var preferences_section_default = {
	key: "preferences-section",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"g": "Preferences",
				"f": "Email Notifications",
				"e": "Receive weekly benchmark reports",
				"i": "Toggle notifications",
				"b": "Dark Mode",
				"a": "Use dark color scheme",
				"h": "Toggle dark mode",
				"c": "Default Language",
				"d": [
					"English (en)",
					"French (fr)",
					"Spanish (es)",
					"German (de)",
					"Italian (it)",
					"Portuguese (pt)",
					"Chinese (zh)",
					"Japanese (ja)",
					"Korean (ko)",
					"Russian (ru)"
				]
			},
			"fr": {
				"g": "Préférences",
				"f": "Notifications e-mail",
				"e": "Recevoir les rapports hebdomadaires",
				"i": "Activer/désactiver les notifications",
				"b": "Mode sombre",
				"a": "Utiliser le thème sombre",
				"h": "Basculer le mode sombre",
				"c": "Langue par défaut",
				"d": [
					"Anglais (en)",
					"Français (fr)",
					"Espagnol (es)",
					"Allemand (de)",
					"Italien (it)",
					"Portugais (pt)",
					"Chinois (zh)",
					"Japonais (ja)",
					"Coréen (ko)",
					"Russe (ru)"
				]
			},
			"es": {
				"g": "Preferencias",
				"f": "Notificaciones por correo electrónico",
				"e": "Recibir informes semanales de benchmark",
				"i": "Alternar notificaciones",
				"b": "Modo oscuro",
				"a": "Usar esquema de colores oscuros",
				"h": "Alternar modo oscuro",
				"c": "Idioma predeterminado",
				"d": [
					"Inglés (en)",
					"Francés (fr)",
					"Español (es)",
					"Alemán (de)",
					"Italiano (it)",
					"Portugués (pt)",
					"Chino (zh)",
					"Japonés (ja)",
					"Coreano (ko)",
					"Ruso (ru)"
				]
			},
			"de": {
				"g": "Einstellungen",
				"f": "E-Mail-Benachrichtigungen",
				"e": "Erhalten Sie wöchentliche Benchmark-Berichte",
				"i": "Benachrichtigungen umschalten",
				"b": "Dunkelmodus",
				"a": "Dunkles Farbschema verwenden",
				"h": "Dunkelmodus umschalten",
				"c": "Standardsprache",
				"d": [
					"Englisch (en)",
					"Französisch (fr)",
					"Spanisch (es)",
					"Deutsch (de)",
					"Italienisch (it)",
					"Portugiesisch (pt)",
					"Chinesisch (zh)",
					"Japanisch (ja)",
					"Koreanisch (ko)",
					"Russisch (ru)"
				]
			},
			"it": {
				"g": "Preferenze",
				"f": "Notifiche e-mail",
				"e": "Ricevi rapporti settimanali sui benchmark",
				"i": "Attiva/disattiva notifiche",
				"b": "Modalità scura",
				"a": "Usa schema colori scuri",
				"h": "Attiva/disattiva modalità scura",
				"c": "Lingua predefinita",
				"d": [
					"Inglese (en)",
					"Francese (fr)",
					"Spagnolo (es)",
					"Tedesco (de)",
					"Italiano (it)",
					"Portoghese (pt)",
					"Cinese (zh)",
					"Giapponese (ja)",
					"Coreano (ko)",
					"Russo (ru)"
				]
			},
			"pt": {
				"g": "Preferências",
				"f": "Notificações por e-mail",
				"e": "Receber relatórios semanais de benchmark",
				"i": "Alternar notificações",
				"b": "Modo escuro",
				"a": "Usar esquema de cores escuro",
				"h": "Alternar modo escuro",
				"c": "Idioma padrão",
				"d": [
					"Inglês (en)",
					"Francês (fr)",
					"Espanhol (es)",
					"Alemão (de)",
					"Italiano (it)",
					"Português (pt)",
					"Chinês (zh)",
					"Japonês (ja)",
					"Coreano (ko)",
					"Russo (ru)"
				]
			},
			"zh": {
				"g": "偏好设置",
				"f": "邮件通知",
				"e": "接收每周基准报告",
				"i": "切换通知",
				"b": "深色模式",
				"a": "使用深色配色方案",
				"h": "切换深色模式",
				"c": "默认语言",
				"d": [
					"英语 (en)",
					"法语 (fr)",
					"西班牙语 (es)",
					"德语 (de)",
					"意大利语 (it)",
					"葡萄牙语 (pt)",
					"中文 (zh)",
					"日语 (ja)",
					"韩语 (ko)",
					"俄语 (ru)"
				]
			},
			"ja": {
				"g": "設定",
				"f": "メール通知",
				"e": "毎週のベンチマークレポートを受け取る",
				"i": "通知を切り替える",
				"b": "ダークモード",
				"a": "ダークカラーの配色を使用する",
				"h": "ダークモードを切り替える",
				"c": "デフォルトの言語",
				"d": [
					"英語 (en)",
					"フランス語 (fr)",
					"スペイン語 (es)",
					"ドイツ語 (de)",
					"イタリア語 (it)",
					"ポルトガル語 (pt)",
					"中国語 (zh)",
					"日本語 (ja)",
					"韓国語 (ko)",
					"ロシア語 (ru)"
				]
			},
			"ko": {
				"g": "환경 설정",
				"f": "이메일 알림",
				"e": "주간 벤치마크 보고서 받기",
				"i": "알림 전환",
				"b": "다크 모드",
				"a": "어두운 색상 테마 사용",
				"h": "다크 모드 전환",
				"c": "기본 언어",
				"d": [
					"영어 (en)",
					"프랑스어 (fr)",
					"스페인어 (es)",
					"독일어 (de)",
					"이탈리아어 (it)",
					"포르투갈어 (pt)",
					"중국어 (zh)",
					"일본어 (ja)",
					"한국어 (ko)",
					"러시아어 (ko)"
				]
			},
			"ru": {
				"g": "Настройки",
				"f": "Электронные уведомления",
				"e": "Получать еженедельные отчеты о бенчмарках",
				"i": "Переключить уведомления",
				"b": "Темная тема",
				"a": "Использовать темную цветовую схему",
				"h": "Переключить темную тему",
				"c": "Язык по умолчанию",
				"d": [
					"Английский (en)",
					"Французский (fr)",
					"Испанский (es)",
					"Немецкий (de)",
					"Итальянский (it)",
					"Португальский (pt)",
					"Китайский (zh)",
					"Японский (ja)",
					"Корейский (ko)",
					"Русский (ru)"
				]
			}
		}
	}
};
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	if (Object.assign(l, {
		render: c,
		toString: () => String(o.value ?? ""),
		valueOf: () => o.value,
		[Symbol.toPrimitive]: () => o.value,
		toJSON: () => o.value,
		get raw() {
			return o.value;
		},
		set raw(e) {
			o.value = e;
		},
		get value() {
			return o.value;
		},
		use(e) {
			return n$1({
				value: o.value,
				children: () => s(e),
				additionalProps: a
			});
		},
		__update(e) {
			s = e.render, this.raw = e.raw;
		},
		...a
	}), r != null) {
		let e = Object(r), t = Object.getPrototypeOf(e);
		for (let n of Object.getOwnPropertyNames(t)) {
			if (n === "constructor" || n in l) continue;
			let t = e[n];
			typeof t == "function" && Object.defineProperty(l, n, {
				value: t.bind(r),
				writable: !0,
				configurable: !0
			});
		}
	}
	return markRaw(l);
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
var T = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, { children: r, ...i }) => {
		let a = (t) => n$1({
			...i,
			value: t,
			children: t
		}), c = a(r);
		if (typeof r != "function") return c;
		let l = (...e) => {
			let t = r(...e);
			return a(t);
		};
		Object.setPrototypeOf(l, Object.getPrototypeOf(c));
		for (let e of Object.getOwnPropertyNames(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		return markRaw(l);
	}
};
var D = fallbackPlugin;
var k = fallbackPlugin;
var A = fallbackPlugin;
var j = /* @__PURE__ */ new Map();
var M = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (j.has(n)) return j.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(e ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		T,
		D,
		k,
		A
	];
	return j.set(n, r), r;
};
var n = (n, r) => {
	return getDictionary(n, r, M(typeof r == "object" && r ? r.locale : r));
};
var i = Symbol("intlayer");
var g = (e, t) => t.reduce((e, t) => e?.[t], e);
var _ = (e) => typeof e == "object" && !!e;
var v = (e) => typeof e == "function" || _(e) && ("render" in e || "setup" in e);
var y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e;
var b = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : v(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
}));
var x = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return b(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
});
var S = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, S = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), C = computed(() => {
		return {
			selector: void 0,
			locale: a === void 0 ? void 0 : toValue(a)
		};
	}), w = computed(() => C.value.locale ?? S.value), T = shallowRef({});
	watch([
		() => toValue(r),
		() => w.value,
		() => C.value.selector
	], ([t, n$2, r]) => {
		T.value = r ? n(t, {
			...r,
			locale: n$2
		}) : n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let E = (e) => new Proxy({}, {
		get(t, r, i) {
			let a = computed(() => g(T.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(t, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return b(() => a.value);
			let o = e.concat(r), s = g(T.value, o);
			if (s === void 0 || _(s) && !v(s)) return E(o);
			if (y(s)) return x(computed(() => g(T.value, o)));
			if (typeof s == "function") {
				let t = g(T.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => g(T.value, o)?.(...e);
			}
			let c = computed(() => g(T.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = g(T.value, e);
			return _(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return E([]);
};
var PreferencesSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "PreferencesSection",
	setup(__props, { expose: __expose }) {
		__expose();
		const { g: title, f: notificationsTitle, e: notificationsDescription, i: toggleNotifications, b: darkModeTitle, a: darkModeDescription, h: toggleDarkMode, c: languageLabel, d: languages } = S(preferences_section_default);
		const __returned__ = {
			title,
			notificationsTitle,
			notificationsDescription,
			toggleNotifications,
			darkModeTitle,
			darkModeDescription,
			toggleDarkMode,
			languageLabel,
			languages
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
var _hoisted_1 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_2 = { class: "mb-4 text-lg font-semibold text-foreground" };
var _hoisted_3 = { class: "space-y-4" };
var _hoisted_4 = { class: "flex items-center justify-between" };
var _hoisted_5 = { class: "text-sm font-medium text-foreground" };
var _hoisted_6 = { class: "text-xs text-muted-foreground" };
var _hoisted_7 = ["aria-label"];
var _hoisted_8 = { class: "flex items-center justify-between" };
var _hoisted_9 = { class: "text-sm font-medium text-foreground" };
var _hoisted_10 = { class: "text-xs text-muted-foreground" };
var _hoisted_11 = ["aria-label"];
var _hoisted_12 = {
	for: "language",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_13 = {
	id: "language",
	class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString($setup.title), 1), createElementVNode("div", _hoisted_3, [
		createElementVNode("div", _hoisted_4, [createElementVNode("div", null, [createElementVNode("p", _hoisted_5, toDisplayString($setup.notificationsTitle), 1), createElementVNode("p", _hoisted_6, toDisplayString($setup.notificationsDescription), 1)]), createElementVNode("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-primary transition-colors",
			"aria-label": $setup.toggleNotifications
		}, [..._cache[0] || (_cache[0] = [createElementVNode("span", { class: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, null, -1)])], 8, _hoisted_7)]),
		createElementVNode("div", _hoisted_8, [createElementVNode("div", null, [createElementVNode("p", _hoisted_9, toDisplayString($setup.darkModeTitle), 1), createElementVNode("p", _hoisted_10, toDisplayString($setup.darkModeDescription), 1)]), createElementVNode("button", {
			type: "button",
			class: "h-6 w-11 rounded-full bg-muted transition-colors",
			"aria-label": $setup.toggleDarkMode
		}, [..._cache[1] || (_cache[1] = [createElementVNode("span", { class: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, null, -1)])], 8, _hoisted_11)]),
		createElementVNode("div", null, [createElementVNode("label", _hoisted_12, toDisplayString($setup.languageLabel), 1), createElementVNode("select", _hoisted_13, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.languages, (l) => {
			return openBlock(), createElementBlock("option", { key: l }, toDisplayString(l), 1);
		}), 128))])])
	])]);
}
var PreferencesSection_default = _plugin_vue_export_helper_default(PreferencesSection_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/settings/PreferencesSection.vue"]]);
export { PreferencesSection_default as default };

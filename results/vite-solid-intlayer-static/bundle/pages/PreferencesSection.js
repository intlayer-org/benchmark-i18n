import { Dynamic, effect, insert, setAttribute, template } from "solid-js/web";
import { createContext, createMemo, createUniqueId, useContext } from "solid-js";
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
var e = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
};
var t = (n) => {
	if (typeof n == "string") return n;
	let { type: r, props: i } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let n = [], { children: r } = e.props;
			return Object.keys(r ?? {}).forEach((e) => {
				n.push(t(r?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: n
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(n);
	return Dynamic({
		component: r ?? "span",
		...i,
		children: i.children
	});
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
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
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
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, S$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { plugins: a, ...o }) => e({
		...o,
		value: o.children,
		children: o.children
	})
}, C = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? fallbackPlugin : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (a, { plugins: o, ...s }) => e({
		...s,
		value: "[[solid-element]]",
		children: typeof Node < "u" && a instanceof Node ? a : t(a)
	})
}, T = fallbackPlugin, D = fallbackPlugin, O = fallbackPlugin, k = /* @__PURE__ */ new Map(), A = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (k.has(n)) return k.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		S$1,
		C,
		T,
		D,
		O
	];
	return k.set(n, r), r;
};
var n = (n, r) => getDictionary(n, r, A(r));
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
}, localeStorageOptions = {
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
}, a = getLocaleFromStorageClient(localeStorageOptions), y = createContext({
	locale: () => a ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var i = (i, a) => {
	let o = useContext(y) ?? {};
	return createMemo(() => n(i, a ?? o?.locale?.()));
};
var _tmpl$ = template(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"></h2><div class=space-y-4><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"></p><p class="text-xs text-muted-foreground"></p></div><button type=button class="h-6 w-11 rounded-full bg-primary transition-colors"><span class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform"></span></button></div><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"></p><p class="text-xs text-muted-foreground"></p></div><button type=button class="h-6 w-11 rounded-full bg-muted transition-colors"><span class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform"></span></button></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option></option><option>`);
function PreferencesSection() {
	const content = i(preferences_section_default);
	const languageId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$4 = _el$2.nextSibling.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$8 = _el$5.nextSibling, _el$9 = _el$4.nextSibling, _el$0 = _el$9.firstChild, _el$1 = _el$0.firstChild, _el$10 = _el$1.nextSibling, _el$11 = _el$0.nextSibling, _el$13 = _el$9.nextSibling.firstChild, _el$14 = _el$13.nextSibling, _el$15 = _el$14.firstChild, _el$16 = _el$15.nextSibling, _el$17 = _el$16.nextSibling, _el$18 = _el$17.nextSibling, _el$19 = _el$18.nextSibling, _el$20 = _el$19.nextSibling, _el$21 = _el$20.nextSibling, _el$22 = _el$21.nextSibling, _el$23 = _el$22.nextSibling, _el$24 = _el$23.nextSibling, _el$25 = _el$24.nextSibling;
		insert(_el$2, () => content().preferences);
		insert(_el$6, () => content().emailNotifications);
		insert(_el$7, () => content().receiveWeeklyBenchmarkReports);
		insert(_el$1, () => content().darkMode);
		insert(_el$10, () => content().useDarkColorScheme);
		setAttribute(_el$13, "for", languageId);
		insert(_el$13, () => content().defaultLanguage);
		setAttribute(_el$14, "id", languageId);
		insert(_el$15, () => content().englishEn);
		insert(_el$16, () => content().frenchFr);
		insert(_el$17, () => content().germanDe);
		insert(_el$18, () => content().spanishEs);
		insert(_el$19, () => content().japaneseJa);
		insert(_el$20, () => content().chineseSimplifiedZhCn);
		insert(_el$21, () => content().italianIt);
		insert(_el$22, () => content().portuguesePt);
		insert(_el$23, () => content().koreanKo);
		insert(_el$24, () => content().russianRu);
		insert(_el$25, () => content().arabicAr);
		effect((_p$) => {
			var _v$ = content().toggleNotifications.value, _v$2 = content().toggleDarkMode.value;
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

import { Dynamic, createComponent, insert, template } from "solid-js/web";
import { createContext, createMemo, useContext } from "solid-js";
var content$1 = {
	"de": () => import("./de-DZipBFjH.js").then((m) => m.default),
	"en": () => import("./en-DZPZ2txV.js").then((m) => m.default),
	"es": () => import("./es-Dxf8kn5j.js").then((m) => m.default),
	"fr": () => import("./fr-28g0qHIc.js").then((m) => m.default),
	"it": () => import("./it-Bu7nG6Xh.js").then((m) => m.default),
	"ja": () => import("./ja-C91cGmni.js").then((m) => m.default),
	"ko": () => import("./ko-CA0t-WnI.js").then((m) => m.default),
	"pt": () => import("./pt-2TONdFFY.js").then((m) => m.default),
	"ru": () => import("./ru-Cw-vFwJX.js").then((m) => m.default),
	"zh": () => import("./zh-YNKlOdio.js").then((m) => m.default)
};
var e$1 = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
};
var t$1 = (n) => {
	if (typeof n == "string") return n;
	let { type: r, props: i } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let n = [], { children: r } = e.props;
			return Object.keys(r ?? {}).forEach((e) => {
				n.push(t$1(r?.[e]));
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
};
var S = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { plugins: a, ...o }) => e$1({
		...o,
		value: o.children,
		children: o.children
	})
};
var C = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? fallbackPlugin : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (a, { plugins: o, ...s }) => e$1({
		...s,
		value: "[[solid-element]]",
		children: typeof Node < "u" && a instanceof Node ? a : t$1(a)
	})
};
var T = fallbackPlugin;
var D = fallbackPlugin;
var O = fallbackPlugin;
var k = /* @__PURE__ */ new Map();
var A = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (k.has(n)) return k.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		S,
		C,
		T,
		D,
		O
	];
	return k.set(n, r), r;
};
var n$1 = (n, r) => getDictionary(n, r, A(r));
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
};
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
var a$1 = getLocaleFromStorageClient(localeStorageOptions);
var y = createContext({
	locale: () => a$1 ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var i = (i, a) => {
	let o = useContext(y) ?? {};
	return createMemo(() => n$1(i, a ?? o?.locale?.()));
};
var e = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return { read() {
		if (t === "pending") throw r;
		if (t === "error") throw n;
		return n;
	} };
};
var t = /* @__PURE__ */ new Map();
var n = (n, r) => (t.has(n) || t.set(n, e(r)), t.get(n).read());
var a = (a, o, s) => {
	let { locale: c } = useContext(y) ?? {}, l = internationalization.defaultLocale, u = s ?? c?.() ?? l;
	return i(n(`${String(o)}.${u}`, a[u]?.()), u);
};
var content = {
	"de": () => import("./de-D-3dRX0-.js").then((m) => m.default),
	"en": () => import("./en-BvSJVZrM.js").then((m) => m.default),
	"es": () => import("./es-Cap_wKuL.js").then((m) => m.default),
	"fr": () => import("./fr-x_XBoEM9.js").then((m) => m.default),
	"it": () => import("./it-D8U5da9I.js").then((m) => m.default),
	"ja": () => import("./ja-Cv5luclr.js").then((m) => m.default),
	"ko": () => import("./ko-BKmHU8M4.js").then((m) => m.default),
	"pt": () => import("./pt-gOzKjx1S.js").then((m) => m.default),
	"ru": () => import("./ru-Dy3xWoJx.js").then((m) => m.default),
	"zh": () => import("./zh-VyB3A78f.js").then((m) => m.default)
};
var _tmpl$$1 = template(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">`);
function MockBanner() {
	const content$2 = a(content, "mock-banner");
	return (() => {
		var _el$ = _tmpl$$1();
		insert(_el$, () => content$2().thisPageContainsMockData);
		return _el$;
	})();
}
var _tmpl$ = template(`<h1 class="mb-2 text-3xl font-bold text-foreground">`);
var _tmpl$2 = template(`<p class="mb-10 text-muted-foreground">`);
function TeamHeader() {
	const content = a(content$1, "team-header");
	return [
		createComponent(MockBanner, {}),
		(() => {
			var _el$ = _tmpl$();
			insert(_el$, () => content().ourTeam);
			return _el$;
		})(),
		(() => {
			var _el$2 = _tmpl$2();
			insert(_el$2, () => content().meetThePeopleBehindI18n);
			return _el$2;
		})()
	];
}
export { TeamHeader as default };
var de_default = {
	key: "mock-banner",
	content: { "a": "⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung." }
};
export { de_default as default };
var de_default = {
	key: "team-header",
	content: {
		"b": "Unser Team",
		"a": "Lernen Sie die Menschen hinter dem i18n Benchmark kennen. Ein vielfältiges Team, das die gemeinsame Leidenschaft für großartige Entwicklertools verbindet."
	}
};
export { de_default as default };
var en_default = {
	key: "mock-banner",
	content: { "a": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." }
};
export { en_default as default };
var en_default = {
	key: "team-header",
	content: {
		"b": "Our Team",
		"a": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
	}
};
export { en_default as default };
var es_default = {
	key: "mock-banner",
	content: { "a": "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real." }
};
export { es_default as default };
var es_default = {
	key: "team-header",
	content: {
		"b": "Nuestro equipo",
		"a": "Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo."
	}
};
export { es_default as default };
var fr_default = {
	key: "team-header",
	content: {
		"b": "Notre Équipe",
		"a": "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement."
	}
};
export { fr_default as default };
var fr_default = {
	key: "mock-banner",
	content: { "a": "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." }
};
export { fr_default as default };
var it_default = {
	key: "team-header",
	content: {
		"b": "Il nostro team",
		"a": "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per i grandi strumenti per sviluppatori."
	}
};
export { it_default as default };
var it_default = {
	key: "mock-banner",
	content: { "a": "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." }
};
export { it_default as default };
var ja_default = {
	key: "team-header",
	content: {
		"b": "私たちのチーム",
		"a": "i18nベンチマークを支える人々を紹介します。優れた開発者ツールへの情熱を共有する多様なチームです。"
	}
};
export { ja_default as default };
var ja_default = {
	key: "mock-banner",
	content: { "a": "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。" }
};
export { ja_default as default };
var ko_default = {
	key: "mock-banner",
	content: { "a": "⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." }
};
export { ko_default as default };
var ko_default = {
	key: "team-header",
	content: {
		"b": "우리 팀",
		"a": "i18n 벤치마크를 만든 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 공통된 열정으로 뭉친 다양한 팀입니다."
	}
};
export { ko_default as default };
var pt_default = {
	key: "team-header",
	content: {
		"b": "Nossa Equipe",
		"a": "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhata por ótimas ferramentas de desenvolvedor."
	}
};
export { pt_default as default };
var pt_default = {
	key: "mock-banner",
	content: { "a": "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real." }
};
export { pt_default as default };
var ru_default = {
	key: "team-header",
	content: {
		"b": "Наша команда",
		"a": "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам разработки."
	}
};
export { ru_default as default };
var ru_default = {
	key: "mock-banner",
	content: { "a": "⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой." }
};
export { ru_default as default };
var zh_default = {
	key: "mock-banner",
	content: { "a": "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务 or 服务无关。" }
};
export { zh_default as default };
var zh_default = {
	key: "team-header",
	content: {
		"b": "我们的团队",
		"a": "见见 i18n 基准测试背后的人。一个多元化的团队，因对出色开发人员工具的共同热情而团结在一起。"
	}
};
export { zh_default as default };

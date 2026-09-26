import { createComponent, insert, template } from "solid-js/web";
import { For, createContext, createMemo, lazy, useContext } from "solid-js";
var open_positions_default = {
	key: "open-positions",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"p": "Senior Frontend Engineer",
				"n": "Remote",
				"j": "Engineering",
				"c": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
				"b": "Backend Engineer",
				"f": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
				"q": "Technical Writer",
				"h": "Documentation",
				"e": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
				"g": "DevRel Engineer",
				"o": "San Francisco / Remote",
				"d": "Community",
				"i": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
				"m": "QA Engineer",
				"k": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
				"l": "Open Positions",
				"a": "Apply Now"
			},
			"fr": {
				"p": "Ingénieur Frontend Senior",
				"n": "À distance",
				"j": "Ingénierie",
				"c": "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.",
				"b": "Ingénieur Backend",
				"f": "Concevoir et mettre à l’échelle notre infrastructure de benchmarking cloud gérant des milliers d’exécutions automatisées chaque jour.",
				"q": "Rédacteur Technique",
				"h": "Documentation",
				"e": "Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.",
				"g": "Ingénieur DevRel",
				"o": "San Francisco / À distance",
				"d": "Communauté",
				"i": "Interagir avec la communauté i18n par des conférences, des ateliers, des articles de blog et des contributions open source.",
				"m": "Ingénieur QA",
				"k": "Assurer l'exactitude et la fiabilité des résultats de benchmark grâce à des tests et des validations rigoureux.",
				"l": "Postes Ouverts",
				"a": "Postuler Maintenant"
			},
			"es": {
				"p": "Ingeniero Frontend Senior",
				"n": "Remoto",
				"j": "Ingeniería",
				"c": "Cree y mantenga nuestro panel de benchmarking y herramientas de desarrollo utilizando React, TypeScript y Vite.",
				"b": "Ingeniero Backend",
				"f": "Diseñe y escale nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.",
				"q": "Redactor Técnico",
				"h": "Documentación",
				"e": "Cree guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.",
				"g": "Ingeniero DevRel",
				"o": "San Francisco / Remoto",
				"d": "Comunidad",
				"i": "Participe con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
				"m": "Ingeniero QA",
				"k": "Garantice la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.",
				"l": "Posiciones abiertas",
				"a": "Postular ahora"
			},
			"de": {
				"p": "Senior Frontend Engineer",
				"n": "Remote",
				"j": "Engineering",
				"c": "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
				"b": "Backend Engineer",
				"f": "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.",
				"q": "Technical Writer",
				"h": "Dokumentation",
				"e": "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
				"g": "DevRel Engineer",
				"o": "San Francisco / Remote",
				"d": "Community",
				"i": "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
				"m": "QA Engineer",
				"k": "Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.",
				"l": "Offene Stellen",
				"a": "Jetzt bewerben"
			},
			"it": {
				"p": "Ingegnere Frontend Senior",
				"n": "Remoto",
				"j": "Ingegneria",
				"c": "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
				"b": "Backend Engineer",
				"f": "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
				"q": "Scrittore tecnico",
				"h": "Documentazione",
				"e": "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
				"g": "Ingegnere DevRel",
				"o": "San Francisco / Remoto",
				"d": "Comunità",
				"i": "Interagisci con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
				"m": "Ingegnere QA",
				"k": "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
				"l": "Posizioni aperte",
				"a": "Candidati ora"
			},
			"pt": {
				"p": "Engenheiro Frontend Sênior",
				"n": "Remoto",
				"j": "Engenharia",
				"c": "Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
				"b": "Engenheiro Backend",
				"f": "Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.",
				"q": "Escritor Técnico",
				"h": "Documentação",
				"e": "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
				"g": "Engenheiro DevRel",
				"o": "San Francisco / Remoto",
				"d": "Comunidade",
				"i": "Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
				"m": "Engenheiro de QA",
				"k": "Garanta a precisão e a confiabilidade dos resultados do benchmark por meio de testes e validação rigorosos.",
				"l": "Vagas abertas",
				"a": "Candidatar-se agora"
			},
			"zh": {
				"p": "高级前端工程师",
				"n": "远程",
				"j": "工程",
				"c": "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
				"b": "后端工程师",
				"f": "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。",
				"q": "技术文档工程师",
				"h": "文档",
				"e": "为我们的基准测试平台创建全面的指南、API 参考和教程。",
				"g": "开发者关系工程师",
				"o": "旧金山 / 远程",
				"d": "社区",
				"i": "通过演讲、工作坊、博客文章和开源贡献与 i18n 社区互动。",
				"m": "质量保证工程师",
				"k": "通过严格的测试和验证，确保基准测试结果的准确性和可靠性。",
				"l": "开放职位",
				"a": "现在申请"
			},
			"ja": {
				"p": "シニアフロントエンドエンジニア",
				"n": "リモート",
				"j": "エンジニアリング",
				"c": "React、TypeScript、およびViteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。",
				"b": "バックエンドエンジニア",
				"f": "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールします。",
				"q": "テクニカルライター",
				"h": "ドキュメント",
				"e": "ベンチマークプラットフォームの包括的なガイド、APIリファレンス、およびチュートリアルを作成します。",
				"g": "DevRelエンジニア",
				"o": "サンフランシスコ / リモート",
				"d": "コミュニティ",
				"i": "トーク、ワークショップ、ブログ投稿、およびオープンソースへの貢献を通じて、i18nコミュニティと交流します。",
				"m": "QAエンジニア",
				"k": "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
				"l": "募集中の職種",
				"a": "今すぐ応募"
			},
			"ko": {
				"p": "시니어 프론트엔드 엔지니어",
				"n": "원격",
				"j": "엔지니어링",
				"c": "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
				"b": "백엔드 엔지니어",
				"f": "매일 수천 건의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
				"q": "테크니컬 라이터",
				"h": "문서",
				"e": "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 만듭니다.",
				"g": "DevRel 엔지니어",
				"o": "샌프란시스코 / 원격",
				"d": "커뮤니티",
				"i": "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하십시오.",
				"m": "QA 엔지니어",
				"k": "엄격한 테스트 및 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
				"l": "채용 중인 직무",
				"a": "지금 지원하기"
			},
			"ru": {
				"p": "Старший фронтенд-инженер",
				"n": "Удаленно",
				"j": "Разработка",
				"c": "Создание и поддержка нашего дашборда для бенчмаркинга и инструментов разработки с использованием React, TypeScript и Vite.",
				"b": "Бэкенд-инженер",
				"f": "Проектирование и масштабирование нашей облачной инфраструктуры для бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.",
				"q": "Технический писатель",
				"h": "Документация",
				"e": "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы бенчмаркинга.",
				"g": "DevRel-инженер",
				"o": "Сан-Франциско / Удаленно",
				"d": "Сообщество",
				"i": "Взаимодействие с сообществом i18n посредством выступлений, семинаров, постов в блогах и вклада в open source.",
				"m": "QA-инженер",
				"k": "Обеспечение точности и надежности результатов бенчмарков путем тщательного тестирования и валидации.",
				"l": "Открытые вакансии",
				"a": "Подать заявку"
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
var isStoredLocaleCached = false;
var storedLocale;
var getCachedLocaleFromStorageClient = () => {
	if (typeof window === "undefined") return getLocaleFromStorageClient(localeStorageOptions);
	if (!isStoredLocaleCached) {
		storedLocale = getLocaleFromStorageClient(localeStorageOptions);
		isStoredLocaleCached = true;
	}
	return storedLocale;
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
var t = ({ children: t, value: n, additionalProps: r }) => {
	let i = [t];
	if (i.value = n, r) for (let e in r) i[e] = r[e];
	return Object.setPrototypeOf(i, getIntlayerNodePrototype(n, Array.prototype)), i;
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
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin,
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
var getDictionary = (dictionary, localeOrSelector, plugins) => {
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
var T = null;
var E = null;
T?.catch(() => {}), E?.catch(() => {});
var D = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, r) => {
		return t({
			value: r.children,
			children: r.children
		});
	}
};
var O = fallbackPlugin;
var A = fallbackPlugin;
lazy(() => T.then((e) => ({ default: e.MarkdownRenderer })));
lazy(() => T.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var P = fallbackPlugin;
lazy(() => E.then((e) => ({ default: e })));
var I = fallbackPlugin;
var L = /* @__PURE__ */ new Map();
var R = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (L.has(n)) return L.get(n);
	let r = [
		D,
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(e ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		O,
		A,
		P,
		I
	].filter((e) => e !== fallbackPlugin);
	return L.set(n, r), r;
};
var n = (n, r) => {
	return getDictionary(n, r, R(typeof r == "object" && r ? r.locale : r));
};
var o$1 = getCachedLocaleFromStorageClient;
var b = createContext({
	locale: () => o$1() ?? internationalization?.defaultLocale,
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
var _tmpl$ = template(`<h2 class="mb-6 text-2xl font-bold text-foreground">`);
var _tmpl$2 = template(`<div class=space-y-4>`);
var _tmpl$3 = template(`<div class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"><div><h3 class="text-base font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground"></p><div class="mt-2 flex gap-2"><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span></div></div><button type=button class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">`);
function OpenPositions() {
	const content = o(open_positions_default);
	const openings = () => [
		{
			title: content().p.value,
			location: content().n.value,
			type: "Full-time",
			dept: content().j.value,
			desc: content().c.value
		},
		{
			title: content().b.value,
			location: content().n.value,
			type: "Full-time",
			dept: content().j.value,
			desc: content().f.value
		},
		{
			title: content().q.value,
			location: content().n.value,
			type: "Part-time",
			dept: content().h.value,
			desc: content().e.value
		},
		{
			title: content().g.value,
			location: content().o.value,
			type: "Full-time",
			dept: content().d.value,
			desc: content().i.value
		},
		{
			title: content().m.value,
			location: content().n.value,
			type: "Full-time",
			dept: content().j.value,
			desc: content().k.value
		}
	];
	return [(() => {
		var _el$ = _tmpl$();
		insert(_el$, () => content().l);
		return _el$;
	})(), (() => {
		var _el$2 = _tmpl$2();
		insert(_el$2, createComponent(For, {
			get each() {
				return openings();
			},
			children: (o) => (() => {
				var _el$3 = _tmpl$3(), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$8 = _el$6.nextSibling.firstChild, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$4.nextSibling;
				insert(_el$5, () => o.title);
				insert(_el$6, () => o.desc);
				insert(_el$8, () => o.dept);
				insert(_el$9, () => o.location);
				insert(_el$0, () => o.type);
				insert(_el$1, () => content().a);
				return _el$3;
			})()
		}));
		return _el$2;
	})()];
}
export { OpenPositions as default };

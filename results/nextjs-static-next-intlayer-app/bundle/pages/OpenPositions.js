import { Fragment, createContext, createElement, isValidElement, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var open_positions_default = {
	key: "open-positions",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"r": "Senior Frontend Engineer",
				"c": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
				"b": "Backend Engineer",
				"f": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
				"s": "Technical Writer",
				"e": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
				"g": "DevRel Engineer",
				"q": "San Francisco / Remote",
				"i": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
				"o": "QA Engineer",
				"k": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
				"m": "Open Positions",
				"a": "Apply Now",
				"p": "Remote",
				"l": "Full-time",
				"n": "Part-time",
				"j": "Engineering",
				"h": "Documentation",
				"d": "Community"
			},
			"fr": {
				"r": "Ingénieur Frontend Senior",
				"c": "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement utilisant React, TypeScript et Vite.",
				"b": "Ingénieur Backend",
				"f": "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de lancements automatisés par jour.",
				"s": "Rédacteur Technique",
				"e": "Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.",
				"g": "Ingénieur DevRel",
				"q": "San Francisco / Télétravail",
				"i": "S'engager avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.",
				"o": "Ingénieur QA",
				"k": "Assurer la précision et la fiabilité des résultats de benchmark via des tests rigoureux et une validation.",
				"m": "Postes Ouverts",
				"a": "Postuler Maintenant",
				"p": "Télétravail",
				"l": "Temps plein",
				"n": "Temps partiel",
				"j": "Ingénierie",
				"h": "Documentation",
				"d": "Communauté"
			},
			"es": {
				"r": "Ingeniero Frontend Principal",
				"c": "Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo usando React, TypeScript y Vite.",
				"b": "Ingeniero Backend",
				"f": "Diseñar y escalar nuestra infraestructura de benchmarking en la nube manejando miles de ejecuciones automatizadas diarias.",
				"s": "Redactor Técnico",
				"e": "Crear guías completas, referencias API y tutoriales para nuestra plataforma de benchmarking.",
				"g": "Ingeniero DevRel",
				"q": "San Francisco / Remoto",
				"i": "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
				"o": "Ingeniero QA",
				"k": "Asegurar la precisión y fiabilidad de los resultados de benchmark a través de pruebas y validaciones rigurosas.",
				"m": "Puestos Abiertos",
				"a": "Postular Ahora",
				"p": "Remoto",
				"l": "Tiempo completo",
				"n": "Tiempo parcial",
				"j": "Ingeniería",
				"h": "Documentación",
				"d": "Comunidad"
			},
			"de": {
				"r": "Senior Frontend-Entwickler",
				"c": "Entwickeln und pflegen Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
				"b": "Backend-Entwickler",
				"f": "Entwurf und Skalierung unserer Cloud-Benchmarking-Infrastruktur für Tausende von täglichen automatisierten Durchläufen.",
				"s": "Technischer Redakteur",
				"e": "Erstellen Sie umfassende Anleitungen, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
				"g": "DevRel-Ingenieur",
				"q": "San Francisco / Remote",
				"i": "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
				"o": "QA-Ingenieur",
				"k": "Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.",
				"m": "Offene Stellen",
				"a": "Jetzt bewerben",
				"p": "Remote",
				"l": "Vollzeit",
				"n": "Teilzeit",
				"j": "Engineering",
				"h": "Dokumentation",
				"d": "Community"
			},
			"it": {
				"r": "Ingegnere frontend senior",
				"c": "Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
				"b": "Ingegnere backend",
				"f": "Progetta e ridimensiona la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
				"s": "Redattore tecnico",
				"e": "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
				"g": "Ingegnere DevRel",
				"q": "San Francisco / Remoto",
				"i": "Collabora con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
				"o": "Ingegnere QA",
				"k": "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
				"m": "Posizioni aperte",
				"a": "Candidati ora",
				"p": "Remoto",
				"l": "Tempo pieno",
				"n": "Part-time",
				"j": "Ingegneria",
				"h": "Documentazione",
				"d": "Comunità"
			},
			"pt": {
				"r": "Engenheiro Frontend Sênior",
				"c": "Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
				"b": "Engenheiro Backend",
				"f": "Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.",
				"s": "Redator Técnico",
				"e": "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
				"g": "Engenheiro DevRel",
				"q": "San Francisco / Remoto",
				"i": "Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
				"o": "Engenheiro QA",
				"k": "Garanta a precisão e a confiabilidade dos resultados dos benchmarks por meio de testes e validações rigorosos.",
				"m": "Vagas abertas",
				"a": "Candidatar-se agora",
				"p": "Remoto",
				"l": "Tempo integral",
				"n": "Meio período",
				"j": "Engenharia",
				"h": "Documentação",
				"d": "Comunidade"
			},
			"zh": {
				"r": "高级前端工程师",
				"c": "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
				"b": "后端工程师",
				"f": "设计并扩展我们的云基准测试基础架构，每天处理数千次自动化运行。",
				"s": "技术文档工程师",
				"e": "为我们的基准测试平台创建全面的指南、API 参考和教程。",
				"g": "开发者关系工程师",
				"q": "旧金山 / 远程",
				"i": "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。",
				"o": "测试工程师",
				"k": "通过严格的测试和验证，确保基准测试结果的准确性和可靠性。",
				"m": "开放职位",
				"a": "立即申请",
				"p": "远程",
				"l": "全职",
				"n": "兼职",
				"j": "工程",
				"h": "文档",
				"d": "社区"
			},
			"ja": {
				"r": "シニアフロントエンドエンジニア",
				"c": "React、TypeScript、Vite を使用して、ベンチマークダッシュボードと開発者ツールを構築・保守します。",
				"b": "バックエンドエンジニア",
				"f": "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計・拡張します。",
				"s": "テクニカルライター",
				"e": "ベンチマークプラットフォーム向けの包括的なガイド、API リファレンス、およびチュートリアルを作成します。",
				"g": "DevRel エンジニア",
				"q": "サンフランシスコ / リモート",
				"i": "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18n コミュニティと交流します。",
				"o": "QA エンジニア",
				"k": "厳密なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
				"m": "募集職種",
				"a": "今すぐ応募",
				"p": "リモート",
				"l": "正社員",
				"n": "アルバイト",
				"j": "エンジニアリング",
				"h": "ドキュメント",
				"d": "コミュニティ"
			},
			"ko": {
				"r": "시니어 프런트 엔드 엔지니어",
				"c": "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
				"b": "백엔드 엔지니어",
				"f": "매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
				"s": "테크니컬 라이터",
				"e": "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.",
				"g": "DevRel 엔지니어",
				"q": "샌프란시스코 / 원격",
				"i": "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하십시오.",
				"o": "QA 엔지니어",
				"k": "엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
				"m": "모집 부문",
				"a": "지금 지원하기",
				"p": "원격",
				"l": "풀타임",
				"n": "파트타임",
				"j": "엔지니어링",
				"h": "문서",
				"d": "커뮤니티"
			},
			"ru": {
				"r": "Старший фронтенд-инженер",
				"c": "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.",
				"b": "Бэкенд-инженер",
				"f": "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.",
				"s": "Технический писатель",
				"e": "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.",
				"g": "DevRel-инженер",
				"q": "Сан-Франциско / Удаленно",
				"i": "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.",
				"o": "QA-инженер",
				"k": "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.",
				"m": "Открытые вакансии",
				"a": "Подать заявку",
				"p": "Удаленно",
				"l": "Полный рабочий день",
				"n": "Неполный рабочий день",
				"j": "Разработка",
				"h": "Документация",
				"d": "Сообщество"
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
var renderIntlayerNode = ({ children, value, additionalProps }) => Object.setPrototypeOf({
	...isValidElement(children) ? children : jsx(Fragment$1, { children }),
	value,
	...additionalProps
}, getIntlayerNodePrototype(value));
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
var ENUMERATION = "enumeration";
var PLURAL = "plural";
var CONDITION = "condition";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
var MARKDOWN = "markdown";
var HTML = "html";
var GENDER = "gender";
var SELECT = "select";
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
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
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
var isInterpolableWrapperNode = (node) => {
	if (typeof node !== "object" || node === null || !("nodeType" in node)) return false;
	const { nodeType } = node;
	return false;
};
var getInterpolableContent = (node) => {
	if (typeof node === "string") return node;
	if (isInterpolableWrapperNode(node)) return node.nodeType === "html" ? node[HTML] : node[MARKDOWN];
};
var rebuildInterpolableContent = (node, interpolated) => {
	if (typeof node === "string") return interpolated;
	if (isInterpolableWrapperNode(node)) {
		const key = node.nodeType === "html" ? HTML : MARKDOWN;
		return {
			...node,
			[key]: interpolated
		};
	}
	return node;
};
var transformInterpolableNode = (node, values, subProps, parentPlugins, deepTransformNode) => {
	const children = rebuildInterpolableContent(node, getInsertion(getInterpolableContent(node), values));
	return deepTransformNode(children, {
		...subProps,
		plugins: parentPlugins,
		children
	});
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var isAwaitingValues = (branch) => {
	if (typeof branch !== "function") return false;
	const { value } = branch;
	return value === void 0 || typeof value === "function";
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
var insertionPlugin$1 = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const children = getInsertion(transformedResult, values);
					return deepTransformNode(children, {
						...subProps,
						plugins: props.plugins,
						children
					});
				};
			}
		};
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
var selectorNodeTypes = [
	ENUMERATION,
	CONDITION,
	PLURAL,
	GENDER,
	SELECT
];
var bindInsertedValues = (children, result, values, areBranchesInterpolated = false) => {
	const nodeType = children?.nodeType;
	if (typeof result !== "function" || !nodeType || !selectorNodeTypes.includes(nodeType)) return result;
	const isCountSelector = nodeType === "plural" || nodeType === "enumeration";
	return (selector) => {
		if (typeof selector === "object" && selector !== null) return result({
			...values,
			...selector
		});
		if (isCountSelector) return result({
			...values,
			count: selector
		});
		const selected = result(selector);
		return !areBranchesInterpolated && isAwaitingValues(selected) ? selected(values) : selected;
	};
};
var resolveInsertedSelector = (children, result) => typeof result === "function" && selectorNodeTypes.includes(children?.nodeType ?? "") ? (values) => bindInsertedValues(children, result, values) : result;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
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
var isComplexValue = (value) => value != null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean";
var insertionRegex = /\{\{\s*(.*?)\s*\}\}/g;
var splitInsertionTemplate = (template, values = {}) => {
	if (!Object.values(values).some(isComplexValue)) return {
		isSimple: true,
		parts: template.replace(insertionRegex, (_, key) => (values[key.trim()] ?? "").toString())
	};
	const chunks = template.split(insertionRegex);
	const parts = [];
	for (let i = 0; i < chunks.length; i++) if (i % 2 === 0) {
		if (chunks[i]) parts.push(chunks[i]);
	} else {
		const val = values[chunks[i].trim()];
		if (val != null) parts.push(val);
	}
	return {
		isSimple: false,
		parts
	};
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, props) => {
		return renderIntlayerNode({
			value: props.children,
			children: props.children
		});
	}
};
var reactNodePlugins = fallbackPlugin;
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
var insertionPlugin = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const result = splitAndJoinInsertion(transformedResult, values);
					return deepTransformNode(result, {
						...subProps,
						plugins: props.plugins,
						children: result
					});
				};
			}
		};
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
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
		reactNodePlugins,
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
var getLocaleInStorage = getCachedLocaleFromStorageClient;
var IntlayerClientContext = createContext({
	get locale() {
		return getLocaleInStorage() ?? internationalization?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: true
});
var useDictionary = (dictionary, localeOrSelector) => {
	const { locale: currentLocale, variant: contextVariant } = useContext(IntlayerClientContext) ?? {};
	const argument = localeOrSelector ?? currentLocale;
	const argumentIdentity = argument;
	return useMemo(() => getDictionary(dictionary, argument), [dictionary.key, argumentIdentity]);
};
function OpenPositions() {
	const content = useDictionary(open_positions_default);
	const openings = [
		{
			title: content.r.value,
			location: content.p.value,
			type: content.l.value,
			dept: content.j.value,
			desc: content.c.value
		},
		{
			title: content.b.value,
			location: content.p.value,
			type: content.l.value,
			dept: content.j.value,
			desc: content.f.value
		},
		{
			title: content.s.value,
			location: content.p.value,
			type: content.n.value,
			dept: content.h.value,
			desc: content.e.value
		},
		{
			title: content.g.value,
			location: content.q.value,
			type: content.l.value,
			dept: content.d.value,
			desc: content.i.value
		},
		{
			title: content.o.value,
			location: content.p.value,
			type: content.l.value,
			dept: content.j.value,
			desc: content.k.value
		}
	];
	return jsxs(Fragment$1, { children: [jsx("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: content.m
	}), jsx("div", {
		className: "space-y-4",
		children: openings.map((o) => jsxs("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [jsxs("div", { children: [
				jsx("h3", {
					className: "text-base font-semibold text-foreground",
					children: o.title
				}),
				jsx("p", {
					className: "text-sm text-muted-foreground",
					children: o.desc
				}),
				jsxs("div", {
					className: "mt-2 flex gap-2",
					children: [
						jsx("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.dept
						}),
						jsx("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.location
						}),
						jsx("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.type
						})
					]
				})
			] }), jsx("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: content.a
			})]
		}, o.title))
	})] });
}
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
function AppProviders({ children, locale }) {
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		if (locale) document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return children;
}
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale: "en",
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(OpenPositions, {}) });
}
export { Wrapped as default };

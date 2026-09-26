import { Fragment, createContext, createElement, isValidElement, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var team_grid_default = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"o\":\"Sarah Chen\",\"h\":\"Founder & Lead Engineer\",\"g\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"l\":\"Marcus Weber\",\"n\":\"Performance Engineer\",\"p\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Full-Stack Developer\",\"j\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Data Analyst\",\"f\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"},\"fr\":{\"o\":\"Sarah Chen\",\"h\":\"Fondatrice & Ingénieure Principale\",\"g\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"l\":\"Marcus Weber\",\"n\":\"Ingénieur Performance\",\"p\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Auparavant chez Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Développeur Full-Stack\",\"j\":\"Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analyste de Données\",\"f\":\"Assure la rigueur statistique dans tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gestionnaire de Communauté\",\"k\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\"},\"es\":{\"o\":\"Sarah Chen\",\"h\":\"Fundadora e Ingeniera Principal\",\"g\":\"Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a escala.\",\"l\":\"Marcus Weber\",\"n\":\"Ingeniero de Rendimiento\",\"p\":\"Especialista en optimización de rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Evangelista de Desarrolladores\",\"m\":\"Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Desarrollador Full-Stack\",\"j\":\"Mantiene la infraestructura de benchmarking y el pipeline CI/CD. Colaborador de código abierto en Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista de Datos\",\"f\":\"Asegura el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada del MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gerente de Comunidad\",\"k\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Experiencia en gobernanza de código abierto.\"},\"de\":{\"o\":\"Sarah Chen\",\"h\":\"Gründerin & Leitende Ingenieurin\",\"g\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"l\":\"Marcus Weber\",\"n\":\"Performance-Ingenieur\",\"p\":\"Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Leidenschaftlich für Developer Experience und Ausbildung. Sprecherin bei React Conf, JSConf und i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Full-Stack-Entwickler\",\"j\":\"Pflegt die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Beitragender zu Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Datenanalyst\",\"f\":\"Sorgt für statistische Strenge in allen Benchmark-Ergebnissen. PhD in angewandter Statistik vom MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community-Manager\",\"k\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"},\"it\":{\"o\":\"Sarah Chen\",\"h\":\"Fondatrice e lead engineer\",\"g\":\"Ex ingegnere di Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su larga scala.\",\"l\":\"Marcus Weber\",\"n\":\"Ingegnere delle prestazioni\",\"p\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer advocate\",\"m\":\"Appassionata di developer experience e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Sviluppatore Full-Stack\",\"j\":\"Gestisce l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista di dati\",\"f\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata presso il MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community manager\",\"k\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Esperienza nella governance open source.\"},\"pt\":{\"o\":\"Sarah Chen\",\"h\":\"Fundadora e Engenheira Líder\",\"g\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"l\":\"Marcus Weber\",\"n\":\"Engenheiro de Performance\",\"p\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Advogado de Desenvolvedores\",\"m\":\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Desenvolvedor Full-Stack\",\"j\":\"Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista de Dados\",\"f\":\"Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gerente de Comunidade\",\"k\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"},\"zh\":{\"o\":\"陈莎拉 (Sarah Chen)\",\"h\":\"创始人兼首席工程师\",\"g\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\",\"l\":\"马库斯·韦伯 (Marcus Weber)\",\"n\":\"性能工程师\",\"p\":\"专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。\",\"a\":\"艾莎·帕特尔 (Aisha Patel)\",\"d\":\"开发者倡导者\",\"m\":\"热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。\",\"q\":\"托马斯·罗德里格斯 (Tomás Rodríguez)\",\"i\":\"全栈开发人员\",\"j\":\"维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。\",\"r\":\"田中由纪 (Yuki Tanaka)\",\"c\":\"数据分析师\",\"f\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\",\"e\":\"埃琳娜·科瓦尔斯基 (Elena Kowalski)\",\"b\":\"社区经理\",\"k\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"},\"ja\":{\"o\":\"サラ・チェン (Sarah Chen)\",\"h\":\"創設者兼リードエンジニア\",\"g\":\"元 Google エンジニア。大規模な国際化システムの構築に 10 年の経験があります。\",\"l\":\"マーカス・ウェーバー (Marcus Weber)\",\"n\":\"パフォーマンスエンジニア\",\"p\":\"JavaScript のパフォーマンス最適化とベンチマーク方法論を専門としています。以前は Vercel に在籍していました。\",\"a\":\"アイシャ・パテル (Aisha Patel)\",\"d\":\"デベロッパーアドボケイト\",\"m\":\"デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNext のスピーカー。\",\"q\":\"トマス・ロドリゲス (Tomás Rodríguez)\",\"i\":\"フルスタックデベロッパー\",\"j\":\"ベンチマークインフラストラクチャと CI/CD パイプラインを保守しています。Lingui へのオープンソースコントリビューターです。\",\"r\":\"田中由紀 (Yuki Tanaka)\",\"c\":\"データアナリスト\",\"f\":\"すべてのベンチマーク結果において統計的な厳密さを確保します。MIT で応用統計学の博士号を取得。\",\"e\":\"エレナ・コワルスキー (Elena Kowalski)\",\"b\":\"コミュニティマネージャー\",\"k\":\"コミュニティへの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経験があります。\"},\"ko\":{\"o\":\"사라 첸 (Sarah Chen)\",\"h\":\"설립자 및 리드 엔지니어\",\"g\":\"규모에 맞는 국제화 시스템을 구축한 10년 경력의 전직 Google 엔지니어입니다.\",\"l\":\"마르쿠스 베버 (Marcus Weber)\",\"n\":\"성능 엔지니어\",\"p\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\",\"a\":\"아이샤 파텔 (Aisha Patel)\",\"d\":\"데벨로퍼 애드보킷\",\"m\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"q\":\"토마스 로드리게스 (Tomás Rodríguez)\",\"i\":\"풀스택 개발자\",\"j\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여차입니다.\",\"r\":\"유키 다나카 (Yuki Tanaka)\",\"c\":\"데이터 분석가\",\"f\":\"모든 벤치마크 결과에서 통계적 엄밀성을 보장합니다. MIT에서 응용 통계학 박사 학위를 받았습니다.\",\"e\":\"엘레나 코발스키 (Elena Kowalski)\",\"b\":\"커뮤니티 매니저\",\"k\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경이 있습니다.\"},\"ru\":{\"o\":\"Сара Чен (Sarah Chen)\",\"h\":\"Основатель и ведущий инженер\",\"g\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\",\"l\":\"Маркус Вебер (Marcus Weber)\",\"n\":\"Инженер по производительности\",\"p\":\"Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.\",\"a\":\"Айша Патель (Aisha Patel)\",\"d\":\"Адвокат разработчиков\",\"m\":\"Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.\",\"q\":\"Томас Родригес (Tomás Rodríguez)\",\"i\":\"Фулстек-разработчик\",\"j\":\"Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.\",\"r\":\"Юки Танака (Yuki Tanaka)\",\"c\":\"Аналитик данных\",\"f\":\"Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.\",\"e\":\"Елена Ковальски (Elena Kowalski)\",\"b\":\"Комьюнити-менеджер\",\"k\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"}}}")
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
function TeamGrid() {
	const content = useDictionary(team_grid_default);
	const members = [
		{
			name: content.o.value,
			role: content.h.value,
			bio: content.g.value
		},
		{
			name: content.l.value,
			role: content.n.value,
			bio: content.p.value
		},
		{
			name: content.a.value,
			role: content.d.value,
			bio: content.m.value
		},
		{
			name: content.q.value,
			role: content.i.value,
			bio: content.j.value
		},
		{
			name: content.r.value,
			role: content.c.value,
			bio: content.f.value
		},
		{
			name: content.e.value,
			role: content.b.value,
			bio: content.k.value
		}
	];
	return jsx("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: members.map((m) => jsxs("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				jsx("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: m.name.split(" ").map((n) => n[0]).join("")
				}),
				jsx("h3", {
					className: "text-base font-semibold text-foreground",
					children: m.name
				}),
				jsx("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: m.role
				}),
				jsx("p", {
					className: "text-sm text-muted-foreground",
					children: m.bio
				})
			]
		}, m.name))
	});
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
	return jsx(Wrapper, { children: jsx(TeamGrid, {}) });
}
export { Wrapped as default };

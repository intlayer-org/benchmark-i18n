import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, writable } from "svelte/store";
import "svelte/internal/flags/legacy";
var team_grid_default = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"managesCommunityContributionsPartnership\":\"Manages community contributions, partnerships, and events. Background in open source governance.\",\"communityManager\":\"Community Manager\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"dataAnalyst\":\"Data Analyst\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"fullStackDeveloper\":\"Full-Stack Developer\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"performanceEngineer\":\"Performance Engineer\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"founderLeadEngineer\":\"Founder & Lead Engineer\",\"sarahChen\":\"Sarah Chen\"},\"fr\":{\"managesCommunityContributionsPartnership\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\",\"communityManager\":\"Responsable de communauté\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"dataAnalyst\":\"Analyste de données\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"fullStackDeveloper\":\"Développeur full-stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Passionnée par l'expérience et l'éducation des développeurs. Conférencière à React Conf, JSConf et i18nNext.\",\"developerAdvocate\":\"Défenseur des développeurs\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"performanceEngineer\":\"Ingénieur performance\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ancien ingénieur Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.\",\"founderLeadEngineer\":\"Fondateur et ingénieur principal\",\"sarahChen\":\"Sarah Chen\"},\"es\":{\"managesCommunityContributionsPartnership\":\"Gestiona contribuciones de la comunidad, asociaciones и eventos. Antecedentes en gobernanza de código abierto.\",\"communityManager\":\"Gerente de comunidad\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada del MIT.\",\"dataAnalyst\":\"Analista de datos\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Mantiene la infraestructura de benchmarking и el proceso de CI/CD. Colaborador de código abierto en Lingui.\",\"fullStackDeveloper\":\"Desarrollador full-stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Apasionada por la experiencia и la educación de los desarrolladores. Oradora en React Conf, JSConf и i18nNext.\",\"developerAdvocate\":\"Defensor de los desarrolladores\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Se especializa en la optimización del rendimiento de JavaScript и la metodología de benchmarking. Anteriormente en Vercel.\",\"performanceEngineer\":\"Ingeniero de rendimiento\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Antiguo ingeniero de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\",\"founderLeadEngineer\":\"Fundador и ingeniero principal\",\"sarahChen\":\"Sarah Chen\"},\"de\":{\"managesCommunityContributionsPartnership\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\",\"communityManager\":\"Community-Manager\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Stellt statistische Strenge in allen Benchmark-Ergebnissen sicher. PhD in Angewandter Statistik vom MIT.\",\"dataAnalyst\":\"Datenanalyst\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\",\"fullStackDeveloper\":\"Full-Stack-Entwickler\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Leidenschaftlich für Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"performanceEngineer\":\"Performance-Ingenieur\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ehemaliger Google-Ingenieur mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"founderLeadEngineer\":\"Gründer und leitender Ingenieur\",\"sarahChen\":\"Sarah Chen\"},\"it\":{\"managesCommunityContributionsPartnership\":\"Gestisce i contributi della community, le partnership e gli eventi. Esperienza nella governance open source.\",\"communityManager\":\"Community Manager\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato di ricerca in statistica applicata presso il MIT.\",\"dataAnalyst\":\"Analista di dati\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\",\"fullStackDeveloper\":\"Sviluppatore full-stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente in Vercel.\",\"performanceEngineer\":\"Ingegnere delle prestazioni\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su vasta scala.\",\"founderLeadEngineer\":\"Fondatore e ingegnere capo\",\"sarahChen\":\"Sarah Chen\"},\"pt\":{\"managesCommunityContributionsPartnership\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\",\"communityManager\":\"Gerente de Comunidade\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\",\"dataAnalyst\":\"Analista de Dados\",\"yukiTanaka\":\"Yuki Tanaka\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Colaborador de código aberto do Lingui.\",\"fullStackDeveloper\":\"Desenvolvedor Full-Stack\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"Apaixonada por experiência e educação de desenvolvedores. Palestrante na React Conf, JSConf e i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"performanceEngineer\":\"Engenheiro de Performance\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"Ex-engenheiro do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"founderLeadEngineer\":\"Fundador e Engenheiro Principal\",\"sarahChen\":\"Sarah Chen\"},\"zh\":{\"managesCommunityContributionsPartnership\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\",\"communityManager\":\"社区经理\",\"elenaKowalski\":\"Elena Kowalski\",\"ensuresStatisticalRigorInAll\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\",\"dataAnalyst\":\"数据分析师\",\"yukiTanaka\":\"田中幸\",\"maintainsTheBenchmarkingInfrastructureAn\":\"维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\",\"fullStackDeveloper\":\"全栈开发人员\",\"tomasRodriguez\":\"Tomás Rodríguez\",\"passionateAboutDeveloperExperienceAnd\":\"热爱开发人员体验和教育。曾在 React Conf, JSConf 和 i18nNext 发表演讲。\",\"developerAdvocate\":\"开发人员倡导者\",\"aishaPatel\":\"Aisha Patel\",\"specializesInJavascriptPerformanceOptimi\":\"专注于 JavaScript 性能优化和基准测试方法。曾就职于 Vercel。\",\"performanceEngineer\":\"性能工程师\",\"marcusWeber\":\"Marcus Weber\",\"formerGoogleEngineerWith10\":\"前 Google 工程师，拥有 10 年构建大规模国际化系统的经验。\",\"founderLeadEngineer\":\"创始人兼首席工程师\",\"sarahChen\":\"陈莎拉\"},\"ja\":{\"managesCommunityContributionsPartnership\":\"コミュニティの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴があります。\",\"communityManager\":\"コミュニティマネージャー\",\"elenaKowalski\":\"エレナ・コワルスキー\",\"ensuresStatisticalRigorInAll\":\"すべてのベンチマーク結果において統計的な厳密さを保証します。MIT で応用統計学の博士号を取得。\",\"dataAnalyst\":\"データアナリスト\",\"yukiTanaka\":\"田中 勇気\",\"maintainsTheBenchmarkingInfrastructureAn\":\"ベンチマークインフラストラクチャと CI/CD パイプラインを維持します。Lingui へのオープンソース貢献者。\",\"fullStackDeveloper\":\"フルスタックデベロッパー\",\"tomasRodriguez\":\"トマス・ロドリゲス\",\"passionateAboutDeveloperExperienceAnd\":\"デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、および i18nNext のスピーカー。\",\"developerAdvocate\":\"デベロッパーアドボケイト\",\"aishaPatel\":\"アイシャ・パテル\",\"specializesInJavascriptPerformanceOptimi\":\"JavaScript のパフォーマンス最適化とベンチマーク手法を専門としています。以前は Vercel に在籍。\",\"performanceEngineer\":\"パフォーマンスエンジニア\",\"marcusWeber\":\"マーカス・ウェーバー\",\"formerGoogleEngineerWith10\":\"元 Google エンジニアで、大規模な国際化システムの構築において 10 年の経験があります。\",\"founderLeadEngineer\":\"創設者兼リードエンジニア\",\"sarahChen\":\"サラ・チェン\"},\"ko\":{\"managesCommunityContributionsPartnership\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경이 있습니다.\",\"communityManager\":\"커뮤니티 매니저\",\"elenaKowalski\":\"엘레나 코발스키\",\"ensuresStatisticalRigorInAll\":\"모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\",\"dataAnalyst\":\"데이터 분석가\",\"yukiTanaka\":\"유키 타나카\",\"maintainsTheBenchmarkingInfrastructureAn\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\",\"fullStackDeveloper\":\"풀스택 개발자\",\"tomasRodriguez\":\"토마스 로드리게스\",\"passionateAboutDeveloperExperienceAnd\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"developerAdvocate\":\"데벨로퍼 애드보킷\",\"aishaPatel\":\"아이샤 파텔\",\"specializesInJavascriptPerformanceOptimi\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\",\"performanceEngineer\":\"성능 엔지니어\",\"marcusWeber\":\"마르쿠스 베버\",\"formerGoogleEngineerWith10\":\"대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\",\"founderLeadEngineer\":\"설립자 및 수석 엔지니어\",\"sarahChen\":\"사라 첸\"},\"ru\":{\"managesCommunityContributionsPartnership\":\"Управление вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\",\"communityManager\":\"Комьюнити-менеджер\",\"elenaKowalski\":\"Елена Ковальски\",\"ensuresStatisticalRigorInAll\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор философии (PhD) в области прикладной статистики Массачусетского технологического института (MIT).\",\"dataAnalyst\":\"Дата-аналитик\",\"yukiTanaka\":\"Юки Танака\",\"maintainsTheBenchmarkingInfrastructureAn\":\"Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник open source проекта Lingui.\",\"fullStackDeveloper\":\"Full-stack разработчик\",\"tomasRodriguez\":\"Томас Родригес\",\"passionateAboutDeveloperExperienceAnd\":\"Увлечена опытом разработки и обучением. Спикер на React Conf, JSConf и i18nNext.\",\"developerAdvocate\":\"Developer Advocate\",\"aishaPatel\":\"Айша Патель\",\"specializesInJavascriptPerformanceOptimi\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\",\"performanceEngineer\":\"Инженер по производительности\",\"marcusWeber\":\"Маркус Вебер\",\"formerGoogleEngineerWith10\":\"Бывший инженер Google с 10-летним опытом создания масштабируемых систем интернационализации.\",\"founderLeadEngineer\":\"Основатель и ведущий инженер\",\"sarahChen\":\"Сара Чен\"}}}")
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
var root = $.from_html(`<div class="rounded-lg border border-border bg-card p-6 text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"> </div> <h3 class="text-base font-semibold text-foreground"> </h3> <p class="mb-2 text-xs font-medium text-primary"> </p> <p class="text-sm text-muted-foreground"> </p></div>`);
var root_1 = $.from_html(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>`);
function TeamGrid($$anchor, $$props) {
	$.push($$props, true);
	const $content = () => $.store_get(content, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content = useDictionary(team_grid_default);
	const members = $.derived(() => [
		{
			name: $content().sarahChen,
			role: $content().founderLeadEngineer,
			bio: $content().formerGoogleEngineerWith10
		},
		{
			name: $content().marcusWeber,
			role: $content().performanceEngineer,
			bio: $content().specializesInJavascriptPerformanceOptimi
		},
		{
			name: $content().aishaPatel,
			role: $content().developerAdvocate,
			bio: $content().passionateAboutDeveloperExperienceAnd
		},
		{
			name: $content().tomasRodriguez,
			role: $content().fullStackDeveloper,
			bio: $content().maintainsTheBenchmarkingInfrastructureAn
		},
		{
			name: $content().yukiTanaka,
			role: $content().dataAnalyst,
			bio: $content().ensuresStatisticalRigorInAll
		},
		{
			name: $content().elenaKowalski,
			role: $content().communityManager,
			bio: $content().managesCommunityContributionsPartnership
		}
	]);
	var div = root_1();
	$.each(div, 21, () => $.get(members), $.index, ($$anchor, m) => {
		var div_1 = root();
		var div_2 = $.child(div_1);
		var text = $.only_child(div_2, true);
		var h3 = $.sibling(div_2, 2);
		var text_1 = $.only_child(h3, true);
		var p = $.sibling(h3, 2);
		var text_2 = $.only_child(p, true);
		var p_1 = $.sibling(p, 2);
		var text_3 = $.only_child(p_1, true);
		$.reset(div_1);
		$.template_effect(($0) => {
			$.set_text(text, $0);
			$.set_text(text_1, $.get(m).name);
			$.set_text(text_2, $.get(m).role);
			$.set_text(text_3, $.get(m).bio);
		}, [() => String($.get(m).name ?? "").split(" ").map((n) => n[0]).join("")]);
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { TeamGrid as default };

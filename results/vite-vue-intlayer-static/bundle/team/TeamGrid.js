import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, openBlock, ref, renderList, shallowRef, toDisplayString, toValue, watch } from "vue";
var team_grid_default = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Founder & Lead Engineer\",\"bio\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\"},{\"name\":\"Marcus Weber\",\"role\":\"Performance Engineer\",\"bio\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-Stack Developer\",\"bio\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Data Analyst\",\"bio\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"}]},\"fr\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fondatrice & lead ingénieur\",\"bio\":\"Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingénieur performance\",\"bio\":\"Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer advocate\",\"bio\":\"Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Développeur full-stack\",\"bio\":\"Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analyste de données\",\"bio\":\"Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community manager\",\"bio\":\"Contributions communautaires, partenariats et événements — gouvernance open source.\"}]},\"es\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fundadora e Ingeniera Principal\",\"bio\":\"Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a gran escala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingeniero de Rendimiento\",\"bio\":\"Se especializa en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Apasionada por la experiencia y educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Desarrollador Full-Stack\",\"bio\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Contribuidor de código abierto en Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista de Datos\",\"bio\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Experiencia en gobernanza de código abierto.\"}]},\"de\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Gründerin & Lead Engineer\",\"bio\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\"},{\"name\":\"Marcus Weber\",\"role\":\"Performance-Ingenieur\",\"bio\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Leidenschaftlich für Entwicklererfahrung und Ausbildung. Sprecherin bei React Conf, JSConf und i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-Stack-Entwickler\",\"bio\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Datenanalyst\",\"bio\":\"Gewährleistet statistische Strenge bei allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"}]},\"it\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fondatrice e Ingegnere Capo\",\"bio\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su larga scala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingegnere delle prestazioni\",\"bio\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza presso Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Appassionata di esperienza e formazione per gli sviluppatori. Relatrice a React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Sviluppatore Full-Stack\",\"bio\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista di dati\",\"bio\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato di ricerca in Statistica applicata presso il MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"}]},\"pt\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fundadora e Engenheira Líder\",\"bio\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Engenheiro de Performance\",\"bio\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Apaixonada por experiência e educação de desenvolvedores. Palestrante na React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Desenvolvedor Full-Stack\",\"bio\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor de código aberto do Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista de Dados\",\"bio\":\"Garante o rigor estatístico em todos os resultados do benchmark. Doutorado em Estatística Aplicada pelo MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Gerente de Comunidade\",\"bio\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"}]},\"zh\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"创始人兼首席工程师\",\"bio\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\"},{\"name\":\"Marcus Weber\",\"role\":\"性能工程师\",\"bio\":\"专注于 JavaScript 性能优化和基准测试方法。曾就职于 Vercel。\"},{\"name\":\"Aisha Patel\",\"role\":\"开发者关系专员\",\"bio\":\"热衷于开发者体验和教育。曾在 React Conf、JSConf 和 i18nNext 上发表演讲。\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"全栈开发人员\",\"bio\":\"维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\"},{\"name\":\"Yuki Tanaka\",\"role\":\"数据分析师\",\"bio\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\"},{\"name\":\"Elena Kowalski\",\"role\":\"社区经理\",\"bio\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"}]},\"ja\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"創設者 兼 リードエンジニア\",\"bio\":\"元Googleエンジニアで、大規模な国際化システムの構築に10年の経験があります。\"},{\"name\":\"Marcus Weber\",\"role\":\"パフォーマンスエンジニア\",\"bio\":\"JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。\"},{\"name\":\"Aisha Patel\",\"role\":\"デベロッパーアドボケイト\",\"bio\":\"開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextでの講演者。\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"フルスタックデベロッパー\",\"bio\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを保守しています。Linguiのオープンソースコントリビューター。\"},{\"name\":\"Yuki Tanaka\",\"role\":\"データアナリスト\",\"bio\":\"すべてのベンチマーク結果において統計的な厳密さを確保します。MITで応用統計学の博士号を取得。\"},{\"name\":\"Elena Kowalski\",\"role\":\"コミュニティマネージャー\",\"bio\":\"コミュニティの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴があります。\"}]},\"ko\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"설립자 및 수석 엔지니어\",\"bio\":\"대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\"},{\"name\":\"Marcus Weber\",\"role\":\"성능 엔지니어\",\"bio\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\"},{\"name\":\"Aisha Patel\",\"role\":\"데벨로퍼 애드보킷\",\"bio\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"풀스택 개발자\",\"bio\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"데이터 분석가\",\"bio\":\"모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\"},{\"name\":\"Elena Kowalski\",\"role\":\"커뮤니티 매니저\",\"bio\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경을 가지고 있습니다.\"}]},\"ru\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Основатель и ведущий инженер\",\"bio\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\"},{\"name\":\"Marcus Weber\",\"role\":\"Инженер по производительности\",\"bio\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Адвокат разработчиков\",\"bio\":\"Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-stack разработчик\",\"bio\":\"Поддерживает инфраструктуру бенчмаркинга и конвейер CI/CD. Участник открытого проекта Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Аналитик данных\",\"bio\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики Массачусетского технологического института (MIT).\"},{\"name\":\"Elena Kowalski\",\"role\":\"Комьюнити-менеджер\",\"bio\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"}]}}}")
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
var TeamGrid_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "TeamGrid",
	setup(__props, { expose: __expose }) {
		__expose();
		const { a: members } = S(team_grid_default);
		const getInitials = (name) => name.split(" ").map((n) => n[0]).join("");
		const __returned__ = {
			members,
			getInitials
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
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" };
var _hoisted_2 = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" };
var _hoisted_3 = { class: "text-base font-semibold text-foreground" };
var _hoisted_4 = { class: "mb-2 text-xs font-medium text-primary" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.members, (m) => {
		return openBlock(), createElementBlock("div", {
			key: m.name,
			class: "rounded-lg border border-border bg-card p-6 text-center"
		}, [
			createElementVNode("div", _hoisted_2, toDisplayString($setup.getInitials(m.name)), 1),
			createElementVNode("h3", _hoisted_3, toDisplayString(m.name), 1),
			createElementVNode("p", _hoisted_4, toDisplayString(m.role), 1),
			createElementVNode("p", _hoisted_5, toDisplayString(m.bio), 1)
		]);
	}), 128))]);
}
var TeamGrid_default = _plugin_vue_export_helper_default(TeamGrid_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/team/TeamGrid.vue"]]);
export { TeamGrid_default as default };

import { Dynamic, createComponent, insert, template } from "solid-js/web";
import { For, createContext, createMemo, useContext } from "solid-js";
var team_grid_default = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"o\":\"Sarah Chen\",\"h\":\"Founder & Lead Engineer\",\"g\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"l\":\"Marcus Weber\",\"n\":\"Performance Engineer\",\"p\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Full-Stack Developer\",\"j\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Data Analyst\",\"f\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"},\"fr\":{\"o\":\"Sarah Chen\",\"h\":\"Fondatrice et ingénieure en chef\",\"g\":\"Ancienne ingénieure Google avec 10 ans d'expérience dans la création de systèmes d'internationalisation à grande échelle.\",\"l\":\"Marcus Weber\",\"n\":\"Ingénieur Performance\",\"p\":\"Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Passionnée par l'expérience et l'éducation des développeurs. Conférencière à React Conf, JSConf et i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Développeur Full-Stack\",\"j\":\"Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analyste de données\",\"f\":\"Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.\"},\"es\":{\"o\":\"Sarah Chen\",\"h\":\"Fundadora e ingeniera principal\",\"g\":\"Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\",\"l\":\"Marcus Weber\",\"n\":\"Ingeniero de rendimiento\",\"p\":\"Especializado en optimización del rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Defensor del desarrollador\",\"m\":\"Apasionada por la experiencia y educación del desarrollador. Ponente en React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Desarrollador Full-Stack\",\"j\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto en Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista de datos\",\"f\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gerente de comunidad\",\"k\":\"Gestiona las contribuciones, asociaciones y eventos de la comunidad. Antecedentes en gobernanza de código abierto.\"},\"de\":{\"o\":\"Sarah Chen\",\"h\":\"Gründerin & leitende Ingenieurin\",\"g\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"l\":\"Marcus Weber\",\"n\":\"Performance Engineer\",\"p\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Leidenschaft für Entwicklererfahrung und Bildung. Sprecher bei React Conf, JSConf und i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Full-Stack Developer\",\"j\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Data Analyst\",\"f\":\"Gewährleistet statistische Strenge bei allen Benchmark-Ergebnissen. PhD in angewandter Statistik vom MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"},\"it\":{\"o\":\"Sarah Chen\",\"h\":\"Fondatore e Ingegnere Capo\",\"g\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su scala.\",\"l\":\"Marcus Weber\",\"n\":\"Ingegnere delle prestazioni\",\"p\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente in Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Appassionato di developer experience e formazione. Speaker a React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Sviluppatore Full-Stack\",\"j\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Contributore open source di Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista di dati\",\"f\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in Statistica Applicata al MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Community Manager\",\"k\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Esperienza nella governance open source.\"},\"pt\":{\"o\":\"Sarah Chen\",\"h\":\"Fundador e Engenheiro Principal\",\"g\":\"Ex-engenheiro do Google com 10 anos de experiência na criação de sistemas de internacionalização em escala.\",\"l\":\"Marcus Weber\",\"n\":\"Engenheiro de Performance\",\"p\":\"Especializado em otimização de desempenho de JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"a\":\"Aisha Patel\",\"d\":\"Developer Advocate\",\"m\":\"Apaixonado por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"q\":\"Tomás Rodríguez\",\"i\":\"Desenvolvedore Full-Stack\",\"j\":\"Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.\",\"r\":\"Yuki Tanaka\",\"c\":\"Analista de Dados\",\"f\":\"Garante o rigor estatístico em todos os resultados do benchmark. PhD em Estatística Aplicada pelo MIT.\",\"e\":\"Elena Kowalski\",\"b\":\"Gerente de Comunidade\",\"k\":\"Gerencia contribuições, parcerias e eventos da comunidade. Experiência em governança de código aberto.\"},\"zh\":{\"o\":\"Sarah Chen\",\"h\":\"创始人兼首席工程师\",\"g\":\"前 Google 工程师，拥有 10 年大规模构建国际化系统的经验。\",\"l\":\"Marcus Weber\",\"n\":\"性能工程师\",\"p\":\"专注于 JavaScript 性能优化和基准测试方法论。此前曾任职于 Vercel。\",\"a\":\"Aisha Patel\",\"d\":\"开发者关系\",\"m\":\"热衷于开发人员体验和教育。曾任 React Conf、JSConf 和 i18nNext 的演讲者。\",\"q\":\"Tomás Rodríguez\",\"i\":\"全栈开发人员\",\"j\":\"维护基准测试基础设施和 CI/CD 管道。Lingui 的开源贡献者。\",\"r\":\"Yuki Tanaka\",\"c\":\"数据分析师\",\"f\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\",\"e\":\"Elena Kowalski\",\"b\":\"社区经理\",\"k\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"},\"ja\":{\"o\":\"Sarah Chen\",\"h\":\"創設者兼リードエンジニア\",\"g\":\"大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。\",\"l\":\"Marcus Weber\",\"n\":\"パフォーマンスエンジニア\",\"p\":\"JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。\",\"a\":\"Aisha Patel\",\"d\":\"デベロッパーアドボケイト\",\"m\":\"開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。\",\"q\":\"Tomás Rodríguez\",\"i\":\"フルスタックデベロッパー\",\"j\":\"ベンチマークインフラストラクチャとCI / CDパイプラインを保守します。Linguiへのオープンソースコントリビューター。\",\"r\":\"Yuki Tanaka\",\"c\":\"データアナリスト\",\"f\":\"すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。\",\"e\":\"Elena Kowalski\",\"b\":\"コミュニティマネージャー\",\"k\":\"コミュニティへの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴。\"},\"ko\":{\"o\":\"Sarah Chen\",\"h\":\"설립자 및 수석 엔지니어\",\"g\":\"대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\",\"l\":\"Marcus Weber\",\"n\":\"성능 엔지니어\",\"p\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전공했습니다. 이전에는 Vercel에서 근무했습니다.\",\"a\":\"Aisha Patel\",\"d\":\"디벨로퍼 애드보킷\",\"m\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\",\"q\":\"Tomás Rodríguez\",\"i\":\"풀스택 개발자\",\"j\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\",\"r\":\"Yuki Tanaka\",\"c\":\"데이터 분석가\",\"f\":\"모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\",\"e\":\"Elena Kowalski\",\"b\":\"커뮤니티 매니저\",\"k\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경.\"},\"ru\":{\"o\":\"Сара Чен\",\"h\":\"Основатель и ведущий инженер\",\"g\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.\",\"l\":\"Маркус Вебер\",\"n\":\"Инженер по производительности\",\"p\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\",\"a\":\"Аиша Патель\",\"d\":\"Developer Advocate\",\"m\":\"Увлечен вопросами опыта разработчиков и обучения. Спикер на React Conf, JSConf и i18nNext.\",\"q\":\"Томас Родригес\",\"i\":\"Full-stack разработчик\",\"j\":\"Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Автор open source вкладов в Lingui.\",\"r\":\"Юки Танака\",\"c\":\"Аналитик данных\",\"f\":\"Обеспечивает статистическую точность всех результатов бенчмарков. Доктор прикладной статистики (MIT).\",\"e\":\"Елена Ковальски\",\"b\":\"Комьюнити-менеджер\",\"k\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\"}}}")
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
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">`), _tmpl$2 = template(`<div class="rounded-lg border border-border bg-card p-6 text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"></div><h3 class="text-base font-semibold text-foreground"></h3><p class="mb-2 text-xs font-medium text-primary"></p><p class="text-sm text-muted-foreground">`);
function TeamGrid() {
	const content = i(team_grid_default);
	const members = [
		{
			name: content().sarahChen.value,
			role: content().founderLeadEngineer.value,
			bio: content().formerGoogleEngineerWith10.value
		},
		{
			name: content().marcusWeber.value,
			role: content().performanceEngineer.value,
			bio: content().specializesInJavascriptPerformanceOptimi.value
		},
		{
			name: content().aishaPatel.value,
			role: content().developerAdvocate.value,
			bio: content().passionateAboutDeveloperExperienceAnd.value
		},
		{
			name: content().tomasRodriguez.value,
			role: content().fullStackDeveloper.value,
			bio: content().maintainsTheBenchmarkingInfrastructureAn.value
		},
		{
			name: content().yukiTanaka.value,
			role: content().dataAnalyst.value,
			bio: content().ensuresStatisticalRigorInAll.value
		},
		{
			name: content().elenaKowalski.value,
			role: content().communityManager.value,
			bio: content().managesCommunityContributionsPartnership.value
		}
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: members,
			children: (m) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.nextSibling, _el$6 = _el$5.nextSibling;
				insert(_el$3, () => m.name.split(" ").map((n) => n[0]).join(""));
				insert(_el$4, () => m.name);
				insert(_el$5, () => m.role);
				insert(_el$6, () => m.bio);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { TeamGrid as default };

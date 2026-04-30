import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, get, writable } from "svelte/store";
var open_positions_default = {
	key: "open-positions",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"applyNow\":\"Apply Now\",\"openPositions\":\"Open Positions\",\"ensureTheAccuracyAndReliability\":\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\",\"engineering2\":\"Engineering\",\"remote3\":\"Remote\",\"qaEngineer\":\"QA Engineer\",\"engageWithTheI18nCommunity\":\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\",\"community\":\"Community\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"devrelEngineer\":\"DevRel Engineer\",\"createComprehensiveGuidesApiReferences\":\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\",\"documentation\":\"Documentation\",\"remote2\":\"Remote\",\"technicalWriter\":\"Technical Writer\",\"designAndScaleOurCloud\":\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\",\"engineering1\":\"Engineering\",\"remote1\":\"Remote\",\"backendEngineer\":\"Backend Engineer\",\"buildAndMaintainOurBenchmarking\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\",\"engineering\":\"Engineering\",\"remote\":\"Remote\",\"seniorFrontendEngineer\":\"Senior Frontend Engineer\"},\"fr\":{\"applyNow\":\"Postulez maintenant\",\"openPositions\":\"Postes ouverts\",\"ensureTheAccuracyAndReliability\":\"Assurer l'exactitude et la fiabilité des résultats de benchmark grâce à des tests et validations rigoureux.\",\"engineering2\":\"Ingénierie\",\"remote3\":\"À distance\",\"qaEngineer\":\"Ingénieur QA\",\"engageWithTheI18nCommunity\":\"S'engager avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.\",\"community\":\"Communauté\",\"sanFranciscoRemote\":\"San Francisco / À distance\",\"devrelEngineer\":\"Ingénieur DevRel\",\"createComprehensiveGuidesApiReferences\":\"Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.\",\"documentation\":\"Documentation\",\"remote2\":\"À distance\",\"technicalWriter\":\"Rédacteur technique\",\"designAndScaleOurCloud\":\"Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de lancements automatisés par jour.\",\"engineering1\":\"Ingénierie\",\"remote1\":\"À distance\",\"backendEngineer\":\"Ingénieur backend\",\"buildAndMaintainOurBenchmarking\":\"Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.\",\"engineering\":\"Ingénierie\",\"remote\":\"À distance\",\"seniorFrontendEngineer\":\"Ingénieur frontend senior\"},\"es\":{\"applyNow\":\"Aplicar ahora\",\"openPositions\":\"Posiciones abiertas\",\"ensureTheAccuracyAndReliability\":\"Garantice la precisión и la confiabilidad de los resultados del benchmark mediante pruebas и validaciones rigurosas.\",\"engineering2\":\"Ingeniería\",\"remote3\":\"Remoto\",\"qaEngineer\":\"Ingeniero de QA\",\"engageWithTheI18nCommunity\":\"Interactúe con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.\",\"community\":\"Comunidad\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"devrelEngineer\":\"Ingeniero DevRel\",\"createComprehensiveGuidesApiReferences\":\"Cree guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\",\"documentation\":\"Documentación\",\"remote2\":\"Remoto\",\"technicalWriter\":\"Redactor técnico\",\"designAndScaleOurCloud\":\"Diseñe и escale nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.\",\"engineering1\":\"Ingeniería\",\"remote1\":\"Remoto\",\"backendEngineer\":\"Ingeniero de backend\",\"buildAndMaintainOurBenchmarking\":\"Cree и mantenga nuestro panel de benchmarking и las herramientas de desarrollo utilizando React, TypeScript и Vite.\",\"engineering\":\"Ingeniería\",\"remote\":\"Remoto\",\"seniorFrontendEngineer\":\"Ingeniero de frontend sénior\"},\"de\":{\"applyNow\":\"Jetzt bewerben\",\"openPositions\":\"Offene Stellen\",\"ensureTheAccuracyAndReliability\":\"Gewährleistung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.\",\"engineering2\":\"Engineering\",\"remote3\":\"Remote\",\"qaEngineer\":\"QA-Ingenieur\",\"engageWithTheI18nCommunity\":\"Tauschen Sie sich mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge aus.\",\"community\":\"Community\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"devrelEngineer\":\"DevRel-Ingenieur\",\"createComprehensiveGuidesApiReferences\":\"Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\",\"documentation\":\"Dokumentation\",\"remote2\":\"Remote\",\"technicalWriter\":\"Technischer Redakteur\",\"designAndScaleOurCloud\":\"Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Läufen verarbeitet.\",\"engineering1\":\"Engineering\",\"remote1\":\"Remote\",\"backendEngineer\":\"Backend-Ingenieur\",\"buildAndMaintainOurBenchmarking\":\"Erstellen und warten Sie unser Benchmarking-Dashboard und Entwickler-Tools mit React, TypeScript und Vite.\",\"engineering\":\"Engineering\",\"remote\":\"Remote\",\"seniorFrontendEngineer\":\"Senior Frontend-Ingenieur\"},\"it\":{\"applyNow\":\"Candidati ora\",\"openPositions\":\"Posizioni aperte\",\"ensureTheAccuracyAndReliability\":\"Garantire l'accuratezza e l'affidabilità dei risultati del benchmark attraverso test e validazioni rigorosi.\",\"engineering2\":\"Ingegneria\",\"remote3\":\"Remoto\",\"qaEngineer\":\"Ingegnere QA\",\"engageWithTheI18nCommunity\":\"Interagisci con la community i18n attraverso talk, workshop, post sul blog e contributi open source.\",\"community\":\"Community\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"devrelEngineer\":\"Ingegnere DevRel\",\"createComprehensiveGuidesApiReferences\":\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\",\"documentation\":\"Documentazione\",\"remote2\":\"Remoto\",\"technicalWriter\":\"Scrittore tecnico\",\"designAndScaleOurCloud\":\"Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatizzate ogni giorno.\",\"engineering1\":\"Ingegneria\",\"remote1\":\"Remoto\",\"backendEngineer\":\"Ingegnere backend\",\"buildAndMaintainOurBenchmarking\":\"Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\",\"engineering\":\"Ingegneria\",\"remote\":\"Remoto\",\"seniorFrontendEngineer\":\"Ingegnere frontend senior\"},\"pt\":{\"applyNow\":\"Candidatar-se agora\",\"openPositions\":\"Vagas Abertas\",\"ensureTheAccuracyAndReliability\":\"Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.\",\"engineering2\":\"Engenharia\",\"remote3\":\"Remoto\",\"qaEngineer\":\"Engenheiro de QA\",\"engageWithTheI18nCommunity\":\"Envolver-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.\",\"community\":\"Comunidade\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"devrelEngineer\":\"Engenheiro DevRel\",\"createComprehensiveGuidesApiReferences\":\"Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\",\"documentation\":\"Documentação\",\"remote2\":\"Remoto\",\"technicalWriter\":\"Redator Técnico\",\"designAndScaleOurCloud\":\"Projetar e escalar nossa infraestrutura de benchmarking em nuvem, lidando com milhares de execuções automatizadas diariamente.\",\"engineering1\":\"Engenharia\",\"remote1\":\"Remoto\",\"backendEngineer\":\"Engenheiro Backend\",\"buildAndMaintainOurBenchmarking\":\"Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\",\"engineering\":\"Engenharia\",\"remote\":\"Remoto\",\"seniorFrontendEngineer\":\"Engenheiro Frontend Sênior\"},\"zh\":{\"applyNow\":\"立即申请\",\"openPositions\":\"开放职位\",\"ensureTheAccuracyAndReliability\":\"通过严格的测试和验证确保基准测试结果的准确性和可靠性。\",\"engineering2\":\"工程\",\"remote3\":\"远程\",\"qaEngineer\":\"QA 工程师\",\"engageWithTheI18nCommunity\":\"通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\",\"community\":\"社区\",\"sanFranciscoRemote\":\"旧金山 / 远程\",\"devrelEngineer\":\"DevRel 工程师\",\"createComprehensiveGuidesApiReferences\":\"为我们的基准测试平台创建全面的指南、API 参考和教程。\",\"documentation\":\"文档\",\"remote2\":\"远程\",\"technicalWriter\":\"技术作家\",\"designAndScaleOurCloud\":\"设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。\",\"engineering1\":\"工程\",\"remote1\":\"远程\",\"backendEngineer\":\"后端工程师\",\"buildAndMaintainOurBenchmarking\":\"使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。\",\"engineering\":\"工程\",\"remote\":\"远程\",\"seniorFrontendEngineer\":\"高级前端工程师\"},\"ja\":{\"applyNow\":\"今すぐ応募\",\"openPositions\":\"募集職種\",\"ensureTheAccuracyAndReliability\":\"厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\",\"engineering2\":\"エンジニアリング\",\"remote3\":\"リモート\",\"qaEngineer\":\"QA エンジニア\",\"engageWithTheI18nCommunity\":\"講演、ワークショップ、ブログ記事、オープンソースへの貢献を通じて、i18n コミュニティと交流します。\",\"community\":\"コミュニティ\",\"sanFranciscoRemote\":\"サンフランシスコ / リモート\",\"devrelEngineer\":\"DevRel エンジニア\",\"createComprehensiveGuidesApiReferences\":\"当社のベンチマークプラットフォーム向けの包括的なガイド、API リファレンス、およびチュートリアルを作成します。\",\"documentation\":\"ドキュメント\",\"remote2\":\"リモート\",\"technicalWriter\":\"テクニカルライター\",\"designAndScaleOurCloud\":\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計および拡張します。\",\"engineering1\":\"エンジニアリング\",\"remote1\":\"リモート\",\"backendEngineer\":\"バックエンドエンジニア\",\"buildAndMaintainOurBenchmarking\":\"React、TypeScript、および Vite を使用して、ベンチマークダッシュボードと開発者ツールを構築および維持します。\",\"engineering\":\"エンジニアリング\",\"remote\":\"リモート\",\"seniorFrontendEngineer\":\"シニアフロントエンドエンジニア\"},\"ko\":{\"applyNow\":\"지금 지원하기\",\"openPositions\":\"채용 중인 포지션\",\"ensureTheAccuracyAndReliability\":\"엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\",\"engineering2\":\"엔지니어링\",\"remote3\":\"원격\",\"qaEngineer\":\"QA 엔지니어\",\"engageWithTheI18nCommunity\":\"강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하세요.\",\"community\":\"커뮤니티\",\"sanFranciscoRemote\":\"샌프란시스코 / 원격\",\"devrelEngineer\":\"DevRel 엔지니어\",\"createComprehensiveGuidesApiReferences\":\"벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 자습서를 만듭니다.\",\"documentation\":\"문서\",\"remote2\":\"원격\",\"technicalWriter\":\"기술 작가\",\"designAndScaleOurCloud\":\"매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.\",\"engineering1\":\"엔지니어링\",\"remote1\":\"원격\",\"backendEngineer\":\"백엔드 엔지니어\",\"buildAndMaintainOurBenchmarking\":\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.\",\"engineering\":\"엔지니어링\",\"remote\":\"원격\",\"seniorFrontendEngineer\":\"시니어 프론트엔드 엔지니어\"},\"ru\":{\"applyNow\":\"Подать заявку\",\"openPositions\":\"Открытые вакансии\",\"ensureTheAccuracyAndReliability\":\"Обеспечение точности и надежности результатов бенчмаркинга посредством строгого тестирования и валидации.\",\"engineering2\":\"Разработка\",\"remote3\":\"Удаленно\",\"qaEngineer\":\"QA-инженер\",\"engageWithTheI18nCommunity\":\"Взаимодействие с сообществом i18n посредством выступлений, семинаров, постов в блогах и вклада в open source.\",\"community\":\"Сообщество\",\"sanFranciscoRemote\":\"Сан-Франциско / Удаленно\",\"devrelEngineer\":\"DevRel-инженер\",\"createComprehensiveGuidesApiReferences\":\"Создание исчерпывающих руководств, справок по API и туториалов для нашей платформы бенчмаркинга.\",\"documentation\":\"Документация\",\"remote2\":\"Удаленно\",\"technicalWriter\":\"Технический писатель\",\"designAndScaleOurCloud\":\"Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\",\"engineering1\":\"Разработка\",\"remote1\":\"Удаленно\",\"backendEngineer\":\"Бэкенд-инженер\",\"buildAndMaintainOurBenchmarking\":\"Создание и поддержка нашего дашборда для бенчмаркинга и инструментов разработки с использованием React, TypeScript и Vite.\",\"engineering\":\"Разработка\",\"remote\":\"Удаленно\",\"seniorFrontendEngineer\":\"Старший фронтенд-инженер\"}}}"),
	localIds: ["open-positions::local::src/components/pages/careers/openPositions.content.ts"]
};
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
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
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
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
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
function IntlayerNodeWrapper($$anchor, $$props) {
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, Renderer, false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_1 = ($$anchor) => {
		Renderer()($$anchor, $.spread_props(rendererProps, {
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
		if (typeof Renderer() === "string") $$render(consequent);
		else if (typeof Renderer() === "function") $$render(consequent_1, 1);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = class extends IntlayerNodeWrapper {
		constructor(options) {
			super({
				...options,
				props: {
					...options.props,
					Renderer: args.component,
					rendererProps: args.props,
					value: args.value
				}
			});
		}
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
	Object.defineProperty(Node, "toString", {
		value: () => args.value?.toString() ?? "",
		writable: true,
		configurable: true
	});
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	return Node;
};
var intlayerNodePlugins = process.env["INTLAYER_NODE_TYPE_INTLAYER_NODE"] === "false" ? fallbackPlugin : {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, { children, ...rest }) => renderIntlayerNode({
		value: children ?? node,
		component: void 0,
		props: rest
	})
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		intlayerNodePlugins,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
var useDictionary = (dictionary, locale) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		return getDictionary(dictionary, locale ?? context?.locale ?? $store.locale);
	});
};
var root_1 = $.from_html(`<div class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"><div><h3 class="text-base font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p> <div class="mt-2 flex gap-2"><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"> </span> <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"> </span> <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"> </span></div></div> <button type="button" class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></div>`);
var root = $.from_html(`<h2 class="mb-6 text-2xl font-bold text-foreground"> </h2> <div class="space-y-4"></div>`, 1);
function OpenPositions($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content = useDictionary(open_positions_default);
	const openings = [
		{
			title: get(content).seniorFrontendEngineer,
			location: get(content).remote,
			type: "Full-time",
			dept: get(content).engineering,
			desc: get(content).buildAndMaintainOurBenchmarking
		},
		{
			title: get(content).backendEngineer,
			location: get(content).remote1,
			type: "Full-time",
			dept: get(content).engineering1,
			desc: get(content).designAndScaleOurCloud
		},
		{
			title: get(content).technicalWriter,
			location: get(content).remote2,
			type: "Part-time",
			dept: get(content).documentation,
			desc: get(content).createComprehensiveGuidesApiReferences
		},
		{
			title: get(content).devrelEngineer,
			location: get(content).sanFranciscoRemote,
			type: "Full-time",
			dept: get(content).community,
			desc: get(content).engageWithTheI18nCommunity
		},
		{
			title: get(content).qaEngineer,
			location: get(content).remote3,
			type: "Full-time",
			dept: get(content).engineering2,
			desc: get(content).ensureTheAccuracyAndReliability
		}
	];
	$.init();
	var fragment = root();
	var h2 = $.first_child(fragment);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	$.each(div, 5, () => openings, (o) => o.title, ($$anchor, o) => {
		var div_1 = root_1();
		var div_2 = $.child(div_1);
		var h3 = $.child(div_2);
		var text_1 = $.child(h3, true);
		$.reset(h3);
		var p = $.sibling(h3, 2);
		var text_2 = $.child(p, true);
		$.reset(p);
		var div_3 = $.sibling(p, 2);
		var span = $.child(div_3);
		var text_3 = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_4 = $.child(span_1, true);
		$.reset(span_1);
		var span_2 = $.sibling(span_1, 2);
		var text_5 = $.child(span_2, true);
		$.reset(span_2);
		$.reset(div_3);
		$.reset(div_2);
		var button = $.sibling(div_2, 2);
		var text_6 = $.child(button, true);
		$.reset(button);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_text(text_1, $.get(o).title);
			$.set_text(text_2, $.get(o).desc);
			$.set_text(text_3, $.get(o).dept);
			$.set_text(text_4, $.get(o).location);
			$.set_text(text_5, $.get(o).type);
			$.set_text(text_6, $content().applyNow);
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.template_effect(() => $.set_text(text, $content().openPositions));
	$.append($$anchor, fragment);
	$.pop();
	$$cleanup();
}
export { OpenPositions as default };

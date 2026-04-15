import { Fragment, createContext, createElement, isValidElement, lazy, useContext, useMemo } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var blog_list_default = {
	key: "blog-list",
	content: /* @__PURE__ */ JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"g\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"m\":\"March 15, 2026\",\"w\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"k\":\"How to Reduce Your i18n Bundle by 60%\",\"n\":\"March 8, 2026\",\"q\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"u\":\"The State of Internationalization in React\",\"j\":\"February 28, 2026\",\"c\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"p\":\"Migrating from react-i18next to Lingui\",\"i\":\"February 15, 2026\",\"a\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"t\":\"Server Components and i18n: What Changes?\",\"h\":\"February 1, 2026\",\"r\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"f\":\"Benchmark Methodology: How We Test\",\"l\":\"January 20, 2026\",\"b\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"s\":\"Read More →\",\"e\":\"Benchmark\",\"v\":\"Tutorial\",\"d\":\"Analysis\",\"o\":\"Meta\"},\"fr\":{\"g\":\"Comparer les bibliothèques i18n en 2026 : une analyse approfondie\",\"m\":\"15 mars 2026\",\"w\":\"Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.\",\"k\":\"Comment réduire votre bundle i18n de 60 %\",\"n\":\"8 mars 2026\",\"q\":\"Stratégies pratiques pour optimiser les bundles de traduction, y compris le lazy loading, le fractionnement du code et les optimisations au moment de la compilation.\",\"u\":\"L'état de l'internationalisation dans React\",\"j\":\"28 février 2026\",\"c\":\"Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.\",\"p\":\"Migrer de react-i18next vers Lingui\",\"i\":\"15 février 2026\",\"a\":\"Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\",\"t\":\"Server Components et i18n : qu'est-ce qui change ?\",\"h\":\"1er février 2026\",\"r\":\"Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.\",\"f\":\"Méthodologie du Benchmark : comment nous testons\",\"l\":\"20 janvier 2026\",\"b\":\"Un regard transparent sur notre méthodologie de benchmark, incluant les environnements de test, les méthodes statistiques et la reproductibilité.\",\"s\":\"Lire la suite →\",\"e\":\"Benchmark\",\"v\":\"Tutoriel\",\"d\":\"Analyse\",\"o\":\"Méta\"},\"es\":{\"g\":\"Comparativa de bibliotecas i18n en 2026: un análisis profundo\",\"m\":\"15 de marzo de 2026\",\"w\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Estos son los resultados sorprendentes.\",\"k\":\"Cómo reducir su bundle i18n en un 60 %\",\"n\":\"8 de marzo de 2026\",\"q\":\"Estrategias prácticas para optimizar los conjuntos de traducción, incluido el lazy loading, la división del código y las optimizaciones en el momento de la compilación.\",\"u\":\"El estado de la internacionalización en React\",\"j\":\"28 de febrero de 2026\",\"c\":\"Una visión general del ecosistema actual de i18n en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"p\":\"Migración de react-i18next a Lingui\",\"i\":\"15 de febrero de 2026\",\"a\":\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\",\"t\":\"Server Components e i18n: ¿Qué cambia?\",\"h\":\"1 de febrero de 2026\",\"r\":\"Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"f\":\"Metodología del Benchmark: Cómo probamos\",\"l\":\"20 de enero de 2026\",\"b\":\"Una mirada transparente a nuestra metodología de benchmarking, incluidos los entornos de prueba, los métodos estadísticos y la reproducibilidad.\",\"s\":\"Leer más →\",\"e\":\"Benchmark\",\"v\":\"Tutorial\",\"d\":\"Análisis\",\"o\":\"Meta\"},\"de\":{\"g\":\"i18n-Bibliotheken im Jahr 2026 im Vergleich: Eine tiefgehende Analyse\",\"m\":\"15. März 2026\",\"w\":\"Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"k\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"n\":\"8. März 2026\",\"q\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.\",\"u\":\"Der Stand der Internationalisierung in React\",\"j\":\"28. Februar 2026\",\"c\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, einschließlich Trends, aufkommender Muster und Vorlieben der Community.\",\"p\":\"Migration von react-i18next zu Lingui\",\"i\":\"15. Februar 2026\",\"a\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"t\":\"Server Components und i18n: Was ändert sich?\",\"h\":\"1. Februar 2026\",\"r\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"f\":\"Benchmark-Methodik: Wie wir testen\",\"l\":\"20. Januar 2026\",\"b\":\"Ein transparenter Blick auf unsere Benchmark-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"s\":\"Weiterlesen →\",\"e\":\"Benchmark\",\"v\":\"Tutorial\",\"d\":\"Analyse\",\"o\":\"Meta\"},\"it\":{\"g\":\"Confronto tra librerie i18n nel 2026: un’analisi approfondita\",\"m\":\"15 marzo 2026\",\"w\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in base a prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"k\":\"Come ridurre il bundle i18n del 60%\",\"n\":\"8 marzo 2026\",\"q\":\"Strategie pratiche per ottimizzare i bundle di traduzione tra cui caricamento lento, suddivisione del codice e ottimizzazioni in fase di compilazione.\",\"u\":\"Lo stato dell'internazionalizzazione in React\",\"j\":\"28 febbraio 2026\",\"c\":\"Una panoramica dell’attuale ecosistema i18n in React, con tendenze, pattern emergenti e preferenze della comunità.\",\"p\":\"Migrazione da react-i18next a Lingui\",\"i\":\"15 febbraio 2026\",\"a\":\"Una guida dettagliata sulla migrazione di un’app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"t\":\"Server Components e i18n: cosa cambia?\",\"h\":\"1 febbraio 2026\",\"r\":\"I React Server Components introducono nuovi pattern per l’internazionalizzazione. Esploriamo implicazioni e best practice.\",\"f\":\"Metodologia del benchmark: come testiamo\",\"l\":\"20 gennaio 2026\",\"b\":\"Uno sguardo trasparente alla nostra metodologia di benchmark, inclusi ambienti di test, metodi statistici e riproducibilità.\",\"s\":\"Leggi di più →\",\"e\":\"Benchmark\",\"v\":\"Tutorial\",\"d\":\"Analisi\",\"o\":\"Meta\"},\"pt\":{\"g\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"m\":\"15 de março de 2026\",\"w\":\"Testamos 12 bibliotecas de internacionalização diferentes em desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"k\":\"Como reduzir seu bundle i18n em 60%\",\"n\":\"8 de março de 2026\",\"q\":\"Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.\",\"u\":\"O estado da internacionalização no React\",\"j\":\"28 de fevereiro de 2026\",\"c\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"p\":\"Migrando do react-i18next para o Lingui\",\"i\":\"15 de fevereiro de 2026\",\"a\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"t\":\"componentes de servidor e i18n: o que muda?\",\"h\":\"1 de fevereiro de 2026\",\"r\":\"Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"f\":\"Metodologia de Benchmark: como testamos\",\"l\":\"20 de janeiro de 2026\",\"b\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estadísticos e reprodutibilidade.\",\"s\":\"Leia mais →\",\"e\":\"Benchmark\",\"v\":\"Tutorial\",\"d\":\"Análise\",\"o\":\"Meta\"},\"zh\":{\"g\":\"2026 年 i18n 库对比：深度分析\",\"m\":\"2026年3月15日\",\"w\":\"我们针对性能、包大小和 DX 测试了 12 种不同的国际化库。以下是令人惊讶的结果。\",\"k\":\"如何将 i18n 包大小减少 60%\",\"n\":\"2026年3月8日\",\"q\":\"优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"u\":\"React 国际化的现状\",\"j\":\"2026年2月28日\",\"c\":\"React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。\",\"p\":\"从 react-i18next 迁移到 Lingui\",\"i\":\"2026年2月15日\",\"a\":\"从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。\",\"t\":\"服务器组件和 i18n：有什么变化？\",\"h\":\"2026年2月1日\",\"r\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"f\":\"基准测试方法学：我们如何测试\",\"l\":\"2026年1月20日\",\"b\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。\",\"s\":\"阅读更多 →\",\"e\":\"基准测试\",\"v\":\"教程\",\"d\":\"分析\",\"o\":\"元数据\"},\"ja\":{\"g\":\"2026 年の i18n ライブラリの比較：詳細な分析\",\"m\":\"2026年3月15日\",\"w\":\"パフォーマンス、バンドルサイズ、DX にわたって 12 の異なる国際化ライブラリをテストしました。驚くべき結果が得られました。\",\"k\":\"i18n バンドルを 60% 削減する方法\",\"n\":\"2026年3月8日\",\"q\":\"遅延読み込み、コード分割、コンパイル時の最適化などの翻訳バンドルを最適化するための実用的な戦略。\",\"u\":\"React における国際化の現状\",\"j\":\"2026年2月28日\",\"c\":\"トレンド、新たなパターン、コミュニティの好みなど、React における現在の i18n エコシステムの概要。\",\"p\":\"react-i18next から Lingui への移行\",\"i\":\"2026年2月15日\",\"a\":\"50,000 の翻訳キーを持つプロダクションアプリを react-i18next から Lingui に移行するためのステップバイステップガイド。\",\"t\":\"サーバーコンポーネントと i18n：何が変わるのか？\",\"h\":\"2026年2月1日\",\"r\":\"React サーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを検討します。\",\"f\":\"ベンチマークの方法論：テスト方法\",\"l\":\"2026年1月20日\",\"b\":\"テスト環境、統計手法、再現性など、当社のベンチマーク方法論を透過的に公開します。\",\"s\":\"続きを読む →\",\"e\":\"ベンチマーク\",\"v\":\"チュートリアル\",\"d\":\"分析\",\"o\":\"メタ\"},\"ko\":{\"g\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"m\":\"2026년 3월 15일\",\"w\":\"성능, 번들 크기 및 DX 전반에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 여기 놀라운 결과가 있습니다.\",\"k\":\"i18n 번들을 60% 줄이는 방법\",\"n\":\"2026년 3월 8일\",\"q\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함한 번역 번들 최적화를위한 실용적인 전략.\",\"u\":\"React의 국제화 현황\",\"j\":\"2026년 2월 28일\",\"c\":\"React의 현재 i18n 생태계에 대한 개요로, 트렌드, 떠오르는 패턴 및 커뮤니티 선호도를 다룹니다.\",\"p\":\"react-i18next에서 Lingui로 마이그레이션\",\"i\":\"2026년 2월 15일\",\"a\":\"50,000 개의 번역 키가있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드.\",\"t\":\"서버 구성 요소 및 i18n: 무엇이 변합니까?\",\"h\":\"2026년 2월 1일\",\"r\":\"React Server Components는 국제화를위한 새로운 패턴을 도입합니다. 우리는 그 함의와 모범 사례를 탐구합니다.\",\"f\":\"벤치 마크 방법론 : 테스트 방법\",\"l\":\"2026년 1월 20일\",\"b\":\"테스트 환경, 통계 방법 및 재현성을 포함한 벤치 마크 방법론에 대한 투명한 살펴보기.\",\"s\":\"더 읽어보기 →\",\"e\":\"벤치마크\",\"v\":\"튜토리얼\",\"d\":\"분석\",\"o\":\"메타\"},\"ru\":{\"g\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"m\":\"15 марта 2026 года\",\"w\":\"Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\",\"k\":\"Как уменьшить бандл i18n на 60%\",\"n\":\"8 марта 2026 года\",\"q\":\"Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.\",\"u\":\"Состояние интернационализации в React\",\"j\":\"28 февраля 2026 года\",\"c\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.\",\"p\":\"Миграция с react-i18next на Lingui\",\"i\":\"15 февраля 2026 года\",\"a\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.\",\"t\":\"Server Components и i18n: что меняется?\",\"h\":\"1 февраля 2026 года\",\"r\":\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\",\"f\":\"Методология бенчмарка: как мы тестируем\",\"l\":\"20 января 2026 года\",\"b\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"s\":\"Читать далее →\",\"e\":\"Бенчмарк\",\"v\":\"Руководство\",\"d\":\"Анализ\",\"o\":\"Мета\"}}}")
};
//#endregion
//#region .intlayer/config/configuration.mjs
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
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/IntlayerNode.mjs
var renderIntlayerNode = ({ children, value, additionalProps }) => {
	const element = isValidElement(children) ? children : /* @__PURE__ */ jsx(Fragment$1, { children });
	return new Proxy(element, { get(target, prop, receiver) {
		if (prop === "value") return value;
		if (additionalProps && Object.keys(additionalProps).includes(prop)) return additionalProps[prop];
		return Reflect.get(target, prop, receiver);
	} });
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/reactElement/renderReactElement.mjs
var renderReactElement = (element) => {
	if (element === null || typeof element !== "object") return element;
	const convertChildrenAsArray = (element) => {
		const children = element.props?.children;
		if (Array.isArray(children)) {
			const childrenResult = children.map((child, index) => {
				const renderedChild = renderReactElement(child);
				if (typeof renderedChild === "object" && renderedChild !== null && "type" in renderedChild) {
					const childElement = renderedChild;
					return createElement(childElement.type, {
						...childElement.props,
						key: index
					}, ...Array.isArray(childElement.props?.children) ? childElement.props.children : typeof childElement.props?.children !== "undefined" ? [childElement.props.children] : []);
				}
				return renderedChild;
			});
			return {
				...element,
				props: {
					...element.props,
					children: childrenResult
				}
			};
		} else if (typeof children !== "undefined" && children !== null) {
			const renderedChild = renderReactElement(children);
			return {
				...element,
				props: {
					...element.props,
					children: [renderedChild]
				}
			};
		}
		return {
			...element,
			props: {
				...element.props,
				children: []
			}
		};
	};
	const { type, props } = convertChildrenAsArray(element);
	return createElement(type ?? "span", props, ...props.children);
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+types@8.7.1-canary-0/node_modules/@intlayer/types/dist/esm/nodeType.mjs
var TRANSLATION = "translation";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getContent/deepTransform.mjs
/**
* Recursively traverses a node (object/array/primitive).
* Applies the *first* plugin that can transform a node, then stops descending further.
* If no plugin transforms it, it recurses into its children.
*/
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
		result[key] = deepTransformNode(node[key], childProps);
	}
	return result;
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getInsertion.mjs
/**
* Allow to insert values in a string.
*
* Usage:
*
* ```ts
* const content = getInsertion('Hello {{name}}!', {
*  name: 'John',
* });
* // 'Hello John!'
* ```
*
*/
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getTranslation.mjs
/**
* Check if a value is a plain object that can be safely merged.
* Returns false for Promises, React elements, class instances, etc.
*/
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
/**
* Recursively merges two objects, skipping undefined source values.
* First argument takes precedence. Arrays replace rather than merge.
*/
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
/**
* Picks the appropriate content from a locale map based on the provided locale.
*
* It handles:
* 1. Exact locale match (e.g., 'en-US').
* 2. Generic locale fallback (e.g., 'en' if 'en-US' is not found).
* 3. Explicit fallback locale.
* 4. Deep merging of objects to ensure partial translations are complemented by fallbacks.
*
* @param languageContent - A map of locales to content.
* @param locale - The target locale to retrieve.
* @param fallback - Optional fallback locale if the target is not found.
* @returns The translated content.
*
* @example
* ```ts
* const content = getTranslation({
*   en: 'Hello',
*   fr: 'Bonjour',
* }, 'fr');
* // 'Bonjour'
* ```
*/
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
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getContent/plugins.mjs
/**
* True when the translation node type is explicitly disabled at build time.
*/
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
/**
* True when the insertion node type is explicitly disabled at build time.
*/
var TREE_SHAKE_INSERTION$1 = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
/** ---------------------------------------------
* FALLBACK PLUGIN
*
* Used to fallback a tree-shaken plugin
* --------------------------------------------- */
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
/** Translation plugin. Replaces node with a locale string if nodeType = Translation. */
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const result = { ...node["translation"] ?? {} };
		for (const key in result) {
			const childProps = {
				...props,
				children: result[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(result[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
/** Enumeration plugin. Replaces node with a function that takes quantity => string. */
var enumerationPlugin = fallbackPlugin;
/** Condition plugin. Replaces node with a function that takes boolean => string. */
var conditionPlugin = fallbackPlugin;
/** Insertion plugin. Replaces node with a function that takes quantity => string. */
var insertionPlugin$1 = TREE_SHAKE_INSERTION$1 ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		/** Insertion string plugin. Replaces string node with a component that render the insertion. */
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string",
			transform: (node, subProps, deepTransformNode) => {
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
		return deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
	}
};
/** Gender plugin. Replaces node with a function that takes gender => string. */
var genderPlugin = fallbackPlugin;
/** Nested plugin. Replaces node with the result of `getNesting`. */
var nestedPlugin = (locale) => fallbackPlugin;
/** File plugin. Replaces node with the result of `getNesting`. */
var filePlugin = fallbackPlugin;
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getContent/getContent.mjs
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
].filter(Boolean);
/**
* Transforms a node in a single pass, applying each plugin as needed.
*
* @param node The node to transform.
* @param locale The locale to use if your transformers need it (e.g. for translations).
*/
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getDictionary.mjs
/**
* Transforms a dictionary in a single pass, applying each plugin as needed.
*
* @param dictionary The dictionary to transform.
* @param locale The locale to use if your transformers need it (e.g. for translations).
* @param additionalPlugins An array of NodeTransformer that define how to transform recognized nodes.
*                      If omitted, we’ll use a default set of plugins.
*/
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/splitAndJoinInsertion.mjs
/**
* Check if a value is a complex object (not a primitive)
* Used to determine if values need to be wrapped in fragments
*/
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
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/plugins.mjs
/**
* True when the intlayer node type is explicitly disabled at build time.
*/
var TREE_SHAKE_INTLAYER_NODE = process.env["INTLAYER_NODE_TYPE_INTLAYER_NODE"] === "false";
/**
* True when the react node type is explicitly disabled at build time.
*/
var TREE_SHAKE_REACT_NODE = process.env["INTLAYER_NODE_TYPE_REACT_NODE"] === "false";
/**
* True when the insertion node type is explicitly disabled at build time.
*/
var TREE_SHAKE_INSERTION = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
lazy(() => import("./MarkdownRendererPlugin-BVvH-EpF.js").then((m) => ({ default: m.MarkdownRendererPlugin })));
lazy(() => import("./HTMLRendererPlugin-iCJs3Sy5.js").then((m) => ({ default: m.HTMLRendererPlugin })));
/** Translation plugin. Replaces node with a locale string if nodeType = Translation. */
var intlayerNodePlugins = TREE_SHAKE_INTLAYER_NODE ? fallbackPlugin : {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: rest.children,
		children: rest.children
	})
};
/** Translation plugin. Replaces node with a locale string if nodeType = Translation. */
var reactNodePlugins = TREE_SHAKE_REACT_NODE ? fallbackPlugin : {
	id: "react-node-plugin",
	canHandle: (node) => typeof node === "object" && typeof node?.props !== "undefined" && typeof node.key !== "undefined",
	transform: (node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: "[[react-element]]",
		children: renderReactElement(node)
	})
};
/**
* Split insertion string and join with React nodes using shared core logic
*/
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
/** Insertion plugin for React. Handles component/node insertion. */
var insertionPlugin = TREE_SHAKE_INSERTION ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		/** Insertion string plugin. Replaces string node with a component that render the insertion. */
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string",
			transform: (node, subProps, deepTransformNode) => {
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
		const result = deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
		if (typeof children === "object" && children !== null && "nodeType" in children && ["enumeration", "condition"].includes(children.nodeType)) return (values) => (arg) => {
			const inner = result(arg);
			if (typeof inner === "function") return inner(values);
			return inner;
		};
		return result;
	}
};
var markdownPlugin = fallbackPlugin;
/** HTML plugin. Replaces node with a function that takes components => ReactNode. */
var htmlPlugin = fallbackPlugin;
/**
* Get the plugins array for React content transformation.
* This function is used by both getIntlayer and getDictionary to ensure consistent plugin configuration.
*/
var getPlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	intlayerNodePlugins,
	reactNodePlugins,
	insertionPlugin,
	markdownPlugin,
	htmlPlugin
].filter(Boolean);
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/getDictionary.mjs
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/utils/localeStorage.mjs
/**
* True when cookie storage is explicitly disabled at build time.
*/
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
/**
* Retrieves the locale from browser storage mechanisms
* (cookies, localStorage, sessionStorage).
* Does not read from headers — use `getLocaleFromStorageServer` for that.
*/
var getLocaleFromStorageClient = (options) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
/**
* Context that stores the current locale on the client side.
*/
var IntlayerClientContext = createContext({
	locale: getLocaleFromStorageClient({
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
	}) ?? internationalization?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: true
});
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useDictionary.mjs
/**
* On the server side, Hook that transform a dictionary and return the content
*
* If the locale is not provided, it will use the locale from the client context
*/
var useDictionary = (dictionary, locale) => {
	const { locale: currentLocale } = useContext(IntlayerClientContext) ?? {};
	return useMemo(() => {
		return getDictionary(dictionary, locale ?? currentLocale);
	}, [
		dictionary.key,
		currentLocale,
		locale
	]);
};
//#endregion
//#region src/components/pages/blog/BlogList.tsx
function BlogList() {
	const content = useDictionary(blog_list_default);
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			{
				title: content.g.value,
				date: content.m.value,
				excerpt: content.w.value,
				category: content.e.value
			},
			{
				title: content.k.value,
				date: content.n.value,
				excerpt: content.q.value,
				category: content.v.value
			},
			{
				title: content.u.value,
				date: content.j.value,
				excerpt: content.c.value,
				category: content.d.value
			},
			{
				title: content.p.value,
				date: content.i.value,
				excerpt: content.a.value,
				category: content.v.value
			},
			{
				title: content.t.value,
				date: content.h.value,
				excerpt: content.r.value,
				category: content.d.value
			},
			{
				title: content.f.value,
				date: content.l.value,
				excerpt: content.b.value,
				category: content.o.value
			}
		].map((p) => /* @__PURE__ */ jsxs("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-3 flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: p.category
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xs text-muted-foreground",
						children: p.date
					})]
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: p.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: p.excerpt
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: content.s
				})
			]
		}, p.title))
	});
}
//#endregion
export { BlogList as default };
import { Fragment, createContext, createElement, useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
/**
* Helper to parse attributes from a tag string.
*/
var parseAttributes = (attributes) => {
	const props = {};
	const attrRegex = /([a-zA-Z0-9-]+)="([^"]*)"/g;
	let match = attrRegex.exec(attributes);
	while (match !== null) {
		props[match[1]] = match[2];
		match = attrRegex.exec(attributes);
	}
	return props;
};
var astCache = /* @__PURE__ */ new Map();
var parseHTML = (content) => {
	if (astCache.has(content)) return astCache.get(content);
	if (typeof content !== "string") return [];
	const tagRegex = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g;
	const elements = [];
	const stack = [];
	let lastIndex = 0;
	let match = tagRegex.exec(content);
	const appendChild = (child) => {
		(stack.length > 0 ? stack[stack.length - 1].children : elements).push(child);
	};
	while (match !== null) {
		const [fullMatch, isClosingRaw, tagName, attributesRaw, isSelfClosingRaw] = match;
		const matchIndex = match.index;
		if (matchIndex > lastIndex) appendChild(content.slice(lastIndex, matchIndex));
		const isClosing = isClosingRaw === "/";
		const isSelfClosing = isSelfClosingRaw === "/" || attributesRaw.trim().endsWith("/") || fullMatch.endsWith("/>");
		const cleanedAttributes = attributesRaw.trim().replace(/\/$/, "").trim();
		if (isClosing) {
			const last = stack[stack.length - 1];
			if (last && last.tagName === tagName) {
				const popped = stack.pop();
				if (popped) appendChild({
					tagName: popped.tagName,
					props: popped.props,
					children: popped.children
				});
			}
		} else if (isSelfClosing) appendChild({
			tagName,
			props: parseAttributes(cleanedAttributes),
			children: []
		});
		else {
			const tagProps = parseAttributes(cleanedAttributes);
			stack.push({
				tagName,
				children: [],
				props: tagProps
			});
		}
		lastIndex = matchIndex + fullMatch.length;
		match = tagRegex.exec(content);
	}
	if (lastIndex < content.length) appendChild(content.slice(lastIndex));
	while (stack.length > 0) {
		const last = stack.pop();
		if (last) appendChild({
			tagName: last.tagName,
			props: last.props,
			children: last.children
		});
	}
	astCache.set(content, elements);
	return elements;
};
/**
* Interprets a string containing HTML-like tags and replaces them with provided components or strings.
*/
var getHTML = (content, values) => {
	const ast = parseHTML(content);
	let keyCounter = 0;
	const renderASTNode = (node) => {
		if (typeof node === "string") return node;
		const { tagName, props, children } = node;
		const renderedChildren = children.flatMap(renderASTNode);
		const index = keyCounter++;
		let override = values[tagName];
		if (!override) {
			const lowerTagName = tagName.toLowerCase();
			const foundKey = Object.keys(values).find((key) => key.toLowerCase() === lowerTagName);
			if (foundKey) override = values[foundKey];
		}
		const key = `html-tag-${tagName}-${index}`;
		if (typeof override === "function") return override({
			...props,
			children: renderedChildren,
			key
		});
		if (typeof override === "string") {
			const component = values[override];
			if (typeof component === "function") return component({
				...props,
				children: renderedChildren,
				key
			});
			return renderedChildren;
		}
		if (typeof override === "object" && override !== null && "tag" in override) {
			const { tag: targetTag, props: extraProps } = override;
			const component = values[targetTag];
			if (typeof component === "function") return component({
				...props,
				...extraProps,
				children: renderedChildren,
				key
			});
			return renderedChildren;
		}
		return renderedChildren;
	};
	const result = ast.flatMap(renderASTNode);
	return result.length === 1 ? result[0] : result;
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/html/HTMLProvider.mjs
var HTMLContext = createContext(void 0);
var useHTMLContext = () => useContext(HTMLContext);
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/html/HTMLRenderer.mjs
/**
* Renders HTML-like content to JSX with the provided components.
*
* This function does not use context from HTMLProvider. Use `useHTMLRenderer`
* hook if you want to leverage provider context.
*/
var renderHTML = (content, { components = {} } = {}) => {
	const userComponents = Object.fromEntries(Object.entries(components).filter(([, Component]) => Component).map(([key, Component]) => [key, (props) => createElement(Component, props)]));
	return /* @__PURE__ */ jsx(Fragment, { children: getHTML(content, new Proxy(userComponents, { get(target, prop) {
		if (typeof prop === "string" && prop in target) return target[prop];
		if (typeof prop === "string" && /^[a-z][a-z0-9]*$/.test(prop)) return (props) => createElement(prop, props);
	} })) });
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/html/HTMLRendererPlugin.mjs
var HTMLRendererPlugin = (props) => {
	const { html, userComponents } = props;
	return renderHTML(html, { components: {
		...useHTMLContext()?.components,
		...userComponents
	} });
};
//#endregion
export { HTMLRendererPlugin };
import { createContext, useContext } from "react";
import "react/jsx-runtime";
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var MarkdownContext = createContext(void 0);
var useMarkdownContext = () => useContext(MarkdownContext);
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/markdown/MarkdownRendererPlugin.mjs
var MarkdownRendererPlugin = (props) => {
	const { children, options, components } = props;
	const context = useMarkdownContext();
	return (context?.renderMarkdown ?? ((md) => md))(children, options, {
		...context?.components ?? {},
		...components ?? {}
	});
};
//#endregion
export { MarkdownRendererPlugin };

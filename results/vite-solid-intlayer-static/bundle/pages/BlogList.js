import { Dynamic, createComponent, insert, template } from "solid-js/web";
import { For, createContext, createMemo, useContext } from "solid-js";
var blog_list_default = {
	key: "blog-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"g\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"m\":\"March 15, 2026\",\"w\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"e\":\"Benchmark\",\"k\":\"How to Reduce Your i18n Bundle by 60%\",\"n\":\"March 8, 2026\",\"q\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"v\":\"Tutorial\",\"u\":\"The State of Internationalization in React\",\"j\":\"February 28, 2026\",\"c\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"d\":\"Analysis\",\"p\":\"Migrating from react-i18next to Lingui\",\"i\":\"February 15, 2026\",\"a\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"t\":\"Server Components and i18n: What Changes?\",\"h\":\"February 1, 2026\",\"r\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"f\":\"Benchmark Methodology: How We Test\",\"l\":\"January 20, 2026\",\"b\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"o\":\"Meta\",\"s\":\"Read More →\"},\"fr\":{\"g\":\"Comparaison des bibliothèques i18n en 2026 : une analyse approfondie\",\"m\":\"15 mars 2026\",\"w\":\"Nous avons testé 12 bibliothèques d’internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.\",\"e\":\"Benchmark\",\"k\":\"Comment réduire votre bundle i18n de 60 %\",\"n\":\"8 mars 2026\",\"q\":\"Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.\",\"v\":\"Tutoriel\",\"u\":\"L'état de l'internationalisation dans React\",\"j\":\"28 février 2026\",\"c\":\"Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.\",\"d\":\"Analyse\",\"p\":\"Migration de react-i18next vers Lingui\",\"i\":\"15 février 2026\",\"a\":\"Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\",\"t\":\"Composants serveur et i18n : qu’est-ce qui change ?\",\"h\":\"1er février 2026\",\"r\":\"Les composants serveur React introduisent de nouveaux modèles d'internationalisation. Nous explorons les implications et les meilleures pratiques.\",\"f\":\"Méthodologie du benchmark : comment nous testons\",\"l\":\"20 janvier 2026\",\"b\":\"Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.\",\"o\":\"Méta\",\"s\":\"Lire la suite →\"},\"es\":{\"g\":\"Comparación de bibliotecas i18n en 2026: una inmersión profunda\",\"m\":\"15 de marzo de 2026\",\"w\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los resultados sorprendentes.\",\"e\":\"Benchmark\",\"k\":\"Cómo reducir su paquete i18n en un 60%\",\"n\":\"8 de marzo de 2026\",\"q\":\"Estrategias prácticas para optimizar los paquetes de traducción, incluida la carga diferida, la división de código y las optimizaciones en tiempo de compilación.\",\"v\":\"Tutorial\",\"u\":\"El estado de la internacionalización en React\",\"j\":\"28 de febrero de 2026\",\"c\":\"Una descripción general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"d\":\"Análisis\",\"p\":\"Migración de react-i18next a Lingui\",\"i\":\"15 de febrero de 2026\",\"a\":\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\",\"t\":\"Componentes del servidor e i18n: ¿qué cambia?\",\"h\":\"1 de febrero de 2026\",\"r\":\"React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"f\":\"Metodología de benchmark: cómo probamos\",\"l\":\"20 de enero de 2026\",\"b\":\"Una mirada transparente a nuestra metodología de benchmarking, incluidos los entornos de prueba, los métodos estadísticos y la reproducibilidad.\",\"o\":\"Meta\",\"s\":\"Leer más →\"},\"de\":{\"g\":\"I18n-Bibliotheken im Jahr 2026 im Vergleich: Ein tiefer Einblick\",\"m\":\"15. März 2026\",\"w\":\"Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"e\":\"Benchmark\",\"k\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"n\":\"8. März 2026\",\"q\":\"Praktische Strategien zur Optimierung von Übersetzungsbundles, einschließlich Lazy Loading, Code-Splitting und Optimierungen zur Kompilierzeit.\",\"v\":\"Tutorial\",\"u\":\"Der Stand der Internationalisierung in React\",\"j\":\"28. Februar 2026\",\"c\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"d\":\"Analyse\",\"p\":\"Migration von react-i18next zu Lingui\",\"i\":\"15. Februar 2026\",\"a\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"t\":\"Serverkomponenten und i18n: Was ändert sich?\",\"h\":\"1. Februar 2026\",\"r\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"f\":\"Benchmark-Methodik: Wie wir testen\",\"l\":\"20. Januar 2026\",\"b\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"o\":\"Meta\",\"s\":\"Mehr lesen →\"},\"it\":{\"g\":\"Confronto tra librerie i18n nel 2026: un'analisi approfondita\",\"m\":\"15 marzo 2026\",\"w\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"e\":\"Benchmark\",\"k\":\"Come ridurre il bundle i18n del 60%\",\"n\":\"8 marzo 2026\",\"q\":\"Strategie pratiche per l'ottimizzazione dei bundle di traduzione, inclusi lazy loading, code splitting e ottimizzazioni in fase di compilazione.\",\"v\":\"Tutorial\",\"u\":\"Lo stato dell'internazionalizzazione in React\",\"j\":\"28 febbraio 2026\",\"c\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"d\":\"Analisi\",\"p\":\"Migrazione da react-i18next a Lingui\",\"i\":\"15 febbraio 2026\",\"a\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"t\":\"Server Components e i18n: cosa cambia?\",\"h\":\"1 febbraio 2026\",\"r\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"f\":\"Metodologia del benchmark: come testiamo\",\"l\":\"20 gennaio 2026\",\"b\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.\",\"o\":\"Meta\",\"s\":\"Leggi di più →\"},\"pt\":{\"g\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"m\":\"15 de março de 2026\",\"w\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"e\":\"Benchmark\",\"k\":\"Como reduzir seu bundle i18n em 60%\",\"n\":\"8 de março de 2026\",\"q\":\"Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.\",\"v\":\"Tutorial\",\"u\":\"O estado da internacionalizzazione em React\",\"j\":\"28 de fevereiro de 2026\",\"c\":\"Uma visão geral do atual ecossistema i18n no React, cobrindo tendências, padrões emergenti e preferências da comunidade.\",\"d\":\"Análise\",\"p\":\"Migrando do react-i18next para o Lingui\",\"i\":\"15 de febbraio de 2026\",\"a\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"t\":\"Server Components e i18n: o que muda?\",\"h\":\"1 de fevereiro de 2026\",\"r\":\"Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"f\":\"Metodologia do benchmark: como testamos\",\"l\":\"20 de janeiro de 2026\",\"b\":\"Um olhar transparente em nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilità.\",\"o\":\"Meta\",\"s\":\"Leia Mais →\"},\"zh\":{\"g\":\"2026 年 i18n 库对比：深度剖析\",\"m\":\"2026年3月15日\",\"w\":\"我们对 12 种不同的国际化库进行了性能、捆绑包大小和 DX 方面的测试。以下是令人惊讶的结果。\",\"e\":\"基准测试\",\"k\":\"如何将 i18n 捆绑包减少 60%\",\"n\":\"2026年3月8日\",\"q\":\"优化翻译捆绑包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"v\":\"教程\",\"u\":\"React 国际化现状\",\"j\":\"2026年2月28日\",\"c\":\"React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。\",\"d\":\"分析\",\"p\":\"从 react-i18next 迁移到 Lingui\",\"i\":\"2026年2月15日\",\"a\":\"有关将具有 50,000 个翻译键的生产应用程序从 react-i18next 迁移到 Lingui 的分步指南。\",\"t\":\"服务器组件和 i18n：有哪些变化？\",\"h\":\"2026年2月1日\",\"r\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"f\":\"基准测试方法论：我们如何测试\",\"l\":\"2026年1月20日\",\"b\":\"透明地了解我们的基准测试方法论，包括测试环境、统计方法和可复现性。\",\"o\":\"元\",\"s\":\"阅读更多 →\"},\"ja\":{\"g\":\"2026年のi18nライブラリの比較：ディープダイブ\",\"m\":\"2026年3月15日\",\"w\":\"パフォーマンス、バンドルサイズ、およびDXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\",\"e\":\"ベンチマーク\",\"k\":\"i18nバンドルを60％削減する方法\",\"n\":\"2026年3月8日\",\"q\":\"遅延ロード、コード分割、コンパイル時最適化など、翻訳バンドルを最適化するための実用的な戦略。\",\"v\":\"チュートリアル\",\"u\":\"Reactにおける国際化の現状\",\"j\":\"2026年2月28日\",\"c\":\"トレンド、新しいパターン、コミュニティの好みをカバーする、Reactの現在のi18nエコシステムの概要。\",\"d\":\"分析\",\"p\":\"react-i18nextからLinguiへの移行\",\"i\":\"2026年2月15日\",\"a\":\"50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"t\":\"サーバーコンポーネントとi18n：何が変わるのか？\",\"h\":\"2026年2月1日\",\"r\":\"Reactサーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"f\":\"ベンチマーク手法：テスト方法\",\"l\":\"2026年1月20日\",\"b\":\"テスト環境、統計手法、再現性など、ベンチマーク手法を透明に公開します。\",\"o\":\"メタ\",\"s\":\"続きを読む →\"},\"ko\":{\"g\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"m\":\"2026년 3월 15일\",\"w\":\"성능, 번들 크기 및 DX 전반에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기에 있습니다.\",\"e\":\"벤치마크\",\"k\":\"i18n 번들을 60% 줄이는 방법\",\"n\":\"2026년 3월 8일\",\"q\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"v\":\"튜토리얼\",\"u\":\"React의 국제화 현황\",\"j\":\"2026년 2월 28일\",\"c\":\"트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계에 대한 개요입니다.\",\"d\":\"분석\",\"p\":\"react-i18next에서 Lingui로 마이그레이션\",\"i\":\"2026년 2월 15일\",\"a\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드입니다.\",\"t\":\"서버 컴포넌트 및 i18n: 무엇이 변합니까?\",\"h\":\"2026년 2월 1일\",\"r\":\"React 서버 컴포넌트는 국제화를 위한 새로운 패턴을 도입합니다. 우리는 그 영향과 모범 사례를 탐구합니다.\",\"f\":\"벤치마크 방법론: 테스트 방법\",\"l\":\"2026년 1월 20일\",\"b\":\"테스트 환경, 통계 방법 및 재현성을 포함한 벤치마킹 방법론을 투명하게 공개합니다.\",\"o\":\"메타\",\"s\":\"더 읽어보기 →\"},\"ru\":{\"g\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"m\":\"15 марта 2026 г.\",\"w\":\"Мы протестировали 12 различных библиотек интернационализации на предмет производительности, размера бандла и DX. Вот удивительные результаты.\",\"e\":\"Бенчмарк\",\"k\":\"Как уменьшить ваш i18n-бандл на 60%\",\"n\":\"8 марта 2026 г.\",\"q\":\"Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время компиляции.\",\"v\":\"Учебное пособие\",\"u\":\"Состояние интернационализации в React\",\"j\":\"28 февраля 2026 г.\",\"c\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\",\"d\":\"Анализ\",\"p\":\"Миграция с react-i18next на Lingui\",\"i\":\"15 февраля 2026 г.\",\"a\":\"Пошаговое руководство по миграции продакшен-приложения с 50 000 ключами перевода с react-i18next на Lingui.\",\"t\":\"Server Components и i18n: что меняется?\",\"h\":\"1 февраля 2026 г.\",\"r\":\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\",\"f\":\"Методология бенчмаркинга: как мы тестируем\",\"l\":\"20 января 2026 г.\",\"b\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"o\":\"Мета\",\"s\":\"Читать далее →\"}}}")
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
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2">`), _tmpl$2 = template(`<article class="rounded-lg border border-border bg-card p-6"><div class="mb-3 flex items-center gap-3"><span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"></span><span class="text-xs text-muted-foreground"></span></div><h2 class="mb-2 text-lg font-semibold text-foreground"></h2><p class="mb-4 text-sm text-muted-foreground"></p><button type=button class="text-sm font-medium text-primary hover:underline">`);
function BlogList() {
	const content = i(blog_list_default);
	const posts = [
		{
			title: content().comparingI18nLibrariesIn2026.value,
			date: content().march152026.value,
			excerpt: content().weTested12DifferentInternationalization.value,
			category: content().benchmark.value
		},
		{
			title: content().howToReduceYourI18n.value,
			date: content().march82026.value,
			excerpt: content().practicalStrategiesForOptimizingTranslat.value,
			category: content().tutorial.value
		},
		{
			title: content().theStateOfInternationalizationIn.value,
			date: content().february282026.value,
			excerpt: content().anOverviewOfTheCurrent.value,
			category: content().analysis.value
		},
		{
			title: content().migratingFromReactI18nextTo.value,
			date: content().february152026.value,
			excerpt: content().aStepByStepGuide.value,
			category: content().tutorial.value
		},
		{
			title: content().serverComponentsAndI18nWhat.value,
			date: content().february12026.value,
			excerpt: content().reactServerComponentsIntroduceNew.value,
			category: content().analysis.value
		},
		{
			title: content().benchmarkMethodologyHowWeTest.value,
			date: content().january202026.value,
			excerpt: content().aTransparentLookAtOur.value,
			category: content().meta.value
		}
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: posts,
			children: (p) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$3.nextSibling, _el$7 = _el$6.nextSibling, _el$8 = _el$7.nextSibling;
				insert(_el$4, () => p.category);
				insert(_el$5, () => p.date);
				insert(_el$6, () => p.title);
				insert(_el$7, () => p.excerpt);
				insert(_el$8, () => content().readMore);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { BlogList as default };

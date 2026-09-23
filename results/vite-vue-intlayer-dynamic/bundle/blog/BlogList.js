import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, openBlock, ref, renderList, shallowRef, toDisplayString, toValue, watch } from "vue";
var blog_list_default = {
	key: "blog-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"b\":\"Read More →\",\"a\":[{\"title\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"date\":\"March 15, 2026\",\"excerpt\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"category\":\"Benchmark\"},{\"title\":\"How to Reduce Your i18n Bundle by 60%\",\"date\":\"March 8, 2026\",\"excerpt\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"category\":\"Tutorial\"},{\"title\":\"The State of Internationalization in React\",\"date\":\"February 28, 2026\",\"excerpt\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"category\":\"Analysis\"},{\"title\":\"Migrating from react-i18next to Lingui\",\"date\":\"February 15, 2026\",\"excerpt\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components and i18n: What Changes?\",\"date\":\"February 1, 2026\",\"excerpt\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"category\":\"Analysis\"},{\"title\":\"Benchmark Methodology: How We Test\",\"date\":\"January 20, 2026\",\"excerpt\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"category\":\"Meta\"}]},\"fr\":{\"b\":\"Lire la suite →\",\"a\":[{\"title\":\"Comparer les bibliothèques i18n en 2026 : plongée détaillée\",\"date\":\"15 mars 2026\",\"excerpt\":\"Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\",\"category\":\"Benchmark\"},{\"title\":\"Réduire votre bundle i18n de 60 %\",\"date\":\"8 mars 2026\",\"excerpt\":\"Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\",\"category\":\"Tutoriel\"},{\"title\":\"État de l'internationalisation dans l'écosystème React\",\"date\":\"28 février 2026\",\"excerpt\":\"Panorama des tendances, patterns émergents et préférences de la communauté.\",\"category\":\"Analyse\"},{\"title\":\"Migrer de react-i18next vers Lingui\",\"date\":\"15 février 2026\",\"excerpt\":\"Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\",\"category\":\"Tutoriel\"},{\"title\":\"Server Components et i18n : qu'est-ce qui change ?\",\"date\":\"1er février 2026\",\"excerpt\":\"Les React Server Components introduisent de nouveaux motifs pour l'i18n.\",\"category\":\"Analyse\"},{\"title\":\"Méthodologie de benchmark : comment nous testons\",\"date\":\"20 janvier 2026\",\"excerpt\":\"Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\",\"category\":\"Méta\"}]},\"es\":{\"b\":\"Leer más →\",\"a\":[{\"title\":\"Comparación de bibliotecas i18n en 2026: un análisis profundo\",\"date\":\"15 de marzo de 2026\",\"excerpt\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los resultados sorprendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Cómo reducir su paquete i18n en un 60%\",\"date\":\"8 de marzo de 2026\",\"excerpt\":\"Estrategias prácticas para optimizar los paquetes de traducción, incluyendo carga perezosa, división de código y optimizaciones en tiempo de compilación.\",\"category\":\"Tutorial\"},{\"title\":\"El estado de la internacionalización en React\",\"date\":\"28 de febrero de 2026\",\"excerpt\":\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"category\":\"Análisis\"},{\"title\":\"Migración de react-i18next a Lingui\",\"date\":\"15 de febrero de 2026\",\"excerpt\":\"Una guía paso a paso sobre cómo migrar una aplicación de producción con 50,000 claves de traducción de react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: ¿Qué cambia?\",\"date\":\"1 de febrero de 2026\",\"excerpt\":\"React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"category\":\"Análisis\"},{\"title\":\"Metodología de benchmark: cómo probamos\",\"date\":\"20 de enero de 2026\",\"excerpt\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"category\":\"Meta\"}]},\"de\":{\"b\":\"Weiterlesen →\",\"a\":[{\"title\":\"Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\",\"date\":\"15. März 2026\",\"excerpt\":\"Wir haben 12 verschiedene Internationalisierungsbibliotheken auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"category\":\"Benchmark\"},{\"title\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"date\":\"8. März 2026\",\"excerpt\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.\",\"category\":\"Tutorial\"},{\"title\":\"Der Stand der Internationalisierung in React\",\"date\":\"28. Februar 2026\",\"excerpt\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"category\":\"Analyse\"},{\"title\":\"Migration von react-i18next zu Lingui\",\"date\":\"15. Februar 2026\",\"excerpt\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components und i18n: Was ändert sich?\",\"date\":\"1. Februar 2026\",\"excerpt\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"category\":\"Analyse\"},{\"title\":\"Benchmark-Methodik: Wie wir testen\",\"date\":\"20. Januar 2026\",\"excerpt\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"category\":\"Meta\"}]},\"it\":{\"b\":\"Leggi di più →\",\"a\":[{\"title\":\"Confronto tra librerie i18n nel 2026: un approfondimento\",\"date\":\"15 marzo 2026\",\"excerpt\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"category\":\"Benchmark\"},{\"title\":\"Come ridurre il bundle i18n del 60%\",\"date\":\"8 marzo 2026\",\"excerpt\":\"Strategie pratiche per l'ottimizzazione dei bundle di traduzione, tra cui lazy loading, code splitting e ottimizzazioni al tempo di compilazione.\",\"category\":\"Tutorial\"},{\"title\":\"Lo stato dell'internazionalizzazione in React\",\"date\":\"28 febbraio 2026\",\"excerpt\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"category\":\"Analisi\"},{\"title\":\"Migrazione da react-i18next a Lingui\",\"date\":\"15 febbraio 2026\",\"excerpt\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: cosa cambia?\",\"date\":\"1 febbraio 2026\",\"excerpt\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"category\":\"Analisi\"},{\"title\":\"Metodologia di benchmark: come testiamo\",\"date\":\"20 gennaio 2026\",\"excerpt\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.\",\"category\":\"Meta\"}]},\"pt\":{\"b\":\"Leia Mais →\",\"a\":[{\"title\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"date\":\"15 de março de 2026\",\"excerpt\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Como reduzir seu bundle i18n em 60%\",\"date\":\"8 de março de 2026\",\"excerpt\":\"Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.\",\"category\":\"Tutorial\"},{\"title\":\"O estado da internacionalização no React\",\"date\":\"28 de fevereiro de 2026\",\"excerpt\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"category\":\"Análise\"},{\"title\":\"Migrando do react-i18next para o Lingui\",\"date\":\"15 de fevereiro de 2026\",\"excerpt\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: O que muda?\",\"date\":\"1 de fevereiro de 2026\",\"excerpt\":\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"category\":\"Análise\"},{\"title\":\"Metodologia de Benchmark: Como testamos\",\"date\":\"20 de janeiro de 2026\",\"excerpt\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"category\":\"Meta\"}]},\"zh\":{\"b\":\"阅读更多 →\",\"a\":[{\"title\":\"2026 年 i18n 库比较：深度研究\",\"date\":\"2026年3月15日\",\"excerpt\":\"我们测试了 12 种不同的国际化库，涉及性能、捆绑包大小和 DX。以下是令人惊讶的结果。\",\"category\":\"基准测试\"},{\"title\":\"如何将 i18n 捆绑包减少 60%\",\"date\":\"2026年3月8日\",\"excerpt\":\"优化翻译捆绑包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"category\":\"教程\"},{\"title\":\"React 中的国际化现状\",\"date\":\"2026年2月28日\",\"excerpt\":\"React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\",\"category\":\"分析\"},{\"title\":\"从 react-i18next 迁移到 Lingui\",\"date\":\"2026年2月15日\",\"excerpt\":\"关于将具有 50,000 个翻译键的生产应用程序从 react-i18next 迁移到 Lingui 的分步指南。\",\"category\":\"教程\"},{\"title\":\"Server Components 和 i18n：有哪些变化？\",\"date\":\"2026年2月1日\",\"excerpt\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"category\":\"分析\"},{\"title\":\"基准测试方法：我们如何测试\",\"date\":\"2026年1月20日\",\"excerpt\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。\",\"category\":\"元\"}]},\"ja\":{\"b\":\"続きを読む →\",\"a\":[{\"title\":\"2026年のi18nライブラリ比較：詳細な分析\",\"date\":\"2026年3月15日\",\"excerpt\":\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果はこちらです。\",\"category\":\"ベンチマーク\"},{\"title\":\"i18nバンドルを60%削減する方法\",\"date\":\"2026年3月8日\",\"excerpt\":\"遅延読み込み、コード分割、コンパイル時の最適化など、翻訳バンドルを最適化するための実践的な戦略。\",\"category\":\"チュートリアル\"},{\"title\":\"Reactにおける国際化の現状\",\"date\":\"2026年2月28日\",\"excerpt\":\"Reactにおける現在のi18nエコシステムの概要。トレンド、新しいパターン、コミュニティの好みを網羅しています。\",\"category\":\"分析\"},{\"title\":\"react-i18nextからLinguiへの移行\",\"date\":\"2026年2月15日\",\"excerpt\":\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"category\":\"チュートリアル\"},{\"title\":\"サーバーコンポーネントとi18n：何が変わるのか？\",\"date\":\"2026年2月1日\",\"excerpt\":\"Reactサーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"category\":\"分析\"},{\"title\":\"ベンチマーク方法：テスト方法\",\"date\":\"2026年1月20日\",\"excerpt\":\"テスト環境、統計手法、再現性など、ベンチマーク手法を透明に公開します。\",\"category\":\"メタ\"}]},\"ko\":{\"b\":\"자세히 보기 →\",\"a\":[{\"title\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"date\":\"2026년 3월 15일\",\"excerpt\":\"성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과는 다음과 같습니다.\",\"category\":\"벤치마크\"},{\"title\":\"i18n 번들을 60% 줄이는 방법\",\"date\":\"2026년 3월 8일\",\"excerpt\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"React의 국제화 현황\",\"date\":\"2026년 2월 28일\",\"excerpt\":\"트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 에코시스템에 대한 개요입니다.\",\"category\":\"분석\"},{\"title\":\"react-i18next에서 Lingui로 마이그레이션\",\"date\":\"2026년 2월 15일\",\"excerpt\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"서버 컴포넌트와 i18n: 무엇이 달라지나요?\",\"date\":\"2026년 2월 1일\",\"excerpt\":\"React 서버 컴포넌트는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.\",\"category\":\"분석\"},{\"title\":\"벤치마크 방법론: 테스트 방법\",\"date\":\"2026년 1월 20일\",\"excerpt\":\"테스트 환경, 통계 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰입니다.\",\"category\":\"메타\"}]},\"ru\":{\"b\":\"Читать далее →\",\"a\":[{\"title\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"date\":\"15 марта 2026 г.\",\"excerpt\":\"Мы протестировали 12 различных библиотек интернационализации на производительность, размер бандла и DX. Вот удивительные результаты.\",\"category\":\"Бенчмарк\"},{\"title\":\"Как уменьшить бандл i18n на 60%\",\"date\":\"8 марта 2026 г.\",\"excerpt\":\"Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время компиляции.\",\"category\":\"Руководство\"},{\"title\":\"Состояние интернационализации в React\",\"date\":\"28 февраля 2026 г.\",\"excerpt\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\",\"category\":\"Анализ\"},{\"title\":\"Миграция с react-i18next на Lingui\",\"date\":\"15 февраля 2026 г.\",\"excerpt\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\",\"category\":\"Руководство\"},{\"title\":\"Server Components и i18n: что меняется?\",\"date\":\"1 февраля 2026 г.\",\"excerpt\":\"React Server Components внедряют новые паттерны для интернационализации. Мы изучаем последствия и лучшие практики.\",\"category\":\"Анализ\"},{\"title\":\"Методология бенчмарка: как мы тестируем\",\"date\":\"20 января 2026 г.\",\"excerpt\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"category\":\"Мета\"}]}}}")
};
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	return Object.setPrototypeOf(l, String.prototype), Object.assign(l, {
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
	}), markRaw(l);
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
}), getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, b$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { children: n, ...r }) => {
		let i = (t) => n$1({
			...r,
			value: t,
			children: t
		}), s = i(n);
		if (typeof n != "function") return s;
		let c = (...e) => i(n(...e));
		Object.setPrototypeOf(c, Object.getPrototypeOf(s));
		for (let e of Object.getOwnPropertyNames(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		return markRaw(c);
	}
}, S = fallbackPlugin, w = fallbackPlugin, T = fallbackPlugin, E = /* @__PURE__ */ new Map(), D = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (E.has(n)) return E.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		b$1,
		S,
		w,
		T
	];
	return E.set(n, r), r;
}, n = (n, r) => getDictionary(n, r, D(r)), i = Symbol("intlayer");
var m = (e, t) => t.reduce((e, t) => e?.[t], e), h$1 = (e) => typeof e == "object" && !!e, g = (e) => typeof e == "function" || h$1(e) && ("render" in e || "setup" in e), _ = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, v = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : g(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
})), y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return v(() => e.value);
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
}), b = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, b = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), x = computed(() => (a === void 0 ? void 0 : toValue(a)) ?? b.value), S = shallowRef({});
	watch([() => toValue(r), () => x.value], ([t, n$2]) => {
		S.value = n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let C = (e) => new Proxy({}, {
		get(t, r, i) {
			if (r === "__v_isRef") return !0;
			let a = computed(() => m(S.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return v(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = m(S.value, o);
			if (s === void 0 || h$1(s) && !g(s)) return C(o);
			if (_(s)) return y(computed(() => m(S.value, o)));
			let c = computed(() => m(S.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = m(S.value, e);
			return h$1(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return C([]);
};
var BlogList_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "BlogList",
	setup(__props, { expose: __expose }) {
		__expose();
		const { b: readMore, a: posts } = b(blog_list_default);
		const __returned__ = {
			readMore,
			posts
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
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-2" };
var _hoisted_2 = { class: "mb-3 flex items-center gap-3" };
var _hoisted_3 = { class: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground" };
var _hoisted_4 = { class: "text-xs text-muted-foreground" };
var _hoisted_5 = { class: "mb-2 text-lg font-semibold text-foreground" };
var _hoisted_6 = { class: "mb-4 text-sm text-muted-foreground" };
var _hoisted_7 = {
	type: "button",
	class: "text-sm font-medium text-primary hover:underline"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.posts, (p) => {
		return openBlock(), createElementBlock("article", {
			key: p.title,
			class: "rounded-lg border border-border bg-card p-6"
		}, [
			createElementVNode("div", _hoisted_2, [createElementVNode("span", _hoisted_3, toDisplayString(p.category), 1), createElementVNode("span", _hoisted_4, toDisplayString(p.date), 1)]),
			createElementVNode("h2", _hoisted_5, toDisplayString(p.title), 1),
			createElementVNode("p", _hoisted_6, toDisplayString(p.excerpt), 1),
			createElementVNode("button", _hoisted_7, toDisplayString($setup.readMore), 1)
		]);
	}), 128))]);
}
var BlogList_default = _plugin_vue_export_helper_default(BlogList_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/src/components/pages/blog/BlogList.vue"]]);
export { BlogList_default as default };

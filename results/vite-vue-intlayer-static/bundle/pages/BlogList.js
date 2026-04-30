import { S as internationalization, a as fallbackPlugin, c as nestedPlugin, g as MARKDOWN, h as INSERTION, i as enumerationPlugin, l as translationPlugin, m as HTML, n as getContent, o as filePlugin, r as conditionPlugin, s as genderPlugin, t as getBasePlugins, x as editor } from "./getContent-D9D_CRCc.js";
import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, openBlock, ref, renderList, shallowRef, toDisplayString, toValue, unref, watch } from "vue";
var blog_list_default = {
	key: "blog-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"readMore\":\"Read More →\",\"posts\":[{\"title\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"date\":\"March 15, 2026\",\"excerpt\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"category\":\"Benchmark\"},{\"title\":\"How to Reduce Your i18n Bundle by 60%\",\"date\":\"March 8, 2026\",\"excerpt\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"category\":\"Tutorial\"},{\"title\":\"The State of Internationalization in React\",\"date\":\"February 28, 2026\",\"excerpt\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"category\":\"Analysis\"},{\"title\":\"Migrating from react-i18next to Lingui\",\"date\":\"February 15, 2026\",\"excerpt\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components and i18n: What Changes?\",\"date\":\"February 1, 2026\",\"excerpt\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"category\":\"Analysis\"},{\"title\":\"Benchmark Methodology: How We Test\",\"date\":\"January 20, 2026\",\"excerpt\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"category\":\"Meta\"}]},\"fr\":{\"readMore\":\"Lire la suite →\",\"posts\":[{\"title\":\"Comparer les bibliothèques i18n en 2026 : plongée détaillée\",\"date\":\"15 mars 2026\",\"excerpt\":\"Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\",\"category\":\"Benchmark\"},{\"title\":\"Réduire votre bundle i18n de 60 %\",\"date\":\"8 mars 2026\",\"excerpt\":\"Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\",\"category\":\"Tutoriel\"},{\"title\":\"État de l'internationalisation dans l'écosystème React\",\"date\":\"28 février 2026\",\"excerpt\":\"Panorama des tendances, patterns émergents et préférences de la communauté.\",\"category\":\"Analyse\"},{\"title\":\"Migrer de react-i18next vers Lingui\",\"date\":\"15 février 2026\",\"excerpt\":\"Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\",\"category\":\"Tutoriel\"},{\"title\":\"Server Components et i18n : qu'est-ce qui change ?\",\"date\":\"1er février 2026\",\"excerpt\":\"Les React Server Components introduisent de nouveaux motifs pour l'i18n.\",\"category\":\"Analyse\"},{\"title\":\"Méthodologie de benchmark : comment nous testons\",\"date\":\"20 janvier 2026\",\"excerpt\":\"Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\",\"category\":\"Méta\"}]},\"es\":{\"readMore\":\"Leer más →\",\"posts\":[{\"title\":\"Comparación de bibliotecas i18n en 2026: un análisis profundo\",\"date\":\"15 de marzo de 2026\",\"excerpt\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los resultados sorprendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Cómo reducir su paquete i18n en un 60%\",\"date\":\"8 de marzo de 2026\",\"excerpt\":\"Estrategias prácticas para optimizar los paquetes de traducción, incluyendo carga perezosa, división de código y optimizaciones en tiempo de compilación.\",\"category\":\"Tutorial\"},{\"title\":\"El estado de la internacionalización en React\",\"date\":\"28 de febrero de 2026\",\"excerpt\":\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"category\":\"Análisis\"},{\"title\":\"Migración de react-i18next a Lingui\",\"date\":\"15 de febrero de 2026\",\"excerpt\":\"Una guía paso a paso sobre cómo migrar una aplicación de producción con 50,000 claves de traducción de react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: ¿Qué cambia?\",\"date\":\"1 de febrero de 2026\",\"excerpt\":\"React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"category\":\"Análisis\"},{\"title\":\"Metodología de benchmark: cómo probamos\",\"date\":\"20 de enero de 2026\",\"excerpt\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"category\":\"Meta\"}]},\"de\":{\"readMore\":\"Weiterlesen →\",\"posts\":[{\"title\":\"Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\",\"date\":\"15. März 2026\",\"excerpt\":\"Wir haben 12 verschiedene Internationalisierungsbibliotheken auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"category\":\"Benchmark\"},{\"title\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"date\":\"8. März 2026\",\"excerpt\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.\",\"category\":\"Tutorial\"},{\"title\":\"Der Stand der Internationalisierung in React\",\"date\":\"28. Februar 2026\",\"excerpt\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"category\":\"Analyse\"},{\"title\":\"Migration von react-i18next zu Lingui\",\"date\":\"15. Februar 2026\",\"excerpt\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components und i18n: Was ändert sich?\",\"date\":\"1. Februar 2026\",\"excerpt\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"category\":\"Analyse\"},{\"title\":\"Benchmark-Methodik: Wie wir testen\",\"date\":\"20. Januar 2026\",\"excerpt\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"category\":\"Meta\"}]},\"it\":{\"readMore\":\"Leggi di più →\",\"posts\":[{\"title\":\"Confronto tra librerie i18n nel 2026: un approfondimento\",\"date\":\"15 marzo 2026\",\"excerpt\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"category\":\"Benchmark\"},{\"title\":\"Come ridurre il bundle i18n del 60%\",\"date\":\"8 marzo 2026\",\"excerpt\":\"Strategie pratiche per l'ottimizzazione dei bundle di traduzione, tra cui lazy loading, code splitting e ottimizzazioni al tempo di compilazione.\",\"category\":\"Tutorial\"},{\"title\":\"Lo stato dell'internazionalizzazione in React\",\"date\":\"28 febbraio 2026\",\"excerpt\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"category\":\"Analisi\"},{\"title\":\"Migrazione da react-i18next a Lingui\",\"date\":\"15 febbraio 2026\",\"excerpt\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: cosa cambia?\",\"date\":\"1 febbraio 2026\",\"excerpt\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"category\":\"Analisi\"},{\"title\":\"Metodologia di benchmark: come testiamo\",\"date\":\"20 gennaio 2026\",\"excerpt\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.\",\"category\":\"Meta\"}]},\"pt\":{\"readMore\":\"Leia Mais →\",\"posts\":[{\"title\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"date\":\"15 de março de 2026\",\"excerpt\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Como reduzir seu bundle i18n em 60%\",\"date\":\"8 de março de 2026\",\"excerpt\":\"Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.\",\"category\":\"Tutorial\"},{\"title\":\"O estado da internacionalização no React\",\"date\":\"28 de fevereiro de 2026\",\"excerpt\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"category\":\"Análise\"},{\"title\":\"Migrando do react-i18next para o Lingui\",\"date\":\"15 de fevereiro de 2026\",\"excerpt\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: O que muda?\",\"date\":\"1 de fevereiro de 2026\",\"excerpt\":\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"category\":\"Análise\"},{\"title\":\"Metodologia de Benchmark: Como testamos\",\"date\":\"20 de janeiro de 2026\",\"excerpt\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"category\":\"Meta\"}]},\"zh\":{\"readMore\":\"阅读更多 →\",\"posts\":[{\"title\":\"2026 年 i18n 库比较：深度研究\",\"date\":\"2026年3月15日\",\"excerpt\":\"我们测试了 12 种不同的国际化库，涉及性能、捆绑包大小和 DX。以下是令人惊讶的结果。\",\"category\":\"基准测试\"},{\"title\":\"如何将 i18n 捆绑包减少 60%\",\"date\":\"2026年3月8日\",\"excerpt\":\"优化翻译捆绑包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"category\":\"教程\"},{\"title\":\"React 中的国际化现状\",\"date\":\"2026年2月28日\",\"excerpt\":\"React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\",\"category\":\"分析\"},{\"title\":\"从 react-i18next 迁移到 Lingui\",\"date\":\"2026年2月15日\",\"excerpt\":\"关于将具有 50,000 个翻译键的生产应用程序从 react-i18next 迁移到 Lingui 的分步指南。\",\"category\":\"教程\"},{\"title\":\"Server Components 和 i18n：有哪些变化？\",\"date\":\"2026年2月1日\",\"excerpt\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"category\":\"分析\"},{\"title\":\"基准测试方法：我们如何测试\",\"date\":\"2026年1月20日\",\"excerpt\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。\",\"category\":\"元\"}]},\"ja\":{\"readMore\":\"続きを読む →\",\"posts\":[{\"title\":\"2026年のi18nライブラリ比較：詳細な分析\",\"date\":\"2026年3月15日\",\"excerpt\":\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果はこちらです。\",\"category\":\"ベンチマーク\"},{\"title\":\"i18nバンドルを60%削減する方法\",\"date\":\"2026年3月8日\",\"excerpt\":\"遅延読み込み、コード分割、コンパイル時の最適化など、翻訳バンドルを最適化するための実践的な戦略。\",\"category\":\"チュートリアル\"},{\"title\":\"Reactにおける国際化の現状\",\"date\":\"2026年2月28日\",\"excerpt\":\"Reactにおける現在のi18nエコシステムの概要。トレンド、新しいパターン、コミュニティの好みを網羅しています。\",\"category\":\"分析\"},{\"title\":\"react-i18nextからLinguiへの移行\",\"date\":\"2026年2月15日\",\"excerpt\":\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"category\":\"チュートリアル\"},{\"title\":\"サーバーコンポーネントとi18n：何が変わるのか？\",\"date\":\"2026年2月1日\",\"excerpt\":\"Reactサーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"category\":\"分析\"},{\"title\":\"ベンチマーク方法：テスト方法\",\"date\":\"2026年1月20日\",\"excerpt\":\"テスト環境、統計手法、再現性など、ベンチマーク手法を透明に公開します。\",\"category\":\"メタ\"}]},\"ko\":{\"readMore\":\"자세히 보기 →\",\"posts\":[{\"title\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"date\":\"2026년 3월 15일\",\"excerpt\":\"성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과는 다음과 같습니다.\",\"category\":\"벤치마크\"},{\"title\":\"i18n 번들을 60% 줄이는 방법\",\"date\":\"2026년 3월 8일\",\"excerpt\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"React의 국제화 현황\",\"date\":\"2026년 2월 28일\",\"excerpt\":\"트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 에코시스템에 대한 개요입니다.\",\"category\":\"분석\"},{\"title\":\"react-i18next에서 Lingui로 마이그레이션\",\"date\":\"2026년 2월 15일\",\"excerpt\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"서버 컴포넌트와 i18n: 무엇이 달라지나요?\",\"date\":\"2026년 2월 1일\",\"excerpt\":\"React 서버 컴포넌트는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.\",\"category\":\"분석\"},{\"title\":\"벤치마크 방법론: 테스트 방법\",\"date\":\"2026년 1월 20일\",\"excerpt\":\"테스트 환경, 통계 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰입니다.\",\"category\":\"메타\"}]},\"ru\":{\"readMore\":\"Читать далее →\",\"posts\":[{\"title\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"date\":\"15 марта 2026 г.\",\"excerpt\":\"Мы протестировали 12 различных библиотек интернационализации на производительность, размер бандла и DX. Вот удивительные результаты.\",\"category\":\"Бенчмарк\"},{\"title\":\"Как уменьшить бандл i18n на 60%\",\"date\":\"8 марта 2026 г.\",\"excerpt\":\"Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время компиляции.\",\"category\":\"Руководство\"},{\"title\":\"Состояние интернационализации в React\",\"date\":\"28 февраля 2026 г.\",\"excerpt\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\",\"category\":\"Анализ\"},{\"title\":\"Миграция с react-i18next на Lingui\",\"date\":\"15 февраля 2026 г.\",\"excerpt\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\",\"category\":\"Руководство\"},{\"title\":\"Server Components и i18n: что меняется?\",\"date\":\"1 февраля 2026 г.\",\"excerpt\":\"React Server Components внедряют новые паттерны для интернационализации. Мы изучаем последствия и лучшие практики.\",\"category\":\"Анализ\"},{\"title\":\"Методология бенчмарка: как мы тестируем\",\"date\":\"20 января 2026 г.\",\"excerpt\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"category\":\"Мета\"}]}}}"),
	localIds: ["blog-list::local::src/components/pages/blog/BlogList.content.ts"]
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
}, i$4 = defineComponent({
	name: "ContentSelector",
	props: {
		dictionaryKey: {
			type: String,
			required: !0
		},
		keyPath: {
			type: Array,
			required: !0
		}
	},
	setup(e, { slots: i }) {
		return () => i.default?.();
	}
});
var getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
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
}, isComplexValue = (value) => value != null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean", insertionRegex = /\{\{\s*(.*?)\s*\}\}/g, splitInsertionTemplate = (template, values = {}) => {
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
}, r$2 = Symbol("intlayerHTML"), c$1 = () => inject(r$2), i$2 = (e, { components: t = {} } = {}) => {
	let i = Object.fromEntries(Object.entries(t).filter(([, e]) => e).map(([e, t]) => [e, (e) => h(t, e, e?.children)]));
	return getHTML(e, new Proxy(i, { get(e, t) {
		if (typeof t == "string" && t in e) return e[t];
		if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return (e) => h(t, e, e?.children);
	} }));
}, a$3 = ({ components: t } = {}) => {
	let n = c$1();
	return (e) => n ? n.renderHTML(e, { components: t }) : i$2(e, { components: t });
};
defineComponent({
	name: "HTMLRenderer",
	props: {
		content: {
			type: String,
			required: !0
		},
		components: {
			type: Object,
			default: void 0
		}
	},
	setup(e) {
		let t = a$3({ components: e.components });
		return () => t(e.content);
	}
});
var PRESERVED_LITERALS = new Set([
	"true",
	"false",
	"null",
	"undefined",
	"yes",
	"no",
	"on",
	"off",
	"NaN",
	"Infinity",
	"-Infinity"
]);
var parseYaml = (input) => {
	const text = input.trim();
	if (!text) return null;
	let index = 0;
	const peek = () => text[index];
	const next = () => text[index++];
	const eof = () => index >= text.length;
	const skipWhitespace = () => {
		while (!eof() && " \n	\r".includes(peek())) index++;
	};
	const parseQuotedString = (quote) => {
		next();
		let result = "";
		while (!eof()) {
			const ch = next();
			if (ch === quote) return result;
			if (ch === "\\" && !eof()) result += next();
			else result += ch;
		}
		throw new SyntaxError("Unterminated string");
	};
	const parseUnquotedToken = (stops) => {
		const start = index;
		while (!eof() && !stops.includes(peek())) index++;
		return text.slice(start, index).trim();
	};
	const toTypedValue = (raw) => {
		if (PRESERVED_LITERALS.has(raw) || /^0x[0-9a-fA-F]+$/.test(raw) || /^#/.test(raw)) return raw;
		if (/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(raw)) {
			if (raw === "3.14159265359") return Math.PI;
			return Number(raw);
		}
		return raw;
	};
	const parseValue = (stops) => {
		skipWhitespace();
		if (eof()) throw new SyntaxError("Unexpected end of input");
		const ch = peek();
		if (ch === "[") return parseArray();
		if (ch === "{") return parseObject();
		if (ch === "\"" || ch === "'") return parseQuotedString(ch);
		const token = parseUnquotedToken(stops);
		if (!token) throw new SyntaxError("Empty token");
		return toTypedValue(token);
	};
	const parseArray = () => {
		next();
		const arr = [];
		skipWhitespace();
		if (peek() === "]") {
			next();
			return arr;
		}
		while (true) {
			skipWhitespace();
			arr.push(parseValue(",]"));
			skipWhitespace();
			const ch = next();
			if (ch === "]") break;
			if (ch !== ",") throw new SyntaxError("Expected ',' or ']' after array element");
			skipWhitespace();
			if (peek() === "]") throw new SyntaxError("Trailing comma in array");
		}
		return arr;
	};
	const parseYamlListItem = () => {
		next();
		skipWhitespace();
		const ch = peek();
		if (ch === "{") return parseObject();
		if (ch === "\"" || ch === "'") return parseQuotedString(ch);
		const lineEnd = text.indexOf("\n", index);
		const line = text.slice(index, lineEnd === -1 ? text.length : lineEnd);
		if (/: /.test(line)) return parseIndentedObject();
		return toTypedValue(parseUnquotedToken("\n"));
	};
	const getCurrentIndent = () => {
		const lineStart = text.lastIndexOf("\n", index - 1) + 1;
		let indent = 0;
		for (let i = lineStart; i < index && text[i] === " "; i++) indent++;
		return indent;
	};
	const parseIndentedObject = () => {
		const obj = {};
		const baseIndent = getCurrentIndent();
		while (!eof()) {
			const lineStart = index;
			const startedNewLine = lineStart === 0 || text[lineStart - 1] === "\n";
			skipWhitespace();
			if (startedNewLine && getCurrentIndent() <= baseIndent) {
				index = lineStart;
				break;
			}
			if (peek() === "-" || eof()) {
				index = lineStart;
				break;
			}
			const char = peek();
			const key = char === "\"" || char === "'" ? parseQuotedString(char) : parseUnquotedToken(":");
			if (eof() || next() !== ":") break;
			skipWhitespace();
			if (peek() === "\n") {
				next();
				skipWhitespace();
				if (peek() === "-") {
					obj[key] = parseYamlList();
					continue;
				}
			}
			obj[key] = toTypedValue(parseUnquotedToken("\n"));
			if (peek() === "\n") next();
		}
		return obj;
	};
	const parseYamlList = () => {
		const arr = [];
		const baseIndent = getCurrentIndent();
		while (!eof()) {
			while (!eof() && " \n	\r".includes(peek()) && peek() !== "-") next();
			if (eof() || getCurrentIndent() < baseIndent || peek() !== "-") break;
			arr.push(parseYamlListItem());
		}
		return arr;
	};
	const parseObjectBody = (stops) => {
		const obj = {};
		skipWhitespace();
		while (!eof() && !stops.includes(peek())) {
			const char = peek();
			const key = char === "\"" || char === "'" ? parseQuotedString(char) : parseUnquotedToken(`:\n${stops}`);
			if (!key) return obj;
			if (eof() || next() !== ":") throw new SyntaxError("Expected ':' after key");
			if (peek() === " ") next();
			while (!eof() && " 	".includes(peek())) next();
			if (eof()) {
				obj[key] = "";
				return obj;
			}
			if (peek() === "\n") {
				next();
				const afterNewlinePos = index;
				skipWhitespace();
				if (peek() === "-") {
					obj[key] = parseYamlList();
					skipWhitespace();
					continue;
				} else {
					index = afterNewlinePos;
					skipWhitespace();
					const nextChar = peek();
					if (nextChar && !stops.includes(nextChar) && nextChar !== "-") {
						obj[key] = "";
						continue;
					}
					obj[key] = "";
					return obj;
				}
			}
			obj[key] = parseValue(stops.includes("}") ? `,\n${stops}` : `\n${stops}`);
			if (eof()) return obj;
			const sep = peek();
			if (sep === "," || sep === "\n") {
				next();
				skipWhitespace();
				continue;
			}
			if (" 	".includes(sep)) {
				while (!eof() && " 	".includes(peek())) next();
				if (peek() === "\n") {
					next();
					skipWhitespace();
					continue;
				}
				if (eof() || stops.includes(peek())) return obj;
				continue;
			}
			if (stops.includes(sep)) return obj;
		}
		return obj;
	};
	const parseObject = () => {
		next();
		skipWhitespace();
		if (peek() === "}") {
			next();
			return {};
		}
		const obj = parseObjectBody("}");
		if (peek() !== "}") throw new SyntaxError("Expected '}' at end of object");
		next();
		return obj;
	};
	const hasTopLevelKeyColonSpace = (s) => {
		let depth = 0;
		let inQuote = null;
		for (let i = 0; i < s.length; i++) {
			const char = s[i];
			if (inQuote) {
				if (char === "\\") i++;
				else if (char === inQuote) inQuote = null;
			} else if (char === "\"" || char === "'") inQuote = char;
			else if (char === "[" || char === "{") depth++;
			else if (char === "]" || char === "}") depth = Math.max(0, depth - 1);
			else if (depth === 0 && char === ":") {
				const nextCh = s[i + 1];
				if (!nextCh || " \n".includes(nextCh)) return true;
			}
		}
		return false;
	};
	if (text.startsWith("]") || text.startsWith("}")) throw new SyntaxError("Unexpected closing bracket");
	let value;
	if (text.startsWith("[")) value = parseArray();
	else if (text.startsWith("{")) value = parseObject();
	else if (hasTopLevelKeyColonSpace(text)) value = parseObjectBody("");
	else value = parseValue("");
	skipWhitespace();
	if (!eof()) throw new SyntaxError("Unexpected trailing characters");
	return value;
};
var getMarkdownMetadata = (markdown) => {
	try {
		const lines = markdown.split(/\r?\n/);
		const firstNonEmptyLine = lines.find((line) => line.trim() !== "");
		if (!firstNonEmptyLine || firstNonEmptyLine.trim() !== "---") return {};
		let metadataEndIndex = -1;
		for (let i = 1; i < lines.length; i++) if (lines[i].trim() === "---") {
			metadataEndIndex = i;
			break;
		}
		if (metadataEndIndex === -1) return {};
		return parseYaml(lines.slice(1, metadataEndIndex).join("\n")) ?? {};
	} catch {
		return {};
	}
};
[
	"allowFullScreen",
	"allowTransparency",
	"autoComplete",
	"autoFocus",
	"autoPlay",
	"cellPadding",
	"cellSpacing",
	"charSet",
	"classId",
	"colSpan",
	"contentEditable",
	"contextMenu",
	"crossOrigin",
	"encType",
	"formAction",
	"formEncType",
	"formMethod",
	"formNoValidate",
	"formTarget",
	"frameBorder",
	"hrefLang",
	"inputMode",
	"keyParams",
	"keyType",
	"marginHeight",
	"marginWidth",
	"maxLength",
	"mediaGroup",
	"minLength",
	"noValidate",
	"radioGroup",
	"readOnly",
	"rowSpan",
	"spellCheck",
	"srcDoc",
	"srcLang",
	"srcSet",
	"tabIndex",
	"useMap"
].reduce((obj, x) => {
	obj[x.toLowerCase()] = x;
	return obj;
}, {
	class: "className",
	for: "htmlFor"
});
var ORDERED_LIST_BULLET = "(?:\\d+\\.)";
var UNORDERED_LIST_BULLET = "(?:[*+-])";
var LOOKAHEAD = (double) => `(?=[\\s\\S]+?\\1${double ? "\\1" : ""})`;
var INLINE_SKIP_R = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)";
new RegExp(`^([*_])\\1${LOOKAHEAD(1)}${INLINE_SKIP_R}\\1\\1(?!\\1)`);
new RegExp(`^([*_])${LOOKAHEAD(0)}${INLINE_SKIP_R}\\1(?!\\1)`);
new RegExp(`^(==)${LOOKAHEAD(0)}${INLINE_SKIP_R}\\1`);
new RegExp(`^(~~)${LOOKAHEAD(0)}${INLINE_SKIP_R}\\1`);
var generateListItemPrefix = (type) => {
	return "( *)(" + (type === 1 ? ORDERED_LIST_BULLET : UNORDERED_LIST_BULLET) + ") +";
};
var ORDERED_LIST_ITEM_PREFIX = generateListItemPrefix(1);
var UNORDERED_LIST_ITEM_PREFIX = generateListItemPrefix(2);
var generateListItemPrefixRegex = (type) => {
	return new RegExp("^" + (type === 1 ? ORDERED_LIST_ITEM_PREFIX : UNORDERED_LIST_ITEM_PREFIX));
};
generateListItemPrefixRegex(1);
generateListItemPrefixRegex(2);
var generateListItemRegex = (type) => {
	return new RegExp("^" + (type === 1 ? ORDERED_LIST_ITEM_PREFIX : UNORDERED_LIST_ITEM_PREFIX) + "[^\\n]*(?:\\n(?!\\1" + (type === 1 ? ORDERED_LIST_BULLET : UNORDERED_LIST_BULLET) + " )[^\\n]*)*(\\n|$)", "gm");
};
generateListItemRegex(1);
generateListItemRegex(2);
var generateListRegex = (type) => {
	const bullet = type === 1 ? ORDERED_LIST_BULLET : UNORDERED_LIST_BULLET;
	return new RegExp("^( *)(" + bullet + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + bullet + " (?!" + bullet + " ))\\n*|\\s*\\n*$)");
};
generateListRegex(1);
generateListRegex(2);
var renderFor = (render) => (ast, state = {}) => {
	const start = performance.now();
	const patchedRender = (ast, state = {}) => renderFor(render)(ast, state);
	if (Array.isArray(ast)) {
		const oldKey = state.key;
		const result = [];
		let lastWasString = false;
		let renderedIndex = 0;
		for (let i = 0; i < ast.length; i++) {
			const nodeOut = patchedRender(ast[i], {
				...state,
				key: renderedIndex
			});
			const isString = typeof nodeOut === "string";
			if (isString && lastWasString) result[result.length - 1] = result[result.length - 1] + nodeOut;
			else if (nodeOut !== null) {
				result.push(nodeOut);
				renderedIndex++;
			}
			lastWasString = isString;
		}
		state.key = oldKey;
		const duration = performance.now() - start;
		if (duration > 20) console.log(`renderFor (array): ${duration.toFixed(3)}ms, ast length: ${ast.length}`);
		return result;
	}
	const result = render(ast, patchedRender, state);
	const duration = performance.now() - start;
	if (duration > 20) console.log(`renderFor (single): ${duration.toFixed(3)}ms, ast type: ${ast.type}`);
	return result;
};
new RegExp(`^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`);
var r = Symbol("intlayerMarkdown"), c = () => {
	let e = inject(r, { renderMarkdown: (e) => e });
	if (!e) throw Error("useMarkdown must be used within a MarkdownProvider");
	return e;
}, y$1 = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", b$1 = true, x = true, S = true, C = true, w = y$1 ? fallbackPlugin : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, { children: r, ...i }) => {
		let s = (n) => n$1({
			...i,
			value: n,
			children: !C && editor.enabled ? () => h(i$4, {
				dictionaryKey: i.dictionaryKey,
				keyPath: i.keyPath
			}, { default: () => typeof n == "function" ? n() : n }) : n
		}), c = s(r);
		if (typeof r != "function") return c;
		let l = (...e) => s(r(...e));
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
}, T = (e, t) => {
	let n = /* @__PURE__ */ new Map(), r = {};
	for (let [e, i] of Object.entries(t)) typeof i == "string" || typeof i == "number" ? r[e] = i : (n.set(e, i), r[e] = `__VNODE_${e}__`);
	let o = splitInsertionTemplate(e, r);
	if (n.size > 0) {
		let e = [];
		if (o.isSimple) {
			let t = o.parts, r = 0;
			for (let [i] of n) {
				let a = `__VNODE_${i}__`, o = t.indexOf(a);
				o !== -1 && (o > r && e.push(t.substring(r, o)), e.push(n.get(i)), r = o + a.length);
			}
			return r < t.length && e.push(t.substring(r)), h(Fragment, null, ...e);
		} else return o.parts.forEach((t) => {
			if (typeof t == "string") {
				let r = t;
				for (let [t] of n) {
					let i = `__VNODE_${t}__`, a = r.indexOf(i);
					a !== -1 && (a > 0 && e.push(r.substring(0, a)), e.push(n.get(t)), r = r.substring(a + i.length));
				}
				r.length > 0 && e.push(r);
			} else e.push(t);
		}), h(Fragment, null, ...e);
	}
	return o.isSimple ? o.parts : h(Fragment, null, o.parts);
}, E = S ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: INSERTION }], i = e[INSERTION], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = T(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, D = b$1 ? fallbackPlugin : {
	id: "markdown-string-plugin",
	canHandle: (e) => typeof e == "string",
	transform: (n, i, o) => {
		let { plugins: s, ...c$2 } = i, l = o(getMarkdownMetadata(n) ?? {}, {
			plugins: [{
				id: "markdown-metadata-plugin",
				canHandle: (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || !e,
				transform: (t, r) => n$1({
					...r,
					value: t,
					children: n
				})
			}],
			dictionaryKey: c$2.dictionaryKey,
			keyPath: []
		}), u = (o) => n$1({
			...i,
			value: n,
			children: () => {
				let { renderMarkdown: e, components: i } = c(), s = e(n, void 0, {
					...i ?? {},
					...o ?? {}
				});
				return !C && editor.enabled ? h(i$4, {
					dictionaryKey: c$2.dictionaryKey,
					keyPath: c$2.keyPath
				}, { default: () => s }) : s;
			},
			additionalProps: {
				metadata: l,
				use: (e) => u(e)
			}
		});
		return u();
	}
}, O = b$1 ? fallbackPlugin : {
	id: "markdown-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "markdown",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: MARKDOWN }], i = e[MARKDOWN];
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [D, ...t.plugins ?? []]
		});
	}
}, k = x ? fallbackPlugin : {
	id: "html-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "html",
	transform: (r, i) => {
		let o = r[HTML];
		r.tags;
		let s = (r = {}) => {
			let c = i$2(o, { components: r });
			return n$1({
				...i,
				value: o,
				children: !C && editor.enabled ? () => h(i$4, {
					dictionaryKey: i.dictionaryKey,
					keyPath: i.keyPath,
					...r
				}, { default: () => c }) : c,
				additionalProps: { use: (e) => s(e) }
			});
		};
		return s();
	}
}, A = /* @__PURE__ */ new Map(), j = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (A.has(n)) return A.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		w,
		E,
		O,
		k
	];
	return A.set(n, r), r;
}, n = (n, r) => getDictionary(n, r, j(r)), f = Symbol("intlayer");
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
	let c = getCurrentInstance() ? inject(f) : void 0, b = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), x = computed(() => (a === void 0 ? void 0 : toValue(a)) ?? b.value), S = shallowRef({});
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
var BlogList_default = defineComponent({
	__name: "BlogList",
	setup(__props) {
		const { readMore, posts } = b(blog_list_default);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(posts), (p) => {
				return openBlock(), createElementBlock("article", {
					key: p.title,
					class: "rounded-lg border border-border bg-card p-6"
				}, [
					createElementVNode("div", _hoisted_2, [createElementVNode("span", _hoisted_3, toDisplayString(p.category), 1), createElementVNode("span", _hoisted_4, toDisplayString(p.date), 1)]),
					createElementVNode("h2", _hoisted_5, toDisplayString(p.title), 1),
					createElementVNode("p", _hoisted_6, toDisplayString(p.excerpt), 1),
					createElementVNode("button", _hoisted_7, toDisplayString(unref(readMore)), 1)
				]);
			}), 128))]);
		};
	}
});
export { BlogList_default as default };
import { b as configuration, n as getContent, t as getBasePlugins, x as editor, y as TRANSLATION } from "./getContent-D9D_CRCc.js";
var isSameKeyPath = (keyPath1, keyPath2) => keyPath1.every((element, index) => keyPath2[index] && keyPath2[index].key === element.key && keyPath2[index].type === element.type);
var compareUrls = (url1, url2) => {
	try {
		const parsedUrl1 = new URL(url1);
		const parsedUrl2 = new URL(url2);
		if (parsedUrl1.protocol !== parsedUrl2.protocol || parsedUrl1.hostname !== parsedUrl2.hostname || parsedUrl1.port !== parsedUrl2.port) return false;
		const path1 = parsedUrl1.pathname.replace(/\/$/, "");
		const path2 = parsedUrl2.pathname.replace(/\/$/, "");
		if (path1 !== "" && path2 !== "" && path1 !== path2) return false;
		return true;
	} catch (error) {
		console.error("Invalid URL(s)", error, {
			url1,
			url2
		});
		return false;
	}
};
var mergeIframeClick = (event) => {
	const simulatedMouseDownEvent = new MouseEvent("mousedown", {
		bubbles: true,
		cancelable: true,
		view: window
	});
	const simulatedClickEvent = new MouseEvent("click", {
		bubbles: true,
		cancelable: true,
		view: window
	});
	Object.assign(simulatedClickEvent, { iframeData: event });
	Object.assign(simulatedMouseDownEvent, { iframeData: event });
	window.dispatchEvent(simulatedClickEvent);
	window.dispatchEvent(simulatedMouseDownEvent);
};
var MANAGER_KEY = "__intlayer_editor_manager__";
var EVENTS_KEY = "__intlayer_editor_manager_events__";
var getEventTarget = () => {
	if (typeof window === "undefined") return new EventTarget();
	const windowGlobals = window;
	if (!windowGlobals[EVENTS_KEY]) windowGlobals[EVENTS_KEY] = new EventTarget();
	return windowGlobals[EVENTS_KEY];
};
var getGlobalEditorManager = () => {
	if (typeof window === "undefined") return null;
	return window[MANAGER_KEY] ?? null;
};
var setGlobalEditorManager = (manager) => {
	if (typeof window !== "undefined") {
		const windowGlobals = window;
		windowGlobals[MANAGER_KEY] = manager;
	}
	getEventTarget().dispatchEvent(new CustomEvent("change", { detail: manager }));
};
var onGlobalEditorManagerChange = (changeCallback) => {
	const eventTarget = getEventTarget();
	const eventHandler = (event) => {
		changeCallback(event.detail);
	};
	eventTarget.addEventListener("change", eventHandler);
	return () => {
		eventTarget.removeEventListener("change", eventHandler);
	};
};
var _HTMLElement$3 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerContentSelectorWrapperElement = class extends _HTMLElement$3 {
	_keyPathJson = "[]";
	_dictionaryKey = "";
	_editorEnabled = false;
	_isInIframe = false;
	_isSelected = false;
	_editedValue = void 0;
	_renderState = null;
	_selector = null;
	_unsubManager = null;
	_unsubEnabled = null;
	_unsubFocused = null;
	_unsubEditedContent = null;
	static get observedAttributes() {
		return ["key-path", "dictionary-key"];
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(v) {
		this._keyPathJson = v;
		const manager = getGlobalEditorManager();
		if (manager) this._updateEditedValue(manager);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(v) {
		this._dictionaryKey = v;
		const manager = getGlobalEditorManager();
		if (manager) this._updateEditedValue(manager);
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = ":host { display: contents; }";
		shadow.appendChild(style);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "key-path") {
			this._keyPathJson = newVal ?? "[]";
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		} else if (name === "dictionary-key") {
			this._dictionaryKey = newVal ?? "";
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		}
	}
	connectedCallback() {
		if (typeof window !== "undefined") this._isInIframe = window.self !== window.top;
		this._subscribeToManager();
		this._render();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.();
		this._unsubEnabled?.();
		this._unsubFocused?.();
		this._unsubEditedContent?.();
		this._unsubManager = null;
		this._unsubEnabled = null;
		this._unsubFocused = null;
		this._unsubEditedContent = null;
	}
	_getRawKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_getFilteredKeyPath() {
		return this._getRawKeyPath().filter((k) => k.type !== TRANSLATION);
	}
	_updateEditedValue(manager) {
		const filteredKeyPath = this._getFilteredKeyPath();
		if (!this._dictionaryKey || filteredKeyPath.length === 0) {
			this._editedValue = void 0;
			this._render();
			return;
		}
		const rawKeyPath = this._getRawKeyPath();
		const lastStepType = rawKeyPath[rawKeyPath.length - 1]?.type;
		if (lastStepType === "markdown" || lastStepType === "html" || lastStepType === "insertion" || lastStepType === "file") {
			this._editedValue = void 0;
			this._render();
			return;
		}
		let value = manager.getContentValue(this._dictionaryKey, filteredKeyPath);
		if (value !== null && value !== void 0 && typeof value === "object" && value.nodeType === "translation") {
			const locale = manager.currentLocale.value;
			value = locale ? value[TRANSLATION][locale] : void 0;
		}
		this._editedValue = value;
		this._render();
	}
	_updateIsSelected(focusedContent) {
		if (!focusedContent) {
			this._isSelected = false;
			this._updateSelectorAttr();
			return;
		}
		const keyPath = this._getFilteredKeyPath();
		this._isSelected = focusedContent.dictionaryKey === this._dictionaryKey && (focusedContent.keyPath?.length ?? 0) > 0 && isSameKeyPath(focusedContent.keyPath ?? [], keyPath);
		this._updateSelectorAttr();
	}
	_updateSelectorAttr() {
		if (!this._selector) return;
		if (this._isSelected) this._selector.setAttribute("is-selecting", "");
		else this._selector.removeAttribute("is-selecting");
	}
	_subscribeToManager() {
		const manager = getGlobalEditorManager();
		if (manager) this._setupManagerSubscriptions(manager);
		this._unsubManager = onGlobalEditorManagerChange((m) => {
			this._unsubEnabled?.();
			this._unsubFocused?.();
			this._unsubEditedContent?.();
			this._unsubEnabled = null;
			this._unsubFocused = null;
			this._unsubEditedContent = null;
			if (m) this._setupManagerSubscriptions(m);
			else {
				this._editorEnabled = false;
				this._isSelected = false;
				this._editedValue = void 0;
				this._render();
			}
		});
	}
	_setupManagerSubscriptions(manager) {
		this._editorEnabled = manager.editorEnabled.value ?? false;
		this._updateIsSelected(manager.focusedContent.value);
		this._updateEditedValue(manager);
		const handleEnabledChange = (e) => {
			this._editorEnabled = e.detail;
			this._render();
		};
		const handleFocusedChange = (e) => {
			this._updateIsSelected(e.detail);
		};
		const handleEditedContentChange = () => {
			this._updateEditedValue(manager);
		};
		manager.editorEnabled.addEventListener("change", handleEnabledChange);
		manager.focusedContent.addEventListener("change", handleFocusedChange);
		manager.editedContent.addEventListener("change", handleEditedContentChange);
		this._unsubEnabled = () => manager.editorEnabled.removeEventListener("change", handleEnabledChange);
		this._unsubFocused = () => manager.focusedContent.removeEventListener("change", handleFocusedChange);
		this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleEditedContentChange);
	}
	_handlePress(e) {
		e.stopPropagation();
		const manager = getGlobalEditorManager();
		if (!manager) return;
		manager.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation();
		getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation();
		getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, null);
	}
	_render() {
		const useWrapper = this._isInIframe && this._editorEnabled;
		const editedValue = this._editedValue;
		const newState = !useWrapper ? "simple" : typeof editedValue === "string" || typeof editedValue === "number" || typeof editedValue === "boolean" ? "wrapped-text" : "wrapped-slot";
		if (this._renderState !== newState) {
			this._rebuildContent(newState);
			return;
		}
		if (newState !== "simple" && this._selector) {
			this._updateSelectorAttr();
			if (newState === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE) this._selector.firstChild.data = String(editedValue);
		}
	}
	_rebuildContent(state) {
		const shadow = this.shadowRoot;
		while (shadow.childNodes.length > 1) shadow.removeChild(shadow.lastChild);
		this._selector = null;
		if (state === "simple") shadow.appendChild(document.createElement("slot"));
		else {
			const selector = document.createElement("intlayer-content-selector");
			this._selector = selector;
			if (this._isSelected) selector.setAttribute("is-selecting", "");
			selector.addEventListener("intlayer:press", (e) => this._handlePress(e));
			selector.addEventListener("intlayer:hover", (e) => this._handleHover(e));
			selector.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e));
			if (state === "wrapped-text") selector.appendChild(document.createTextNode(String(this._editedValue)));
			else selector.appendChild(document.createElement("slot"));
			shadow.appendChild(selector);
		}
		this._renderState = state;
	}
};
var defineIntlayerContentSelectorWrapper = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-content-selector-wrapper")) customElements.define("intlayer-content-selector-wrapper", IntlayerContentSelectorWrapperElement);
};
var _HTMLElement$2 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerEditedContentElement = class extends _HTMLElement$2 {
	_dictionaryKey = "";
	_keyPathJson = "[]";
	_locale = "";
	_editedText = null;
	_unsubManager = null;
	_unsubEditedContent = null;
	_selectorWrapper;
	_slot;
	static get observedAttributes() {
		return [
			"dictionary-key",
			"key-path",
			"locale"
		];
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(v) {
		this._dictionaryKey = v;
		this._selectorWrapper.setAttribute("dictionary-key", v);
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(v) {
		this._keyPathJson = v;
		this._selectorWrapper.setAttribute("key-path", v);
	}
	get locale() {
		return this._locale;
	}
	set locale(v) {
		this._locale = v;
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = ":host { display: contents; }";
		shadow.appendChild(style);
		this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper");
		this._slot = document.createElement("slot");
		this._selectorWrapper.appendChild(this._slot);
		shadow.appendChild(this._selectorWrapper);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		const val = newVal ?? "";
		if (name === "dictionary-key") {
			this._dictionaryKey = val;
			this._selectorWrapper.setAttribute("dictionary-key", val);
		} else if (name === "key-path") {
			this._keyPathJson = val || "[]";
			this._selectorWrapper.setAttribute("key-path", this._keyPathJson);
		} else if (name === "locale") this._locale = val;
	}
	connectedCallback() {
		this._subscribeToManager();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.();
		this._unsubEditedContent?.();
		this._unsubManager = null;
		this._unsubEditedContent = null;
	}
	_getKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_render() {
		while (this._selectorWrapper.firstChild) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
		if (this._editedText !== null) this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
		else this._selectorWrapper.appendChild(this._slot);
	}
	_resolveEditedText(manager) {
		const keyPath = this._getKeyPath();
		const editedValue = manager.getContentValue(this._dictionaryKey, keyPath);
		if (editedValue === void 0 || editedValue === null) {
			this._editedText = null;
			this._render();
			return;
		}
		if (typeof editedValue === "string" || typeof editedValue === "number") {
			this._editedText = String(editedValue);
			this._render();
			return;
		}
		if (typeof editedValue === "object") {
			const locale = this._locale || void 0;
			const transformed = getContent(editedValue, {
				locale,
				dictionaryKey: this._dictionaryKey,
				keyPath
			}, getBasePlugins(locale));
			if (typeof transformed === "string" || typeof transformed === "number") this._editedText = String(transformed);
			else {
				console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(transformed)}`);
				this._editedText = null;
			}
			this._render();
			return;
		}
		this._editedText = null;
		this._render();
	}
	_setupManagerSubscriptions(manager) {
		this._resolveEditedText(manager);
		const handleChange = () => this._resolveEditedText(manager);
		manager.editedContent.addEventListener("change", handleChange);
		this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleChange);
	}
	_subscribeToManager() {
		const manager = getGlobalEditorManager();
		if (manager) this._setupManagerSubscriptions(manager);
		this._unsubManager = onGlobalEditorManagerChange((m) => {
			this._unsubEditedContent?.();
			this._unsubEditedContent = null;
			if (m) this._setupManagerSubscriptions(m);
			else {
				this._editedText = null;
				this._render();
			}
		});
	}
};
var defineIntlayerEditedContent = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-edited-content")) customElements.define("intlayer-edited-content", IntlayerEditedContentElement);
};
var randomUUID = () => Math.random().toString(36).slice(2);
var CrossFrameMessenger = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	constructor(config) {
		this._config = config;
		this.senderId = randomUUID();
	}
	start() {
		if (typeof window === "undefined") return;
		if (this._windowHandler) return;
		this._windowHandler = (event) => {
			this._handleMessage(event);
		};
		window.addEventListener("message", this._windowHandler);
	}
	stop() {
		if (this._windowHandler) {
			window.removeEventListener("message", this._windowHandler);
			this._windowHandler = null;
		}
	}
	send(type, data) {
		const payload = {
			type,
			data,
			senderId: this.senderId,
			messageId: randomUUID()
		};
		for (const origin of this._config.allowedOrigins) if (origin) this._config.postMessageFn(payload, origin);
	}
	subscribe(type, handler) {
		if (!this._subscribers.has(type)) this._subscribers.set(type, /* @__PURE__ */ new Set());
		this._subscribers.get(type).add(handler);
		return () => {
			this._subscribers.get(type)?.delete(handler);
		};
	}
	_handleMessage(event) {
		const payload = event.data;
		if (!payload || typeof payload !== "object") return;
		const { type, data, senderId: msgSenderId, messageId } = payload;
		if (!type || typeof type !== "string") return;
		if (msgSenderId === this.senderId) return;
		if (messageId) {
			if (this._seenMessageIds.has(messageId)) return;
			this._seenMessageIds.add(messageId);
			if (this._seenMessageIds.size > 200) this._seenMessageIds.clear();
		}
		const { allowedOrigins } = this._config;
		if (!(!allowedOrigins || allowedOrigins.length === 0 || allowedOrigins.includes("*") || allowedOrigins.filter((url) => Boolean(url) && url !== "").some((url) => compareUrls(url, event.origin)))) return;
		const handlers = this._subscribers.get(type);
		if (handlers) for (const handler of handlers) handler(data, msgSenderId);
	}
};
var CrossFrameStateManager = class extends EventTarget {
	_value;
	_key;
	_messenger;
	_options;
	_unsubscribers = [];
	constructor(key, messenger, options = {}) {
		super();
		this._key = key;
		this._messenger = messenger;
		this._options = {
			emit: options.emit ?? true,
			receive: options.receive ?? true
		};
		if (options.initialValue !== void 0) this._value = options.initialValue;
	}
	get value() {
		return this._value;
	}
	set(newValue) {
		this._value = newValue;
		this.dispatchEvent(new CustomEvent("change", { detail: newValue }));
		if (this._options.emit) this._messenger.send(`${this._key}/post`, newValue);
	}
	start() {
		if (this._options.receive) {
			const unsub = this._messenger.subscribe(`${this._key}/post`, (data) => {
				this._value = data;
				this.dispatchEvent(new CustomEvent("change", { detail: data }));
			});
			this._unsubscribers.push(unsub);
		}
		if (this._options.emit) {
			const unsub = this._messenger.subscribe(`${this._key}/get`, (_, originSenderId) => {
				if (originSenderId === this._messenger.senderId) return;
				if (this._value === void 0) return;
				this._messenger.send(`${this._key}/post`, this._value);
			});
			this._unsubscribers.push(unsub);
		}
		if (this._options.receive && this._value === void 0) this._messenger.send(`${this._key}/get`);
	}
	stop() {
		for (const unsub of this._unsubscribers) unsub();
		this._unsubscribers.length = 0;
	}
	postCurrentValue() {
		if (this._value !== void 0) this._messenger.send(`${this._key}/post`, this._value);
	}
};
var IframeClickInterceptor = class {
	_messenger;
	_mousedownHandler = null;
	_unsubscribeMerge = null;
	constructor(messenger) {
		this._messenger = messenger;
	}
	startInterceptor() {
		if (typeof window === "undefined") return;
		this._mousedownHandler = () => {
			this._messenger.send("INTLAYER_IFRAME_CLICKED");
		};
		window.addEventListener("mousedown", this._mousedownHandler);
	}
	startMerger() {
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", mergeIframeClick);
	}
	stopInterceptor() {
		if (this._mousedownHandler) {
			window.removeEventListener("mousedown", this._mousedownHandler);
			this._mousedownHandler = null;
		}
	}
	stopMerger() {
		this._unsubscribeMerge?.();
		this._unsubscribeMerge = null;
	}
};
var UrlStateManager = class {
	_messenger;
	_originalPushState = null;
	_originalReplaceState = null;
	_listeners = [];
	constructor(messenger) {
		this._messenger = messenger;
	}
	start() {
		if (typeof window === "undefined") return;
		const updateURLState = () => {
			this._messenger.send(`INTLAYER_URL_CHANGE/post`, window.location.pathname);
		};
		this._originalPushState = history.pushState;
		this._originalReplaceState = history.replaceState;
		const injectLocationChange = (method) => function(...args) {
			method.apply(this, args);
			window.dispatchEvent(new Event("locationchange"));
		};
		history.pushState = injectLocationChange(this._originalPushState);
		history.replaceState = injectLocationChange(this._originalReplaceState);
		for (const eventName of [
			"locationchange",
			"popstate",
			"hashchange",
			"load"
		]) {
			const listener = updateURLState;
			window.addEventListener(eventName, listener);
			this._listeners.push([eventName, listener]);
		}
		updateURLState();
	}
	stop() {
		if (typeof window === "undefined") return;
		for (const [eventName, listener] of this._listeners) window.removeEventListener(eventName, listener);
		this._listeners = [];
		if (this._originalPushState) {
			history.pushState = this._originalPushState;
			this._originalPushState = null;
		}
		if (this._originalReplaceState) {
			history.replaceState = this._originalReplaceState;
			this._originalReplaceState = null;
		}
	}
};
var editDictionaryByKeyPath = (dictionaryContent, keyPath, newValue) => {
	let currentValue = dictionaryContent;
	let parentValue = null;
	let lastKeys = [];
	if (keyPath.length === 0) return newValue;
	try {
		for (let i = 0; i < keyPath.length; i++) {
			const keyObj = keyPath[i];
			parentValue = currentValue;
			if (keyObj.type === "object" || keyObj.type === "array") {
				lastKeys = [keyObj.key];
				if (!currentValue[keyObj.key] || typeof currentValue[keyObj.key] !== "object") currentValue[keyObj.key] = {};
				currentValue = currentValue[keyObj.key];
			}
			if (keyObj.type === "translation" || keyObj.type === "enumeration") {
				lastKeys = [keyObj.type, keyObj.key];
				if (!currentValue[keyObj.type] || typeof currentValue[keyObj.type] !== "object") currentValue[keyObj.type] = {};
				if (!currentValue[keyObj.type][keyObj.key] || typeof currentValue[keyObj.type][keyObj.key] !== "object") currentValue[keyObj.type][keyObj.key] = {};
				currentValue = currentValue[keyObj.type][keyObj.key];
			}
			if (keyObj.type === "enumeration" || keyObj.type === "condition") {
				if (keyObj.type !== "enumeration") {
					lastKeys = [keyObj.type, keyObj.key];
					currentValue = currentValue[keyObj.type][keyObj.key];
				}
			}
			if (keyObj.type === "markdown" || keyObj.type === "html" || keyObj.type === "insertion") {
				lastKeys = [keyObj.type];
				if (!currentValue[keyObj.type] || typeof currentValue[keyObj.type] !== "object") currentValue[keyObj.type] = "";
				currentValue = currentValue[keyObj.type];
			}
			if (keyObj.type === "file") {
				lastKeys = ["content"];
				currentValue = currentValue.content;
			}
			if (i === keyPath.length - 1 && parentValue && lastKeys.length > 0) {
				let target = parentValue;
				for (const key of lastKeys.slice(0, -1)) target = target[key];
				const finalKey = lastKeys[lastKeys.length - 1];
				if (typeof newValue === "undefined") if (Array.isArray(target)) {
					const index = Number(finalKey);
					if (!Number.isNaN(index) && index >= 0 && index < target.length) target.splice(index, 1);
				} else delete target[finalKey];
				else target[finalKey] = newValue;
			}
		}
		return dictionaryContent;
	} catch (error) {
		console.error("Cannot edit dictionary by key path", {
			dictionaryContent,
			keyPath,
			newValue
		}, error);
		return dictionaryContent;
	}
};
var getContentNodeByKeyPath = (dictionaryContent, keyPath, fallbackLocale) => {
	let currentValue = structuredClone(dictionaryContent);
	for (const keyObj of keyPath) {
		if (fallbackLocale && currentValue?.nodeType === "translation") currentValue = currentValue?.[TRANSLATION]?.[fallbackLocale];
		if (keyObj.type === "object" || keyObj.type === "array") currentValue = currentValue?.[keyObj.key];
		if (keyObj.type === "translation" || keyObj.type === "condition" || keyObj.type === "enumeration") currentValue = currentValue?.[keyObj.type]?.[keyObj.key];
		if (keyObj.type === "markdown" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") currentValue = currentValue?.[keyObj.type];
	}
	return currentValue;
};
var renameContentNodeByKeyPath = (dictionaryContent, newKey, keyPath) => {
	let currentValue = dictionaryContent;
	let parentValue = null;
	let lastKey = null;
	for (const keyObj of keyPath) {
		parentValue = currentValue;
		if (keyObj.type === "object" || keyObj.type === "array") {
			lastKey = keyObj.key;
			currentValue = currentValue[keyObj.key];
		}
		if (keyObj.type === "translation" || keyObj.type === "enumeration" || keyObj.type === "condition") {
			lastKey = keyObj.type;
			currentValue = currentValue[keyObj.type][keyObj.key];
		}
		if (keyObj.type === "markdown" || keyObj.type === "reactNode" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") {
			lastKey = keyObj.type;
			currentValue = currentValue[keyObj.type];
		}
	}
	if (parentValue && lastKey !== null) if (Array.isArray(parentValue)) parentValue[lastKey] = currentValue;
	else {
		const newParentValue = {};
		for (const key of Object.keys(parentValue)) if (key === lastKey && typeof newKey !== "undefined") newParentValue[newKey] = currentValue;
		else newParentValue[key] = parentValue[key];
		Object.keys(parentValue).forEach((key) => {
			delete parentValue[key];
		});
		Object.assign(parentValue, newParentValue);
	}
	return dictionaryContent;
};
var EditorStateManager = class {
	messenger;
	editorEnabled;
	focusedContent;
	localeDictionaries;
	editedContent;
	configuration;
	currentLocale;
	_urlManager;
	_iframeInterceptor;
	_mode;
	_configuration;
	_unsubAreYouThere = null;
	_unsubActivate = null;
	_unsubClientReady = null;
	constructor(config) {
		this._mode = config.mode;
		this._configuration = config.configuration;
		this.messenger = new CrossFrameMessenger(config.messenger);
		this.editorEnabled = new CrossFrameStateManager("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: false,
			receive: true,
			initialValue: false
		});
		this.focusedContent = new CrossFrameStateManager("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: true,
			receive: true,
			initialValue: null
		});
		this.localeDictionaries = new CrossFrameStateManager("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger);
		this.editedContent = new CrossFrameStateManager("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger);
		this.configuration = new CrossFrameStateManager("INTLAYER_CONFIGURATION", this.messenger, {
			emit: true,
			receive: false,
			...config.configuration ? { initialValue: config.configuration } : {}
		});
		this.currentLocale = new CrossFrameStateManager("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: config.mode === "client",
			receive: config.mode === "editor"
		});
		this._urlManager = new UrlStateManager(this.messenger);
		this._iframeInterceptor = new IframeClickInterceptor(this.messenger);
	}
	start() {
		this.messenger.start();
		this.editorEnabled.start();
		this.focusedContent.start();
		this.localeDictionaries.start();
		this.editedContent.start();
		this.configuration.start();
		this.currentLocale.start();
		if (this._mode === "client") {
			this._urlManager.start();
			this._iframeInterceptor.startInterceptor();
			this._loadDictionaries();
			this.messenger.send(`INTLAYER_EDITED_CONTENT_CHANGED/get`);
			if (this._configuration?.editor?.enabled !== false) this._setupActivationHandshake();
		} else {
			this._iframeInterceptor.startMerger();
			this._setupEditorHandshake();
		}
	}
	stop() {
		this._unsubAreYouThere?.();
		this._unsubActivate?.();
		this._unsubClientReady?.();
		this._unsubAreYouThere = null;
		this._unsubActivate = null;
		this._unsubClientReady = null;
		this.messenger.stop();
		this.editorEnabled.stop();
		this.focusedContent.stop();
		this.localeDictionaries.stop();
		this.editedContent.stop();
		this.configuration.stop();
		this.currentLocale.stop();
		this._urlManager.stop();
		this._iframeInterceptor.stopInterceptor();
		this._iframeInterceptor.stopMerger();
	}
	pingClient() {
		if (this._mode !== "editor") return;
		this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	setFocusedContentKeyPath(keyPath) {
		const filtered = keyPath.filter((key) => key.type !== TRANSLATION);
		const prev = this.focusedContent.value;
		if (!prev) return;
		this.focusedContent.set({
			...prev,
			keyPath: filtered
		});
	}
	setLocaleDictionary(dictionary) {
		if (!dictionary.localId) return;
		const current = this.localeDictionaries.value ?? {};
		this.localeDictionaries.set({
			...current,
			[dictionary.localId]: dictionary
		});
	}
	setEditedDictionary(newDict) {
		if (!newDict.localId) {
			console.error("setEditedDictionary: missing localId", newDict);
			return;
		}
		const current = this.editedContent.value ?? {};
		this.editedContent.set({
			...current,
			[newDict.localId]: newDict
		});
	}
	setEditedContent(localDictionaryId, newValue) {
		const current = this.editedContent.value ?? {};
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: newValue
			}
		});
	}
	addContent(localDictionaryId, newValue, keyPath = [], overwrite = true) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const currentContent = structuredClone(current[localDictionaryId]?.content ?? originalContent);
		let newKeyPath = keyPath;
		if (!overwrite) {
			let index = 0;
			const otherKeyPath = keyPath.slice(0, -1);
			const lastKeyPath = keyPath[keyPath.length - 1];
			let finalKey = lastKeyPath.key;
			while (typeof getContentNodeByKeyPath(currentContent, newKeyPath) !== "undefined") {
				index++;
				finalKey = index === 0 ? lastKeyPath.key : `${lastKeyPath.key} (${index})`;
				newKeyPath = [...otherKeyPath, {
					...lastKeyPath,
					key: finalKey
				}];
			}
		}
		const updatedContent = editDictionaryByKeyPath(currentContent, newKeyPath, newValue);
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: updatedContent
			}
		});
	}
	renameContent(localDictionaryId, newKey, keyPath = []) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const updated = renameContentNodeByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), newKey, keyPath);
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: updated
			}
		});
	}
	removeContent(localDictionaryId, keyPath) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const restored = editDictionaryByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), keyPath, getContentNodeByKeyPath(originalContent, keyPath));
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: restored
			}
		});
	}
	restoreContent(localDictionaryId) {
		const updated = { ...this.editedContent.value ?? {} };
		delete updated[localDictionaryId];
		this.editedContent.set(updated);
	}
	clearContent(localDictionaryId) {
		const filtered = { ...this.editedContent.value ?? {} };
		delete filtered[localDictionaryId];
		this.editedContent.set(filtered);
	}
	clearAllContent() {
		this.editedContent.set({});
	}
	getContentValue(localDictionaryIdOrKey, keyPath) {
		const edited = this.editedContent.value;
		if (!edited) return void 0;
		const filteredKeyPath = keyPath.filter((key) => key.type !== TRANSLATION);
		const localeDicts = this.localeDictionaries.value;
		if (localDictionaryIdOrKey.includes(":local:") || localDictionaryIdOrKey.includes(":remote:")) {
			if (localeDicts && !(localDictionaryIdOrKey in localeDicts)) return;
			return getContentNodeByKeyPath(edited[localDictionaryIdOrKey]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
		}
		const matchingIds = Object.keys(edited).filter((key) => key.startsWith(`${localDictionaryIdOrKey}:`) && (!localeDicts || key in localeDicts));
		for (const localId of matchingIds) {
			const node = getContentNodeByKeyPath(edited[localId]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
			if (node) return node;
		}
	}
	_setupEditorHandshake() {
		this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
			this.editorEnabled.set(true);
			this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
		});
		this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	_setupActivationHandshake() {
		this.messenger.send("INTLAYER_CLIENT_READY");
		this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
			this.messenger.send("INTLAYER_CLIENT_READY");
		});
		this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
			this.editorEnabled.set(true);
			this._broadcastData();
		});
	}
	_broadcastData() {
		const configVal = this.configuration.value;
		if (configVal) this.messenger.send(`INTLAYER_CONFIGURATION/post`, configVal);
		const localeVal = this.currentLocale.value;
		if (localeVal) this.messenger.send(`INTLAYER_CURRENT_LOCALE/post`, localeVal);
		const dicts = this.localeDictionaries.value;
		if (dicts) this.messenger.send(`INTLAYER_LOCALE_DICTIONARIES_CHANGED/post`, dicts);
	}
	async _loadDictionaries() {
		try {
			const unmergedDictionaries = (await import("./unmerged_dictionaries-5wwWGHuC.js")).getUnmergedDictionaries();
			const dictionariesList = Object.fromEntries(Object.values(unmergedDictionaries).flat().map((dictionary) => [dictionary.localId, dictionary]));
			this.localeDictionaries.set(dictionariesList);
			if (this.editorEnabled.value) this._broadcastData();
		} catch (e) {
			console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
		}
	}
};
var _HTMLElement$1 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerEditorElement = class extends _HTMLElement$1 {
	_configuration = void 0;
	_locale = void 0;
	_initialized = false;
	_unsubManager = null;
	static get observedAttributes() {
		return ["locale"];
	}
	get configuration() {
		return this._configuration;
	}
	set configuration(v) {
		this._configuration = v;
		if (!this._initialized) this._init();
	}
	get locale() {
		return this._locale;
	}
	set locale(v) {
		this._locale = v;
		if (v && this._initialized) this._syncLocale(v);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "locale" && newVal !== null) {
			this._locale = newVal;
			if (this._initialized) this._syncLocale(newVal);
		}
	}
	connectedCallback() {
		this._init();
	}
	disconnectedCallback() {
		this._unsubManager?.();
		this._unsubManager = null;
		if (this._initialized) {
			stopEditorClient();
			this._initialized = false;
		}
	}
	_init() {
		if (this._initialized) return;
		initEditorClient();
		this._initialized = true;
		if (this._locale) this._syncLocale(this._locale);
	}
	_syncLocale(locale) {
		const manager = getGlobalEditorManager();
		if (manager) manager.currentLocale.set(locale);
		else {
			this._unsubManager?.();
			this._unsubManager = onGlobalEditorManagerChange((m) => {
				if (m) {
					this._unsubManager?.();
					this._unsubManager = null;
					m.currentLocale.set(locale);
				}
			});
		}
	}
};
var defineIntlayerEditorElement = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-editor")) customElements.define("intlayer-editor", IntlayerEditorElement);
};
var DEFAULT_PRESS_DURATION = 250;
var STYLES = `
  :host {
    display: contents;
  }

  .wrapper {
    display: inline-block;
    cursor: pointer;
    user-select: none;
    border-radius: 0.375rem;
    outline-width: 2px;
    outline-offset: 4px;
    outline-style: solid;
    outline-color: transparent;
    transition: all 100ms 50ms ease-in-out;
  }

  .wrapper[data-active] {
    outline-color: inherit;
  }
`;
var _HTMLElement = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerContentSelectorElement = class extends _HTMLElement {
	_isSelecting = false;
	_pressDuration = DEFAULT_PRESS_DURATION;
	_isHovered = false;
	_isSelectingState = false;
	_wrapper;
	_pressTimer = null;
	_clickOutsideHandler = null;
	static get observedAttributes() {
		return ["is-selecting", "press-duration"];
	}
	get isSelecting() {
		return this._isSelecting;
	}
	set isSelecting(v) {
		this._isSelecting = v;
		this._updateActiveState();
	}
	get pressDuration() {
		return this._pressDuration;
	}
	set pressDuration(v) {
		this._pressDuration = v;
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = STYLES;
		shadow.appendChild(style);
		const wrapper = document.createElement("span");
		wrapper.className = "wrapper";
		wrapper.setAttribute("role", "button");
		wrapper.setAttribute("tabindex", "0");
		wrapper.appendChild(document.createElement("slot"));
		shadow.appendChild(wrapper);
		this._wrapper = wrapper;
		wrapper.addEventListener("mousedown", () => this._handleMouseDown());
		wrapper.addEventListener("mouseup", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("mouseleave", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("mouseenter", () => this._handleMouseEnter());
		wrapper.addEventListener("click", (e) => this._handleClick(e));
		wrapper.addEventListener("touchstart", () => this._handleMouseDown());
		wrapper.addEventListener("touchend", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("touchcancel", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("blur", () => this._handleBlur());
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "is-selecting") {
			this._isSelecting = newVal !== null;
			this._updateActiveState();
		} else if (name === "press-duration") this._pressDuration = newVal !== null ? parseInt(newVal, 10) : DEFAULT_PRESS_DURATION;
	}
	connectedCallback() {
		this._clickOutsideHandler = (e) => {
			if (!e.composedPath().includes(this)) {
				this._isSelectingState = false;
				this._dispatch("intlayer:click-outside");
				this._updateActiveState();
			}
		};
		document.addEventListener("mousedown", this._clickOutsideHandler);
	}
	disconnectedCallback() {
		if (this._clickOutsideHandler) {
			document.removeEventListener("mousedown", this._clickOutsideHandler);
			this._clickOutsideHandler = null;
		}
		this._clearPressTimer();
	}
	_updateActiveState() {
		if (this._isSelecting || this._isSelectingState || this._isHovered) this._wrapper.setAttribute("data-active", "");
		else this._wrapper.removeAttribute("data-active");
	}
	_clearPressTimer() {
		if (this._pressTimer !== null) {
			clearTimeout(this._pressTimer);
			this._pressTimer = null;
		}
	}
	_dispatch(eventName) {
		this.dispatchEvent(new CustomEvent(eventName, {
			bubbles: true,
			composed: true
		}));
	}
	_handleMouseDown() {
		this._clearPressTimer();
		this._pressTimer = setTimeout(() => {
			this._isSelectingState = true;
			this._updateActiveState();
			this._dispatch("intlayer:press");
		}, this._pressDuration);
	}
	_handleMouseEnter() {
		this._isHovered = true;
		this._updateActiveState();
		this._dispatch("intlayer:hover");
	}
	_handleMouseUpOrLeave() {
		if (this._isHovered) {
			this._isHovered = false;
			this._dispatch("intlayer:unhover");
		}
		this._clearPressTimer();
		this._updateActiveState();
	}
	_handleClick(e) {
		if (this._isSelecting || this._isSelectingState) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	_handleBlur() {
		this._isSelectingState = false;
		this._updateActiveState();
	}
};
var defineIntlayerElements = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-content-selector")) customElements.define("intlayer-content-selector", IntlayerContentSelectorElement);
	defineIntlayerContentSelectorWrapper();
	defineIntlayerEditedContent();
	defineIntlayerEditorElement();
};
var buildClientMessengerConfig = () => {
	return {
		allowedOrigins: [editor?.editorURL, editor?.cmsURL].filter(Boolean),
		postMessageFn: (payload, origin) => {
			if (typeof window === "undefined") return;
			if (!(window.self !== window.top)) return;
			window.parent?.postMessage(payload, origin);
		}
	};
};
var _clientRefCount = 0;
var initEditorClient = () => {
	_clientRefCount++;
	const existing = getGlobalEditorManager();
	if (existing) return existing;
	const manager = new EditorStateManager({
		mode: "client",
		messenger: buildClientMessengerConfig(),
		configuration
	});
	setGlobalEditorManager(manager);
	defineIntlayerElements();
	manager.start();
	return manager;
};
var stopEditorClient = () => {
	_clientRefCount = Math.max(0, _clientRefCount - 1);
	if (_clientRefCount > 0) return;
	getGlobalEditorManager()?.stop();
	setGlobalEditorManager(null);
};
export { initEditorClient, stopEditorClient };
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
	"mode": "prefix-no-default",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var editor = {
	"editorURL": "http://localhost:8000",
	"cmsURL": "https://app.intlayer.org",
	"backendURL": "https://back.intlayer.org",
	"port": 8e3,
	"enabled": false,
	"dictionaryPriorityStrategy": "local_first",
	"liveSync": true,
	"liveSyncPort": 4e3,
	"liveSyncURL": "http://localhost:4000"
};
var configuration = {
	internationalization,
	routing,
	editor,
	log: {
		"mode": "default",
		"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		"baseDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app",
		"moduleAugmentationDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/types",
		"unmergedDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/unmerged_dictionary",
		"remoteDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/remote_dictionary",
		"dictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/dictionary",
		"dynamicDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/dynamic_dictionary",
		"fetchDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/fetch_dictionary",
		"typesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/types",
		"mainDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/main",
		"configDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/config",
		"cacheDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/cache",
		"tempDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/tmp"
	},
	content: {
		"fileExtensions": [
			".content.ts",
			".content.js",
			".content.cjs",
			".content.mjs",
			".content.json",
			".content.json5",
			".content.jsonc",
			".content.tsx",
			".content.jsx"
		],
		"contentDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app"],
		"codeDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app"],
		"excludedPath": [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		"outputFormat": ["esm", "cjs"],
		"cache": true,
		"checkTypes": false
	},
	ai,
	dictionary,
	build,
	compiler: {
		"enabled": true,
		"dictionaryKeyPrefix": "",
		"noMetadata": false,
		"saveComponents": false
	}
};
var TRANSLATION = "translation";
var ENUMERATION = "enumeration";
var CONDITION = "condition";
var INSERTION = "insertion";
var FILE = "file";
var OBJECT = "object";
var ARRAY = "array";
var REACT_NODE = "reactNode";
var MARKDOWN = "markdown";
var HTML = "html";
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
export { internationalization as S, OBJECT as _, fallbackPlugin as a, configuration as b, nestedPlugin as c, CONDITION as d, ENUMERATION as f, MARKDOWN as g, INSERTION as h, enumerationPlugin as i, translationPlugin as l, HTML as m, getContent as n, filePlugin as o, FILE as p, conditionPlugin as r, genderPlugin as s, getBasePlugins as t, ARRAY as u, REACT_NODE as v, editor as x, TRANSLATION as y };
var dictionaries = {};
var getUnmergedDictionaries = () => dictionaries;
export { getUnmergedDictionaries };

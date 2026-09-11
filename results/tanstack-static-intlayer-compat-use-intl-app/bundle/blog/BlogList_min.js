import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var m = {
	key: "blog-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"comparingI18nLibrariesIn2026\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"weTested12DifferentInternationalization\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"howToReduceYourI18n\":\"How to Reduce Your i18n Bundle by 60%\",\"march82026\":\"March 8, 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"theStateOfInternationalizationIn\":\"The State of Internationalization in React\",\"february282026\":\"February 28, 2026\",\"anOverviewOfTheCurrent\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"migratingFromReactI18nextTo\":\"Migrating from react-i18next to Lingui\",\"february152026\":\"February 15, 2026\",\"aStepByStepGuide\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components and i18n: What Changes?\",\"february12026\":\"February 1, 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"benchmarkMethodologyHowWeTest\":\"Benchmark Methodology: How We Test\",\"january202026\":\"January 20, 2026\",\"aTransparentLookAtOur\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"readMore\":\"Read More →\"},\"fr\":{\"comparingI18nLibrariesIn2026\":\"Comparaison des bibliothèques i18n en 2026 : une analyse approfondie\",\"weTested12DifferentInternationalization\":\"Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.\",\"howToReduceYourI18n\":\"Comment réduire votre bundle i18n de 60 %\",\"march82026\":\"8 mars 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.\",\"theStateOfInternationalizationIn\":\"L'état de l'internationalisation dans React\",\"february282026\":\"28 février 2026\",\"anOverviewOfTheCurrent\":\"Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.\",\"migratingFromReactI18nextTo\":\"Migration de react-i18next vers Lingui\",\"february152026\":\"15 février 2026\",\"aStepByStepGuide\":\"Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components et i18n : Qu'est-ce qui change ?\",\"february12026\":\"1er février 2026\",\"reactServerComponentsIntroduceNew\":\"Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.\",\"benchmarkMethodologyHowWeTest\":\"Méthodologie du benchmark : comment nous testons\",\"january202026\":\"20 janvier 2026\",\"aTransparentLookAtOur\":\"Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.\",\"readMore\":\"Lire la suite →\"},\"es\":{\"comparingI18nLibrariesIn2026\":\"Comparación de bibliotecas i18n en 2026: un análisis profundo\",\"weTested12DifferentInternationalization\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.\",\"howToReduceYourI18n\":\"Cómo reducir tu bundle i18n en un 60%\",\"march82026\":\"8 de marzo de 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\",\"theStateOfInternationalizationIn\":\"El estado de la internacionalización en React\",\"february282026\":\"28 de febrero de 2026\",\"anOverviewOfTheCurrent\":\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"migratingFromReactI18nextTo\":\"Migración de react-i18next a Lingui\",\"february152026\":\"15 de febrero de 2026\",\"aStepByStepGuide\":\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: ¿qué cambia?\",\"february12026\":\"1 de febrero de 2026\",\"reactServerComponentsIntroduceNew\":\"Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"benchmarkMethodologyHowWeTest\":\"Metodología del benchmark: cómo probamos\",\"january202026\":\"20 de enero de 2026\",\"aTransparentLookAtOur\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"readMore\":\"Leer más →\"},\"de\":{\"comparingI18nLibrariesIn2026\":\"i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick\",\"weTested12DifferentInternationalization\":\"Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"howToReduceYourI18n\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"march82026\":\"8. März 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.\",\"theStateOfInternationalizationIn\":\"Der Stand der Internationalisierung in React\",\"february282026\":\"28. Februar 2026\",\"anOverviewOfTheCurrent\":\"Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"migratingFromReactI18nextTo\":\"Migration von react-i18next zu Lingui\",\"february152026\":\"15. Februar 2026\",\"aStepByStepGuide\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components und i18n: Was ändert sich?\",\"february12026\":\"1. Februar 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"benchmarkMethodologyHowWeTest\":\"Benchmark-Methodik: Wie wir testen\",\"january202026\":\"20. Januar 2026\",\"aTransparentLookAtOur\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"readMore\":\"Weiterlesen →\"},\"it\":{\"comparingI18nLibrariesIn2026\":\"Confronto tra librerie i18n nel 2026: un approfondimento\",\"weTested12DifferentInternationalization\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"howToReduceYourI18n\":\"Come ridurre il bundle i18n del 60%\",\"march82026\":\"8 marzo 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.\",\"theStateOfInternationalizationIn\":\"Lo stato dell'internazionalizzazione in React\",\"february282026\":\"28 febbraio 2026\",\"anOverviewOfTheCurrent\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"migratingFromReactI18nextTo\":\"Migrazione da react-i18next a Lingui\",\"february152026\":\"15 febbraio 2026\",\"aStepByStepGuide\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: cosa cambia?\",\"february12026\":\"1 febbraio 2026\",\"reactServerComponentsIntroduceNew\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"benchmarkMethodologyHowWeTest\":\"Metodologia del benchmark: come testiamo\",\"january202026\":\"20 gennaio 2026\",\"aTransparentLookAtOur\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\",\"readMore\":\"Leggi di più →\"},\"pt\":{\"comparingI18nLibrariesIn2026\":\"Comparando Bibliotecas i18n em 2026: Uma Análise Profunda\",\"weTested12DifferentInternationalization\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"howToReduceYourI18n\":\"Como reduzir seu bundle i18n em 60%\",\"march82026\":\"8 de março de 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.\",\"theStateOfInternationalizationIn\":\"O estado da internacionalização no React\",\"february282026\":\"28 de fevereiro de 2026\",\"anOverviewOfTheCurrent\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"migratingFromReactI18nextTo\":\"Migrando do react-i18next para o Lingui\",\"february152026\":\"15 de fevereiro de 2026\",\"aStepByStepGuide\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: o que muda?\",\"february12026\":\"1 de fevereiro de 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"benchmarkMethodologyHowWeTest\":\"Metodologia de Benchmark: como testamos\",\"january202026\":\"20 de janeiro de 2026\",\"aTransparentLookAtOur\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"readMore\":\"Leia mais →\"},\"zh\":{\"comparingI18nLibrariesIn2026\":\"2026 年 i18n 库比较：深度探讨\",\"weTested12DifferentInternationalization\":\"我们在性能、捆绑包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。\",\"howToReduceYourI18n\":\"如何将 i18n 捆绑包减少 60%\",\"march82026\":\"2026 年 3 月 8 日\",\"practicalStrategiesForOptimizingTranslation\":\"优化翻译捆绑包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"theStateOfInternationalizationIn\":\"React 国际化现状\",\"february282026\":\"2026 年 2 月 28 日\",\"anOverviewOfTheCurrent\":\"React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。\",\"migratingFromReactI18nextTo\":\"从 react-i18next 迁移到 Lingui\",\"february152026\":\"2026 年 2 月 15 日\",\"aStepByStepGuide\":\"关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的逐步指南。\",\"serverComponentsAndI18nWhat\":\"Server Components 和 i18n：有哪些变化？\",\"february12026\":\"2026 年 2 月 1 日\",\"reactServerComponentsIntroduceNew\":\"React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。\",\"benchmarkMethodologyHowWeTest\":\"基准测试方法论：我们如何测试\",\"january202026\":\"2026 年 1 月 20 日\",\"aTransparentLookAtOur\":\"透明地了解我们的基准测试方法论，包括测试环境、统计方法和可重现性。\",\"readMore\":\"阅读更多 →\"},\"ja\":{\"comparingI18nLibrariesIn2026\":\"2026年のi18nライブラリ比較：ディープダイブ\",\"weTested12DifferentInternationalization\":\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\",\"howToReduceYourI18n\":\"i18nバンドルを60%削減する方法\",\"march82026\":\"2026年3月8日\",\"practicalStrategiesForOptimizingTranslation\":\"遅延ロード、コード分割、コンパイル時最適化など、翻訳バンドルを最適化するための実践的な戦略。\",\"theStateOfInternationalizationIn\":\"Reactにおける国際化の現状\",\"february282026\":\"2026年2月28日\",\"anOverviewOfTheCurrent\":\"トレンド、新たなパターン、コミュニティの好みを網羅した、Reactの現在のi18nエコシステムの概要。\",\"migratingFromReactI18nextTo\":\"react-i18nextからLinguiへの移行\",\"february152026\":\"2026年2月15日\",\"aStepByStepGuide\":\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"serverComponentsAndI18nWhat\":\"Server Componentsとi18n：何が変わるのか？\",\"february12026\":\"2026年2月1日\",\"reactServerComponentsIntroduceNew\":\"React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"benchmarkMethodologyHowWeTest\":\"ベンチマーク方法論：テスト方法\",\"january202026\":\"2026年1月20日\",\"aTransparentLookAtOur\":\"テスト環境、統計的手法、再現性を含む、ベンチマーク方法論の透明性の高い紹介。\",\"readMore\":\"詳しく読む →\"},\"ko\":{\"comparingI18nLibrariesIn2026\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"weTested12DifferentInternationalization\":\"저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.\",\"howToReduceYourI18n\":\"i18n 번들을 60% 줄이는 방법\",\"march82026\":\"2026년 3월 8일\",\"practicalStrategiesForOptimizingTranslation\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"theStateOfInternationalizationIn\":\"React 국제화의 현주소\",\"february282026\":\"2026년 2월 28일\",\"anOverviewOfTheCurrent\":\"동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.\",\"migratingFromReactI18nextTo\":\"react-i18next에서 Lingui로 마이그레이션하기\",\"february152026\":\"2026년 2월 15일\",\"aStepByStepGuide\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.\",\"serverComponentsAndI18nWhat\":\"Server Components 및 i18n: 무엇이 달라지나요?\",\"february12026\":\"2026년 2월 1일\",\"reactServerComponentsIntroduceNew\":\"React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.\",\"benchmarkMethodologyHowWeTest\":\"벤치마크 방법론: 테스트 방법\",\"january202026\":\"2026년 1월 20일\",\"aTransparentLookAtOur\":\"테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.\",\"readMore\":\"더 읽어보기 →\"},\"ru\":{\"comparingI18nLibrariesIn2026\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"weTested12DifferentInternationalization\":\"Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\",\"howToReduceYourI18n\":\"Как уменьшить бандл i18n на 60%\",\"march82026\":\"8 марта 2026 года\",\"practicalStrategiesForOptimizingTranslation\":\"Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.\",\"theStateOfInternationalizationIn\":\"Состояние интернационализации в React\",\"february282026\":\"28 февраля 2026 года\",\"anOverviewOfTheCurrent\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.\",\"migratingFromReactI18nextTo\":\"Миграция с react-i18next на Lingui\",\"february152026\":\"15 февраля 2026 года\",\"aStepByStepGuide\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components и i18n: что меняется?\",\"february12026\":\"1 февраля 2026 года\",\"reactServerComponentsIntroduceNew\":\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\",\"benchmarkMethodologyHowWeTest\":\"Методология бенчмарка: как мы тестируем\",\"january202026\":\"20 января 2026 года\",\"aTransparentLookAtOur\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"readMore\":\"Читать далее →\"}}}")
}, h = /* @__PURE__ */ new WeakMap(), ee = 0, te = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	ee += 1;
	let n = `p${ee}`;
	return h.set(e, n), n;
}, ne = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, ie = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, ae = "translation", oe = "enumeration", se = "plural", y = "insertion", ce = "object", le = "array", ue = "markdown", b = "html", de = "gender", fe = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: le,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ce,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = x(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = x(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, pe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, me = (e, t) => e[pe(e, t) ?? "fallback"], he = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", ge = /[^A-Za-z0-9._&=-]/g, _e = /[^A-Za-z0-9._-]/g, ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, C = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ve);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, w = (e) => e === void 0 ? S : typeof e == "string" ? C(e, ge) : Object.keys(e).sort().map((t) => `${C(t, _e)}=${C(String(e[t]), _e)}`).join("&"), T = (e) => Array.isArray(e) ? e.length === 0 ? [S] : e.map(w) : [w(e)], ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? S : e[0] ?? "default";
}, be = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, xe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Se = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ce = (e, t) => {
	if (!xe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? S : ye(T(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => be(e, n, t, s)).map((t) => Se(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, we = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, E = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? T(n).join(",") : String(n)}`;
}).join("|") : "", D = {
	locales: [
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
	requiredLocales: [
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
	strictMode: "inclusive",
	defaultLocale: "en"
}, O = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, Te = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ee = "\x1B[0m", De = "\x1B[34m", Oe = "\x1B[31m", ke = "\x1B[32m", Ae = "\x1B[36m", je = (e) => e, Me = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = je(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ne = (e, t) => (n, r) => Me(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), k = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? Ee : n : Ee}` : e;
k("✗", Oe), k("✓", ke), k("⏲", De);
var Pe = 50, Fe = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Set(), Le = (e) => {
	Ie.has(e) || (Ie.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Re = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, ze = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Le(e), Re[e]);
};
function A(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Fe.get(a);
	o || (o = /* @__PURE__ */ new Map(), Fe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ze(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Pe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Be = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, Ve = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (j(e) && j(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : M(e[r], t[r]));
		return n;
	}
	return e;
}, He = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => M(e, t));
}, N = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ue = (e) => {
	if (typeof e == "string") return e;
	if (N(e)) return e.nodeType === "html" ? e[b] : e[ue];
}, We = (e, t) => {
	if (typeof e == "string") return t;
	if (N(e)) {
		let n = e.nodeType === "html" ? b : ue;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, P = (e, t, n, r, i) => {
	let a = We(e, he(Ue(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return He(o, e, t);
	}
}, L = F, Ge = (e) => F, R = F, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = he(i, e);
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
}, z = F, B = F, V = (e) => F, H = F, qe = (e, t = !0) => [
	I(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	L,
	R,
	Ke,
	V(e ?? D.defaultLocale),
	H,
	z,
	B
], Je = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), Ye = (e, t, n) => {
	let { locale: r, selector: i } = we(t), a = re(r ?? D.defaultLocale, E(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? qe(r), c = Ce(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Je(e.content, t, s);
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
}, Xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", U = /\{\{\s*(.*?)\s*\}\}/g, Ze = (e, t = {}) => {
	if (!Object.values(t).some(Xe)) return {
		isSimple: !0,
		parts: e.replace(U, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(U), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Qe = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, W = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], G = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, $e = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? A("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? A("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : A("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return A("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? $e(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : $e(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[y], t, n);
	if (r.nodeType === "html") return q(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[se];
		return q(Be(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[oe], i = W.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) W.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? me(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[fe], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Ve(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[de];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, tt = (e, t = {}, n = "en") => {
	let r = q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, J = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: J(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, nt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, rt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = rt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Y = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Y(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), it = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return at(e, (e) => Qe(t, r(e)), r);
}, at = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return tt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: rt(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : Y(J(o), a);
		}
	});
}, ot = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : d(u, { children: e });
	return new Proxy(r, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, st = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ot({
		...n,
		value: n.children,
		children: n.children
	})
}, ct = F, lt = (e, n) => {
	let i = Ze(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = lt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, dt = F, ft = F, X = /* @__PURE__ */ new Map(), pt = (e, t = !0) => {
	let n = `${e ?? D.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		I(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
		L,
		Ge(e ?? D.defaultLocale),
		R,
		V(e ?? D.defaultLocale),
		H,
		z,
		B,
		st,
		ct,
		ut,
		dt,
		ft
	];
	return X.set(n, r), r;
}, mt = (e, t) => Ye(e, t, pt(typeof t == "object" && t ? t.locale : t)), ht = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, gt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ht(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _t = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, vt = (e = Z) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_t) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, yt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !_t && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ht(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, gt(r, e, i));
			} catch {}
		}
	}
}, bt = vt(Z), xt = (e, t) => yt(e, {
	...Z,
	isCookieEnabled: t
}), St = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Ct = ({ children: e }) => (St(), e), wt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Tt = ({ children: e }) => (wt(), e), Et = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Dt = (e, t = D?.locales, n = D?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, Q = n({
	locale: bt ?? D?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ot = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = D ?? {}, [f, p] = l(e ?? bt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		Et();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), xt(e, s);
		}
	}), h = Dt(f);
	return d(Q.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, kt = ({ children: e, ...t }) => f(Ot, {
	...t,
	children: [
		d(Ct, {}),
		d(Tt, {}),
		e
	]
}), At = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${E(i)}` : i;
	return s(() => mt(e, i), [e.key, o]);
}, jt = ((e, t) => {
	let { locale: n } = a(Q) ?? {};
	return it(n, At(e), t);
}), Mt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ne({ log: Te })(`${k("IntlProvider", Ae)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(kt, {
	locale: e,
	children: t
}, String(e))), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/blog/BlogList.tsx";
function Nt() {
	let e = jt(m), t = [
		{
			title: e("comparingI18nLibrariesIn2026"),
			date: e("march82026"),
			excerpt: e("weTested12DifferentInternationalization"),
			category: "Benchmark"
		},
		{
			title: e("howToReduceYourI18n"),
			date: e("march82026"),
			excerpt: e("practicalStrategiesForOptimizingTranslation"),
			category: "Tutorial"
		},
		{
			title: e("theStateOfInternationalizationIn"),
			date: e("february282026"),
			excerpt: e("anOverviewOfTheCurrent"),
			category: "Analysis"
		},
		{
			title: e("migratingFromReactI18nextTo"),
			date: e("february152026"),
			excerpt: e("aStepByStepGuide"),
			category: "Tutorial"
		},
		{
			title: e("serverComponentsAndI18nWhat"),
			date: e("february12026"),
			excerpt: e("reactServerComponentsIntroduceNew"),
			category: "Analysis"
		},
		{
			title: e("benchmarkMethodologyHowWeTest"),
			date: e("january202026"),
			excerpt: e("aTransparentLookAtOur"),
			category: "Meta"
		}
	];
	return p("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: t.map((t) => p("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				p("div", {
					className: "mb-3 flex items-center gap-3",
					children: [p("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: t.category
					}, void 0, !1, {
						fileName: $,
						lineNumber: 53,
						columnNumber: 13
					}, this), p("span", {
						className: "text-xs text-muted-foreground",
						children: t.date
					}, void 0, !1, {
						fileName: $,
						lineNumber: 56,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 52,
					columnNumber: 11
				}, this),
				p("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: t.title
				}, void 0, !1, {
					fileName: $,
					lineNumber: 58,
					columnNumber: 11
				}, this),
				p("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: t.excerpt
				}, void 0, !1, {
					fileName: $,
					lineNumber: 61,
					columnNumber: 11
				}, this),
				p("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: e("readMore")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 62,
					columnNumber: 11
				}, this)
			]
		}, t.title, !0, {
			fileName: $,
			lineNumber: 48,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 46,
		columnNumber: 5
	}, this);
}
var Pt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Ft({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(Mt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Pt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Pt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var It = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/blog/BlogList.wrapper.tsx";
function Lt() {
	return p(Ft, { children: p(Nt, {}, void 0, !1, {
		fileName: It,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: It,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Lt as default };

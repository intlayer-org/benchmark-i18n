import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "blog-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"comparingI18nLibrariesIn2026\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"weTested12DifferentInternationalization\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"howToReduceYourI18n\":\"How to Reduce Your i18n Bundle by 60%\",\"march82026\":\"March 8, 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"theStateOfInternationalizationIn\":\"The State of Internationalization in React\",\"february282026\":\"February 28, 2026\",\"anOverviewOfTheCurrent\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"migratingFromReactI18nextTo\":\"Migrating from react-i18next to Lingui\",\"february152026\":\"February 15, 2026\",\"aStepByStepGuide\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components and i18n: What Changes?\",\"february12026\":\"February 1, 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"benchmarkMethodologyHowWeTest\":\"Benchmark Methodology: How We Test\",\"january202026\":\"January 20, 2026\",\"aTransparentLookAtOur\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"readMore\":\"Read More →\"},\"fr\":{\"comparingI18nLibrariesIn2026\":\"Comparaison des bibliothèques i18n en 2026 : une analyse approfondie\",\"weTested12DifferentInternationalization\":\"Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.\",\"howToReduceYourI18n\":\"Comment réduire votre bundle i18n de 60 %\",\"march82026\":\"8 mars 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.\",\"theStateOfInternationalizationIn\":\"L'état de l'internationalisation dans React\",\"february282026\":\"28 février 2026\",\"anOverviewOfTheCurrent\":\"Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.\",\"migratingFromReactI18nextTo\":\"Migration de react-i18next vers Lingui\",\"february152026\":\"15 février 2026\",\"aStepByStepGuide\":\"Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components et i18n : Qu'est-ce qui change ?\",\"february12026\":\"1er février 2026\",\"reactServerComponentsIntroduceNew\":\"Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.\",\"benchmarkMethodologyHowWeTest\":\"Méthodologie du benchmark : comment nous testons\",\"january202026\":\"20 janvier 2026\",\"aTransparentLookAtOur\":\"Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.\",\"readMore\":\"Lire la suite →\"},\"es\":{\"comparingI18nLibrariesIn2026\":\"Comparación de bibliotecas i18n en 2026: un análisis profundo\",\"weTested12DifferentInternationalization\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.\",\"howToReduceYourI18n\":\"Cómo reducir tu bundle i18n en un 60%\",\"march82026\":\"8 de marzo de 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\",\"theStateOfInternationalizationIn\":\"El estado de la internacionalización en React\",\"february282026\":\"28 de febrero de 2026\",\"anOverviewOfTheCurrent\":\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"migratingFromReactI18nextTo\":\"Migración de react-i18next a Lingui\",\"february152026\":\"15 de febrero de 2026\",\"aStepByStepGuide\":\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: ¿qué cambia?\",\"february12026\":\"1 de febrero de 2026\",\"reactServerComponentsIntroduceNew\":\"Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"benchmarkMethodologyHowWeTest\":\"Metodología del benchmark: cómo probamos\",\"january202026\":\"20 de enero de 2026\",\"aTransparentLookAtOur\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"readMore\":\"Leer más →\"},\"de\":{\"comparingI18nLibrariesIn2026\":\"i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick\",\"weTested12DifferentInternationalization\":\"Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"howToReduceYourI18n\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"march82026\":\"8. März 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.\",\"theStateOfInternationalizationIn\":\"Der Stand der Internationalisierung in React\",\"february282026\":\"28. Februar 2026\",\"anOverviewOfTheCurrent\":\"Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"migratingFromReactI18nextTo\":\"Migration von react-i18next zu Lingui\",\"february152026\":\"15. Februar 2026\",\"aStepByStepGuide\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components und i18n: Was ändert sich?\",\"february12026\":\"1. Februar 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"benchmarkMethodologyHowWeTest\":\"Benchmark-Methodik: Wie wir testen\",\"january202026\":\"20. Januar 2026\",\"aTransparentLookAtOur\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"readMore\":\"Weiterlesen →\"},\"it\":{\"comparingI18nLibrariesIn2026\":\"Confronto tra librerie i18n nel 2026: un approfondimento\",\"weTested12DifferentInternationalization\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"howToReduceYourI18n\":\"Come ridurre il bundle i18n del 60%\",\"march82026\":\"8 marzo 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.\",\"theStateOfInternationalizationIn\":\"Lo stato dell'internazionalizzazione in React\",\"february282026\":\"28 febbraio 2026\",\"anOverviewOfTheCurrent\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"migratingFromReactI18nextTo\":\"Migrazione da react-i18next a Lingui\",\"february152026\":\"15 febbraio 2026\",\"aStepByStepGuide\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: cosa cambia?\",\"february12026\":\"1 febbraio 2026\",\"reactServerComponentsIntroduceNew\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"benchmarkMethodologyHowWeTest\":\"Metodologia del benchmark: come testiamo\",\"january202026\":\"20 gennaio 2026\",\"aTransparentLookAtOur\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\",\"readMore\":\"Leggi di più →\"},\"pt\":{\"comparingI18nLibrariesIn2026\":\"Comparando Bibliotecas i18n em 2026: Uma Análise Profunda\",\"weTested12DifferentInternationalization\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"howToReduceYourI18n\":\"Como reduzir seu bundle i18n em 60%\",\"march82026\":\"8 de março de 2026\",\"practicalStrategiesForOptimizingTranslation\":\"Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.\",\"theStateOfInternationalizationIn\":\"O estado da internacionalização no React\",\"february282026\":\"28 de fevereiro de 2026\",\"anOverviewOfTheCurrent\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"migratingFromReactI18nextTo\":\"Migrando do react-i18next para o Lingui\",\"february152026\":\"15 de fevereiro de 2026\",\"aStepByStepGuide\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components e i18n: o que muda?\",\"february12026\":\"1 de fevereiro de 2026\",\"reactServerComponentsIntroduceNew\":\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"benchmarkMethodologyHowWeTest\":\"Metodologia de Benchmark: como testamos\",\"january202026\":\"20 de janeiro de 2026\",\"aTransparentLookAtOur\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"readMore\":\"Leia mais →\"},\"zh\":{\"comparingI18nLibrariesIn2026\":\"2026 年 i18n 库对比：深度解析\",\"weTested12DifferentInternationalization\":\"我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。\",\"howToReduceYourI18n\":\"如何将您的 i18n 包减少 60%\",\"march82026\":\"2026年3月8日\",\"practicalStrategiesForOptimizingTranslation\":\"优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"theStateOfInternationalizationIn\":\"React 国际化的现状\",\"february282026\":\"2026年2月28日\",\"anOverviewOfTheCurrent\":\"React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。\",\"migratingFromReactI18nextTo\":\"从 react-i18next 迁移到 Lingui\",\"february152026\":\"2026年2月15日\",\"aStepByStepGuide\":\"关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\",\"serverComponentsAndI18nWhat\":\"服务器组件与 i18n：有哪些变化？\",\"february12026\":\"2026年2月1日\",\"reactServerComponentsIntroduceNew\":\"React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。\",\"benchmarkMethodologyHowWeTest\":\"基准测试方法论：我们如何测试\",\"january202026\":\"2026年1月20日\",\"aTransparentLookAtOur\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。\",\"readMore\":\"阅读更多 →\"},\"ja\":{\"comparingI18nLibrariesIn2026\":\"2026年のi18nライブラリ比較：ディープダイブ\",\"weTested12DifferentInternationalization\":\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\",\"howToReduceYourI18n\":\"i18nバンドルを60％削減する方法\",\"march82026\":\"2026年3月8日\",\"practicalStrategiesForOptimizingTranslation\":\"遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\",\"theStateOfInternationalizationIn\":\"Reactにおける国際化の現状\",\"february282026\":\"2026年2月28日\",\"anOverviewOfTheCurrent\":\"トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。\",\"migratingFromReactI18nextTo\":\"react-i18nextからLinguiへの移行\",\"february152026\":\"2026年2月15日\",\"aStepByStepGuide\":\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"serverComponentsAndI18nWhat\":\"Server Componentsとi18n：何が変わるのか？\",\"february12026\":\"2026年2月1日\",\"reactServerComponentsIntroduceNew\":\"React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"benchmarkMethodologyHowWeTest\":\"ベンチマーク方法論：私たちのテスト方法\",\"january202026\":\"2026年1月20日\",\"aTransparentLookAtOur\":\"テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。\",\"readMore\":\"続きを読む →\"},\"ko\":{\"comparingI18nLibrariesIn2026\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"weTested12DifferentInternationalization\":\"저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.\",\"howToReduceYourI18n\":\"i18n 번들을 60% 줄이는 방법\",\"march82026\":\"2026년 3월 8일\",\"practicalStrategiesForOptimizingTranslation\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"theStateOfInternationalizationIn\":\"React 국제화의 현주소\",\"february282026\":\"2026년 2월 28일\",\"anOverviewOfTheCurrent\":\"동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.\",\"migratingFromReactI18nextTo\":\"react-i18next에서 Lingui로 마이그레이션하기\",\"february152026\":\"2026년 2월 15일\",\"aStepByStepGuide\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.\",\"serverComponentsAndI18nWhat\":\"Server Components 및 i18n: 무엇이 달라지나요?\",\"february12026\":\"2026년 1월 1일\",\"reactServerComponentsIntroduceNew\":\"React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.\",\"benchmarkMethodologyHowWeTest\":\"벤치마크 방법론: 테스트 방법\",\"january202026\":\"2026년 1월 20일\",\"aTransparentLookAtOur\":\"테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.\",\"readMore\":\"더 읽어보기 →\"},\"ru\":{\"comparingI18nLibrariesIn2026\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"weTested12DifferentInternationalization\":\"Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\",\"howToReduceYourI18n\":\"Как уменьшить бандл i18n на 60%\",\"march82026\":\"8 марта 2026 года\",\"practicalStrategiesForOptimizingTranslation\":\"Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.\",\"theStateOfInternationalizationIn\":\"Состояние интернационализации в React\",\"february282026\":\"28 февраля 2026 года\",\"anOverviewOfTheCurrent\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.\",\"migratingFromReactI18nextTo\":\"Миграция с react-i18next на Lingui\",\"february152026\":\"15 февраля 2026 года\",\"aStepByStepGuide\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.\",\"serverComponentsAndI18nWhat\":\"Server Components и i18n: что меняется?\",\"february12026\":\"1 февраля 2026 года\",\"reactServerComponentsIntroduceNew\":\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\",\"benchmarkMethodologyHowWeTest\":\"Методология бенчмарка: как мы тестируем\",\"january202026\":\"20 января 2026 года\",\"aTransparentLookAtOur\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"readMore\":\"Читать далее →\"}}}")
}, ee = t(null), p = class {
	_events = /* @__PURE__ */ new Map();
	on(e, t) {
		return this._events.has(e) || this._events.set(e, /* @__PURE__ */ new Set()), this._events.get(e).add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		this._events.get(e)?.delete(t);
	}
	emit(e, ...t) {
		this._events.get(e)?.forEach((e) => {
			e(...t);
		});
	}
}, m = (e, t) => {
	if (!t) return e;
	if (typeof e != "object" || !e) return;
	let n = e[t];
	if (n !== void 0) return n;
	if (!t.includes(".")) return;
	let r = e;
	for (let e of t.split(".")) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, h = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, g = (e, t) => {
	let n = m(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return m(n, t);
	}
}, te = (e) => {
	if (typeof e == "string") return e;
	if (!Array.isArray(e)) return "";
	let [t, n, r] = e;
	if (n === void 0) return `{${String(t)}}`;
	if (n === "plural" || n === "select" || n === "selectordinal") {
		let e = r ?? {}, i = [], a = "";
		for (let [t, n] of Object.entries(e)) {
			if (t === "offset") {
				a = `offset:${String(n)} `;
				continue;
			}
			i.push(`${t} {${_(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, _ = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(te).join("") : String(e ?? ""), v = "translation", y = "enumeration", b = "plural", ne = "condition", x = "insertion", re = "object", ie = "array", ae = "markdown", S = "html", C = "gender", w = "select", T = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), E = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, D);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, E(t, e, {
		type: ie,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: re,
			key: r
		};
		if (t.eager) {
			n[r] = D(e[r], E(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = D(e[r], E(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, oe = (e) => T(y, e), se = (e) => T(C, e), ce = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, O = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = ce(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, le = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), ue = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, de = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(ue)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = le.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, k = (e, t) => T(S, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = de(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return O(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => O(await e)), typeof n == "string") return O(n);
	try {
		return O(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), A = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, j = (e) => T(x, e, { fields: (() => {
	if (typeof e == "string") return A(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => A(await e)), typeof t == "string") return A(t);
	try {
		return A(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), fe = (e) => T(b, e), pe = (e, t) => T(w, e, { variable: t }), me = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, M = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? k(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? k(t) : j(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? k(t) : t;
		if (t?.type === "argument") return t.format ? j(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : j(`{{${t.name}}}`);
		if (t?.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = M(a);
				}
				return e.__intlayer_icu_var = t.name, oe(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = M(i);
			}
			return fe(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = M(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? se({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : pe(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = M(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, oe(e);
		}
	}
	return e.map((e) => M([e]));
}, he = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return M(me(e));
		} catch {
			return e;
		}
	}
}, ge = (e) => D(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...he
	}]
}), _e = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ve = (e, t) => e[_e(e, t) ?? "fallback"], N = {
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
}, P = {
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
}, ye = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, be = 50, xe = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Set(), Ce = (e) => {
	Se.has(e) || (Se.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, we = {
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
}, Te = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ce(e), we[e]);
};
function F(e, t, n) {
	let r = t ?? N?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = xe.get(a);
	o || (o = /* @__PURE__ */ new Map(), xe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > be && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ee = (e, t, n) => e[F("PluralRules", n).select(t)] ?? e.other, De = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Oe = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], I = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, ke = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? F("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? F("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : F("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return F("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ae = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = I(t, r);
	return o === void 0 ? e : i ? ke(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = I(t, r);
	return o === void 0 ? e : ke(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = I(t, n);
	return r === void 0 ? e : String(r);
}), L = (e, t) => e[t] ?? e.count ?? e.n, R = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ae(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return R(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(R(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return R(r[x], t, n);
	if (r.nodeType === "html") return R(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[b];
		return R(Ee(e, Number(L(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[y], i = Oe.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Oe.includes(t) || (o[t] = n);
		let s = L(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = F("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return R(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[w], i = L(t, typeof r.variable == "string" ? r.variable : "value");
		return R(De(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[C];
		return R(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, je = (e, t = {}, n = "en") => {
	let r = R(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Me = ((e) => (t, n = {}, r = "en") => je(typeof t == "string" ? e(t) : t, n, r))(ge), Ne = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Pe = class extends p {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_boundDictionaries = {};
	_registry;
	constructor({ locale: e = "en", locales: t, messages: n, registry: r } = {}) {
		super(), this._locale = typeof e == "string" ? e : "en", this._locales = t, this._registry = r, n && this.mergeAllCatalogs(n);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		let e = { ...this._registry?.all(this._locale) };
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, h(t));
		return {
			...this._catalogs[this._locale] ?? {},
			...e
		};
	}
	mergeLocaleCatalog(e, t) {
		this._catalogs[e] = {
			...this._catalogs[e],
			...t
		};
	}
	mergeAllCatalogs(e) {
		for (let [t, n] of Object.entries(e)) n && typeof n == "object" && this.mergeLocaleCatalog(t, n);
	}
	setMessagesCompiler(e) {
		return console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer."), this;
	}
	load(e, t) {
		typeof e == "string" ? this.mergeLocaleCatalog(e, t ?? {}) : this.mergeAllCatalogs(e), this._loadFallbackWarned || (this._loadFallbackWarned = !0, console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files."));
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		n && this.mergeLocaleCatalog(e, n), this.activate(e, t);
	}
	bindDictionaries(e) {
		return this._boundDictionaries = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	lookupBoundDictionaries(e) {
		let { dictionaryKey: t, remainder: n } = Ne(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = g(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = g(t, e);
			if (n !== void 0) return n;
		}
	}
	resolveTemplate(e) {
		let t = this.lookupBoundDictionaries(e);
		if (t !== void 0) return {
			kind: "node",
			node: t
		};
		let n = this._registry?.lookup(e, this._locale);
		if (n !== void 0) return {
			kind: "node",
			node: n
		};
		let r = this._catalogs[this._locale];
		if (r) {
			let t = g(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: _(t)
			};
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {}, s = this._locale, c = this.resolveTemplate(i) ?? {
			kind: "icu",
			message: a ?? i
		};
		return (c.kind === "node" ? je(c.node, o, s) : Me(c.message, o, s)) ?? i;
	}
	t = (e, t, n) => this._(e, t, n);
	date(e, t) {
		if (e == null) return "";
		let n = e instanceof Date ? e : new Date(e);
		return new Intl.DateTimeFormat(this._locale, t).format(n);
	}
	number(e, t) {
		return new Intl.NumberFormat(this._locale, t).format(e);
	}
}, Fe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Ie = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Fe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Le = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var z = {
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
}, B = (e = z) => {
	let { locales: t } = N;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Le) for (let t = 0; t < (P.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(P.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, V = !1, H, Re = () => typeof window > "u" ? B(z) : (V ||= (H = B(z), !0), H), ze = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (V = !1, !Le && P.storage.cookies)) for (let n = 0; n < P.storage.cookies.length; n++) {
		let { name: r, attributes: i } = P.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Fe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Ie(r, e, i));
			} catch {}
		}
	}
}, U = /* @__PURE__ */ new Map(), Be = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
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
}), Ve = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = U.get(t);
	i || (i = /* @__PURE__ */ new Map(), U.set(t, i));
	let a = i.get(r);
	return a || (a = Be(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, He = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, Ve(t)), Ue = /* @__PURE__ */ new WeakMap(), We = 0, Ge = (e) => {
	if (!e) return "base";
	let t = Ue.get(e);
	if (t) return t;
	We += 1;
	let n = `p${We}`;
	return Ue.set(e, n), n;
}, Ke = 256, W = /* @__PURE__ */ new WeakMap(), qe = (e) => typeof e == "object" && !!e, Je = (e, t, n) => `${e}_${t}_${Ge(n)}`, Ye = (e, t) => {
	if (!qe(e)) return { hit: !1 };
	let n = W.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, G = (e, t, n) => {
	if (!qe(e)) return n;
	let r = W.get(e);
	return r || (r = /* @__PURE__ */ new Map(), W.set(e, r)), r.size >= Ke && r.clear(), r.set(t, n), n;
}, Xe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), K = "\x1B[0m", Ze = "\x1B[34m", Qe = "\x1B[31m", $e = "\x1B[32m", et = "\x1B[38;5;3m", tt = (e) => e, nt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = tt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, rt = (e, t) => (n, r) => nt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), q = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? K : n : K}` : e, it = (e, t = et, n = K) => [e].flat().map((e) => q(e, t, n)).join(", ");
q("✗", Qe), q("✓", $e), q("⏲", Ze);
var at = () => ({}), ot = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), st = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ot.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : st(e ? `${e}.${String(n)}` : String(n)) }), ct = /* @__PURE__ */ new Set(), lt = (e, t, n) => {
	let r = at()[e];
	return r ? At(r, t, n) : (ct.has(e) || (rt({ log: ye })(typeof window > "u" ? `Dictionary ${it(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), ct.add(e)), st(e));
}, ut = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, dt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !ut(e) || !ut(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? dt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ft = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => dt(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, pt = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[S] : e[ae];
}, mt = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? S : ae;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, ht = (e, t, n, r, i) => {
	let a = mt(e, Xe(pt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, gt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, _t = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ft(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: v,
				key: e
			}]
		});
	}
}, vt = Y, yt = (e) => Y, bt = Y, xt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => ht(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Xe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return wt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, St = [
	y,
	ne,
	b,
	C,
	w
], Ct = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !St.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && gt(i) ? i(n) : i;
	};
}, wt = (e, t) => typeof t == "function" && St.includes(e?.nodeType ?? "") ? (n) => Ct(e, t, n) : t, Tt = Y, Et = Y, Dt = (e) => Y, X = Y, Ot = (e, t = !0) => [
	_t(e ?? N.defaultLocale, t ? N.defaultLocale : void 0),
	vt,
	yt(e ?? N.defaultLocale),
	bt,
	xt,
	Dt(e ?? N.defaultLocale),
	X,
	Tt,
	Et
].filter((e) => e !== Y), kt = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), At = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Je(r ?? N.defaultLocale, "", n), o = Ye(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ot(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Z.has(e)
		};
		Z.add(e);
		try {
			return kt(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? G(e, a, null) : Array.isArray(c) ? G(e, a, c.map(l)) : G(e, a, l(c));
}, jt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Mt = /\{\{\s*(.*?)\s*\}\}/g, Nt = (e, t = {}) => {
	if (!Object.values(t).some(jt)) return {
		isSimple: !0,
		parts: e.replace(Mt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Mt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Pt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => He({
		value: t.children,
		children: t.children
	})
}, Ft = Y, It = (t, r) => {
	let i = Nt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Lt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => ht(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = It(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return wt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Rt = Y, zt = Y, Q = /* @__PURE__ */ new Map(), Bt = (e, t = !0) => {
	let n = `${e ?? N.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		Pt,
		_t(e ?? N.defaultLocale, t ? N.defaultLocale : void 0),
		vt,
		yt(e ?? N.defaultLocale),
		bt,
		Dt(e ?? N.defaultLocale),
		X,
		Tt,
		Et,
		Ft,
		Lt,
		Rt,
		zt
	].filter((e) => e !== Y);
	return Q.set(n, r), r;
}, Vt = (e, t) => At(e, t, Bt(typeof t == "object" && t ? t.locale : t)), Ht = Re, Ut = (e, t) => ze(e, {
	...z,
	isCookieEnabled: t
}), Wt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Gt = (e, t = N?.locales, n = N?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, Kt = t({
	get locale() {
		return Ht() ?? N?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), qt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: ee } = N ?? {}, [p, m] = c(() => e ?? Ht() ?? t ?? ee), [h, g] = c(e);
	e !== h && (g(e), e && e !== p && m(e)), o(() => {
		Wt();
	}, []);
	let te = i((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Ut(e, d);
		}
	}, [
		p,
		f,
		d
	]), _ = a ?? te, v = Gt(p), y = s(() => ({
		locale: v,
		setLocale: _,
		variant: n,
		disableEditor: l
	}), [
		v,
		_,
		n,
		l
	]);
	return u(Kt.Provider, {
		value: y,
		children: r
	});
}, Jt = ({ children: e, ...t }) => d(qt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: Yt, locales: $ } = N ?? {}, Xt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Kt) ?? {};
	return {
		locale: n,
		defaultLocale: Yt,
		availableLocales: $,
		setLocale: i((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Ut(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			r,
			e
		])
	};
}, Zt = (e, t) => {
	let n = new Pe({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, Qt = (...e) => {
	let { locale: t } = Xt(), n = e.map((e) => e.key).join("\0");
	return s(() => Zt(t, Object.fromEntries(e.map((e) => [e.key, Vt(e, t)]))), [t, n]);
}, $t = () => {
	try {
		return Object.keys(at());
	} catch {
		return [];
	}
}, en = (e, t) => {
	let n = $t(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return lt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = g(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = g(a(t), e);
		if (n !== void 0) return n;
	}
}, tn = (e) => {
	let t = {};
	for (let n of $t()) try {
		Object.assign(t, h(lt(n, e)));
	} catch {}
	return t;
}, nn = () => ({
	lookup: en,
	all: tn
}), rn = (e) => new Pe({
	...e,
	registry: nn()
});
rn({ locale: "en" });
var an = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = c(() => r(e)), [s, l] = c(e.locale);
	return o(() => (a(r(e)), l(e.locale), e.on("change", () => {
		a(r(e)), l(e.locale);
	})), [e]), u(ee.Provider, {
		value: i,
		children: u(Jt, {
			locale: s,
			children: n
		})
	});
};
function on() {
	let { i18n: e } = Qt(f), t = [
		{
			title: e._("blog-list.comparingI18nLibrariesIn2026"),
			date: "March 15, 2026",
			excerpt: e._("blog-list.weTested12DifferentInternationalization"),
			category: "Benchmark"
		},
		{
			title: e._("blog-list.howToReduceYourI18n"),
			date: e._("blog-list.march82026"),
			excerpt: e._("blog-list.practicalStrategiesForOptimizingTranslation"),
			category: "Tutorial"
		},
		{
			title: e._("blog-list.theStateOfInternationalizationIn"),
			date: e._("blog-list.february282026"),
			excerpt: e._("blog-list.anOverviewOfTheCurrent"),
			category: "Analysis"
		},
		{
			title: e._("blog-list.migratingFromReactI18nextTo"),
			date: e._("blog-list.february152026"),
			excerpt: e._("blog-list.aStepByStepGuide"),
			category: "Tutorial"
		},
		{
			title: e._("blog-list.serverComponentsAndI18nWhat"),
			date: e._("blog-list.february12026"),
			excerpt: e._("blog-list.reactServerComponentsIntroduceNew"),
			category: "Analysis"
		},
		{
			title: e._("blog-list.benchmarkMethodologyHowWeTest"),
			date: e._("blog-list.january202026"),
			excerpt: e._("blog-list.aTransparentLookAtOur"),
			category: "Meta"
		}
	];
	return u("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: t.map((t) => d("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				d("div", {
					className: "mb-3 flex items-center gap-3",
					children: [u("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: t.category
					}), u("span", {
						className: "text-xs text-muted-foreground",
						children: t.date
					})]
				}),
				u("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: t.title
				}),
				u("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: t.excerpt
				}),
				u("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: e._("blog-list.readMore")
				})
			]
		}, t.title))
	});
}
function sn(e, t) {
	let n = rn();
	return n.activate(e), n;
}
function cn({ children: e }) {
	let t = s(() => sn("en"), []);
	return u(an, {
		i18n: t,
		children: e
	});
}
function ln() {
	return u(cn, { children: u(on, {}) });
}
export { ln as default };

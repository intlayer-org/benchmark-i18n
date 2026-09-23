import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as p, toDisplayString as m, toValue as h, watch as g } from "vue";
var _ = {
	key: "blog-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"b\":\"Read More →\",\"a\":[{\"title\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"date\":\"March 15, 2026\",\"excerpt\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"category\":\"Benchmark\"},{\"title\":\"How to Reduce Your i18n Bundle by 60%\",\"date\":\"March 8, 2026\",\"excerpt\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"category\":\"Tutorial\"},{\"title\":\"The State of Internationalization in React\",\"date\":\"February 28, 2026\",\"excerpt\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"category\":\"Analysis\"},{\"title\":\"Migrating from react-i18next to Lingui\",\"date\":\"February 15, 2026\",\"excerpt\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components and i18n: What Changes?\",\"date\":\"February 1, 2026\",\"excerpt\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"category\":\"Analysis\"},{\"title\":\"Benchmark Methodology: How We Test\",\"date\":\"January 20, 2026\",\"excerpt\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"category\":\"Meta\"}]},\"fr\":{\"b\":\"Lire la suite →\",\"a\":[{\"title\":\"Comparer les bibliothèques i18n en 2026 : plongée détaillée\",\"date\":\"15 mars 2026\",\"excerpt\":\"Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\",\"category\":\"Benchmark\"},{\"title\":\"Réduire votre bundle i18n de 60 %\",\"date\":\"8 mars 2026\",\"excerpt\":\"Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\",\"category\":\"Tutoriel\"},{\"title\":\"État de l'internationalisation dans l'écosystème React\",\"date\":\"28 février 2026\",\"excerpt\":\"Panorama des tendances, patterns émergents et préférences de la communauté.\",\"category\":\"Analyse\"},{\"title\":\"Migrer de react-i18next vers Lingui\",\"date\":\"15 février 2026\",\"excerpt\":\"Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\",\"category\":\"Tutoriel\"},{\"title\":\"Server Components et i18n : qu'est-ce qui change ?\",\"date\":\"1er février 2026\",\"excerpt\":\"Les React Server Components introduisent de nouveaux motifs pour l'i18n.\",\"category\":\"Analyse\"},{\"title\":\"Méthodologie de benchmark : comment nous testons\",\"date\":\"20 janvier 2026\",\"excerpt\":\"Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\",\"category\":\"Méta\"}]},\"es\":{\"b\":\"Leer más →\",\"a\":[{\"title\":\"Comparación de bibliotecas i18n en 2026: un análisis profundo\",\"date\":\"15 de marzo de 2026\",\"excerpt\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los resultados sorprendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Cómo reducir su paquete i18n en un 60%\",\"date\":\"8 de marzo de 2026\",\"excerpt\":\"Estrategias prácticas para optimizar los paquetes de traducción, incluyendo carga perezosa, división de código y optimizaciones en tiempo de compilación.\",\"category\":\"Tutorial\"},{\"title\":\"El estado de la internacionalización en React\",\"date\":\"28 de febrero de 2026\",\"excerpt\":\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"category\":\"Análisis\"},{\"title\":\"Migración de react-i18next a Lingui\",\"date\":\"15 de febrero de 2026\",\"excerpt\":\"Una guía paso a paso sobre cómo migrar una aplicación de producción con 50,000 claves de traducción de react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: ¿Qué cambia?\",\"date\":\"1 de febrero de 2026\",\"excerpt\":\"React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"category\":\"Análisis\"},{\"title\":\"Metodología de benchmark: cómo probamos\",\"date\":\"20 de enero de 2026\",\"excerpt\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"category\":\"Meta\"}]},\"de\":{\"b\":\"Weiterlesen →\",\"a\":[{\"title\":\"Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\",\"date\":\"15. März 2026\",\"excerpt\":\"Wir haben 12 verschiedene Internationalisierungsbibliotheken auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"category\":\"Benchmark\"},{\"title\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"date\":\"8. März 2026\",\"excerpt\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.\",\"category\":\"Tutorial\"},{\"title\":\"Der Stand der Internationalisierung in React\",\"date\":\"28. Februar 2026\",\"excerpt\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"category\":\"Analyse\"},{\"title\":\"Migration von react-i18next zu Lingui\",\"date\":\"15. Februar 2026\",\"excerpt\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components und i18n: Was ändert sich?\",\"date\":\"1. Februar 2026\",\"excerpt\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"category\":\"Analyse\"},{\"title\":\"Benchmark-Methodik: Wie wir testen\",\"date\":\"20. Januar 2026\",\"excerpt\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"category\":\"Meta\"}]},\"it\":{\"b\":\"Leggi di più →\",\"a\":[{\"title\":\"Confronto tra librerie i18n nel 2026: un approfondimento\",\"date\":\"15 marzo 2026\",\"excerpt\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"category\":\"Benchmark\"},{\"title\":\"Come ridurre il bundle i18n del 60%\",\"date\":\"8 marzo 2026\",\"excerpt\":\"Strategie pratiche per l'ottimizzazione dei bundle di traduzione, tra cui lazy loading, code splitting e ottimizzazioni al tempo di compilazione.\",\"category\":\"Tutorial\"},{\"title\":\"Lo stato dell'internazionalizzazione in React\",\"date\":\"28 febbraio 2026\",\"excerpt\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"category\":\"Analisi\"},{\"title\":\"Migrazione da react-i18next a Lingui\",\"date\":\"15 febbraio 2026\",\"excerpt\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: cosa cambia?\",\"date\":\"1 febbraio 2026\",\"excerpt\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"category\":\"Analisi\"},{\"title\":\"Metodologia di benchmark: come testiamo\",\"date\":\"20 gennaio 2026\",\"excerpt\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.\",\"category\":\"Meta\"}]},\"pt\":{\"b\":\"Leia Mais →\",\"a\":[{\"title\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"date\":\"15 de março de 2026\",\"excerpt\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Como reduzir seu bundle i18n em 60%\",\"date\":\"8 de março de 2026\",\"excerpt\":\"Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.\",\"category\":\"Tutorial\"},{\"title\":\"O estado da internacionalização no React\",\"date\":\"28 de fevereiro de 2026\",\"excerpt\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"category\":\"Análise\"},{\"title\":\"Migrando do react-i18next para o Lingui\",\"date\":\"15 de fevereiro de 2026\",\"excerpt\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: O que muda?\",\"date\":\"1 de fevereiro de 2026\",\"excerpt\":\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"category\":\"Análise\"},{\"title\":\"Metodologia de Benchmark: Como testamos\",\"date\":\"20 de janeiro de 2026\",\"excerpt\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"category\":\"Meta\"}]},\"zh\":{\"b\":\"阅读更多 →\",\"a\":[{\"title\":\"2026 年 i18n 库比较：深度研究\",\"date\":\"2026年3月15日\",\"excerpt\":\"我们测试了 12 种不同的国际化库，涉及性能、捆绑包大小和 DX。以下是令人惊讶的结果。\",\"category\":\"基准测试\"},{\"title\":\"如何将 i18n 捆绑包减少 60%\",\"date\":\"2026年3月8日\",\"excerpt\":\"优化翻译捆绑包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"category\":\"教程\"},{\"title\":\"React 中的国际化现状\",\"date\":\"2026年2月28日\",\"excerpt\":\"React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\",\"category\":\"分析\"},{\"title\":\"从 react-i18next 迁移到 Lingui\",\"date\":\"2026年2月15日\",\"excerpt\":\"关于将具有 50,000 个翻译键的生产应用程序从 react-i18next 迁移到 Lingui 的分步指南。\",\"category\":\"教程\"},{\"title\":\"Server Components 和 i18n：有哪些变化？\",\"date\":\"2026年2月1日\",\"excerpt\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"category\":\"分析\"},{\"title\":\"基准测试方法：我们如何测试\",\"date\":\"2026年1月20日\",\"excerpt\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。\",\"category\":\"元\"}]},\"ja\":{\"b\":\"続きを読む →\",\"a\":[{\"title\":\"2026年のi18nライブラリ比較：詳細な分析\",\"date\":\"2026年3月15日\",\"excerpt\":\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果はこちらです。\",\"category\":\"ベンチマーク\"},{\"title\":\"i18nバンドルを60%削減する方法\",\"date\":\"2026年3月8日\",\"excerpt\":\"遅延読み込み、コード分割、コンパイル時の最適化など、翻訳バンドルを最適化するための実践的な戦略。\",\"category\":\"チュートリアル\"},{\"title\":\"Reactにおける国際化の現状\",\"date\":\"2026年2月28日\",\"excerpt\":\"Reactにおける現在のi18nエコシステムの概要。トレンド、新しいパターン、コミュニティの好みを網羅しています。\",\"category\":\"分析\"},{\"title\":\"react-i18nextからLinguiへの移行\",\"date\":\"2026年2月15日\",\"excerpt\":\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"category\":\"チュートリアル\"},{\"title\":\"サーバーコンポーネントとi18n：何が変わるのか？\",\"date\":\"2026年2月1日\",\"excerpt\":\"Reactサーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"category\":\"分析\"},{\"title\":\"ベンチマーク方法：テスト方法\",\"date\":\"2026年1月20日\",\"excerpt\":\"テスト環境、統計手法、再現性など、ベンチマーク手法を透明に公開します。\",\"category\":\"メタ\"}]},\"ko\":{\"b\":\"자세히 보기 →\",\"a\":[{\"title\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"date\":\"2026년 3월 15일\",\"excerpt\":\"성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과는 다음과 같습니다.\",\"category\":\"벤치마크\"},{\"title\":\"i18n 번들을 60% 줄이는 방법\",\"date\":\"2026년 3월 8일\",\"excerpt\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"React의 국제화 현황\",\"date\":\"2026년 2월 28일\",\"excerpt\":\"트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 에코시스템에 대한 개요입니다.\",\"category\":\"분석\"},{\"title\":\"react-i18next에서 Lingui로 마이그레이션\",\"date\":\"2026년 2월 15일\",\"excerpt\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"서버 컴포넌트와 i18n: 무엇이 달라지나요?\",\"date\":\"2026년 2월 1일\",\"excerpt\":\"React 서버 컴포넌트는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.\",\"category\":\"분석\"},{\"title\":\"벤치마크 방법론: 테스트 방법\",\"date\":\"2026년 1월 20일\",\"excerpt\":\"테스트 환경, 통계 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰입니다.\",\"category\":\"메타\"}]},\"ru\":{\"b\":\"Читать далее →\",\"a\":[{\"title\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"date\":\"15 марта 2026 г.\",\"excerpt\":\"Мы протестировали 12 различных библиотек интернационализации на производительность, размер бандла и DX. Вот удивительные результаты.\",\"category\":\"Бенчмарк\"},{\"title\":\"Как уменьшить бандл i18n на 60%\",\"date\":\"8 марта 2026 г.\",\"excerpt\":\"Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время компиляции.\",\"category\":\"Руководство\"},{\"title\":\"Состояние интернационализации в React\",\"date\":\"28 февраля 2026 г.\",\"excerpt\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\",\"category\":\"Анализ\"},{\"title\":\"Миграция с react-i18next на Lingui\",\"date\":\"15 февраля 2026 г.\",\"excerpt\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\",\"category\":\"Руководство\"},{\"title\":\"Server Components и i18n: что меняется?\",\"date\":\"1 февраля 2026 г.\",\"excerpt\":\"React Server Components внедряют новые паттерны для интернационализации. Мы изучаем последствия и лучшие практики.\",\"category\":\"Анализ\"},{\"title\":\"Методология бенчмарка: как мы тестируем\",\"date\":\"20 января 2026 г.\",\"excerpt\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"category\":\"Мета\"}]}}}")
}, v = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return v({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), l(o);
}, y = "translation", b = "object", x = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: x,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: b,
					key: r
				}]
			}, i = S(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, C = {
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
}, w = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, T = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (w(e) && w(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : T(e[r], t[r]));
		return n;
	}
	return e;
}, E = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => T(e, t));
}, D = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, O = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? D : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: y,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return E(o, e, t);
	}
}, k = D, A = D, ee = D, j = D, M = (e) => D, N = D, P = (e, t = !0) => [
	O(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	k,
	A,
	ee,
	M(e ?? C.defaultLocale),
	N,
	j
], F = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), I = (e, t, n = P(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return F(e.content, r, n);
}, L = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => v({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return l(a);
	}
}, R = D, z = D, B = D, V = /* @__PURE__ */ new Map(), H = (e, t = !0) => {
	let n = `${e ?? C.defaultLocale}_${t}`;
	if (V.has(n)) return V.get(n);
	let r = [
		O(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
		k,
		A,
		M(e ?? C.defaultLocale),
		N,
		j,
		L,
		R,
		z,
		B
	];
	return V.set(n, r), r;
}, U = (e, t) => I(e, t, H(t)), W = Symbol("intlayer"), G = (e, t) => t.reduce((e, t) => e?.[t], e), K = (e) => typeof e == "object" && !!e, q = (e) => typeof e == "function" || K(e) && ("render" in e || "setup" in e), J = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Y = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : q(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), X = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Y(() => e.value);
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
}), Z = (e, n) => {
	let r = a() ? s(W) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? C.defaultLocale), o = t(() => (n === void 0 ? void 0 : h(n)) ?? i.value), l = p({});
	g([() => h(e), () => o.value], ([e, t]) => {
		l.value = U(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => G(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Y(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = G(l.value, o);
			if (s === void 0 || K(s) && !q(s)) return u(o);
			if (J(s)) return X(t(() => G(l.value, o)));
			let c = t(() => G(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = G(l.value, e);
			return K(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, Q = i({
	__name: "BlogList",
	setup(e, { expose: t }) {
		t();
		let { b: n, a: r } = Z(_), i = {
			readMore: n,
			posts: r
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), te = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ne = { class: "grid gap-6 md:grid-cols-2" }, re = { class: "mb-3 flex items-center gap-3" }, ie = { class: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground" }, ae = { class: "text-xs text-muted-foreground" }, oe = { class: "mb-2 text-lg font-semibold text-foreground" }, $ = { class: "mb-4 text-sm text-muted-foreground" }, se = {
	type: "button",
	class: "text-sm font-medium text-primary hover:underline"
};
function ce(t, i, a, o, s, c) {
	return u(), n("div", ne, [(u(!0), n(e, null, f(o.posts, (e) => (u(), n("article", {
		key: e.title,
		class: "rounded-lg border border-border bg-card p-6"
	}, [
		r("div", re, [r("span", ie, m(e.category), 1), r("span", ae, m(e.date), 1)]),
		r("h2", oe, m(e.title), 1),
		r("p", $, m(e.excerpt), 1),
		r("button", se, m(o.readMore), 1)
	]))), 128))]);
}
var le = te(Q, [["render", ce], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/src/components/pages/blog/BlogList.vue"]]);
export { le as default };

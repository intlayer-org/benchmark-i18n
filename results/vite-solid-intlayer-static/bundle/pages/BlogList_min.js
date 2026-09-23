import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r, createContext as i, createMemo as a, lazy as o, useContext as s } from "solid-js";
var c = {
	key: "blog-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"g\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"m\":\"March 15, 2026\",\"w\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"e\":\"Benchmark\",\"k\":\"How to Reduce Your i18n Bundle by 60%\",\"n\":\"March 8, 2026\",\"q\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"v\":\"Tutorial\",\"u\":\"The State of Internationalization in React\",\"j\":\"February 28, 2026\",\"c\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"d\":\"Analysis\",\"p\":\"Migrating from react-i18next to Lingui\",\"i\":\"February 15, 2026\",\"a\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"t\":\"Server Components and i18n: What Changes?\",\"h\":\"February 1, 2026\",\"r\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"f\":\"Benchmark Methodology: How We Test\",\"l\":\"January 20, 2026\",\"b\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"o\":\"Meta\",\"s\":\"Read More →\"},\"fr\":{\"g\":\"Comparaison des bibliothèques i18n en 2026 : une analyse approfondie\",\"m\":\"15 mars 2026\",\"w\":\"Nous avons testé 12 bibliothèques d’internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.\",\"e\":\"Benchmark\",\"k\":\"Comment réduire votre bundle i18n de 60 %\",\"n\":\"8 mars 2026\",\"q\":\"Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.\",\"v\":\"Tutoriel\",\"u\":\"L'état de l'internationalisation dans React\",\"j\":\"28 février 2026\",\"c\":\"Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.\",\"d\":\"Analyse\",\"p\":\"Migration de react-i18next vers Lingui\",\"i\":\"15 février 2026\",\"a\":\"Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.\",\"t\":\"Composants serveur et i18n : qu’est-ce qui change ?\",\"h\":\"1er février 2026\",\"r\":\"Les composants serveur React introduisent de nouveaux modèles d'internationalisation. Nous explorons les implications et les meilleures pratiques.\",\"f\":\"Méthodologie du benchmark : comment nous testons\",\"l\":\"20 janvier 2026\",\"b\":\"Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.\",\"o\":\"Méta\",\"s\":\"Lire la suite →\"},\"es\":{\"g\":\"Comparación de bibliotecas i18n en 2026: una inmersión profunda\",\"m\":\"15 de marzo de 2026\",\"w\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los resultados sorprendentes.\",\"e\":\"Benchmark\",\"k\":\"Cómo reducir su paquete i18n en un 60%\",\"n\":\"8 de marzo de 2026\",\"q\":\"Estrategias prácticas para optimizar los paquetes de traducción, incluida la carga diferida, la división de código y las optimizaciones en tiempo de compilación.\",\"v\":\"Tutorial\",\"u\":\"El estado de la internacionalización en React\",\"j\":\"28 de febrero de 2026\",\"c\":\"Una descripción general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"d\":\"Análisis\",\"p\":\"Migración de react-i18next a Lingui\",\"i\":\"15 de febrero de 2026\",\"a\":\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\",\"t\":\"Componentes del servidor e i18n: ¿qué cambia?\",\"h\":\"1 de febrero de 2026\",\"r\":\"React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"f\":\"Metodología de benchmark: cómo probamos\",\"l\":\"20 de enero de 2026\",\"b\":\"Una mirada transparente a nuestra metodología de benchmarking, incluidos los entornos de prueba, los métodos estadísticos y la reproducibilidad.\",\"o\":\"Meta\",\"s\":\"Leer más →\"},\"de\":{\"g\":\"I18n-Bibliotheken im Jahr 2026 im Vergleich: Ein tiefer Einblick\",\"m\":\"15. März 2026\",\"w\":\"Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"e\":\"Benchmark\",\"k\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"n\":\"8. März 2026\",\"q\":\"Praktische Strategien zur Optimierung von Übersetzungsbundles, einschließlich Lazy Loading, Code-Splitting und Optimierungen zur Kompilierzeit.\",\"v\":\"Tutorial\",\"u\":\"Der Stand der Internationalisierung in React\",\"j\":\"28. Februar 2026\",\"c\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"d\":\"Analyse\",\"p\":\"Migration von react-i18next zu Lingui\",\"i\":\"15. Februar 2026\",\"a\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"t\":\"Serverkomponenten und i18n: Was ändert sich?\",\"h\":\"1. Februar 2026\",\"r\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"f\":\"Benchmark-Methodik: Wie wir testen\",\"l\":\"20. Januar 2026\",\"b\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"o\":\"Meta\",\"s\":\"Mehr lesen →\"},\"it\":{\"g\":\"Confronto tra librerie i18n nel 2026: un'analisi approfondita\",\"m\":\"15 marzo 2026\",\"w\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"e\":\"Benchmark\",\"k\":\"Come ridurre il bundle i18n del 60%\",\"n\":\"8 marzo 2026\",\"q\":\"Strategie pratiche per l'ottimizzazione dei bundle di traduzione, inclusi lazy loading, code splitting e ottimizzazioni in fase di compilazione.\",\"v\":\"Tutorial\",\"u\":\"Lo stato dell'internazionalizzazione in React\",\"j\":\"28 febbraio 2026\",\"c\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"d\":\"Analisi\",\"p\":\"Migrazione da react-i18next a Lingui\",\"i\":\"15 febbraio 2026\",\"a\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"t\":\"Server Components e i18n: cosa cambia?\",\"h\":\"1 febbraio 2026\",\"r\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"f\":\"Metodologia del benchmark: come testiamo\",\"l\":\"20 gennaio 2026\",\"b\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.\",\"o\":\"Meta\",\"s\":\"Leggi di più →\"},\"pt\":{\"g\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"m\":\"15 de março de 2026\",\"w\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"e\":\"Benchmark\",\"k\":\"Como reduzir seu bundle i18n em 60%\",\"n\":\"8 de março de 2026\",\"q\":\"Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.\",\"v\":\"Tutorial\",\"u\":\"O estado da internacionalizzazione em React\",\"j\":\"28 de fevereiro de 2026\",\"c\":\"Uma visão geral do atual ecossistema i18n no React, cobrindo tendências, padrões emergenti e preferências da comunidade.\",\"d\":\"Análise\",\"p\":\"Migrando do react-i18next para o Lingui\",\"i\":\"15 de febbraio de 2026\",\"a\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"t\":\"Server Components e i18n: o que muda?\",\"h\":\"1 de fevereiro de 2026\",\"r\":\"Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"f\":\"Metodologia do benchmark: como testamos\",\"l\":\"20 de janeiro de 2026\",\"b\":\"Um olhar transparente em nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilità.\",\"o\":\"Meta\",\"s\":\"Leia Mais →\"},\"zh\":{\"g\":\"2026 年 i18n 库对比：深度剖析\",\"m\":\"2026年3月15日\",\"w\":\"我们对 12 种不同的国际化库进行了性能、捆绑包大小和 DX 方面的测试。以下是令人惊讶的结果。\",\"e\":\"基准测试\",\"k\":\"如何将 i18n 捆绑包减少 60%\",\"n\":\"2026年3月8日\",\"q\":\"优化翻译捆绑包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"v\":\"教程\",\"u\":\"React 国际化现状\",\"j\":\"2026年2月28日\",\"c\":\"React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。\",\"d\":\"分析\",\"p\":\"从 react-i18next 迁移到 Lingui\",\"i\":\"2026年2月15日\",\"a\":\"有关将具有 50,000 个翻译键的生产应用程序从 react-i18next 迁移到 Lingui 的分步指南。\",\"t\":\"服务器组件和 i18n：有哪些变化？\",\"h\":\"2026年2月1日\",\"r\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"f\":\"基准测试方法论：我们如何测试\",\"l\":\"2026年1月20日\",\"b\":\"透明地了解我们的基准测试方法论，包括测试环境、统计方法和可复现性。\",\"o\":\"元\",\"s\":\"阅读更多 →\"},\"ja\":{\"g\":\"2026年のi18nライブラリの比較：ディープダイブ\",\"m\":\"2026年3月15日\",\"w\":\"パフォーマンス、バンドルサイズ、およびDXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\",\"e\":\"ベンチマーク\",\"k\":\"i18nバンドルを60％削減する方法\",\"n\":\"2026年3月8日\",\"q\":\"遅延ロード、コード分割、コンパイル時最適化など、翻訳バンドルを最適化するための実用的な戦略。\",\"v\":\"チュートリアル\",\"u\":\"Reactにおける国際化の現状\",\"j\":\"2026年2月28日\",\"c\":\"トレンド、新しいパターン、コミュニティの好みをカバーする、Reactの現在のi18nエコシステムの概要。\",\"d\":\"分析\",\"p\":\"react-i18nextからLinguiへの移行\",\"i\":\"2026年2月15日\",\"a\":\"50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"t\":\"サーバーコンポーネントとi18n：何が変わるのか？\",\"h\":\"2026年2月1日\",\"r\":\"Reactサーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"f\":\"ベンチマーク手法：テスト方法\",\"l\":\"2026年1月20日\",\"b\":\"テスト環境、統計手法、再現性など、ベンチマーク手法を透明に公開します。\",\"o\":\"メタ\",\"s\":\"続きを読む →\"},\"ko\":{\"g\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"m\":\"2026년 3월 15일\",\"w\":\"성능, 번들 크기 및 DX 전반에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기에 있습니다.\",\"e\":\"벤치마크\",\"k\":\"i18n 번들을 60% 줄이는 방법\",\"n\":\"2026년 3월 8일\",\"q\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"v\":\"튜토리얼\",\"u\":\"React의 국제화 현황\",\"j\":\"2026년 2월 28일\",\"c\":\"트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계에 대한 개요입니다.\",\"d\":\"분석\",\"p\":\"react-i18next에서 Lingui로 마이그레이션\",\"i\":\"2026년 2월 15일\",\"a\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드입니다.\",\"t\":\"서버 컴포넌트 및 i18n: 무엇이 변합니까?\",\"h\":\"2026년 2월 1일\",\"r\":\"React 서버 컴포넌트는 국제화를 위한 새로운 패턴을 도입합니다. 우리는 그 영향과 모범 사례를 탐구합니다.\",\"f\":\"벤치마크 방법론: 테스트 방법\",\"l\":\"2026년 1월 20일\",\"b\":\"테스트 환경, 통계 방법 및 재현성을 포함한 벤치마킹 방법론을 투명하게 공개합니다.\",\"o\":\"메타\",\"s\":\"더 읽어보기 →\"},\"ru\":{\"g\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"m\":\"15 марта 2026 г.\",\"w\":\"Мы протестировали 12 различных библиотек интернационализации на предмет производительности, размера бандла и DX. Вот удивительные результаты.\",\"e\":\"Бенчмарк\",\"k\":\"Как уменьшить ваш i18n-бандл на 60%\",\"n\":\"8 марта 2026 г.\",\"q\":\"Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время компиляции.\",\"v\":\"Учебное пособие\",\"u\":\"Состояние интернационализации в React\",\"j\":\"28 февраля 2026 г.\",\"c\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\",\"d\":\"Анализ\",\"p\":\"Миграция с react-i18next на Lingui\",\"i\":\"15 февраля 2026 г.\",\"a\":\"Пошаговое руководство по миграции продакшен-приложения с 50 000 ключами перевода с react-i18next на Lingui.\",\"t\":\"Server Components и i18n: что меняется?\",\"h\":\"1 февраля 2026 г.\",\"r\":\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\",\"f\":\"Методология бенчмаркинга: как мы тестируем\",\"l\":\"20 января 2026 г.\",\"b\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"o\":\"Мета\",\"s\":\"Читать далее →\"}}}")
}, l = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, u = (e) => typeof e == "string" && /^\d+$/.test(e), d = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === l.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === l.toString) return () => String(t ?? "");
		if (n === l.valueOf) return () => t;
		if (n === l.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== l.constructor && n !== l.length && !u(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, f = {
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
}, p = {
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
}, m = /* @__PURE__ */ new WeakMap(), h = 0, ee = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, g = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${ee(n)}`, b = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= g && r.clear(), r.set(t, n), n;
}, S = "translation", C = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: C,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? E : typeof e == "string" ? A(e, D) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(j) : [j(e)], te = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ne = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, re = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ie = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, N = (e, t) => {
	if (!re(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : te(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ne(e, n, t, s)).map((t) => ie(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, P = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, F = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (I(e) && I(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : L(e[r], t[r]));
		return n;
	}
	return e;
}, R = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => L(e, t));
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return R(o, e, t);
	}
}, V = z, H = (e) => z, U = z, W = z, G = z, K = z, q = (e) => z, J = z, ae = (e, t = !0) => [
	B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	V,
	U,
	W,
	q(e ?? f.defaultLocale),
	J,
	G,
	K
], oe = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), se = (e, t, n) => {
	let { locale: r, selector: i } = P(t), a = y(r ?? f.defaultLocale, F(i), n), o = b(e, a);
	if (o.hit) return o.content;
	let s = n ?? ae(r), c = N(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return oe(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var ce = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => d({
		...n,
		value: n.children,
		children: n.children
	})
}, le = z, ue = z;
o(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), o(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var de = z;
o(() => X.then((e) => ({ default: e })));
var fe = z, Z = /* @__PURE__ */ new Map(), pe = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		B(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		V,
		H(e ?? f.defaultLocale),
		U,
		q(e ?? f.defaultLocale),
		J,
		G,
		K,
		ce,
		le,
		ue,
		de,
		fe
	];
	return Z.set(n, r), r;
}, me = (e, t) => se(e, t, pe(typeof t == "object" && t ? t.locale : t)), Q = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, he = ((e = $) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Q) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), ge = i({
	locale: () => he ?? f?.defaultLocale,
	setLocale: () => null
}), _e = Symbol("LOADABLE_SETTLED_VALUE"), ve = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[_e];
}, ye = (e, t) => {
	let n = s(ge) ?? {}, r = a(() => {
		let r = n?.locale?.();
		return me(ve(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, be = n("<div class=\"grid gap-6 md:grid-cols-2\">"), xe = n("<article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"></span><span class=\"text-xs text-muted-foreground\"></span></div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"></h2><p class=\"mb-4 text-sm text-muted-foreground\"></p><button type=button class=\"text-sm font-medium text-primary hover:underline\">");
function Se() {
	let n = ye(c), i = [
		{
			title: n().g.value,
			date: n().m.value,
			excerpt: n().w.value,
			category: n().e.value
		},
		{
			title: n().k.value,
			date: n().n.value,
			excerpt: n().q.value,
			category: n().v.value
		},
		{
			title: n().u.value,
			date: n().j.value,
			excerpt: n().c.value,
			category: n().d.value
		},
		{
			title: n().p.value,
			date: n().i.value,
			excerpt: n().a.value,
			category: n().v.value
		},
		{
			title: n().t.value,
			date: n().h.value,
			excerpt: n().r.value,
			category: n().d.value
		},
		{
			title: n().f.value,
			date: n().l.value,
			excerpt: n().b.value,
			category: n().o.value
		}
	];
	return (() => {
		var a = be();
		return t(a, e(r, {
			each: i,
			children: (e) => (() => {
				var r = xe(), i = r.firstChild, a = i.firstChild, o = a.nextSibling, s = i.nextSibling, c = s.nextSibling, l = c.nextSibling;
				return t(a, () => e.category), t(o, () => e.date), t(s, () => e.title), t(c, () => e.excerpt), t(l, () => n().s), r;
			})()
		})), a;
	})();
}
export { Se as default };

import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as h } from "vue";
var g = {
	key: "blog-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"b\":\"Read More →\",\"a\":[{\"title\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"date\":\"March 15, 2026\",\"excerpt\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"category\":\"Benchmark\"},{\"title\":\"How to Reduce Your i18n Bundle by 60%\",\"date\":\"March 8, 2026\",\"excerpt\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"category\":\"Tutorial\"},{\"title\":\"The State of Internationalization in React\",\"date\":\"February 28, 2026\",\"excerpt\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"category\":\"Analysis\"},{\"title\":\"Migrating from react-i18next to Lingui\",\"date\":\"February 15, 2026\",\"excerpt\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components and i18n: What Changes?\",\"date\":\"February 1, 2026\",\"excerpt\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"category\":\"Analysis\"},{\"title\":\"Benchmark Methodology: How We Test\",\"date\":\"January 20, 2026\",\"excerpt\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"category\":\"Meta\"}]},\"fr\":{\"b\":\"Lire la suite →\",\"a\":[{\"title\":\"Comparer les bibliothèques i18n en 2026 : plongée détaillée\",\"date\":\"15 mars 2026\",\"excerpt\":\"Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\",\"category\":\"Benchmark\"},{\"title\":\"Réduire votre bundle i18n de 60 %\",\"date\":\"8 mars 2026\",\"excerpt\":\"Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\",\"category\":\"Tutoriel\"},{\"title\":\"État de l'internationalisation dans l'écosystème React\",\"date\":\"28 février 2026\",\"excerpt\":\"Panorama des tendances, patterns émergents et préférences de la communauté.\",\"category\":\"Analyse\"},{\"title\":\"Migrer de react-i18next vers Lingui\",\"date\":\"15 février 2026\",\"excerpt\":\"Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\",\"category\":\"Tutoriel\"},{\"title\":\"Server Components et i18n : qu'est-ce qui change ?\",\"date\":\"1er février 2026\",\"excerpt\":\"Les React Server Components introduisent de nouveaux motifs pour l'i18n.\",\"category\":\"Analyse\"},{\"title\":\"Méthodologie de benchmark : comment nous testons\",\"date\":\"20 janvier 2026\",\"excerpt\":\"Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\",\"category\":\"Méta\"}]},\"es\":{\"b\":\"Leer más →\",\"a\":[{\"title\":\"Comparación de bibliotecas i18n en 2026: un análisis profundo\",\"date\":\"15 de marzo de 2026\",\"excerpt\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los resultados sorprendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Cómo reducir su paquete i18n en un 60%\",\"date\":\"8 de marzo de 2026\",\"excerpt\":\"Estrategias prácticas para optimizar los paquetes de traducción, incluyendo carga perezosa, división de código y optimizaciones en tiempo de compilación.\",\"category\":\"Tutorial\"},{\"title\":\"El estado de la internacionalización en React\",\"date\":\"28 de febrero de 2026\",\"excerpt\":\"Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.\",\"category\":\"Análisis\"},{\"title\":\"Migración de react-i18next a Lingui\",\"date\":\"15 de febrero de 2026\",\"excerpt\":\"Una guía paso a paso sobre cómo migrar una aplicación de producción con 50,000 claves de traducción de react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: ¿Qué cambia?\",\"date\":\"1 de febrero de 2026\",\"excerpt\":\"React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"category\":\"Análisis\"},{\"title\":\"Metodología de benchmark: cómo probamos\",\"date\":\"20 de enero de 2026\",\"excerpt\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"category\":\"Meta\"}]},\"de\":{\"b\":\"Weiterlesen →\",\"a\":[{\"title\":\"Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\",\"date\":\"15. März 2026\",\"excerpt\":\"Wir haben 12 verschiedene Internationalisierungsbibliotheken auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"category\":\"Benchmark\"},{\"title\":\"So reduzieren Sie Ihr i18n-Bundle um 60 %\",\"date\":\"8. März 2026\",\"excerpt\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Kompilierzeit.\",\"category\":\"Tutorial\"},{\"title\":\"Der Stand der Internationalisierung in React\",\"date\":\"28. Februar 2026\",\"excerpt\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"category\":\"Analyse\"},{\"title\":\"Migration von react-i18next zu Lingui\",\"date\":\"15. Februar 2026\",\"excerpt\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components und i18n: Was ändert sich?\",\"date\":\"1. Februar 2026\",\"excerpt\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"category\":\"Analyse\"},{\"title\":\"Benchmark-Methodik: Wie wir testen\",\"date\":\"20. Januar 2026\",\"excerpt\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"category\":\"Meta\"}]},\"it\":{\"b\":\"Leggi di più →\",\"a\":[{\"title\":\"Confronto tra librerie i18n nel 2026: un approfondimento\",\"date\":\"15 marzo 2026\",\"excerpt\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"category\":\"Benchmark\"},{\"title\":\"Come ridurre il bundle i18n del 60%\",\"date\":\"8 marzo 2026\",\"excerpt\":\"Strategie pratiche per l'ottimizzazione dei bundle di traduzione, tra cui lazy loading, code splitting e ottimizzazioni al tempo di compilazione.\",\"category\":\"Tutorial\"},{\"title\":\"Lo stato dell'internazionalizzazione in React\",\"date\":\"28 febbraio 2026\",\"excerpt\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"category\":\"Analisi\"},{\"title\":\"Migrazione da react-i18next a Lingui\",\"date\":\"15 febbraio 2026\",\"excerpt\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: cosa cambia?\",\"date\":\"1 febbraio 2026\",\"excerpt\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"category\":\"Analisi\"},{\"title\":\"Metodologia di benchmark: come testiamo\",\"date\":\"20 gennaio 2026\",\"excerpt\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.\",\"category\":\"Meta\"}]},\"pt\":{\"b\":\"Leia Mais →\",\"a\":[{\"title\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"date\":\"15 de março de 2026\",\"excerpt\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.\",\"category\":\"Benchmark\"},{\"title\":\"Como reduzir seu bundle i18n em 60%\",\"date\":\"8 de março de 2026\",\"excerpt\":\"Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.\",\"category\":\"Tutorial\"},{\"title\":\"O estado da internacionalização no React\",\"date\":\"28 de fevereiro de 2026\",\"excerpt\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"category\":\"Análise\"},{\"title\":\"Migrando do react-i18next para o Lingui\",\"date\":\"15 de fevereiro de 2026\",\"excerpt\":\"Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"category\":\"Tutorial\"},{\"title\":\"Server Components e i18n: O que muda?\",\"date\":\"1 de fevereiro de 2026\",\"excerpt\":\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.\",\"category\":\"Análise\"},{\"title\":\"Metodologia de Benchmark: Como testamos\",\"date\":\"20 de janeiro de 2026\",\"excerpt\":\"Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"category\":\"Meta\"}]},\"zh\":{\"b\":\"阅读更多 →\",\"a\":[{\"title\":\"2026 年 i18n 库比较：深度研究\",\"date\":\"2026年3月15日\",\"excerpt\":\"我们测试了 12 种不同的国际化库，涉及性能、捆绑包大小和 DX。以下是令人惊讶的结果。\",\"category\":\"基准测试\"},{\"title\":\"如何将 i18n 捆绑包减少 60%\",\"date\":\"2026年3月8日\",\"excerpt\":\"优化翻译捆绑包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"category\":\"教程\"},{\"title\":\"React 中的国际化现状\",\"date\":\"2026年2月28日\",\"excerpt\":\"React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\",\"category\":\"分析\"},{\"title\":\"从 react-i18next 迁移到 Lingui\",\"date\":\"2026年2月15日\",\"excerpt\":\"关于将具有 50,000 个翻译键的生产应用程序从 react-i18next 迁移到 Lingui 的分步指南。\",\"category\":\"教程\"},{\"title\":\"Server Components 和 i18n：有哪些变化？\",\"date\":\"2026年2月1日\",\"excerpt\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"category\":\"分析\"},{\"title\":\"基准测试方法：我们如何测试\",\"date\":\"2026年1月20日\",\"excerpt\":\"透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。\",\"category\":\"元\"}]},\"ja\":{\"b\":\"続きを読む →\",\"a\":[{\"title\":\"2026年のi18nライブラリ比較：詳細な分析\",\"date\":\"2026年3月15日\",\"excerpt\":\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果はこちらです。\",\"category\":\"ベンチマーク\"},{\"title\":\"i18nバンドルを60%削減する方法\",\"date\":\"2026年3月8日\",\"excerpt\":\"遅延読み込み、コード分割、コンパイル時の最適化など、翻訳バンドルを最適化するための実践的な戦略。\",\"category\":\"チュートリアル\"},{\"title\":\"Reactにおける国際化の現状\",\"date\":\"2026年2月28日\",\"excerpt\":\"Reactにおける現在のi18nエコシステムの概要。トレンド、新しいパターン、コミュニティの好みを網羅しています。\",\"category\":\"分析\"},{\"title\":\"react-i18nextからLinguiへの移行\",\"date\":\"2026年2月15日\",\"excerpt\":\"50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"category\":\"チュートリアル\"},{\"title\":\"サーバーコンポーネントとi18n：何が変わるのか？\",\"date\":\"2026年2月1日\",\"excerpt\":\"Reactサーバーコンポーネントは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"category\":\"分析\"},{\"title\":\"ベンチマーク方法：テスト方法\",\"date\":\"2026年1月20日\",\"excerpt\":\"テスト環境、統計手法、再現性など、ベンチマーク手法を透明に公開します。\",\"category\":\"メタ\"}]},\"ko\":{\"b\":\"자세히 보기 →\",\"a\":[{\"title\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"date\":\"2026년 3월 15일\",\"excerpt\":\"성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과는 다음과 같습니다.\",\"category\":\"벤치마크\"},{\"title\":\"i18n 번들을 60% 줄이는 방법\",\"date\":\"2026년 3월 8일\",\"excerpt\":\"지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"React의 국제화 현황\",\"date\":\"2026년 2월 28일\",\"excerpt\":\"트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 에코시스템에 대한 개요입니다.\",\"category\":\"분석\"},{\"title\":\"react-i18next에서 Lingui로 마이그레이션\",\"date\":\"2026년 2월 15일\",\"excerpt\":\"50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드입니다.\",\"category\":\"튜토리얼\"},{\"title\":\"서버 컴포넌트와 i18n: 무엇이 달라지나요?\",\"date\":\"2026년 2월 1일\",\"excerpt\":\"React 서버 컴포넌트는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.\",\"category\":\"분석\"},{\"title\":\"벤치마크 방법론: 테스트 방법\",\"date\":\"2026년 1월 20일\",\"excerpt\":\"테스트 환경, 통계 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰입니다.\",\"category\":\"메타\"}]},\"ru\":{\"b\":\"Читать далее →\",\"a\":[{\"title\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"date\":\"15 марта 2026 г.\",\"excerpt\":\"Мы протестировали 12 различных библиотек интернационализации на производительность, размер бандла и DX. Вот удивительные результаты.\",\"category\":\"Бенчмарк\"},{\"title\":\"Как уменьшить бандл i18n на 60%\",\"date\":\"8 марта 2026 г.\",\"excerpt\":\"Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время компиляции.\",\"category\":\"Руководство\"},{\"title\":\"Состояние интернационализации в React\",\"date\":\"28 февраля 2026 г.\",\"excerpt\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\",\"category\":\"Анализ\"},{\"title\":\"Миграция с react-i18next на Lingui\",\"date\":\"15 февраля 2026 г.\",\"excerpt\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\",\"category\":\"Руководство\"},{\"title\":\"Server Components и i18n: что меняется?\",\"date\":\"1 февраля 2026 г.\",\"excerpt\":\"React Server Components внедряют новые паттерны для интернационализации. Мы изучаем последствия и лучшие практики.\",\"category\":\"Анализ\"},{\"title\":\"Методология бенчмарка: как мы тестируем\",\"date\":\"20 января 2026 г.\",\"excerpt\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"category\":\"Мета\"}]}}}")
}, _ = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
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
			return _({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return l(o);
}, v = /* @__PURE__ */ new WeakMap(), y = 0, te = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ne = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, S = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, w = "translation", T = "object", ie = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ie,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: T,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, oe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, le = (e, t) => {
	if (!se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ae(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => oe(e, n, t, s)).map((t) => ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, de = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", P = {
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
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, L = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: w,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, fe = R, U = R, W = R, G = (e) => R, K = R, pe = (e, t = !0) => [
	z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	B,
	H,
	fe,
	G(e ?? P.defaultLocale),
	K,
	U,
	W
], me = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), he = (e, t, n) => {
	let { locale: r, selector: i } = ue(t), a = re(r ?? P.defaultLocale, de(i), n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? pe(r), c = le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return me(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => _({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
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
}, _e = R, ve = R, ye = R, q = /* @__PURE__ */ new Map(), be = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		B,
		V(e ?? P.defaultLocale),
		H,
		G(e ?? P.defaultLocale),
		K,
		U,
		W,
		ge,
		_e,
		ve,
		ye
	];
	return q.set(n, r), r;
}, J = (e, t) => he(e, t, be(typeof t == "object" && t ? t.locale : t)), xe = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Se = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Ce = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
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
}), we = (e, n) => {
	let r = a() ? s(xe) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? P.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), l = t(() => o.value.locale ?? i.value), u = ee({});
	h([
		() => m(e),
		() => l.value,
		() => o.value.selector
	], ([e, t, n]) => {
		u.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let f = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => Y(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = e.concat(r), s = Y(u.value, o);
			if (s === void 0 || X(s) && !Z(s)) return f(o);
			if (Se(s)) return Ce(t(() => Y(u.value, o)));
			if (typeof s == "function") {
				let t = Y(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => Y(u.value, o)?.(...e);
			}
			let c = t(() => Y(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(u.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return f([]);
}, Te = i({
	__name: "BlogList",
	setup(e, { expose: t }) {
		t();
		let { b: n, a: r } = we(g), i = {
			readMore: n,
			posts: r
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), Ee = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, De = { class: "grid gap-6 md:grid-cols-2" }, Oe = { class: "mb-3 flex items-center gap-3" }, ke = { class: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground" }, Ae = { class: "text-xs text-muted-foreground" }, $ = { class: "mb-2 text-lg font-semibold text-foreground" }, je = { class: "mb-4 text-sm text-muted-foreground" }, Me = {
	type: "button",
	class: "text-sm font-medium text-primary hover:underline"
};
function Ne(t, i, a, o, s, c) {
	return u(), n("div", De, [(u(!0), n(e, null, f(o.posts, (e) => (u(), n("article", {
		key: e.title,
		class: "rounded-lg border border-border bg-card p-6"
	}, [
		r("div", Oe, [r("span", ke, p(e.category), 1), r("span", Ae, p(e.date), 1)]),
		r("h2", $, p(e.title), 1),
		r("p", je, p(e.excerpt), 1),
		r("button", Me, p(o.readMore), 1)
	]))), 128))]);
}
var Pe = Ee(Te, [["render", Ne], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/blog/BlogList.vue"]]);
export { Pe as default };

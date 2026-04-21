import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
var r = {}, i = [
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
], a = "PARAGLIDE_LOCALE", ee = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c, l;
function te(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (c === t) return l;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of s) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return c = t, l = i, i;
}
function u(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var d = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	if (d) {
		let e = d?.getStore()?.locale;
		if (e) return e;
	}
	let e = o;
	typeof window < "u" && window.location?.href && (e = u(window.location.href));
	let t = h(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = y();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (x(t) && b.has(t)) {
			let e = b.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], s = o;
	typeof window < "u" && window.location?.href && (s = u(window.location.href));
	for (let t of s) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (x(t) && b.has(t)) {
		let n = b.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function y() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return v(e);
}
var b = /* @__PURE__ */ new Map();
function x(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var S = () => "Comparing i18n Libraries in 2026: A Deep Dive", C = () => "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie", w = () => "Comparación de bibliotecas i18n en 2026: un análisis profundo", T = () => "i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick", E = () => "Confronto tra librerie i18n nel 2026: un approfondimento", D = () => "Comparando Bibliotecas i18n em 2026: Uma Análise Profunda", O = () => "2026 年 i18n 库对比：深度解析", k = () => "2026年のi18nライブラリ比較：ディープダイブ", A = () => "2026년 i18n 라이브러리 비교: 심층 분석", j = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", M = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? S(e) : n === "fr" ? C(e) : n === "es" ? w(e) : n === "de" ? T(e) : n === "it" ? E(e) : n === "pt" ? D(e) : n === "zh" ? O(e) : n === "ja" ? k(e) : n === "ko" ? A(e) : j(e);
}), N = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", P = () => "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.", F = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.", I = () => "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", L = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", R = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.", z = () => "我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。", B = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", V = () => "저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.", H = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", U = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? N(e) : n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : H(e);
}), W = () => "How to Reduce Your i18n Bundle by 60%", G = () => "Comment réduire votre bundle i18n de 60 %", K = () => "Cómo reducir tu bundle i18n en un 60%", q = () => "So reduzieren Sie Ihr i18n-Bundle um 60 %", J = () => "Come ridurre il bundle i18n del 60%", Y = () => "Como reduzir seu bundle i18n em 60%", X = () => "如何将您的 i18n 包减少 60%", Z = () => "i18nバンドルを60％削減する方法", re = () => "i18n 번들을 60% 줄이는 방법", ie = () => "Как уменьшить бандл i18n на 60%", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "March 8, 2026", se = () => "8 mars 2026", ce = () => "8 de marzo de 2026", le = () => "8. März 2026", ue = () => "8 marzo 2026", de = () => "8 de março de 2026", fe = () => "2026年3月8日", pe = () => "2026年3月8日", me = () => "2026년 3월 8일", he = () => "8 марта 2026 года", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), ge = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", _e = () => "Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.", ve = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", ye = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.", be = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.", xe = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.", Se = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", Ce = () => "遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", we = () => "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.", Te = () => "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ge(e) : n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : Te(e);
}), De = () => "The State of Internationalization in React", Oe = () => "L'état de l'internationalisation dans React", ke = () => "El estado de la internacionalización en React", Ae = () => "Der Stand der Internationalisierung in React", je = () => "Lo stato dell'internazionalizzazione in React", Me = () => "O estado da internacionalização no React", Ne = () => "React 国际化的现状", Pe = () => "Reactにおける国際化の現状", Fe = () => "React 국제화의 현주소", Ie = () => "Состояние интернационализации в React", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? De(e) : n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : Ie(e);
}), Re = () => "February 28, 2026", ze = () => "28 février 2026", Be = () => "28 de febrero de 2026", Ve = () => "28. Februar 2026", He = () => "28 febbraio 2026", Ue = () => "28 de fevereiro de 2026", We = () => "2026年2月28日", Ge = () => "2026年2月28日", Ke = () => "2026년 2월 28일", qe = () => "28 февраля 2026 года", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Re(e) : n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : qe(e);
}), Ye = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Xe = () => "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.", Ze = () => "Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.", Qe = () => "Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.", $e = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", et = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", tt = () => "React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。", nt = () => "トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。", rt = () => "동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.", it = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.", at = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ye(e) : n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : it(e);
}), ot = () => "Migrating from react-i18next to Lingui", st = () => "Migration de react-i18next vers Lingui", ct = () => "Migración de react-i18next a Lingui", lt = () => "Migration von react-i18next zu Lingui", ut = () => "Migrazione da react-i18next a Lingui", dt = () => "Migrando do react-i18next para o Lingui", ft = () => "从 react-i18next 迁移到 Lingui", pt = () => "react-i18nextからLinguiへの移行", mt = () => "react-i18next에서 Lingui로 마이그레이션하기", ht = () => "Миграция с react-i18next на Lingui", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ot(e) : n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : ht(e);
}), _t = () => "February 15, 2026", vt = () => "15 février 2026", yt = () => "15 de febrero de 2026", bt = () => "15. Februar 2026", xt = () => "15 febbraio 2026", St = () => "15 de fevereiro de 2026", Ct = () => "2026年2月15日", wt = () => "2026年2月15日", Tt = () => "2026년 2월 15일", Et = () => "15 февраля 2026 года", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : Et(e);
}), Ot = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", kt = () => "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.", At = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", jt = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", Mt = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", Nt = () => "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", Pt = () => "关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Ft = () => "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", It = () => "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.", Lt = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ot(e) : n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : Lt(e);
}), zt = () => "Server Components and i18n: What Changes?", Bt = () => "Server Components et i18n : Qu'est-ce qui change ?", Vt = () => "Server Components e i18n: ¿qué cambia?", Ht = () => "Server Components und i18n: Was ändert sich?", Ut = () => "Server Components e i18n: cosa cambia?", Wt = () => "Server Components e i18n: o que muda?", Gt = () => "服务器组件与 i18n：有哪些变化？", Kt = () => "Server Componentsとi18n：何が変わるのか？", qt = () => "Server Components 및 i18n: 무엇이 달라지나요?", Jt = () => "Server Components и i18n: что меняется?", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? zt(e) : n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : Jt(e);
}), Xt = () => "February 1, 2026", Zt = () => "1er février 2026", Qt = () => "1 de febrero de 2026", $t = () => "1. Februar 2026", en = () => "1 febbraio 2026", tn = () => "1 de fevereiro de 2026", nn = () => "2026年2月1日", rn = () => "2026年2月1日", an = () => "2026년 1월 1일", on = () => "1 февраля 2026 года", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Xt(e) : n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : on(e);
}), cn = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", ln = () => "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.", un = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", dn = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", fn = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", pn = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.", mn = () => "React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。", hn = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", gn = () => "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.", _n = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? cn(e) : n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : _n(e);
}), yn = () => "Benchmark Methodology: How We Test", bn = () => "Méthodologie du benchmark : comment nous testons", xn = () => "Metodología del benchmark: cómo probamos", Sn = () => "Benchmark-Methodik: Wie wir testen", Cn = () => "Metodologia del benchmark: come testiamo", wn = () => "Metodologia de Benchmark: como testamos", Tn = () => "基准测试方法论：我们如何测试", En = () => "ベンチマーク方法論：私たちのテスト方法", Dn = () => "벤치마크 방법론: 테스트 방법", On = () => "Методология бенчмарка: как мы тестируем", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? yn(e) : n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : On(e);
}), An = () => "January 20, 2026", jn = () => "20 janvier 2026", Mn = () => "20 de enero de 2026", Nn = () => "20. Januar 2026", Pn = () => "20 gennaio 2026", Fn = () => "20 de janeiro de 2026", In = () => "2026年1月20日", Ln = () => "2026年1月20日", Rn = () => "2026년 1월 20일", zn = () => "20 января 2026 года", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? An(e) : n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : zn(e);
}), Vn = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", Hn = () => "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.", Un = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", Wn = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", Gn = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", Kn = () => "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", qn = () => "透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。", $ = () => "テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。", Jn = () => "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.", Yn = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", Xn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Vn(e) : n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? $(e) : n === "ko" ? Jn(e) : Yn(e);
}), Zn = () => "Read More →", Qn = () => "Lire la suite →", $n = () => "Leer más →", er = () => "Weiterlesen →", tr = () => "Leggi di più →", nr = () => "Leia mais →", rr = () => "阅读更多 →", ir = () => "続きを読む →", ar = () => "더 읽어보기 →", or = () => "Читать далее →", sr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Zn(e) : n === "fr" ? Qn(e) : n === "es" ? $n(e) : n === "de" ? er(e) : n === "it" ? tr(e) : n === "pt" ? nr(e) : n === "zh" ? rr(e) : n === "ja" ? ir(e) : n === "ko" ? ar(e) : or(e);
});
function cr() {
	return t("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			{
				title: M(),
				date: Q(),
				excerpt: U(),
				category: "Benchmark"
			},
			{
				title: ae(),
				date: Q(),
				excerpt: Ee(),
				category: "Tutorial"
			},
			{
				title: Le(),
				date: Je(),
				excerpt: at(),
				category: "Analysis"
			},
			{
				title: gt(),
				date: Dt(),
				excerpt: Rt(),
				category: "Tutorial"
			},
			{
				title: Yt(),
				date: sn(),
				excerpt: vn(),
				category: "Analysis"
			},
			{
				title: kn(),
				date: Bn(),
				excerpt: Xn(),
				category: "Meta"
			}
		].map((e) => n("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				n("div", {
					className: "mb-3 flex items-center gap-3",
					children: [t("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: e.category
					}), t("span", {
						className: "text-xs text-muted-foreground",
						children: e.date
					})]
				}),
				t("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e.title
				}),
				t("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: e.excerpt
				}),
				t("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: sr()
				})
			]
		}, e.title))
	});
}
_("en", { reload: !1 });
function lr({ children: n }) {
	return t(e, { children: n });
}
function ur() {
	return t(lr, { children: t(cr, {}) });
}
export { ur as default };

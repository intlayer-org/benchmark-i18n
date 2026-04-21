import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", ee = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f, p;
function te(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function m(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (E(t) && T.has(t)) {
			let e = T.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = u;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (E(t) && T.has(t)) {
		let n = T.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function w() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return C(e);
}
var T = /* @__PURE__ */ new Map();
function E(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var D = () => "Comparing i18n Libraries in 2026: A Deep Dive", O = () => "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie", k = () => "Comparación de bibliotecas i18n en 2026: un análisis profundo", A = () => "i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick", j = () => "Confronto tra librerie i18n nel 2026: un approfondimento", M = () => "Comparando Bibliotecas i18n em 2026: Uma Análise Profunda", N = () => "2026 年 i18n 库对比：深度解析", P = () => "2026年のi18nライブラリ比較：ディープダイブ", F = () => "2026년 i18n 라이브러리 비교: 심층 분석", I = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", L = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? D(e) : n === "fr" ? O(e) : n === "es" ? k(e) : n === "de" ? A(e) : n === "it" ? j(e) : n === "pt" ? M(e) : n === "zh" ? N(e) : n === "ja" ? P(e) : n === "ko" ? F(e) : I(e);
}), R = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", z = () => "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.", B = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.", V = () => "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", H = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", U = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.", W = () => "我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。", G = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", K = () => "저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.", q = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", J = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? R(e) : n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : q(e);
}), Y = () => "How to Reduce Your i18n Bundle by 60%", X = () => "Comment réduire votre bundle i18n de 60 %", Z = () => "Cómo reducir tu bundle i18n en un 60%", re = () => "So reduzieren Sie Ihr i18n-Bundle um 60 %", ie = () => "Come ridurre il bundle i18n del 60%", ae = () => "Como reduzir seu bundle i18n em 60%", oe = () => "如何将您的 i18n 包减少 60%", se = () => "i18nバンドルを60％削減する方法", ce = () => "i18n 번들을 60% 줄이는 방법", le = () => "Как уменьшить бандл i18n на 60%", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Y(e) : n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : le(e);
}), de = () => "March 8, 2026", fe = () => "8 mars 2026", pe = () => "8 de marzo de 2026", me = () => "8. März 2026", he = () => "8 marzo 2026", ge = () => "8 de março de 2026", _e = () => "2026年3月8日", ve = () => "2026年3月8日", ye = () => "2026년 3월 8일", be = () => "8 марта 2026 года", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? de(e) : n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : be(e);
}), xe = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", Se = () => "Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.", Ce = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", we = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.", Te = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.", Ee = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.", De = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", Oe = () => "遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", ke = () => "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.", Ae = () => "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.", je = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? xe(e) : n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : Ae(e);
}), Me = () => "The State of Internationalization in React", Ne = () => "L'état de l'internationalisation dans React", Pe = () => "El estado de la internacionalización en React", Fe = () => "Der Stand der Internationalisierung in React", Ie = () => "Lo stato dell'internazionalizzazione in React", Le = () => "O estado da internacionalização no React", Re = () => "React 国际化的现状", ze = () => "Reactにおける国際化の現状", Be = () => "React 국제화의 현주소", Ve = () => "Состояние интернационализации в React", He = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Me(e) : n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : Ve(e);
}), Ue = () => "February 28, 2026", We = () => "28 février 2026", Ge = () => "28 de febrero de 2026", Ke = () => "28. Februar 2026", qe = () => "28 febbraio 2026", Je = () => "28 de fevereiro de 2026", Ye = () => "2026年2月28日", Xe = () => "2026年2月28日", Ze = () => "2026년 2월 28일", Qe = () => "28 февраля 2026 года", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ue(e) : n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : Qe(e);
}), et = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", tt = () => "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.", nt = () => "Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.", rt = () => "Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.", it = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", at = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", ot = () => "React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。", st = () => "トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。", ct = () => "동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.", lt = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? et(e) : n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : lt(e);
}), dt = () => "Migrating from react-i18next to Lingui", ft = () => "Migration de react-i18next vers Lingui", pt = () => "Migración de react-i18next a Lingui", mt = () => "Migration von react-i18next zu Lingui", ht = () => "Migrazione da react-i18next a Lingui", gt = () => "Migrando do react-i18next para o Lingui", _t = () => "从 react-i18next 迁移到 Lingui", vt = () => "react-i18nextからLinguiへの移行", yt = () => "react-i18next에서 Lingui로 마이그레이션하기", bt = () => "Миграция с react-i18next на Lingui", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? dt(e) : n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : bt(e);
}), St = () => "February 15, 2026", Ct = () => "15 février 2026", wt = () => "15 de febrero de 2026", Tt = () => "15. Februar 2026", Et = () => "15 febbraio 2026", Dt = () => "15 de fevereiro de 2026", Ot = () => "2026年2月15日", kt = () => "2026年2月15日", At = () => "2026년 2월 15일", jt = () => "15 февраля 2026 года", Mt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? St(e) : n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : jt(e);
}), Nt = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Pt = () => "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.", Ft = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", It = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", Lt = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", Rt = () => "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", zt = () => "关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Bt = () => "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", Vt = () => "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.", Ht = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.", Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Nt(e) : n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : Ht(e);
}), Wt = () => "Server Components and i18n: What Changes?", Gt = () => "Server Components et i18n : Qu'est-ce qui change ?", Kt = () => "Server Components e i18n: ¿qué cambia?", qt = () => "Server Components und i18n: Was ändert sich?", Jt = () => "Server Components e i18n: cosa cambia?", Yt = () => "Server Components e i18n: o que muda?", Xt = () => "服务器组件与 i18n：有哪些变化？", Zt = () => "Server Componentsとi18n：何が変わるのか？", Qt = () => "Server Components 및 i18n: 무엇이 달라지나요?", $t = () => "Server Components и i18n: что меняется?", en = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Wt(e) : n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : $t(e);
}), tn = () => "February 1, 2026", nn = () => "1er février 2026", rn = () => "1 de febrero de 2026", an = () => "1. Februar 2026", on = () => "1 febbraio 2026", sn = () => "1 de fevereiro de 2026", cn = () => "2026年2月1日", ln = () => "2026年2月1日", un = () => "2026년 1월 1일", dn = () => "1 февраля 2026 года", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? tn(e) : n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : dn(e);
}), pn = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", mn = () => "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.", hn = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", gn = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", _n = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", vn = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.", yn = () => "React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。", bn = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", xn = () => "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.", Sn = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? pn(e) : n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : Sn(e);
}), wn = () => "Benchmark Methodology: How We Test", Tn = () => "Méthodologie du benchmark : comment nous testons", En = () => "Metodología del benchmark: cómo probamos", Dn = () => "Benchmark-Methodik: Wie wir testen", On = () => "Metodologia del benchmark: come testiamo", kn = () => "Metodologia de Benchmark: como testamos", An = () => "基准测试方法论：我们如何测试", jn = () => "ベンチマーク方法論：私たちのテスト方法", Mn = () => "벤치마크 방법론: 테스트 방법", Nn = () => "Методология бенчмарка: как мы тестируем", Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? wn(e) : n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : Nn(e);
}), Fn = () => "January 20, 2026", In = () => "20 janvier 2026", Ln = () => "20 de enero de 2026", Rn = () => "20. Januar 2026", zn = () => "20 gennaio 2026", Bn = () => "20 de janeiro de 2026", Vn = () => "2026年1月20日", Hn = () => "2026年1月20日", Un = () => "2026년 1월 20일", Wn = () => "20 января 2026 года", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Fn(e) : n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : Wn(e);
}), Kn = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", qn = () => "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.", Jn = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", Yn = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", Xn = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", Zn = () => "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", Qn = () => "透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。", $n = () => "テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。", er = () => "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.", $ = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", tr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Kn(e) : n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : $(e);
}), nr = () => "Read More →", rr = () => "Lire la suite →", ir = () => "Leer más →", ar = () => "Weiterlesen →", or = () => "Leggi di più →", sr = () => "Leia mais →", cr = () => "阅读更多 →", lr = () => "続きを読む →", ur = () => "더 읽어보기 →", dr = () => "Читать далее →", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? nr(e) : n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? cr(e) : n === "ja" ? lr(e) : n === "ko" ? ur(e) : dr(e);
});
function pr() {
	return i("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			{
				title: L(),
				date: Q(),
				excerpt: J(),
				category: "Benchmark"
			},
			{
				title: ue(),
				date: Q(),
				excerpt: je(),
				category: "Tutorial"
			},
			{
				title: He(),
				date: $e(),
				excerpt: ut(),
				category: "Analysis"
			},
			{
				title: xt(),
				date: Mt(),
				excerpt: Ut(),
				category: "Tutorial"
			},
			{
				title: en(),
				date: fn(),
				excerpt: Cn(),
				category: "Analysis"
			},
			{
				title: Pn(),
				date: Gn(),
				excerpt: tr(),
				category: "Meta"
			}
		].map((e) => a("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				a("div", {
					className: "mb-3 flex items-center gap-3",
					children: [i("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: e.category
					}), i("span", {
						className: "text-xs text-muted-foreground",
						children: e.date
					})]
				}),
				i("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e.title
				}),
				i("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: e.excerpt
				}),
				i("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: fr()
				})
			]
		}, e.title))
	});
}
function mr() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function hr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function gr({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		hr("AppRoot", c);
	}, [c]), e(() => {
		S(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		mr();
	}, []), i(r, { children: a });
}
function _r({ children: e }) {
	return i(gr, { children: e });
}
function vr() {
	return i(_r, { children: i(pr, {}) });
}
export { vr as default };

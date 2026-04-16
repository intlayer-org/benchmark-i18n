import { Profiler as e, useEffect as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { useParams as i } from "next/navigation";
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", ee = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function te(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = S();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = c;
	!m && typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return x(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "Comparing i18n Libraries in 2026: A Deep Dive", E = () => "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie", D = () => "Comparación de bibliotecas i18n en 2026: un análisis profundo", O = () => "i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick", k = () => "Confronto tra librerie i18n nel 2026: un approfondimento", A = () => "Comparando Bibliotecas i18n em 2026: Uma Análise Profunda", j = () => "2026 年 i18n 库对比：深度解析", M = () => "2026年のi18nライブラリ比較：ディープダイブ", N = () => "2026년 i18n 라이브러리 비교: 심층 분석", P = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", F = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", L = () => "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.", R = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.", z = () => "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", B = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", V = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.", H = () => "我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。", U = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", W = () => "저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.", G = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", K = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "How to Reduce Your i18n Bundle by 60%", J = () => "Comment réduire votre bundle i18n de 60 %", Y = () => "Cómo reducir tu bundle i18n en un 60%", X = () => "So reduzieren Sie Ihr i18n-Bundle um 60 %", Z = () => "Come ridurre il bundle i18n del 60%", re = () => "Como reduzir seu bundle i18n em 60%", ie = () => "如何将您的 i18n 包减少 60%", ae = () => "i18nバンドルを60％削減する方法", oe = () => "i18n 번들을 60% 줄이는 방법", se = () => "Как уменьшить бандл i18n на 60%", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : se(e);
}), le = () => "March 8, 2026", ue = () => "8 mars 2026", de = () => "8 de marzo de 2026", fe = () => "8. März 2026", pe = () => "8 marzo 2026", me = () => "8 de março de 2026", he = () => "2026年3月8日", ge = () => "2026年3月8日", _e = () => "2026년 3월 8일", ve = () => "8 марта 2026 года", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? le(e) : n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : ve(e);
}), ye = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", be = () => "Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.", xe = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", Se = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.", Ce = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.", we = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.", Te = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", Ee = () => "遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", De = () => "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.", Oe = () => "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : Oe(e);
}), Ae = () => "The State of Internationalization in React", je = () => "L'état de l'internationalisation dans React", Me = () => "El estado de la internacionalización en React", Ne = () => "Der Stand der Internationalisierung in React", Pe = () => "Lo stato dell'internazionalizzazione in React", Fe = () => "O estado da internacionalização no React", Ie = () => "React 国际化的现状", Le = () => "Reactにおける国際化の現状", Re = () => "React 국제화의 현주소", ze = () => "Состояние интернационализации в React", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Ve = () => "February 28, 2026", He = () => "28 février 2026", Ue = () => "28 de febrero de 2026", We = () => "28. Februar 2026", Ge = () => "28 febbraio 2026", Ke = () => "28 de fevereiro de 2026", qe = () => "2026年2月28日", Je = () => "2026年2月28日", Ye = () => "2026년 2월 28일", Xe = () => "28 февраля 2026 года", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ve(e) : n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : Xe(e);
}), Qe = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", $e = () => "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.", et = () => "Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.", tt = () => "Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.", nt = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", rt = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", it = () => "React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。", at = () => "トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。", ot = () => "동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.", st = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Qe(e) : n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : st(e);
}), lt = () => "Migrating from react-i18next to Lingui", ut = () => "Migration de react-i18next vers Lingui", dt = () => "Migración de react-i18next a Lingui", ft = () => "Migration von react-i18next zu Lingui", pt = () => "Migrazione da react-i18next a Lingui", mt = () => "Migrando do react-i18next para o Lingui", ht = () => "从 react-i18next 迁移到 Lingui", gt = () => "react-i18nextからLinguiへの移行", _t = () => "react-i18next에서 Lingui로 마이그레이션하기", vt = () => "Миграция с react-i18next на Lingui", yt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : vt(e);
}), bt = () => "February 15, 2026", xt = () => "15 février 2026", St = () => "15 de febrero de 2026", Ct = () => "15. Februar 2026", wt = () => "15 febbraio 2026", Tt = () => "15 de fevereiro de 2026", Et = () => "2026年2月15日", Dt = () => "2026年2月15日", Ot = () => "2026년 2월 15일", kt = () => "15 февраля 2026 года", At = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? bt(e) : n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : kt(e);
}), jt = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Mt = () => "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.", Nt = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", Pt = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", Ft = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", It = () => "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", Lt = () => "关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Rt = () => "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", zt = () => "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.", Bt = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.", Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? jt(e) : n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? Pt(e) : n === "it" ? Ft(e) : n === "pt" ? It(e) : n === "zh" ? Lt(e) : n === "ja" ? Rt(e) : n === "ko" ? zt(e) : Bt(e);
}), Ht = () => "Server Components and i18n: What Changes?", Ut = () => "Server Components et i18n : Qu'est-ce qui change ?", Wt = () => "Server Components e i18n: ¿qué cambia?", Gt = () => "Server Components und i18n: Was ändert sich?", Kt = () => "Server Components e i18n: cosa cambia?", qt = () => "Server Components e i18n: o que muda?", Jt = () => "服务器组件与 i18n：有哪些变化？", Yt = () => "Server Componentsとi18n：何が変わるのか？", Xt = () => "Server Components 및 i18n: 무엇이 달라지나요?", Zt = () => "Server Components и i18n: что меняется?", Qt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ht(e) : n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? Jt(e) : n === "ja" ? Yt(e) : n === "ko" ? Xt(e) : Zt(e);
}), $t = () => "February 1, 2026", en = () => "1er février 2026", tn = () => "1 de febrero de 2026", nn = () => "1. Februar 2026", rn = () => "1 febbraio 2026", an = () => "1 de fevereiro de 2026", on = () => "2026年2月1日", sn = () => "2026年2月1日", cn = () => "2026년 1월 1일", ln = () => "1 февраля 2026 года", un = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $t(e) : n === "fr" ? en(e) : n === "es" ? tn(e) : n === "de" ? nn(e) : n === "it" ? rn(e) : n === "pt" ? an(e) : n === "zh" ? on(e) : n === "ja" ? sn(e) : n === "ko" ? cn(e) : ln(e);
}), dn = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", fn = () => "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.", pn = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", mn = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", hn = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", gn = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.", _n = () => "React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。", vn = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", yn = () => "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.", bn = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", xn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? dn(e) : n === "fr" ? fn(e) : n === "es" ? pn(e) : n === "de" ? mn(e) : n === "it" ? hn(e) : n === "pt" ? gn(e) : n === "zh" ? _n(e) : n === "ja" ? vn(e) : n === "ko" ? yn(e) : bn(e);
}), Sn = () => "Benchmark Methodology: How We Test", Cn = () => "Méthodologie du benchmark : comment nous testons", wn = () => "Metodología del benchmark: cómo probamos", Tn = () => "Benchmark-Methodik: Wie wir testen", En = () => "Metodologia del benchmark: come testiamo", Dn = () => "Metodologia de Benchmark: como testamos", On = () => "基准测试方法论：我们如何测试", kn = () => "ベンチマーク方法論：私たちのテスト方法", An = () => "벤치마크 방법론: 테스트 방법", jn = () => "Методология бенчмарка: как мы тестируем", Mn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Sn(e) : n === "fr" ? Cn(e) : n === "es" ? wn(e) : n === "de" ? Tn(e) : n === "it" ? En(e) : n === "pt" ? Dn(e) : n === "zh" ? On(e) : n === "ja" ? kn(e) : n === "ko" ? An(e) : jn(e);
}), Nn = () => "January 20, 2026", Pn = () => "20 janvier 2026", Fn = () => "20 de enero de 2026", In = () => "20. Januar 2026", Ln = () => "20 gennaio 2026", Rn = () => "20 de janeiro de 2026", zn = () => "2026年1月20日", Bn = () => "2026年1月20日", Vn = () => "2026년 1월 20일", Hn = () => "20 января 2026 года", Un = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Nn(e) : n === "fr" ? Pn(e) : n === "es" ? Fn(e) : n === "de" ? In(e) : n === "it" ? Ln(e) : n === "pt" ? Rn(e) : n === "zh" ? zn(e) : n === "ja" ? Bn(e) : n === "ko" ? Vn(e) : Hn(e);
}), Wn = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", Gn = () => "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.", Kn = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", qn = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", Jn = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", Yn = () => "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", Xn = () => "透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。", Zn = () => "テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。", Qn = () => "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.", $n = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", er = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Wn(e) : n === "fr" ? Gn(e) : n === "es" ? Kn(e) : n === "de" ? qn(e) : n === "it" ? Jn(e) : n === "pt" ? Yn(e) : n === "zh" ? Xn(e) : n === "ja" ? Zn(e) : n === "ko" ? Qn(e) : $n(e);
}), $ = () => "Read More →", tr = () => "Lire la suite →", nr = () => "Leer más →", rr = () => "Weiterlesen →", ir = () => "Leggi di più →", ar = () => "Leia mais →", or = () => "阅读更多 →", sr = () => "続きを読む →", cr = () => "더 읽어보기 →", lr = () => "Читать далее →", ur = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $(e) : n === "fr" ? tr(e) : n === "es" ? nr(e) : n === "de" ? rr(e) : n === "it" ? ir(e) : n === "pt" ? ar(e) : n === "zh" ? or(e) : n === "ja" ? sr(e) : n === "ko" ? cr(e) : lr(e);
});
function dr() {
	return n("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			{
				title: F(),
				date: Q(),
				excerpt: K(),
				category: "Benchmark"
			},
			{
				title: ce(),
				date: Q(),
				excerpt: ke(),
				category: "Tutorial"
			},
			{
				title: Be(),
				date: Ze(),
				excerpt: ct(),
				category: "Analysis"
			},
			{
				title: yt(),
				date: At(),
				excerpt: Vt(),
				category: "Tutorial"
			},
			{
				title: Qt(),
				date: un(),
				excerpt: xn(),
				category: "Analysis"
			},
			{
				title: Mn(),
				date: Un(),
				excerpt: er(),
				category: "Meta"
			}
		].map((e) => r("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				r("div", {
					className: "mb-3 flex items-center gap-3",
					children: [n("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: e.category
					}), n("span", {
						className: "text-xs text-muted-foreground",
						children: e.date
					})]
				}),
				n("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e.title
				}),
				n("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: e.excerpt
				}),
				n("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: ur()
				})
			]
		}, e.title))
	});
}
function fr() {
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
function pr(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function mr({ children: r }) {
	let a = i().locale ?? "en";
	return t(() => {
		b(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		fr();
	}, []), n(e, {
		id: "AppRoot",
		onRender: pr,
		children: r
	});
}
function hr({ children: e }) {
	return n(mr, { children: e });
}
function gr() {
	return n(hr, { children: n(dr, {}) });
}
export { gr as default };

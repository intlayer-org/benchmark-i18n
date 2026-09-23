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
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = P(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = O();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (I(t) && F.has(t)) {
			let e = F.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
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
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = P(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, E();
	} else if (t === "baseLocale") continue;
	else if (I(t) && F.has(t)) {
		let n = F.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function b(e) {
	return e;
}
function x(e, t) {
	return e.exec(t.href);
}
var S = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), C = RegExp(`(?:^|;\\s*)${S}=([^;]*)`), w = Symbol(), T = w;
function E() {
	T = w;
}
function D() {
	typeof queueMicrotask == "function" ? queueMicrotask(E) : Promise.resolve().then(E);
}
function O() {
	if (typeof document > "u") return;
	if (T !== w) return T;
	let e = document.cookie.match(C)?.[1];
	return T = v(e), D(), T;
}
function k(e) {
	return A(e);
}
function A(e) {
	let t = b(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && v(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), b(t);
}
var j, M;
function N(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (j === t) return M;
	let n = b(new URL(t, "http://example.com")), r = k(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (x(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return j = t, M = a, a;
}
function P(e) {
	let t = N(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var F = /* @__PURE__ */ new Map();
function I(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var L = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", R = () => "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.", z = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", B = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", V = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", H = () => "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", U = () => "关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", W = () => "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", G = () => "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.", K = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.", q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : n === "ru" ? K(e) : L(e);
}), J = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", Y = () => "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.", X = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", Z = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", re = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", ie = () => "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", ae = () => "透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。", oe = () => "テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。", se = () => "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.", ce = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", le = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : J(e);
}), ue = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", de = () => "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.", fe = () => "Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.", pe = () => "Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.", me = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", he = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", ge = () => "React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。", _e = () => "トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。", ve = () => "동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.", ye = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.", be = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
}), xe = () => "Benchmark Methodology: How We Test", Se = () => "Méthodologie du benchmark : comment nous testons", Ce = () => "Metodología del benchmark: cómo probamos", we = () => "Benchmark-Methodik: Wie wir testen", Te = () => "Metodologia del benchmark: come testiamo", Ee = () => "Metodologia de Benchmark: como testamos", De = () => "基准测试方法论：我们如何测试", Oe = () => "ベンチマーク方法論：私たちのテスト方法", ke = () => "벤치마크 방법론: 테스트 방법", Ae = () => "Методология бенчмарка: как мы тестируем", je = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : n === "ru" ? Ae(e) : xe(e);
}), Me = () => "Comparing i18n Libraries in 2026: A Deep Dive", Ne = () => "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie", Pe = () => "Comparación de bibliotecas i18n en 2026: un análisis profundo", Fe = () => "i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick", Ie = () => "Confronto tra librerie i18n nel 2026: un approfondimento", Le = () => "Comparando Bibliotecas i18n em 2026: Uma Análise Profunda", Re = () => "2026 年 i18n 库对比：深度解析", ze = () => "2026年のi18nライブラリ比較：ディープダイブ", Be = () => "2026년 i18n 라이브러리 비교: 심층 분석", Ve = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", He = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : n === "ru" ? Ve(e) : Me(e);
}), Ue = () => "February 1, 2026", We = () => "1er février 2026", Ge = () => "1 de febrero de 2026", Ke = () => "1. Februar 2026", qe = () => "1 febbraio 2026", Je = () => "1 de fevereiro de 2026", Ye = () => "2026年2月1日", Xe = () => "2026年2月1日", Ze = () => "2026년 1월 1일", Qe = () => "1 февраля 2026 года", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : n === "ru" ? Qe(e) : Ue(e);
}), et = () => "February 15, 2026", tt = () => "15 février 2026", nt = () => "15 de febrero de 2026", rt = () => "15. Februar 2026", it = () => "15 febbraio 2026", at = () => "15 de fevereiro de 2026", ot = () => "2026年2月15日", st = () => "2026年2月15日", ct = () => "2026년 2월 15일", lt = () => "15 февраля 2026 года", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : n === "ru" ? lt(e) : et(e);
}), dt = () => "February 28, 2026", ft = () => "28 février 2026", pt = () => "28 de febrero de 2026", mt = () => "28. Februar 2026", ht = () => "28 febbraio 2026", gt = () => "28 de fevereiro de 2026", _t = () => "2026年2月28日", vt = () => "2026年2月28日", yt = () => "2026년 2월 28일", bt = () => "28 февраля 2026 года", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : n === "ru" ? bt(e) : dt(e);
}), St = () => "How to Reduce Your i18n Bundle by 60%", Ct = () => "Comment réduire votre bundle i18n de 60 %", wt = () => "Cómo reducir tu bundle i18n en un 60%", Tt = () => "So reduzieren Sie Ihr i18n-Bundle um 60 %", Et = () => "Come ridurre il bundle i18n del 60%", Dt = () => "Como reduzir seu bundle i18n em 60%", Ot = () => "如何将您的 i18n 包减少 60%", kt = () => "i18nバンドルを60％削減する方法", At = () => "i18n 번들을 60% 줄이는 방법", jt = () => "Как уменьшить бандл i18n на 60%", Mt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : n === "ru" ? jt(e) : St(e);
}), Nt = () => "January 20, 2026", Pt = () => "20 janvier 2026", Ft = () => "20 de enero de 2026", It = () => "20. Januar 2026", Lt = () => "20 gennaio 2026", Rt = () => "20 de janeiro de 2026", zt = () => "2026年1月20日", Bt = () => "2026年1月20日", Vt = () => "2026년 1월 20일", Ht = () => "20 января 2026 года", Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : n === "ru" ? Ht(e) : Nt(e);
}), Wt = () => "March 8, 2026", Gt = () => "8 mars 2026", Kt = () => "8 de marzo de 2026", qt = () => "8. März 2026", Jt = () => "8 marzo 2026", Yt = () => "8 de março de 2026", Xt = () => "2026年3月8日", Zt = () => "2026年3月8日", Qt = () => "2026년 3월 8일", $t = () => "8 марта 2026 года", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : n === "ru" ? $t(e) : Wt(e);
}), en = () => "Migrating from react-i18next to Lingui", tn = () => "Migration de react-i18next vers Lingui", nn = () => "Migración de react-i18next a Lingui", rn = () => "Migration von react-i18next zu Lingui", an = () => "Migrazione da react-i18next a Lingui", on = () => "Migrando do react-i18next para o Lingui", sn = () => "从 react-i18next 迁移到 Lingui", cn = () => "react-i18nextからLinguiへの移行", ln = () => "react-i18next에서 Lingui로 마이그레이션하기", un = () => "Миграция с react-i18next на Lingui", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : n === "ru" ? un(e) : en(e);
}), fn = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", pn = () => "Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.", mn = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", hn = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.", gn = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.", _n = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.", vn = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", yn = () => "遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", bn = () => "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.", xn = () => "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : n === "ru" ? xn(e) : fn(e);
}), Cn = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", wn = () => "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.", Tn = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", En = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", Dn = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", On = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.", kn = () => "React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。", An = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", jn = () => "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.", Mn = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : n === "ru" ? Mn(e) : Cn(e);
}), Pn = () => "Read More →", Fn = () => "Lire la suite →", In = () => "Leer más →", Ln = () => "Weiterlesen →", Rn = () => "Leggi di più →", zn = () => "Leia mais →", Bn = () => "阅读更多 →", Vn = () => "続きを読む →", Hn = () => "더 읽어보기 →", Un = () => "Читать далее →", Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Vn(e) : n === "ko" ? Hn(e) : n === "ru" ? Un(e) : Pn(e);
}), Gn = () => "Server Components and i18n: What Changes?", Kn = () => "Server Components et i18n : Qu'est-ce qui change ?", qn = () => "Server Components e i18n: ¿qué cambia?", Jn = () => "Server Components und i18n: Was ändert sich?", Yn = () => "Server Components e i18n: cosa cambia?", Xn = () => "Server Components e i18n: o que muda?", Zn = () => "服务器组件与 i18n：有哪些变化？", Qn = () => "Server Componentsとi18n：何が変わるのか？", $n = () => "Server Components 및 i18n: 무엇이 달라지나요?", er = () => "Server Components и i18n: что меняется?", tr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Kn(e) : n === "es" ? qn(e) : n === "de" ? Jn(e) : n === "it" ? Yn(e) : n === "pt" ? Xn(e) : n === "zh" ? Zn(e) : n === "ja" ? Qn(e) : n === "ko" ? $n(e) : n === "ru" ? er(e) : Gn(e);
}), nr = () => "The State of Internationalization in React", rr = () => "L'état de l'internationalisation dans React", ir = () => "El estado de la internacionalización en React", ar = () => "Der Stand der Internationalisierung in React", or = () => "Lo stato dell'internazionalizzazione in React", sr = () => "O estado da internacionalização no React", $ = () => "React 国际化的现状", cr = () => "Reactにおける国際化の現状", lr = () => "React 국제화의 현주소", ur = () => "Состояние интернационализации в React", dr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? $(e) : n === "ja" ? cr(e) : n === "ko" ? lr(e) : n === "ru" ? ur(e) : nr(e);
}), fr = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", pr = () => "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.", mr = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.", hr = () => "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", gr = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", _r = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.", vr = () => "我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。", yr = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", br = () => "저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.", xr = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", Sr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? pr(e) : n === "es" ? mr(e) : n === "de" ? hr(e) : n === "it" ? gr(e) : n === "pt" ? _r(e) : n === "zh" ? vr(e) : n === "ja" ? yr(e) : n === "ko" ? br(e) : n === "ru" ? xr(e) : fr(e);
});
function Cr() {
	let e = [
		{
			title: He(),
			date: Q(),
			excerpt: Sr(),
			category: "Benchmark"
		},
		{
			title: Mt(),
			date: Q(),
			excerpt: Sn(),
			category: "Tutorial"
		},
		{
			title: dr(),
			date: xt(),
			excerpt: be(),
			category: "Analysis"
		},
		{
			title: dn(),
			date: ut(),
			excerpt: q(),
			category: "Tutorial"
		},
		{
			title: tr(),
			date: $e(),
			excerpt: Nn(),
			category: "Analysis"
		},
		{
			title: je(),
			date: Ut(),
			excerpt: le(),
			category: "Meta"
		}
	];
	return i("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: e.map((e) => a("article", {
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
					children: Wn()
				})
			]
		}, e.title))
	});
}
function wr() {
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
function Tr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Er({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Tr("AppRoot", c);
	}, [c]), e(() => {
		_(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		wr();
	}, []), i(r, { children: a });
}
function Dr({ children: e }) {
	return i(Er, { children: e });
}
function Or() {
	return i(Dr, { children: i(Cr, {}) });
}
export { Or as default };

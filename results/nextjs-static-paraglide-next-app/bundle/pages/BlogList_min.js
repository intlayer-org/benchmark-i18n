import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsxDEV as i } from "react/jsx-dev-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", ee = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	let e = l;
	!d && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return v(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var h = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], a = l;
	!d && typeof window < "u" && window.location?.href && (a = j(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (N(t) && M.has(t)) {
		let n = M.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!d && n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function ie() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), re(), w;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = y(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var O, k;
function A(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (O === t) return k;
	let n = y(new URL(t, "http://example.com")), r = E(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of u) if (b(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return O = t, k = a, a;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", F = () => "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.", I = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", L = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", R = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", z = () => "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", B = () => "关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", V = () => "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", H = () => "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.", U = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.", W = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : n === "ru" ? U(e) : P(e);
}), G = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", K = () => "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.", q = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", J = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", Y = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", ae = () => "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", oe = () => "透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。", se = () => "テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。", ce = () => "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.", le = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : n === "ru" ? le(e) : G(e);
}), de = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", fe = () => "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.", pe = () => "Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.", me = () => "Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.", he = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", ge = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", _e = () => "React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。", ve = () => "トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。", ye = () => "동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.", be = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : n === "ru" ? be(e) : de(e);
}), Se = () => "Benchmark Methodology: How We Test", Ce = () => "Méthodologie du benchmark : comment nous testons", we = () => "Metodología del benchmark: cómo probamos", Te = () => "Benchmark-Methodik: Wie wir testen", Ee = () => "Metodologia del benchmark: come testiamo", De = () => "Metodologia de Benchmark: como testamos", Oe = () => "基准测试方法论：我们如何测试", ke = () => "ベンチマーク方法論：私たちのテスト方法", Ae = () => "벤치마크 방법론: 테스트 방법", je = () => "Методология бенчмарка: как мы тестируем", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : n === "ru" ? je(e) : Se(e);
}), Ne = () => "Comparing i18n Libraries in 2026: A Deep Dive", Pe = () => "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie", Fe = () => "Comparación de bibliotecas i18n en 2026: un análisis profundo", Ie = () => "i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick", Le = () => "Confronto tra librerie i18n nel 2026: un approfondimento", Re = () => "Comparando Bibliotecas i18n em 2026: Uma Análise Profunda", ze = () => "2026 年 i18n 库对比：深度解析", Be = () => "2026年のi18nライブラリ比較：ディープダイブ", Ve = () => "2026년 i18n 라이브러리 비교: 심층 분석", He = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", Ue = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Ie(e) : n === "it" ? Le(e) : n === "pt" ? Re(e) : n === "zh" ? ze(e) : n === "ja" ? Be(e) : n === "ko" ? Ve(e) : n === "ru" ? He(e) : Ne(e);
}), We = () => "February 1, 2026", Ge = () => "1er février 2026", Ke = () => "1 de febrero de 2026", qe = () => "1. Februar 2026", Je = () => "1 febbraio 2026", Ye = () => "1 de fevereiro de 2026", Xe = () => "2026年2月1日", Ze = () => "2026年2月1日", Qe = () => "2026년 1월 1일", $e = () => "1 февраля 2026 года", et = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ge(e) : n === "es" ? Ke(e) : n === "de" ? qe(e) : n === "it" ? Je(e) : n === "pt" ? Ye(e) : n === "zh" ? Xe(e) : n === "ja" ? Ze(e) : n === "ko" ? Qe(e) : n === "ru" ? $e(e) : We(e);
}), tt = () => "February 15, 2026", nt = () => "15 février 2026", rt = () => "15 de febrero de 2026", it = () => "15. Februar 2026", at = () => "15 febbraio 2026", ot = () => "15 de fevereiro de 2026", st = () => "2026年2月15日", ct = () => "2026年2月15日", lt = () => "2026년 2월 15일", ut = () => "15 февраля 2026 года", dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? nt(e) : n === "es" ? rt(e) : n === "de" ? it(e) : n === "it" ? at(e) : n === "pt" ? ot(e) : n === "zh" ? st(e) : n === "ja" ? ct(e) : n === "ko" ? lt(e) : n === "ru" ? ut(e) : tt(e);
}), ft = () => "February 28, 2026", pt = () => "28 février 2026", mt = () => "28 de febrero de 2026", ht = () => "28. Februar 2026", gt = () => "28 febbraio 2026", _t = () => "28 de fevereiro de 2026", vt = () => "2026年2月28日", yt = () => "2026年2月28日", bt = () => "2026년 2월 28일", xt = () => "28 февраля 2026 года", St = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : n === "ru" ? xt(e) : ft(e);
}), Ct = () => "How to Reduce Your i18n Bundle by 60%", wt = () => "Comment réduire votre bundle i18n de 60 %", Tt = () => "Cómo reducir tu bundle i18n en un 60%", Et = () => "So reduzieren Sie Ihr i18n-Bundle um 60 %", Dt = () => "Come ridurre il bundle i18n del 60%", Ot = () => "Como reduzir seu bundle i18n em 60%", kt = () => "如何将您的 i18n 包减少 60%", At = () => "i18nバンドルを60％削減する方法", jt = () => "i18n 번들을 60% 줄이는 방법", Mt = () => "Как уменьшить бандл i18n на 60%", Nt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : n === "ru" ? Mt(e) : Ct(e);
}), Pt = () => "January 20, 2026", Ft = () => "20 janvier 2026", It = () => "20 de enero de 2026", Lt = () => "20. Januar 2026", Rt = () => "20 gennaio 2026", zt = () => "20 de janeiro de 2026", Bt = () => "2026年1月20日", Vt = () => "2026年1月20日", Ht = () => "2026년 1월 20일", Ut = () => "20 января 2026 года", Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : n === "ru" ? Ut(e) : Pt(e);
}), Gt = () => "March 8, 2026", Kt = () => "8 mars 2026", qt = () => "8 de marzo de 2026", Jt = () => "8. März 2026", Yt = () => "8 marzo 2026", Xt = () => "8 de março de 2026", Zt = () => "2026年3月8日", Qt = () => "2026年3月8日", $t = () => "2026년 3월 8일", en = () => "8 марта 2026 года", X = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : n === "ru" ? en(e) : Gt(e);
}), tn = () => "Migrating from react-i18next to Lingui", nn = () => "Migration de react-i18next vers Lingui", rn = () => "Migración de react-i18next a Lingui", an = () => "Migration von react-i18next zu Lingui", on = () => "Migrazione da react-i18next a Lingui", sn = () => "Migrando do react-i18next para o Lingui", cn = () => "从 react-i18next 迁移到 Lingui", ln = () => "react-i18nextからLinguiへの移行", un = () => "react-i18next에서 Lingui로 마이그레이션하기", dn = () => "Миграция с react-i18next на Lingui", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : n === "ru" ? dn(e) : tn(e);
}), pn = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", mn = () => "Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.", hn = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", gn = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.", _n = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.", vn = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.", yn = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", bn = () => "遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", xn = () => "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.", Sn = () => "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : n === "ru" ? Sn(e) : pn(e);
}), wn = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", Tn = () => "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.", En = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", Dn = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", On = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", kn = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.", An = () => "React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。", jn = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", Mn = () => "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.", Nn = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : n === "ru" ? Nn(e) : wn(e);
}), Fn = () => "Read More →", In = () => "Lire la suite →", Ln = () => "Leer más →", Rn = () => "Weiterlesen →", zn = () => "Leggi di più →", Bn = () => "Leia mais →", Vn = () => "阅读更多 →", Hn = () => "続きを読む →", Un = () => "더 읽어보기 →", Wn = () => "Читать далее →", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : n === "ru" ? Wn(e) : Fn(e);
}), Kn = () => "Server Components and i18n: What Changes?", qn = () => "Server Components et i18n : Qu'est-ce qui change ?", Jn = () => "Server Components e i18n: ¿qué cambia?", Yn = () => "Server Components und i18n: Was ändert sich?", Xn = () => "Server Components e i18n: cosa cambia?", Zn = () => "Server Components e i18n: o que muda?", Qn = () => "服务器组件与 i18n：有哪些变化？", $n = () => "Server Componentsとi18n：何が変わるのか？", er = () => "Server Components 및 i18n: 무엇이 달라지나요?", tr = () => "Server Components и i18n: что меняется?", nr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : n === "ru" ? tr(e) : Kn(e);
}), rr = () => "The State of Internationalization in React", ir = () => "L'état de l'internationalisation dans React", ar = () => "El estado de la internacionalización en React", or = () => "Der Stand der Internationalisierung in React", sr = () => "Lo stato dell'internazionalizzazione in React", cr = () => "O estado da internacionalização no React", lr = () => "React 国际化的现状", Z = () => "Reactにおける国際化の現状", ur = () => "React 국제화의 현주소", dr = () => "Состояние интернационализации в React", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? cr(e) : n === "zh" ? lr(e) : n === "ja" ? Z(e) : n === "ko" ? ur(e) : n === "ru" ? dr(e) : rr(e);
}), pr = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", mr = () => "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.", hr = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.", gr = () => "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", _r = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", vr = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.", yr = () => "我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。", br = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", xr = () => "저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.", Sr = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", Cr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? mr(e) : n === "es" ? hr(e) : n === "de" ? gr(e) : n === "it" ? _r(e) : n === "pt" ? vr(e) : n === "zh" ? yr(e) : n === "ja" ? br(e) : n === "ko" ? xr(e) : n === "ru" ? Sr(e) : pr(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/blog/BlogList.tsx";
function wr() {
	let e = [
		{
			title: Ue(),
			date: X(),
			excerpt: Cr(),
			category: "Benchmark"
		},
		{
			title: Nt(),
			date: X(),
			excerpt: Cn(),
			category: "Tutorial"
		},
		{
			title: fr(),
			date: St(),
			excerpt: xe(),
			category: "Analysis"
		},
		{
			title: fn(),
			date: dt(),
			excerpt: W(),
			category: "Tutorial"
		},
		{
			title: nr(),
			date: et(),
			excerpt: Pn(),
			category: "Analysis"
		},
		{
			title: Me(),
			date: Wt(),
			excerpt: ue(),
			category: "Meta"
		}
	];
	return i("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: e.map((e) => i("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				i("div", {
					className: "mb-3 flex items-center gap-3",
					children: [i("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: e.category
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 53,
						columnNumber: 13
					}, this), i("span", {
						className: "text-xs text-muted-foreground",
						children: e.date
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 56,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 52,
					columnNumber: 11
				}, this),
				i("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e.title
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 58,
					columnNumber: 11
				}, this),
				i("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: e.excerpt
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 61,
					columnNumber: 11
				}, this),
				i("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: Gn()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 62,
					columnNumber: 11
				}, this)
			]
		}, e.title, !0, {
			fileName: Q,
			lineNumber: 48,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 46,
		columnNumber: 5
	}, this);
}
function Tr() {
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
function Er(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Dr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function Or({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Er("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Tr();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: Dr,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var kr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Ar({ children: e }) {
	return i(Or, { children: e }, void 0, !1, {
		fileName: kr,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/blog/BlogList.wrapper.tsx";
function jr() {
	return i(Ar, { children: i(wr, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { jr as default };

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
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = A(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function ne() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function w() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = g(e), ne(), S;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var D, O;
function k(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let n = _(new URL(t, "http://example.com")), i = T(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (v(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return D = t, O = o, o;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", P = () => "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.", F = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", I = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", L = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", R = () => "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", z = () => "关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", B = () => "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", V = () => "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.", H = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.", U = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : N(e);
}), W = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", G = () => "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.", K = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", q = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", J = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", Y = () => "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", X = () => "透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。", Z = () => "テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。", re = () => "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.", ie = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : W(e);
}), oe = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", se = () => "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.", ce = () => "Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.", le = () => "Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.", ue = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", de = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", fe = () => "React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。", pe = () => "トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。", me = () => "동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.", he = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "Benchmark Methodology: How We Test", ve = () => "Méthodologie du benchmark : comment nous testons", ye = () => "Metodología del benchmark: cómo probamos", be = () => "Benchmark-Methodik: Wie wir testen", xe = () => "Metodologia del benchmark: come testiamo", Se = () => "Metodologia de Benchmark: como testamos", Ce = () => "基准测试方法论：我们如何测试", we = () => "ベンチマーク方法論：私たちのテスト方法", Te = () => "벤치마크 방법론: 테스트 방법", Ee = () => "Методология бенчмарка: как мы тестируем", De = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "Comparing i18n Libraries in 2026: A Deep Dive", ke = () => "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie", Ae = () => "Comparación de bibliotecas i18n en 2026: un análisis profundo", je = () => "i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick", Me = () => "Confronto tra librerie i18n nel 2026: un approfondimento", Ne = () => "Comparando Bibliotecas i18n em 2026: Uma Análise Profunda", Pe = () => "2026 年 i18n 库对比：深度解析", Fe = () => "2026年のi18nライブラリ比較：ディープダイブ", Ie = () => "2026년 i18n 라이브러리 비교: 심층 분석", Le = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "February 1, 2026", Be = () => "1er février 2026", Ve = () => "1 de febrero de 2026", He = () => "1. Februar 2026", Ue = () => "1 febbraio 2026", We = () => "1 de fevereiro de 2026", Ge = () => "2026年2月1日", Ke = () => "2026年2月1日", qe = () => "2026년 1월 1일", Je = () => "1 февраля 2026 года", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "February 15, 2026", Ze = () => "15 février 2026", Qe = () => "15 de febrero de 2026", $e = () => "15. Februar 2026", et = () => "15 febbraio 2026", tt = () => "15 de fevereiro de 2026", nt = () => "2026年2月15日", rt = () => "2026年2月15日", it = () => "2026년 2월 15일", at = () => "15 февраля 2026 года", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), st = () => "February 28, 2026", ct = () => "28 février 2026", lt = () => "28 de febrero de 2026", ut = () => "28. Februar 2026", dt = () => "28 febbraio 2026", ft = () => "28 de fevereiro de 2026", pt = () => "2026年2月28日", mt = () => "2026年2月28日", ht = () => "2026년 2월 28일", gt = () => "28 февраля 2026 года", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : st(e);
}), vt = () => "How to Reduce Your i18n Bundle by 60%", yt = () => "Comment réduire votre bundle i18n de 60 %", bt = () => "Cómo reducir tu bundle i18n en un 60%", xt = () => "So reduzieren Sie Ihr i18n-Bundle um 60 %", St = () => "Come ridurre il bundle i18n del 60%", Ct = () => "Como reduzir seu bundle i18n em 60%", wt = () => "如何将您的 i18n 包减少 60%", Tt = () => "i18nバンドルを60％削減する方法", Et = () => "i18n 번들을 60% 줄이는 방법", Dt = () => "Как уменьшить бандл i18n на 60%", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : vt(e);
}), kt = () => "January 20, 2026", At = () => "20 janvier 2026", jt = () => "20 de enero de 2026", Mt = () => "20. Januar 2026", Nt = () => "20 gennaio 2026", Pt = () => "20 de janeiro de 2026", Ft = () => "2026年1月20日", It = () => "2026年1月20日", Lt = () => "2026년 1월 20일", Rt = () => "20 января 2026 года", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : n === "ru" ? Rt(e) : kt(e);
}), Bt = () => "March 8, 2026", Vt = () => "8 mars 2026", Ht = () => "8 de marzo de 2026", Ut = () => "8. März 2026", Wt = () => "8 marzo 2026", Gt = () => "8 de março de 2026", Kt = () => "2026年3月8日", qt = () => "2026年3月8日", Jt = () => "2026년 3월 8일", Yt = () => "8 марта 2026 года", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : n === "ru" ? Yt(e) : Bt(e);
}), Xt = () => "Migrating from react-i18next to Lingui", Zt = () => "Migration de react-i18next vers Lingui", Qt = () => "Migración de react-i18next a Lingui", $t = () => "Migration von react-i18next zu Lingui", en = () => "Migrazione da react-i18next a Lingui", tn = () => "Migrando do react-i18next para o Lingui", nn = () => "从 react-i18next 迁移到 Lingui", rn = () => "react-i18nextからLinguiへの移行", an = () => "react-i18next에서 Lingui로 마이그레이션하기", on = () => "Миграция с react-i18next на Lingui", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : n === "ru" ? on(e) : Xt(e);
}), cn = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", ln = () => "Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.", un = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", dn = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.", fn = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.", pn = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.", mn = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", hn = () => "遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", gn = () => "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.", _n = () => "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : n === "ru" ? _n(e) : cn(e);
}), yn = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", bn = () => "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.", xn = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", Sn = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", Cn = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", wn = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.", Tn = () => "React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。", En = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", Dn = () => "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.", On = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : n === "ru" ? On(e) : yn(e);
}), An = () => "Read More →", jn = () => "Lire la suite →", Mn = () => "Leer más →", Nn = () => "Weiterlesen →", Pn = () => "Leggi di più →", Fn = () => "Leia mais →", In = () => "阅读更多 →", Ln = () => "続きを読む →", Rn = () => "더 읽어보기 →", zn = () => "Читать далее →", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
}), Vn = () => "Server Components and i18n: What Changes?", Hn = () => "Server Components et i18n : Qu'est-ce qui change ?", Un = () => "Server Components e i18n: ¿qué cambia?", Wn = () => "Server Components und i18n: Was ändert sich?", Gn = () => "Server Components e i18n: cosa cambia?", Kn = () => "Server Components e i18n: o que muda?", qn = () => "服务器组件与 i18n：有哪些变化？", Jn = () => "Server Componentsとi18n：何が変わるのか？", Yn = () => "Server Components 및 i18n: 무엇이 달라지나요?", Xn = () => "Server Components и i18n: что меняется?", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? Jn(e) : n === "ko" ? Yn(e) : n === "ru" ? Xn(e) : Vn(e);
}), Qn = () => "The State of Internationalization in React", $n = () => "L'état de l'internationalisation dans React", er = () => "El estado de la internacionalización en React", $ = () => "Der Stand der Internationalisierung in React", tr = () => "Lo stato dell'internazionalizzazione in React", nr = () => "O estado da internacionalização no React", rr = () => "React 国际化的现状", ir = () => "Reactにおける国際化の現状", ar = () => "React 국제화의 현주소", or = () => "Состояние интернационализации в React", sr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? $(e) : n === "it" ? tr(e) : n === "pt" ? nr(e) : n === "zh" ? rr(e) : n === "ja" ? ir(e) : n === "ko" ? ar(e) : n === "ru" ? or(e) : Qn(e);
}), cr = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", lr = () => "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.", ur = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.", dr = () => "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", fr = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", pr = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.", mr = () => "我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。", hr = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", gr = () => "저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.", _r = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? lr(e) : n === "es" ? ur(e) : n === "de" ? dr(e) : n === "it" ? fr(e) : n === "pt" ? pr(e) : n === "zh" ? mr(e) : n === "ja" ? hr(e) : n === "ko" ? gr(e) : n === "ru" ? _r(e) : cr(e);
});
function yr() {
	let e = [
		{
			title: Re(),
			date: Q(),
			excerpt: vr(),
			category: "Benchmark"
		},
		{
			title: Ot(),
			date: Q(),
			excerpt: vn(),
			category: "Tutorial"
		},
		{
			title: sr(),
			date: _t(),
			excerpt: ge(),
			category: "Analysis"
		},
		{
			title: sn(),
			date: ot(),
			excerpt: U(),
			category: "Tutorial"
		},
		{
			title: Zn(),
			date: Ye(),
			excerpt: kn(),
			category: "Analysis"
		},
		{
			title: De(),
			date: zt(),
			excerpt: ae(),
			category: "Meta"
		}
	];
	return t("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: e.map((e) => n("article", {
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
					children: Bn()
				})
			]
		}, e.title))
	});
}
m("en", { reload: !1 });
function br({ children: n }) {
	return t(e, { children: n });
}
function xr() {
	return t(br, { children: t(yr, {}) });
}
export { xr as default };

import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = D(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (k(t) && O.has(t)) {
			let e = O.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = D(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (k(t) && O.has(t)) {
		let n = O.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ne() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), te(), S;
}
function re(e) {
	return ie(e);
}
function ie(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var w, T;
function E(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (w === t) return T;
	let r = _(new URL(t, "http://example.com")), i = re(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (v(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return w = t, T = o, o;
}
function D(e) {
	let t = E(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var O = /* @__PURE__ */ new Map();
function k(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var A = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", j = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", M = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", N = () => "Benchmark Methodology: How We Test", P = () => "Comparing i18n Libraries in 2026: A Deep Dive", F = () => "February 1, 2026", I = () => "February 15, 2026", L = () => "February 28, 2026", R = () => "How to Reduce Your i18n Bundle by 60%", z = () => "January 20, 2026", B = () => "March 8, 2026", V = () => "Migrating from react-i18next to Lingui", H = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", U = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", W = () => "Read More →", G = () => "Server Components and i18n: What Changes?", K = () => "The State of Internationalization in React", q = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", J = () => "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.", Y = () => "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.", ae = () => "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.", oe = () => "Méthodologie du benchmark : comment nous testons", se = () => "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie", ce = () => "1er février 2026", le = () => "15 février 2026", ue = () => "28 février 2026", de = () => "Comment réduire votre bundle i18n de 60 %", fe = () => "20 janvier 2026", pe = () => "8 mars 2026", me = () => "Migration de react-i18next vers Lingui", he = () => "Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.", ge = () => "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.", _e = () => "Lire la suite →", ve = () => "Server Components et i18n : Qu'est-ce qui change ?", ye = () => "L'état de l'internationalisation dans React", be = () => "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.", xe = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", Se = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", Ce = () => "Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.", we = () => "Metodología del benchmark: cómo probamos", Te = () => "Comparación de bibliotecas i18n en 2026: un análisis profundo", Ee = () => "1 de febrero de 2026", De = () => "15 de febrero de 2026", Oe = () => "28 de febrero de 2026", ke = () => "Cómo reducir tu bundle i18n en un 60%", Ae = () => "20 de enero de 2026", je = () => "8 de marzo de 2026", Me = () => "Migración de react-i18next a Lingui", Ne = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", Pe = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", Fe = () => "Leer más →", Ie = () => "Server Components e i18n: ¿qué cambia?", Le = () => "El estado de la internacionalización en React", Re = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.", ze = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", Be = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", Ve = () => "Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.", He = () => "Benchmark-Methodik: Wie wir testen", Ue = () => "i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick", We = () => "1. Februar 2026", Ge = () => "15. Februar 2026", Ke = () => "28. Februar 2026", qe = () => "So reduzieren Sie Ihr i18n-Bundle um 60 %", Je = () => "20. Januar 2026", Ye = () => "8. März 2026", Xe = () => "Migration von react-i18next zu Lingui", Ze = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.", Qe = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", $e = () => "Weiterlesen →", et = () => "Server Components und i18n: Was ändert sich?", tt = () => "Der Stand der Internationalisierung in React", nt = () => "Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", rt = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", it = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", at = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", ot = () => "Metodologia del benchmark: come testiamo", st = () => "Confronto tra librerie i18n nel 2026: un approfondimento", ct = () => "1 febbraio 2026", lt = () => "15 febbraio 2026", ut = () => "28 febbraio 2026", dt = () => "Come ridurre il bundle i18n del 60%", ft = () => "20 gennaio 2026", pt = () => "8 marzo 2026", mt = () => "Migrazione da react-i18next a Lingui", ht = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.", gt = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", _t = () => "Leggi di più →", vt = () => "Server Components e i18n: cosa cambia?", yt = () => "Lo stato dell'internazionalizzazione in React", bt = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", xt = () => "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", St = () => "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", Ct = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", wt = () => "Metodologia de Benchmark: como testamos", Tt = () => "Comparando Bibliotecas i18n em 2026: Uma Análise Profunda", Et = () => "1 de fevereiro de 2026", Dt = () => "15 de fevereiro de 2026", Ot = () => "28 de fevereiro de 2026", kt = () => "Como reduzir seu bundle i18n em 60%", At = () => "20 de janeiro de 2026", jt = () => "8 de março de 2026", Mt = () => "Migrando do react-i18next para o Lingui", Nt = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.", Pt = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.", Ft = () => "Leia mais →", It = () => "Server Components e i18n: o que muda?", Lt = () => "O estado da internacionalização no React", Rt = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.", zt = () => "关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Bt = () => "透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。", Vt = () => "React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。", Ht = () => "基准测试方法论：我们如何测试", Ut = () => "2026 年 i18n 库对比：深度解析", Wt = () => "2026年2月1日", Gt = () => "2026年2月15日", Kt = () => "2026年2月28日", qt = () => "如何将您的 i18n 包减少 60%", Jt = () => "2026年1月20日", Yt = () => "2026年3月8日", Xt = () => "从 react-i18next 迁移到 Lingui", Zt = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", Qt = () => "React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。", $t = () => "阅读更多 →", en = () => "服务器组件与 i18n：有哪些变化？", tn = () => "React 国际化的现状", nn = () => "我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。", rn = () => "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", an = () => "テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。", on = () => "トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。", sn = () => "ベンチマーク方法論：私たちのテスト方法", cn = () => "2026年のi18nライブラリ比較：ディープダイブ", ln = () => "2026年2月1日", un = () => "2026年2月15日", dn = () => "2026年2月28日", fn = () => "i18nバンドルを60％削減する方法", pn = () => "2026年1月20日", mn = () => "2026年3月8日", hn = () => "react-i18nextからLinguiへの移行", gn = () => "遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", _n = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", vn = () => "続きを読む →", yn = () => "Server Componentsとi18n：何が変わるのか？", bn = () => "Reactにおける国際化の現状", xn = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", Sn = () => "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.", Cn = () => "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.", wn = () => "동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.", Tn = () => "벤치마크 방법론: 테스트 방법", En = () => "2026년 i18n 라이브러리 비교: 심층 분석", Dn = () => "2026년 1월 1일", On = () => "2026년 2월 15일", kn = () => "2026년 2월 28일", An = () => "i18n 번들을 60% 줄이는 방법", jn = () => "2026년 1월 20일", Mn = () => "2026년 3월 8일", Nn = () => "react-i18next에서 Lingui로 마이그레이션하기", Pn = () => "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.", Fn = () => "React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.", In = () => "더 읽어보기 →", Ln = () => "Server Components 및 i18n: 무엇이 달라지나요?", Rn = () => "React 국제화의 현주소", zn = () => "저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.", Bn = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.", Vn = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", Hn = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.", Un = () => "Методология бенчмарка: как мы тестируем", Wn = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", Gn = () => "1 февраля 2026 года", Kn = () => "15 февраля 2026 года", qn = () => "28 февраля 2026 года", Jn = () => "Как уменьшить бандл i18n на 60%", Yn = () => "20 января 2026 года", Xn = () => "8 марта 2026 года", Zn = () => "Миграция с react-i18next на Lingui", Qn = () => "Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.", $n = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", er = () => "Читать далее →", tr = () => "Server Components и i18n: что меняется?", nr = () => "Состояние интернационализации в React", rr = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", X = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? J(e) : n === "es" ? xe(e) : n === "de" ? ze(e) : n === "it" ? rt(e) : n === "pt" ? xt(e) : n === "zh" ? zt(e) : n === "ja" ? rn(e) : n === "ko" ? Sn(e) : n === "ru" ? Bn(e) : A(e);
}), ir = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Y(e) : n === "es" ? Se(e) : n === "de" ? Be(e) : n === "it" ? it(e) : n === "pt" ? St(e) : n === "zh" ? Bt(e) : n === "ja" ? an(e) : n === "ko" ? Cn(e) : n === "ru" ? Vn(e) : j(e);
}), ar = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ae(e) : n === "es" ? Ce(e) : n === "de" ? Ve(e) : n === "it" ? at(e) : n === "pt" ? Ct(e) : n === "zh" ? Vt(e) : n === "ja" ? on(e) : n === "ko" ? wn(e) : n === "ru" ? Hn(e) : M(e);
}), or = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? oe(e) : n === "es" ? we(e) : n === "de" ? He(e) : n === "it" ? ot(e) : n === "pt" ? wt(e) : n === "zh" ? Ht(e) : n === "ja" ? sn(e) : n === "ko" ? Tn(e) : n === "ru" ? Un(e) : N(e);
}), sr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? se(e) : n === "es" ? Te(e) : n === "de" ? Ue(e) : n === "it" ? st(e) : n === "pt" ? Tt(e) : n === "zh" ? Ut(e) : n === "ja" ? cn(e) : n === "ko" ? En(e) : n === "ru" ? Wn(e) : P(e);
}), cr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ce(e) : n === "es" ? Ee(e) : n === "de" ? We(e) : n === "it" ? ct(e) : n === "pt" ? Et(e) : n === "zh" ? Wt(e) : n === "ja" ? ln(e) : n === "ko" ? Dn(e) : n === "ru" ? Gn(e) : F(e);
}), lr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? le(e) : n === "es" ? De(e) : n === "de" ? Ge(e) : n === "it" ? lt(e) : n === "pt" ? Dt(e) : n === "zh" ? Gt(e) : n === "ja" ? un(e) : n === "ko" ? On(e) : n === "ru" ? Kn(e) : I(e);
}), ur = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ue(e) : n === "es" ? Oe(e) : n === "de" ? Ke(e) : n === "it" ? ut(e) : n === "pt" ? Ot(e) : n === "zh" ? Kt(e) : n === "ja" ? dn(e) : n === "ko" ? kn(e) : n === "ru" ? qn(e) : L(e);
}), dr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? de(e) : n === "es" ? ke(e) : n === "de" ? qe(e) : n === "it" ? dt(e) : n === "pt" ? kt(e) : n === "zh" ? qt(e) : n === "ja" ? fn(e) : n === "ko" ? An(e) : n === "ru" ? Jn(e) : R(e);
}), fr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fe(e) : n === "es" ? Ae(e) : n === "de" ? Je(e) : n === "it" ? ft(e) : n === "pt" ? At(e) : n === "zh" ? Jt(e) : n === "ja" ? pn(e) : n === "ko" ? jn(e) : n === "ru" ? Yn(e) : z(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pe(e) : n === "es" ? je(e) : n === "de" ? Ye(e) : n === "it" ? pt(e) : n === "pt" ? jt(e) : n === "zh" ? Yt(e) : n === "ja" ? mn(e) : n === "ko" ? Mn(e) : n === "ru" ? Xn(e) : B(e);
}), pr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? me(e) : n === "es" ? Me(e) : n === "de" ? Xe(e) : n === "it" ? mt(e) : n === "pt" ? Mt(e) : n === "zh" ? Xt(e) : n === "ja" ? hn(e) : n === "ko" ? Nn(e) : n === "ru" ? Zn(e) : V(e);
}), mr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? he(e) : n === "es" ? Ne(e) : n === "de" ? Ze(e) : n === "it" ? ht(e) : n === "pt" ? Nt(e) : n === "zh" ? Zt(e) : n === "ja" ? gn(e) : n === "ko" ? Pn(e) : n === "ru" ? Qn(e) : H(e);
}), hr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ge(e) : n === "es" ? Pe(e) : n === "de" ? Qe(e) : n === "it" ? gt(e) : n === "pt" ? Pt(e) : n === "zh" ? Qt(e) : n === "ja" ? _n(e) : n === "ko" ? Fn(e) : n === "ru" ? $n(e) : U(e);
}), gr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _e(e) : n === "es" ? Fe(e) : n === "de" ? $e(e) : n === "it" ? _t(e) : n === "pt" ? Ft(e) : n === "zh" ? $t(e) : n === "ja" ? vn(e) : n === "ko" ? In(e) : n === "ru" ? er(e) : W(e);
}), _r = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ve(e) : n === "es" ? Ie(e) : n === "de" ? et(e) : n === "it" ? vt(e) : n === "pt" ? It(e) : n === "zh" ? en(e) : n === "ja" ? yn(e) : n === "ko" ? Ln(e) : n === "ru" ? tr(e) : G(e);
}), vr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ye(e) : n === "es" ? Le(e) : n === "de" ? tt(e) : n === "it" ? yt(e) : n === "pt" ? Lt(e) : n === "zh" ? tn(e) : n === "ja" ? bn(e) : n === "ko" ? Rn(e) : n === "ru" ? nr(e) : K(e);
}), yr = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? be(e) : n === "es" ? Re(e) : n === "de" ? nt(e) : n === "it" ? bt(e) : n === "pt" ? Rt(e) : n === "zh" ? nn(e) : n === "ja" ? xn(e) : n === "ko" ? zn(e) : n === "ru" ? rr(e) : q(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/blog/BlogList.tsx";
function br() {
	let e = [
		{
			title: sr(),
			date: Z(),
			excerpt: yr(),
			category: "Benchmark"
		},
		{
			title: dr(),
			date: Z(),
			excerpt: mr(),
			category: "Tutorial"
		},
		{
			title: vr(),
			date: ur(),
			excerpt: ar(),
			category: "Analysis"
		},
		{
			title: pr(),
			date: lr(),
			excerpt: X(),
			category: "Tutorial"
		},
		{
			title: _r(),
			date: cr(),
			excerpt: hr(),
			category: "Analysis"
		},
		{
			title: or(),
			date: fr(),
			excerpt: ir(),
			category: "Meta"
		}
	];
	return t("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: e.map((e) => t("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				t("div", {
					className: "mb-3 flex items-center gap-3",
					children: [t("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: e.category
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 51,
						columnNumber: 13
					}, this), t("span", {
						className: "text-xs text-muted-foreground",
						children: e.date
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 54,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 50,
					columnNumber: 11
				}, this),
				t("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e.title
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 56,
					columnNumber: 11
				}, this),
				t("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: e.excerpt
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 59,
					columnNumber: 11
				}, this),
				t("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: gr()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 60,
					columnNumber: 11
				}, this)
			]
		}, e.title, !0, {
			fileName: Q,
			lineNumber: 46,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 44,
		columnNumber: 5
	}, this);
}
var xr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function Sr({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: xr,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/blog/BlogList.wrapper.tsx";
function Cr() {
	return t(Sr, { children: t(br, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Cr as default };

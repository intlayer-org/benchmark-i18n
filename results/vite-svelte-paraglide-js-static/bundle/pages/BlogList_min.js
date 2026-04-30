import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, writable as n } from "svelte/store";
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
], c = [], l, u;
function d(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of c) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return l = t, u = i, i;
}
function f(e) {
	let t = d(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], c = s;
	!m && typeof window < "u" && window.location?.href && (c = f(window.location.href));
	for (let t of c) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		!m && n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return b(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Read More →", T = () => "Lire la suite →", E = () => "Leer más →", D = () => "Mehr lesen →", O = () => "Leggi di più →", k = () => "Ler Mais →", A = () => "阅读更多 →", j = () => "続きを読む →", M = () => "Read More →", N = () => "Читать далее →", P = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Comparing i18n Libraries in 2026: A Deep Dive", I = () => "Comparer les bibliothèques i18n en 2026 : plongée détaillée", L = () => "Comparativa de bibliotecas i18n en 2026: Un análisis profundo", R = () => "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick", z = () => "Confronto delle librerie i18n nel 2026: un'analisi approfondita", B = () => "Comparando bibliotecas i18n em 2026: um mergulho profundo", V = () => "2026 年 i18n 库对比：深度分析", H = () => "2026年のi18nライブラリ比較：ディープダイブ", U = () => "Comparing i18n Libraries in 2026: A Deep Dive", W = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", G = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "March 15, 2026", q = () => "15 mars 2026", J = () => "15 de marzo de 2026", Y = () => "15. März 2026", X = () => "15 marzo 2026", Z = () => "15 de março de 2026", Q = () => "2026年3月15日", ne = () => "2026年3月15日", re = () => "March 15, 2026", ie = () => "15 марта 2026 г.", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", se = () => "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.", ce = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.", le = () => "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", ue = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", de = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.", fe = () => "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。", pe = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", me = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", he = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "Benchmark", ve = () => "Benchmark", ye = () => "Benchmark", be = () => "Benchmark", xe = () => "Benchmark", Se = () => "Benchmark", Ce = () => "基准测试", we = () => "ベンチマーク", Te = () => "Benchmark", Ee = () => "Бенчмарк", De = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "How to Reduce Your i18n Bundle by 60%", ke = () => "Réduire votre bundle i18n de 60 %", Ae = () => "Cómo reducir tu bundle i18n en un 60%", je = () => "Wie Sie Ihr i18n-Bundle um 60 % reduzieren", Me = () => "Come ridurre il bundle i18n del 60%", Ne = () => "Como reduzir seu bundle i18n em 60%", Pe = () => "如何将 i18n 包大小减少 60%", Fe = () => "i18nバンドルを60%削減する方法", Ie = () => "How to Reduce Your i18n Bundle by 60%", Le = () => "Как уменьшить бандл i18n на 60%", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), ze = () => "March 8, 2026", Be = () => "8 mars 2026", Ve = () => "8 de marzo de 2026", He = () => "8. März 2026", Ue = () => "8 marzo 2026", We = () => "8 de março de 2026", Ge = () => "2026年3月8日", Ke = () => "2026年3月8日", qe = () => "March 8, 2026", Je = () => "8 марта 2026 г.", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ze(e) : n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : Je(e);
}), Xe = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", Ze = () => "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.", Qe = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", $e = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.", et = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.", tt = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.", nt = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", rt = () => "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", it = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", at = () => "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = () => "Tutorial", ct = () => "Tutoriel", lt = () => "Tutorial", ut = () => "Tutorial", dt = () => "Tutorial", ft = () => "Tutorial", pt = () => "教程", mt = () => "チュートリアル", ht = () => "Tutorial", gt = () => "Туториал", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : gt(e);
}), vt = () => "The State of Internationalization in React", yt = () => "État de l'internationalisation dans l'écosystème React", bt = () => "El estado de la internacionalización en React", xt = () => "Der Stand der Internationalisierung in React", St = () => "Lo stato dell'internazionalizzazione in React", Ct = () => "O estado da internacionalização no React", wt = () => "React 国际化现状", Tt = () => "Reactにおける国際化の現状", Et = () => "The State of Internationalization in React", Dt = () => "Состояние интернационализации в React", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? vt(e) : n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
}), kt = () => "February 28, 2026", At = () => "28 février 2026", jt = () => "28 de febrero de 2026", Mt = () => "28. Februar 2026", Nt = () => "28 febbraio 2026", Pt = () => "28 de fevereiro de 2026", Ft = () => "2026年2月28日", It = () => "2026年2月28日", Lt = () => "February 28, 2026", Rt = () => "28 февраля 2026 г.", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : Rt(e);
}), Bt = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Vt = () => "Panorama des tendances, patterns émergents et préférences de la communauté.", Ht = () => "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.", Ut = () => "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.", Wt = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", Gt = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", Kt = () => "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。", qt = () => "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。", Jt = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Yt = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Bt(e) : n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : Yt(e);
}), Zt = () => "Analysis", Qt = () => "Analyse", $t = () => "Análisis", en = () => "Analyse", tn = () => "Analisi", nn = () => "Análise", rn = () => "分析", an = () => "分析", on = () => "Analysis", sn = () => "Анализ", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Zt(e) : n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : sn(e);
}), ln = () => "Migrating from react-i18next to Lingui", un = () => "Migrer de react-i18next vers Lingui", dn = () => "Migración de react-i18next a Lingui", fn = () => "Migration von react-i18next zu Lingui", pn = () => "Migrazione da react-i18next a Lingui", mn = () => "Migrando de react-i18next para o Lingui", hn = () => "从 react-i18next 迁移到 Lingui", gn = () => "react-i18nextからLinguiへの移行", _n = () => "Migrating from react-i18next to Lingui", vn = () => "Миграция с react-i18next на Lingui", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ln(e) : n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : vn(e);
}), bn = () => "February 15, 2026", xn = () => "15 février 2026", Sn = () => "15 de febrero de 2026", Cn = () => "15. Februar 2026", wn = () => "15 febbraio 2026", Tn = () => "15 de fevereiro de 2026", En = () => "2026年2月15日", Dn = () => "2026年2月15日", On = () => "February 15, 2026", kn = () => "15 февраля 2026 г.", An = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? bn(e) : n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : kn(e);
}), jn = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Mn = () => "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.", Nn = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", Pn = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", Fn = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", In = () => "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", Ln = () => "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Rn = () => "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", zn = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Bn = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? jn(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), Hn = () => "Tutorial", Un = () => "Tutoriel", Wn = () => "Tutorial", Gn = () => "Tutorial", Kn = () => "Tutorial", qn = () => "Tutorial", Jn = () => "教程", Yn = () => "チュートリアル", Xn = () => "Tutorial", Zn = () => "Туториал", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Hn(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), $n = () => "Server Components and i18n: What Changes?", er = () => "Server Components et i18n : qu'est-ce qui change ?", tr = () => "Server Components e i18n: ¿Qué cambia?", nr = () => "Server Components und i18n: Was ändert sich?", rr = () => "Server Components e i18n: cosa cambia?", ir = () => "Server Components e i18n: o que muda?", ar = () => "Server Components 与 i18n：发生了什么变化？", or = () => "Server Componentsとi18n：何が変わるのか？", sr = () => "Server Components and i18n: What Changes?", cr = () => "Server Components и i18n: что меняется?", lr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $n(e) : n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : cr(e);
}), ur = () => "February 1, 2026", dr = () => "1er février 2026", fr = () => "1 de febrero de 2026", pr = () => "1. Februar 2026", mr = () => "1 febbraio 2026", hr = () => "1 de fevereiro de 2026", gr = () => "2026年2月1日", _r = () => "2026年2月1日", vr = () => "February 1, 2026", yr = () => "1 февраля 2026 г.", br = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ur(e) : n === "fr" ? dr(e) : n === "es" ? fr(e) : n === "de" ? pr(e) : n === "it" ? mr(e) : n === "pt" ? hr(e) : n === "zh" ? gr(e) : n === "ja" ? _r(e) : n === "ko" ? vr(e) : yr(e);
}), xr = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", Sr = () => "Les React Server Components introduisent de nouveaux motifs pour l'i18n.", Cr = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", wr = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", Tr = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", Er = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.", Dr = () => "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。", Or = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", kr = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", Ar = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", jr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? xr(e) : n === "fr" ? Sr(e) : n === "es" ? Cr(e) : n === "de" ? wr(e) : n === "it" ? Tr(e) : n === "pt" ? Er(e) : n === "zh" ? Dr(e) : n === "ja" ? Or(e) : n === "ko" ? kr(e) : Ar(e);
}), Mr = () => "Analysis", Nr = () => "Analyse", Pr = () => "Análisis", Fr = () => "Analyse", Ir = () => "Analisi", Lr = () => "Análise", Rr = () => "分析", zr = () => "分析", Br = () => "Analysis", Vr = () => "Анализ", Hr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Mr(e) : n === "fr" ? Nr(e) : n === "es" ? Pr(e) : n === "de" ? Fr(e) : n === "it" ? Ir(e) : n === "pt" ? Lr(e) : n === "zh" ? Rr(e) : n === "ja" ? zr(e) : n === "ko" ? Br(e) : Vr(e);
}), Ur = () => "Benchmark Methodology: How We Test", Wr = () => "Méthodologie de benchmark : comment nous testons", Gr = () => "Metodología de benchmark: Cómo probamos", Kr = () => "Benchmark-Methodik: Wie wir testen", qr = () => "Metodologia del benchmark: come testiamo", Jr = () => "Metodologia de benchmark: como testamos", Yr = () => "基准测试方法论：我们如何测试", Xr = () => "ベンチマーク手法：テスト方法について", Zr = () => "Benchmark Methodology: How We Test", Qr = () => "Методология бенчмарка: как мы тестируем", $r = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ur(e) : n === "fr" ? Wr(e) : n === "es" ? Gr(e) : n === "de" ? Kr(e) : n === "it" ? qr(e) : n === "pt" ? Jr(e) : n === "zh" ? Yr(e) : n === "ja" ? Xr(e) : n === "ko" ? Zr(e) : Qr(e);
}), ei = () => "January 20, 2026", ti = () => "20 janvier 2026", ni = () => "20 de enero de 2026", ri = () => "20. Januar 2026", ii = () => "20 gennaio 2026", ai = () => "20 de janeiro de 2026", oi = () => "2026年1月20日", si = () => "2026年1月20日", ci = () => "January 20, 2026", li = () => "20 января 2026 г.", ui = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ei(e) : n === "fr" ? ti(e) : n === "es" ? ni(e) : n === "de" ? ri(e) : n === "it" ? ii(e) : n === "pt" ? ai(e) : n === "zh" ? oi(e) : n === "ja" ? si(e) : n === "ko" ? ci(e) : li(e);
}), di = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", fi = () => "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.", pi = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", $ = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", mi = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", hi = () => "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", gi = () => "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。", _i = () => "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。", vi = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", yi = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", bi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? di(e) : n === "fr" ? fi(e) : n === "es" ? pi(e) : n === "de" ? $(e) : n === "it" ? mi(e) : n === "pt" ? hi(e) : n === "zh" ? gi(e) : n === "ja" ? _i(e) : n === "ko" ? vi(e) : yi(e);
}), xi = () => "Meta", Si = () => "Méta", Ci = () => "Meta", wi = () => "Meta", Ti = () => "Meta", Ei = () => "Meta", Di = () => "Meta", Oi = () => "メタ", ki = () => "Meta", Ai = () => "Мета", ji = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? xi(e) : n === "fr" ? Si(e) : n === "es" ? Ci(e) : n === "de" ? wi(e) : n === "it" ? Ti(e) : n === "pt" ? Ei(e) : n === "zh" ? Di(e) : n === "ja" ? Oi(e) : n === "ko" ? ki(e) : Ai(e);
}), Mi = [
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
];
function Ni(e) {
	return Mi.includes(e);
}
var Pi = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function Fi(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!Ni(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Pi.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Ii = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => Fi(e)), Li = e.from_html("<article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"> </span> <span class=\"text-xs text-muted-foreground\"> </span></div> <h2 class=\"mb-2 text-lg font-semibold text-foreground\"> </h2> <p class=\"mb-4 text-sm text-muted-foreground\"> </p> <button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"> </button></article>"), Ri = e.from_html("<div class=\"grid gap-6 md:grid-cols-2\"></div>");
function zi(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(Ii, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			title: G(),
			date: ae(),
			excerpt: ge(),
			category: De()
		},
		{
			title: Re(),
			date: Ye(),
			excerpt: ot(),
			category: _t()
		},
		{
			title: Ot(),
			date: zt(),
			excerpt: Xt(),
			category: cn()
		},
		{
			title: yn(),
			date: An(),
			excerpt: Vn(),
			category: Qn()
		},
		{
			title: lr(),
			date: br(),
			excerpt: jr(),
			category: Hr()
		},
		{
			title: $r(),
			date: ui(),
			excerpt: bi(),
			category: ji()
		}
	]));
	var c = Ri();
	e.each(c, 21, () => e.get(s), e.index, (t, n) => {
		var r = Li(), i = e.child(r), a = e.child(i), o = e.child(a, !0);
		e.reset(a);
		var s = e.sibling(a, 2), c = e.child(s, !0);
		e.reset(s), e.reset(i);
		var l = e.sibling(i, 2), u = e.child(l, !0);
		e.reset(l);
		var d = e.sibling(l, 2), f = e.child(d, !0);
		e.reset(d);
		var p = e.sibling(d, 2), m = e.child(p, !0);
		e.reset(p), e.reset(r), e.template_effect((t) => {
			e.set_text(o, e.get(n).category), e.set_text(c, e.get(n).date), e.set_text(u, e.get(n).title), e.set_text(f, e.get(n).excerpt), e.set_text(m, t);
		}, [() => P()]), e.append(t, r);
	}), e.reset(c), e.append(t, c), e.pop(), a();
}
export { zi as default };

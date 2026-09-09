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
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return _(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = j(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, w();
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
	let d = () => {
		!l && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function T() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = g(e), te(), C;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = v(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var O, k;
function A(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (O === t) return k;
	let n = v(new URL(t, "http://example.com")), i = E(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (y(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return O = t, k = o, o;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "Benchmark", F = () => "Benchmark", I = () => "Benchmark", L = () => "Benchmark", R = () => "Benchmark", z = () => "Benchmark", B = () => "基准测试", V = () => "ベンチマーク", H = () => "Benchmark", U = () => "Бенчмарк", W = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : n === "ru" ? U(e) : P(e);
}), G = () => "March 15, 2026", K = () => "15 mars 2026", q = () => "15 de marzo de 2026", J = () => "15. März 2026", Y = () => "15 marzo 2026", X = () => "15 de março de 2026", Z = () => "2026年3月15日", Q = () => "2026年3月15日", ne = () => "March 15, 2026", re = () => "15 марта 2026 г.", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : n === "ru" ? re(e) : G(e);
}), ae = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", oe = () => "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.", se = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.", ce = () => "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", le = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", ue = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.", de = () => "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。", fe = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", pe = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", me = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", he = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : n === "ru" ? me(e) : ae(e);
}), ge = () => "Comparing i18n Libraries in 2026: A Deep Dive", _e = () => "Comparer les bibliothèques i18n en 2026 : plongée détaillée", ve = () => "Comparativa de bibliotecas i18n en 2026: Un análisis profundo", ye = () => "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick", be = () => "Confronto delle librerie i18n nel 2026: un'analisi approfondita", xe = () => "Comparando bibliotecas i18n em 2026: um mergulho profundo", Se = () => "2026 年 i18n 库对比：深度分析", Ce = () => "2026年のi18nライブラリ比較：ディープダイブ", we = () => "Comparing i18n Libraries in 2026: A Deep Dive", Te = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : n === "ru" ? Te(e) : ge(e);
}), De = () => "Tutorial", Oe = () => "Tutoriel", ke = () => "Tutorial", Ae = () => "Tutorial", je = () => "Tutorial", Me = () => "Tutorial", Ne = () => "教程", Pe = () => "チュートリアル", Fe = () => "Tutorial", Ie = () => "Туториал", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : n === "ru" ? Ie(e) : De(e);
}), Re = () => "March 8, 2026", ze = () => "8 mars 2026", Be = () => "8 de marzo de 2026", Ve = () => "8. März 2026", He = () => "8 marzo 2026", Ue = () => "8 de março de 2026", We = () => "2026年3月8日", Ge = () => "2026年3月8日", Ke = () => "March 8, 2026", qe = () => "8 марта 2026 г.", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : n === "ru" ? qe(e) : Re(e);
}), Ye = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", Xe = () => "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.", Ze = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", Qe = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.", $e = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.", et = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.", tt = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", nt = () => "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", rt = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", it = () => "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.", at = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : n === "ru" ? it(e) : Ye(e);
}), ot = () => "How to Reduce Your i18n Bundle by 60%", st = () => "Réduire votre bundle i18n de 60 %", ct = () => "Cómo reducir tu bundle i18n en un 60%", lt = () => "Wie Sie Ihr i18n-Bundle um 60 % reduzieren", ut = () => "Come ridurre il bundle i18n del 60%", dt = () => "Como reduzir seu bundle i18n em 60%", ft = () => "如何将 i18n 包大小减少 60%", pt = () => "i18nバンドルを60%削減する方法", mt = () => "How to Reduce Your i18n Bundle by 60%", ht = () => "Как уменьшить бандл i18n на 60%", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : n === "ru" ? ht(e) : ot(e);
}), _t = () => "Analysis", vt = () => "Analyse", yt = () => "Análisis", bt = () => "Analyse", xt = () => "Analisi", St = () => "Análise", Ct = () => "分析", wt = () => "分析", Tt = () => "Analysis", Et = () => "Анализ", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : n === "ru" ? Et(e) : _t(e);
}), Ot = () => "February 28, 2026", kt = () => "28 février 2026", At = () => "28 de febrero de 2026", jt = () => "28. Februar 2026", Mt = () => "28 febbraio 2026", Nt = () => "28 de fevereiro de 2026", Pt = () => "2026年2月28日", Ft = () => "2026年2月28日", It = () => "February 28, 2026", Lt = () => "28 февраля 2026 г.", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : n === "ru" ? Lt(e) : Ot(e);
}), zt = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Bt = () => "Panorama des tendances, patterns émergents et préférences de la communauté.", Vt = () => "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.", Ht = () => "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.", Ut = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", Wt = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", Gt = () => "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。", Kt = () => "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。", qt = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Jt = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : n === "ru" ? Jt(e) : zt(e);
}), Xt = () => "The State of Internationalization in React", Zt = () => "État de l'internationalisation dans l'écosystème React", Qt = () => "El estado de la internacionalización en React", $t = () => "Der Stand der Internationalisierung in React", en = () => "Lo stato dell'internazionalizzazione in React", tn = () => "O estado da internacionalização no React", nn = () => "React 国际化现状", rn = () => "Reactにおける国際化の現状", an = () => "The State of Internationalization in React", on = () => "Состояние интернационализации в React", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : n === "ru" ? on(e) : Xt(e);
}), cn = () => "Tutorial", ln = () => "Tutoriel", un = () => "Tutorial", dn = () => "Tutorial", fn = () => "Tutorial", pn = () => "Tutorial", mn = () => "教程", hn = () => "チュートリアル", gn = () => "Tutorial", _n = () => "Туториал", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : n === "ru" ? _n(e) : cn(e);
}), yn = () => "February 15, 2026", bn = () => "15 février 2026", xn = () => "15 de febrero de 2026", Sn = () => "15. Februar 2026", Cn = () => "15 febbraio 2026", wn = () => "15 de fevereiro de 2026", Tn = () => "2026年2月15日", En = () => "2026年2月15日", Dn = () => "February 15, 2026", On = () => "15 февраля 2026 г.", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : n === "ru" ? On(e) : yn(e);
}), An = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", jn = () => "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.", Mn = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", Nn = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", Pn = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", Fn = () => "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", In = () => "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Ln = () => "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", Rn = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", zn = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
}), Vn = () => "Migrating from react-i18next to Lingui", Hn = () => "Migrer de react-i18next vers Lingui", Un = () => "Migración de react-i18next a Lingui", Wn = () => "Migration von react-i18next zu Lingui", Gn = () => "Migrazione da react-i18next a Lingui", Kn = () => "Migrando de react-i18next para o Lingui", qn = () => "从 react-i18next 迁移到 Lingui", Jn = () => "react-i18nextからLinguiへの移行", Yn = () => "Migrating from react-i18next to Lingui", Xn = () => "Миграция с react-i18next на Lingui", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? Jn(e) : n === "ko" ? Yn(e) : n === "ru" ? Xn(e) : Vn(e);
}), Qn = () => "Analysis", $n = () => "Analyse", er = () => "Análisis", tr = () => "Analyse", nr = () => "Analisi", rr = () => "Análise", ir = () => "分析", ar = () => "分析", or = () => "Analysis", sr = () => "Анализ", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : n === "ru" ? sr(e) : Qn(e);
}), lr = () => "February 1, 2026", ur = () => "1er février 2026", dr = () => "1 de febrero de 2026", fr = () => "1. Februar 2026", pr = () => "1 febbraio 2026", mr = () => "1 de fevereiro de 2026", hr = () => "2026年2月1日", gr = () => "2026年2月1日", _r = () => "February 1, 2026", vr = () => "1 февраля 2026 г.", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : n === "ru" ? vr(e) : lr(e);
}), br = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", xr = () => "Les React Server Components introduisent de nouveaux motifs pour l'i18n.", Sr = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", Cr = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", wr = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", Tr = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.", Er = () => "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。", Dr = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", Or = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", kr = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xr(e) : n === "es" ? Sr(e) : n === "de" ? Cr(e) : n === "it" ? wr(e) : n === "pt" ? Tr(e) : n === "zh" ? Er(e) : n === "ja" ? Dr(e) : n === "ko" ? Or(e) : n === "ru" ? kr(e) : br(e);
}), jr = () => "Server Components and i18n: What Changes?", Mr = () => "Server Components et i18n : qu'est-ce qui change ?", Nr = () => "Server Components e i18n: ¿Qué cambia?", Pr = () => "Server Components und i18n: Was ändert sich?", Fr = () => "Server Components e i18n: cosa cambia?", Ir = () => "Server Components e i18n: o que muda?", Lr = () => "Server Components 与 i18n：发生了什么变化？", Rr = () => "Server Componentsとi18n：何が変わるのか？", zr = () => "Server Components and i18n: What Changes?", Br = () => "Server Components и i18n: что меняется?", Vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Mr(e) : n === "es" ? Nr(e) : n === "de" ? Pr(e) : n === "it" ? Fr(e) : n === "pt" ? Ir(e) : n === "zh" ? Lr(e) : n === "ja" ? Rr(e) : n === "ko" ? zr(e) : n === "ru" ? Br(e) : jr(e);
}), Hr = () => "Meta", Ur = () => "Méta", Wr = () => "Meta", Gr = () => "Meta", Kr = () => "Meta", qr = () => "Meta", Jr = () => "Meta", Yr = () => "メタ", Xr = () => "Meta", Zr = () => "Мета", Qr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ur(e) : n === "es" ? Wr(e) : n === "de" ? Gr(e) : n === "it" ? Kr(e) : n === "pt" ? qr(e) : n === "zh" ? Jr(e) : n === "ja" ? Yr(e) : n === "ko" ? Xr(e) : n === "ru" ? Zr(e) : Hr(e);
}), $r = () => "January 20, 2026", ei = () => "20 janvier 2026", ti = () => "20 de enero de 2026", ni = () => "20. Januar 2026", ri = () => "20 gennaio 2026", ii = () => "20 de janeiro de 2026", ai = () => "2026年1月20日", oi = () => "2026年1月20日", si = () => "January 20, 2026", ci = () => "20 января 2026 г.", li = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ei(e) : n === "es" ? ti(e) : n === "de" ? ni(e) : n === "it" ? ri(e) : n === "pt" ? ii(e) : n === "zh" ? ai(e) : n === "ja" ? oi(e) : n === "ko" ? si(e) : n === "ru" ? ci(e) : $r(e);
}), ui = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", di = () => "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.", fi = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", pi = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", mi = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", hi = () => "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", gi = () => "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。", _i = () => "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。", vi = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", yi = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", bi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? di(e) : n === "es" ? fi(e) : n === "de" ? pi(e) : n === "it" ? mi(e) : n === "pt" ? hi(e) : n === "zh" ? gi(e) : n === "ja" ? _i(e) : n === "ko" ? vi(e) : n === "ru" ? yi(e) : ui(e);
}), xi = () => "Benchmark Methodology: How We Test", Si = () => "Méthodologie de benchmark : comment nous testons", Ci = () => "Metodología de benchmark: Cómo probamos", wi = () => "Benchmark-Methodik: Wie wir testen", Ti = () => "Metodologia del benchmark: come testiamo", Ei = () => "Metodologia de benchmark: como testamos", Di = () => "基准测试方法论：我们如何测试", Oi = () => "ベンチマーク手法：テスト方法について", ki = () => "Benchmark Methodology: How We Test", Ai = () => "Методология бенчмарка: как мы тестируем", ji = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Si(e) : n === "es" ? Ci(e) : n === "de" ? wi(e) : n === "it" ? Ti(e) : n === "pt" ? Ei(e) : n === "zh" ? Di(e) : n === "ja" ? Oi(e) : n === "ko" ? ki(e) : n === "ru" ? Ai(e) : xi(e);
}), $ = () => "Read More →", Mi = () => "Lire la suite →", Ni = () => "Leer más →", Pi = () => "Mehr lesen →", Fi = () => "Leggi di più →", Ii = () => "Ler Mais →", Li = () => "阅读更多 →", Ri = () => "続きを読む →", zi = () => "Read More →", Bi = () => "Читать далее →", Vi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Mi(e) : n === "es" ? Ni(e) : n === "de" ? Pi(e) : n === "it" ? Fi(e) : n === "pt" ? Ii(e) : n === "zh" ? Li(e) : n === "ja" ? Ri(e) : n === "ko" ? zi(e) : n === "ru" ? Bi(e) : $(e);
}), Hi = [
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
function Ui(e) {
	return Hi.includes(e);
}
var Wi = /* @__PURE__ */ new Set([
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
function Gi(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!Ui(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Wi.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Ki = n(typeof window < "u" ? window.location.pathname : "/en"), qi = t(Ki, (e) => Gi(e)), Ji = e.from_html("<article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"> </span> <span class=\"text-xs text-muted-foreground\"> </span></div> <h2 class=\"mb-2 text-lg font-semibold text-foreground\"> </h2> <p class=\"mb-4 text-sm text-muted-foreground\"> </p> <button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"> </button></article>"), Yi = e.from_html("<div class=\"grid gap-6 md:grid-cols-2\"></div>");
function Xi(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(qi, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			title: Ee(),
			date: ie(),
			excerpt: he(),
			category: W()
		},
		{
			title: gt(),
			date: Je(),
			excerpt: at(),
			category: Le()
		},
		{
			title: sn(),
			date: Rt(),
			excerpt: Yt(),
			category: Dt()
		},
		{
			title: Zn(),
			date: kn(),
			excerpt: Bn(),
			category: vn()
		},
		{
			title: Vr(),
			date: yr(),
			excerpt: Ar(),
			category: cr()
		},
		{
			title: ji(),
			date: li(),
			excerpt: bi(),
			category: Qr()
		}
	]));
	var c = Yi();
	e.each(c, 21, () => e.get(s), e.index, (t, n) => {
		var r = Ji(), i = e.child(r), a = e.child(i), o = e.only_child(a, !0), s = e.sibling(a, 2), c = e.only_child(s, !0);
		e.reset(i);
		var l = e.sibling(i, 2), u = e.only_child(l, !0), d = e.sibling(l, 2), f = e.only_child(d, !0), p = e.sibling(d, 2), m = e.only_child(p, !0);
		e.reset(r), e.template_effect((t) => {
			e.set_text(o, e.get(n).category), e.set_text(c, e.get(n).date), e.set_text(u, e.get(n).title), e.set_text(f, e.get(n).excerpt), e.set_text(m, t);
		}, [() => Vi()]), e.append(t, r);
	}), e.reset(c), e.append(t, c), e.pop(), a();
}
export { Xi as default };

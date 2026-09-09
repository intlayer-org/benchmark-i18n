import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = {}, a = [
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
], o = "PARAGLIDE_LOCALE", s = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var d, f = !1, p = () => {
	let e = c;
	!u && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = m(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return f || (d = t, f = !0, ee(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function m(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && d !== void 0) n = d;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
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
var h = (e) => {
	e ? window.location.href = e : window.location.reload();
}, ee = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = p();
	} catch {}
	let i = [], a = c;
	!u && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") d = e;
	else if (t === "cookie") {
		if (u || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t, w();
	} else if (t === "baseLocale") continue;
	else if (P(t) && N.has(t)) {
		let n = N.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		!u && n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function T() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function E() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = g(e), T(), C;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = v(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var k, A;
function j(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = v(new URL(t, "http://example.com")), r = D(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of l) if (y(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return k = t, A = o, o;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Benchmark", I = () => "Benchmark", L = () => "Benchmark", R = () => "Benchmark", z = () => "Benchmark", B = () => "Benchmark", V = () => "基准测试", H = () => "ベンチマーク", U = () => "Benchmark", W = () => "Бенчмарк", G = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "March 15, 2026", q = () => "15 mars 2026", J = () => "15 de marzo de 2026", Y = () => "15. März 2026", X = () => "15 marzo 2026", Z = () => "15 de março de 2026", Q = () => "2026年3月15日", ne = () => "2026年3月15日", re = () => "March 15, 2026", ie = () => "15 марта 2026 г.", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : K(e);
}), oe = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", se = () => "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.", ce = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.", le = () => "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", ue = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", de = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.", fe = () => "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。", pe = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", me = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", he = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "Comparing i18n Libraries in 2026: A Deep Dive", ve = () => "Comparer les bibliothèques i18n en 2026 : plongée détaillée", ye = () => "Comparativa de bibliotecas i18n en 2026: Un análisis profundo", be = () => "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick", xe = () => "Confronto delle librerie i18n nel 2026: un'analisi approfondita", Se = () => "Comparando bibliotecas i18n em 2026: um mergulho profundo", Ce = () => "2026 年 i18n 库对比：深度分析", we = () => "2026年のi18nライブラリ比較：ディープダイブ", Te = () => "Comparing i18n Libraries in 2026: A Deep Dive", Ee = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", De = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "Tutorial", ke = () => "Tutoriel", Ae = () => "Tutorial", je = () => "Tutorial", Me = () => "Tutorial", Ne = () => "Tutorial", Pe = () => "教程", Fe = () => "チュートリアル", Ie = () => "Tutorial", Le = () => "Туториал", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "March 8, 2026", Be = () => "8 mars 2026", Ve = () => "8 de marzo de 2026", He = () => "8. März 2026", Ue = () => "8 marzo 2026", We = () => "8 de março de 2026", Ge = () => "2026年3月8日", Ke = () => "2026年3月8日", qe = () => "March 8, 2026", Je = () => "8 марта 2026 г.", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", Ze = () => "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.", Qe = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", $e = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.", et = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.", tt = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.", nt = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", rt = () => "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", it = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", at = () => "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), st = () => "How to Reduce Your i18n Bundle by 60%", ct = () => "Réduire votre bundle i18n de 60 %", lt = () => "Cómo reducir tu bundle i18n en un 60%", ut = () => "Wie Sie Ihr i18n-Bundle um 60 % reduzieren", dt = () => "Come ridurre il bundle i18n del 60%", ft = () => "Como reduzir seu bundle i18n em 60%", pt = () => "如何将 i18n 包大小减少 60%", mt = () => "i18nバンドルを60%削減する方法", ht = () => "How to Reduce Your i18n Bundle by 60%", gt = () => "Как уменьшить бандл i18n на 60%", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : st(e);
}), vt = () => "Analysis", yt = () => "Analyse", bt = () => "Análisis", xt = () => "Analyse", St = () => "Analisi", Ct = () => "Análise", wt = () => "分析", Tt = () => "分析", Et = () => "Analysis", Dt = () => "Анализ", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : vt(e);
}), kt = () => "February 28, 2026", At = () => "28 février 2026", jt = () => "28 de febrero de 2026", Mt = () => "28. Februar 2026", Nt = () => "28 febbraio 2026", Pt = () => "28 de fevereiro de 2026", Ft = () => "2026年2月28日", It = () => "2026年2月28日", Lt = () => "February 28, 2026", Rt = () => "28 февраля 2026 г.", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : n === "ru" ? Rt(e) : kt(e);
}), Bt = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Vt = () => "Panorama des tendances, patterns émergents et préférences de la communauté.", Ht = () => "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.", Ut = () => "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.", Wt = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", Gt = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", Kt = () => "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。", qt = () => "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。", Jt = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Yt = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : n === "ru" ? Yt(e) : Bt(e);
}), Zt = () => "The State of Internationalization in React", Qt = () => "État de l'internationalisation dans l'écosystème React", $t = () => "El estado de la internacionalización en React", en = () => "Der Stand der Internationalisierung in React", tn = () => "Lo stato dell'internazionalizzazione in React", nn = () => "O estado da internacionalização no React", rn = () => "React 国际化现状", an = () => "Reactにおける国際化の現状", on = () => "The State of Internationalization in React", sn = () => "Состояние интернационализации в React", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : n === "ru" ? sn(e) : Zt(e);
}), ln = () => "Tutorial", un = () => "Tutoriel", dn = () => "Tutorial", $ = () => "Tutorial", fn = () => "Tutorial", pn = () => "Tutorial", mn = () => "教程", hn = () => "チュートリアル", gn = () => "Tutorial", _n = () => "Туториал", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? $(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : n === "ru" ? _n(e) : ln(e);
}), yn = () => "February 15, 2026", bn = () => "15 février 2026", xn = () => "15 de febrero de 2026", Sn = () => "15. Februar 2026", Cn = () => "15 febbraio 2026", wn = () => "15 de fevereiro de 2026", Tn = () => "2026年2月15日", En = () => "2026年2月15日", Dn = () => "February 15, 2026", On = () => "15 февраля 2026 г.", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : n === "ru" ? On(e) : yn(e);
}), An = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", jn = () => "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.", Mn = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", Nn = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", Pn = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", Fn = () => "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", In = () => "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Ln = () => "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", Rn = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", zn = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
}), Vn = () => "Migrating from react-i18next to Lingui", Hn = () => "Migrer de react-i18next vers Lingui", Un = () => "Migración de react-i18next a Lingui", Wn = () => "Migration von react-i18next zu Lingui", Gn = () => "Migrazione da react-i18next a Lingui", Kn = () => "Migrando de react-i18next para o Lingui", qn = () => "从 react-i18next 迁移到 Lingui", Jn = () => "react-i18nextからLinguiへの移行", Yn = () => "Migrating from react-i18next to Lingui", Xn = () => "Миграция с react-i18next на Lingui", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? Jn(e) : n === "ko" ? Yn(e) : n === "ru" ? Xn(e) : Vn(e);
}), Qn = () => "Analysis", $n = () => "Analyse", er = () => "Análisis", tr = () => "Analyse", nr = () => "Analisi", rr = () => "Análise", ir = () => "分析", ar = () => "分析", or = () => "Analysis", sr = () => "Анализ", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : n === "ru" ? sr(e) : Qn(e);
}), lr = () => "February 1, 2026", ur = () => "1er février 2026", dr = () => "1 de febrero de 2026", fr = () => "1. Februar 2026", pr = () => "1 febbraio 2026", mr = () => "1 de fevereiro de 2026", hr = () => "2026年2月1日", gr = () => "2026年2月1日", _r = () => "February 1, 2026", vr = () => "1 февраля 2026 г.", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : n === "ru" ? vr(e) : lr(e);
}), br = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", xr = () => "Les React Server Components introduisent de nouveaux motifs pour l'i18n.", Sr = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", Cr = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", wr = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", Tr = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.", Er = () => "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。", Dr = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", Or = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", kr = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? xr(e) : n === "es" ? Sr(e) : n === "de" ? Cr(e) : n === "it" ? wr(e) : n === "pt" ? Tr(e) : n === "zh" ? Er(e) : n === "ja" ? Dr(e) : n === "ko" ? Or(e) : n === "ru" ? kr(e) : br(e);
}), jr = () => "Server Components and i18n: What Changes?", Mr = () => "Server Components et i18n : qu'est-ce qui change ?", Nr = () => "Server Components e i18n: ¿Qué cambia?", Pr = () => "Server Components und i18n: Was ändert sich?", Fr = () => "Server Components e i18n: cosa cambia?", Ir = () => "Server Components e i18n: o que muda?", Lr = () => "Server Components 与 i18n：发生了什么变化？", Rr = () => "Server Componentsとi18n：何が変わるのか？", zr = () => "Server Components and i18n: What Changes?", Br = () => "Server Components и i18n: что меняется?", Vr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Mr(e) : n === "es" ? Nr(e) : n === "de" ? Pr(e) : n === "it" ? Fr(e) : n === "pt" ? Ir(e) : n === "zh" ? Lr(e) : n === "ja" ? Rr(e) : n === "ko" ? zr(e) : n === "ru" ? Br(e) : jr(e);
}), Hr = () => "Meta", Ur = () => "Méta", Wr = () => "Meta", Gr = () => "Meta", Kr = () => "Meta", qr = () => "Meta", Jr = () => "Meta", Yr = () => "メタ", Xr = () => "Meta", Zr = () => "Мета", Qr = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ur(e) : n === "es" ? Wr(e) : n === "de" ? Gr(e) : n === "it" ? Kr(e) : n === "pt" ? qr(e) : n === "zh" ? Jr(e) : n === "ja" ? Yr(e) : n === "ko" ? Xr(e) : n === "ru" ? Zr(e) : Hr(e);
}), $r = () => "January 20, 2026", ei = () => "20 janvier 2026", ti = () => "20 de enero de 2026", ni = () => "20. Januar 2026", ri = () => "20 gennaio 2026", ii = () => "20 de janeiro de 2026", ai = () => "2026年1月20日", oi = () => "2026年1月20日", si = () => "January 20, 2026", ci = () => "20 января 2026 г.", li = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ei(e) : n === "es" ? ti(e) : n === "de" ? ni(e) : n === "it" ? ri(e) : n === "pt" ? ii(e) : n === "zh" ? ai(e) : n === "ja" ? oi(e) : n === "ko" ? si(e) : n === "ru" ? ci(e) : $r(e);
}), ui = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", di = () => "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.", fi = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", pi = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", mi = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", hi = () => "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", gi = () => "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。", _i = () => "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。", vi = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", yi = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", bi = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? di(e) : n === "es" ? fi(e) : n === "de" ? pi(e) : n === "it" ? mi(e) : n === "pt" ? hi(e) : n === "zh" ? gi(e) : n === "ja" ? _i(e) : n === "ko" ? vi(e) : n === "ru" ? yi(e) : ui(e);
}), xi = () => "Benchmark Methodology: How We Test", Si = () => "Méthodologie de benchmark : comment nous testons", Ci = () => "Metodología de benchmark: Cómo probamos", wi = () => "Benchmark-Methodik: Wie wir testen", Ti = () => "Metodologia del benchmark: come testiamo", Ei = () => "Metodologia de benchmark: como testamos", Di = () => "基准测试方法论：我们如何测试", Oi = () => "ベンチマーク手法：テスト方法について", ki = () => "Benchmark Methodology: How We Test", Ai = () => "Методология бенчмарка: как мы тестируем", ji = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Si(e) : n === "es" ? Ci(e) : n === "de" ? wi(e) : n === "it" ? Ti(e) : n === "pt" ? Ei(e) : n === "zh" ? Di(e) : n === "ja" ? Oi(e) : n === "ko" ? ki(e) : n === "ru" ? Ai(e) : xi(e);
}), Mi = () => "Read More →", Ni = () => "Lire la suite →", Pi = () => "Leer más →", Fi = () => "Mehr lesen →", Ii = () => "Leggi di più →", Li = () => "Ler Mais →", Ri = () => "阅读更多 →", zi = () => "続きを読む →", Bi = () => "Read More →", Vi = () => "Читать далее →", Hi = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ni(e) : n === "es" ? Pi(e) : n === "de" ? Fi(e) : n === "it" ? Ii(e) : n === "pt" ? Li(e) : n === "zh" ? Ri(e) : n === "ja" ? zi(e) : n === "ko" ? Bi(e) : n === "ru" ? Vi(e) : Mi(e);
}), Ui = n("<div class=\"grid gap-6 md:grid-cols-2\">"), Wi = n("<article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"></span><span class=\"text-xs text-muted-foreground\"></span></div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"></h2><p class=\"mb-4 text-sm text-muted-foreground\"></p><button type=button class=\"text-sm font-medium text-primary hover:underline\">");
function Gi() {
	let n = () => [
		{
			title: De(),
			date: ae(),
			excerpt: ge(),
			category: G()
		},
		{
			title: _t(),
			date: Ye(),
			excerpt: ot(),
			category: Re()
		},
		{
			title: cn(),
			date: zt(),
			excerpt: Xt(),
			category: Ot()
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
	];
	return (() => {
		var i = Ui();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = Wi(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, o = r.nextSibling, s = o.nextSibling, c = s.nextSibling;
				return t(i, () => e.category), t(a, () => e.date), t(o, () => e.title), t(s, () => e.excerpt), t(c, () => Hi()), n;
			})()
		})), i;
	})();
}
export { Gi as default };

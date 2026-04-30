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
], l = [], u, d;
function ee(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new i(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = ee(e);
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
	if (t) return g || (h = t, g = !0, te(t, { reload: !1 })), t;
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
				if (t !== void 0) return x(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
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
		let t = `${o}=${e}; path=/; max-age=${s}`;
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
	let l = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return b(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "Read More →", E = () => "Lire la suite →", D = () => "Leer más →", O = () => "Mehr lesen →", k = () => "Leggi di più →", A = () => "Ler Mais →", j = () => "阅读更多 →", M = () => "続きを読む →", N = () => "Read More →", P = () => "Читать далее →", F = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "Comparing i18n Libraries in 2026: A Deep Dive", L = () => "Comparer les bibliothèques i18n en 2026 : plongée détaillée", R = () => "Comparativa de bibliotecas i18n en 2026: Un análisis profundo", z = () => "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick", B = () => "Confronto delle librerie i18n nel 2026: un'analisi approfondita", V = () => "Comparando bibliotecas i18n em 2026: um mergulho profundo", H = () => "2026 年 i18n 库对比：深度分析", U = () => "2026年のi18nライブラリ比較：ディープダイブ", W = () => "Comparing i18n Libraries in 2026: A Deep Dive", G = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", K = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "March 15, 2026", J = () => "15 mars 2026", Y = () => "15 de marzo de 2026", X = () => "15. März 2026", Z = () => "15 marzo 2026", Q = () => "15 de março de 2026", ne = () => "2026年3月15日", re = () => "2026年3月15日", ie = () => "March 15, 2026", ae = () => "15 марта 2026 г.", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : ae(e);
}), se = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", ce = () => "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.", le = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.", ue = () => "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", de = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", fe = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.", pe = () => "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。", me = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", he = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", ge = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? se(e) : n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = () => "Benchmark", ye = () => "Benchmark", be = () => "Benchmark", xe = () => "Benchmark", Se = () => "Benchmark", Ce = () => "Benchmark", we = () => "基准测试", Te = () => "ベンチマーク", Ee = () => "Benchmark", De = () => "Бенчмарк", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "How to Reduce Your i18n Bundle by 60%", Ae = () => "Réduire votre bundle i18n de 60 %", je = () => "Cómo reducir tu bundle i18n en un 60%", Me = () => "Wie Sie Ihr i18n-Bundle um 60 % reduzieren", Ne = () => "Come ridurre il bundle i18n del 60%", Pe = () => "Como reduzir seu bundle i18n em 60%", Fe = () => "如何将 i18n 包大小减少 60%", Ie = () => "i18nバンドルを60%削減する方法", Le = () => "How to Reduce Your i18n Bundle by 60%", Re = () => "Как уменьшить бандл i18n на 60%", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : Re(e);
}), Be = () => "March 8, 2026", Ve = () => "8 mars 2026", He = () => "8 de marzo de 2026", Ue = () => "8. März 2026", We = () => "8 marzo 2026", Ge = () => "8 de março de 2026", Ke = () => "2026年3月8日", qe = () => "2026年3月8日", Je = () => "March 8, 2026", Ye = () => "8 марта 2026 г.", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : Ye(e);
}), Ze = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", Qe = () => "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.", $e = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", et = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.", tt = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.", nt = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.", rt = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", it = () => "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", at = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", ot = () => "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.", st = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : ot(e);
}), ct = () => "Tutorial", lt = () => "Tutoriel", ut = () => "Tutorial", dt = () => "Tutorial", ft = () => "Tutorial", pt = () => "Tutorial", mt = () => "教程", ht = () => "チュートリアル", gt = () => "Tutorial", _t = () => "Туториал", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ct(e) : n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : _t(e);
}), yt = () => "The State of Internationalization in React", bt = () => "État de l'internationalisation dans l'écosystème React", xt = () => "El estado de la internacionalización en React", St = () => "Der Stand der Internationalisierung in React", Ct = () => "Lo stato dell'internazionalizzazione in React", wt = () => "O estado da internacionalização no React", Tt = () => "React 国际化现状", Et = () => "Reactにおける国際化の現状", Dt = () => "The State of Internationalization in React", Ot = () => "Состояние интернационализации в React", kt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : Ot(e);
}), At = () => "February 28, 2026", jt = () => "28 février 2026", Mt = () => "28 de febrero de 2026", Nt = () => "28. Februar 2026", Pt = () => "28 febbraio 2026", Ft = () => "28 de fevereiro de 2026", It = () => "2026年2月28日", Lt = () => "2026年2月28日", Rt = () => "February 28, 2026", zt = () => "28 февраля 2026 г.", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? At(e) : n === "fr" ? jt(e) : n === "es" ? Mt(e) : n === "de" ? Nt(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : zt(e);
}), Vt = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Ht = () => "Panorama des tendances, patterns émergents et préférences de la communauté.", Ut = () => "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.", Wt = () => "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.", Gt = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", Kt = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", qt = () => "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。", Jt = () => "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。", Yt = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Xt = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Vt(e) : n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : Xt(e);
}), Qt = () => "Analysis", $t = () => "Analyse", en = () => "Análisis", tn = () => "Analyse", nn = () => "Analisi", rn = () => "Análise", an = () => "分析", on = () => "分析", sn = () => "Analysis", cn = () => "Анализ", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Qt(e) : n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : cn(e);
}), un = () => "Migrating from react-i18next to Lingui", dn = () => "Migrer de react-i18next vers Lingui", fn = () => "Migración de react-i18next a Lingui", pn = () => "Migration von react-i18next zu Lingui", mn = () => "Migrazione da react-i18next a Lingui", hn = () => "Migrando de react-i18next para o Lingui", gn = () => "从 react-i18next 迁移到 Lingui", _n = () => "react-i18nextからLinguiへの移行", vn = () => "Migrating from react-i18next to Lingui", yn = () => "Миграция с react-i18next на Lingui", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? un(e) : n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : yn(e);
}), xn = () => "February 15, 2026", Sn = () => "15 février 2026", Cn = () => "15 de febrero de 2026", wn = () => "15. Februar 2026", Tn = () => "15 febbraio 2026", En = () => "15 de fevereiro de 2026", Dn = () => "2026年2月15日", On = () => "2026年2月15日", kn = () => "February 15, 2026", An = () => "15 февраля 2026 г.", jn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? xn(e) : n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? Dn(e) : n === "ja" ? On(e) : n === "ko" ? kn(e) : An(e);
}), Mn = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Nn = () => "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.", Pn = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", Fn = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", In = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", Ln = () => "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", Rn = () => "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", zn = () => "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", Bn = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Vn = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.", Hn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Mn(e) : n === "fr" ? Nn(e) : n === "es" ? Pn(e) : n === "de" ? Fn(e) : n === "it" ? In(e) : n === "pt" ? Ln(e) : n === "zh" ? Rn(e) : n === "ja" ? zn(e) : n === "ko" ? Bn(e) : Vn(e);
}), Un = () => "Tutorial", Wn = () => "Tutoriel", Gn = () => "Tutorial", Kn = () => "Tutorial", qn = () => "Tutorial", Jn = () => "Tutorial", Yn = () => "教程", Xn = () => "チュートリアル", Zn = () => "Tutorial", Qn = () => "Туториал", $n = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Un(e) : n === "fr" ? Wn(e) : n === "es" ? Gn(e) : n === "de" ? Kn(e) : n === "it" ? qn(e) : n === "pt" ? Jn(e) : n === "zh" ? Yn(e) : n === "ja" ? Xn(e) : n === "ko" ? Zn(e) : Qn(e);
}), er = () => "Server Components and i18n: What Changes?", tr = () => "Server Components et i18n : qu'est-ce qui change ?", nr = () => "Server Components e i18n: ¿Qué cambia?", rr = () => "Server Components und i18n: Was ändert sich?", ir = () => "Server Components e i18n: cosa cambia?", ar = () => "Server Components e i18n: o que muda?", or = () => "Server Components 与 i18n：发生了什么变化？", sr = () => "Server Componentsとi18n：何が変わるのか？", cr = () => "Server Components and i18n: What Changes?", lr = () => "Server Components и i18n: что меняется?", ur = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? er(e) : n === "fr" ? tr(e) : n === "es" ? nr(e) : n === "de" ? rr(e) : n === "it" ? ir(e) : n === "pt" ? ar(e) : n === "zh" ? or(e) : n === "ja" ? sr(e) : n === "ko" ? cr(e) : lr(e);
}), dr = () => "February 1, 2026", fr = () => "1er février 2026", pr = () => "1 de febrero de 2026", mr = () => "1. Februar 2026", hr = () => "1 febbraio 2026", gr = () => "1 de fevereiro de 2026", _r = () => "2026年2月1日", vr = () => "2026年2月1日", yr = () => "February 1, 2026", br = () => "1 февраля 2026 г.", xr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? dr(e) : n === "fr" ? fr(e) : n === "es" ? pr(e) : n === "de" ? mr(e) : n === "it" ? hr(e) : n === "pt" ? gr(e) : n === "zh" ? _r(e) : n === "ja" ? vr(e) : n === "ko" ? yr(e) : br(e);
}), Sr = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", Cr = () => "Les React Server Components introduisent de nouveaux motifs pour l'i18n.", wr = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", Tr = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", Er = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", Dr = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.", Or = () => "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。", kr = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", Ar = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", jr = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", Mr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Sr(e) : n === "fr" ? Cr(e) : n === "es" ? wr(e) : n === "de" ? Tr(e) : n === "it" ? Er(e) : n === "pt" ? Dr(e) : n === "zh" ? Or(e) : n === "ja" ? kr(e) : n === "ko" ? Ar(e) : jr(e);
}), Nr = () => "Analysis", Pr = () => "Analyse", Fr = () => "Análisis", Ir = () => "Analyse", Lr = () => "Analisi", Rr = () => "Análise", zr = () => "分析", Br = () => "分析", Vr = () => "Analysis", Hr = () => "Анализ", Ur = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Nr(e) : n === "fr" ? Pr(e) : n === "es" ? Fr(e) : n === "de" ? Ir(e) : n === "it" ? Lr(e) : n === "pt" ? Rr(e) : n === "zh" ? zr(e) : n === "ja" ? Br(e) : n === "ko" ? Vr(e) : Hr(e);
}), Wr = () => "Benchmark Methodology: How We Test", Gr = () => "Méthodologie de benchmark : comment nous testons", Kr = () => "Metodología de benchmark: Cómo probamos", qr = () => "Benchmark-Methodik: Wie wir testen", Jr = () => "Metodologia del benchmark: come testiamo", Yr = () => "Metodologia de benchmark: como testamos", Xr = () => "基准测试方法论：我们如何测试", Zr = () => "ベンチマーク手法：テスト方法について", Qr = () => "Benchmark Methodology: How We Test", $r = () => "Методология бенчмарка: как мы тестируем", ei = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Wr(e) : n === "fr" ? Gr(e) : n === "es" ? Kr(e) : n === "de" ? qr(e) : n === "it" ? Jr(e) : n === "pt" ? Yr(e) : n === "zh" ? Xr(e) : n === "ja" ? Zr(e) : n === "ko" ? Qr(e) : $r(e);
}), ti = () => "January 20, 2026", ni = () => "20 janvier 2026", ri = () => "20 de enero de 2026", ii = () => "20. Januar 2026", ai = () => "20 gennaio 2026", oi = () => "20 de janeiro de 2026", si = () => "2026年1月20日", ci = () => "2026年1月20日", li = () => "January 20, 2026", ui = () => "20 января 2026 г.", di = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ti(e) : n === "fr" ? ni(e) : n === "es" ? ri(e) : n === "de" ? ii(e) : n === "it" ? ai(e) : n === "pt" ? oi(e) : n === "zh" ? si(e) : n === "ja" ? ci(e) : n === "ko" ? li(e) : ui(e);
}), fi = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", pi = () => "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.", $ = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", mi = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", hi = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", gi = () => "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", _i = () => "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。", vi = () => "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。", yi = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", bi = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", xi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? fi(e) : n === "fr" ? pi(e) : n === "es" ? $(e) : n === "de" ? mi(e) : n === "it" ? hi(e) : n === "pt" ? gi(e) : n === "zh" ? _i(e) : n === "ja" ? vi(e) : n === "ko" ? yi(e) : bi(e);
}), Si = () => "Meta", Ci = () => "Méta", wi = () => "Meta", Ti = () => "Meta", Ei = () => "Meta", Di = () => "Meta", Oi = () => "Meta", ki = () => "メタ", Ai = () => "Meta", ji = () => "Мета", Mi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Si(e) : n === "fr" ? Ci(e) : n === "es" ? wi(e) : n === "de" ? Ti(e) : n === "it" ? Ei(e) : n === "pt" ? Di(e) : n === "zh" ? Oi(e) : n === "ja" ? ki(e) : n === "ko" ? Ai(e) : ji(e);
}), Ni = n("<div class=\"grid gap-6 md:grid-cols-2\">"), Pi = n("<article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"></span><span class=\"text-xs text-muted-foreground\"></span></div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"></h2><p class=\"mb-4 text-sm text-muted-foreground\"></p><button type=button class=\"text-sm font-medium text-primary hover:underline\">");
function Fi() {
	let n = () => [
		{
			title: K(),
			date: oe(),
			excerpt: _e(),
			category: Oe()
		},
		{
			title: ze(),
			date: Xe(),
			excerpt: st(),
			category: vt()
		},
		{
			title: kt(),
			date: Bt(),
			excerpt: Zt(),
			category: ln()
		},
		{
			title: bn(),
			date: jn(),
			excerpt: Hn(),
			category: $n()
		},
		{
			title: ur(),
			date: xr(),
			excerpt: Mr(),
			category: Ur()
		},
		{
			title: ei(),
			date: di(),
			excerpt: xi(),
			category: Mi()
		}
	];
	return (() => {
		var i = Ni();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = Pi(), r = n.firstChild, i = r.firstChild, a = i.nextSibling, o = r.nextSibling, s = o.nextSibling, c = s.nextSibling;
				return t(i, () => e.category), t(a, () => e.date), t(o, () => e.title), t(s, () => e.excerpt), t(c, () => F()), n;
			})()
		})), i;
	})();
}
export { Fi as default };

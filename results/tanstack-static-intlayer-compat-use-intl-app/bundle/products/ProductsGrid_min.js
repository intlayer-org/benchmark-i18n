import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var ee = {
	key: "products-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"benchmarkCli\":\"Benchmark CLI\",\"runBenchmarksLocallyFromYour\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"onPremiseDeploymentWithSso\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"contactUs\":\"Contact Us\",\"migrationAssistant\":\"Migration Assistant\",\"aiPoweredToolThatHelps\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"translationQa\":\"Translation QA\",\"automatedQualityChecksForMissing\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"bundleOptimizer\":\"Bundle Optimizer\",\"analyzesAndOptimizesYourI18n\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"learnMore\":\"Learn More\"},\"fr\":{\"benchmarkCli\":\"CLI Benchmark\",\"runBenchmarksLocallyFromYour\":\"Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\",\"benchmarkEnterprise\":\"Benchmark Entreprise\",\"onPremiseDeploymentWithSso\":\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\",\"contactUs\":\"Contactez-nous\",\"migrationAssistant\":\"Assistant de migration\",\"aiPoweredToolThatHelps\":\"Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.\",\"translationQa\":\"QA de traduction\",\"automatedQualityChecksForMissing\":\"Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\",\"bundleOptimizer\":\"Optimiseur de bundle\",\"analyzesAndOptimizesYourI18n\":\"Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.\",\"learnMore\":\"En savoir plus\"},\"es\":{\"benchmarkCli\":\"CLI de Benchmark\",\"runBenchmarksLocallyFromYour\":\"Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"onPremiseDeploymentWithSso\":\"Despliegue on-premise con SSO, registros de auditoría, SLA personalizados y soporte dedicado.\",\"contactUs\":\"Contáctanos\",\"migrationAssistant\":\"Asistente de migración\",\"aiPoweredToolThatHelps\":\"Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.\",\"translationQa\":\"QA de traducción\",\"automatedQualityChecksForMissing\":\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"bundleOptimizer\":\"Optimizador de bundle\",\"analyzesAndOptimizesYourI18n\":\"Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\",\"learnMore\":\"Más información\"},\"de\":{\"benchmarkCli\":\"Benchmark CLI\",\"runBenchmarksLocallyFromYour\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Automatisierte Cloud-basierte Benchmarks mit Verlaufsverfolgung, Warnungen und Team-Dashboards.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"onPremiseDeploymentWithSso\":\"On-Premise-Bereitstellung mit SSO, Audit-Logs, individuellen SLAs und dediziertem Support.\",\"contactUs\":\"Kontaktieren Sie uns\",\"migrationAssistant\":\"Migrationsassistent\",\"aiPoweredToolThatHelps\":\"KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.\",\"translationQa\":\"Übersetzungs-QA\",\"automatedQualityChecksForMissing\":\"Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"bundleOptimizer\":\"Bundle-Optimierer\",\"analyzesAndOptimizesYourI18n\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\",\"learnMore\":\"Mehr erfahren\"},\"it\":{\"benchmarkCli\":\"CLI del Benchmark\",\"runBenchmarksLocallyFromYour\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"onPremiseDeploymentWithSso\":\"Distribuzione in locale con SSO, log di controllo, SLA personalizzati e supporto dedicato.\",\"contactUs\":\"Contattaci\",\"migrationAssistant\":\"Assistente alla Migrazione\",\"aiPoweredToolThatHelps\":\"Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n con tempi di inattività minimi.\",\"translationQa\":\"QA delle Traduzioni\",\"automatedQualityChecksForMissing\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"bundleOptimizer\":\"Ottimizzatore del Bundle\",\"analyzesAndOptimizesYourI18n\":\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\",\"learnMore\":\"Scopri di più\"},\"pt\":{\"benchmarkCli\":\"CLI de Benchmark\",\"runBenchmarksLocallyFromYour\":\"Execute benchmarks localmente pelo seu terminal. Suporta configurações personalizadas e integração CI.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"onPremiseDeploymentWithSso\":\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"contactUs\":\"Contate-nos\",\"migrationAssistant\":\"Assistente de Migração\",\"aiPoweredToolThatHelps\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\",\"translationQa\":\"QA de Tradução\",\"automatedQualityChecksForMissing\":\"Verificações automatizadas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.\",\"bundleOptimizer\":\"Otimizador de Bundle\",\"analyzesAndOptimizesYourI18n\":\"Analisa e optimiza o seu bundle i18n para produção com tree-shaking e divisão de código.\",\"learnMore\":\"Saiba Mais\"},\"zh\":{\"benchmarkCli\":\"基准测试 CLI\",\"runBenchmarksLocallyFromYour\":\"从终端本地运行基准测试。支持自定义配置和 CI 集成。\",\"benchmarkCloud\":\"基准测试云\",\"automatedCloudBasedBenchmarkingWith\":\"自动化的基于云的基准测试，具有历史跟踪、警报和团队仪表板。\",\"benchmarkEnterprise\":\"基准测试企业版\",\"onPremiseDeploymentWithSso\":\"本地部署，具有 SSO、审计日志、定制 SLA 和专属支持。\",\"contactUs\":\"联系我们\",\"migrationAssistant\":\"迁移助手\",\"aiPoweredToolThatHelps\":\"人工智能驱动的工具，可帮助您在 i18n 库之间无缝迁移代码库。\",\"translationQa\":\"翻译质检\",\"automatedQualityChecksForMissing\":\"针对翻译缺失、复数形式问题和上下文错误的自动化质量检查。\",\"bundleOptimizer\":\"捆绑包优化器\",\"analyzesAndOptimizesYourI18n\":\"分析并优化用于生产的 i18n 捆绑包，采用摇树优化 (tree-shaking) 和代码拆分。\",\"learnMore\":\"了解更多\"},\"ja\":{\"benchmarkCli\":\"Benchmark CLI\",\"runBenchmarksLocallyFromYour\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"履歴追跡、アラート、チームダッシュボードを備えた自動化されたクラウドベースのベンチマーク。\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"onPremiseDeploymentWithSso\":\"SSO、監査ログ、カスタムSLA、専任のサポートを備えたオンプレミス展開。\",\"contactUs\":\"お問い合わせ\",\"migrationAssistant\":\"移行アシスタント\",\"aiPoweredToolThatHelps\":\"ダウンタイムなしでi18nライブラリ間でコードベースを移行するのに役立つAI搭載ツール。\",\"translationQa\":\"翻訳QA\",\"automatedQualityChecksForMissing\":\"欠落している翻訳、複数形の問題、コンテキストエラーに対する自動品質チェック。\",\"bundleOptimizer\":\"バンドルオプティマイザー\",\"analyzesAndOptimizesYourI18n\":\"プロダクション用にi18nバンドルを分析し、ツリーシェイキングやコード分割によって最適化します。\",\"learnMore\":\"詳しく見る\"},\"ko\":{\"benchmarkCli\":\"Benchmark CLI\",\"runBenchmarksLocallyFromYour\":\"터미널에서 로컬로 벤치마크를 실행합니다. 맞춤형 구성 및 CI 통합을 지원합니다.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"automatedCloudBasedBenchmarkingWith\":\"기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"onPremiseDeploymentWithSso\":\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포.\",\"contactUs\":\"문의하기\",\"migrationAssistant\":\"마이그레이션 어시스턴트\",\"aiPoweredToolThatHelps\":\"다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하도록 도와주는 AI 기반 도구입니다.\",\"translationQa\":\"번역 QA\",\"automatedQualityChecksForMissing\":\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동화된 품질 검사.\",\"bundleOptimizer\":\"번들 옵티마이저\",\"analyzesAndOptimizesYourI18n\":\"트리 쉐이킹(tree-shaking) 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"learnMore\":\"더 알아보기\"},\"ru\":{\"benchmarkCli\":\"CLI для бенчмаркинга\",\"runBenchmarksLocallyFromYour\":\"Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.\",\"benchmarkCloud\":\"Облачный бенчмаркинг\",\"automatedCloudBasedBenchmarkingWith\":\"Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.\",\"benchmarkEnterprise\":\"Корпоративный бенчмаркинг\",\"onPremiseDeploymentWithSso\":\"Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.\",\"contactUs\":\"Связаться с нами\",\"migrationAssistant\":\"Помощник по миграции\",\"aiPoweredToolThatHelps\":\"Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.\",\"translationQa\":\"Контроль качества перевода\",\"automatedQualityChecksForMissing\":\"Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.\",\"bundleOptimizer\":\"Оптимизатор бандлов\",\"analyzesAndOptimizesYourI18n\":\"Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.\",\"learnMore\":\"Узнать больше\"}}}")
}, p = /* @__PURE__ */ new WeakMap(), m = 0, te = (e) => {
	if (!e) return "base";
	let t = p.get(e);
	if (t) return t;
	m += 1;
	let n = `p${m}`;
	return p.set(e, n), n;
}, h = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, v = (e, t, n) => `${e}_${t}_${te(n)}`, ne = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= h && r.clear(), r.set(t, n), n;
}, re = "translation", ie = "enumeration", ae = "plural", oe = "condition", b = "insertion", se = "object", ce = "array", x = "markdown", S = "html", C = "gender", le = "select", w = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, T);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, w(t, e, {
		type: ce,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: se,
			key: r
		};
		if (t.eager) {
			n[r] = T(e[r], w(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = T(e[r], w(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, de = (e, t) => e[ue(e, t) ?? "fallback"], fe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), E = {
	locales: [
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
	],
	requiredLocales: [
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
	],
	strictMode: "inclusive",
	defaultLocale: "en"
}, D = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, pe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, me = "\x1B[0m", he = "\x1B[34m", ge = "\x1B[31m", _e = "\x1B[32m", ve = "\x1B[36m", ye = (e) => e, be = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ye(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, xe = (e, t) => (n, r) => be(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), O = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? me : n : me}` : e;
O("✗", ge), O("✓", _e), O("⏲", he);
var Se = 50, Ce = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Set(), Te = (e) => {
	we.has(e) || (we.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function k(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ce.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ce.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e, t, n) => e[k("PluralRules", n).select(t)] ?? e.other, ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, A = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, j = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !A(e) || !A(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? j(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ae = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => j(e, t));
}, M = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, je = (e) => {
	if (typeof e == "string") return e;
	if (M(e)) return e.nodeType === "html" ? e[S] : e[x];
}, Me = (e, t) => {
	if (typeof e == "string") return t;
	if (M(e)) {
		let n = e.nodeType === "html" ? S : x;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, N = (e, t, n, r, i) => {
	let a = Me(e, fe(je(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ne = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ae(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: re,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, Pe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = fe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, z = [
	ie,
	oe,
	ae,
	C,
	le
], Fe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !z.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && Ne(i) ? i(n) : i;
	};
}, B = (e, t) => typeof t == "function" && z.includes(e?.nodeType ?? "") ? (n) => Fe(e, t, n) : t, V = P, H = P, U = (e) => P, W = P, Ie = (e, t = !0) => [
	F(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	I,
	L(e ?? E.defaultLocale),
	R,
	Pe,
	U(e ?? E.defaultLocale),
	W,
	V,
	H
].filter((e) => e !== P), Le = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), Re = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = v(r ?? E.defaultLocale, "", n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ie(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return Le(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
}, ze = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Be = /\{\{\s*(.*?)\s*\}\}/g, Ve = (e, t = {}) => {
	if (!Object.values(t).some(ze)) return {
		isSimple: !0,
		parts: e.replace(Be, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Be), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, He = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, Ue = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], K = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, We = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? k("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? k("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : k("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return k("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ge = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? We(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : We(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ge(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[b], t, n);
	if (r.nodeType === "html") return J(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[ae];
		return J(Oe(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ie], i = Ue.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ue.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = k("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? de(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[C];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ke = (e, t = {}, n = "en") => {
	let r = J(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Y(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, qe = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Je = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Je(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Ye = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Ye(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Xe = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Ze(e, (e) => He(t, r(e)), r);
}, Ze = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Ke(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = qe(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: Je(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = qe(t), o = r(e, i);
			return o === void 0 ? n(e) : Ye(Y(o), a);
		}
	});
}, Qe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, $e = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Qe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, et = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var X = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, tt = (e = X) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!et) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, nt = !1, Z, rt = () => typeof window > "u" ? tt(X) : (nt ||= (Z = tt(X), !0), Z), it = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (nt = !1, !et && D.storage.cookies)) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Qe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, $e(r, e, i));
			} catch {}
		}
	}
}, at = /* @__PURE__ */ new Map(), ot = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), st = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = at.get(t);
	i || (i = /* @__PURE__ */ new Map(), at.set(t, i));
	let a = i.get(r);
	return a || (a = ot(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ct = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, st(t)), lt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ct({
		value: t.children,
		children: t.children
	})
}, ut = P, dt = (e, n) => {
	let i = Ve(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, ft = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = dt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, pt = P, mt = P, Q = /* @__PURE__ */ new Map(), ht = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		lt,
		F(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		I,
		L(e ?? E.defaultLocale),
		R,
		U(e ?? E.defaultLocale),
		W,
		V,
		H,
		ut,
		ft,
		pt,
		mt
	].filter((e) => e !== P);
	return Q.set(n, r), r;
}, gt = (e, t) => Re(e, t, ht(typeof t == "object" && t ? t.locale : t)), _t = rt, vt = (e, t) => it(e, {
	...X,
	isCookieEnabled: t
}), yt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, bt = (e, t = E?.locales, n = E?.defaultLocale) => {
	if (t?.includes(e)) return e;
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, $ = n({
	get locale() {
		return _t() ?? E?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), xt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: ee } = E ?? {}, [p, m] = l(() => e ?? _t() ?? t ?? ee), [te, h] = l(e);
	e !== te && (h(e), e && e !== p && m(e)), s(() => {
		yt();
	}, []);
	let g = a((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), vt(e, u);
		}
	}, [
		p,
		f,
		u
	]), _ = i ?? g, v = bt(p), ne = c(() => ({
		locale: v,
		setLocale: _,
		variant: n,
		disableEditor: o
	}), [
		v,
		_,
		n,
		o
	]);
	return d($.Provider, {
		value: ne,
		children: r
	});
}, St = ({ children: e, ...t }) => f(xt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Ct = (e, t) => {
	let { locale: n, variant: r } = o($) ?? {}, i = t ?? n, a = i;
	return c(() => gt(e, i), [e.key, a]);
}, wt = ((e, t) => {
	let { locale: n } = o($) ?? {};
	return Xe(n, Ct(e), t);
}), Tt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && xe({ log: pe })(`${O("IntlProvider", ve)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(St, {
	locale: e,
	children: t
}, String(e)));
function Et() {
	let e = wt(ee), t = [
		{
			name: e("benchmarkCli"),
			desc: e("runBenchmarksLocallyFromYour"),
			price: "Free"
		},
		{
			name: e("benchmarkCloud"),
			desc: e("automatedCloudBasedBenchmarkingWith"),
			price: "$29/mo"
		},
		{
			name: e("benchmarkEnterprise"),
			desc: e("onPremiseDeploymentWithSso"),
			price: e("contactUs")
		},
		{
			name: e("migrationAssistant"),
			desc: e("aiPoweredToolThatHelps"),
			price: "$99 one-time"
		},
		{
			name: e("translationQa"),
			desc: e("automatedQualityChecksForMissing"),
			price: "$19/mo"
		},
		{
			name: e("bundleOptimizer"),
			desc: e("analyzesAndOptimizesYourI18n"),
			price: "$49/mo"
		}
	];
	return d("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((t) => f("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [f("div", { children: [d("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: t.name
			}), d("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: t.desc
			})] }), f("div", {
				className: "flex items-center justify-between",
				children: [d("span", {
					className: "text-sm font-bold text-primary",
					children: t.price
				}), d("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e("learnMore")
				})]
			})]
		}, t.name))
	});
}
function Dt({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Tt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Ot() {
	return d(Dt, { children: d(Et, {}) });
}
export { Ot as default };

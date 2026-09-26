import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
import "svelte/internal/flags/legacy";
var i = {
	key: "products-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"learnMore\":\"Learn More\",\"analyzesAndOptimizesYourI18n\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"bundleOptimizer\":\"Bundle Optimizer\",\"automatedQualityChecksForMissing\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"translationQa\":\"Translation QA\",\"aiPoweredToolThatHelps\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"migrationAssistant\":\"Migration Assistant\",\"contactUs\":\"Contact Us\",\"onPremiseDeploymentWithSso\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Free\",\"runBenchmarksLocallyFromYour\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"benchmarkCli\":\"Benchmark CLI\"},\"fr\":{\"learnMore\":\"En savoir plus\",\"analyzesAndOptimizesYourI18n\":\"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le code splitting.\",\"bundleOptimizer\":\"Optimiseur de bundle\",\"automatedQualityChecksForMissing\":\"Contrôles qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\",\"translationQa\":\"QA de traduction\",\"aiPoweredToolThatHelps\":\"Outil alimenté par l'IA qui aide à migrer votre codebase entre bibliothèques i18n sans temps d'arrêt.\",\"migrationAssistant\":\"Assistant de migration\",\"contactUs\":\"Contactez-nous\",\"onPremiseDeploymentWithSso\":\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\",\"benchmarkEnterprise\":\"Benchmark Entreprise\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Gratuit\",\"runBenchmarksLocallyFromYour\":\"Exécutez des benchmarks localement depuis votre terminal. Prend en charge les configurations personnalisées et l'intégration CI.\",\"benchmarkCli\":\"Benchmark CLI\"},\"es\":{\"learnMore\":\"Saber más\",\"analyzesAndOptimizesYourI18n\":\"Analiza y optimiza su paquete i18n para producción con tree-shaking y división de código.\",\"bundleOptimizer\":\"Optimizador de paquetes\",\"automatedQualityChecksForMissing\":\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización и errores de contexto.\",\"translationQa\":\"QA de traducción\",\"aiPoweredToolThatHelps\":\"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n con cero tiempo de inactividad.\",\"migrationAssistant\":\"Asistente de migración\",\"contactUs\":\"Contáctenos\",\"onPremiseDeploymentWithSso\":\"Implementación local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Gratis\",\"runBenchmarksLocallyFromYour\":\"Ejecute benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.\",\"benchmarkCli\":\"Benchmark CLI\"},\"de\":{\"learnMore\":\"Mehr erfahren\",\"analyzesAndOptimizesYourI18n\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\",\"bundleOptimizer\":\"Bundle-Optimierer\",\"automatedQualityChecksForMissing\":\"Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"translationQa\":\"Übersetzungs-QA\",\"aiPoweredToolThatHelps\":\"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.\",\"migrationAssistant\":\"Migrationsassistent\",\"contactUs\":\"Kontaktieren Sie uns\",\"onPremiseDeploymentWithSso\":\"On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Automatisierte Cloud-basierte Benchmarking mit Verfolgung des Verlaufs, Warnungen und Team-Dashboards.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Kostenlos\",\"runBenchmarksLocallyFromYour\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"benchmarkCli\":\"Benchmark CLI\"},\"it\":{\"learnMore\":\"Scopri di più\",\"analyzesAndOptimizesYourI18n\":\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\",\"bundleOptimizer\":\"Ottimizzatore di bundle\",\"automatedQualityChecksForMissing\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"translationQa\":\"QA di traduzione\",\"aiPoweredToolThatHelps\":\"Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.\",\"migrationAssistant\":\"Assistente alla migrazione\",\"contactUs\":\"Contattaci\",\"onPremiseDeploymentWithSso\":\"Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard del team.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Gratis\",\"runBenchmarksLocallyFromYour\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"benchmarkCli\":\"Benchmark CLI\"},\"pt\":{\"learnMore\":\"Saiba mais\",\"analyzesAndOptimizesYourI18n\":\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\",\"bundleOptimizer\":\"Otimizador de Bundle\",\"automatedQualityChecksForMissing\":\"Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\",\"translationQa\":\"QA de Tradução\",\"aiPoweredToolThatHelps\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n com tempo de inatividade zero.\",\"migrationAssistant\":\"Assistente de Migração\",\"contactUs\":\"Contate-nos\",\"onPremiseDeploymentWithSso\":\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e dashboards de equipe.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Grátis\",\"runBenchmarksLocallyFromYour\":\"Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.\",\"benchmarkCli\":\"Benchmark CLI\"},\"zh\":{\"learnMore\":\"了解更多\",\"analyzesAndOptimizesYourI18n\":\"通过 tree-shaking 和代码分割分析并优化您的 i18n 生产包。\",\"bundleOptimizer\":\"包优化器\",\"automatedQualityChecksForMissing\":\"针对缺失翻译、复数问题和上下文错误的自动质量检查。\",\"translationQa\":\"翻译质量保证\",\"aiPoweredToolThatHelps\":\"人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机。\",\"migrationAssistant\":\"迁移助手\",\"contactUs\":\"联系我们\",\"onPremiseDeploymentWithSso\":\"支持 SSO、审计日志、自定义 SLA 和专属支持的本地部署。\",\"benchmarkEnterprise\":\"基准测试企业版\",\"automatedCloudBasedBenchmarkingWith\":\"自动化的基于云的基准测试，具有历史跟踪、警报和团队仪表板。\",\"benchmarkCloud\":\"基准测试云端版\",\"free\":\"免费\",\"runBenchmarksLocallyFromYour\":\"从您的终端在本地运行基准测试。支持自定义配置和 CI 集成。\",\"benchmarkCli\":\"基准测试 CLI\"},\"ja\":{\"learnMore\":\"詳細はこちら\",\"analyzesAndOptimizesYourI18n\":\"ツリーシェイキングとコード分割により、実稼働用の i18n バンドルを分析および最適化します。\",\"bundleOptimizer\":\"バンドルオプティマイザー\",\"automatedQualityChecksForMissing\":\"翻訳の欠落、複数形の問題、およびコンテキストエラーの自動品質チェック。\",\"translationQa\":\"翻訳 QA\",\"aiPoweredToolThatHelps\":\"ダウンタイムなしで i18n ライブラリ間でコードベースを移行するのを支援する AI 駆動ツール。\",\"migrationAssistant\":\"移行アシスタント\",\"contactUs\":\"お問い合わせ\",\"onPremiseDeploymentWithSso\":\"SSO、監査ログ、カスタム SLA、および専用サポートを備えたオンプレミス展開。\",\"benchmarkEnterprise\":\"ベンチマークエンタープライズ\",\"automatedCloudBasedBenchmarkingWith\":\"履歴追跡、アラート、およびチームダッシュボードを備えた自動クラウドベースのベンチマーク。\",\"benchmarkCloud\":\"ベンチマーククラウド\",\"free\":\"無料\",\"runBenchmarksLocallyFromYour\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成と CI 統合をサポートします。\",\"benchmarkCli\":\"ベンチマーク CLI\"},\"ko\":{\"learnMore\":\"자세히 알아보기\",\"analyzesAndOptimizesYourI18n\":\"트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"bundleOptimizer\":\"번들 최적화 도구\",\"automatedQualityChecksForMissing\":\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.\",\"translationQa\":\"번역 QA\",\"aiPoweredToolThatHelps\":\"가동 중지 시간 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하는 데 도움이 되는 AI 지원 도구입니다.\",\"migrationAssistant\":\"마이그레이션 어시스턴트\",\"contactUs\":\"문의하기\",\"onPremiseDeploymentWithSso\":\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 통한 온프레미스 배포.\",\"benchmarkEnterprise\":\"벤치마크 엔터프라이즈\",\"automatedCloudBasedBenchmarkingWith\":\"기록 추적, 알림 및 팀 대시보드를 통한 자동화된 클라우드 기반 벤치마킹.\",\"benchmarkCloud\":\"벤치마크 클라우드\",\"free\":\"무료\",\"runBenchmarksLocallyFromYour\":\"터미널에서 로컬로 벤치마크를 실행하십시오. 맞춤형 구성 및 CI 통합을 지원합니다.\",\"benchmarkCli\":\"벤치마크 CLI\"},\"ru\":{\"learnMore\":\"Узнать больше\",\"analyzesAndOptimizesYourI18n\":\"Анализирует и оптимизирует ваш i18n бандл для продакшена с использованием tree-shaking и разделения кода.\",\"bundleOptimizer\":\"Оптимизатор бандлов\",\"automatedQualityChecksForMissing\":\"Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с множественным числом и ошибок контекста.\",\"translationQa\":\"QA переводов\",\"aiPoweredToolThatHelps\":\"Инструмент на базе ИИ, который помогает мигрировать вашу кодовую базу между библиотеками i18n без простоев.\",\"migrationAssistant\":\"Ассистент миграции\",\"contactUs\":\"Связаться с нами\",\"onPremiseDeploymentWithSso\":\"Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"automatedCloudBasedBenchmarkingWith\":\"Автоматизированный облачный бенчмаркинг с отслеживанием истории, оповещениями и командными дашбордами.\",\"benchmarkCloud\":\"Benchmark Cloud\",\"free\":\"Бесплатно\",\"runBenchmarksLocallyFromYour\":\"Запускайте бенчмарки локально из вашего терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\",\"benchmarkCli\":\"Benchmark CLI\"}}}")
}, a = {
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
}, o = a?.defaultLocale, s = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: o });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: o })
	};
})(), c = Symbol("intlayer"), l = () => t(c), u = /* @__PURE__ */ new Map(), d = (e, t) => Object.create(new Proxy(e, {
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
}), f = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = u.get(t);
	i || (i = /* @__PURE__ */ new Map(), u.set(t, i));
	let a = i.get(r);
	return a || (a = d(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, p = "translation", m = "object", h = "array", g = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, _);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, g(t, e, {
		type: h,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: m,
			key: r
		};
		if (t.eager) {
			n[r] = _(e[r], g(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = _(e[r], g(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, v = /* @__PURE__ */ new WeakMap(), y = 0, b = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, x = 256, S = /* @__PURE__ */ new WeakMap(), C = (e) => typeof e == "object" && !!e, w = (e, t, n) => `${e}_${t}_${b(n)}`, T = (e, t) => {
	if (!C(e)) return { hit: !1 };
	let n = S.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!C(e)) return n;
	let r = S.get(e);
	return r || (r = /* @__PURE__ */ new Map(), S.set(e, r)), r.size >= x && r.clear(), r.set(t, n), n;
}, D = (e, t = !0) => [
	F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	I,
	L(e ?? a.defaultLocale),
	R,
	z,
	H(e ?? a.defaultLocale),
	U,
	B,
	V
].filter((e) => e !== P), O = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), k = /* @__PURE__ */ new WeakSet(), A = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = w(r ?? a.defaultLocale, "", n), s = T(e, o);
	if (s.hit) return s.content;
	let c = n ?? D(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !k.has(e)
		};
		k.add(e);
		try {
			return O(e.content, t, c);
		} finally {
			t.eager && k.delete(e);
		}
	};
	return l === null ? E(e, o, null) : Array.isArray(l) ? E(e, o, l.map(u)) : E(e, o, u(l));
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !j(e) || !j(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? M(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, N = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => M(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: p,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, z = P, B = P, V = P, H = (e) => P, U = P;
function W(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var G = (e) => {
	let t = !!W.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new W({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => W(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, f(e.value, Function.prototype)), n;
}, K = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => G({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, q = K, J = P, Y = P, X = P, Z = /* @__PURE__ */ new Map(), Q = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		K,
		F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		I,
		L(e ?? a.defaultLocale),
		R,
		H(e ?? a.defaultLocale),
		U,
		B,
		V,
		q,
		J,
		Y,
		X
	].filter((e) => e !== P);
	return Z.set(n, r), r;
}, $ = (e, t) => A(e, t, Q(typeof t == "object" && t ? t.locale : t)), ee = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return $(e, t ?? i);
	});
}, te = e.from_html("<div class=\"flex flex-col justify-between rounded-lg border border-border bg-card p-6\"><div><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"mb-4 text-sm text-muted-foreground\"> </p></div> <div class=\"flex items-center justify-between\"><span class=\"text-sm font-bold text-primary\"> </span> <button type=\"button\" class=\"rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div></div>"), ne = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function re(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = ee(i), c = e.derived(() => [
		{
			name: r().benchmarkCli,
			desc: r().runBenchmarksLocallyFromYour,
			price: r().free
		},
		{
			name: r().benchmarkCloud,
			desc: r().automatedCloudBasedBenchmarkingWith,
			price: "$29/mo"
		},
		{
			name: r().benchmarkEnterprise,
			desc: r().onPremiseDeploymentWithSso,
			price: r().contactUs
		},
		{
			name: r().migrationAssistant,
			desc: r().aiPoweredToolThatHelps,
			price: "$99 one-time"
		},
		{
			name: r().translationQa,
			desc: r().automatedQualityChecksForMissing,
			price: "$19/mo"
		},
		{
			name: r().bundleOptimizer,
			desc: r().analyzesAndOptimizesYourI18n,
			price: "$49/mo"
		}
	]);
	var l = ne();
	e.each(l, 21, () => e.get(c), e.index, (t, n) => {
		var i = te(), a = e.child(i), o = e.child(a), s = e.only_child(o, !0), c = e.sibling(o, 2), l = e.only_child(c, !0);
		e.reset(a);
		var u = e.sibling(a, 2), d = e.child(u), f = e.only_child(d, !0), p = e.sibling(d, 2), m = e.only_child(p, !0);
		e.reset(u), e.reset(i), e.template_effect(() => {
			e.set_text(s, e.get(n).name), e.set_text(l, e.get(n).desc), e.set_text(f, e.get(n).price), e.set_text(m, r().learnMore);
		}), e.append(t, i);
	}), e.reset(l), e.append(t, l), e.pop(), o();
}
export { re as default };

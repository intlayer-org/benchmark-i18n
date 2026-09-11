import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as ee, jsx as u, jsxs as d } from "react/jsx-runtime";
import { jsxDEV as f } from "react/jsx-dev-runtime";
var te = {
	key: "products",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"migrationAssistantDesc\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"bundleOptimizerDesc\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"benchmarkCloudDesc\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"translationQaDesc\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Bundle Optimizer\",\"contactUs\":\"Contact Us\",\"free\":\"Free\",\"learnMore\":\"Learn More\",\"migrationAssistant\":\"Migration Assistant\",\"benchmarkEnterpriseDesc\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"benchmarkCliDesc\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"translationQa\":\"Translation QA\"},\"fr\":{\"migrationAssistantDesc\":\"Outil alimenté par l'IA qui aide à migrer votre codebase entre les bibliothèques i18n sans interruption de service.\",\"bundleOptimizerDesc\":\"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement du code.\",\"benchmarkCloudDesc\":\"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.\",\"translationQaDesc\":\"Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Optimiseur de bundle\",\"contactUs\":\"Nous contacter\",\"free\":\"Gratuit\",\"learnMore\":\"En savoir plus\",\"migrationAssistant\":\"Assistant de migration\",\"benchmarkEnterpriseDesc\":\"Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.\",\"benchmarkCliDesc\":\"Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.\",\"translationQa\":\"Translation QA\"},\"es\":{\"migrationAssistantDesc\":\"Herramienta impulsada por IA que ayuda a migrar tu código entre bibliotecas i18n sin tiempo de inactividad.\",\"bundleOptimizerDesc\":\"Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\",\"benchmarkCloudDesc\":\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"translationQaDesc\":\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Optimizador de bundle\",\"contactUs\":\"Contáctanos\",\"free\":\"Gratis\",\"learnMore\":\"Saber más\",\"migrationAssistant\":\"Asistente de migración\",\"benchmarkEnterpriseDesc\":\"Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\",\"benchmarkCliDesc\":\"Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\",\"translationQa\":\"QA de traducción\"},\"de\":{\"migrationAssistantDesc\":\"KI-gestütztes Tool zur Unterstützung bei der Migration von Codebasen zwischen i18n-Bibliotheken ohne Ausfallzeiten.\",\"bundleOptimizerDesc\":\"Analysieren und optimieren Sie Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\",\"benchmarkCloudDesc\":\"Automatisches cloudbasiertes Benchmarking mit historischer Verfolgung, Warnungen und Teampanels.\",\"translationQaDesc\":\"Automatische Qualitätskontrollen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Bundle Optimizer\",\"contactUs\":\"Kontaktieren Sie uns\",\"free\":\"Kostenlos\",\"learnMore\":\"Mehr erfahren\",\"migrationAssistant\":\"Migrations-Assistent\",\"benchmarkEnterpriseDesc\":\"On-Premise-Bereitstellung mit SSO, Audit-Protokollen, benutzerdefinierten SLAs und dediziertem Support.\",\"benchmarkCliDesc\":\"Führen Sie Benchmarks lokal über Ihr Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"translationQa\":\"Übersetzungs-QA\"},\"it\":{\"migrationAssistantDesc\":\"Strumento basato sull'IA che aiuta a migrare il tuo codebase tra librerie i18n senza tempi di inattività.\",\"bundleOptimizerDesc\":\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\",\"benchmarkCloudDesc\":\"Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard per il team.\",\"translationQaDesc\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Ottimizzatore di bundle\",\"contactUs\":\"Contattaci\",\"free\":\"Gratuito\",\"learnMore\":\"Per saperne di più\",\"migrationAssistant\":\"Assistente alla migrazione\",\"benchmarkEnterpriseDesc\":\"Distribuzione on-premise con SSO, registri di audit, SLA personalizzati e supporto dedicato.\",\"benchmarkCliDesc\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"translationQa\":\"QA delle traduzioni\"},\"pt\":{\"migrationAssistantDesc\":\"Ferramenta baseada em IA para ajudar a migrar bases de código entre bibliotecas i18n sem tempo de inatividade.\",\"bundleOptimizerDesc\":\"Analise e otimize seus bundles i18n para produção usando tree-shaking e divisão de código.\",\"benchmarkCloudDesc\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e dashboards de equipe.\",\"translationQaDesc\":\"Verificações automáticas de qualidade para traduções ausentes, problemas de plural e erros de contexto.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Bundle Optimizer\",\"contactUs\":\"Contate-nos\",\"free\":\"Grátis\",\"learnMore\":\"Saiba mais\",\"migrationAssistant\":\"Assistente de Migração\",\"benchmarkEnterpriseDesc\":\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"benchmarkCliDesc\":\"Execute benchmarks localmente a partir do seu terminal. Suporta configurações personalizadas e integração com CI.\",\"translationQa\":\"Tradução QA\"},\"zh\":{\"migrationAssistantDesc\":\"基于 AI 的工具，帮助在 i18n 库之间迁移代码库，实现零停机时间。\",\"bundleOptimizerDesc\":\"通过 tree-shaking 和代码拆分来分析并优化生产环境的 i18n 包。\",\"benchmarkCloudDesc\":\"自动化云端基准测试，包含历史追踪、警报和团队控制面板。\",\"translationQaDesc\":\"针对缺失翻译、复数问题和上下文错误的自动化质量检查。\",\"benchmarkCli\":\"基准测试 CLI\",\"benchmarkCloud\":\"基准测试云\",\"benchmarkEnterprise\":\"基准测试企业版\",\"bundleOptimizer\":\"包优化器 (Bundle Optimizer)\",\"contactUs\":\"联系我们\",\"free\":\"免费\",\"learnMore\":\"了解更多\",\"migrationAssistant\":\"迁移助手\",\"benchmarkEnterpriseDesc\":\"本地部署选项，包含 SSO、审计日志、定制 SLA 和专属支持。\",\"benchmarkCliDesc\":\"从终端在本地运行基准测试。支持自定义配置和 CI 集成。\",\"translationQa\":\"翻译 QA\"},\"ja\":{\"migrationAssistantDesc\":\"ダウンタイムなしでi18nライブラリ間のコードベース移行を支援するAI搭載ツール。\",\"bundleOptimizerDesc\":\"ツリーシェイキングとコード分割を使用して、プロダクション用にi18nバンドルを分析および最適化します。\",\"benchmarkCloudDesc\":\"履歴追跡、アラート、チームダッシュボードを備えた自動化されたクラウドベースのベンチマーク。\",\"translationQaDesc\":\"翻訳の欠落、複数形の問題、コンテキストエラーに関する自動品質チェック。\",\"benchmarkCli\":\"ベンチマークCLI\",\"benchmarkCloud\":\"ベンチマーククラウド\",\"benchmarkEnterprise\":\"ベンチマークエンタープライズ\",\"bundleOptimizer\":\"バンドルオプティマイザー\",\"contactUs\":\"お問い合わせ\",\"free\":\"無料\",\"learnMore\":\"詳細を見る\",\"migrationAssistant\":\"移行アシスタント\",\"benchmarkEnterpriseDesc\":\"SSO、監査ログ、カスタムSLA、専任のサポートを備えたオンプレミス展開。\",\"benchmarkCliDesc\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\",\"translationQa\":\"翻訳QA\"},\"ko\":{\"migrationAssistantDesc\":\"다운타임 없이 i18n 라이브러리 간의 코드베이스 마이그레이션을 돕는 AI 기반 도구입니다.\",\"bundleOptimizerDesc\":\"트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.\",\"benchmarkCloudDesc\":\"기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹 서비스입니다.\",\"translationQaDesc\":\"누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 점검입니다.\",\"benchmarkCli\":\"벤치마크 CLI\",\"benchmarkCloud\":\"벤치마크 클라우드\",\"benchmarkEnterprise\":\"벤치마크 엔터프라이즈\",\"bundleOptimizer\":\"번들 옵티마이저\",\"contactUs\":\"문의하기\",\"free\":\"무료\",\"learnMore\":\"더 알아보기\",\"migrationAssistant\":\"마이그레이션 어시스턴트\",\"benchmarkEnterpriseDesc\":\"SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함한 온프레미스 배포 옵션입니다.\",\"benchmarkCliDesc\":\"터미널에서 로컬로 벤치마크를 실행하세요. 맞춤형 구성 및 CI 통합을 지원합니다.\",\"translationQa\":\"번역 QA\"},\"ru\":{\"migrationAssistantDesc\":\"Инструмент на базе ИИ для помощи в миграции кодовых баз между библиотеками i18n без простоев.\",\"bundleOptimizerDesc\":\"Анализируйте и оптимизируйте свои i18n бандлы для продакшна с помощью tree-shaking и разделения кода.\",\"benchmarkCloudDesc\":\"Автоматизированный облачный бенчмаркинг с историческим отслеживанием, оповещениями и командными дашбордами.\",\"translationQaDesc\":\"Автоматические проверки качества на предмет отсутствующих переводов, проблем с формами множественного числа и контекстных ошибок.\",\"benchmarkCli\":\"Benchmark CLI\",\"benchmarkCloud\":\"Benchmark Cloud\",\"benchmarkEnterprise\":\"Benchmark Enterprise\",\"bundleOptimizer\":\"Bundle Optimizer\",\"contactUs\":\"Свяжитесь с нами\",\"free\":\"Бесплатно\",\"learnMore\":\"Узнать больше\",\"migrationAssistant\":\"Помощник по миграции\",\"benchmarkEnterpriseDesc\":\"Локальное развертывание с использованием SSO, логов аудита, кастомных SLA и персональной поддержки.\",\"benchmarkCliDesc\":\"Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\",\"translationQa\":\"Translation QA\"}}}")
}, ne = class {
	_events = /* @__PURE__ */ new Map();
	on(e, t) {
		return this._events.has(e) || this._events.set(e, /* @__PURE__ */ new Set()), this._events.get(e).add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		this._events.get(e)?.delete(t);
	}
	emit(e, ...t) {
		this._events.get(e)?.forEach((e) => {
			e(...t);
		});
	}
}, re = (e, t) => {
	if (!t) return e;
	if (typeof e != "object" || !e) return;
	let n = e[t];
	if (n !== void 0) return n;
	if (!t.includes(".")) return;
	let r = e;
	for (let e of t.split(".")) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, ie = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, p = (e, t) => {
	let n = re(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return re(n, t);
	}
}, ae = (e) => {
	if (typeof e == "string") return e;
	if (!Array.isArray(e)) return "";
	let [t, n, r] = e;
	if (n === void 0) return `{${String(t)}}`;
	if (n === "plural" || n === "select" || n === "selectordinal") {
		let e = r ?? {}, i = [], a = "";
		for (let [t, n] of Object.entries(e)) {
			if (t === "offset") {
				a = `offset:${String(n)} `;
				continue;
			}
			i.push(`${t} {${oe(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, oe = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ae).join("") : String(e ?? ""), se = "translation", ce = "enumeration", le = "plural", m = "insertion", ue = "object", de = "array", h = "markdown", g = "html", _ = "gender", fe = "select", v = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: de,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ue,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = y(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = y(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, b = (e) => v(ce, e), pe = (e) => v(_, e), me = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, x = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = me(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, he = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), ge = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, _e = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(ge)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = he.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, S = (e, t) => v(g, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = _e(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return x(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => x(await e)), typeof n == "string") return x(n);
	try {
		return x(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), C = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, w = (e) => v(m, e, { fields: (() => {
	if (typeof e == "string") return C(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => C(await e)), typeof t == "string") return C(t);
	try {
		return C(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), ve = (e) => v(le, e), ye = (e, t) => v(fe, e, { variable: t }), be = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, T = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? S(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? S(t) : w(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? S(t) : t;
		if (t.type === "argument") return t.format ? w(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : w(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = T(a);
				}
				return e.__intlayer_icu_var = t.name, b(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = T(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return ve(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = T(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? pe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : ye(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = T(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, b(e);
		}
	}
	return e.map((e) => T([e]));
}, xe = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return T(be(e));
		} catch {
			return e;
		}
	}
}, Se = (e) => y(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...xe
	}]
}), Ce = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, we = (e, t) => e[Ce(e, t) ?? "fallback"], E = {
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
}, Te = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ee = 50, O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Set(), De = (e) => {
	k.has(e) || (k.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Oe = {
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
}, ke = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (De(e), Oe[e]);
};
function A(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = O.get(a);
	o || (o = /* @__PURE__ */ new Map(), O.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ke(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ee && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ae = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, je = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Me = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], j = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ne = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? A("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? A("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : A("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return A("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Pe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = j(t, r);
	return o === void 0 ? e : i ? Ne(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = j(t, r);
	return o === void 0 ? e : Ne(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = j(t, n);
	return r === void 0 ? e : String(r);
}), M = (e, t) => e[t] ?? e.count ?? e.n, N = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Pe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return N(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(N(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return N(r[m], t, n);
	if (r.nodeType === "html") return N(r[g], t, n);
	if (r.nodeType === "plural") {
		let e = r[le];
		return N(Ae(e, Number(M(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ce], i = Me.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Me.includes(t) || (o[t] = n);
		let s = M(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? we(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return N(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[fe], i = M(t, typeof r.variable == "string" ? r.variable : "value");
		return N(je(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[_];
		return N(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, P = (e, t = {}, n = "en") => {
	let r = N(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Fe = ((e) => (t, n = {}, r = "en") => P(typeof t == "string" ? e(t) : t, n, r))(Se), Ie = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, F = class extends ne {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_boundDictionaries = {};
	_registry;
	constructor({ locale: e = "en", locales: t, messages: n, registry: r } = {}) {
		super(), this._locale = typeof e == "string" ? e : "en", this._locales = t, this._registry = r, n && this.mergeAllCatalogs(n);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		let e = { ...this._registry?.all(this._locale) };
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, ie(t));
		return {
			...this._catalogs[this._locale] ?? {},
			...e
		};
	}
	mergeLocaleCatalog(e, t) {
		this._catalogs[e] = {
			...this._catalogs[e],
			...t
		};
	}
	mergeAllCatalogs(e) {
		for (let [t, n] of Object.entries(e)) n && typeof n == "object" && this.mergeLocaleCatalog(t, n);
	}
	setMessagesCompiler(e) {
		return console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer."), this;
	}
	load(e, t) {
		typeof e == "string" ? this.mergeLocaleCatalog(e, t ?? {}) : this.mergeAllCatalogs(e), this._loadFallbackWarned || (this._loadFallbackWarned = !0, console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files."));
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		n && this.mergeLocaleCatalog(e, n), this.activate(e, t);
	}
	bindDictionaries(e) {
		return this._boundDictionaries = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	lookupBoundDictionaries(e) {
		let { dictionaryKey: t, remainder: n } = Ie(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = p(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = p(t, e);
			if (n !== void 0) return n;
		}
	}
	resolveTemplate(e) {
		let t = this.lookupBoundDictionaries(e);
		if (t !== void 0) return {
			kind: "node",
			node: t
		};
		let n = this._registry?.lookup(e, this._locale);
		if (n !== void 0) return {
			kind: "node",
			node: n
		};
		let r = this._catalogs[this._locale];
		if (r) {
			let t = p(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: oe(t)
			};
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {}, s = this._locale, c = this.resolveTemplate(i) ?? {
			kind: "icu",
			message: a ?? i
		};
		return (c.kind === "node" ? P(c.node, o, s) : Fe(c.message, o, s)) ?? i;
	}
	t = (e, t, n) => this._(e, t, n);
	date(e, t) {
		if (e == null) return "";
		let n = e instanceof Date ? e : new Date(e);
		return new Intl.DateTimeFormat(this._locale, t).format(n);
	}
	number(e, t) {
		return new Intl.NumberFormat(this._locale, t).format(e);
	}
}, Le = t(null), I = /* @__PURE__ */ new WeakMap(), L = 0, Re = (e) => {
	if (!e) return "base";
	let t = I.get(e);
	if (t) return t;
	L += 1;
	let n = `p${L}`;
	return I.set(e, n), n;
}, ze = 256, R = /* @__PURE__ */ new WeakMap(), z = (e) => typeof e == "object" && !!e, Be = (e, t, n) => `${e}_${t}_${Re(n)}`, Ve = (e, t) => {
	if (!z(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, B = (e, t, n) => {
	if (!z(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= ze && r.clear(), r.set(t, n), n;
}, V = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = "default", He = /[^A-Za-z0-9._&=-]/g, U = /[^A-Za-z0-9._-]/g, Ue = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ue);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, We = (e) => e === void 0 ? H : typeof e == "string" ? W(e, He) : Object.keys(e).sort().map((t) => `${W(t, U)}=${W(String(e[t]), U)}`).join("&"), Ge = (e) => Array.isArray(e) ? e.length === 0 ? [H] : e.map(We) : [We(e)], Ke = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? H : e[0] ?? "default";
}, qe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Je = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ye = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Xe = (e, t) => {
	if (!Je(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? H : Ke(Ge(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => qe(e, n, t, s)).map((t) => Ye(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ze = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Qe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ge(n).join(",") : String(n)}`;
}).join("|") : "", G = "\x1B[0m", $e = "\x1B[34m", et = "\x1B[31m", tt = "\x1B[32m", nt = "\x1B[38;5;3m", rt = (e) => e, it = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = rt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, at = (e, t) => (n, r) => it(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, ot = (e, t = nt, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", et), K("✓", tt), K("⏲", $e);
var st = () => ({}), ct = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), lt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ct.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : lt(e ? `${e}.${String(n)}` : String(n)) }), ut = /* @__PURE__ */ new Set(), dt = (e, t, n) => {
	let r = st()[e];
	return r ? kt(r, t, n) : (ut.has(e) || (at({ log: Te })(typeof window > "u" ? `Dictionary ${ot(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), ut.add(e)), lt(e));
}, ft = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, pt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (ft(e) && ft(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : pt(e[r], t[r]));
		return n;
	}
	return e;
}, mt = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => pt(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ht = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[g] : e[h];
}, gt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? g : h;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, _t = (e, t, n, r, i) => {
	let a = gt(e, V(ht(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, vt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: se,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return mt(o, e, t);
	}
}, yt = J, bt = (e) => J, xt = J, St = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: m }], i = e[m], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => _t(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = V(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, Ct = J, wt = J, Tt = (e) => J, Et = J, Dt = (e, t = !0) => [
	vt(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	yt,
	xt,
	St,
	Tt(e ?? E.defaultLocale),
	Et,
	Ct,
	wt
], Ot = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), kt = (e, t, n) => {
	let { locale: r, selector: i } = Ze(t), a = Be(r ?? E.defaultLocale, Qe(i), n), o = Ve(e, a);
	if (o.hit) return o.content;
	let s = n ?? Dt(r), c = Xe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Ot(e.content, t, s);
	};
	return c === null ? B(e, a, null) : Array.isArray(c) ? B(e, a, c.map(l)) : B(e, a, l(c));
}, At = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", jt = /\{\{\s*(.*?)\s*\}\}/g, Mt = (e, t = {}) => {
	if (!Object.values(t).some(At)) return {
		isSimple: !0,
		parts: e.replace(jt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(jt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Nt = () => {
	try {
		return Object.keys(st());
	} catch {
		return [];
	}
}, Pt = (e, t) => {
	let n = Nt(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return dt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = p(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = p(a(t), e);
		if (n !== void 0) return n;
	}
}, Ft = (e) => {
	let t = {};
	for (let n of Nt()) try {
		Object.assign(t, ie(dt(n, e)));
	} catch {}
	return t;
}, It = () => ({
	lookup: Pt,
	all: Ft
}), Lt = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(ee, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, Rt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Lt({
		...n,
		value: n.children,
		children: n.children
	})
}, zt = J, Bt = (t, r) => {
	let i = Mt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: m }], i = e[m], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => _t(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Bt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, Ht = J, Ut = J, Y = /* @__PURE__ */ new Map(), Wt = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		vt(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		yt,
		bt(e ?? E.defaultLocale),
		xt,
		Tt(e ?? E.defaultLocale),
		Et,
		Ct,
		wt,
		Rt,
		zt,
		Vt,
		Ht,
		Ut
	];
	return Y.set(n, r), r;
}, Gt = (e, t) => kt(e, t, Wt(typeof t == "object" && t ? t.locale : t)), Kt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, qt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Kt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Jt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, Yt = (e = X) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Jt) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Xt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Jt && D.storage.cookies) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Kt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, qt(r, e, i));
			} catch {}
		}
	}
}, Zt = Yt(X), Qt = (e, t) => Xt(e, {
	...X,
	isCookieEnabled: t
}), $t = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, en = ({ children: e }) => ($t(), e), tn = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, nn = ({ children: e }) => (tn(), e), rn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, an = (e, t = E?.locales, n = E?.defaultLocale) => {
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
}, Z = t({
	locale: Zt ?? E?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), on = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: ee } = E ?? {}, [d, f] = l(e ?? Zt ?? t ?? ee);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		rn();
	}, []);
	let te = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), Qt(e, s);
		}
	}), ne = an(d);
	return u(Z.Provider, {
		value: {
			locale: ne,
			setLocale: te,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, sn = ({ children: e, ...t }) => d(on, {
	...t,
	children: [
		u(en, {}),
		u(nn, {}),
		e
	]
}), { defaultLocale: cn, locales: Q } = E ?? {}, ln = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Z) ?? {};
	return {
		locale: n,
		defaultLocale: cn,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Qt(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, un = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), u(Le.Provider, {
		value: i,
		children: u(sn, {
			locale: s,
			children: n
		})
	});
}, dn = (e, t) => {
	let n = new F({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, fn = (...e) => {
	let { locale: t } = ln(), n = e.map((e) => e.key).join("\0");
	return s(() => dn(t, Object.fromEntries(e.map((e) => [e.key, Gt(e, t)]))), [t, n]);
}, pn = (e) => new F({
	...e,
	registry: It()
});
pn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/products/ProductsGrid.tsx";
function mn() {
	let { i18n: e } = fn(te), t = [
		{
			name: e._({
				id: "products.benchmarkCli",
				message: "Benchmark CLI"
			}),
			desc: e._({
				id: "products.benchmarkCliDesc",
				message: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration."
			}),
			price: e._({
				id: "products.free",
				message: "Free"
			})
		},
		{
			name: e._({
				id: "products.benchmarkCloud",
				message: "Benchmark Cloud"
			}),
			desc: e._({
				id: "products.benchmarkCloudDesc",
				message: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards."
			}),
			price: e._({
				id: "products.price.benchmarkCloud",
				message: "$29/mo"
			})
		},
		{
			name: e._({
				id: "products.benchmarkEnterprise",
				message: "Benchmark Enterprise"
			}),
			desc: e._({
				id: "products.benchmarkEnterpriseDesc",
				message: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support."
			}),
			price: e._({
				id: "products.contactUs",
				message: "Contact Us"
			})
		},
		{
			name: e._({
				id: "products.migrationAssistant",
				message: "Migration Assistant"
			}),
			desc: e._({
				id: "products.migrationAssistantDesc",
				message: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime."
			}),
			price: e._({
				id: "products.price.migrationAssistant",
				message: "$99 one-time"
			})
		},
		{
			name: e._({
				id: "products.translationQa",
				message: "Translation QA"
			}),
			desc: e._({
				id: "products.translationQaDesc",
				message: "Automated quality checks for missing translations, pluralization issues, and context errors."
			}),
			price: e._({
				id: "products.price.translationQa",
				message: "$19/mo"
			})
		},
		{
			name: e._({
				id: "products.bundleOptimizer",
				message: "Bundle Optimizer"
			}),
			desc: e._({
				id: "products.bundleOptimizerDesc",
				message: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting."
			}),
			price: e._({
				id: "products.price.bundleOptimizer",
				message: "$49/mo"
			})
		}
	];
	return f("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((t) => f("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [f("div", { children: [f("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: t.name
			}, void 0, !1, {
				fileName: $,
				lineNumber: 80,
				columnNumber: 13
			}, this), f("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: t.desc
			}, void 0, !1, {
				fileName: $,
				lineNumber: 83,
				columnNumber: 13
			}, this)] }, void 0, !0, {
				fileName: $,
				lineNumber: 79,
				columnNumber: 11
			}, this), f("div", {
				className: "flex items-center justify-between",
				children: [f("span", {
					className: "text-sm font-bold text-primary",
					children: t.price
				}, void 0, !1, {
					fileName: $,
					lineNumber: 86,
					columnNumber: 13
				}, this), f("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: e._({
						id: "products.learnMore",
						message: "Learn More"
					})
				}, void 0, !1, {
					fileName: $,
					lineNumber: 87,
					columnNumber: 13
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 85,
				columnNumber: 11
			}, this)]
		}, t.name, !0, {
			fileName: $,
			lineNumber: 75,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 73,
		columnNumber: 5
	}, this);
}
function hn(e, t) {
	let n = pn();
	return n.activate(e), n;
}
var gn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function _n({ children: e }) {
	let t = s(() => hn("en"), []);
	return f(un, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: gn,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var vn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/products/ProductsGrid.wrapper.tsx";
function yn() {
	return f(_n, { children: f(mn, {}, void 0, !1, {
		fileName: vn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: vn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { yn as default };

import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var ee = {
	key: "open-positions",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"seniorFrontendEngineer\":\"Senior Frontend Engineer\",\"buildAndMaintainOurBenchmarking\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\",\"backendEngineer\":\"Backend Engineer\",\"designAndScaleOurCloud\":\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\",\"technicalWriter\":\"Technical Writer\",\"createComprehensiveGuidesApiReferences\":\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\",\"devrelEngineer\":\"DevRel Engineer\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"engageWithTheI18nCommunity\":\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\",\"qaEngineer\":\"QA Engineer\",\"ensureTheAccuracyAndReliability\":\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\",\"openPositions\":\"Open Positions\",\"applyNow\":\"Apply Now\",\"remote\":\"Remote\",\"fullTime\":\"Full-time\",\"partTime\":\"Part-time\",\"engineering\":\"Engineering\",\"documentation\":\"Documentation\",\"community\":\"Community\"},\"fr\":{\"seniorFrontendEngineer\":\"Ingénieur Frontend Senior\",\"buildAndMaintainOurBenchmarking\":\"Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.\",\"backendEngineer\":\"Ingénieur Backend\",\"designAndScaleOurCloud\":\"Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.\",\"technicalWriter\":\"Rédacteur technique\",\"createComprehensiveGuidesApiReferences\":\"Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.\",\"devrelEngineer\":\"Ingénieur DevRel\",\"sanFranciscoRemote\":\"San Francisco / À distance\",\"engageWithTheI18nCommunity\":\"Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.\",\"qaEngineer\":\"Ingénieur QA\",\"ensureTheAccuracyAndReliability\":\"Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.\",\"openPositions\":\"Postes ouverts\",\"applyNow\":\"Postuler maintenant\",\"remote\":\"À distance\",\"fullTime\":\"Temps plein\",\"partTime\":\"Temps partiel\",\"engineering\":\"Ingénierie\",\"documentation\":\"Documentation\",\"community\":\"Communauté\"},\"es\":{\"seniorFrontendEngineer\":\"Ingeniero Frontend Senior\",\"buildAndMaintainOurBenchmarking\":\"Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\",\"backendEngineer\":\"Ingeniero Backend\",\"designAndScaleOurCloud\":\"Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.\",\"technicalWriter\":\"Escritor técnico\",\"createComprehensiveGuidesApiReferences\":\"Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\",\"devrelEngineer\":\"Ingeniero DevRel\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"engageWithTheI18nCommunity\":\"Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.\",\"qaEngineer\":\"Ingeniero QA\",\"ensureTheAccuracyAndReliability\":\"Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.\",\"openPositions\":\"Puestos vacantes\",\"applyNow\":\"Postular ahora\",\"remote\":\"Remoto\",\"fullTime\":\"Tiempo completo\",\"partTime\":\"Tiempo parcial\",\"engineering\":\"Ingeniería\",\"documentation\":\"Documentación\",\"community\":\"Comunidad\"},\"de\":{\"seniorFrontendEngineer\":\"Senior Frontend-Entwickler\",\"buildAndMaintainOurBenchmarking\":\"Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.\",\"backendEngineer\":\"Backend-Entwickler\",\"designAndScaleOurCloud\":\"Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\",\"technicalWriter\":\"Technischer Redakteur\",\"createComprehensiveGuidesApiReferences\":\"Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\",\"devrelEngineer\":\"DevRel-Ingenieur\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"engageWithTheI18nCommunity\":\"Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\",\"qaEngineer\":\"QA-Ingenieur\",\"ensureTheAccuracyAndReliability\":\"Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.\",\"openPositions\":\"Offene Stellen\",\"applyNow\":\"Jetzt bewerben\",\"remote\":\"Remote\",\"fullTime\":\"Vollzeit\",\"partTime\":\"Teilzeit\",\"engineering\":\"Entwicklung\",\"documentation\":\"Dokumentation\",\"community\":\"Community\"},\"it\":{\"seniorFrontendEngineer\":\"Ingegnere Frontend Senior\",\"buildAndMaintainOurBenchmarking\":\"Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\",\"backendEngineer\":\"Ingegnere Backend\",\"designAndScaleOurCloud\":\"Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.\",\"technicalWriter\":\"Scrittore tecnico\",\"createComprehensiveGuidesApiReferences\":\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\",\"devrelEngineer\":\"Ingegnere DevOps\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"engageWithTheI18nCommunity\":\"Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.\",\"qaEngineer\":\"Ingegnere QA\",\"ensureTheAccuracyAndReliability\":\"Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\",\"openPositions\":\"Posizioni aperte\",\"applyNow\":\"Candidati ora\",\"remote\":\"Remoto\",\"fullTime\":\"Tempo pieno\",\"partTime\":\"Part-time\",\"engineering\":\"Ingegneria\",\"documentation\":\"Documentazione\",\"community\":\"Comunità\"},\"pt\":{\"seniorFrontendEngineer\":\"Engenheiro Frontend Sênior\",\"buildAndMaintainOurBenchmarking\":\"Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\",\"backendEngineer\":\"Engenheiro Backend\",\"designAndScaleOurCloud\":\"Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.\",\"technicalWriter\":\"Redator Técnico\",\"createComprehensiveGuidesApiReferences\":\"Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\",\"devrelEngineer\":\"Engenheiro DevRel\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"engageWithTheI18nCommunity\":\"Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.\",\"qaEngineer\":\"Engenheiro QA\",\"ensureTheAccuracyAndReliability\":\"Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.\",\"openPositions\":\"Vagas abertas\",\"applyNow\":\"Candidatar-se agora\",\"remote\":\"Remoto\",\"fullTime\":\"Tempo integral\",\"partTime\":\"Tempo parcial\",\"engineering\":\"Engenharia\",\"documentation\":\"Documentação\",\"community\":\"Comunidade\"},\"zh\":{\"seniorFrontendEngineer\":\"高级前端工程师\",\"buildAndMaintainOurBenchmarking\":\"使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\",\"backendEngineer\":\"后端工程师\",\"designAndScaleOurCloud\":\"设计和扩展我们的云基准测试基础设施，处理每天数千次自动化运行。\",\"technicalWriter\":\"技术文档工程师\",\"createComprehensiveGuidesApiReferences\":\"为我们的基准测试平台创建全面的指南、API 参考和教程。\",\"devrelEngineer\":\"开发者关系工程师\",\"sanFranciscoRemote\":\"旧金山 / 远程\",\"engageWithTheI18nCommunity\":\"通过演讲、工作坊、博客文章和开源贡献与 i18n 社区互动。\",\"qaEngineer\":\"测试工程师\",\"ensureTheAccuracyAndReliability\":\"通过严格的测试和验证，确保基准测试结果的准确性和可靠性。\",\"openPositions\":\"开放职位\",\"applyNow\":\"立即申请\",\"remote\":\"远程\",\"fullTime\":\"全职\",\"partTime\":\"兼职\",\"engineering\":\"工程\",\"documentation\":\"文档\",\"community\":\"社区\"},\"ja\":{\"seniorFrontendEngineer\":\"シニアフロントエンドエンジニア\",\"buildAndMaintainOurBenchmarking\":\"React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。\",\"backendEngineer\":\"バックエンドエンジニア\",\"designAndScaleOurCloud\":\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計し、拡張します。\",\"technicalWriter\":\"テクニカルライター\",\"createComprehensiveGuidesApiReferences\":\"ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。\",\"devrelEngineer\":\"DevRelエンジニア\",\"sanFranciscoRemote\":\"サンフランシスコ / リモート\",\"engageWithTheI18nCommunity\":\"講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じてi18nコミュニティと交流します。\",\"qaEngineer\":\"QAエンジニア\",\"ensureTheAccuracyAndReliability\":\"厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\",\"openPositions\":\"募集中の職種\",\"applyNow\":\"今すぐ応募\",\"remote\":\"リモート\",\"fullTime\":\"フルタイム\",\"partTime\":\"パートタイム\",\"engineering\":\"エンジニアリング\",\"documentation\":\"ドキュメント\",\"community\":\"コミュニティ\"},\"ko\":{\"seniorFrontendEngineer\":\"시니어 프론트엔드 엔지니어\",\"buildAndMaintainOurBenchmarking\":\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.\",\"backendEngineer\":\"백엔드 엔지니어\",\"designAndScaleOurCloud\":\"매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.\",\"technicalWriter\":\"테크니컬 라이터\",\"createComprehensiveGuidesApiReferences\":\"벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.\",\"devrelEngineer\":\"DevRel 엔지니어\",\"sanFranciscoRemote\":\"샌프란시스코 / 원격\",\"engageWithTheI18nCommunity\":\"발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.\",\"qaEngineer\":\"QA 엔지니어\",\"ensureTheAccuracyAndReliability\":\"철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\",\"openPositions\":\"채용 중인 포지션\",\"applyNow\":\"지금 지원하기\",\"remote\":\"원격\",\"fullTime\":\"정규직\",\"partTime\":\"아르바이트\",\"engineering\":\"엔지니어링\",\"documentation\":\"문서화\",\"community\":\"커뮤니티\"},\"ru\":{\"seniorFrontendEngineer\":\"Старший фронтенд-инженер\",\"buildAndMaintainOurBenchmarking\":\"Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.\",\"backendEngineer\":\"Бэкенд-инженер\",\"designAndScaleOurCloud\":\"Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.\",\"technicalWriter\":\"Технический писатель\",\"createComprehensiveGuidesApiReferences\":\"Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.\",\"devrelEngineer\":\"DevRel-инженер\",\"sanFranciscoRemote\":\"Сан-Франциско / Удаленно\",\"engageWithTheI18nCommunity\":\"Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.\",\"qaEngineer\":\"QA-инженер\",\"ensureTheAccuracyAndReliability\":\"Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.\",\"openPositions\":\"Открытые вакансии\",\"applyNow\":\"Подать заявку\",\"remote\":\"Удаленно\",\"fullTime\":\"Полный рабочий день\",\"partTime\":\"Неполный рабочий день\",\"engineering\":\"Разработка\",\"documentation\":\"Документация\",\"community\":\"Сообщество\"}}}")
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
			title: e("seniorFrontendEngineer"),
			location: e("remote"),
			type: e("fullTime"),
			dept: e("engineering"),
			desc: e("seniorFrontendEngineer"),
			description: e("buildAndMaintainOurBenchmarking")
		},
		{
			title: e("backendEngineer"),
			location: e("remote"),
			type: e("fullTime"),
			dept: e("engineering"),
			description: e("designAndScaleOurCloud")
		},
		{
			title: e("technicalWriter"),
			location: e("remote"),
			type: e("partTime"),
			dept: e("documentation"),
			description: e("createComprehensiveGuidesApiReferences")
		},
		{
			title: e("devrelEngineer"),
			location: e("sanFranciscoRemote"),
			type: e("fullTime"),
			dept: e("community"),
			description: e("engageWithTheI18nCommunity")
		},
		{
			title: e("qaEngineer"),
			location: e("remote"),
			type: e("fullTime"),
			dept: e("engineering"),
			description: e("ensureTheAccuracyAndReliability")
		}
	];
	return f(u, { children: [d("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: e("openPositions")
	}), d("div", {
		className: "space-y-4",
		children: t.map((t) => f("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [f("div", { children: [
				d("h3", {
					className: "text-base font-semibold text-foreground",
					children: t.title
				}),
				d("p", {
					className: "text-sm text-muted-foreground",
					children: t.description
				}),
				f("div", {
					className: "mt-2 flex gap-2",
					children: [
						d("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.dept
						}),
						d("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.location
						}),
						d("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.type
						})
					]
				})
			] }), d("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e("applyNow")
			})]
		}, t.title))
	})] });
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

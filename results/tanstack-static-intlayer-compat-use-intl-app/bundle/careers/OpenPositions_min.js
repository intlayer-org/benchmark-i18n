import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { Fragment as p, jsxDEV as m } from "react/jsx-dev-runtime";
var ee = {
	key: "open-positions",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"seniorFrontendEngineer\":\"Senior Frontend Engineer\",\"buildAndMaintainOurBenchmarking\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\",\"backendEngineer\":\"Backend Engineer\",\"designAndScaleOurCloud\":\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\",\"technicalWriter\":\"Technical Writer\",\"createComprehensiveGuidesApiReferences\":\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\",\"devrelEngineer\":\"DevRel Engineer\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"engageWithTheI18nCommunity\":\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\",\"qaEngineer\":\"QA Engineer\",\"ensureTheAccuracyAndReliability\":\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\",\"openPositions\":\"Open Positions\",\"applyNow\":\"Apply Now\",\"remote\":\"Remote\",\"fullTime\":\"Full-time\",\"partTime\":\"Part-time\",\"engineering\":\"Engineering\",\"documentation\":\"Documentation\",\"community\":\"Community\"},\"fr\":{\"seniorFrontendEngineer\":\"Ingénieur Frontend Senior\",\"buildAndMaintainOurBenchmarking\":\"Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.\",\"backendEngineer\":\"Ingénieur Backend\",\"designAndScaleOurCloud\":\"Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.\",\"technicalWriter\":\"Rédacteur technique\",\"createComprehensiveGuidesApiReferences\":\"Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.\",\"devrelEngineer\":\"Ingénieur DevRel\",\"sanFranciscoRemote\":\"San Francisco / À distance\",\"engageWithTheI18nCommunity\":\"Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.\",\"qaEngineer\":\"Ingénieur QA\",\"ensureTheAccuracyAndReliability\":\"Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.\",\"openPositions\":\"Postes ouverts\",\"applyNow\":\"Postuler maintenant\",\"remote\":\"À distance\",\"fullTime\":\"Temps plein\",\"partTime\":\"Temps partiel\",\"engineering\":\"Ingénierie\",\"documentation\":\"Documentation\",\"community\":\"Communauté\"},\"es\":{\"seniorFrontendEngineer\":\"Ingeniero Frontend Senior\",\"buildAndMaintainOurBenchmarking\":\"Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\",\"backendEngineer\":\"Ingeniero Backend\",\"designAndScaleOurCloud\":\"Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.\",\"technicalWriter\":\"Escritor técnico\",\"createComprehensiveGuidesApiReferences\":\"Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\",\"devrelEngineer\":\"Ingeniero DevRel\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"engageWithTheI18nCommunity\":\"Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.\",\"qaEngineer\":\"Ingeniero QA\",\"ensureTheAccuracyAndReliability\":\"Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.\",\"openPositions\":\"Puestos vacantes\",\"applyNow\":\"Postular ahora\",\"remote\":\"Remoto\",\"fullTime\":\"Tiempo completo\",\"partTime\":\"Tiempo parcial\",\"engineering\":\"Ingeniería\",\"documentation\":\"Documentación\",\"community\":\"Comunidad\"},\"de\":{\"seniorFrontendEngineer\":\"Senior Frontend-Entwickler\",\"buildAndMaintainOurBenchmarking\":\"Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.\",\"backendEngineer\":\"Backend-Entwickler\",\"designAndScaleOurCloud\":\"Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\",\"technicalWriter\":\"Technischer Redakteur\",\"createComprehensiveGuidesApiReferences\":\"Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\",\"devrelEngineer\":\"DevRel-Ingenieur\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"engageWithTheI18nCommunity\":\"Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\",\"qaEngineer\":\"QA-Ingenieur\",\"ensureTheAccuracyAndReliability\":\"Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.\",\"openPositions\":\"Offene Stellen\",\"applyNow\":\"Jetzt bewerben\",\"remote\":\"Remote\",\"fullTime\":\"Vollzeit\",\"partTime\":\"Teilzeit\",\"engineering\":\"Entwicklung\",\"documentation\":\"Dokumentation\",\"community\":\"Community\"},\"it\":{\"seniorFrontendEngineer\":\"Ingegnere Frontend Senior\",\"buildAndMaintainOurBenchmarking\":\"Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\",\"backendEngineer\":\"Ingegnere Backend\",\"designAndScaleOurCloud\":\"Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.\",\"technicalWriter\":\"Scrittore tecnico\",\"createComprehensiveGuidesApiReferences\":\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\",\"devrelEngineer\":\"Ingegnere DevOps\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"engageWithTheI18nCommunity\":\"Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.\",\"qaEngineer\":\"Ingegnere QA\",\"ensureTheAccuracyAndReliability\":\"Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\",\"openPositions\":\"Posizioni aperte\",\"applyNow\":\"Candidati ora\",\"remote\":\"Remoto\",\"fullTime\":\"Tempo pieno\",\"partTime\":\"Part-time\",\"engineering\":\"Ingegneria\",\"documentation\":\"Documentazione\",\"community\":\"Comunità\"},\"pt\":{\"seniorFrontendEngineer\":\"Engenheiro Frontend Sênior\",\"buildAndMaintainOurBenchmarking\":\"Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\",\"backendEngineer\":\"Engenheiro Backend\",\"designAndScaleOurCloud\":\"Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.\",\"technicalWriter\":\"Redator Técnico\",\"createComprehensiveGuidesApiReferences\":\"Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\",\"devrelEngineer\":\"Engenheiro DevRel\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"engageWithTheI18nCommunity\":\"Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.\",\"qaEngineer\":\"Engenheiro QA\",\"ensureTheAccuracyAndReliability\":\"Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.\",\"openPositions\":\"Vagas abertas\",\"applyNow\":\"Candidatar-se agora\",\"remote\":\"Remoto\",\"fullTime\":\"Tempo integral\",\"partTime\":\"Tempo parcial\",\"engineering\":\"Engenharia\",\"documentation\":\"Documentação\",\"community\":\"Comunidade\"},\"zh\":{\"seniorFrontendEngineer\":\"高级前端工程师\",\"buildAndMaintainOurBenchmarking\":\"使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\",\"backendEngineer\":\"后端工程师\",\"designAndScaleOurCloud\":\"设计和扩展我们的云基准测试基础设施，处理每天数千次自动化运行。\",\"technicalWriter\":\"技术文档工程师\",\"createComprehensiveGuidesApiReferences\":\"为我们的基准测试平台创建全面的指南、API 参考和教程。\",\"devrelEngineer\":\"开发者关系工程师\",\"sanFranciscoRemote\":\"旧金山 / 远程\",\"engageWithTheI18nCommunity\":\"通过演讲、工作坊、博客文章和开源贡献与 i18n 社区互动。\",\"qaEngineer\":\"测试工程师\",\"ensureTheAccuracyAndReliability\":\"通过严格的测试和验证，确保基准测试结果的准确性和可靠性。\",\"openPositions\":\"开放职位\",\"applyNow\":\"立即申请\",\"remote\":\"远程\",\"fullTime\":\"全职\",\"partTime\":\"兼职\",\"engineering\":\"工程\",\"documentation\":\"文档\",\"community\":\"社区\"},\"ja\":{\"seniorFrontendEngineer\":\"シニアフロントエンドエンジニア\",\"buildAndMaintainOurBenchmarking\":\"React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。\",\"backendEngineer\":\"バックエンドエンジニア\",\"designAndScaleOurCloud\":\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計し、拡張します。\",\"technicalWriter\":\"テクニカルライター\",\"createComprehensiveGuidesApiReferences\":\"ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。\",\"devrelEngineer\":\"DevRelエンジニア\",\"sanFranciscoRemote\":\"サンフランシスコ / リモート\",\"engageWithTheI18nCommunity\":\"講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じてi18nコミュニティと交流します。\",\"qaEngineer\":\"QAエンジニア\",\"ensureTheAccuracyAndReliability\":\"厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\",\"openPositions\":\"募集中の職種\",\"applyNow\":\"今すぐ応募\",\"remote\":\"リモート\",\"fullTime\":\"フルタイム\",\"partTime\":\"パートタイム\",\"engineering\":\"エンジニアリング\",\"documentation\":\"ドキュメント\",\"community\":\"コミュニティ\"},\"ko\":{\"seniorFrontendEngineer\":\"시니어 프론트엔드 엔지니어\",\"buildAndMaintainOurBenchmarking\":\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.\",\"backendEngineer\":\"백엔드 엔지니어\",\"designAndScaleOurCloud\":\"매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.\",\"technicalWriter\":\"테크니컬 라이터\",\"createComprehensiveGuidesApiReferences\":\"벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.\",\"devrelEngineer\":\"DevRel 엔지니어\",\"sanFranciscoRemote\":\"샌프란시스코 / 원격\",\"engageWithTheI18nCommunity\":\"발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.\",\"qaEngineer\":\"QA 엔지니어\",\"ensureTheAccuracyAndReliability\":\"철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\",\"openPositions\":\"채용 중인 포지션\",\"applyNow\":\"지금 지원하기\",\"remote\":\"원격\",\"fullTime\":\"정규직\",\"partTime\":\"아르바이트\",\"engineering\":\"엔지니어링\",\"documentation\":\"문서화\",\"community\":\"커뮤니티\"},\"ru\":{\"seniorFrontendEngineer\":\"Старший фронтенд-инженер\",\"buildAndMaintainOurBenchmarking\":\"Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.\",\"backendEngineer\":\"Бэкенд-инженер\",\"designAndScaleOurCloud\":\"Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.\",\"technicalWriter\":\"Технический писатель\",\"createComprehensiveGuidesApiReferences\":\"Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.\",\"devrelEngineer\":\"DevRel-инженер\",\"sanFranciscoRemote\":\"Сан-Франциско / Удаленно\",\"engageWithTheI18nCommunity\":\"Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.\",\"qaEngineer\":\"QA-инженер\",\"ensureTheAccuracyAndReliability\":\"Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.\",\"openPositions\":\"Открытые вакансии\",\"applyNow\":\"Подать заявку\",\"remote\":\"Удаленно\",\"fullTime\":\"Полный рабочий день\",\"partTime\":\"Неполный рабочий день\",\"engineering\":\"Разработка\",\"documentation\":\"Документация\",\"community\":\"Сообщество\"}}}")
}, h = /* @__PURE__ */ new WeakMap(), te = 0, ne = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	te += 1;
	let n = `p${te}`;
	return h.set(e, n), n;
}, re = 256, g = /* @__PURE__ */ new WeakMap(), ie = (e) => typeof e == "object" && !!e, ae = (e, t, n) => `${e}_${t}_${ne(n)}`, oe = (e, t) => {
	if (!ie(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, _ = (e, t, n) => {
	if (!ie(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, se = "translation", v = "enumeration", ce = "plural", y = "insertion", le = "object", ue = "array", de = "markdown", b = "html", fe = "gender", pe = "select", x = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ue,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: le,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = S(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = S(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, me = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, he = (e, t) => e[me(e, t) ?? "fallback"], ge = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), C = "default", _e = /[^A-Za-z0-9._&=-]/g, ve = /[^A-Za-z0-9._-]/g, ye = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, w = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ye);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, be = (e) => e === void 0 ? C : typeof e == "string" ? w(e, _e) : Object.keys(e).sort().map((t) => `${w(t, ve)}=${w(String(e[t]), ve)}`).join("&"), xe = (e) => Array.isArray(e) ? e.length === 0 ? [C] : e.map(be) : [be(e)], Se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? C : e[0] ?? "default";
}, Ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, we = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Te = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ee = (e, t) => {
	if (!we(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? C : Se(xe(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ce(e, n, t, s)).map((t) => Te(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, De = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, T = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? xe(n).join(",") : String(n)}`;
}).join("|") : "", E = {
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
}, Oe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, O = "\x1B[0m", ke = "\x1B[34m", Ae = "\x1B[31m", je = "\x1B[32m", Me = "\x1B[36m", Ne = (e) => e, Pe = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ne(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Fe = (e, t) => (n, r) => Pe(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), k = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? O : n : O}` : e;
k("✗", Ae), k("✓", je), k("⏲", ke);
var Ie = 50, A = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Set(), Le = (e) => {
	j.has(e) || (j.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Re = {
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
}, ze = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Le(e), Re[e]);
};
function M(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = A.get(a);
	o || (o = /* @__PURE__ */ new Map(), A.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ze(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ie && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Be = (e, t, n) => e[M("PluralRules", n).select(t)] ?? e.other, Ve = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (N(e) && N(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : P(e[r], t[r]));
		return n;
	}
	return e;
}, He = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => P(e, t));
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ue = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[b] : e[de];
}, We = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? b : de;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ge = (e, t, n, r, i) => {
	let a = We(e, ge(Ue(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, I = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ke = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? I : {
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
		return He(o, e, t);
	}
}, L = I, qe = (e) => I, Je = I, Ye = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? I : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => Ge(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ge(i, e);
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
}, Xe = I, Ze = I, Qe = (e) => I, $e = I, et = (e, t = !0) => [
	Ke(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	L,
	Je,
	Ye,
	Qe(e ?? E.defaultLocale),
	$e,
	Xe,
	Ze
], tt = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), nt = (e, t, n) => {
	let { locale: r, selector: i } = De(t), a = ae(r ?? E.defaultLocale, T(i), n), o = oe(e, a);
	if (o.hit) return o.content;
	let s = n ?? et(r), c = Ee(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return tt(e.content, t, s);
	};
	return c === null ? _(e, a, null) : Array.isArray(c) ? _(e, a, c.map(l)) : _(e, a, l(c));
}, rt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", it = /\{\{\s*(.*?)\s*\}\}/g, at = (e, t = {}) => {
	if (!Object.values(t).some(rt)) return {
		isSimple: !0,
		parts: e.replace(it, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(it), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, R = (e) => x(v, e), ot = (e) => x(fe, e), st = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, z = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = st(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, ct = /* @__PURE__ */ new Set([
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
]), lt = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ut = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(lt)) {
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
				let e = ct.has(i.toLowerCase());
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
}, B = (e, t) => x(b, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ut(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return z(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => z(await e)), typeof n == "string") return z(n);
	try {
		return z(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), V = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, H = (e) => x(y, e, { fields: (() => {
	if (typeof e == "string") return V(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => V(await e)), typeof t == "string") return V(t);
	try {
		return V(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), dt = (e) => x(ce, e), ft = (e, t) => x(pe, e, { variable: t }), pt = (e) => {
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
}, U = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? B(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? B(t) : H(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? B(t) : t;
		if (t.type === "argument") return t.format ? H(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : H(`{{${t.name}}}`);
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
					e[i] = U(a);
				}
				return e.__intlayer_icu_var = t.name, R(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = U(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return dt(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = U(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? ot({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : ft(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = U(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, R(e);
		}
	}
	return e.map((e) => U([e]));
}, mt = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return U(pt(e));
		} catch {
			return e;
		}
	}
}, ht = (e) => S(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...mt
	}]
}), gt = (e) => {
	let t = 0, n = () => {
		let n = [], a = "";
		for (; t < e.length;) {
			let o = e[t];
			if (o === "{" && e[t + 1] === "{") a &&= (n.push(a), ""), t += 2, n.push(r());
			else if (o === "{") a &&= (n.push(a), ""), t++, n.push(i());
			else if (o === "}") break;
			else a += o, t++;
		}
		return a && n.push(a), n;
	}, r = () => {
		let n = "";
		for (; t < e.length;) {
			if (e[t] === "}" && e[t + 1] === "}") return t += 2, {
				type: "argument",
				name: n.trim()
			};
			n += e[t], t++;
		}
		throw Error("Unclosed i18next variable");
	}, i = () => {
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
				if (t++, i === "plural" || i === "select") {
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
}, W = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? B(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? B(t) : H(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? B(t) : t;
		if (t.type === "argument") return t.format ? H(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : H(`{{${t.name}}}`);
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
					e[i] = W(a);
				}
				return e.__intlayer_icu_var = t.name, R(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = W(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return dt(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = W(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? ot({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : ft(e, t.name);
		}
	}
	return e.map((e) => W([e]));
}, _t = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return W(gt(e));
		} catch {
			return e;
		}
	}
}, vt = (e) => S(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		..._t
	}]
}), yt = (e, t, n = ".") => {
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
}, bt = (e) => {
	let t = 0, n = [], r = "";
	for (; t < e.length;) {
		let i = e[t];
		if (i === "{") {
			r &&= (n.push(r), ""), t++;
			let i = "";
			for (; t < e.length && e[t] !== "}";) i += e[t], t++;
			t < e.length && t++, n.push({
				type: "argument",
				name: i.trim()
			});
		} else r += i, t++;
	}
	return r && n.push(r), n;
}, xt = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(bt);
}, G = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return H(t);
}, St = (e) => {
	if (e.length === 1) return G(e[0]);
	let t = {};
	return e.length === 2 ? R({
		1: G(e[0]),
		fallback: G(e[1])
	}) : e.length === 3 ? R({
		0: G(e[0]),
		1: G(e[1]),
		fallback: G(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = G(n) : t[r.toString()] = G(n);
	}), t.__intlayer_vue_i18n_var = "count", R(t));
}, Ct = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return St(xt(e));
		} catch {
			return e;
		}
	}
}, wt = (e) => S(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...Ct
	}]
}), Tt = [
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
}, Et = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? M("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? M("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : M("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return M("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Dt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : Et(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Dt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[y], t, n);
	if (r.nodeType === "html") return J(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[ce];
		return J(Be(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[v], i = Tt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Tt.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = M("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? he(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[pe], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(Ve(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[fe];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ot = {
	icu: (e) => ht(e),
	i18next: (e) => vt(e),
	"vue-i18n": (e) => wt(e)
}, kt = (e, t = {}, n = "en", r = "icu") => {
	let i = J(typeof e == "string" ? Ot[r](e) : e, t, n);
	return typeof i == "string" ? i : String(i ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: Y(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, At = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, jt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = jt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Mt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Mt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Nt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Pt(e, (e) => yt(t, r(e)), r);
}, Pt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return kt(i, r, e, "icu");
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = At(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: jt(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = At(t), o = r(e, i);
			return o === void 0 ? n(e) : Mt(Y(o), a);
		}
	});
}, Ft = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : d(u, { children: e });
	return new Proxy(r, { get(e, r, i) {
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
}, It = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Ft({
		...n,
		value: n.children,
		children: n.children
	})
}, Lt = I, Rt = (e, n) => {
	let i = at(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, zt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? I : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => Ge(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Rt(i, e);
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
}, Bt = I, Vt = I, X = /* @__PURE__ */ new Map(), Ht = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		Ke(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		L,
		qe(e ?? E.defaultLocale),
		Je,
		Qe(e ?? E.defaultLocale),
		$e,
		Xe,
		Ze,
		It,
		Lt,
		zt,
		Bt,
		Vt
	];
	return X.set(n, r), r;
}, Ut = (e, t) => nt(e, t, Ht(typeof t == "object" && t ? t.locale : t)), Wt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Gt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Wt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Kt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, qt = (e = Z) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Kt) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Jt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Kt && D.storage.cookies) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Wt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Gt(r, e, i));
			} catch {}
		}
	}
}, Yt = qt(Z), Xt = (e, t) => Jt(e, {
	...Z,
	isCookieEnabled: t
}), Zt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Qt = ({ children: e }) => (Zt(), e), $t = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, en = ({ children: e }) => ($t(), e), tn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, nn = (e, t = E?.locales, n = E?.defaultLocale) => {
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
}, Q = n({
	locale: Yt ?? E?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), rn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = E ?? {}, [f, p] = l(e ?? Yt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		tn();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Xt(e, s);
		}
	}), ee = nn(f);
	return d(Q.Provider, {
		value: {
			locale: ee,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, an = ({ children: e, ...t }) => f(rn, {
	...t,
	children: [
		d(Qt, {}),
		d(en, {}),
		e
	]
}), on = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${T(i)}` : i;
	return s(() => Ut(e, i), [e.key, o]);
}, sn = ((e, t) => {
	let { locale: n } = a(Q) ?? {};
	return Nt(n, on(e), t);
}), cn = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Fe({ log: Oe })(`${k("IntlProvider", Me)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(an, {
	locale: e,
	children: t
}, String(e))), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/careers/OpenPositions.tsx";
function ln() {
	let e = sn(ee), t = [
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
	return m(p, { children: [m("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: e("openPositions")
	}, void 0, !1, {
		fileName: $,
		lineNumber: 50,
		columnNumber: 7
	}, this), m("div", {
		className: "space-y-4",
		children: t.map((t) => m("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [m("div", { children: [
				m("h3", {
					className: "text-base font-semibold text-foreground",
					children: t.title
				}, void 0, !1, {
					fileName: $,
					lineNumber: 60,
					columnNumber: 15
				}, this),
				m("p", {
					className: "text-sm text-muted-foreground",
					children: t.description
				}, void 0, !1, {
					fileName: $,
					lineNumber: 63,
					columnNumber: 15
				}, this),
				m("div", {
					className: "mt-2 flex gap-2",
					children: [
						m("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.dept
						}, void 0, !1, {
							fileName: $,
							lineNumber: 65,
							columnNumber: 17
						}, this),
						m("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.location
						}, void 0, !1, {
							fileName: $,
							lineNumber: 68,
							columnNumber: 17
						}, this),
						m("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: t.type
						}, void 0, !1, {
							fileName: $,
							lineNumber: 71,
							columnNumber: 17
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 64,
					columnNumber: 15
				}, this)
			] }, void 0, !0, {
				fileName: $,
				lineNumber: 59,
				columnNumber: 13
			}, this), m("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e("applyNow")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 76,
				columnNumber: 13
			}, this)]
		}, t.title, !0, {
			fileName: $,
			lineNumber: 55,
			columnNumber: 11
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 53,
		columnNumber: 7
	}, this)] }, void 0, !0, {
		fileName: $,
		lineNumber: 49,
		columnNumber: 5
	}, this);
}
var un = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function dn({ children: t }) {
	return m(e.Suspense, {
		fallback: null,
		children: m(cn, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: un,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: un,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var fn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/careers/OpenPositions.wrapper.tsx";
function pn() {
	return m(dn, { children: m(ln, {}, void 0, !1, {
		fileName: fn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: fn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { pn as default };

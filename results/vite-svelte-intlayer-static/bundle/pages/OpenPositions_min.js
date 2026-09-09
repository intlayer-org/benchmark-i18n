import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, get as r, writable as i } from "svelte/store";
var a = {
	key: "open-positions",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"applyNow\":\"Apply Now\",\"openPositions\":\"Open Positions\",\"ensureTheAccuracyAndReliability\":\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\",\"engineering2\":\"Engineering\",\"remote3\":\"Remote\",\"qaEngineer\":\"QA Engineer\",\"engageWithTheI18nCommunity\":\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\",\"community\":\"Community\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"devrelEngineer\":\"DevRel Engineer\",\"createComprehensiveGuidesApiReferences\":\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\",\"documentation\":\"Documentation\",\"remote2\":\"Remote\",\"technicalWriter\":\"Technical Writer\",\"designAndScaleOurCloud\":\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\",\"engineering1\":\"Engineering\",\"remote1\":\"Remote\",\"backendEngineer\":\"Backend Engineer\",\"buildAndMaintainOurBenchmarking\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\",\"engineering\":\"Engineering\",\"remote\":\"Remote\",\"seniorFrontendEngineer\":\"Senior Frontend Engineer\"},\"fr\":{\"applyNow\":\"Postulez maintenant\",\"openPositions\":\"Postes ouverts\",\"ensureTheAccuracyAndReliability\":\"Assurer l'exactitude et la fiabilité des résultats de benchmark grâce à des tests et validations rigoureux.\",\"engineering2\":\"Ingénierie\",\"remote3\":\"À distance\",\"qaEngineer\":\"Ingénieur QA\",\"engageWithTheI18nCommunity\":\"S'engager avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.\",\"community\":\"Communauté\",\"sanFranciscoRemote\":\"San Francisco / À distance\",\"devrelEngineer\":\"Ingénieur DevRel\",\"createComprehensiveGuidesApiReferences\":\"Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.\",\"documentation\":\"Documentation\",\"remote2\":\"À distance\",\"technicalWriter\":\"Rédacteur technique\",\"designAndScaleOurCloud\":\"Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de lancements automatisés par jour.\",\"engineering1\":\"Ingénierie\",\"remote1\":\"À distance\",\"backendEngineer\":\"Ingénieur backend\",\"buildAndMaintainOurBenchmarking\":\"Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.\",\"engineering\":\"Ingénierie\",\"remote\":\"À distance\",\"seniorFrontendEngineer\":\"Ingénieur frontend senior\"},\"es\":{\"applyNow\":\"Aplicar ahora\",\"openPositions\":\"Posiciones abiertas\",\"ensureTheAccuracyAndReliability\":\"Garantice la precisión и la confiabilidad de los resultados del benchmark mediante pruebas и validaciones rigurosas.\",\"engineering2\":\"Ingeniería\",\"remote3\":\"Remoto\",\"qaEngineer\":\"Ingeniero de QA\",\"engageWithTheI18nCommunity\":\"Interactúe con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.\",\"community\":\"Comunidad\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"devrelEngineer\":\"Ingeniero DevRel\",\"createComprehensiveGuidesApiReferences\":\"Cree guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\",\"documentation\":\"Documentación\",\"remote2\":\"Remoto\",\"technicalWriter\":\"Redactor técnico\",\"designAndScaleOurCloud\":\"Diseñe и escale nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.\",\"engineering1\":\"Ingeniería\",\"remote1\":\"Remoto\",\"backendEngineer\":\"Ingeniero de backend\",\"buildAndMaintainOurBenchmarking\":\"Cree и mantenga nuestro panel de benchmarking и las herramientas de desarrollo utilizando React, TypeScript и Vite.\",\"engineering\":\"Ingeniería\",\"remote\":\"Remoto\",\"seniorFrontendEngineer\":\"Ingeniero de frontend sénior\"},\"de\":{\"applyNow\":\"Jetzt bewerben\",\"openPositions\":\"Offene Stellen\",\"ensureTheAccuracyAndReliability\":\"Gewährleistung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.\",\"engineering2\":\"Engineering\",\"remote3\":\"Remote\",\"qaEngineer\":\"QA-Ingenieur\",\"engageWithTheI18nCommunity\":\"Tauschen Sie sich mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge aus.\",\"community\":\"Community\",\"sanFranciscoRemote\":\"San Francisco / Remote\",\"devrelEngineer\":\"DevRel-Ingenieur\",\"createComprehensiveGuidesApiReferences\":\"Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\",\"documentation\":\"Dokumentation\",\"remote2\":\"Remote\",\"technicalWriter\":\"Technischer Redakteur\",\"designAndScaleOurCloud\":\"Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Läufen verarbeitet.\",\"engineering1\":\"Engineering\",\"remote1\":\"Remote\",\"backendEngineer\":\"Backend-Ingenieur\",\"buildAndMaintainOurBenchmarking\":\"Erstellen und warten Sie unser Benchmarking-Dashboard und Entwickler-Tools mit React, TypeScript und Vite.\",\"engineering\":\"Engineering\",\"remote\":\"Remote\",\"seniorFrontendEngineer\":\"Senior Frontend-Ingenieur\"},\"it\":{\"applyNow\":\"Candidati ora\",\"openPositions\":\"Posizioni aperte\",\"ensureTheAccuracyAndReliability\":\"Garantire l'accuratezza e l'affidabilità dei risultati del benchmark attraverso test e validazioni rigorosi.\",\"engineering2\":\"Ingegneria\",\"remote3\":\"Remoto\",\"qaEngineer\":\"Ingegnere QA\",\"engageWithTheI18nCommunity\":\"Interagisci con la community i18n attraverso talk, workshop, post sul blog e contributi open source.\",\"community\":\"Community\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"devrelEngineer\":\"Ingegnere DevRel\",\"createComprehensiveGuidesApiReferences\":\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\",\"documentation\":\"Documentazione\",\"remote2\":\"Remoto\",\"technicalWriter\":\"Scrittore tecnico\",\"designAndScaleOurCloud\":\"Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatizzate ogni giorno.\",\"engineering1\":\"Ingegneria\",\"remote1\":\"Remoto\",\"backendEngineer\":\"Ingegnere backend\",\"buildAndMaintainOurBenchmarking\":\"Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\",\"engineering\":\"Ingegneria\",\"remote\":\"Remoto\",\"seniorFrontendEngineer\":\"Ingegnere frontend senior\"},\"pt\":{\"applyNow\":\"Candidatar-se agora\",\"openPositions\":\"Vagas Abertas\",\"ensureTheAccuracyAndReliability\":\"Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.\",\"engineering2\":\"Engenharia\",\"remote3\":\"Remoto\",\"qaEngineer\":\"Engenheiro de QA\",\"engageWithTheI18nCommunity\":\"Envolver-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.\",\"community\":\"Comunidade\",\"sanFranciscoRemote\":\"San Francisco / Remoto\",\"devrelEngineer\":\"Engenheiro DevRel\",\"createComprehensiveGuidesApiReferences\":\"Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\",\"documentation\":\"Documentação\",\"remote2\":\"Remoto\",\"technicalWriter\":\"Redator Técnico\",\"designAndScaleOurCloud\":\"Projetar e escalar nossa infraestrutura de benchmarking em nuvem, lidando com milhares de execuções automatizadas diariamente.\",\"engineering1\":\"Engenharia\",\"remote1\":\"Remoto\",\"backendEngineer\":\"Engenheiro Backend\",\"buildAndMaintainOurBenchmarking\":\"Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\",\"engineering\":\"Engenharia\",\"remote\":\"Remoto\",\"seniorFrontendEngineer\":\"Engenheiro Frontend Sênior\"},\"zh\":{\"applyNow\":\"立即申请\",\"openPositions\":\"开放职位\",\"ensureTheAccuracyAndReliability\":\"通过严格的测试和验证确保基准测试结果的准确性和可靠性。\",\"engineering2\":\"工程\",\"remote3\":\"远程\",\"qaEngineer\":\"QA 工程师\",\"engageWithTheI18nCommunity\":\"通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\",\"community\":\"社区\",\"sanFranciscoRemote\":\"旧金山 / 远程\",\"devrelEngineer\":\"DevRel 工程师\",\"createComprehensiveGuidesApiReferences\":\"为我们的基准测试平台创建全面的指南、API 参考和教程。\",\"documentation\":\"文档\",\"remote2\":\"远程\",\"technicalWriter\":\"技术作家\",\"designAndScaleOurCloud\":\"设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。\",\"engineering1\":\"工程\",\"remote1\":\"远程\",\"backendEngineer\":\"后端工程师\",\"buildAndMaintainOurBenchmarking\":\"使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。\",\"engineering\":\"工程\",\"remote\":\"远程\",\"seniorFrontendEngineer\":\"高级前端工程师\"},\"ja\":{\"applyNow\":\"今すぐ応募\",\"openPositions\":\"募集職種\",\"ensureTheAccuracyAndReliability\":\"厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\",\"engineering2\":\"エンジニアリング\",\"remote3\":\"リモート\",\"qaEngineer\":\"QA エンジニア\",\"engageWithTheI18nCommunity\":\"講演、ワークショップ、ブログ記事、オープンソースへの貢献を通じて、i18n コミュニティと交流します。\",\"community\":\"コミュニティ\",\"sanFranciscoRemote\":\"サンフランシスコ / リモート\",\"devrelEngineer\":\"DevRel エンジニア\",\"createComprehensiveGuidesApiReferences\":\"当社のベンチマークプラットフォーム向けの包括的なガイド、API リファレンス、およびチュートリアルを作成します。\",\"documentation\":\"ドキュメント\",\"remote2\":\"リモート\",\"technicalWriter\":\"テクニカルライター\",\"designAndScaleOurCloud\":\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計および拡張します。\",\"engineering1\":\"エンジニアリング\",\"remote1\":\"リモート\",\"backendEngineer\":\"バックエンドエンジニア\",\"buildAndMaintainOurBenchmarking\":\"React、TypeScript、および Vite を使用して、ベンチマークダッシュボードと開発者ツールを構築および維持します。\",\"engineering\":\"エンジニアリング\",\"remote\":\"リモート\",\"seniorFrontendEngineer\":\"シニアフロントエンドエンジニア\"},\"ko\":{\"applyNow\":\"지금 지원하기\",\"openPositions\":\"채용 중인 포지션\",\"ensureTheAccuracyAndReliability\":\"엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\",\"engineering2\":\"엔지니어링\",\"remote3\":\"원격\",\"qaEngineer\":\"QA 엔지니어\",\"engageWithTheI18nCommunity\":\"강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하세요.\",\"community\":\"커뮤니티\",\"sanFranciscoRemote\":\"샌프란시스코 / 원격\",\"devrelEngineer\":\"DevRel 엔지니어\",\"createComprehensiveGuidesApiReferences\":\"벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 자습서를 만듭니다.\",\"documentation\":\"문서\",\"remote2\":\"원격\",\"technicalWriter\":\"기술 작가\",\"designAndScaleOurCloud\":\"매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.\",\"engineering1\":\"엔지니어링\",\"remote1\":\"원격\",\"backendEngineer\":\"백엔드 엔지니어\",\"buildAndMaintainOurBenchmarking\":\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.\",\"engineering\":\"엔지니어링\",\"remote\":\"원격\",\"seniorFrontendEngineer\":\"시니어 프론트엔드 엔지니어\"},\"ru\":{\"applyNow\":\"Подать заявку\",\"openPositions\":\"Открытые вакансии\",\"ensureTheAccuracyAndReliability\":\"Обеспечение точности и надежности результатов бенчмаркинга посредством строгого тестирования и валидации.\",\"engineering2\":\"Разработка\",\"remote3\":\"Удаленно\",\"qaEngineer\":\"QA-инженер\",\"engageWithTheI18nCommunity\":\"Взаимодействие с сообществом i18n посредством выступлений, семинаров, постов в блогах и вклада в open source.\",\"community\":\"Сообщество\",\"sanFranciscoRemote\":\"Сан-Франциско / Удаленно\",\"devrelEngineer\":\"DevRel-инженер\",\"createComprehensiveGuidesApiReferences\":\"Создание исчерпывающих руководств, справок по API и туториалов для нашей платформы бенчмаркинга.\",\"documentation\":\"Документация\",\"remote2\":\"Удаленно\",\"technicalWriter\":\"Технический писатель\",\"designAndScaleOurCloud\":\"Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\",\"engineering1\":\"Разработка\",\"remote1\":\"Удаленно\",\"backendEngineer\":\"Бэкенд-инженер\",\"buildAndMaintainOurBenchmarking\":\"Создание и поддержка нашего дашборда для бенчмаркинга и инструментов разработки с использованием React, TypeScript и Vite.\",\"engineering\":\"Разработка\",\"remote\":\"Удаленно\",\"seniorFrontendEngineer\":\"Старший фронтенд-инженер\"}}}")
}, o = {
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
}, s = o?.defaultLocale, c = (() => {
	let { subscribe: e, set: t, update: r } = i({ locale: s });
	return {
		subscribe: e,
		setLocale: (e) => r((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: s })
	};
})(), l = Symbol("intlayer"), u = () => t(l), d = "default", f = /[^A-Za-z0-9._&=-]/g, p = /[^A-Za-z0-9._-]/g, m = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, h = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, m);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, g = (e) => e === void 0 ? d : typeof e == "string" ? h(e, f) : Object.keys(e).sort().map((t) => `${h(t, p)}=${h(String(e[t]), p)}`).join("&"), _ = (e) => Array.isArray(e) ? e.length === 0 ? [d] : e.map(g) : [g(e)], v = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? d : e[0] ?? "default";
}, y = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, b = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, x = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, S = (e, t) => {
	if (!b(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? d : v(_(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => y(e, n, t, s)).map((t) => x(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, C = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, ee = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? _(n).join(",") : String(n)}`;
}).join("|") : "", w = "translation", T = "object", E = "array", D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => D(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: E,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: T,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = D(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = D(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, O = /* @__PURE__ */ new WeakMap(), k = 0, A = (e) => {
	if (!e) return "base";
	let t = O.get(e);
	if (t) return t;
	k += 1;
	let n = `p${k}`;
	return O.set(e, n), n;
}, j = 256, M = /* @__PURE__ */ new WeakMap(), N = (e) => typeof e == "object" && !!e, te = (e, t, n) => `${e}_${t}_${A(n)}`, ne = (e, t) => {
	if (!N(e)) return { hit: !1 };
	let n = M.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, P = (e, t, n) => {
	if (!N(e)) return n;
	let r = M.get(e);
	return r || (r = /* @__PURE__ */ new Map(), M.set(e, r)), r.size >= j && r.clear(), r.set(t, n), n;
}, re = (e, t = !0) => [
	V(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	H,
	W,
	G,
	J(e ?? o.defaultLocale),
	Y,
	K,
	q
], F = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), I = (e, t, n) => {
	let { locale: r, selector: i } = C(t), a = te(r ?? o.defaultLocale, ee(i), n), s = ne(e, a);
	if (s.hit) return s.content;
	let c = n ?? re(r), l = S(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return F(e.content, t, c);
	};
	return l === null ? P(e, a, null) : Array.isArray(l) ? P(e, a, l.map(u)) : P(e, a, u(l));
}, L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (L(e) && L(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : R(e[r], t[r]));
		return n;
	}
	return e;
}, z = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => R(e, t));
}, B = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, V = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? B : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: w,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return z(o, e, t);
	}
}, H = B, U = (e) => B, W = B, G = B, K = B, q = B, J = (e) => B, Y = B;
function X(t, n) {
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
var ie = (e) => {
	let t = !!X.prototype?.$destroy, n;
	if (n = t ? class extends X {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => X(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, Z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => ie({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, ae = Z, oe = B, se = B, ce = B, Q = /* @__PURE__ */ new Map(), le = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		V(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		H,
		U(e ?? o.defaultLocale),
		W,
		J(e ?? o.defaultLocale),
		Y,
		K,
		q,
		Z,
		ae,
		oe,
		se,
		ce
	];
	return Q.set(n, r), r;
}, $ = (e, t) => I(e, t, le(typeof t == "object" && t ? t.locale : t)), ue = (e, t) => {
	let r = u();
	return n([c], ([n]) => {
		let i = r?.locale ?? n.locale;
		return $(e, t ?? i);
	});
}, de = e.from_html("<div class=\"flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between\"><div><h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <div class=\"mt-2 flex gap-2\"><span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span> <span class=\"rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground\"> </span></div></div> <button type=\"button\" class=\"shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div>"), fe = e.from_html("<h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"space-y-4\"></div>", 1);
function pe(t, n) {
	e.push(n, !1);
	let i = () => e.store_get(c, "$content", o), [o, s] = e.setup_stores(), c = ue(a), l = [
		{
			title: r(c).seniorFrontendEngineer,
			location: r(c).remote,
			type: "Full-time",
			dept: r(c).engineering,
			desc: r(c).buildAndMaintainOurBenchmarking
		},
		{
			title: r(c).backendEngineer,
			location: r(c).remote1,
			type: "Full-time",
			dept: r(c).engineering1,
			desc: r(c).designAndScaleOurCloud
		},
		{
			title: r(c).technicalWriter,
			location: r(c).remote2,
			type: "Part-time",
			dept: r(c).documentation,
			desc: r(c).createComprehensiveGuidesApiReferences
		},
		{
			title: r(c).devrelEngineer,
			location: r(c).sanFranciscoRemote,
			type: "Full-time",
			dept: r(c).community,
			desc: r(c).engageWithTheI18nCommunity
		},
		{
			title: r(c).qaEngineer,
			location: r(c).remote3,
			type: "Full-time",
			dept: r(c).engineering2,
			desc: r(c).ensureTheAccuracyAndReliability
		}
	];
	e.init();
	var u = fe(), d = e.first_child(u), f = e.only_child(d, !0), p = e.sibling(d, 2);
	e.each(p, 5, () => l, (e) => e.title, (t, n) => {
		var r = de(), a = e.child(r), o = e.child(a), s = e.only_child(o, !0), c = e.sibling(o, 2), l = e.only_child(c, !0), u = e.sibling(c, 2), d = e.child(u), f = e.only_child(d, !0), p = e.sibling(d, 2), m = e.only_child(p, !0), h = e.sibling(p, 2), g = e.only_child(h, !0);
		e.reset(u), e.reset(a);
		var _ = e.sibling(a, 2), v = e.only_child(_, !0);
		e.reset(r), e.template_effect(() => {
			e.set_text(s, e.get(n).title), e.set_text(l, e.get(n).desc), e.set_text(f, e.get(n).dept), e.set_text(m, e.get(n).location), e.set_text(g, e.get(n).type), e.set_text(v, i().applyNow);
		}), e.append(t, r);
	}), e.reset(p), e.template_effect(() => e.set_text(f, i().openPositions)), e.append(t, u), e.pop(), s();
}
export { pe as default };

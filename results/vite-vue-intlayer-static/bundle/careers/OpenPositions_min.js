import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as h } from "vue";
var g = {
	key: "open-positions",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"c\":\"Open Positions\",\"a\":\"Apply Now\",\"b\":[{\"title\":\"Senior Frontend Engineer\",\"location\":\"Remote\",\"type\":\"Full-time\",\"dept\":\"Engineering\",\"desc\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\"},{\"title\":\"Backend Engineer\",\"location\":\"Remote\",\"type\":\"Full-time\",\"dept\":\"Engineering\",\"desc\":\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\"},{\"title\":\"Technical Writer\",\"location\":\"Remote\",\"type\":\"Part-time\",\"dept\":\"Documentation\",\"desc\":\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\"},{\"title\":\"DevRel Engineer\",\"location\":\"San Francisco / Remote\",\"type\":\"Full-time\",\"dept\":\"Community\",\"desc\":\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\"},{\"title\":\"QA Engineer\",\"location\":\"Remote\",\"type\":\"Full-time\",\"dept\":\"Engineering\",\"desc\":\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\"}]},\"fr\":{\"c\":\"Postes ouverts\",\"a\":\"Postuler\",\"b\":[{\"title\":\"Ingénieur front-end senior\",\"location\":\"À distance\",\"type\":\"Temps plein\",\"dept\":\"Ingénierie\",\"desc\":\"Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.\"},{\"title\":\"Ingénieur back-end\",\"location\":\"À distance\",\"type\":\"Temps plein\",\"dept\":\"Ingénierie\",\"desc\":\"Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.\"},{\"title\":\"Rédacteur·rice technique\",\"location\":\"À distance\",\"type\":\"Temps partiel\",\"dept\":\"Documentation\",\"desc\":\"Guides, références d'API et tutoriels pour la plateforme de benchmark.\"},{\"title\":\"Ingénieur DevRel\",\"location\":\"San Francisco / télétravail\",\"type\":\"Temps plein\",\"dept\":\"Communauté\",\"desc\":\"Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.\"},{\"title\":\"Ingénieur QA\",\"location\":\"À distance\",\"type\":\"Temps plein\",\"dept\":\"Ingénierie\",\"desc\":\"Garantir la fiabilité des résultats par des tests et validations rigoureux.\"}]},\"es\":{\"c\":\"Posiciones abiertas\",\"a\":\"Postular ahora\",\"b\":[{\"title\":\"Ingeniero Frontend Senior\",\"location\":\"Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Ingeniería\",\"desc\":\"Construya y mantenga nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\"},{\"title\":\"Ingeniero Backend\",\"location\":\"Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Ingeniería\",\"desc\":\"Diseñe y escale nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automáticas diariamente.\"},{\"title\":\"Redactor Técnico\",\"location\":\"Remoto\",\"type\":\"Medio tiempo\",\"dept\":\"Documentación\",\"desc\":\"Cree guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\"},{\"title\":\"Ingeniero de DevRel\",\"location\":\"San Francisco / Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Comunidad\",\"desc\":\"Participe con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.\"},{\"title\":\"Ingeniero de QA\",\"location\":\"Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Ingeniería\",\"desc\":\"Garantice la precisión y confiabilidad de los resultados de los benchmarks mediante pruebas y validaciones rigurosas.\"}]},\"de\":{\"c\":\"Offene Stellen\",\"a\":\"Jetzt bewerben\",\"b\":[{\"title\":\"Senior Frontend-Entwickler\",\"location\":\"Remote\",\"type\":\"Vollzeit\",\"dept\":\"Engineering\",\"desc\":\"Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwickler-Tools mit React, TypeScript und Vite.\"},{\"title\":\"Backend-Entwickler\",\"location\":\"Remote\",\"type\":\"Vollzeit\",\"dept\":\"Engineering\",\"desc\":\"Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\"},{\"title\":\"Technischer Redakteur\",\"location\":\"Remote\",\"type\":\"Teilzeit\",\"dept\":\"Dokumentation\",\"desc\":\"Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\"},{\"title\":\"DevRel-Ingenieur\",\"location\":\"San Francisco / Remote\",\"type\":\"Vollzeit\",\"dept\":\"Community\",\"desc\":\"Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\"},{\"title\":\"QA-Ingenieur\",\"location\":\"Remote\",\"type\":\"Vollzeit\",\"dept\":\"Engineering\",\"desc\":\"Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.\"}]},\"it\":{\"c\":\"Posizioni aperte\",\"a\":\"Candidati ora\",\"b\":[{\"title\":\"Ingegnere Frontend Senior\",\"location\":\"Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Ingegneria\",\"desc\":\"Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\"},{\"title\":\"Ingegnere Backend\",\"location\":\"Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Ingegneria\",\"desc\":\"Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\"},{\"title\":\"Scrittore tecnico\",\"location\":\"Remoto\",\"type\":\"Part-time\",\"dept\":\"Documentazione\",\"desc\":\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\"},{\"title\":\"Ingegnere DevRel\",\"location\":\"San Francisco / Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Comunità\",\"desc\":\"Interagisci con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.\"},{\"title\":\"Ingegnere QA\",\"location\":\"Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Ingegneria\",\"desc\":\"Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\"}]},\"pt\":{\"c\":\"Vagas Abertas\",\"a\":\"Candidatar-se agora\",\"b\":[{\"title\":\"Engenheiro Frontend Sênior\",\"location\":\"Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Engenharia\",\"desc\":\"Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\"},{\"title\":\"Engenheiro Backend\",\"location\":\"Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Engenharia\",\"desc\":\"Projete e dimensione nossa infraestrutura de benchmarking em nuvem, lidando com milhares de execuções automatizadas diariamente.\"},{\"title\":\"Escritor Técnico\",\"location\":\"Remoto\",\"type\":\"Meio período\",\"dept\":\"Documentação\",\"desc\":\"Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\"},{\"title\":\"Engenheiro DevRel\",\"location\":\"San Francisco / Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Comunidade\",\"desc\":\"Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.\"},{\"title\":\"Engenheiro de QA\",\"location\":\"Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Engenharia\",\"desc\":\"Garanta a precisão e a confiabilidade dos resultados do benchmark por meio de testes e validações rigorosos.\"}]},\"zh\":{\"c\":\"开放职位\",\"a\":\"立即申请\",\"b\":[{\"title\":\"高级前端工程师\",\"location\":\"远程\",\"type\":\"全职\",\"dept\":\"工程部\",\"desc\":\"使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\"},{\"title\":\"后端工程师\",\"location\":\"远程\",\"type\":\"全职\",\"dept\":\"工程部\",\"desc\":\"设计和扩展我们的云基准测试基础设施，每天处理数千次自动运行。\"},{\"title\":\"技术文档工程师\",\"location\":\"远程\",\"type\":\"兼职\",\"dept\":\"文档\",\"desc\":\"为我们的基准测试平台创建全面的指南、API 参考和教程。\"},{\"title\":\"开发者关系工程师\",\"location\":\"旧金山 / 远程\",\"type\":\"全职\",\"dept\":\"社区\",\"desc\":\"通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\"},{\"title\":\"测试工程师\",\"location\":\"远程\",\"type\":\"全职\",\"dept\":\"工程部\",\"desc\":\"通过严格的测试和验证，确保基准测试结果的准确性和可靠性。\"}]},\"ja\":{\"c\":\"募集中の職種\",\"a\":\"今すぐ応募\",\"b\":[{\"title\":\"シニアフロントエンドエンジニア\",\"location\":\"リモート\",\"type\":\"正社員\",\"dept\":\"エンジニアリング\",\"desc\":\"React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。\"},{\"title\":\"バックエンドエンジニア\",\"location\":\"リモート\",\"type\":\"正社員\",\"dept\":\"エンジニアリング\",\"desc\":\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計し、拡張します。\"},{\"title\":\"テクニカルライター\",\"location\":\"リモート\",\"type\":\"アルバイト・パート\",\"dept\":\"ドキュメンテーション\",\"desc\":\"ベンチマークプラットフォーム向けの包括的なガイド、APIリファレンス、およびチュートリアルを作成します。\"},{\"title\":\"DevRelエンジニア\",\"location\":\"サンフランシスコ / リモート\",\"type\":\"正社員\",\"dept\":\"コミュニティ\",\"desc\":\"講演、ワークショップ、ブログ記事、オープンソースへの貢献を通じて、i18nコミュニティと交流します。\"},{\"title\":\"QAエンジニア\",\"location\":\"リモート\",\"type\":\"正社員\",\"dept\":\"エンジニアリング\",\"desc\":\"厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\"}]},\"ko\":{\"c\":\"채용 중인 직무\",\"a\":\"지금 지원하기\",\"b\":[{\"title\":\"시니어 프론트엔드 엔지니어\",\"location\":\"원격\",\"type\":\"정규직\",\"dept\":\"엔지니어링\",\"desc\":\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.\"},{\"title\":\"백엔드 엔지니어\",\"location\":\"원격\",\"type\":\"정규직\",\"dept\":\"엔지니어링\",\"desc\":\"매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.\"},{\"title\":\"기술 작가\",\"location\":\"원격\",\"type\":\"아르바이트\",\"dept\":\"문서화\",\"desc\":\"벤치마킹 플랫폼을 위한 종합 가이드, API 참조 및 튜토리얼을 작성합니다.\"},{\"title\":\"DevRel 엔지니어\",\"location\":\"샌프란시스코 / 원격\",\"type\":\"정규직\",\"dept\":\"커뮤니티\",\"desc\":\"강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.\"},{\"title\":\"QA 엔지니어\",\"location\":\"원격\",\"type\":\"정규직\",\"dept\":\"엔지니어링\",\"desc\":\"엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\"}]},\"ru\":{\"c\":\"Открытые вакансии\",\"a\":\"Подать заявку\",\"b\":[{\"title\":\"Старший фронтенд-разработчик\",\"location\":\"Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Разработка\",\"desc\":\"Разработка и поддержка нашей панели мониторинга бенчмарков и инструментов для разработчиков с использованием React, TypeScript и Vite.\"},{\"title\":\"Бэкенд-разработчик\",\"location\":\"Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Разработка\",\"desc\":\"Проектирование и масштабирование нашей облачной инфраструктуры для бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\"},{\"title\":\"Технический писатель\",\"location\":\"Удаленно\",\"type\":\"Частичная занятость\",\"dept\":\"Документация\",\"desc\":\"Создание подробных руководств, справочников API и обучающих материалов для нашей платформы бенчмаркинга.\"},{\"title\":\"DevRel-инженер\",\"location\":\"Сан-Франциско / Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Сообщество\",\"desc\":\"Взаимодействие с сообществом i18n посредством выступлений, семинаров, постов в блогах и вклада в открытый исходный код.\"},{\"title\":\"QA-инженер\",\"location\":\"Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Разработка\",\"desc\":\"Обеспечение точности и надежности результатов бенчмарков посредством тщательного тестирования и валидации.\"}]}}}")
}, _ = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return _({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return l(o);
}, v = /* @__PURE__ */ new WeakMap(), y = 0, te = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ne = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, S = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, w = "translation", T = "object", ie = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ie,
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
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, oe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, le = (e, t) => {
	if (!se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ae(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => oe(e, n, t, s)).map((t) => ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, de = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", P = {
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
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, L = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
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
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, fe = R, U = R, W = R, G = (e) => R, K = R, pe = (e, t = !0) => [
	z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	B,
	H,
	fe,
	G(e ?? P.defaultLocale),
	K,
	U,
	W
], me = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), he = (e, t, n) => {
	let { locale: r, selector: i } = ue(t), a = re(r ?? P.defaultLocale, de(i), n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? pe(r), c = le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return me(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => _({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return l(a);
	}
}, _e = R, ve = R, ye = R, q = /* @__PURE__ */ new Map(), be = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		B,
		V(e ?? P.defaultLocale),
		H,
		G(e ?? P.defaultLocale),
		K,
		U,
		W,
		ge,
		_e,
		ve,
		ye
	];
	return q.set(n, r), r;
}, J = (e, t) => he(e, t, be(typeof t == "object" && t ? t.locale : t)), xe = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Se = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Ce = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), we = (e, n) => {
	let r = a() ? s(xe) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? P.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), l = t(() => o.value.locale ?? i.value), u = ee({});
	h([
		() => m(e),
		() => l.value,
		() => o.value.selector
	], ([e, t, n]) => {
		u.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let f = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => Y(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = e.concat(r), s = Y(u.value, o);
			if (s === void 0 || X(s) && !Z(s)) return f(o);
			if (Se(s)) return Ce(t(() => Y(u.value, o)));
			if (typeof s == "function") {
				let t = Y(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => Y(u.value, o)?.(...e);
			}
			let c = t(() => Y(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(u.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return f([]);
}, Te = i({
	__name: "OpenPositions",
	setup(e, { expose: t }) {
		t();
		let { c: n, a: r, b: i } = we(g), a = {
			title: n,
			applyNow: r,
			openings: i
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), Ee = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, De = { class: "mb-6 text-2xl font-bold text-foreground" }, Oe = { class: "space-y-4" }, ke = { class: "text-base font-semibold text-foreground" }, Ae = { class: "text-sm text-muted-foreground" }, $ = { class: "mt-2 flex gap-2" }, je = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, Me = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, Ne = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" }, Pe = {
	type: "button",
	class: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function Fe(t, i, a, o, s, c) {
	return u(), n(e, null, [r("h2", De, p(o.title), 1), r("div", Oe, [(u(!0), n(e, null, f(o.openings, (e) => (u(), n("div", {
		key: e.title,
		class: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
	}, [r("div", null, [
		r("h3", ke, p(e.title), 1),
		r("p", Ae, p(e.desc), 1),
		r("div", $, [
			r("span", je, p(e.dept), 1),
			r("span", Me, p(e.location), 1),
			r("span", Ne, p(e.type), 1)
		])
	]), r("button", Pe, p(o.applyNow), 1)]))), 128))])], 64);
}
var Ie = Ee(Te, [["render", Fe], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/careers/OpenPositions.vue"]]);
export { Ie as default };

import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, openBlock, ref, renderList, shallowRef, toDisplayString, toValue, watch } from "vue";
var open_positions_default = {
	key: "open-positions",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"c\":\"Open Positions\",\"a\":\"Apply Now\",\"b\":[{\"title\":\"Senior Frontend Engineer\",\"location\":\"Remote\",\"type\":\"Full-time\",\"dept\":\"Engineering\",\"desc\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\"},{\"title\":\"Backend Engineer\",\"location\":\"Remote\",\"type\":\"Full-time\",\"dept\":\"Engineering\",\"desc\":\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\"},{\"title\":\"Technical Writer\",\"location\":\"Remote\",\"type\":\"Part-time\",\"dept\":\"Documentation\",\"desc\":\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\"},{\"title\":\"DevRel Engineer\",\"location\":\"San Francisco / Remote\",\"type\":\"Full-time\",\"dept\":\"Community\",\"desc\":\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\"},{\"title\":\"QA Engineer\",\"location\":\"Remote\",\"type\":\"Full-time\",\"dept\":\"Engineering\",\"desc\":\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\"}]},\"fr\":{\"c\":\"Postes ouverts\",\"a\":\"Postuler\",\"b\":[{\"title\":\"Ingénieur front-end senior\",\"location\":\"À distance\",\"type\":\"Temps plein\",\"dept\":\"Ingénierie\",\"desc\":\"Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.\"},{\"title\":\"Ingénieur back-end\",\"location\":\"À distance\",\"type\":\"Temps plein\",\"dept\":\"Ingénierie\",\"desc\":\"Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.\"},{\"title\":\"Rédacteur·rice technique\",\"location\":\"À distance\",\"type\":\"Temps partiel\",\"dept\":\"Documentation\",\"desc\":\"Guides, références d'API et tutoriels pour la plateforme de benchmark.\"},{\"title\":\"Ingénieur DevRel\",\"location\":\"San Francisco / télétravail\",\"type\":\"Temps plein\",\"dept\":\"Communauté\",\"desc\":\"Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.\"},{\"title\":\"Ingénieur QA\",\"location\":\"À distance\",\"type\":\"Temps plein\",\"dept\":\"Ingénierie\",\"desc\":\"Garantir la fiabilité des résultats par des tests et validations rigoureux.\"}]},\"es\":{\"c\":\"Posiciones abiertas\",\"a\":\"Postular ahora\",\"b\":[{\"title\":\"Ingeniero Frontend Senior\",\"location\":\"Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Ingeniería\",\"desc\":\"Construya y mantenga nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\"},{\"title\":\"Ingeniero Backend\",\"location\":\"Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Ingeniería\",\"desc\":\"Diseñe y escale nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automáticas diariamente.\"},{\"title\":\"Redactor Técnico\",\"location\":\"Remoto\",\"type\":\"Medio tiempo\",\"dept\":\"Documentación\",\"desc\":\"Cree guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\"},{\"title\":\"Ingeniero de DevRel\",\"location\":\"San Francisco / Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Comunidad\",\"desc\":\"Participe con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.\"},{\"title\":\"Ingeniero de QA\",\"location\":\"Remoto\",\"type\":\"Tiempo completo\",\"dept\":\"Ingeniería\",\"desc\":\"Garantice la precisión y confiabilidad de los resultados de los benchmarks mediante pruebas y validaciones rigurosas.\"}]},\"de\":{\"c\":\"Offene Stellen\",\"a\":\"Jetzt bewerben\",\"b\":[{\"title\":\"Senior Frontend-Entwickler\",\"location\":\"Remote\",\"type\":\"Vollzeit\",\"dept\":\"Engineering\",\"desc\":\"Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwickler-Tools mit React, TypeScript und Vite.\"},{\"title\":\"Backend-Entwickler\",\"location\":\"Remote\",\"type\":\"Vollzeit\",\"dept\":\"Engineering\",\"desc\":\"Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\"},{\"title\":\"Technischer Redakteur\",\"location\":\"Remote\",\"type\":\"Teilzeit\",\"dept\":\"Dokumentation\",\"desc\":\"Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\"},{\"title\":\"DevRel-Ingenieur\",\"location\":\"San Francisco / Remote\",\"type\":\"Vollzeit\",\"dept\":\"Community\",\"desc\":\"Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\"},{\"title\":\"QA-Ingenieur\",\"location\":\"Remote\",\"type\":\"Vollzeit\",\"dept\":\"Engineering\",\"desc\":\"Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.\"}]},\"it\":{\"c\":\"Posizioni aperte\",\"a\":\"Candidati ora\",\"b\":[{\"title\":\"Ingegnere Frontend Senior\",\"location\":\"Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Ingegneria\",\"desc\":\"Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\"},{\"title\":\"Ingegnere Backend\",\"location\":\"Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Ingegneria\",\"desc\":\"Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\"},{\"title\":\"Scrittore tecnico\",\"location\":\"Remoto\",\"type\":\"Part-time\",\"dept\":\"Documentazione\",\"desc\":\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\"},{\"title\":\"Ingegnere DevRel\",\"location\":\"San Francisco / Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Comunità\",\"desc\":\"Interagisci con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.\"},{\"title\":\"Ingegnere QA\",\"location\":\"Remoto\",\"type\":\"Tempo pieno\",\"dept\":\"Ingegneria\",\"desc\":\"Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\"}]},\"pt\":{\"c\":\"Vagas Abertas\",\"a\":\"Candidatar-se agora\",\"b\":[{\"title\":\"Engenheiro Frontend Sênior\",\"location\":\"Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Engenharia\",\"desc\":\"Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\"},{\"title\":\"Engenheiro Backend\",\"location\":\"Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Engenharia\",\"desc\":\"Projete e dimensione nossa infraestrutura de benchmarking em nuvem, lidando com milhares de execuções automatizadas diariamente.\"},{\"title\":\"Escritor Técnico\",\"location\":\"Remoto\",\"type\":\"Meio período\",\"dept\":\"Documentação\",\"desc\":\"Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\"},{\"title\":\"Engenheiro DevRel\",\"location\":\"San Francisco / Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Comunidade\",\"desc\":\"Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.\"},{\"title\":\"Engenheiro de QA\",\"location\":\"Remoto\",\"type\":\"Tempo integral\",\"dept\":\"Engenharia\",\"desc\":\"Garanta a precisão e a confiabilidade dos resultados do benchmark por meio de testes e validações rigorosos.\"}]},\"zh\":{\"c\":\"开放职位\",\"a\":\"立即申请\",\"b\":[{\"title\":\"高级前端工程师\",\"location\":\"远程\",\"type\":\"全职\",\"dept\":\"工程部\",\"desc\":\"使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\"},{\"title\":\"后端工程师\",\"location\":\"远程\",\"type\":\"全职\",\"dept\":\"工程部\",\"desc\":\"设计和扩展我们的云基准测试基础设施，每天处理数千次自动运行。\"},{\"title\":\"技术文档工程师\",\"location\":\"远程\",\"type\":\"兼职\",\"dept\":\"文档\",\"desc\":\"为我们的基准测试平台创建全面的指南、API 参考和教程。\"},{\"title\":\"开发者关系工程师\",\"location\":\"旧金山 / 远程\",\"type\":\"全职\",\"dept\":\"社区\",\"desc\":\"通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\"},{\"title\":\"测试工程师\",\"location\":\"远程\",\"type\":\"全职\",\"dept\":\"工程部\",\"desc\":\"通过严格的测试和验证，确保基准测试结果的准确性和可靠性。\"}]},\"ja\":{\"c\":\"募集中の職種\",\"a\":\"今すぐ応募\",\"b\":[{\"title\":\"シニアフロントエンドエンジニア\",\"location\":\"リモート\",\"type\":\"正社員\",\"dept\":\"エンジニアリング\",\"desc\":\"React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールを構築および保守します。\"},{\"title\":\"バックエンドエンジニア\",\"location\":\"リモート\",\"type\":\"正社員\",\"dept\":\"エンジニアリング\",\"desc\":\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計し、拡張します。\"},{\"title\":\"テクニカルライター\",\"location\":\"リモート\",\"type\":\"アルバイト・パート\",\"dept\":\"ドキュメンテーション\",\"desc\":\"ベンチマークプラットフォーム向けの包括的なガイド、APIリファレンス、およびチュートリアルを作成します。\"},{\"title\":\"DevRelエンジニア\",\"location\":\"サンフランシスコ / リモート\",\"type\":\"正社員\",\"dept\":\"コミュニティ\",\"desc\":\"講演、ワークショップ、ブログ記事、オープンソースへの貢献を通じて、i18nコミュニティと交流します。\"},{\"title\":\"QAエンジニア\",\"location\":\"リモート\",\"type\":\"正社員\",\"dept\":\"エンジニアリング\",\"desc\":\"厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\"}]},\"ko\":{\"c\":\"채용 중인 직무\",\"a\":\"지금 지원하기\",\"b\":[{\"title\":\"시니어 프론트엔드 엔지니어\",\"location\":\"원격\",\"type\":\"정규직\",\"dept\":\"엔지니어링\",\"desc\":\"React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.\"},{\"title\":\"백엔드 엔지니어\",\"location\":\"원격\",\"type\":\"정규직\",\"dept\":\"엔지니어링\",\"desc\":\"매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.\"},{\"title\":\"기술 작가\",\"location\":\"원격\",\"type\":\"아르바이트\",\"dept\":\"문서화\",\"desc\":\"벤치마킹 플랫폼을 위한 종합 가이드, API 참조 및 튜토리얼을 작성합니다.\"},{\"title\":\"DevRel 엔지니어\",\"location\":\"샌프란시스코 / 원격\",\"type\":\"정규직\",\"dept\":\"커뮤니티\",\"desc\":\"강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.\"},{\"title\":\"QA 엔지니어\",\"location\":\"원격\",\"type\":\"정규직\",\"dept\":\"엔지니어링\",\"desc\":\"엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\"}]},\"ru\":{\"c\":\"Открытые вакансии\",\"a\":\"Подать заявку\",\"b\":[{\"title\":\"Старший фронтенд-разработчик\",\"location\":\"Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Разработка\",\"desc\":\"Разработка и поддержка нашей панели мониторинга бенчмарков и инструментов для разработчиков с использованием React, TypeScript и Vite.\"},{\"title\":\"Бэкенд-разработчик\",\"location\":\"Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Разработка\",\"desc\":\"Проектирование и масштабирование нашей облачной инфраструктуры для бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\"},{\"title\":\"Технический писатель\",\"location\":\"Удаленно\",\"type\":\"Частичная занятость\",\"dept\":\"Документация\",\"desc\":\"Создание подробных руководств, справочников API и обучающих материалов для нашей платформы бенчмаркинга.\"},{\"title\":\"DevRel-инженер\",\"location\":\"Сан-Франциско / Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Сообщество\",\"desc\":\"Взаимодействие с сообществом i18n посредством выступлений, семинаров, постов в блогах и вклада в открытый исходный код.\"},{\"title\":\"QA-инженер\",\"location\":\"Удаленно\",\"type\":\"Полная занятость\",\"dept\":\"Разработка\",\"desc\":\"Обеспечение точности и надежности результатов бенчмарков посредством тщательного тестирования и валидации.\"}]}}}")
};
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	return Object.setPrototypeOf(l, String.prototype), Object.assign(l, {
		render: c,
		toString: () => String(o.value ?? ""),
		valueOf: () => o.value,
		[Symbol.toPrimitive]: () => o.value,
		toJSON: () => o.value,
		get raw() {
			return o.value;
		},
		set raw(e) {
			o.value = e;
		},
		get value() {
			return o.value;
		},
		use(e) {
			return n$1({
				value: o.value,
				children: () => s(e),
				additionalProps: a
			});
		},
		__update(e) {
			s = e.render, this.raw = e.raw;
		},
		...a
	}), markRaw(l);
};
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
};
var internationalization = {
	"locales": [
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
	"requiredLocales": [
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
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
}), getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, b$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { children: n, ...r }) => {
		let i = (t) => n$1({
			...r,
			value: t,
			children: t
		}), s = i(n);
		if (typeof n != "function") return s;
		let c = (...e) => i(n(...e));
		Object.setPrototypeOf(c, Object.getPrototypeOf(s));
		for (let e of Object.getOwnPropertyNames(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		return markRaw(c);
	}
}, S = fallbackPlugin, w = fallbackPlugin, T = fallbackPlugin, E = /* @__PURE__ */ new Map(), D = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (E.has(n)) return E.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		b$1,
		S,
		w,
		T
	];
	return E.set(n, r), r;
}, n = (n, r) => getDictionary(n, r, D(r)), i = Symbol("intlayer");
var m = (e, t) => t.reduce((e, t) => e?.[t], e), h$1 = (e) => typeof e == "object" && !!e, g = (e) => typeof e == "function" || h$1(e) && ("render" in e || "setup" in e), _ = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, v = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : g(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
})), y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return v(() => e.value);
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
}), b = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, b = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), x = computed(() => (a === void 0 ? void 0 : toValue(a)) ?? b.value), S = shallowRef({});
	watch([() => toValue(r), () => x.value], ([t, n$2]) => {
		S.value = n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let C = (e) => new Proxy({}, {
		get(t, r, i) {
			if (r === "__v_isRef") return !0;
			let a = computed(() => m(S.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return v(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = m(S.value, o);
			if (s === void 0 || h$1(s) && !g(s)) return C(o);
			if (_(s)) return y(computed(() => m(S.value, o)));
			let c = computed(() => m(S.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = m(S.value, e);
			return h$1(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return C([]);
};
var OpenPositions_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "OpenPositions",
	setup(__props, { expose: __expose }) {
		__expose();
		const { c: title, a: applyNow, b: openings } = b(open_positions_default);
		const __returned__ = {
			title,
			applyNow,
			openings
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "mb-6 text-2xl font-bold text-foreground" };
var _hoisted_2 = { class: "space-y-4" };
var _hoisted_3 = { class: "text-base font-semibold text-foreground" };
var _hoisted_4 = { class: "text-sm text-muted-foreground" };
var _hoisted_5 = { class: "mt-2 flex gap-2" };
var _hoisted_6 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_7 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_8 = { class: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground" };
var _hoisted_9 = {
	type: "button",
	class: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h2", _hoisted_1, toDisplayString($setup.title), 1), createElementVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.openings, (o) => {
		return openBlock(), createElementBlock("div", {
			key: o.title,
			class: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
		}, [createElementVNode("div", null, [
			createElementVNode("h3", _hoisted_3, toDisplayString(o.title), 1),
			createElementVNode("p", _hoisted_4, toDisplayString(o.desc), 1),
			createElementVNode("div", _hoisted_5, [
				createElementVNode("span", _hoisted_6, toDisplayString(o.dept), 1),
				createElementVNode("span", _hoisted_7, toDisplayString(o.location), 1),
				createElementVNode("span", _hoisted_8, toDisplayString(o.type), 1)
			])
		]), createElementVNode("button", _hoisted_9, toDisplayString($setup.applyNow), 1)]);
	}), 128))])], 64);
}
var OpenPositions_default = _plugin_vue_export_helper_default(OpenPositions_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/src/components/pages/careers/OpenPositions.vue"]]);
export { OpenPositions_default as default };

import { Fragment, Profiler, createContext, createElement, isValidElement, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var open_positions_default = {
	key: "open-positions",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"r": "Senior Frontend Engineer",
				"c": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
				"b": "Backend Engineer",
				"f": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
				"s": "Technical Writer",
				"e": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
				"g": "DevRel Engineer",
				"q": "San Francisco / Remote",
				"i": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
				"o": "QA Engineer",
				"k": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
				"m": "Open Positions",
				"a": "Apply Now",
				"p": "Remote",
				"l": "Full-time",
				"n": "Part-time",
				"j": "Engineering",
				"h": "Documentation",
				"d": "Community"
			},
			"fr": {
				"r": "Ingénieur Frontend Senior",
				"c": "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement utilisant React, TypeScript et Vite.",
				"b": "Ingénieur Backend",
				"f": "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de lancements automatisés par jour.",
				"s": "Rédacteur Technique",
				"e": "Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.",
				"g": "Ingénieur DevRel",
				"q": "San Francisco / Télétravail",
				"i": "S'engager avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.",
				"o": "Ingénieur QA",
				"k": "Assurer la précision et la fiabilité des résultats de benchmark via des tests rigoureux et une validation.",
				"m": "Postes Ouverts",
				"a": "Postuler Maintenant",
				"p": "Télétravail",
				"l": "Temps plein",
				"n": "Temps partiel",
				"j": "Ingénierie",
				"h": "Documentation",
				"d": "Communauté"
			},
			"es": {
				"r": "Ingeniero Frontend Principal",
				"c": "Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo usando React, TypeScript y Vite.",
				"b": "Ingeniero Backend",
				"f": "Diseñar y escalar nuestra infraestructura de benchmarking en la nube manejando miles de ejecuciones automatizadas diarias.",
				"s": "Redactor Técnico",
				"e": "Crear guías completas, referencias API y tutoriales para nuestra plataforma de benchmarking.",
				"g": "Ingeniero DevRel",
				"q": "San Francisco / Remoto",
				"i": "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
				"o": "Ingeniero QA",
				"k": "Asegurar la precisión y fiabilidad de los resultados de benchmark a través de pruebas y validaciones rigurosas.",
				"m": "Puestos Abiertos",
				"a": "Postular Ahora",
				"p": "Remoto",
				"l": "Tiempo completo",
				"n": "Tiempo parcial",
				"j": "Ingeniería",
				"h": "Documentación",
				"d": "Comunidad"
			},
			"de": {
				"r": "Senior Frontend-Entwickler",
				"c": "Entwickeln und pflegen Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
				"b": "Backend-Entwickler",
				"f": "Entwurf und Skalierung unserer Cloud-Benchmarking-Infrastruktur für Tausende von täglichen automatisierten Durchläufen.",
				"s": "Technischer Redakteur",
				"e": "Erstellen Sie umfassende Anleitungen, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
				"g": "DevRel-Ingenieur",
				"q": "San Francisco / Remote",
				"i": "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
				"o": "QA-Ingenieur",
				"k": "Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.",
				"m": "Offene Stellen",
				"a": "Jetzt bewerben",
				"p": "Remote",
				"l": "Vollzeit",
				"n": "Teilzeit",
				"j": "Engineering",
				"h": "Dokumentation",
				"d": "Community"
			},
			"it": {
				"r": "Ingegnere frontend senior",
				"c": "Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
				"b": "Ingegnere backend",
				"f": "Progetta e ridimensiona la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
				"s": "Redattore tecnico",
				"e": "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
				"g": "Ingegnere DevRel",
				"q": "San Francisco / Remoto",
				"i": "Collabora con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
				"o": "Ingegnere QA",
				"k": "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
				"m": "Posizioni aperte",
				"a": "Candidati ora",
				"p": "Remoto",
				"l": "Tempo pieno",
				"n": "Part-time",
				"j": "Ingegneria",
				"h": "Documentazione",
				"d": "Comunità"
			},
			"pt": {
				"r": "Engenheiro Frontend Sênior",
				"c": "Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
				"b": "Engenheiro Backend",
				"f": "Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.",
				"s": "Redator Técnico",
				"e": "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
				"g": "Engenheiro DevRel",
				"q": "San Francisco / Remoto",
				"i": "Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
				"o": "Engenheiro QA",
				"k": "Garanta a precisão e a confiabilidade dos resultados dos benchmarks por meio de testes e validações rigorosos.",
				"m": "Vagas abertas",
				"a": "Candidatar-se agora",
				"p": "Remoto",
				"l": "Tempo integral",
				"n": "Meio período",
				"j": "Engenharia",
				"h": "Documentação",
				"d": "Comunidade"
			},
			"zh": {
				"r": "高级前端工程师",
				"c": "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
				"b": "后端工程师",
				"f": "设计并扩展我们的云基准测试基础架构，每天处理数千次自动化运行。",
				"s": "技术文档工程师",
				"e": "为我们的基准测试平台创建全面的指南、API 参考和教程。",
				"g": "开发者关系工程师",
				"q": "旧金山 / 远程",
				"i": "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。",
				"o": "测试工程师",
				"k": "通过严格的测试和验证，确保基准测试结果的准确性和可靠性。",
				"m": "开放职位",
				"a": "立即申请",
				"p": "远程",
				"l": "全职",
				"n": "兼职",
				"j": "工程",
				"h": "文档",
				"d": "社区"
			},
			"ja": {
				"r": "シニアフロントエンドエンジニア",
				"c": "React、TypeScript、Vite を使用して、ベンチマークダッシュボードと開発者ツールを構築・保守します。",
				"b": "バックエンドエンジニア",
				"f": "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計・拡張します。",
				"s": "テクニカルライター",
				"e": "ベンチマークプラットフォーム向けの包括的なガイド、API リファレンス、およびチュートリアルを作成します。",
				"g": "DevRel エンジニア",
				"q": "サンフランシスコ / リモート",
				"i": "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18n コミュニティと交流します。",
				"o": "QA エンジニア",
				"k": "厳密なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
				"m": "募集職種",
				"a": "今すぐ応募",
				"p": "リモート",
				"l": "正社員",
				"n": "アルバイト",
				"j": "エンジニアリング",
				"h": "ドキュメント",
				"d": "コミュニティ"
			},
			"ko": {
				"r": "시니어 프런트 엔드 엔지니어",
				"c": "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
				"b": "백엔드 엔지니어",
				"f": "매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
				"s": "테크니컬 라이터",
				"e": "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.",
				"g": "DevRel 엔지니어",
				"q": "샌프란시스코 / 원격",
				"i": "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하십시오.",
				"o": "QA 엔지니어",
				"k": "엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
				"m": "모집 부문",
				"a": "지금 지원하기",
				"p": "원격",
				"l": "풀타임",
				"n": "파트타임",
				"j": "엔지니어링",
				"h": "문서",
				"d": "커뮤니티"
			},
			"ru": {
				"r": "Старший фронтенд-инженер",
				"c": "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.",
				"b": "Бэкенд-инженер",
				"f": "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.",
				"s": "Технический писатель",
				"e": "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.",
				"g": "DevRel-инженер",
				"q": "Сан-Франциско / Удаленно",
				"i": "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.",
				"o": "QA-инженер",
				"k": "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.",
				"m": "Открытые вакансии",
				"a": "Подать заявку",
				"p": "Удаленно",
				"l": "Полный рабочий день",
				"n": "Неполный рабочий день",
				"j": "Разработка",
				"h": "Документация",
				"d": "Сообщество"
			}
		}
	}
};
//#endregion
//#region .intlayer/config/configuration.mjs
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
	"defaultLocale": "en"
};
var routing = {
	"mode": "prefix-all",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/IntlayerNode.mjs
var renderIntlayerNode = ({ children, value, additionalProps }) => {
	const element = isValidElement(children) ? children : jsx(Fragment$1, { children });
	return new Proxy(element, { get(target, prop, receiver) {
		if (prop === "value") return value;
		if (additionalProps && Object.keys(additionalProps).includes(prop)) return additionalProps[prop];
		return Reflect.get(target, prop, receiver);
	} });
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/reactElement/renderReactElement.mjs
var renderReactElement = (element) => {
	if (element === null || typeof element !== "object") return element;
	const convertChildrenAsArray = (element) => {
		const children = element.props?.children;
		if (Array.isArray(children)) {
			const childrenResult = children.map((child, index) => {
				const renderedChild = renderReactElement(child);
				if (typeof renderedChild === "object" && renderedChild !== null && "type" in renderedChild) {
					const childElement = renderedChild;
					return createElement(childElement.type, {
						...childElement.props,
						key: index
					}, ...Array.isArray(childElement.props?.children) ? childElement.props.children : typeof childElement.props?.children !== "undefined" ? [childElement.props.children] : []);
				}
				return renderedChild;
			});
			return {
				...element,
				props: {
					...element.props,
					children: childrenResult
				}
			};
		} else if (typeof children !== "undefined" && children !== null) {
			const renderedChild = renderReactElement(children);
			return {
				...element,
				props: {
					...element.props,
					children: [renderedChild]
				}
			};
		}
		return {
			...element,
			props: {
				...element.props,
				children: []
			}
		};
	};
	const { type, props } = convertChildrenAsArray(element);
	return createElement(type ?? "span", props, ...props.children);
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+types@8.7.1-canary-1/node_modules/@intlayer/types/dist/esm/nodeType.mjs
var TRANSLATION = "translation";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getContent/deepTransform.mjs
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
	for (const key in node) {
		const childProps = {
			...props,
			children: node[key],
			keyPath: [...props.keyPath, {
				type: OBJECT,
				key
			}]
		};
		result[key] = deepTransformNode(node[key], childProps);
	}
	return result;
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getInsertion.mjs
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getTranslation.mjs
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
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getContent/plugins.mjs
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
var TREE_SHAKE_INSERTION$1 = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const result = { ...node["translation"] ?? {} };
		for (const key in result) {
			const childProps = {
				...props,
				children: result[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(result[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = TREE_SHAKE_INSERTION$1 ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string",
			transform: (node, subProps, deepTransformNode) => {
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const children = getInsertion(transformedResult, values);
					return deepTransformNode(children, {
						...subProps,
						plugins: props.plugins,
						children
					});
				};
			}
		};
		return deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
	}
};
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getContent/getContent.mjs
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
].filter(Boolean);
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getDictionary.mjs
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/splitAndJoinInsertion.mjs
var isComplexValue = (value) => value != null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean";
var insertionRegex = /\{\{\s*(.*?)\s*\}\}/g;
var splitInsertionTemplate = (template, values = {}) => {
	if (!Object.values(values).some(isComplexValue)) return {
		isSimple: true,
		parts: template.replace(insertionRegex, (_, key) => (values[key.trim()] ?? "").toString())
	};
	const chunks = template.split(insertionRegex);
	const parts = [];
	for (let i = 0; i < chunks.length; i++) if (i % 2 === 0) {
		if (chunks[i]) parts.push(chunks[i]);
	} else {
		const val = values[chunks[i].trim()];
		if (val != null) parts.push(val);
	}
	return {
		isSimple: false,
		parts
	};
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/plugins.mjs
var TREE_SHAKE_INTLAYER_NODE = process.env["INTLAYER_NODE_TYPE_INTLAYER_NODE"] === "false";
var TREE_SHAKE_REACT_NODE = process.env["INTLAYER_NODE_TYPE_REACT_NODE"] === "false";
var TREE_SHAKE_INSERTION = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
var intlayerNodePlugins = TREE_SHAKE_INTLAYER_NODE ? fallbackPlugin : {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: rest.children,
		children: rest.children
	})
};
var reactNodePlugins = TREE_SHAKE_REACT_NODE ? fallbackPlugin : {
	id: "react-node-plugin",
	canHandle: (node) => typeof node === "object" && typeof node?.props !== "undefined" && typeof node.key !== "undefined",
	transform: (node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: "[[react-element]]",
		children: renderReactElement(node)
	})
};
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
var insertionPlugin = TREE_SHAKE_INSERTION ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string",
			transform: (node, subProps, deepTransformNode) => {
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const result = splitAndJoinInsertion(transformedResult, values);
					return deepTransformNode(result, {
						...subProps,
						plugins: props.plugins,
						children: result
					});
				};
			}
		};
		const result = deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
		if (typeof children === "object" && children !== null && "nodeType" in children && ["enumeration", "condition"].includes(children.nodeType)) return (values) => (arg) => {
			const inner = result(arg);
			if (typeof inner === "function") return inner(values);
			return inner;
		};
		return result;
	}
};
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var getPlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	intlayerNodePlugins,
	reactNodePlugins,
	insertionPlugin,
	markdownPlugin,
	htmlPlugin
].filter(Boolean);
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/getDictionary.mjs
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/localeResolver.mjs
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	const requestedLocales = [selectedLocale].flat();
	const normalize = (locale) => locale.trim().toLowerCase();
	try {
		for (const requested of requestedLocales) {
			const normalizedRequested = normalize(requested);
			const exactMatch = locales.find((locale) => normalize(locale) === normalizedRequested);
			if (exactMatch) return exactMatch;
			const [requestedLang] = normalizedRequested.split("-");
			const partialMatch = locales.find((locale) => normalize(locale).split("-")[0] === requestedLang);
			if (partialMatch) return partialMatch;
		}
	} catch {}
	return defaultLocale;
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/utils/localeStorage.mjs
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	if (attributes.expires instanceof Date) parts.push(`Expires=${attributes.expires.toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
};
var getLocaleFromStorageClient = (options) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: attributes.expires instanceof Date ? attributes.expires.getTime() : attributes.expires
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+core@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/localization/getBrowserLocale.mjs
var localeStorageOptions = {
	getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
	getLocaleStorage: (name) => localStorage.getItem(name),
	getSessionStorage: (name) => sessionStorage.getItem(name),
	isCookieEnabled: true,
	setCookieStore: (name, value, attributes) => cookieStore.set({
		name,
		value,
		path: attributes.path,
		domain: attributes.domain,
		expires: attributes.expires,
		sameSite: attributes.sameSite
	}),
	setCookieString: (_name, cookie) => {
		document.cookie = cookie;
	},
	setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
	setLocaleStorage: (name, value) => localStorage.setItem(name, value)
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useLocaleStorage.mjs
var localeInStorage = getLocaleFromStorageClient(localeStorageOptions);
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/editor/useEditor.mjs
var useEditor = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const managerRef = useRef(null);
	useEffect(() => {}, []);
	useEffect(() => {
		if (!locale || !managerRef.current) return;
		managerRef.current.currentLocale.set(locale);
	}, [locale]);
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/editor/EditorProvider.mjs
var EditorProvider = ({ children }) => {
	useEditor();
	return children;
};
//#endregion
//#region ../../../node_modules/.bun/@intlayer+config@8.7.1-canary-1+b1ab299f0a400331/node_modules/@intlayer/config/dist/esm/utils/setIntlayerIdentifier.mjs
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
var IntlayerClientContext = createContext({
	locale: localeInStorage ?? internationalization?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: true
});
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(localeProp ?? localeInStorage ?? defaultLocaleProp ?? defaultLocaleConfig);
	useEffect(() => {
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}, [localeProp]);
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = (newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	};
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	return jsx(IntlayerClientContext.Provider, {
		value: {
			locale: resolvedLocale,
			setLocale,
			disableEditor
		},
		children
	});
};
var IntlayerProvider = ({ children, ...props }) => jsxs(IntlayerProviderContent, {
	...props,
	children: [jsx(EditorProvider, {}), children]
});
//#endregion
//#region ../../../node_modules/.bun/react-intlayer@8.7.1-canary-1+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/useDictionary.mjs
var useDictionary = (dictionary, locale) => {
	const { locale: currentLocale } = useContext(IntlayerClientContext) ?? {};
	return useMemo(() => {
		return getDictionary(dictionary, locale ?? currentLocale);
	}, [
		dictionary.key,
		currentLocale,
		locale
	]);
};
//#endregion
//#region ../../../node_modules/.bun/next-intlayer@8.7.1-canary-1+c0daa947c99913c1/node_modules/next-intlayer/dist/esm/client/IntlayerClientProvider.mjs
var IntlayerClientProvider = (props) => jsx(IntlayerProvider, { ...props });
//#endregion
//#region src/components/pages/careers/OpenPositions.tsx
function OpenPositions() {
	const content = useDictionary(open_positions_default);
	const openings = [
		{
			title: content.r.value,
			location: content.p.value,
			type: content.l.value,
			dept: content.j.value,
			desc: content.c.value
		},
		{
			title: content.b.value,
			location: content.p.value,
			type: content.l.value,
			dept: content.j.value,
			desc: content.f.value
		},
		{
			title: content.s.value,
			location: content.p.value,
			type: content.n.value,
			dept: content.h.value,
			desc: content.e.value
		},
		{
			title: content.g.value,
			location: content.q.value,
			type: content.l.value,
			dept: content.d.value,
			desc: content.i.value
		},
		{
			title: content.o.value,
			location: content.p.value,
			type: content.l.value,
			dept: content.j.value,
			desc: content.k.value
		}
	];
	return jsxs(Fragment$1, { children: [jsx("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: content.m
	}), jsx("div", {
		className: "space-y-4",
		children: openings.map((o) => jsxs("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [jsxs("div", { children: [
				jsx("h3", {
					className: "text-base font-semibold text-foreground",
					children: o.title
				}),
				jsx("p", {
					className: "text-sm text-muted-foreground",
					children: o.desc
				}),
				jsxs("div", {
					className: "mt-2 flex gap-2",
					children: [
						jsx("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.dept
						}),
						jsx("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.location
						}),
						jsx("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.type
						})
					]
				})
			] }), jsx("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: content.a
			})]
		}, o.title))
	})] });
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function onRenderCallback(id, phase, actualDuration) {
	if (typeof window === "undefined") return;
	if (phase === "nested-update") return;
	try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
		window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
		window.__RENDER_METRICS__[id].push(actualDuration);
	} catch (err) {
		console.warn("onRenderCallback failed:", err);
	}
}
//#endregion
//#region src/components/AppProviders.tsx
function AppProviders({ children, locale }) {
	useEffect(() => {
		if (locale) document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children: jsx(IntlayerClientProvider, {
			locale,
			children
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale: "en",
		children
	});
}
//#endregion
//#region src/components/pages/careers/OpenPositions.wrapper.tsx
function Wrapped() {
	return jsx(Wrapper, { children: jsx(OpenPositions, {}) });
}
//#endregion
export { Wrapped as default };

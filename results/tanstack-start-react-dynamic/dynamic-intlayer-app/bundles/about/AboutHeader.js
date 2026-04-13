import { Fragment, createContext, createElement, isValidElement, lazy, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region .intlayer/dynamic_dictionary/about-header.mjs
var content = {
	"de": () => import("./de-CBalpNha.js").then((m) => m.default),
	"en": () => import("./en-YcQCelCV.js").then((m) => m.default),
	"es": () => import("./es-CWxCTRhQ.js").then((m) => m.default),
	"fr": () => import("./fr-DeiY9bS1.js").then((m) => m.default),
	"it": () => import("./it-CBqwqCH-.js").then((m) => m.default),
	"ja": () => import("./ja-DNj4Ihpa.js").then((m) => m.default),
	"ko": () => import("./ko-06KIQ9JG.js").then((m) => m.default),
	"pt": () => import("./pt-IvgGmmfb.js").then((m) => m.default),
	"ru": () => import("./ru-DbWK664W.js").then((m) => m.default),
	"zh": () => import("./zh-OgsE5bF4.js").then((m) => m.default)
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
	"mode": "prefix-no-default",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
[other logic ]
//#endregion
export { HTMLRendererPlugin };
import { createContext, useContext } from "react";
import "react/jsx-runtime";
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var MarkdownContext = createContext(void 0);
var useMarkdownContext = () => useContext(MarkdownContext);
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownRendererPlugin.mjs
var MarkdownRendererPlugin = (props) => {
	const { children, options, components } = props;
	const context = useMarkdownContext();
	return (context?.renderMarkdown ?? ((md) => md))(children, options, {
		...context?.components ?? {},
		...components ?? {}
	});
};
//#endregion
export { MarkdownRendererPlugin };
var de_default = {
	key: "about-header",
	content: {
		"a": "Über diesen Benchmark",
		"b": "Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können."
	}
};
//#endregion
export { de_default as default };
var en_default = {
	key: "about-header",
	content: {
		"a": "About This Benchmark",
		"b": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	}
};
//#endregion
export { en_default as default };
var es_default = {
	key: "about-header",
	content: {
		"a": "Acerca de este Benchmark",
		"b": "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas de i18n en condiciones idénticas."
	}
};
//#endregion
export { es_default as default };
var fr_default = {
	key: "about-header",
	content: {
		"a": "À propos de ce Benchmark",
		"b": "Ceci est une application de test open-source — pas un produit ou une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques."
	}
};
//#endregion
export { fr_default as default };
var it_default = {
	key: "about-header",
	content: {
		"a": "Informazioni su questo benchmark",
		"b": "Questa è un'applicazione di test open source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'app React realistica e multipagina in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche."
	}
};
//#endregion
export { it_default as default };
var ja_default = {
	key: "about-header",
	content: {
		"a": "このベンチマークについて",
		"b": "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、さまざまな i18n ライブラリを同一条件下で統合および測定できる、現実的なマルチページ React アプリを提供することです。"
	}
};
//#endregion
export { ja_default as default };
var ko_default = {
	key: "about-header",
	content: {
		"a": "이 벤치마크에 대하여",
		"b": "이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다."
	}
};
//#endregion
export { ko_default as default };
var pt_default = {
	key: "about-header",
	content: {
		"a": "Sobre este Benchmark",
		"b": "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React multipágina realista, onde diferentes bibliotecas de i18n podem ser integradas e medidas em condições idênticas."
	}
};
//#endregion
export { pt_default as default };
var ru_default = {
	key: "about-header",
	content: {
		"a": "Об этом бенчмарке",
		"b": "Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
	}
};
//#endregion
export { ru_default as default };
var zh_default = {
	key: "about-header",
	content: {
		"a": "关于此基准测试",
		"b": "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。"
	}
};
//#endregion
export { zh_default as default };

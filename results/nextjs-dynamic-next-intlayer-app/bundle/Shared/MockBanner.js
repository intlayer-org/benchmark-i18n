import { Fragment, createContext, createElement, isValidElement, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
var loadContent = (key) => ({
	"de": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/de.json": () => import("../../.intlayer/dynamic_dictionary/json/about-grid/de.json"),
		"./json/about-header/de.json": () => import("../../.intlayer/dynamic_dictionary/json/about-header/de.json"),
		"./json/api-access-section/de.json": () => import("../../.intlayer/dynamic_dictionary/json/api-access-section/de.json"),
		"./json/blog-header/de.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-header/de.json"),
		"./json/blog-list/de.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-list/de.json"),
		"./json/careers-benefits/de.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-benefits/de.json"),
		"./json/careers-header/de.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-header/de.json"),
		"./json/contact-form/de.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-form/de.json"),
		"./json/contact-header/de.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-header/de.json"),
		"./json/faq-header1/de.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-header1/de.json"),
		"./json/faq-list/de.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-list/de.json"),
		"./json/footer/de.json": () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json"),
		"./json/header/de.json": () => import("../../.intlayer/dynamic_dictionary/json/header/de.json"),
		"./json/hero/de.json": () => import("../../.intlayer/dynamic_dictionary/json/hero/de.json"),
		"./json/mock-banner/de.json": () => import("../../.intlayer/dynamic_dictionary/json/mock-banner/de.json"),
		"./json/open-positions/de.json": () => import("../../.intlayer/dynamic_dictionary/json/open-positions/de.json"),
		"./json/preferences-section/de.json": () => import("../../.intlayer/dynamic_dictionary/json/preferences-section/de.json"),
		"./json/pricing-header/de.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-header/de.json"),
		"./json/pricing-tiers/de.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-tiers/de.json"),
		"./json/products-grid/de.json": () => import("../../.intlayer/dynamic_dictionary/json/products-grid/de.json"),
		"./json/products-header/de.json": () => import("../../.intlayer/dynamic_dictionary/json/products-header/de.json"),
		"./json/profile-section/de.json": () => import("../../.intlayer/dynamic_dictionary/json/profile-section/de.json"),
		"./json/results-table/de.json": () => import("../../.intlayer/dynamic_dictionary/json/results-table/de.json"),
		"./json/settings-footer/de.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-footer/de.json"),
		"./json/settings-header/de.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-header/de.json"),
		"./json/team-grid/de.json": () => import("../../.intlayer/dynamic_dictionary/json/team-grid/de.json"),
		"./json/team-header/de.json": () => import("../../.intlayer/dynamic_dictionary/json/team-header/de.json"),
		"./json/theme-toggle/de.json": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json"),
		"./json/understanding-impact/de.json": () => import("../../.intlayer/dynamic_dictionary/json/understanding-impact/de.json"),
		"./json/what-we-measure/de.json": () => import("../../.intlayer/dynamic_dictionary/json/what-we-measure/de.json"),
		"./json/why-it-matters/de.json": () => import("../../.intlayer/dynamic_dictionary/json/why-it-matters/de.json")
	}), `./json/${key}/de.json`, 4).then((m) => m.default),
	"en": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/en.json": () => import("./en-DAUWLLBn.js"),
		"./json/about-header/en.json": () => import("./en-DaEo7qVP.js"),
		"./json/api-access-section/en.json": () => import("./en-Cx8JReHa.js"),
		"./json/blog-header/en.json": () => import("./en--XmZsnI6.js"),
		"./json/blog-list/en.json": () => import("./en-CBdhzJSG.js"),
		"./json/careers-benefits/en.json": () => import("./en-C5N0DWvp.js"),
		"./json/careers-header/en.json": () => import("./en-DnoKVvhj.js"),
		"./json/contact-form/en.json": () => import("./en-BaqdCJ4l.js"),
		"./json/contact-header/en.json": () => import("./en-D8PL5ZxM.js"),
		"./json/faq-header1/en.json": () => import("./en-CwM-Ohf_.js"),
		"./json/faq-list/en.json": () => import("./en-lMYaRM3e.js"),
		"./json/footer/en.json": () => import("./en-ClOiChcx.js"),
		"./json/header/en.json": () => import("./en-DJ9aluKw.js"),
		"./json/hero/en.json": () => import("./en-BwPQRek7.js"),
		"./json/mock-banner/en.json": () => import("./en-CtLeguUY.js"),
		"./json/open-positions/en.json": () => import("./en-DdMqCPP1.js"),
		"./json/preferences-section/en.json": () => import("./en-BTCEmDQO.js"),
		"./json/pricing-header/en.json": () => import("./en-BXNHHxio.js"),
		"./json/pricing-tiers/en.json": () => import("./en-BKYS_u_-.js"),
		"./json/products-grid/en.json": () => import("./en-CBFdwl3Y.js"),
		"./json/products-header/en.json": () => import("./en-B0tVdxc-.js"),
		"./json/profile-section/en.json": () => import("./en-Elhkwb6q.js"),
		"./json/results-table/en.json": () => import("./en-B-gHvlHy.js"),
		"./json/settings-footer/en.json": () => import("./en-CKX6ktRK.js"),
		"./json/settings-header/en.json": () => import("./en-CjOwHiR6.js"),
		"./json/team-grid/en.json": () => import("./en-DvjdAnkY.js"),
		"./json/team-header/en.json": () => import("./en-BgHcmGi6.js"),
		"./json/theme-toggle/en.json": () => import("./en-BX6BZp0E.js"),
		"./json/understanding-impact/en.json": () => import("./en-DBDlNlnf.js"),
		"./json/what-we-measure/en.json": () => import("./en-D8k3CmiZ.js"),
		"./json/why-it-matters/en.json": () => import("./en-BCcWGhu5.js")
	}), `./json/${key}/en.json`, 4).then((m) => m.default),
	"es": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/es.json": () => import("../../.intlayer/dynamic_dictionary/json/about-grid/es.json"),
		"./json/about-header/es.json": () => import("../../.intlayer/dynamic_dictionary/json/about-header/es.json"),
		"./json/api-access-section/es.json": () => import("../../.intlayer/dynamic_dictionary/json/api-access-section/es.json"),
		"./json/blog-header/es.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-header/es.json"),
		"./json/blog-list/es.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-list/es.json"),
		"./json/careers-benefits/es.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-benefits/es.json"),
		"./json/careers-header/es.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-header/es.json"),
		"./json/contact-form/es.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-form/es.json"),
		"./json/contact-header/es.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-header/es.json"),
		"./json/faq-header1/es.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-header1/es.json"),
		"./json/faq-list/es.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-list/es.json"),
		"./json/footer/es.json": () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json"),
		"./json/header/es.json": () => import("../../.intlayer/dynamic_dictionary/json/header/es.json"),
		"./json/hero/es.json": () => import("../../.intlayer/dynamic_dictionary/json/hero/es.json"),
		"./json/mock-banner/es.json": () => import("../../.intlayer/dynamic_dictionary/json/mock-banner/es.json"),
		"./json/open-positions/es.json": () => import("../../.intlayer/dynamic_dictionary/json/open-positions/es.json"),
		"./json/preferences-section/es.json": () => import("../../.intlayer/dynamic_dictionary/json/preferences-section/es.json"),
		"./json/pricing-header/es.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-header/es.json"),
		"./json/pricing-tiers/es.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-tiers/es.json"),
		"./json/products-grid/es.json": () => import("../../.intlayer/dynamic_dictionary/json/products-grid/es.json"),
		"./json/products-header/es.json": () => import("../../.intlayer/dynamic_dictionary/json/products-header/es.json"),
		"./json/profile-section/es.json": () => import("../../.intlayer/dynamic_dictionary/json/profile-section/es.json"),
		"./json/results-table/es.json": () => import("../../.intlayer/dynamic_dictionary/json/results-table/es.json"),
		"./json/settings-footer/es.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-footer/es.json"),
		"./json/settings-header/es.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-header/es.json"),
		"./json/team-grid/es.json": () => import("../../.intlayer/dynamic_dictionary/json/team-grid/es.json"),
		"./json/team-header/es.json": () => import("../../.intlayer/dynamic_dictionary/json/team-header/es.json"),
		"./json/theme-toggle/es.json": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json"),
		"./json/understanding-impact/es.json": () => import("../../.intlayer/dynamic_dictionary/json/understanding-impact/es.json"),
		"./json/what-we-measure/es.json": () => import("../../.intlayer/dynamic_dictionary/json/what-we-measure/es.json"),
		"./json/why-it-matters/es.json": () => import("../../.intlayer/dynamic_dictionary/json/why-it-matters/es.json")
	}), `./json/${key}/es.json`, 4).then((m) => m.default),
	"fr": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/about-grid/fr.json"),
		"./json/about-header/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/about-header/fr.json"),
		"./json/api-access-section/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/api-access-section/fr.json"),
		"./json/blog-header/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-header/fr.json"),
		"./json/blog-list/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-list/fr.json"),
		"./json/careers-benefits/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-benefits/fr.json"),
		"./json/careers-header/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-header/fr.json"),
		"./json/contact-form/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-form/fr.json"),
		"./json/contact-header/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-header/fr.json"),
		"./json/faq-header1/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-header1/fr.json"),
		"./json/faq-list/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-list/fr.json"),
		"./json/footer/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json"),
		"./json/header/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json"),
		"./json/hero/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/hero/fr.json"),
		"./json/mock-banner/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/mock-banner/fr.json"),
		"./json/open-positions/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/open-positions/fr.json"),
		"./json/preferences-section/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/preferences-section/fr.json"),
		"./json/pricing-header/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-header/fr.json"),
		"./json/pricing-tiers/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-tiers/fr.json"),
		"./json/products-grid/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/products-grid/fr.json"),
		"./json/products-header/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/products-header/fr.json"),
		"./json/profile-section/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/profile-section/fr.json"),
		"./json/results-table/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/results-table/fr.json"),
		"./json/settings-footer/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-footer/fr.json"),
		"./json/settings-header/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-header/fr.json"),
		"./json/team-grid/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/team-grid/fr.json"),
		"./json/team-header/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/team-header/fr.json"),
		"./json/theme-toggle/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json"),
		"./json/understanding-impact/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/understanding-impact/fr.json"),
		"./json/what-we-measure/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/what-we-measure/fr.json"),
		"./json/why-it-matters/fr.json": () => import("../../.intlayer/dynamic_dictionary/json/why-it-matters/fr.json")
	}), `./json/${key}/fr.json`, 4).then((m) => m.default),
	"it": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/it.json": () => import("../../.intlayer/dynamic_dictionary/json/about-grid/it.json"),
		"./json/about-header/it.json": () => import("../../.intlayer/dynamic_dictionary/json/about-header/it.json"),
		"./json/api-access-section/it.json": () => import("../../.intlayer/dynamic_dictionary/json/api-access-section/it.json"),
		"./json/blog-header/it.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-header/it.json"),
		"./json/blog-list/it.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-list/it.json"),
		"./json/careers-benefits/it.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-benefits/it.json"),
		"./json/careers-header/it.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-header/it.json"),
		"./json/contact-form/it.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-form/it.json"),
		"./json/contact-header/it.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-header/it.json"),
		"./json/faq-header1/it.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-header1/it.json"),
		"./json/faq-list/it.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-list/it.json"),
		"./json/footer/it.json": () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json"),
		"./json/header/it.json": () => import("../../.intlayer/dynamic_dictionary/json/header/it.json"),
		"./json/hero/it.json": () => import("../../.intlayer/dynamic_dictionary/json/hero/it.json"),
		"./json/mock-banner/it.json": () => import("../../.intlayer/dynamic_dictionary/json/mock-banner/it.json"),
		"./json/open-positions/it.json": () => import("../../.intlayer/dynamic_dictionary/json/open-positions/it.json"),
		"./json/preferences-section/it.json": () => import("../../.intlayer/dynamic_dictionary/json/preferences-section/it.json"),
		"./json/pricing-header/it.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-header/it.json"),
		"./json/pricing-tiers/it.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-tiers/it.json"),
		"./json/products-grid/it.json": () => import("../../.intlayer/dynamic_dictionary/json/products-grid/it.json"),
		"./json/products-header/it.json": () => import("../../.intlayer/dynamic_dictionary/json/products-header/it.json"),
		"./json/profile-section/it.json": () => import("../../.intlayer/dynamic_dictionary/json/profile-section/it.json"),
		"./json/results-table/it.json": () => import("../../.intlayer/dynamic_dictionary/json/results-table/it.json"),
		"./json/settings-footer/it.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-footer/it.json"),
		"./json/settings-header/it.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-header/it.json"),
		"./json/team-grid/it.json": () => import("../../.intlayer/dynamic_dictionary/json/team-grid/it.json"),
		"./json/team-header/it.json": () => import("../../.intlayer/dynamic_dictionary/json/team-header/it.json"),
		"./json/theme-toggle/it.json": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json"),
		"./json/understanding-impact/it.json": () => import("../../.intlayer/dynamic_dictionary/json/understanding-impact/it.json"),
		"./json/what-we-measure/it.json": () => import("../../.intlayer/dynamic_dictionary/json/what-we-measure/it.json"),
		"./json/why-it-matters/it.json": () => import("../../.intlayer/dynamic_dictionary/json/why-it-matters/it.json")
	}), `./json/${key}/it.json`, 4).then((m) => m.default),
	"ja": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/about-grid/ja.json"),
		"./json/about-header/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/about-header/ja.json"),
		"./json/api-access-section/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/api-access-section/ja.json"),
		"./json/blog-header/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-header/ja.json"),
		"./json/blog-list/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-list/ja.json"),
		"./json/careers-benefits/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-benefits/ja.json"),
		"./json/careers-header/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-header/ja.json"),
		"./json/contact-form/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-form/ja.json"),
		"./json/contact-header/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-header/ja.json"),
		"./json/faq-header1/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-header1/ja.json"),
		"./json/faq-list/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-list/ja.json"),
		"./json/footer/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json"),
		"./json/header/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json"),
		"./json/hero/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/hero/ja.json"),
		"./json/mock-banner/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/mock-banner/ja.json"),
		"./json/open-positions/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/open-positions/ja.json"),
		"./json/preferences-section/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/preferences-section/ja.json"),
		"./json/pricing-header/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-header/ja.json"),
		"./json/pricing-tiers/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-tiers/ja.json"),
		"./json/products-grid/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/products-grid/ja.json"),
		"./json/products-header/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/products-header/ja.json"),
		"./json/profile-section/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/profile-section/ja.json"),
		"./json/results-table/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/results-table/ja.json"),
		"./json/settings-footer/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-footer/ja.json"),
		"./json/settings-header/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-header/ja.json"),
		"./json/team-grid/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/team-grid/ja.json"),
		"./json/team-header/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/team-header/ja.json"),
		"./json/theme-toggle/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json"),
		"./json/understanding-impact/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/understanding-impact/ja.json"),
		"./json/what-we-measure/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/what-we-measure/ja.json"),
		"./json/why-it-matters/ja.json": () => import("../../.intlayer/dynamic_dictionary/json/why-it-matters/ja.json")
	}), `./json/${key}/ja.json`, 4).then((m) => m.default),
	"ko": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/about-grid/ko.json"),
		"./json/about-header/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/about-header/ko.json"),
		"./json/api-access-section/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/api-access-section/ko.json"),
		"./json/blog-header/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-header/ko.json"),
		"./json/blog-list/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-list/ko.json"),
		"./json/careers-benefits/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-benefits/ko.json"),
		"./json/careers-header/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-header/ko.json"),
		"./json/contact-form/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-form/ko.json"),
		"./json/contact-header/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-header/ko.json"),
		"./json/faq-header1/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-header1/ko.json"),
		"./json/faq-list/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-list/ko.json"),
		"./json/footer/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json"),
		"./json/header/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json"),
		"./json/hero/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/hero/ko.json"),
		"./json/mock-banner/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/mock-banner/ko.json"),
		"./json/open-positions/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/open-positions/ko.json"),
		"./json/preferences-section/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/preferences-section/ko.json"),
		"./json/pricing-header/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-header/ko.json"),
		"./json/pricing-tiers/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-tiers/ko.json"),
		"./json/products-grid/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/products-grid/ko.json"),
		"./json/products-header/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/products-header/ko.json"),
		"./json/profile-section/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/profile-section/ko.json"),
		"./json/results-table/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/results-table/ko.json"),
		"./json/settings-footer/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-footer/ko.json"),
		"./json/settings-header/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-header/ko.json"),
		"./json/team-grid/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/team-grid/ko.json"),
		"./json/team-header/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/team-header/ko.json"),
		"./json/theme-toggle/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json"),
		"./json/understanding-impact/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/understanding-impact/ko.json"),
		"./json/what-we-measure/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/what-we-measure/ko.json"),
		"./json/why-it-matters/ko.json": () => import("../../.intlayer/dynamic_dictionary/json/why-it-matters/ko.json")
	}), `./json/${key}/ko.json`, 4).then((m) => m.default),
	"pt": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/about-grid/pt.json"),
		"./json/about-header/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/about-header/pt.json"),
		"./json/api-access-section/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/api-access-section/pt.json"),
		"./json/blog-header/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-header/pt.json"),
		"./json/blog-list/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-list/pt.json"),
		"./json/careers-benefits/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-benefits/pt.json"),
		"./json/careers-header/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-header/pt.json"),
		"./json/contact-form/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-form/pt.json"),
		"./json/contact-header/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-header/pt.json"),
		"./json/faq-header1/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-header1/pt.json"),
		"./json/faq-list/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-list/pt.json"),
		"./json/footer/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json"),
		"./json/header/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json"),
		"./json/hero/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/hero/pt.json"),
		"./json/mock-banner/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/mock-banner/pt.json"),
		"./json/open-positions/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/open-positions/pt.json"),
		"./json/preferences-section/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/preferences-section/pt.json"),
		"./json/pricing-header/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-header/pt.json"),
		"./json/pricing-tiers/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-tiers/pt.json"),
		"./json/products-grid/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/products-grid/pt.json"),
		"./json/products-header/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/products-header/pt.json"),
		"./json/profile-section/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/profile-section/pt.json"),
		"./json/results-table/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/results-table/pt.json"),
		"./json/settings-footer/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-footer/pt.json"),
		"./json/settings-header/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-header/pt.json"),
		"./json/team-grid/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/team-grid/pt.json"),
		"./json/team-header/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/team-header/pt.json"),
		"./json/theme-toggle/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json"),
		"./json/understanding-impact/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/understanding-impact/pt.json"),
		"./json/what-we-measure/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/what-we-measure/pt.json"),
		"./json/why-it-matters/pt.json": () => import("../../.intlayer/dynamic_dictionary/json/why-it-matters/pt.json")
	}), `./json/${key}/pt.json`, 4).then((m) => m.default),
	"ru": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/about-grid/ru.json"),
		"./json/about-header/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/about-header/ru.json"),
		"./json/api-access-section/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/api-access-section/ru.json"),
		"./json/blog-header/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-header/ru.json"),
		"./json/blog-list/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-list/ru.json"),
		"./json/careers-benefits/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-benefits/ru.json"),
		"./json/careers-header/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-header/ru.json"),
		"./json/contact-form/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-form/ru.json"),
		"./json/contact-header/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-header/ru.json"),
		"./json/faq-header1/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-header1/ru.json"),
		"./json/faq-list/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-list/ru.json"),
		"./json/footer/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json"),
		"./json/header/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json"),
		"./json/hero/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/hero/ru.json"),
		"./json/mock-banner/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/mock-banner/ru.json"),
		"./json/open-positions/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/open-positions/ru.json"),
		"./json/preferences-section/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/preferences-section/ru.json"),
		"./json/pricing-header/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-header/ru.json"),
		"./json/pricing-tiers/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-tiers/ru.json"),
		"./json/products-grid/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/products-grid/ru.json"),
		"./json/products-header/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/products-header/ru.json"),
		"./json/profile-section/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/profile-section/ru.json"),
		"./json/results-table/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/results-table/ru.json"),
		"./json/settings-footer/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-footer/ru.json"),
		"./json/settings-header/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-header/ru.json"),
		"./json/team-grid/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/team-grid/ru.json"),
		"./json/team-header/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/team-header/ru.json"),
		"./json/theme-toggle/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json"),
		"./json/understanding-impact/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/understanding-impact/ru.json"),
		"./json/what-we-measure/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/what-we-measure/ru.json"),
		"./json/why-it-matters/ru.json": () => import("../../.intlayer/dynamic_dictionary/json/why-it-matters/ru.json")
	}), `./json/${key}/ru.json`, 4).then((m) => m.default),
	"zh": () => _rolldown_dynamic_import_helper_default(Object.assign({
		"./json/about-grid/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/about-grid/zh.json"),
		"./json/about-header/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/about-header/zh.json"),
		"./json/api-access-section/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/api-access-section/zh.json"),
		"./json/blog-header/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-header/zh.json"),
		"./json/blog-list/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/blog-list/zh.json"),
		"./json/careers-benefits/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-benefits/zh.json"),
		"./json/careers-header/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/careers-header/zh.json"),
		"./json/contact-form/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-form/zh.json"),
		"./json/contact-header/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/contact-header/zh.json"),
		"./json/faq-header1/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-header1/zh.json"),
		"./json/faq-list/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/faq-list/zh.json"),
		"./json/footer/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json"),
		"./json/header/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json"),
		"./json/hero/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/hero/zh.json"),
		"./json/mock-banner/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/mock-banner/zh.json"),
		"./json/open-positions/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/open-positions/zh.json"),
		"./json/preferences-section/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/preferences-section/zh.json"),
		"./json/pricing-header/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-header/zh.json"),
		"./json/pricing-tiers/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/pricing-tiers/zh.json"),
		"./json/products-grid/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/products-grid/zh.json"),
		"./json/products-header/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/products-header/zh.json"),
		"./json/profile-section/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/profile-section/zh.json"),
		"./json/results-table/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/results-table/zh.json"),
		"./json/settings-footer/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-footer/zh.json"),
		"./json/settings-header/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/settings-header/zh.json"),
		"./json/team-grid/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/team-grid/zh.json"),
		"./json/team-header/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/team-header/zh.json"),
		"./json/theme-toggle/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json"),
		"./json/understanding-impact/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/understanding-impact/zh.json"),
		"./json/what-we-measure/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/what-we-measure/zh.json"),
		"./json/why-it-matters/zh.json": () => import("../../.intlayer/dynamic_dictionary/json/why-it-matters/zh.json")
	}), `./json/${key}/zh.json`, 4).then((m) => m.default)
});
var content = loadContent("mock-banner");
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
var renderIntlayerNode = ({ children, value, additionalProps }) => {
	const element = isValidElement(children) ? children : jsx(Fragment$1, { children });
	return new Proxy(element, { get(target, prop, receiver) {
		if (prop === "value") return value;
		if (additionalProps && prop in additionalProps) return additionalProps[prop];
		return Reflect.get(target, prop, receiver);
	} });
};
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
var TRANSLATION = "translation";
var INSERTION = "insertion";
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
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
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
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
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
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
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
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
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
var localeInStorage = getLocaleFromStorageClient(localeStorageOptions);
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var useEditor = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const managerRef = useRef(null);
	useEffect(() => {}, []);
	useEffect(() => {
		if (!locale || !managerRef.current) return;
		managerRef.current.currentLocale.set(locale);
	}, [locale]);
};
var EditorProvider = ({ children }) => {
	useEditor();
	return children;
};
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
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
var createSuspender = (promise) => {
	let status = "pending";
	let result;
	const suspender = promise.then((r) => {
		status = "success";
		result = r;
	}, (e) => {
		status = "error";
		result = e;
	});
	return { read() {
		if (status === "pending") throw suspender;
		if (status === "error") throw result;
		return result;
	} };
};
var cache = /* @__PURE__ */ new Map();
var useLoadDynamic = (key, promise) => {
	if (!cache.has(key)) cache.set(key, createSuspender(promise));
	return cache.get(key).read();
};
var useDictionaryDynamic = (dictionaryPromise, key, locale) => {
	const { locale: currentLocale } = useContext(IntlayerClientContext) ?? {};
	const localeTarget = useMemo(() => locale ?? currentLocale ?? internationalization.defaultLocale, [currentLocale, locale]);
	return useDictionary(useLoadDynamic(`${String(key)}.${localeTarget}`, dictionaryPromise[localeTarget]?.()), localeTarget);
};
var IntlayerClientProvider = (props) => jsx(IntlayerProvider, { ...props });
var MockBanner = () => {
	return jsx("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: useDictionaryDynamic(content, "mock-banner").a
	});
};
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
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
function AppProviders({ children, locale }) {
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		if (locale) document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(IntlayerClientProvider, {
		locale,
		children
	});
}
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale: "en",
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(MockBanner, {}) });
}
export { Wrapped as default };
var key = "blog-header";
var content = {
	"b": "Insights, tutorials, and analysis from the i18n community.",
	"a": "Blog"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "results-table";
var content = {
	"i": "Sample Results",
	"b": "Bundle Size",
	"f": "Lookup Time",
	"d": "Lazy Loading",
	"j": "Yes",
	"g": "Manual",
	"e": "Library",
	"a": "Built-in",
	"c": {
		"fields": ["val"],
		"nodeType": "insertion",
		"insertion": "{{val}} kB"
	},
	"h": {
		"fields": ["val"],
		"nodeType": "insertion",
		"insertion": "{{val}}ms"
	}
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "products-header";
var content = {
	"b": "Tools and services to streamline your internationalization workflow.",
	"a": "Products"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "why-it-matters";
var content = {
	"g": "Why These Metrics Matter",
	"a": "Bundle Size",
	"f": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"e": "Rendering & Hydration",
	"b": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"c": "Dynamic Loading",
	"d": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "pricing-tiers";
var content = {
	"y": "Starter",
	"r": "$0",
	"l": "forever",
	"c": {
		"fields": [],
		"nodeType": "insertion",
		"insertion": "{runs} benchmark runs/day"
	},
	"o": {
		"fields": [],
		"nodeType": "insertion",
		"insertion": "{libs} libraries"
	},
	"e": "Community support",
	"w": "Public results",
	"v": "Pro",
	"s": "$29",
	"p": "/month",
	"aa": "Unlimited runs",
	"a": "All libraries",
	"t": "Priority support",
	"u": "Private results",
	"d": "CI integration",
	"n": "Historical data",
	"j": "Enterprise",
	"g": "Custom",
	"k": "Everything in Pro",
	"q": "On-premise option",
	"x": "SSO & SAML",
	"i": "Dedicated account manager",
	"h": "Custom SLAs",
	"b": "Audit logs",
	"z": "Training sessions",
	"f": "Contact Sales",
	"m": "Get Started"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "preferences-section";
var content = {
	"e": "Email Notifications",
	"k": "Receive weekly benchmark reports",
	"n": "Toggle notifications",
	"c": "Dark Mode",
	"o": "Use dark color scheme",
	"m": "Toggle dark mode",
	"d": "Default Language",
	"f": "English (en)",
	"g": "French (fr)",
	"h": "German (de)",
	"l": "Spanish (es)",
	"i": "Japanese (ja)",
	"b": "Chinese Simplified (zh)",
	"a": "Arabic (ar)",
	"j": "Preferences"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "theme-toggle";
var content = {
	"themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"a": "Theme: Auto",
	"themeDark": "Theme: Dark",
	"themeLight": "Theme: Light",
	"themeModeModeClickTo": {
		"fields": ["mode"],
		"nodeType": "insertion",
		"insertion": "Theme mode: {{mode}}. Click to switch mode."
	}
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "pricing-header";
var content = {
	"b": "Simple, Transparent Pricing",
	"a": "Choose the plan that fits your team. No hidden fees."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "contact-form";
var content = {
	"l": "Your name",
	"a": "Bug Report",
	"h": "New Benchmark Idea",
	"f": "Methodology Question",
	"c": "Describe your question or idea...",
	"j": "Send Message",
	"g": "Name",
	"d": "Email",
	"k": "Topic",
	"b": "Contribution",
	"i": "Other",
	"e": "Message"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "team-header";
var content = {
	"b": "Our Team",
	"a": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "hero";
var content = {
	"a": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"d": "View Results",
	"hero": "Hero",
	"c": "Methodology",
	"b": "i18n Benchmark"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "careers-benefits";
var content = {
	"e": "Work from anywhere in the world",
	"c": "Remote-first",
	"a": "Competitive pay",
	"d": "Top-of-market compensation",
	"b": "Open source time",
	"f": "20% time for OSS contributions"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "products-grid";
var content = {
	"e": "Benchmark CLI",
	"r": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"f": "Benchmark Cloud",
	"c": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"g": "Benchmark Enterprise",
	"m": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"i": "Contact Us",
	"l": "Migration Assistant",
	"a": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"s": "Translation QA",
	"d": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"h": "Bundle Optimizer",
	"b": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"k": "Learn More",
	"j": "Free",
	"o": "$29/mo",
	"q": "$99 one-time",
	"n": "$19/mo",
	"p": "$49/mo"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "blog-list";
var content = {
	"g": "Comparing i18n Libraries in 2026: A Deep Dive",
	"m": "March 15, 2026",
	"w": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
	"k": "How to Reduce Your i18n Bundle by 60%",
	"n": "March 8, 2026",
	"q": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
	"u": "The State of Internationalization in React",
	"j": "February 28, 2026",
	"c": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
	"p": "Migrating from react-i18next to Lingui",
	"i": "February 15, 2026",
	"a": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"t": "Server Components and i18n: What Changes?",
	"h": "February 1, 2026",
	"r": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"f": "Benchmark Methodology: How We Test",
	"l": "January 20, 2026",
	"b": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"s": "Read More →",
	"e": "Benchmark",
	"v": "Tutorial",
	"d": "Analysis",
	"o": "Meta"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "settings-footer";
var content = {
	"b": "Save Changes",
	"a": "Cancel"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "settings-header";
var content = {
	"a": "Manage your account preferences and configuration.",
	"b": "Settings"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "footer";
var content = {
	"i": "Resources",
	"c": "Contact",
	"f": "GitHub",
	"h": "Methodology",
	"e": "Contributing",
	"b": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"a": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"d": "contact@intlayer.org",
	"g": "i18n Benchmark"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "mock-banner";
var content = { "a": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." };
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "faq-header1";
var content = {
	"b": "Frequently Asked Questions",
	"a": "Everything you need to know about i18n Benchmark."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "api-access-section";
var content = {
	"a": "API Access",
	"b": "API Key",
	"d": "Use this key to access the benchmarking API programmatically.",
	"c": "Copy"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "contact-header";
var content = {
	"a": "Get in Touch",
	"b": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "what-we-measure";
var content = {
	"a": "Bundle size impact",
	"i": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	"h": "Rendering overhead",
	"d": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	"e": "Hydration cost",
	"b": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"f": "Lazy loading effectiveness",
	"k": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"g": "Locale switch speed",
	"c": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"j": "What We Measure"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "about-grid";
var content = {
	"d": "Why This Exists",
	"a": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	"b": "Methodology",
	"c": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "understanding-impact";
var content = {
	"k": "Understanding the Impact",
	"p": "Why a single large JSON can hurt performance",
	"e": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"manageYourAccountPreferencesAnd": "Manage your account preferences and configuration.",
	"settings": "Settings",
	"h": "The JSON must be parsed on every page load — blocking the main thread.",
	"b": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"c": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"i": "The trade-offs of dynamic loading",
	"f": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"saveChanges": "Save Changes",
	"cancel": "Cancel",
	"n": "Waterfall requests:",
	"d": "Flash of untranslated content (FOUC):",
	"a": "Cache invalidation:",
	"o": "What this benchmark measures",
	"j": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"g": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
	"m": "users may briefly see translation keys or a fallback language before the chunk arrives.",
	"l": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "header";
var content = {
	"f": "Home",
	"h": "Methodology",
	"i": "Mock Pages",
	"k": "Products",
	"j": "Pricing",
	"m": "Team",
	"a": "Blog",
	"b": "Careers",
	"d": "FAQ",
	"c": "Contact",
	"l": "Settings",
	"e": "Go to GitHub",
	"header": "Header",
	"g": "i18n Bench"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "about-header";
var content = {
	"a": "About This Benchmark",
	"b": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "open-positions";
var content = {
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
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "careers-header";
var content = {
	"b": "Careers",
	"a": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "team-grid";
var content = {
	"o": "Sarah Chen",
	"h": "Founder & Lead Engineer",
	"g": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"l": "Marcus Weber",
	"n": "Performance Engineer",
	"p": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"a": "Aisha Patel",
	"d": "Developer Advocate",
	"m": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"q": "Tomás Rodríguez",
	"i": "Full-Stack Developer",
	"j": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"r": "Yuki Tanaka",
	"c": "Data Analyst",
	"f": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"e": "Elena Kowalski",
	"b": "Community Manager",
	"k": "Manages community contributions, partnerships, and events. Background in open source governance."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "profile-section";
var content = {
	"a": "Display Name",
	"c": "Profile",
	"b": "Email"
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };
var key = "faq-list";
var content = {
	"m": "What is i18n Benchmark?",
	"c": "How are benchmarks conducted?",
	"k": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
	"n": "Which libraries are currently supported?",
	"l": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
	"a": "Can I submit my own benchmarks?",
	"o": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
	"e": "How often are benchmarks updated?",
	"j": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
	"g": "Is the data reliable?",
	"i": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
	"b": "Do you offer consulting services?",
	"p": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
	"d": "How can I contribute?",
	"h": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.",
	"f": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
};
var en_default = {
	key,
	content
};
export { content, en_default as default, key };

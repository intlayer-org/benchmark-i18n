import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var p = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, m = ((e) => ({
	de: () => p(Object.assign({
		"./json/about-grid/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/de.json"),
		"./json/about-header/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/de.json"),
		"./json/api-access-section/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/de.json"),
		"./json/blog-header/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/de.json"),
		"./json/blog-list/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/de.json"),
		"./json/careers-benefits/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-benefits/de.json"),
		"./json/careers-header/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/de.json"),
		"./json/contact-form/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/de.json"),
		"./json/contact-header/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-header/de.json"),
		"./json/faq-header1/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-header1/de.json"),
		"./json/faq-list/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/de.json"),
		"./json/footer/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/footer/de.json"),
		"./json/header/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/header/de.json"),
		"./json/hero/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/hero/de.json"),
		"./json/mock-banner/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/de.json"),
		"./json/open-positions/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/de.json"),
		"./json/preferences-section/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/de.json"),
		"./json/pricing-header/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/de.json"),
		"./json/pricing-tiers/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/de.json"),
		"./json/products-grid/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/de.json"),
		"./json/products-header/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/de.json"),
		"./json/profile-section/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/de.json"),
		"./json/results-table/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/de.json"),
		"./json/settings-footer/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/de.json"),
		"./json/settings-header/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/de.json"),
		"./json/team-grid/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/de.json"),
		"./json/team-header/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/de.json"),
		"./json/theme-toggle/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json"),
		"./json/understanding-impact/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/de.json"),
		"./json/what-we-measure/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/de.json"),
		"./json/why-it-matters/de.json": () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/de.json")
	}), `./json/${e}/de.json`, 4).then((e) => e.default),
	en: () => p(Object.assign({
		"./json/about-grid/en.json": () => import("./en-CEJUJw1X.js"),
		"./json/about-header/en.json": () => import("./en-CWjwJCzY.js"),
		"./json/api-access-section/en.json": () => import("./en-CrceJYhB.js"),
		"./json/blog-header/en.json": () => import("./en-DiokDNe6.js"),
		"./json/blog-list/en.json": () => import("./en-SFynLKHc.js"),
		"./json/careers-benefits/en.json": () => import("./en-B4xTQT6f.js"),
		"./json/careers-header/en.json": () => import("./en-NCUu3aNv.js"),
		"./json/contact-form/en.json": () => import("./en-DzLGhd_V.js"),
		"./json/contact-header/en.json": () => import("./en-B-oqZeoB.js"),
		"./json/faq-header1/en.json": () => import("./en-iigaauqS.js"),
		"./json/faq-list/en.json": () => import("./en-CxDTvltq.js"),
		"./json/footer/en.json": () => import("./en-HBxwUrZF.js"),
		"./json/header/en.json": () => import("./en-CKzF62Cy.js"),
		"./json/hero/en.json": () => import("./en-DHK8s-ba.js"),
		"./json/mock-banner/en.json": () => import("./en-KRtlT8G1.js"),
		"./json/open-positions/en.json": () => import("./en-DMvhgbu5.js"),
		"./json/preferences-section/en.json": () => import("./en-47Ujpdze.js"),
		"./json/pricing-header/en.json": () => import("./en-CbIluh76.js"),
		"./json/pricing-tiers/en.json": () => import("./en-CaO13g2M.js"),
		"./json/products-grid/en.json": () => import("./en-BH6Yn3W5.js"),
		"./json/products-header/en.json": () => import("./en-D1HRzJLT.js"),
		"./json/profile-section/en.json": () => import("./en-DYlsaSg5.js"),
		"./json/results-table/en.json": () => import("./en-3xIMzaXu.js"),
		"./json/settings-footer/en.json": () => import("./en-DpNaObjo.js"),
		"./json/settings-header/en.json": () => import("./en-PyZ3Xlkv.js"),
		"./json/team-grid/en.json": () => import("./en-BEamSnB9.js"),
		"./json/team-header/en.json": () => import("./en-dlwIEwOv.js"),
		"./json/theme-toggle/en.json": () => import("./en-LD9fBPkI.js"),
		"./json/understanding-impact/en.json": () => import("./en-C4hy4QSw.js"),
		"./json/what-we-measure/en.json": () => import("./en-BF3vwsnr.js"),
		"./json/why-it-matters/en.json": () => import("./en-5GNwlJ_V.js")
	}), `./json/${e}/en.json`, 4).then((e) => e.default),
	es: () => p(Object.assign({
		"./json/about-grid/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/es.json"),
		"./json/about-header/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/es.json"),
		"./json/api-access-section/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/es.json"),
		"./json/blog-header/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/es.json"),
		"./json/blog-list/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/es.json"),
		"./json/careers-benefits/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-benefits/es.json"),
		"./json/careers-header/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/es.json"),
		"./json/contact-form/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/es.json"),
		"./json/contact-header/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-header/es.json"),
		"./json/faq-header1/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-header1/es.json"),
		"./json/faq-list/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/es.json"),
		"./json/footer/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/footer/es.json"),
		"./json/header/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/header/es.json"),
		"./json/hero/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/hero/es.json"),
		"./json/mock-banner/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/es.json"),
		"./json/open-positions/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/es.json"),
		"./json/preferences-section/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/es.json"),
		"./json/pricing-header/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/es.json"),
		"./json/pricing-tiers/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/es.json"),
		"./json/products-grid/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/es.json"),
		"./json/products-header/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/es.json"),
		"./json/profile-section/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/es.json"),
		"./json/results-table/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/es.json"),
		"./json/settings-footer/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/es.json"),
		"./json/settings-header/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/es.json"),
		"./json/team-grid/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/es.json"),
		"./json/team-header/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/es.json"),
		"./json/theme-toggle/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json"),
		"./json/understanding-impact/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/es.json"),
		"./json/what-we-measure/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/es.json"),
		"./json/why-it-matters/es.json": () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/es.json")
	}), `./json/${e}/es.json`, 4).then((e) => e.default),
	fr: () => p(Object.assign({
		"./json/about-grid/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/fr.json"),
		"./json/about-header/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/fr.json"),
		"./json/api-access-section/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/fr.json"),
		"./json/blog-header/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/fr.json"),
		"./json/blog-list/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/fr.json"),
		"./json/careers-benefits/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-benefits/fr.json"),
		"./json/careers-header/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/fr.json"),
		"./json/contact-form/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/fr.json"),
		"./json/contact-header/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-header/fr.json"),
		"./json/faq-header1/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-header1/fr.json"),
		"./json/faq-list/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/fr.json"),
		"./json/footer/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/footer/fr.json"),
		"./json/header/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/header/fr.json"),
		"./json/hero/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/hero/fr.json"),
		"./json/mock-banner/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/fr.json"),
		"./json/open-positions/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/fr.json"),
		"./json/preferences-section/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/fr.json"),
		"./json/pricing-header/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/fr.json"),
		"./json/pricing-tiers/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/fr.json"),
		"./json/products-grid/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/fr.json"),
		"./json/products-header/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/fr.json"),
		"./json/profile-section/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/fr.json"),
		"./json/results-table/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/fr.json"),
		"./json/settings-footer/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/fr.json"),
		"./json/settings-header/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/fr.json"),
		"./json/team-grid/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/fr.json"),
		"./json/team-header/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/fr.json"),
		"./json/theme-toggle/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json"),
		"./json/understanding-impact/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/fr.json"),
		"./json/what-we-measure/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/fr.json"),
		"./json/why-it-matters/fr.json": () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/fr.json")
	}), `./json/${e}/fr.json`, 4).then((e) => e.default),
	it: () => p(Object.assign({
		"./json/about-grid/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/it.json"),
		"./json/about-header/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/it.json"),
		"./json/api-access-section/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/it.json"),
		"./json/blog-header/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/it.json"),
		"./json/blog-list/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/it.json"),
		"./json/careers-benefits/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-benefits/it.json"),
		"./json/careers-header/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/it.json"),
		"./json/contact-form/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/it.json"),
		"./json/contact-header/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-header/it.json"),
		"./json/faq-header1/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-header1/it.json"),
		"./json/faq-list/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/it.json"),
		"./json/footer/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/footer/it.json"),
		"./json/header/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/header/it.json"),
		"./json/hero/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/hero/it.json"),
		"./json/mock-banner/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/it.json"),
		"./json/open-positions/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/it.json"),
		"./json/preferences-section/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/it.json"),
		"./json/pricing-header/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/it.json"),
		"./json/pricing-tiers/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/it.json"),
		"./json/products-grid/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/it.json"),
		"./json/products-header/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/it.json"),
		"./json/profile-section/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/it.json"),
		"./json/results-table/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/it.json"),
		"./json/settings-footer/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/it.json"),
		"./json/settings-header/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/it.json"),
		"./json/team-grid/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/it.json"),
		"./json/team-header/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/it.json"),
		"./json/theme-toggle/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json"),
		"./json/understanding-impact/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/it.json"),
		"./json/what-we-measure/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/it.json"),
		"./json/why-it-matters/it.json": () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/it.json")
	}), `./json/${e}/it.json`, 4).then((e) => e.default),
	ja: () => p(Object.assign({
		"./json/about-grid/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/ja.json"),
		"./json/about-header/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/ja.json"),
		"./json/api-access-section/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/ja.json"),
		"./json/blog-header/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/ja.json"),
		"./json/blog-list/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ja.json"),
		"./json/careers-benefits/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-benefits/ja.json"),
		"./json/careers-header/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/ja.json"),
		"./json/contact-form/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ja.json"),
		"./json/contact-header/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-header/ja.json"),
		"./json/faq-header1/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-header1/ja.json"),
		"./json/faq-list/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/ja.json"),
		"./json/footer/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/footer/ja.json"),
		"./json/header/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/header/ja.json"),
		"./json/hero/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ja.json"),
		"./json/mock-banner/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ja.json"),
		"./json/open-positions/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/ja.json"),
		"./json/preferences-section/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ja.json"),
		"./json/pricing-header/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/ja.json"),
		"./json/pricing-tiers/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/ja.json"),
		"./json/products-grid/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/ja.json"),
		"./json/products-header/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ja.json"),
		"./json/profile-section/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/ja.json"),
		"./json/results-table/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/ja.json"),
		"./json/settings-footer/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/ja.json"),
		"./json/settings-header/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/ja.json"),
		"./json/team-grid/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/ja.json"),
		"./json/team-header/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/ja.json"),
		"./json/theme-toggle/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json"),
		"./json/understanding-impact/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/ja.json"),
		"./json/what-we-measure/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/ja.json"),
		"./json/why-it-matters/ja.json": () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/ja.json")
	}), `./json/${e}/ja.json`, 4).then((e) => e.default),
	ko: () => p(Object.assign({
		"./json/about-grid/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/ko.json"),
		"./json/about-header/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/ko.json"),
		"./json/api-access-section/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/ko.json"),
		"./json/blog-header/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/ko.json"),
		"./json/blog-list/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ko.json"),
		"./json/careers-benefits/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-benefits/ko.json"),
		"./json/careers-header/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/ko.json"),
		"./json/contact-form/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ko.json"),
		"./json/contact-header/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-header/ko.json"),
		"./json/faq-header1/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-header1/ko.json"),
		"./json/faq-list/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/ko.json"),
		"./json/footer/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/footer/ko.json"),
		"./json/header/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/header/ko.json"),
		"./json/hero/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ko.json"),
		"./json/mock-banner/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ko.json"),
		"./json/open-positions/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/ko.json"),
		"./json/preferences-section/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ko.json"),
		"./json/pricing-header/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/ko.json"),
		"./json/pricing-tiers/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/ko.json"),
		"./json/products-grid/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/ko.json"),
		"./json/products-header/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ko.json"),
		"./json/profile-section/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/ko.json"),
		"./json/results-table/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/ko.json"),
		"./json/settings-footer/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/ko.json"),
		"./json/settings-header/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/ko.json"),
		"./json/team-grid/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/ko.json"),
		"./json/team-header/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/ko.json"),
		"./json/theme-toggle/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json"),
		"./json/understanding-impact/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/ko.json"),
		"./json/what-we-measure/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/ko.json"),
		"./json/why-it-matters/ko.json": () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/ko.json")
	}), `./json/${e}/ko.json`, 4).then((e) => e.default),
	pt: () => p(Object.assign({
		"./json/about-grid/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/pt.json"),
		"./json/about-header/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/pt.json"),
		"./json/api-access-section/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/pt.json"),
		"./json/blog-header/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/pt.json"),
		"./json/blog-list/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/pt.json"),
		"./json/careers-benefits/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-benefits/pt.json"),
		"./json/careers-header/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/pt.json"),
		"./json/contact-form/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/pt.json"),
		"./json/contact-header/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-header/pt.json"),
		"./json/faq-header1/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-header1/pt.json"),
		"./json/faq-list/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/pt.json"),
		"./json/footer/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/footer/pt.json"),
		"./json/header/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/header/pt.json"),
		"./json/hero/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/hero/pt.json"),
		"./json/mock-banner/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/pt.json"),
		"./json/open-positions/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/pt.json"),
		"./json/preferences-section/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/pt.json"),
		"./json/pricing-header/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/pt.json"),
		"./json/pricing-tiers/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/pt.json"),
		"./json/products-grid/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/pt.json"),
		"./json/products-header/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/pt.json"),
		"./json/profile-section/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/pt.json"),
		"./json/results-table/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/pt.json"),
		"./json/settings-footer/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/pt.json"),
		"./json/settings-header/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/pt.json"),
		"./json/team-grid/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/pt.json"),
		"./json/team-header/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/pt.json"),
		"./json/theme-toggle/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json"),
		"./json/understanding-impact/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/pt.json"),
		"./json/what-we-measure/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/pt.json"),
		"./json/why-it-matters/pt.json": () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/pt.json")
	}), `./json/${e}/pt.json`, 4).then((e) => e.default),
	ru: () => p(Object.assign({
		"./json/about-grid/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/ru.json"),
		"./json/about-header/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/ru.json"),
		"./json/api-access-section/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/ru.json"),
		"./json/blog-header/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/ru.json"),
		"./json/blog-list/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/ru.json"),
		"./json/careers-benefits/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-benefits/ru.json"),
		"./json/careers-header/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/ru.json"),
		"./json/contact-form/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ru.json"),
		"./json/contact-header/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-header/ru.json"),
		"./json/faq-header1/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-header1/ru.json"),
		"./json/faq-list/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/ru.json"),
		"./json/footer/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/footer/ru.json"),
		"./json/header/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/header/ru.json"),
		"./json/hero/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/hero/ru.json"),
		"./json/mock-banner/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/ru.json"),
		"./json/open-positions/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/ru.json"),
		"./json/preferences-section/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ru.json"),
		"./json/pricing-header/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/ru.json"),
		"./json/pricing-tiers/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/ru.json"),
		"./json/products-grid/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/ru.json"),
		"./json/products-header/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/ru.json"),
		"./json/profile-section/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/ru.json"),
		"./json/results-table/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/ru.json"),
		"./json/settings-footer/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/ru.json"),
		"./json/settings-header/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/ru.json"),
		"./json/team-grid/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/ru.json"),
		"./json/team-header/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/ru.json"),
		"./json/theme-toggle/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json"),
		"./json/understanding-impact/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/ru.json"),
		"./json/what-we-measure/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/ru.json"),
		"./json/why-it-matters/ru.json": () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/ru.json")
	}), `./json/${e}/ru.json`, 4).then((e) => e.default),
	zh: () => p(Object.assign({
		"./json/about-grid/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-grid/zh.json"),
		"./json/about-header/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/about-header/zh.json"),
		"./json/api-access-section/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/api-access-section/zh.json"),
		"./json/blog-header/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-header/zh.json"),
		"./json/blog-list/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/blog-list/zh.json"),
		"./json/careers-benefits/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-benefits/zh.json"),
		"./json/careers-header/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/careers-header/zh.json"),
		"./json/contact-form/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/zh.json"),
		"./json/contact-header/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/contact-header/zh.json"),
		"./json/faq-header1/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-header1/zh.json"),
		"./json/faq-list/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/faq-list/zh.json"),
		"./json/footer/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/footer/zh.json"),
		"./json/header/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/header/zh.json"),
		"./json/hero/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/hero/zh.json"),
		"./json/mock-banner/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/mock-banner/zh.json"),
		"./json/open-positions/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/open-positions/zh.json"),
		"./json/preferences-section/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/zh.json"),
		"./json/pricing-header/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-header/zh.json"),
		"./json/pricing-tiers/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/pricing-tiers/zh.json"),
		"./json/products-grid/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-grid/zh.json"),
		"./json/products-header/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/products-header/zh.json"),
		"./json/profile-section/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/profile-section/zh.json"),
		"./json/results-table/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/results-table/zh.json"),
		"./json/settings-footer/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-footer/zh.json"),
		"./json/settings-header/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/settings-header/zh.json"),
		"./json/team-grid/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-grid/zh.json"),
		"./json/team-header/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/team-header/zh.json"),
		"./json/theme-toggle/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json"),
		"./json/understanding-impact/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/understanding-impact/zh.json"),
		"./json/what-we-measure/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/what-we-measure/zh.json"),
		"./json/why-it-matters/zh.json": () => import("../../../../.intlayer/dynamic_dictionary/json/why-it-matters/zh.json")
	}), `./json/${e}/zh.json`, 4).then((e) => e.default)
}))("careers-benefits"), h = {
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
	defaultLocale: "en"
}, g = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, _ = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : d(u, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && r in n ? n[r] : Reflect.get(e, r, i);
	} });
}, v = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = v(e);
				if (typeof r == "object" && r && "type" in r) {
					let e = r;
					return n(e.type, {
						...e.props,
						key: t
					}, ...Array.isArray(e.props?.children) ? e.props.children : e.props?.children === void 0 ? [] : [e.props.children]);
				}
				return r;
			});
			return {
				...e,
				props: {
					...e.props,
					children: r
				}
			};
		} else if (t != null) {
			let n = v(t);
			return {
				...e,
				props: {
					...e.props,
					children: [n]
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: []
			}
		};
	})(e);
	return n(t ?? "span", r, ...r.children);
}, y = "translation", b = "insertion", ee = "object", te = "array", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: te,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: ee,
					key: r
				}]
			}, i = x(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, S = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), C = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, w = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (C(e) && C(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : w(e[r], t[r]));
		return n;
	}
	return e;
}, ne = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => w(e, t));
}, re = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", ie = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => re ? T : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: y,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ne(o, e, t);
	}
}, D = T, O = T, ae = ie ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = S(i, e);
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
}, k = T, A = (e) => T, j = T, oe = (e, t = !0) => [
	E(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	D,
	O,
	ae,
	A(e ?? h.defaultLocale),
	j,
	k
], M = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), N = (e, t, n = oe(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return M(e.content, r, n);
}, P = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", F = /\{\{\s*(.*?)\s*\}\}/g, I = (e, t = {}) => {
	if (!Object.values(t).some(P)) return {
		isSimple: !0,
		parts: e.replace(F, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(F), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, L = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", R = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", z = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", B = L ? T : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => _({
		...n,
		value: n.children,
		children: n.children
	})
}, V = R ? T : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => _({
		...n,
		value: "[[react-element]]",
		children: v(e)
	})
}, H = (t, r) => {
	let i = I(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, U = z ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = H(i, e);
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
}, W = T, G = T, K = /* @__PURE__ */ new Map(), q = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		E(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		D,
		O,
		A(e ?? h.defaultLocale),
		j,
		k,
		B,
		V,
		U,
		W,
		G
	];
	return K.set(n, r), r;
}, se = (e, t) => N(e, t, q(t)), ce = (e, t = h?.locales, n = h?.defaultLocale) => {
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
}, J = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var le = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ue = (e) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!J) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, de = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !J && g.storage.cookies) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, le(r, e, i));
			} catch {}
		}
	}
}, Y = {
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
}, X = ue(Y), fe = (e, t) => de(e, {
	...Y,
	isCookieEnabled: t
}), pe = () => {
	let { locale: e } = i(Z) ?? {}, t = c(null);
	a(() => {}, []), a(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, me = ({ children: e }) => (pe(), e), he = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = t({
	locale: X ?? h?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), ge = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: o }) => {
	let { locales: s, defaultLocale: c } = h ?? {}, [u, f] = l(e ?? X ?? t ?? c);
	a(() => {
		e && e !== u && f(e);
	}, [e]), a(() => {
		he();
	}, []);
	let p = r ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), fe(e, o);
		}
	}), m = ce(u);
	return d(Z.Provider, {
		value: {
			locale: m,
			setLocale: p,
			disableEditor: i
		},
		children: n
	});
}, _e = ({ children: e, ...t }) => f(ge, {
	...t,
	children: [d(me, {}), e]
}), ve = (e, t) => {
	let { locale: n } = i(Z) ?? {};
	return s(() => se(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, ye = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return { read() {
		if (t === "pending") throw r;
		if (t === "error") throw n;
		return n;
	} };
}, Q = /* @__PURE__ */ new Map(), be = (e, t) => (Q.has(e) || Q.set(e, ye(t)), Q.get(e).read()), $ = (e, t, n) => {
	let { locale: r } = i(Z) ?? {}, a = s(() => n ?? r ?? h.defaultLocale, [r, n]);
	return ve(be(`${String(t)}.${a}`, e[a]?.()), a);
}, xe = (e) => d(_e, { ...e });
function Se() {
	let e = $(m, "careers-benefits");
	return d("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: [
			{
				label: e.c.value,
				value: e.e.value
			},
			{
				label: e.a.value,
				value: e.d.value
			},
			{
				label: e.b.value,
				value: e.f.value
			}
		].map((e) => f("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [d("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}), d("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			})]
		}, e.label))
	});
}
function Ce() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function we(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Te({ children: e, locale: t }) {
	let [n] = l(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		we("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		Ce();
	}, []), d(xe, {
		locale: t,
		children: e
	});
}
function Ee({ children: e }) {
	return d(Te, {
		locale: "en",
		children: e
	});
}
function De() {
	return d(Ee, { children: d(Se, {}) });
}
export { De as default };
var e = "results-table", t = {
	i: "Sample Results",
	b: "Bundle Size",
	f: "Lookup Time",
	d: "Lazy Loading",
	j: "Yes",
	g: "Manual",
	e: "Library",
	a: "Built-in",
	c: {
		fields: ["val"],
		nodeType: "insertion",
		insertion: "{{val}} kB"
	},
	h: {
		fields: ["val"],
		nodeType: "insertion",
		insertion: "{{val}}ms"
	}
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "preferences-section", t = {
	e: "Email Notifications",
	k: "Receive weekly benchmark reports",
	n: "Toggle notifications",
	c: "Dark Mode",
	o: "Use dark color scheme",
	m: "Toggle dark mode",
	d: "Default Language",
	f: "English (en)",
	g: "French (fr)",
	h: "German (de)",
	l: "Spanish (es)",
	i: "Japanese (ja)",
	b: "Chinese Simplified (zh)",
	a: "Arabic (ar)",
	j: "Preferences"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "why-it-matters", t = {
	g: "Why These Metrics Matter",
	a: "Bundle Size",
	f: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	e: "Rendering & Hydration",
	b: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	c: "Dynamic Loading",
	d: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "contact-header", t = {
	a: "Get in Touch",
	b: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "careers-benefits", t = {
	e: "Work from anywhere in the world",
	c: "Remote-first",
	a: "Competitive pay",
	d: "Top-of-market compensation",
	b: "Open source time",
	f: "20% time for OSS contributions"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "team-grid", t = {
	o: "Sarah Chen",
	h: "Founder & Lead Engineer",
	g: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	l: "Marcus Weber",
	n: "Performance Engineer",
	p: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	a: "Aisha Patel",
	d: "Developer Advocate",
	m: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	q: "Tomás Rodríguez",
	i: "Full-Stack Developer",
	j: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	r: "Yuki Tanaka",
	c: "Data Analyst",
	f: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	e: "Elena Kowalski",
	b: "Community Manager",
	k: "Manages community contributions, partnerships, and events. Background in open source governance."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "what-we-measure", t = {
	a: "Bundle size impact",
	i: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	h: "Rendering overhead",
	d: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	e: "Hydration cost",
	b: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	f: "Lazy loading effectiveness",
	k: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	g: "Locale switch speed",
	c: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	j: "What We Measure"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "products-grid", t = {
	e: "Benchmark CLI",
	r: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	f: "Benchmark Cloud",
	c: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	g: "Benchmark Enterprise",
	m: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	i: "Contact Us",
	l: "Migration Assistant",
	a: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	s: "Translation QA",
	d: "Automated quality checks for missing translations, pluralization issues, and context errors.",
	h: "Bundle Optimizer",
	b: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	k: "Learn More",
	j: "Free",
	o: "$29/mo",
	q: "$99 one-time",
	n: "$19/mo",
	p: "$49/mo"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "understanding-impact", t = {
	k: "Understanding the Impact",
	p: "Why a single large JSON can hurt performance",
	e: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	manageYourAccountPreferencesAnd: "Manage your account preferences and configuration.",
	settings: "Settings",
	h: "The JSON must be parsed on every page load — blocking the main thread.",
	b: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	c: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	i: "The trade-offs of dynamic loading",
	f: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	saveChanges: "Save Changes",
	cancel: "Cancel",
	n: "Waterfall requests:",
	d: "Flash of untranslated content (FOUC):",
	a: "Cache invalidation:",
	o: "What this benchmark measures",
	j: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	g: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
	m: "users may briefly see translation keys or a fallback language before the chunk arrives.",
	l: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "about-grid", t = {
	d: "Why This Exists",
	a: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	b: "Methodology",
	c: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "header", t = {
	f: "Home",
	h: "Methodology",
	i: "Mock Pages",
	k: "Products",
	j: "Pricing",
	m: "Team",
	a: "Blog",
	b: "Careers",
	d: "FAQ",
	c: "Contact",
	l: "Settings",
	e: "Go to GitHub",
	header: "Header",
	g: "i18n Bench"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "about-header", t = {
	a: "About This Benchmark",
	b: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "pricing-tiers", t = {
	y: "Starter",
	r: "$0",
	l: "forever",
	c: {
		fields: [],
		nodeType: "insertion",
		insertion: "{runs} benchmark runs/day"
	},
	o: {
		fields: [],
		nodeType: "insertion",
		insertion: "{libs} libraries"
	},
	e: "Community support",
	w: "Public results",
	v: "Pro",
	s: "$29",
	p: "/month",
	aa: "Unlimited runs",
	a: "All libraries",
	t: "Priority support",
	u: "Private results",
	d: "CI integration",
	n: "Historical data",
	j: "Enterprise",
	g: "Custom",
	k: "Everything in Pro",
	q: "On-premise option",
	x: "SSO & SAML",
	i: "Dedicated account manager",
	h: "Custom SLAs",
	b: "Audit logs",
	z: "Training sessions",
	f: "Contact Sales",
	m: "Get Started"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "pricing-header", t = {
	b: "Simple, Transparent Pricing",
	a: "Choose the plan that fits your team. No hidden fees."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "api-access-section", t = {
	a: "API Access",
	b: "API Key",
	d: "Use this key to access the benchmarking API programmatically.",
	c: "Copy"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "faq-list", t = {
	m: "What is i18n Benchmark?",
	c: "How are benchmarks conducted?",
	k: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
	n: "Which libraries are currently supported?",
	l: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
	a: "Can I submit my own benchmarks?",
	o: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
	e: "How often are benchmarks updated?",
	j: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
	g: "Is the data reliable?",
	i: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
	b: "Do you offer consulting services?",
	p: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
	d: "How can I contribute?",
	h: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.",
	f: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "products-header", t = {
	b: "Tools and services to streamline your internationalization workflow.",
	a: "Products"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "hero", t = {
	a: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	d: "View Results",
	hero: "Hero",
	c: "Methodology",
	b: "i18n Benchmark"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "open-positions", t = {
	r: "Senior Frontend Engineer",
	c: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	b: "Backend Engineer",
	f: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
	s: "Technical Writer",
	e: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
	g: "DevRel Engineer",
	q: "San Francisco / Remote",
	i: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
	o: "QA Engineer",
	k: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
	m: "Open Positions",
	a: "Apply Now",
	p: "Remote",
	l: "Full-time",
	n: "Part-time",
	j: "Engineering",
	h: "Documentation",
	d: "Community"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "profile-section", t = {
	a: "Display Name",
	c: "Profile",
	b: "Email"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "blog-header", t = {
	b: "Insights, tutorials, and analysis from the i18n community.",
	a: "Blog"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "settings-footer", t = {
	b: "Save Changes",
	a: "Cancel"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "contact-form", t = {
	l: "Your name",
	a: "Bug Report",
	h: "New Benchmark Idea",
	f: "Methodology Question",
	c: "Describe your question or idea...",
	j: "Send Message",
	g: "Name",
	d: "Email",
	k: "Topic",
	b: "Contribution",
	i: "Other",
	e: "Message"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "footer", t = {
	i: "Resources",
	c: "Contact",
	f: "GitHub",
	h: "Methodology",
	e: "Contributing",
	b: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	a: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	d: "contact@intlayer.org",
	g: "i18n Benchmark"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "mock-banner", t = { a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." }, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "theme-toggle", t = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	a: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light",
	themeModeModeClickTo: {
		fields: ["mode"],
		nodeType: "insertion",
		insertion: "Theme mode: {{mode}}. Click to switch mode."
	}
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "careers-header", t = {
	b: "Careers",
	a: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "settings-header", t = {
	a: "Manage your account preferences and configuration.",
	b: "Settings"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "blog-list", t = {
	g: "Comparing i18n Libraries in 2026: A Deep Dive",
	m: "March 15, 2026",
	w: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
	k: "How to Reduce Your i18n Bundle by 60%",
	n: "March 8, 2026",
	q: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
	u: "The State of Internationalization in React",
	j: "February 28, 2026",
	c: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
	p: "Migrating from react-i18next to Lingui",
	i: "February 15, 2026",
	a: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	t: "Server Components and i18n: What Changes?",
	h: "February 1, 2026",
	r: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	f: "Benchmark Methodology: How We Test",
	l: "January 20, 2026",
	b: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	s: "Read More →",
	e: "Benchmark",
	v: "Tutorial",
	d: "Analysis",
	o: "Meta"
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "team-header", t = {
	b: "Our Team",
	a: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };
var e = "faq-header1", t = {
	b: "Frequently Asked Questions",
	a: "Everything you need to know about i18n Benchmark."
}, n = {
	key: e,
	content: t
};
export { t as content, n as default, e as key };

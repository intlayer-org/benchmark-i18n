import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
function s(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var c = {}, l = [
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
], u = "PARAGLIDE_LOCALE", d = 3456e4, f = [
	"cookie",
	"globalVariable",
	"baseLocale"
], p = [], m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	let e = f;
	!m && typeof window < "u" && window.location?.href && (e = L(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = j();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (z(t) && R.has(t)) {
			let e = R.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ee(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = f;
	!m && typeof window < "u" && window.location?.href && (a = L(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t, k();
	} else if (t === "baseLocale") continue;
	else if (z(t) && R.has(t)) {
		let n = R.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, x = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function ee(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function C(e) {
	return e;
}
function w(e, t) {
	return e.exec(t.href);
}
var T = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), E = RegExp(`(?:^|;\\s*)${T}=([^;]*)`), D = Symbol(), O = D;
function k() {
	O = D;
}
function A() {
	typeof queueMicrotask == "function" ? queueMicrotask(k) : Promise.resolve().then(k);
}
function j() {
	if (typeof document > "u") return;
	if (O !== D) return O;
	let e = document.cookie.match(E)?.[1];
	return O = S(e), A(), O;
}
function M(e) {
	return N(e);
}
function N(e) {
	let t = C(typeof e == "string" ? new URL(e, x()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && S(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), C(t);
}
var P, F;
function I(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (P === t) return F;
	let n = C(new URL(t, "http://example.com")), r = M(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of p) if (w(new c(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return P = t, F = a, a;
}
function L(e) {
	let t = I(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var R = /* @__PURE__ */ new Map();
function z(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var B = () => "About This Benchmark", V = () => "À propos de ce benchmark", H = () => "Sobre este benchmark", U = () => "Über diesen Benchmark", W = () => "Informazioni su questo benchmark", G = () => "Sobre este benchmark", K = () => "关于本基准测试", q = () => "このベンチマークについて", te = () => "이 벤치마크에 대하여", J = () => "Об этом бенчмарке", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? te(e) : n === "ru" ? J(e) : B(e);
}), X = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", Z = () => "Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.", Q = () => "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.", ne = () => "Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.", re = () => "Questa è un'applicazione di test open-source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione React multi-pagina realistica dove diverse librerie i18n possono essere integrate e misurate in condizioni identiche.", ie = () => "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React realista e de várias páginas onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas.", ae = () => "这是一个开源测试应用程序 —— 不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。", oe = () => "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、同一の条件下でさまざまなi18nライブラリを統合して測定できる、現実的なマルチページのReactアプリを提供することです。", se = () => "이것은 제품이나 회사가 아닌 오픈 소스 테스트 애플리케이션입니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다.", ce = () => "Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Z(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : X(e);
});
function le() {
	return s("AboutHeader"), a(r, { children: [i("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: Y()
	}), i("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: $()
	})] });
}
function ue() {
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
function de(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function fe({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		de("AppRoot", c);
	}, [c]), e(() => {
		b(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		ue();
	}, []), i(r, { children: a });
}
function pe({ children: e }) {
	return i(fe, { children: e });
}
function me() {
	return i(pe, { children: i(le, {}) });
}
export { me as default };

import { Profiler as e, useEffect as t, useLayoutEffect as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
function s(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
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
], p = [], m, h;
function g(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (m === t) return h;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of p) if (new c(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return m = t, h = r, r;
}
function _(e) {
	let t = g(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var v = void 0, y = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var b, x = !1, S = () => {
	if (v) {
		let e = v?.getStore()?.locale;
		if (e) return e;
	}
	let e = f;
	!y && typeof window < "u" && window.location?.href && (e = _(window.location.href));
	let t = C(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return x || (b = t, x = !0, T(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function C(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = O();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && b !== void 0) n = b;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return D(t);
			}
		}
		let e = E(n);
		if (e) return e;
	}
}
var w = (e) => {
	e ? window.location.href = e : window.location.reload();
}, T = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = S();
	} catch {}
	let i = [], a = f;
	!y && typeof window < "u" && window.location?.href && (a = _(window.location.href));
	for (let t of a) if (t === "globalVariable") b = e;
	else if (t === "cookie") {
		if (y || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!y && n.reload && window.location && e !== r && w(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function E(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function D(e) {
	let t = E(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function O() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${u}=([^;]+)`))?.[2];
	return E(e);
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var j = () => "About This Benchmark", M = () => "À propos de ce benchmark", N = () => "Sobre este benchmark", P = () => "Über diesen Benchmark", F = () => "Informazioni su questo benchmark", I = () => "Sobre este benchmark", L = () => "关于本基准测试", R = () => "このベンチマークについて", z = () => "이 벤치마크에 대하여", ee = () => "Об этом бенчмарке", B = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? j(e) : n === "fr" ? M(e) : n === "es" ? N(e) : n === "de" ? P(e) : n === "it" ? F(e) : n === "pt" ? I(e) : n === "zh" ? L(e) : n === "ja" ? R(e) : n === "ko" ? z(e) : ee(e);
}), V = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", H = () => "Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.", U = () => "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.", W = () => "Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.", G = () => "Questa è un'applicazione di test open-source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione React multi-pagina realistica dove diverse librerie i18n possono essere integrate e misurate in condizioni identiche.", K = () => "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React realista e de várias páginas onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas.", q = () => "这是一个开源测试应用程序 —— 不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。", J = () => "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、同一の条件下でさまざまなi18nライブラリを統合して測定できる、現実的なマルチページのReactアプリを提供することです。", Y = () => "이것은 제품이나 회사가 아닌 오픈 소스 테스트 애플리케이션입니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다.", X = () => "Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? V(e) : n === "fr" ? H(e) : n === "es" ? U(e) : n === "de" ? W(e) : n === "it" ? G(e) : n === "pt" ? K(e) : n === "zh" ? q(e) : n === "ja" ? J(e) : n === "ko" ? Y(e) : X(e);
});
function Q() {
	return s("AboutHeader"), a(r, { children: [i("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: B()
	}), i("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: Z()
	})] });
}
function $() {
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
function te(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function ne({ children: n }) {
	let r = o().locale ?? "en";
	return t(() => {
		T(r), document.documentElement.lang = r;
	}, [r]), t(() => {
		$();
	}, []), i(e, {
		id: "AppRoot",
		onRender: te,
		children: n
	});
}
function re({ children: e }) {
	return i(ne, { children: e });
}
function ie() {
	return i(re, { children: i(Q, {}) });
}
export { ie as default };

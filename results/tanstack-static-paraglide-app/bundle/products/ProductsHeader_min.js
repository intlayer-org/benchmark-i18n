import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = k(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = k(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (j(t) && A.has(t)) {
		let n = A.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ne() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), te(), S;
}
function w(e) {
	return T(e);
}
function T(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var E, D;
function O(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (E === t) return D;
	let r = _(new URL(t, "http://example.com")), i = w(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (v(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return E = t, D = o, o;
}
function k(e) {
	let t = O(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "Products", N = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", P = () => "Tools and services to streamline your internationalization workflow.", F = () => "Produits", I = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", L = () => "Des outils et services pour rationaliser votre flux de travail d'internationalisation.", R = () => "Productos", z = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", B = () => "Herramientas y servicios para agilizar tu flujo de trabajo de internacionalización.", V = () => "Produkte", H = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", U = () => "Tools und Services zur Optimierung Ihres Internationalisierungs-Worflows.", W = () => "Prodotti", G = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", K = () => "Strumenti e servizi per snellire il flusso di lavoro dell'internazionalizzazione.", q = () => "Produtos", re = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", J = () => "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.", Y = () => "产品", X = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", ie = () => "简化国际化工作流程的工具和服务。", ae = () => "製品", oe = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", se = () => "国際化ワークフローを合理化するためのツールとサービス。", ce = () => "제품", le = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", ue = () => "국제화 워크플로우를 간소화하기 위한 도구 및 서비스.", de = () => "Продукты", fe = () => "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.", pe = () => "Инструменты и услуги для оптимизации рабочего процесса интернационализации.", me = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? F(e) : n === "es" ? R(e) : n === "de" ? V(e) : n === "it" ? W(e) : n === "pt" ? q(e) : n === "zh" ? Y(e) : n === "ja" ? ae(e) : n === "ko" ? ce(e) : n === "ru" ? de(e) : M(e);
}), he = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? I(e) : n === "es" ? z(e) : n === "de" ? H(e) : n === "it" ? G(e) : n === "pt" ? re(e) : n === "zh" ? X(e) : n === "ja" ? oe(e) : n === "ko" ? le(e) : n === "ru" ? fe(e) : N(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? L(e) : n === "es" ? B(e) : n === "de" ? U(e) : n === "it" ? K(e) : n === "pt" ? J(e) : n === "zh" ? ie(e) : n === "ja" ? se(e) : n === "ko" ? ue(e) : n === "ru" ? pe(e) : P(e);
}), ge = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/MockBanner.tsx", _e = () => t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: he()
}, void 0, !1, {
	fileName: ge,
	lineNumber: 4,
	columnNumber: 3
}, void 0), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/products/ProductsHeader.tsx";
function ve() {
	return t(e, { children: [
		t(_e, {}, void 0, !1, {
			fileName: Q,
			lineNumber: 7,
			columnNumber: 7
		}, this),
		t("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: me()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 8,
			columnNumber: 7
		}, this),
		t("p", {
			className: "mb-10 text-muted-foreground",
			children: Z()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 11,
			columnNumber: 7
		}, this)
	] }, void 0, !0, {
		fileName: Q,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var ye = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function be({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: ye,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/products/ProductsHeader.wrapper.tsx";
function xe() {
	return t(be, { children: t(ve, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { xe as default };

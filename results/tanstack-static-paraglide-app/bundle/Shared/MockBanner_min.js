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
	!c && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return _(t);
			}
		}
		let e = g(n);
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
	!c && typeof window < "u" && window.location?.href && (u = M(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, w();
	} else if (t === "baseLocale") continue;
	else if (P(t) && N.has(t)) {
		let n = N.get(t);
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
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function T() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function E() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = g(e), T(), C;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = v(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var k, A;
function j(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let r = v(new URL(t, "http://example.com")), i = D(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (y(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return k = t, A = o, o;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", I = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", L = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", R = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", z = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", B = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", V = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", H = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", U = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", W = () => "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.", G = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/MockBanner.tsx", q = () => t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: G()
}, void 0, !1, {
	fileName: K,
	lineNumber: 4,
	columnNumber: 3
}, void 0), J = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function Y({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: J,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var X = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/MockBanner.wrapper.tsx";
function Z() {
	return t(Y, { children: t(q, {}, void 0, !1, {
		fileName: X,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: X,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Z as default };

import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i } from "react/jsx-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", l = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = I(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = A();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (R(t) && L.has(t)) {
			let e = L.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return x(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = I(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${l}`;
		document.cookie = t, O();
	} else if (t === "baseLocale") continue;
	else if (R(t) && L.has(t)) {
		let n = L.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, y = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function S(e) {
	return e;
}
function C(e, t) {
	return e.exec(t.href);
}
var w = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), T = RegExp(`(?:^|;\\s*)${w}=([^;]*)`), E = Symbol(), D = E;
function O() {
	D = E;
}
function k() {
	typeof queueMicrotask == "function" ? queueMicrotask(O) : Promise.resolve().then(O);
}
function A() {
	if (typeof document > "u") return;
	if (D !== E) return D;
	let e = document.cookie.match(T)?.[1];
	return D = b(e), k(), D;
}
function j(e) {
	return M(e);
}
function M(e) {
	let t = S(typeof e == "string" ? new URL(e, y()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && b(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), S(t);
}
var N, P;
function F(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (N === t) return P;
	let n = S(new URL(t, "http://example.com")), r = j(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (C(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return N = t, P = a, a;
}
function I(e) {
	let t = F(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var L = /* @__PURE__ */ new Map();
function R(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var z = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", B = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", V = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", H = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", U = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", W = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", G = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", K = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", q = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", J = () => "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : n === "ru" ? J(e) : z(e);
}), X = () => i("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: Y()
});
function Z() {
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
function Q(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function $({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Q("AppRoot", c);
	}, [c]), e(() => {
		v(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Z();
	}, []), i(r, { children: o });
}
function ee({ children: e }) {
	return i($, { children: e });
}
function te() {
	return i(ee, { children: i(X, {}) });
}
export { te as default };

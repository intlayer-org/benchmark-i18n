import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
var r = {}, i = [
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
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
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
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = M(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, w();
	} else if (t === "baseLocale") continue;
	else if (P(t) && N.has(t)) {
		let n = N.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
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
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = v(new URL(t, "http://example.com")), i = D(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (y(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return k = t, A = o, o;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Everything you need to know about i18n Benchmark.", I = () => "Tout ce que vous devez savoir sur i18n Benchmark.", L = () => "Todo lo que necesitas saber sobre i18n Benchmark.", R = () => "Alles, was Sie über i18n Benchmark wissen müssen.", z = () => "Tutto quello che c'è da sapere su i18n Benchmark.", B = () => "Tudo o que você precisa saber sobre o i18n Benchmark.", V = () => "关于 i18n Benchmark 您需要了解的一切。", H = () => "i18n Benchmarkについて知っておくべきすべてのこと。", U = () => "i18n Benchmark에 대해 알아야 할 모든 것.", W = () => "Все, что вам нужно знать об i18n Benchmark.", G = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "Frequently Asked Questions", q = () => "Foire aux questions", te = () => "Preguntas frecuentes", J = () => "Häufig gestellte Fragen", Y = () => "Domande frequenti", X = () => "Perguntas Frequentes", Z = () => "常见问题", Q = () => "よくある質問", ne = () => "자주 묻는 질문", re = () => "Часто задаваемые вопросы", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? q(e) : n === "es" ? te(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : n === "ru" ? re(e) : K(e);
}), ae = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", oe = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", se = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", ce = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", le = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", ue = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", de = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", fe = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", pe = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", $ = () => "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.", me = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : n === "ru" ? $(e) : ae(e);
}), he = () => t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: me()
});
function ge() {
	return n(e, { children: [
		t(he, {}),
		t("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: ie()
		}),
		t("p", {
			className: "mb-10 text-muted-foreground",
			children: G()
		})
	] });
}
m("en", { reload: !1 });
function _e({ children: n }) {
	return t(e, { children: n });
}
function ve() {
	return t(_e, { children: t(ge, {}) });
}
export { ve as default };

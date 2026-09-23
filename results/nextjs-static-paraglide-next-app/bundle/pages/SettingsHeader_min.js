import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsxDEV as i } from "react/jsx-dev-runtime";
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
], c = "PARAGLIDE_LOCALE", ee = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	let e = l;
	!d && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return v(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var h = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], a = l;
	!d && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (F(t) && P.has(t)) {
		let n = P.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!d && n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function E() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function D() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), E(), w;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = y(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var A, j;
function M(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = y(new URL(t, "http://example.com")), r = O(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of u) if (b(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return A = t, j = a, a;
}
function N(e) {
	let t = M(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "Settings", L = () => "Paramètres", R = () => "Ajustes", z = () => "Einstellungen", B = () => "Impostazioni", V = () => "Configurações", H = () => "设置", U = () => "設定", W = () => "설정", G = () => "Настройки", K = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", J = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", Y = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", re = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", X = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", ie = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", ae = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", oe = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", se = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", ce = () => "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.", le = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? re(e) : n === "it" ? X(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : q(e);
}), ue = () => "Manage your account preferences and configuration.", de = () => "Gérez vos préférences de compte et votre configuration.", fe = () => "Gestiona las preferencias y la configuración de tu cuenta.", pe = () => "Verwalten Sie Ihre Kontoeinstellungen und Konfigurationen.", me = () => "Gestisci le preferenze del tuo account e la configurazione.", he = () => "Gerencie as preferências de sua conta e a configuração.", ge = () => "管理您的账户偏好和配置。", _e = () => "アカウントの優先設定と構成を管理します。", ve = () => "계정 기본 설정 및 구성을 관리합니다.", ye = () => "Управляйте настройками и конфигурацией своего аккаунта.", be = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
}), xe = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/MockBanner.tsx", Se = () => i("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: le()
}, void 0, !1, {
	fileName: xe,
	lineNumber: 6,
	columnNumber: 3
}, void 0), Z = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/settings/SettingsHeader.tsx";
function Ce() {
	return i(r, { children: [
		i(Se, {}, void 0, !1, {
			fileName: Z,
			lineNumber: 9,
			columnNumber: 7
		}, this),
		i("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: K()
		}, void 0, !1, {
			fileName: Z,
			lineNumber: 10,
			columnNumber: 7
		}, this),
		i("p", {
			className: "mb-8 text-muted-foreground mr-10",
			children: be()
		}, void 0, !1, {
			fileName: Z,
			lineNumber: 13,
			columnNumber: 7
		}, this)
	] }, void 0, !0, {
		fileName: Z,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
function we() {
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
var Te = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function Ee({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Q("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		we();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: Te,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var De = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Oe({ children: e }) {
	return i(Ee, { children: e }, void 0, !1, {
		fileName: De,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/settings/SettingsHeader.wrapper.tsx";
function ke() {
	return i(Oe, { children: i(Ce, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { ke as default };

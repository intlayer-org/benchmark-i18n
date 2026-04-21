import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", ee = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f, p;
function m(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function h(e) {
	let t = m(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var g = void 0, _ = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var v, y = !1, b = () => {
	if (g) {
		let e = g?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!_ && typeof window < "u" && window.location?.href && (e = h(window.location.href));
	let t = x(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return y || (v = t, y = !0, C(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function x(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && v !== void 0) n = v;
		else if (O(t) && D.has(t)) {
			let e = D.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return T(t);
			}
		}
		let e = w(n);
		if (e) return e;
	}
}
var S = (e) => {
	e ? window.location.href = e : window.location.reload();
}, C = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = b();
	} catch {}
	let i = [], a = u;
	!_ && typeof window < "u" && window.location?.href && (a = h(window.location.href));
	for (let t of a) if (t === "globalVariable") v = e;
	else if (t === "cookie") {
		if (_ || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (O(t) && D.has(t)) {
		let n = D.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!_ && n.reload && window.location && e !== r && S(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function w(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function T(e) {
	let t = w(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function E() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return w(e);
}
var D = /* @__PURE__ */ new Map();
function O(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var k = () => "Simple, Transparent Pricing", A = () => "Une tarification simple et transparente", j = () => "Precios simples y transparentes", M = () => "Einfache, transparente Preisgestaltung", N = () => "Prezzi Semplici e Trasparenti", P = () => "Preços Simples e Trasparentes", F = () => "简单透明的定价", I = () => "シンプルで透明な価格設定", L = () => "심플하고 투명한 요금제", R = () => "Простое и прозрачное ценообразование", z = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? k(e) : n === "fr" ? A(e) : n === "es" ? j(e) : n === "de" ? M(e) : n === "it" ? N(e) : n === "pt" ? P(e) : n === "zh" ? F(e) : n === "ja" ? I(e) : n === "ko" ? L(e) : R(e);
}), B = () => "Choose the plan that fits your team. No hidden fees.", V = () => "Choisissez l'offre qui convient à votre équipe. Pas de frais cachés.", H = () => "Elige el plan que se adapte a tu equipo. Sin cargos ocultos.", U = () => "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.", te = () => "Scegli il piano adatto al tuo team. Nessun costo nascosto.", W = () => "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.", G = () => "选择适合您团队的计划。无隐藏费用。", K = () => "チームに最適なプランをお選びください。隠れた費用はありません。", q = () => "팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다.", J = () => "Выберите план, который подходит вашей команде. Никаких скрытых комиссий.", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? B(e) : n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? te(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : J(e);
}), X = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", Z = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", Q = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", ne = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", re = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", ie = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", ae = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", oe = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", $ = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", se = () => "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? X(e) : n === "fr" ? Z(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? $(e) : se(e);
}), le = () => i("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: ce()
});
function ue() {
	return a(r, { children: [i(le, {}), a("div", {
		className: "mb-12 text-center",
		children: [i("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: z()
		}), i("p", {
			className: "text-muted-foreground",
			children: Y()
		})]
	})] });
}
function de() {
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
function fe(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function pe({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		fe("AppRoot", c);
	}, [c]), e(() => {
		C(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		de();
	}, []), i(r, { children: a });
}
function me({ children: e }) {
	return i(pe, { children: e });
}
function he() {
	return i(me, { children: i(ue, {}) });
}
export { he as default };

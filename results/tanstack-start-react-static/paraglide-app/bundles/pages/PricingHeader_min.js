import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
var r = {}, i = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l, u;
function d(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of c) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return l = t, u = i, i;
}
function f(e) {
	let t = d(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var p = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = S();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
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
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let i = [], c = s;
	typeof window < "u" && window.location?.href && (c = f(window.location.href));
	for (let t of c) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return b(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
//#endregion
//#region src/paraglide/messages/pricing_header_simpletransparentpricing2.js
var T = () => "Simple, Transparent Pricing", E = () => "Einfache, transparente Preisgestaltung", D = () => "Une tarification simple et transparente", O = () => "Precios simples y transparentes", k = () => "シンプルで透明な価格設定", A = () => "简单透明的定价", j = () => "심플하고 투명한 요금제", M = () => "Prezzi Semplici e Trasparenti", N = () => "Preços Simples e Trasparentes", P = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? T(e) : n === "de" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "ja" ? k(e) : n === "zh" ? A(e) : n === "ko" ? j(e) : n === "it" ? M(e) : N(e);
}), F = () => "Choose the plan that fits your team. No hidden fees.", ee = () => "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.", I = () => "Choisissez l'offre qui convient à votre équipe. Pas de frais cachés.", L = () => "Elige el plan que se adapte a tu equipo. Sin cargos ocultos.", R = () => "チームに最適なプランをお選びください。隠れた費用はありません。", z = () => "选择适合您团队的计划。无隐藏费用。", B = () => "팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다.", V = () => "Scegli il piano adatto al tuo team. Nessun costo nascosto.", H = () => "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.", U = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? F(e) : n === "de" ? ee(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "ja" ? R(e) : n === "zh" ? z(e) : n === "ko" ? B(e) : n === "it" ? V(e) : H(e);
}), W = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", G = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", K = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", q = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", J = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", Y = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", X = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", Z = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", Q = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? W(e) : n === "de" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "ja" ? J(e) : n === "zh" ? Y(e) : n === "ko" ? X(e) : n === "it" ? Z(e) : Q(e);
}), te = () => /* @__PURE__ */ t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: $()
});
//#endregion
//#region src/components/pages/pricing/PricingHeader.tsx
function ne() {
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t(te, {}), /* @__PURE__ */ n("div", {
		className: "mb-12 text-center",
		children: [/* @__PURE__ */ t("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: P()
		}), /* @__PURE__ */ t("p", {
			className: "text-muted-foreground",
			children: U()
		})]
	})] });
}
//#endregion
//#region scripts/Wrapper.tsx
y("en", { reload: !1 });
function re({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/pricing/PricingHeader.wrapper.tsx
function ie() {
	return /* @__PURE__ */ t(re, { children: /* @__PURE__ */ t(ne, {}) });
}
//#endregion
export { ie as default };

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
var T = () => "Simple, Transparent Pricing", E = () => "Une tarification simple et transparente", D = () => "Precios simples y transparentes", O = () => "Einfache, transparente Preisgestaltung", k = () => "Prezzi Semplici e Trasparenti", A = () => "Preços Simples e Trasparentes", j = () => "简单透明的定价", M = () => "シンプルで透明な価格設定", N = () => "심플하고 투명한 요금제", P = () => "Простое и прозрачное ценообразование", F = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "Choose the plan that fits your team. No hidden fees.", L = () => "Choisissez l'offre qui convient à votre équipe. Pas de frais cachés.", R = () => "Elige el plan que se adapte a tu equipo. Sin cargos ocultos.", z = () => "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.", ee = () => "Scegli il piano adatto al tuo team. Nessun costo nascosto.", B = () => "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.", V = () => "选择适合您团队的计划。无隐藏费用。", H = () => "チームに最適なプランをお選びください。隠れた費用はありません。", U = () => "팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다.", W = () => "Выберите план, который подходит вашей команде. Никаких скрытых комиссий.", G = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? ee(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", q = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", J = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", Y = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", X = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", Z = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", Q = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", $ = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", te = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", ne = () => "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.", re = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? $(e) : n === "ko" ? te(e) : ne(e);
}), ie = () => t("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: re()
});
function ae() {
	return n(e, { children: [t(ie, {}), n("div", {
		className: "mb-12 text-center",
		children: [t("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: F()
		}), t("p", {
			className: "text-muted-foreground",
			children: G()
		})]
	})] });
}
y("en", { reload: !1 });
function oe({ children: n }) {
	return t(e, { children: n });
}
function se() {
	return t(oe, { children: t(ae, {}) });
}
export { se as default };

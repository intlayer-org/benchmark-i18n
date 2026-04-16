import { Profiler as e, useEffect as t } from "react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
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
], u = [], d, f;
function p(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (d === t) return f;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of u) if (new o(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return d = t, f = r, r;
}
function m(e) {
	let t = p(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return w(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = l;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function w(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function T() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${c}=([^;]+)`))?.[2];
	return C(e);
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "Simple, Transparent Pricing", k = () => "Une tarification simple et transparente", A = () => "Precios simples y transparentes", j = () => "Einfache, transparente Preisgestaltung", M = () => "Prezzi Semplici e Trasparenti", N = () => "Preços Simples e Trasparentes", P = () => "简单透明的定价", F = () => "シンプルで透明な価格設定", I = () => "심플하고 투명한 요금제", L = () => "Простое и прозрачное ценообразование", R = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? O(e) : n === "fr" ? k(e) : n === "es" ? A(e) : n === "de" ? j(e) : n === "it" ? M(e) : n === "pt" ? N(e) : n === "zh" ? P(e) : n === "ja" ? F(e) : n === "ko" ? I(e) : L(e);
}), z = () => "Choose the plan that fits your team. No hidden fees.", B = () => "Choisissez l'offre qui convient à votre équipe. Pas de frais cachés.", V = () => "Elige el plan que se adapte a tu equipo. Sin cargos ocultos.", H = () => "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.", te = () => "Scegli il piano adatto al tuo team. Nessun costo nascosto.", U = () => "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.", W = () => "选择适合您团队的计划。无隐藏费用。", G = () => "チームに最適なプランをお選びください。隠れた費用はありません。", K = () => "팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다.", q = () => "Выберите план, который подходит вашей команде. Никаких скрытых комиссий.", J = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? z(e) : n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? te(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : q(e);
}), Y = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", X = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", Z = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", Q = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", ne = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", re = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", ie = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", ae = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", oe = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", $ = () => "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.", se = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Y(e) : n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? Q(e) : n === "it" ? ne(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : $(e);
}), ce = () => r("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: se()
});
function le() {
	return i(n, { children: [r(ce, {}), i("div", {
		className: "mb-12 text-center",
		children: [r("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: R()
		}), r("p", {
			className: "text-muted-foreground",
			children: J()
		})]
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
function de(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function fe({ children: n }) {
	let i = a().locale ?? "en";
	return t(() => {
		S(i), document.documentElement.lang = i;
	}, [i]), t(() => {
		ue();
	}, []), r(e, {
		id: "AppRoot",
		onRender: de,
		children: n
	});
}
function pe({ children: e }) {
	return r(fe, { children: e });
}
function me() {
	return r(pe, { children: r(le, {}) });
}
export { me as default };

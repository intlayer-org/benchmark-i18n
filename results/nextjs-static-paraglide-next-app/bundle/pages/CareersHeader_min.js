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
		let t = `${l}=${e}; path=/; max-age=${ee}`;
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
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function S(e) {
	return e;
}
function C(e, t) {
	return e.exec(t.href);
}
var w = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), T = RegExp(`(?:^|;\\s*)${w}=([^;]*)`), E = Symbol(), D = E;
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
		for (let t of d) if (C(new s(t.match, e.href), e)) {
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
var z = () => "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.", B = () => "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe privilégiant le télétravail qui valorise l'impact, la transparence et l'apprentissage continu.", V = () => "Únete a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo que prioriza el trabajo remoto y valora el impacto, la transparencia y el aprendizaje continuo.", H = () => "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt.", U = () => "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team che lavora principalmente in remoto e che valorizza l'impatto, la trasparenza e l'apprendimento continuo.", W = () => "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valoriza o impacto, a transparência e o aprendizado contínuo.", G = () => "加入我们改进国际化生态系统的使命。我们是一个远程优先的团队，重视影响力、透明度和持续学习。", K = () => "国際化エコシステムを改善するという私たちのミッションに参加してください。私たちは、影響、透明性、継続的な学習を重視するリモートファーストのチームです。", q = () => "국제화 생태계를 개선하기 위한 우리의 사명에 동참하세요. 저희는 영향력, 투명성 및 지속적인 학습을 소중히 여기는 원격 근무 우선 팀입니다.", J = () => "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение.", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : n === "ru" ? J(e) : z(e);
}), X = () => "Careers", te = () => "Carrières", Z = () => "Carreras", Q = () => "Karriere", ne = () => "Carriere", re = () => "Carreiras", ie = () => "职业生涯", ae = () => "採用情報", oe = () => "채용", se = () => "Карьера", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? te(e) : n === "es" ? Z(e) : n === "de" ? Q(e) : n === "it" ? ne(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : n === "ru" ? se(e) : X(e);
}), le = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", ue = () => "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.", de = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", fe = () => "⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.", pe = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", me = () => "⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.", he = () => "⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。", ge = () => "⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。", _e = () => "⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.", ve = () => "⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => i("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: ye()
});
function $() {
	return a(r, { children: [
		i(be, {}),
		i("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: ce()
		}),
		i("p", {
			className: "mb-4 text-muted-foreground mr-10",
			children: Y()
		})
	] });
}
function xe() {
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
function Se(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Ce({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Se("AppRoot", c);
	}, [c]), e(() => {
		v(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		xe();
	}, []), i(r, { children: a });
}
function we({ children: e }) {
	return i(Ce, { children: e });
}
function Te() {
	return i(we, { children: i($, {}) });
}
export { Te as default };

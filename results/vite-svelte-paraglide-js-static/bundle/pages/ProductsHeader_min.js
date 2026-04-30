import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = {}, n = [
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
], r = "PARAGLIDE_LOCALE", i = 3456e4, a = [
	"cookie",
	"globalVariable",
	"baseLocale"
], o = [], s, c;
function l(e) {
	if (o.length === 0) return;
	let n = typeof e == "string" ? e : e.href;
	if (s === n) return c;
	let r = new URL(n, "http://dummy.com"), i;
	for (let e of o) if (new t(e.match, r.href).exec(r.href)) {
		i = e;
		break;
	}
	return s = n, c = i, i;
}
function u(e) {
	let t = l(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : a;
}
var d = void 0, f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	if (d) {
		let e = d?.getStore()?.locale;
		if (e) return e;
	}
	let e = a;
	!f && typeof window < "u" && window.location?.href && (e = u(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return b(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, o;
	try {
		o = h();
	} catch {}
	let s = [], c = a;
	!f && typeof window < "u" && window.location?.href && (c = u(window.location.href));
	for (let t of c) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${r}=${e}; path=/; max-age=${i}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let l = () => {
		!f && n.reload && window.location && e !== o && _(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		l();
	});
	l();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of n) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${r}=([^;]+)`))?.[2];
	return y(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", T = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", E = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", D = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", O = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", k = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", A = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", j = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", M = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", N = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", P = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Products", I = () => "Produits", L = () => "Productos", R = () => "Produkte", z = () => "Prodotti", ee = () => "Produtos", B = () => "产品", V = () => "製品", H = () => "Products", U = () => "Продукты", W = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? ee(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "Tools and services to streamline your internationalization workflow.", K = () => "Outils et services pour fluidifier votre flux i18n.", q = () => "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.", J = () => "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.", Y = () => "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.", X = () => "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.", Z = () => "用于简化国际化工作流程的工具和服务。", Q = () => "国際化ワークフローを効率化するためのツールとサービス。", $ = () => "Tools and services to streamline your internationalization workflow.", te = () => "Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.", ne = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? $(e) : te(e);
}), re = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function ie(t, n) {
	e.push(n, !1), e.init();
	var r = re(), i = e.child(r, !0);
	e.reset(r), e.template_effect((t) => e.set_text(i, t), [() => P()]), e.append(t, r), e.pop();
}
var ae = e.from_html("<!> <h1 class=\"mb-2 text-3xl font-bold text-foreground\"> </h1> <p class=\"mb-10 text-muted-foreground\"> </p>", 1);
function oe(t, n) {
	e.push(n, !1), e.init();
	var r = ae(), i = e.first_child(r);
	ie(i, {});
	var a = e.sibling(i, 2), o = e.child(a, !0);
	e.reset(a);
	var s = e.sibling(a, 2), c = e.child(s, !0);
	e.reset(s), e.template_effect((t, n) => {
		e.set_text(o, t), e.set_text(c, n);
	}, [() => W(), () => ne()]), e.append(t, r), e.pop();
}
export { oe as default };

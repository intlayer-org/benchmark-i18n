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
], o = [], s = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var c, l = !1, u = () => {
	let e = a;
	!s && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = d(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return l || (c = t, l = !0, p(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function d(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && c !== void 0) n = c;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return h(t);
			}
		}
		let e = m(n);
		if (e) return e;
	}
}
var f = (e) => {
	e ? window.location.href = e : window.location.reload();
}, p = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, o;
	try {
		o = u();
	} catch {}
	let l = [], d = a;
	!s && typeof window < "u" && window.location?.href && (d = A(window.location.href));
	for (let t of d) if (t === "globalVariable") c = e;
	else if (t === "cookie") {
		if (s || typeof document > "u" || typeof window > "u") continue;
		let t = `${r}=${e}; path=/; max-age=${i}`;
		document.cookie = t, S();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), l.push(r));
		}
	}
	let p = () => {
		!s && n.reload && window.location && e !== o && f(void 0);
	};
	if (l.length) return Promise.all(l).then(() => {
		p();
	});
	p();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function m(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of n) if (e.toLowerCase() === t) return e;
}
function h(e) {
	let t = m(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function g(e) {
	return e;
}
function _(e, t) {
	return e.exec(t.href);
}
var v = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), y = RegExp(`(?:^|;\\s*)${v}=([^;]*)`), b = Symbol(), x = b;
function S() {
	x = b;
}
function C() {
	typeof queueMicrotask == "function" ? queueMicrotask(S) : Promise.resolve().then(S);
}
function w() {
	if (typeof document > "u") return;
	if (x !== b) return x;
	let e = document.cookie.match(y)?.[1];
	return x = m(e), C(), x;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = g(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && m(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), g(t);
}
var D, O;
function k(e) {
	if (o.length === 0) return;
	let n = typeof e == "string" ? e : e.href;
	if (D === n) return O;
	let r = g(new URL(n, "http://example.com")), i = T(r), a = i.href === r.href ? [r] : [r, i], s;
	for (let e of a) {
		for (let n of o) if (_(new t(n.match, e.href), e)) {
			s = n;
			break;
		}
		if (s) break;
	}
	return D = n, O = s, s;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : a;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", P = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", F = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", I = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", L = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", R = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", z = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", B = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", V = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", H = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", te = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : N(e);
}), U = () => "Tools and services to streamline your internationalization workflow.", W = () => "Outils et services pour fluidifier votre flux i18n.", G = () => "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.", K = () => "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.", q = () => "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.", J = () => "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.", Y = () => "用于简化国际化工作流程的工具和服务。", X = () => "国際化ワークフローを効率化するためのツールとサービス。", Z = () => "Tools and services to streamline your internationalization workflow.", Q = () => "Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.", ne = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? q(e) : n === "pt" ? J(e) : n === "zh" ? Y(e) : n === "ja" ? X(e) : n === "ko" ? Z(e) : n === "ru" ? Q(e) : U(e);
}), re = () => "Products", ie = () => "Produits", ae = () => "Productos", oe = () => "Produkte", $ = () => "Prodotti", se = () => "Produtos", ce = () => "产品", le = () => "製品", ue = () => "Products", de = () => "Продукты", fe = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ie(e) : n === "es" ? ae(e) : n === "de" ? oe(e) : n === "it" ? $(e) : n === "pt" ? se(e) : n === "zh" ? ce(e) : n === "ja" ? le(e) : n === "ko" ? ue(e) : n === "ru" ? de(e) : re(e);
}), pe = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function me(t, n) {
	e.push(n, !1), e.init();
	var r = pe(), i = e.only_child(r, !0);
	e.template_effect((t) => e.set_text(i, t), [() => te()]), e.append(t, r), e.pop();
}
var he = e.from_html("<!> <h1 class=\"mb-2 text-3xl font-bold text-foreground\"> </h1> <p class=\"mb-10 text-muted-foreground\"> </p>", 1);
function ge(t, n) {
	e.push(n, !1), e.init();
	var r = he(), i = e.first_child(r);
	me(i, {});
	var a = e.sibling(i, 2), o = e.only_child(a, !0), s = e.sibling(a, 2), c = e.only_child(s, !0);
	e.template_effect((t, n) => {
		e.set_text(o, t), e.set_text(c, n);
	}, [() => fe(), () => ne()]), e.append(t, r), e.pop();
}
export { ge as default };

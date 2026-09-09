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
}), U = () => "Choose the plan that fits your team. No hidden fees.", W = () => "Choisissez l'offre adaptée à votre équipe. Sans frais cachés.", G = () => "Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.", K = () => "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.", q = () => "Scegli il piano più adatto al tuo team. Nessun costo nascosto.", J = () => "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.", Y = () => "选择适合您团队的计划。无隐藏费用。", X = () => "チームに合ったプランをお選びください。隠れた費用はありません。", Z = () => "Choose the plan that fits your team. No hidden fees.", Q = () => "Выберите подходящий план для вашей команды. Никаких скрытых комиссий.", ne = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? q(e) : n === "pt" ? J(e) : n === "zh" ? Y(e) : n === "ja" ? X(e) : n === "ko" ? Z(e) : n === "ru" ? Q(e) : U(e);
}), re = () => "Simple, Transparent Pricing", ie = () => "Tarification simple et transparente", ae = () => "Precios sencillos y transparentes", oe = () => "Einfache, transparente Preisgestaltung", $ = () => "Prezzi semplici e trasparenti", se = () => "Preços simples e transparentes", ce = () => "简单透明的定价", le = () => "シンプルで透明性の高い価格設定", ue = () => "Simple, Transparent Pricing", de = () => "Простые и прозрачные цены", fe = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ie(e) : n === "es" ? ae(e) : n === "de" ? oe(e) : n === "it" ? $(e) : n === "pt" ? se(e) : n === "zh" ? ce(e) : n === "ja" ? le(e) : n === "ko" ? ue(e) : n === "ru" ? de(e) : re(e);
}), pe = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function me(t, n) {
	e.push(n, !1), e.init();
	var r = pe(), i = e.only_child(r, !0);
	e.template_effect((t) => e.set_text(i, t), [() => te()]), e.append(t, r), e.pop();
}
var he = e.from_html("<!> <div class=\"mb-12 text-center\"><h1 class=\"mb-3 text-3xl font-bold text-foreground\"> </h1> <p class=\"text-muted-foreground\"> </p></div>", 1);
function ge(t, n) {
	e.push(n, !1), e.init();
	var r = he(), i = e.first_child(r);
	me(i, {});
	var a = e.sibling(i, 2), o = e.child(a), s = e.only_child(o, !0), c = e.sibling(o, 2), l = e.only_child(c, !0);
	e.reset(a), e.template_effect((t, n) => {
		e.set_text(s, t), e.set_text(l, n);
	}, [() => fe(), () => ne()]), e.append(t, r), e.pop();
}
export { ge as default };
